from django.shortcuts import render

from .models import *
from .serializers import *
from .filters import *

from rest_framework import viewsets, permissions, status

def index(request, *args, **kwargs):
    return render(request, "frontend/index.html")

def handler404(request, exception):
    return render(request, 'frontend/index.html', status=404)


class BookView(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filterset_class = BookFilter
    
class ClipView(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )
    queryset = Clip.objects.all()
    serializer_class = ClipSerializer
    filterset_class = ClipFilter
    
class AlbumView(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
    filterset_class = AlbumFilter