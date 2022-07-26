from django.shortcuts import render

from .models import *
from .serializers import *
from .filters import *

from rest_framework import viewsets, permissions, status

def index(request, *args, **kwargs):
    return render(request, "shop/index.html")

def handler404(request, exception):
    return render(request, 'shop/index.html', status=404)

class ProductView(viewsets.ModelViewSet):
    permission_classes = (permissions.BasePermission, )
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filterset_class = ProductFilter