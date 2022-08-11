import datetime
from django.db import models
from ckeditor.fields import RichTextField
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    order_history = models.TextField(blank=True, null=True, default='_0', max_length=9000, help_text='تاریخچه خرید')
    address = models.TextField(blank=True, null=True, max_length=255, help_text='آدرس')
    postal_code = models.CharField(blank=True, null=True, max_length=20, help_text='کد پستی')
    phone_number = models.CharField(blank=True, null=True, max_length=15, help_text='شماره تماس')
    
    def __str__(self):
        return f'{self.username} / {self.last_name} {self.first_name}'
    
class Product(models.Model):
    id = models.AutoField(primary_key=True, help_text='آیدی')
    public = models.BooleanField(default=True, blank=False, help_text='به نمایش کشیده شود')
    available_count = models.IntegerField(blank=False, help_text='موجود در انبار')
        
    title = models.CharField(max_length=200, blank=False, help_text='عنوان برای نمایش')
    slug = models.CharField(max_length=200, blank=False, null=False, help_text='عنوان به شکل های دیگر برای انواع جستجو ها با فاصله | میان هر شکل. برای مثال:‌تنمیة |‌ تنمیه')
    
    thumbnail = models.ImageField(blank=False, upload_to='product/thumbnail/', help_text='تصویر کوچک محصول')
    image = models.ImageField(blank=False, upload_to='product/images/', help_text='تصویر بزرگ محصول')
    
    price = models.IntegerField(blank=False, help_text='قیمت')
    discount = models.IntegerField(default=0, blank=False, help_text='تخفیف')
    
    description = RichTextField(blank=False, help_text='توضیحات و درباره کتاب')
    weight = models.IntegerField(blank=False, help_text='وزن به گرم')
    pages = models.IntegerField(blank=False, help_text='تعداد صفحات')
    
    views_total = models.IntegerField(default=0, blank=False, help_text='تعداد بازدید')
    sold_total = models.IntegerField(default=0, blank=False, help_text='تعداد فروش')

    created_at = models.DateTimeField(default=datetime.datetime.now, blank=False, help_text='ایجاد شده در تاریخ')
    
    def __str__(self):
        return f'{self.title}'
    
status = (
    ('در حال بررسی', 'در حال بررسی'),
    ('در حال آماده سازی و ارسال', 'در حال آماده سازی و ارسال'),
    ('تحویل پست گردید', 'تحویل پست گردید')
)    

class Order(models.Model):
    id = models.AutoField(primary_key=True, help_text='آیدی')
    purchaser = models.ForeignKey(CustomUser, on_delete=models.CASCADE, blank=False, help_text='خریدار')
    purchased = models.TextField(blank=False, help_text='عناوین خریداری شده')
    price = models.IntegerField(blank=False, help_text='مبلغ پرداخت شده')
    discount = models.IntegerField(blank=False, help_text='تخفیف دریافت شده')
    created_at = models.DateTimeField(default=datetime.datetime.now, blank=False, help_text='خرید در تاریخ')
    status = models.CharField(choices=status, default='در حال بررسی', blank=False, max_length=30, help_text='وضعیت خرید')
    
    def __str__(self):
        return f'{self.id}/{self.status}/{self.created_at}'
    
# class Coupon(models.Model):
#     id = models.AutoField(primary_key=True, help_text='آیدی')
#     active = models.BooleanField(default=True, help_text='فعال')
#     code = models.CharField(max_length=255, blank=False, help_text='کد تخفیف')
#     discount_amount = models.IntegerField(blank=False, help_text='مقدار درصد تخفیف')
#     expire_at = models.DateTimeField(blank=True, null=True, help_text='تاریخ انقضا کد')
#     number = models.IntegerField(blank=False, null=False, help_text='مرتبه استفاده کردن از کد: ۱- به معنی نامحدود بودن است')
#     created_at = models.DateTimeField(default=datetime.datetime.now, blank=False, help_text='تاریخ ایجاد کد')
    
#     def __str__(self):
#         return f'{self.code}:{self.discount_amount}%'