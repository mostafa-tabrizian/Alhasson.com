import datetime
from django.db import models
from ckeditor.fields import RichTextField

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