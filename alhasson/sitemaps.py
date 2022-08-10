from django.contrib.sitemaps import Sitemap
from frontend.models import *
from shop.models import *

def titleHyphenAdder(title):
    updatedTitle = title.replace(' ', '-')
    return updatedTitle

class BookSitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.9
    protocol = 'https'

    def items(self):
        return Book.objects.all()

    def lastmod(self, item):
        return item.date_created

    def location(self, item):
        title = titleHyphenAdder(item.title)
        return f'/{title}'
    
class ProductSitemap(Sitemap):
    changefreq = "weekly"
    priority = 1
    protocol = 'https'

    def items(self):
        return Product.objects.all()

    def lastmod(self, item):
        return item.created_at

    def location(self, item):
        title = titleHyphenAdder(item.title)
        return f'/shop/{title}?id={item.id}'