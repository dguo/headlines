import urllib2
import BeautifulSoup
import shelve
from headlines_updater import *

url = 'http://feeds.nytimes.com/nyt/rss/HomePage'

x = open_url(url)

print x

print 'hello, world'