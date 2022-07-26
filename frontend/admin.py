from django.contrib import admin
from .models import *

admin.site.site_header = "لوحة‌ ادارة المحتوا "

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'year_published')
    list_filter = ('year_published', )
    search_fields = ['title', 'publisher']
    
@admin.register(Clip)
class ClipAdmin(admin.ModelAdmin):
    list_display = ('title', 'date_created')
    list_filter = ('date_created', )
    search_fields = ['title', 'date_created']
    
@admin.register(Album)
class AlbumAdmin(admin.ModelAdmin):
    list_display = ('title', 'date_created')
    list_filter = ('date_created', )
    search_fields = ['title', 'date_created']