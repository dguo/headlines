import shelve
import feedparser
    
# take in name of the source, return the feed
def parse_RSS(source):
    urls = {}
    urls['The New York Times'] = 'http://feeds.nytimes.com/nyt/rss/HomePage'
    urls['ESPN'] = 'http://sports.espn.go.com/espn/rss/news'
    
    try:
        url = urls[source]
    except KeyError, e:
        url = None
    
    if url is None:
        return None
    else:
        return feedparser.parse(url)

if __name__ == '__main__':
    
    shelf = shelve.open("articles", writeback=True)
    print(shelf['The New York Times'])
    #shelf['The New York Times'] = {'icon_source': 'test', 'article_source': 'test2'}
    #shelf.sync()
    #print(shelf['The New York Times'])
    shelf.close()
    


    