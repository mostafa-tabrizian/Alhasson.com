import datetime
from django.db import models
from ckeditor.fields import RichTextField
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    blocked = models.BooleanField(default=False)
    order_history = models.TextField(blank=True, null=True, default='_0', max_length=9000)
    address = models.TextField(blank=True, null=True, max_length=255)
    postal_code = models.CharField(blank=True, null=True, max_length=20)
    phone_number = models.CharField(blank=True, null=True, max_length=15)
    
    def __str__(self):
        return f'{self.username} / {self.last_name} {self.first_name}'
class Product(models.Model):
    id = models.AutoField(primary_key=True)
    public = models.BooleanField(default=True, blank=False, help_text='به نمایش کشیده شود')
    available_count = models.IntegerField(blank=False, help_text='موجود در انبار')
        
    title = models.CharField(max_length=200, blank=False, help_text='عنوان برای نمایش')
    slug = models.CharField(max_length=200, blank=False, null=False, help_text='- عنوان به انگلیسی با فاصله -')
    
    thumbnail = models.ImageField(blank=False, upload_to='product/thumbnail/', help_text='تصویر کوچک محصول')
    image = models.ImageField(blank=False, upload_to='product/images/', help_text='تصویر بزرگ محصول')
    
    price = models.IntegerField(blank=False, help_text='قیمت')
    discount = models.IntegerField(default=0, blank=False, help_text='تخفیف')
    
    description = RichTextField(blank=False, help_text='توضیحات و درباره کتاب')
    weight = models.IntegerField(blank=False, help_text='وزن به گرم')
    pages = models.IntegerField(blank=False, help_text='تعداد صفحات')
    
    views_total = models.IntegerField(default=0, blank=False)
    views_monthly = models.IntegerField(default=0, blank=False)
    
    sold_total = models.IntegerField(default=0, blank=False)
    sold_monthly = models.IntegerField(default=0, blank=False)

    created_at = models.DateTimeField(default=datetime.datetime.now, blank=False)
    updated_at = models.DateTimeField(default=datetime.datetime.now, blank=False)
    
    def __str__(self):
        return f'{self.title}'
    
status = (
    ('pending', 'در حال بررسی'),
    ('preparing', 'در حال آماده سازی و ارسال'),
    ('delivered', 'تحویل پست گردید')           
)    

class Order(models.Model):
    id = models.AutoField(primary_key=True)
    purchaser = models.ForeignKey(CustomUser, on_delete=models.CASCADE, blank=False)
    purchased_items = models.TextField(blank=False)
    price = models.IntegerField(blank=False)
    discount = models.IntegerField(blank=False)
    created_at = models.DateTimeField(default=datetime.datetime.now, blank=False)
    status = models.CharField(choices=status, default='pending', blank=False, max_length=30)
    
    def __str__(self):
        return f'{self.id}/{self.status}/{self.created_at}'
    
class Coupon(models.Model):
    id = models.AutoField(primary_key=True)
    active = models.BooleanField(default=True, help_text='فعال')
    code = models.CharField(max_length=255, blank=False, help_text='کد تخفیف')
    discount_amount = models.IntegerField(blank=False, help_text='مقدار درصد تخفیف')
    expire_at = models.DateTimeField(blank=True, null=True, help_text='تاریخ انقضا کد')
    created_at = models.DateTimeField(default=datetime.datetime.now, blank=False, help_text='تاریخ ایجاد کد')
    used_at = models.DateTimeField(blank=True, null=True, help_text='تاریخ استفاده کردن از کد')
    
    def __str__(self):
        return f'Code:{self.code} Amount:{self.discount_amount}%'