from django.urls import path, re_path
from .views import *
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('api/token/obtain/', TokenObtainPairView.as_view(serializer_class=CustomJWTSerializer), name='token_create'),  # override sjwt stock token
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('api/blacklist/', LogoutAndBlacklistRefreshTokenForUserView.as_view(), name='blacklist'),
    path('api/user', user_data),
    path('api/google', auth_google),
    path("api/user/update", user_update),
    path("api/coupon", coupon),
    
    path('', index),
    path('login', index),
    path('cart/', index),
    path('payment-method/', index),
    path('profile/', index),
    path('edit-profile/', index),
    path('<product_slug>', index),
]