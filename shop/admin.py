from django.contrib import admin
from .models import *

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'public', 'available_count', 'price', 'discount', 'views_monthly', 'sold_monthly', 'created_at')
    list_filter = ('public', 'created_at')
    search_fields = ['title', 'slug', 'description']