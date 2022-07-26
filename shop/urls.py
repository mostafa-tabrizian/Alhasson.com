from django.urls import path, re_path
from .views import *
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('', index),
    path('cart/', index),
    path('payment-method/', index),
    path('profile/', index),
    path('edit-profile/', index),
    path('<product_slug>', index),
]