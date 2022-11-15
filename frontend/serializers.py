from rest_framework import serializers
from .models import *
        
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = (
            'id',
            'sort_id',
            'title',
            'title_url',
            'slug',
            'thumbnail',
            'cover',
            'year_published',
            'publisher',
            'pages',
            'description',
            'pdf_file',
            'word_file',
            'html_file',
            'date_created'
        )
   
class ClipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clip
        fields = (
            'id',
            'title',
            'slug',
            'source',
            'date_created',
            'description'
        )
        
class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = (
            'id',
            'title',
            'source',
            'date_created'
        )