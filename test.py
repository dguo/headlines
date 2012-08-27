import shelve
import feedparser

urls = {}
urls['The New York Times'] = 'http://feeds.nytimes.com/nyt/rss/HomePage'
urls['ESPN'] = 'http://sports.espn.go.com/espn/rss/news'
                

url = urls['ESPNd']
#except KeyError, e:
 #   url = None
                
if url is None:
    print None
else:
    print feedparser.parse(url)