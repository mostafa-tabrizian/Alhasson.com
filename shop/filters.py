from dataclasses import fields
from django_filters import rest_framework as filters
from .models import *

class ProductFilter(filters.FilterSet):
    class Meta:
        model = Product
        fields = {
            'id': ['exact'], 
            'title': ['icontains'],
            'slug': ['icontains', 'exact'],
        }
        
class OrderFilter(filters.FilterSet):
    class Meta:
        model = Order
        fields = {
            "id": ['exact'],
            "purchaser": ['exact'],
            "price": ['gte', 'lte'],
            "created_at": ['gte', 'lte'],
            "status": ['exact'],
        }