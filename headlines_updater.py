import shelve
import feedparser
    
# take in name of the source, return the feed
def parse_RSS(source):
    urls = {}
    urls['The New York Times'] = 'http://feeds.nytimes.com/nyt/rss/HomePage'
    urls['ESPN'] = 'http://sports.espn.go.com/espn/rss/news'
    urls['The Wall Street Journal'] = 'http://online.wsj.com/xml/rss/3_7011.xml'
    urls['BBC'] = 'http://feeds.bbci.co.uk/news/rss.xml'
    urls['ABC News'] = 'http://feeds.abcnews.com/abcnews/topstories'
    urls['CBS News'] = 'http://feeds.cbsnews.com/CBSNewsMain'
    urls['CNN'] = 'http://rss.cnn.com/rss/cnn_topstories.rss'
    urls['Fox News'] = 'http://feeds.foxnews.com/foxnews/latest?format=xml'
    ursl['Yahoo! News'] = 'http://news.yahoo.com/rss/'
    urls['Reuters'] = 'http://feeds.reuters.com/reuters/topNews?format=xml'
    urls['NBC News'] = 'http://pheedo.msnbc.msn.com/id/3032091/device/rss'
    urls['USA Today'] = 'http://rssfeeds.usatoday.com/usatoday-NewsTopStories'
    urls['NPR'] = 'http://www.npr.org/rss/rss.php?id=1001'
    urls['Time'] = 'http://feeds.feedburner.com/time/topstories?format=xml'
    urls['The Daily Mail'] = 'http://www.dailymail.co.uk/home/index.rss'
    urls['Sports Illustrated'] = 'http://rss.cnn.com/rss/si_topstories.rss'
    urls['SB Nation'] = 'http://feeds.sbnation.com/rss/current?format=xml'
    urls['TechCrunch'] = 'http://feeds.feedburner.com/TechCrunch/'
    urls['Ars Technica'] = 'http://feeds.arstechnica.com/arstechnica/index?format=xml'
    urls['Wired'] = 'http://feeds.wired.com/wired/index?format=xml'
    urls['Mashable'] = 'http://feeds.mashable.com/Mashable?format=xml'
    urls['IGN'] = 'http://feeds.ign.com/ign/all?format=xml'
    urls['Gamespot'] = 'http://www.gamespot.com/rss/game_updates.php'
    urls['CNBC'] = 'http://www.cnbc.com/id/19789731/device/rss/rss.xml'
    urls['Business Insider'] = 'http://feeds.feedburner.com/businessinsider?format=xml'
    urls['Forbes'] = 'http://www.forbes.com/real-time/feed/'
    urls['Rolling Stone'] = 'http://www.rollingstone.com/siteServices/rss/allNews'
    urls['People'] = 'http://feeds.people.com/people/headlines'
    urls['TMZ'] = 'http://www.tmz.com/rss.xml'
    urls['E! Online'] = 'http://feeds.eonline.com/eonline/topstories?format=xml'
    urls['Reddit'] = 'http://www.reddit.com/r/all/top/.rss'
    urls['Buzzfeed'] = 'http://www.buzzfeed.com/index.xml'
    urls['The Huffington Post'] = 'http://feeds.huffingtonpost.com/huffingtonpost/LatestNews'
    urls['Politico'] = 'http://feeds.politico.com/politico/rss/politicopicks'
    urls['NASA Image of the Day'] = 'http://www.nasa.gov/rss/image_of_the_day.rss'
    urls['Cracked'] = 'http://feeds.feedburner.com/CrackedRSS'
    urls['Dictionary.com Word of the Day'] = 'http://dictionary.reference.com/wordoftheday/wotd.rss'
    
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
    


    