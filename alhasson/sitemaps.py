from django.contrib.sitemaps import Sitemap
from frontend.models import *

def titleConverterWithSpilt(title, oldValue, newValue):
    updatedTitle = title.replace(oldValue, newValue)
    return updatedTitle

class BookSitemap(Sitemap):
    changefreq = "monthly"
    priority = 1
    protocol = 'https'

    def items(self):
        return Book.objects.all()

    def lastmod(self, item):
        return item.date_created

    def location(self, item):
        title = titleConverterWithSpilt(item.title, ' ', '-')
        return f'/{title}'