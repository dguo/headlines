import shelve
import feedparser
from urllib2 import URLError
    
# take in RSS url, return the feed
def parse_RSS(source):
    return feedparser.parse(source)

def main():
    
    # initialize category dictionaries with RSS URLs and empty list of items
    general = {}
    general['ABC News'] = {'RSS': 'http://feeds.abcnews.com/abcnews/topstories', 'items': []}
    general['BBC'] = {'RSS': 'http://feeds.bbci.co.uk/news/rss.xml', 'items': []}
    general['CBS News'] = {'RSS': 'http://feeds.cbsnews.com/CBSNewsMain', 'items': []}
    general['CNN'] = {'RSS': 'http://rss.cnn.com/rss/cnn_topstories.rss', 'items': []}
    general['Fox News'] = {'RSS': 'http://feeds.foxnews.com/foxnews/latest?format=xml', 'items': []}
    general['NBC News'] = {'RSS': 'http://pheedo.msnbc.msn.com/id/3032091/device/rss', 'items': []}
    general['NPR'] = {'RSS': 'http://www.npr.org/rss/rss.php?id=1001', 'items': []}
    general['Reuters'] = {'RSS': 'http://feeds.reuters.com/reuters/topNews?format=xml', 'items': []}
    general['The Huffington Post'] = {'RSS': 'http://feeds.huffingtonpost.com/huffingtonpost/LatestNews', 'items': []}
    general['The New York Times'] = {'RSS': 'http://feeds.nytimes.com/nyt/rss/HomePage', 'items': []}
    general['Time'] = {'RSS': 'http://feeds.feedburner.com/time/topstories?format=xml', 'items': []}
    general['USA Today'] = {'RSS': 'http://rssfeeds.usatoday.com/usatoday-NewsTopStories', 'items': []}
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
    entertainment['TMZ'] = {'RSS': 'http://www.tmz.com/rss.xml', 'items': []}
    
    politics = {}
    politics['Politico'] = {'RSS': 'http://feeds.politico.com/politico/rss/politicopicks', 'items': []}
    
    gaming = {}
    gaming['Gamespot'] = {'RSS': 'http://www.gamespot.com/rss/game_updates.php', 'items': []}
    gaming['IGN'] = {'RSS': 'http://feeds.ign.com/ign/all?format=xml', 'items': []}

    random = {}
    random['Buzzfeed'] = {'RSS': 'http://www.buzzfeed.com/index.xml', 'items': []}
    random['Cracked'] = {'RSS': 'http://feeds.feedburner.com/CrackedRSS', 'items': []}
    random['Reddit'] = {'RSS': 'http://www.reddit.com/r/all/top/.rss', 'items': []}
    random['The Daily Mail'] = {'RSS': 'http://www.dailymail.co.uk/home/index.rss', 'items': []}
    
    # put all categories into a list
    categories = [general, sports, technology, business, daily, entertainment, politics, gaming, random] 

    # for each news source, get the feed
    for category in categories:
        for source in category:
            feed = parse_RSS(category[source]['RSS'])
            if not feed.bozo:
                # add the five most recent entries for each source
                for i in xrange(5):
                    if i < len(feed.entries):
                        title = feed.entries[i].title.encode('UTF-8')
                        link = feed.entries[i].link.encode('UTF-8')
                        category[source]['items'].append({'title': title, 'link': link})

    print technology['TechCrunch']['items'][3]

    shelf = shelve.open("items", writeback=True)
    shelf['categories'] = categories
    #print(shelf['The New York Times'])
    #shelf['The New York Times'] = {'icon_source': 'test', 'article_source': 'test2'}
    print shelf['categories'][2]['TechCrunch']['items'][3]
    shelf.sync()
    #print(shelf['The New York Times'])
    #print shelf
    shelf.close()
    
if __name__ == '__main__':
    main()
    


    