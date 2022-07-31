from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from alhasson.sitemaps import BookSitemap
from frontend import views as frontendView
from shop import views as shopView
from django.conf import settings
from django.conf.urls.static import static

from django.contrib.sitemaps.views import sitemap
from .sitemaps import *

sitemaps = {
    'book':BookSitemap,
}
 
router = routers.DefaultRouter()
router.register(r'bookView', frontendView.BookView)
router.register(r'clipView', frontendView.ClipView)
router.register(r'albumView', frontendView.AlbumView)
router.register(r'productView', shopView.ProductView)

urlpatterns = [
    path('shop/api/', include(router.urls)),
    path('api/', include(router.urls)),
    
    path('', include('frontend.urls')),   
    path('shop/', include('shop.urls')),  
     
    path('adminAlhasson', admin.site.urls),
    path('sitemap.xml/', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
]

handler404 = "frontend.views.handler404"
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)