from django.urls import path, re_path
from .views import *
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    # re_path(r'^(?P<SOS>.*)/$', SOS),  # SOS Time
    # re_path('', SOS_landpage),  # SOS Time
    
    path('api/token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token_create'),  # override sjwt stock token
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),

    path('', index),
    path('السیرة-الذاتیة', index),
    path('موسوعة-حدیث-أهل-البیت', index),
    path('المؤلفات/<title>', index),
    path('المؤلفات', index),
    path('المحاضرات', index),
    path('الصور', index),
    path('بحث', index),
]