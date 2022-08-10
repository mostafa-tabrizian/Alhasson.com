from django.urls import path, re_path
from .views import *
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('api/token/obtain/', TokenObtainPairView.as_view(serializer_class=CustomJWTSerializer), name='token_create'),  # override sjwt stock token
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('api/blacklist/', LogoutAndBlacklistRefreshTokenForUserView.as_view(), name='blacklist'),
    
    path('api/google', auth_google),
    path("api/recaptcha", verify_recaptcha),
    
    path('api/user', user_data),
    path("api/user/update", user_update),
    path("api/user/orders", user_orders),
    
    path("api/order/submit", order_submit),
    
    path("api/coupon", coupon),
    
    # path('api/zarinpal/request/', send_request, name='request'),
    # path('api/zarinpal/verify/', verify , name='verify'),
    
    path('', index),
    path('search/', index), 
    path('login/', index),
    
    path('checkout/cart/', index),
    path('checkout/payment/', index),
    
    path('profile/', index),
    path('profile/edit/', index),
    path('profile/orders/', index),
    
    path('<product_slug>', index),
    path('404', index),
]