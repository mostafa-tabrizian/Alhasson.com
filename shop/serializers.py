from rest_framework import serializers
from .models import *

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'public', 'available_count', 'title', 'slug', 'thumbnail', 'image', 'price', 'discount', 'description', 'views_total', 'views_monthly', 'sold_total', 'sold_monthly')