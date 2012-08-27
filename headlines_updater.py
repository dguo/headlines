import urllib2
import BeautifulSoup
import shelve

def open_url(url):
    b = 5
    print b
    
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
    


    