from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *

admin.site.site_header = "Quizzland Admin Panel"

class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'last_name', 'first_name')
    list_filter = ('blocked', )
    search_fields = ['username', 'email', 'last_name', 'first_name']
    
    fieldsets = (
        *UserAdmin.fieldsets,  # original form fieldsets, expanded
        (                      # new fieldset added on to the bottom
            'More',  # group heading of your choice; set to None for a blank space instead of a header
            {
                'fields': (
                    'order_history',
                    'address',
                    'postal_code',
                    'phone_number',
                ),
            },
        ),
    )
    
admin.site.register(CustomUser, CustomUserAdmin)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'public', 'available_count', 'price', 'discount', 'views_monthly', 'sold_monthly', 'created_at')
    list_filter = ('public', 'created_at')
    search_fields = ['title', 'slug', 'description']
    
@admin.register(Coupon)
class CouponAdmin(admin.ModelAdmin):
    list_display =('code', 'active', 'created_at', 'expire_at', 'used_at')
    list_filter = ('active', 'created_at', 'expire_at', 'used_at')
    search_fields = ('id' ,'code')