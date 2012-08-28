import shelve
import feedparser
    
# take in name of the source, return the feed
def parse_RSS(source):
    urls = {}
    urls['The Daily Mail'] = 'http://www.dailymail.co.uk/home/index.rss'
    urls['IGN'] = 'http://feeds.ign.com/ign/all?format=xml'
    urls['Gamespot'] = 'http://www.gamespot.com/rss/game_updates.php'
    urls['Reddit'] = 'http://www.reddit.com/r/all/top/.rss'
    urls['Buzzfeed'] = 'http://www.buzzfeed.com/index.xml'
    urls['The Huffington Post'] = 'http://feeds.huffingtonpost.com/huffingtonpost/LatestNews'
    urls['Politico'] = 'http://feeds.politico.com/politico/rss/politicopicks'
    urls['Cracked'] = 'http://feeds.feedburner.com/CrackedRSS'
    
    try:
        url = urls[source]
    except KeyError, e:
        url = None
    
    if url is None:
        return None
    else:
        return feedparser.parse(url)

if __name__ == '__main__':
    
    general = {}
    general['ABC News'] = {'RSS': 'http://feeds.abcnews.com/abcnews/topstories', 'items': []}
    general['BBC'] = {'RSS': 'http://feeds.bbci.co.uk/news/rss.xml', 'items': []}
    general['CBS News'] = {'RSS': 'http://feeds.cbsnews.com/CBSNewsMain', 'items': []}
    general['CNN'] = {'RSS': 'http://rss.cnn.com/rss/cnn_topstories.rss', 'items': []}
    general['Fox News'] = {'RSS': 'http://feeds.foxnews.com/foxnews/latest?format=xml', 'items': []}
    general['NBC News'] = {'RSS': 'http://pheedo.msnbc.msn.com/id/3032091/device/rss', 'items': []}
    general['NPR'] = {'RSS': 'http://www.npr.org/rss/rss.php?id=1001', 'items': []}
    general['Reuters'] = {'RSS': 'http://feeds.reuters.com/reuters/topNews?format=xml', 'items': []}
    general['The New York Times'] = {'RSS': 'http://feeds.nytimes.com/nyt/rss/HomePage', 'items': []}
    general['Time'] = {'RSS': 'http://feeds.feedburner.com/time/topstories?format=xml', 'items': []}
    gneeral['USA Today'] = {'RSS': 'http://rssfeeds.usatoday.com/usatoday-NewsTopStories', 'items': []}
    general['Yahoo! News'] = {'RSS': 'http://news.yahoo.com/rss/', 'items': []}
    
    sports = {}
    sports['ESPN'] = {'RSS': 'http://sports.espn.go.com/espn/rss/news', 'items': []}
    sports['SB Nation'] = {'RSS': 'http://feeds.sbnation.com/rss/current?format=xml', 'items': []}
    sports['Sports Illustrated'] = {'RSS': 'http://rss.cnn.com/rss/si_topstories.rss', 'items': []}
    
    technology = {}
    technology['Ars Technica'] = {'RSS': 'http://feeds.arstechnica.com/arstechnica/index?format=xml', 'items': []}
    technology['Mashable'] = {'RSS': 'http://feeds.mashable.com/Mashable?format=xml', 'items': []}
    technology['TechCrunch'] = {'RSS': 'http://feeds.feedburner.com/TechCrunch/', 'items': []}
    technology['Wired'] = {'RSS': 'http://feeds.wired.com/wired/index?format=xml', 'items': []}
    
    business = {}
    business['Business Insider'] = {'RSS': 'http://feeds.feedburner.com/businessinsider?format=xml', 'items': []}
    business['CNBC'] = {'RSS': 'http://www.cnbc.com/id/19789731/device/rss/rss.xml', 'items': []}
    business['Forbes'] = {'RSS': 'http://www.forbes.com/real-time/feed/', 'items': []}
    business['The Wall Street Journal'] = {'RSS': 'http://online.wsj.com/xml/rss/3_7011.xml', 'items': []}
    
    daily = {}
    daily['NASA Image of the Day'] = {'RSS': 'http://www.nasa.gov/rss/image_of_the_day.rss', 'items': []}
    daily['Dictionary.com Word of the Day'] = {'RSS': 'http://dictionary.reference.com/wordoftheday/wotd.rss', 'items': []}
    
    entertainment = {}
    entertainment['E! Online'] = {'RSS': 'http://feeds.eonline.com/eonline/topstories?format=xml', 'items': []}
    entertainment['People'] = {'RSS': 'http://feeds.people.com/people/headlines', 'items': []}
    entertainment['Rolling Stone'] = {'RSS': 'http://www.rollingstone.com/siteServices/rss/allNews', 'items': []}
    entertainment['TMZ'] = {'RSS': 'http://www.tmz.com/rss.xml', 'items': = []}
    
    
    
    
    
    sources = [general, sports, technology, business, daily, entertainment] 


    shelf = shelve.open("articles", writeback=True)
    print(shelf['The New York Times'])
    #shelf['The New York Times'] = {'icon_source': 'test', 'article_source': 'test2'}
    #shelf.sync()
    #print(shelf['The New York Times'])
    shelf.close()
    


    