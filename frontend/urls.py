from django.urls import path, re_path
from .views import *
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    # re_path(r'^(?P<SOS>.*)/$', SOS),  # SOS Time
    # re_path('', SOS_landpage),  # SOS Time
    
    path('api/token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token_create'),  # override sjwt stock token
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),

    path('', index),
    path('about', index),
    path('hadith-ahl-al-bayt', index),
    path('books/<title>', index),
    path('books', index),
    path('lectures', index),
    path('pictures', index),
    path('search', index),
    path('404', index),
]