from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.utils.translation import ugettext as _
    
from .models import *

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)
        return token

class CustomJWTSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        credentials = {
            'username': '',
            'password': attrs.get("password")
        }

        user_obj = CustomUser.objects.filter(email=attrs.get("username")).first() or CustomUser.objects.filter(username=attrs.get("username")).first()
        if user_obj:
            credentials['username'] = user_obj.username

        return super().validate(credentials)

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'public', 'available_count', 'title', 'slug', 'thumbnail', 'image', 'price', 'discount', 'description', 'weight', 'pages', 'views_total', 'views_monthly', 'sold_total', 'sold_monthly')
        read_only_fields = ('id', 'public', 'available_count', 'title', 'slug', 'thumbnail', 'image', 'price', 'discount', 'description', 'weight', 'pages', 'views_total', 'views_monthly', 'sold_total', 'sold_monthly')
        
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ("id", "purchaser", "purchased_items", "price", "discount", "created_at", "status")