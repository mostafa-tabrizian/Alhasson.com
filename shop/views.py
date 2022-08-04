import datetime, json, requests, random
import re
from tokenize import String
from decouple import config

from .models import *
from .serializers import *
from .filters import *

from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import viewsets, status
from rest_framework.views import APIView 
from rest_framework.permissions import BasePermission, AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.tokens import AccessToken
from django.shortcuts import redirect
from django.core.serializers.json import DjangoJSONEncoder

# MERCHANT = config('ZARINPAL_MERCHANT')
# ZP_API_REQUEST = "https://api.zarinpal.com/pg/v4/payment/request.json"
# ZP_API_VERIFY = "https://api.zarinpal.com/pg/v4/payment/verify.json"
# ZP_API_STARTPAY = "https://www.zarinpal.com/pg/StartPay/{authority}"
# amount = 11000  # Rial / Required
# description = "توضیحات مربوط به تراکنش را در این قسمت وارد کنید"  # Required
# email = 'email@example.com'  # Optional
# mobile = '09123456789'  # Optional
# CallbackURL = config('BASE_URL')+'/verify/'

class ProductView(viewsets.ModelViewSet):
    permission_classes = (BasePermission, )
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filterset_class = ProductFilter

class ObtainTokenPairWithColorView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = MyTokenObtainPairSerializer

class LogoutAndBlacklistRefreshTokenForUserView(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

def index(request, *args, **kwargs):
    return render(request, "shop/index.html")

def user_data(request, *args, **kwargs):
    if request.method == 'POST':
        access_token = json.loads(request.body.decode('utf-8'))['access_token']
        userObject = AccessToken(access_token)
        
        try:
            user = CustomUser.objects.get(id=userObject['user_id'])
            
            return HttpResponse(
                json.dumps(
                    {
                        'id': user.id,
                        'username': user.username,
                        'first_name': user.first_name,
                        'last_name': user.last_name,
                        'blocked': user.blocked,
                        "order_history": user.order_history,
                        "address": user.address,
                        "postal_code": user.postal_code,
                        "phone_number": user.phone_number,
                        'is_active': user.is_active,
                    }   
                )
            )
        except ObjectDoesNotExist:
            return HttpResponse('DoesNotExist')
        except Exception as e:
            return HttpResponse(e)
    
def checkAlreadyUserExists(username, email):
    return CustomUser.objects.filter(username=username).exists() or CustomUser.objects.filter(email=email).exists() 
    
def verify_recaptcha(res):
    response = res.GET.get('r')
    RECAPTCHA_SECRET = config('RECAPTCHA_SECRET', cast=str)
    
    params = {
        'secret': RECAPTCHA_SECRET,
        'response': response
    }
    req = requests.post('https://www.google.com/recaptcha/api/siteverify', params)
    
    return HttpResponse((json.loads(req.content))['success'])
    
def user_update(request, *args, **kwargs):
    print('--------------------------------')
    if request.method == 'PATCH':
        payload = json.loads(request.body.decode('utf-8'))
        
        access_token = AccessToken(payload['access_token'])
            
        try:
            user = CustomUser.objects.get(id=access_token['user_id'])
            
            newUsername = payload['username']
            username_length = len(newUsername)
            
            if username_length > 3:
                if checkAlreadyUserExists(newUsername, newUsername):
                    return HttpResponse('username already exists')
                else:
                    user.username = payload['username']
            elif username_length != 0:
                return HttpResponse('username too short')
            
            first_name = payload['first_name']
            if len(first_name):
                user.first_name = first_name
            last_name = payload['last_name']
            if len(last_name):
                user.last_name = last_name
            address = payload['address']
            if len(address):
                user.address = address
            postal_code = payload['postal_code']
            if len(postal_code):
                user.postal_code = postal_code
            phone_number = payload['phone_number']
            if len(phone_number):
                user.phone_number = phone_number
                
            user.save()
            return HttpResponse('success')
        
        except Exception as e:
            print(e)
            return HttpResponse(e)
    
def auth_google(request, *args, **kwargs):
    payload = json.loads(request.body.decode('utf-8'))
    
    if request.method == 'POST':
        r = requests.get('https://www.googleapis.com/oauth2/v2/userinfo', params={'access_token': payload['accessToken']})
        data = json.loads(r.text)

        if 'error' in data:
            content = {'message': 'wrong google token / this google token is already expired.'}
            return HttpResponse(content)

        def uniqueUsername():    
            # ugly function but im too tiered to do it
            try:
                selectUsername = f"{payload['username']}{random.randint(0, 9999)}"
                
                if CustomUser.objects.get(username=payload['username']):
                    return f"{selectUsername}_{payload['lastName']}"
                else:
                    return selectUsername
                
            except CustomUser.DoesNotExist:
                return payload['username']
        
        try:
            user = CustomUser.objects.get(email=data['email'])
            
            if user.is_active == False:
                return HttpResponse('inactive')
            
        except CustomUser.DoesNotExist:
            user = CustomUser()
            user.username = uniqueUsername()
            user.password = make_password(BaseUserManager().make_random_password())
            user.email = data['email']
            user.last_name = payload['lastName']
            user.first_name = payload['firstName']
            user.avatar = payload['avatar']
            user.save()

        token = RefreshToken.for_user(user)  # generate token without username & password
        response = {}
        response['username'] = user.username
        response['access_token'] = str(token.access_token)
        response['refresh_token'] = str(token)
        
        return HttpResponse(json.dumps(response))

# def send_request(request):
#     print('||||||||||||||||||||||||||||||||||||||')
#     req_data = {
#         "merchant_id": MERCHANT,
#         "amount": amount,
#         "callback_url": CallbackURL,
#         "description": description,
#         "metadata": {"mobile": mobile, "email": email}
#     }
#     req_header = {"accept": "application/json",
#                   "content-type": "application/json'"}
#     req = requests.post(url=ZP_API_REQUEST, data=json.dumps(
#         req_data), headers=req_header)
    
#     print(req.json())
#     print(req.json()['data'])
#     print(req.json()['data']['authority'])
    
#     authority = req.json()['data']['authority']
#     if len(req.json()['errors']) == 0:
#         return redirect(ZP_API_STARTPAY.format(authority=authority))
#     else:
#         e_code = req.json()['errors']['code']
#         e_message = req.json()['errors']['message']
#         return HttpResponse(f"Error code: {e_code}, Error Message: {e_message}")


# def verify(request):
#     print('||||||||||||||||||||||||||||||||||||||')
#     t_status = request.GET.get('Status')
#     t_authority = request.GET['Authority']
#     if request.GET.get('Status') == 'OK':
#         req_header = {"accept": "application/json",
#                       "content-type": "application/json'"}
#         req_data = {
#             "merchant_id": MERCHANT,
#             "amount": amount,
#             "authority": t_authority
#         }
#         req = requests.post(url=ZP_API_VERIFY, data=json.dumps(req_data), headers=req_header)
#         if len(req.json()['errors']) == 0:
#             t_status = req.json()['data']['code']
#             if t_status == 100:
#                 return HttpResponse('Transaction success.\nRefID: ' + str(
#                     req.json()['data']['ref_id']
#                 ))
#             elif t_status == 101:
#                 return HttpResponse('Transaction submitted : ' + str(
#                     req.json()['data']['message']
#                 ))
#             else:
#                 return HttpResponse('Transaction failed.\nStatus: ' + str(
#                     req.json()['data']['message']
#                 ))
#         else:
#             e_code = req.json()['errors']['code']
#             e_message = req.json()['errors']['message']
#             return HttpResponse(f"Error code: {e_code}, Error Message: {e_message}")
#     else:
#         return HttpResponse('Transaction failed or canceled by user')

def coupon(request, *args, **kwargs):
    if request.method == 'POST':
        payload = json.loads(request.body.decode('utf-8'))
        
        try:
            entered_code = payload['code']
            enteredCouponCode = Coupon.objects.get(code=entered_code)
            
            return HttpResponse(enteredCouponCode.discount_amount)
        
        except Coupon.DoesNotExist:
            return HttpResponse('کد تخفیف وجود ندارد')
        
        except Exception as e:
            return HttpResponse('error: ' + e)
        
def order_submit(request, *args, **kwargs):
    if request.method == 'POST':
        payload = json.loads(request.body.decode('utf-8'))
        
        user_access_token = AccessToken(payload['userAccessToken'])
            
        try:
            print('-----------------------------------')
            purchaserDetail = CustomUser.objects.get(id=user_access_token['user_id'])
            
            newOrder = Order()
            newOrder.purchaser = purchaserDetail
            newOrder.price = payload['price']
            newOrder.discount = payload['discount']
            
            final_list = ''
            for item in payload['purchased_items']:
                itemTitle = Product.objects.get(id=item['id']).title
                final_list += f' | {itemTitle} => {item["count"]} | '
            
            newOrder.purchased_items = final_list
            newOrder.save()
                        
            return HttpResponse('order completed successfully')
        except Exception as e:
            return HttpResponse(e)
        
def user_orders(request, *args, **kwargs):
    payload = json.loads(request.body.decode('utf-8'))
        
    user_access_token = AccessToken(payload['userAccessToken'])
        
    try:
        print('-----------------------------------')
        purchaserDetail = CustomUser.objects.get(id=user_access_token['user_id'])
        
        userOrders = Order.objects.filter(purchaser=purchaserDetail)

        values = []

        for order in userOrders:
            values.append(
                {
                    'id': order.id,
                    # 'purchased_items': order.purchased_items,
                    'price': order.price,
                    'discount': order.discount,
                    'created_at': order.created_at,
                    'status': order.status
                }
            )
        
        return HttpResponse(json.dumps(list(values), cls=DjangoJSONEncoder))
    
    except Exception as e:
        print('error----------------------------------------------------------------')
        return HttpResponse(e)

def handler404(request, exception):
    return render(request, 'shop/index.html', status=404)