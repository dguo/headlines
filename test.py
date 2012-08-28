import shelve
import feedparser

urls = {}
urls['The New York Times'] = 'http://feeds.nytimes.com/nyt/rss/HomePage'
urls['ESPN'] = 'http://sports.espn.go.com/espn/rss/news'
                

url = 'http://www.gamespot.com/rss/game_updates.php'

#url = 'http://feeds.abcnews.com/abcnews/topstories'

feed = feedparser.parse(url)



general_sources = {}
general_sources['The New York Times'] = {'RSS_link': 'http://feeds.nytimes.com/nyt/rss/HomePage',
                                         'logo_source': '',
                                         'item_1': [],
                                         'item_2': [] }

print general_sources