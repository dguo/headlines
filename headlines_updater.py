import shelve
import feedparser
import requests
import json
    
# take in RSS url, return the feed
def parse_RSS(source):
    return feedparser.parse(source)

# take in the sources dictionary and sync to the shelf
def sync_shelf(sources):
    
    shelf = shelve.open("items", writeback=True)
    
    for source in sources:
        # add any new sources
        if source not in shelf:
            shelf[source] = sources[source]
            shelf.sync()
        
        # only update if there are items to check
        elif sources[source]['items']:
            # if there is an item missing in the shelf, update all items
            for item in sources[source]['items']:
                if item not in shelf[source]['items']:
                    shelf[source]['items'] = sources[source]['items']
                    shelf.sync()
                    break
        
    shelf.close()

# take in url, return the link for a primary image, if any
def get_primary_image_link(url):
    api_endpoint = 'http://www.diffbot.com/api/article'
    params = {'token': os.environ['DIFFBOT_TOKEN'], 'format': 'json', 'url': url}
    image_link = ''
    try:
        r = requests.get(api_endpoint, params = params)
        info = json.loads(r.content)
        for content in info['media']:
            if content['primary'] == 'true' and content['type'] == 'image':
                image_link = content['link']
    except:
        pass
    return image_link

def main():
    
    # initialize the dictionary of sources with RSS URL, empty list of items, and the source's category
    sources = {}
    
    # general
    category = 'General'
    sources['ABC News'] = {'RSS': 'http://feeds.abcnews.com/abcnews/topstories', 'items': [], 'category': category}
    sources['BBC'] = {'RSS': 'http://feeds.bbci.co.uk/news/rss.xml', 'items': [], 'category': category}
    sources['CBS News'] = {'RSS': 'http://feeds.cbsnews.com/CBSNewsMain', 'items': [], 'category': category}
    sources['CNN'] = {'RSS': 'http://rss.cnn.com/rss/cnn_topstories.rss', 'items': [], 'category': category}
    sources['Fox News'] = {'RSS': 'http://feeds.foxnews.com/foxnews/latest?format=xml', 'items': [], 'catgory': category}
    sources['NBC News'] = {'RSS': 'http://pheedo.msnbc.msn.com/id/3032091/device/rss', 'items': [], 'category': category}
    sources['NPR'] = {'RSS': 'http://www.npr.org/rss/rss.php?id=1001', 'items': [], 'category': category}
    sources['Reuters'] = {'RSS': 'http://feeds.reuters.com/reuters/topNews?format=xml', 'items': [], 'category': category}
    sources['The Huffington Post'] = {'RSS': 'http://feeds.huffingtonpost.com/huffingtonpost/LatestNews', 'items': [], 'category': category}
    sources['The New York Times'] = {'RSS': 'http://feeds.nytimes.com/nyt/rss/HomePage', 'items': [], 'category': category}
    sources['Time'] = {'RSS': 'http://feeds.feedburner.com/time/topstories?format=xml', 'items': [], 'category': category}
    sources['USA Today'] = {'RSS': 'http://rssfeeds.usatoday.com/usatoday-NewsTopStories', 'items': [], 'category': category}
    sources['Yahoo! News'] = {'RSS': 'http://news.yahoo.com/rss/', 'items': [], 'category': category}
    
    # sports
    category = 'Sports'
    sources['ESPN'] = {'RSS': 'http://sports.espn.go.com/espn/rss/news', 'items': [], 'category': category}
    sources['SB Nation'] = {'RSS': 'http://feeds.sbnation.com/rss/current?format=xml', 'items': [], 'category': category}
    sources['Sports Illustrated'] = {'RSS': 'http://rss.cnn.com/rss/si_topstories.rss', 'items': [], 'category': category}
    
    # technology
    category = 'Technology'
    sources['Ars Technica'] = {'RSS': 'http://feeds.arstechnica.com/arstechnica/index?format=xml', 'items': [], 'category': category}
    sources['Mashable'] = {'RSS': 'http://feeds.mashable.com/Mashable?format=xml', 'items': [], 'category': category}
    sources['TechCrunch'] = {'RSS': 'http://feeds.feedburner.com/TechCrunch/', 'items': [], 'category': category}
    sources['Wired'] = {'RSS': 'http://feeds.wired.com/wired/index?format=xml', 'items': [], 'category': category}
    
    # business
    category = 'Business'
    sources['Business Insider'] = {'RSS': 'http://feeds.feedburner.com/businessinsider?format=xml', 'items': [], 'category': category}
    sources['CNBC'] = {'RSS': 'http://www.cnbc.com/id/19789731/device/rss/rss.xml', 'items': [], 'category': category}
    sources['Forbes'] = {'RSS': 'http://www.forbes.com/real-time/feed/', 'items': [], 'category': category}
    sources['The Wall Street Journal'] = {'RSS': 'http://online.wsj.com/xml/rss/3_7011.xml', 'items': [], 'category': category}
    
    # daily
    category = 'Daily'
    sources['NASA Image of the Day'] = {'RSS': 'http://www.nasa.gov/rss/image_of_the_day.rss', 'items': [], 'catgory': category}
    sources['Dictionary.com Word of the Day'] = {'RSS': 'http://dictionary.reference.com/wordoftheday/wotd.rss', 'items': [], 'category': category}
    
    # entertainment
    category = 'Culture'
    sources['E! Online'] = {'RSS': 'http://feeds.eonline.com/eonline/topstories?format=xml', 'items': [], 'category': category}
    sources['People'] = {'RSS': 'http://feeds.people.com/people/headlines', 'items': [], 'category': category}
    sources['Rolling Stone'] = {'RSS': 'http://www.rollingstone.com/siteServices/rss/allNews', 'items': [], 'category': category}
    sources['TMZ'] = {'RSS': 'http://www.tmz.com/rss.xml', 'items': [], 'category': category}
    sources['Gamespot'] = {'RSS': 'http://www.gamespot.com/rss/game_updates.php', 'items': [], 'category': category}
    sources['IGN'] = {'RSS': 'http://feeds.ign.com/ign/all?format=xml', 'items': [], 'category': category}
    
    # politics
    category = 'Politics'
    sources['Politico'] = {'RSS': 'http://feeds.politico.com/politico/rss/politicopicks', 'items': [], 'category': category}

    # random
    sources['Buzzfeed'] = {'RSS': 'http://www.buzzfeed.com/index.xml', 'items': [], 'category': category}
    sources['Cracked'] = {'RSS': 'http://feeds.feedburner.com/CrackedRSS', 'items': [], 'category': category}
    sources['Reddit'] = {'RSS': 'http://www.reddit.com/r/all/top/.rss', 'items': [], 'category': category}
    sources['The Daily Mail'] = {'RSS': 'http://www.dailymail.co.uk/home/index.rss', 'items': [], 'category': category}

    # for each news source, get the feed
    for source in sources:
        feed = parse_RSS(sources[source]['RSS'])
        if feed.entries:
            # add the five most recent entries for each source
            for i in xrange(5):
                if i < len(feed.entries):
                    title = feed.entries[i].title
                    link = feed.entries[i].link
                    # use diffbot to store a primary image for the article, if it exists
                    image_link = get_primary_image_link(link)
                    sources[source]['items'].append({'title': title, 'link': link, 'image_link': image_link})
    
    # sync the list to the shelf
    sync_shelf(sources)

if __name__ == '__main__':
    main()