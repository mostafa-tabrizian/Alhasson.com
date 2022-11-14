from dataclasses import fields
from django_filters import rest_framework as filters
from .models import *

class BookFilter(filters.FilterSet):
    class Meta:
        model = Book
        fields = {
            'id': ['exact'],
            'title': ['icontains'],
            'title_url': ['icontains'],
            'slug': ['icontains']
        }
        

class ClipFilter(filters.FilterSet):
    class Meta:
        model = Clip
        fields = {
            'id': ['exact'],
            'title': ['icontains'],
            'slug': ['icontains']
        }
        
class AlbumFilter(filters.FilterSet):
    class Meta:
        model = Album
        fields = {
            'id': ['exact'],
            'title': ['icontains'],
        }