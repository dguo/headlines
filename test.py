import shelve
import feedparser

urls = {}
urls['The New York Times'] = 'http://feeds.nytimes.com/nyt/rss/HomePage'
urls['ESPN'] = 'http://sports.espn.go.com/espn/rss/news'
                

url = 'http://www.gamespot.com/rss/game_updates.php'

#url = 'http://feeds.abcnews.com/abcnews/topstories'

feed = feedparser.parse(url)


i = 0
for item in feed['items']:
    if i == 0:
        for key in item:
            print key
        print item['title']
        print item['link']
        print item['published']
        for key in item['summary_detail']:
            print key
        print item['summary_detail']['value']
        i = 2
