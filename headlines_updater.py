import urllib2
from urllib2 import HTTPError, URLError
import BeautifulSoup
import shelve

# open a url and return the raw html
def open_url(url):
    try:
        page = urllib2.urlopen(url)
        html = page.read()
        return html
    except HTTPError, e:
        return 'fail'
    except URLError, e:
        print e.reason
        return 'fail2'
    
# take in name of source, return dictionary
def parse_RSS(source):
    if (source == 'The New York Times'):
        print 3
    elif (source == 'Bloomberg'):
        print 4
        
    
    a = 3
    print a

if __name__ == '__main__':
    
    shelf = shelve.open("articles", writeback=True)
    print(shelf['The New York Times'])
    #shelf['The New York Times'] = {'icon_source': 'test', 'article_source': 'test2'}
    #shelf.sync()
    #print(shelf['The New York Times'])
    shelf.close()
    


    