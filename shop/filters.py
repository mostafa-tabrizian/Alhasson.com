from dataclasses import fields
from django_filters import rest_framework as filters
from .models import *

class CustomUserFilter(filters.FilterSet):
    class Meta:
        model = CustomUser
        fields = {
            'username': ['exact'],
            'email': ['exact'],
            'is_active': ['exact']
        }

class ProductFilter(filters.FilterSet):
    class Meta:
        model = Product
        fields = {
            'id': ['exact'], 
            'title': ['icontains'],
            'slug': ['icontains', 'exact'],
        }