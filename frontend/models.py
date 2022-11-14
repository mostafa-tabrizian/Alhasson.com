from django.db import models
from django.utils import timezone
from ckeditor.fields import RichTextField

class Book(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255, help_text='عنوان الکتاب')
    slug = models.CharField(max_length=255, help_text='عنوان للبحث')
    thumbnail = models.ImageField(help_text="مقیاس: ۲۴۰ فی ۳۶۰ | size: 240x360")
    cover = models.ImageField(help_text="مقیاس: ۳۶۰ فی ۵۴۰ | size: 360x540")
    year_published = models.IntegerField(help_text='سنة نشر الکتاب')
    publisher = models.CharField(max_length=255, help_text='ناشر الکتاب')
    pages = models.IntegerField(help_text='عدد الصفحات')
    description = RichTextField(help_text='عن الکتاب')
    pdf_file = models.FileField(blank=True, help_text='ملف البی دی اف')
    word_file = models.FileField(blank=True, help_text='ملف الورد')
    html_file = models.FileField(blank=True, help_text='ملف ال اش تی ام ال')
    date_created = models.DateField(default=timezone.now)
    
    def __str__(self):
        return self.title
    
    def __unicode__(self):
        return self.title
    
class Clip(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255, help_text='عنوان السجل')
    slug = models.CharField(max_length=255, help_text='عنوان للبحث')
    source = models.CharField(max_length=500, help_text='رابط السجل')
    description = RichTextField(help_text='عن السجل', blank=True)
    date_created = models.DateField(default=timezone.now)
    
    def __str__(self):
        return self.title
    
    def __unicode__(self):
        return self.title
    
class Album(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255, help_text='عنوان الصورة')
    source = models.ImageField(help_text='ملف الصورة')
    date_created = models.DateField(default=timezone.now)
    
    def __str__(self):
        return self.title
    
    def __unicode__(self):
        return self.title