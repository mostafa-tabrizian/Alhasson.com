import datetime
from django.db import models
from ckeditor.fields import RichTextField
from django.contrib.auth.models import AbstractUser

Gender = (
    ('Male', 'male'),
    ('Female', 'female')
)   

class CustomUser(AbstractUser):
    blocked = models.BooleanField(default=False)
    avatar = models.CharField(blank=True, null=True, max_length=600, default='{"accessory":"shades","body":"chest","circleColor":"blue","clothing":"tankTop","clothingColor":"red","eyebrows":"raised","eyes":"simple","faceMask":false,"faceMaskColor":"white","facialHair":"none","graphic":"none","hair":"none","hairColor":"pink","hat":"none","hatColor":"blue","lashes":false,"lipColor":"green","mask":true,"mouth":"serious","skinTone":"light"}')
    bio = models.CharField(blank=True, null=True, max_length=255)
    birthday_date = models.DateField(blank=True, null=True)
    gender = models.CharField(blank=True, null=True, max_length=7, choices=Gender)
    points = models.IntegerField(default=0)
    most_played_categories = models.TextField(blank=True, null=True, max_length=9000)
    played_history = models.TextField(blank=True, null=True, default='_0', max_length=9000)
    liked_quizzes = models.TextField(blank=True, null=True, default='_0', max_length=9000)
    watch_list = models.TextField(blank=True, null=True, default='_0', max_length=9000)
    
    def __str__(self):
        return str(self.email)

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
    
    description = RichTextField(blank=False, help_text='توضیحات')
    
    views_total = models.IntegerField(default=0, blank=False)
    views_monthly = models.IntegerField(default=0, blank=False)
    
    sold_total = models.IntegerField(default=0, blank=False)
    sold_monthly = models.IntegerField(default=0, blank=False)

    created_at = models.DateTimeField(default=datetime.datetime.now, blank=False)
    updated_at = models.DateTimeField(default=datetime.datetime.now, blank=False)
    
    def __str__(self):
        return f'{self.title}'
    
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