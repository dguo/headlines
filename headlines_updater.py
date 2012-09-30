import shelve
import feedparser
import requests
import json
import urllib2
import copy
from boto.s3.connection import S3Connection
from boto.s3.key import Key

# take in RSS url, return the feed
def parse_RSS(source):
    return feedparser.parse(source)

# take in the sources dictionary and sync to the shelf
def sync_shelf(sources):
    
    shelf = shelve.open("items", writeback=True)
    
    # for new shelf, just copy everything over
    if len(shelf) == 0:
        for source in sources:
            shelf[source] = copy.deepcopy(sources[source])
        shelf.sync()
        
    else:
        for source in sources:
            # as long as there are items in sources, copy them into the shelf
            if len(sources[source]['items']) != 0:
                shelf[source] = copy.deepcopy(sources[source])
        shelf.sync()
                        
    shelf.close()

def create_js():
    
    shelf = shelve.open("items", writeback=False)

    template = open('template.js')
    
    js = open('generate_units.js', 'w+')
    
    for line in template:
        if 'var sources = []' in line:
            js.write(line)
            index = 0
            for source in shelf.keys():
                new_line = 'sources['+ str(index) + '] = ["' + source + '", "' + shelf[source]['category'] + '", "' + shelf[source]['homepage'] + '"'
                for shelf_item in shelf[source]['items']:
                    title = shelf_item['title'].replace('"', '\\\"')
                    link = shelf_item['link'].replace('"', '\\\"')
                    new_line = new_line + ', "' + title + '", "' + link + '"'
                new_line = new_line + '];\n'    
                index += 1
                js.write(new_line.encode('utf-8'))
        else:
            js.write(line)
             
    shelf.close()
    template.close()
    js.close()

def push_to_S3():
    conn = S3Connection(os.environ['AWS_ACCESS_KEY_ID'], os.environ['AWS_SECRET_ACCESS_KEY'])
    bucket = conn.get_bucket('www.dailylore.com')
    key = bucket.new_key('generate_units.js')
    key.set_contents_from_filename('generate_units.js')
    key.set_acl('public-read')

def main():
    
    # initialize the dictionary of sources with RSS URL, empty list of items, and the source's category
    sources = {}
    
    # general
    category = 'general'
    sources['ABC News'] = {'RSS': 'http://feeds.abcnews.com/abcnews/topstories', 'homepage': 'http://abcnews.go.com/', 'items': [], 'category': category}
    sources['BBC News'] = {'RSS': 'http://feeds.bbci.co.uk/news/rss.xml', 'homepage': 'http://www.bbc.co.uk/news/', 'items': [], 'category': category}
    sources['CBS News'] = {'RSS': 'http://feeds.cbsnews.com/CBSNewsWorld?format=xml', 'homepage': 'http://www.cbsnews.com/', 'items': [], 'category': category}
    sources['CNN'] = {'RSS': 'http://rss.cnn.com/rss/cnn_topstories.rss', 'homepage': 'http://www.cnn.com/', 'items': [], 'category': category}
    sources['Fox News'] = {'RSS': 'http://feeds.foxnews.com/foxnews/latest?format=xml', 'homepage': 'http://www.foxnews.com/', 'items': [], 'category': category}
    sources['NBC News'] = {'RSS': 'http://pheedo.msnbc.msn.com/id/3032091/device/rss', 'homepage': 'http://www.nbcnews.com/', 'items': [], 'category': category}
    sources['NPR'] = {'RSS': 'http://www.npr.org/rss/rss.php?id=1001', 'homepage': 'http://www.npr.org/', 'items': [], 'category': category}
    sources['Reuters'] = {'RSS': 'http://feeds.reuters.com/reuters/topNews?format=xml', 'homepage': 'http://www.reuters.com/', 'items': [], 'category': category}
    sources['The New York Times'] = {'RSS': 'http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml', 'homepage': 'http://www.nytimes.com/', 'items': [], 'category': category}
    sources['USA Today'] = {'RSS': 'http://rssfeeds.usatoday.com/usatoday-NewsTopStories', 'homepage': 'http://www.usatoday.com/', 'items': [], 'category': category}
    sources['Yahoo! News'] = {'RSS': 'http://news.yahoo.com/rss/', 'homepage': 'http://news.yahoo.com/', 'items': [], 'category': category}
    
    # sports
    category = 'sports'
    sources['Bleacher Report'] = {'RSS': 'http://bleacherreport.com/articles/feed', 'homepage': 'http://bleacherreport.com/', 'items': [], 'category': category}
    sources['ESPN'] = {'RSS': 'http://sports.espn.go.com/espn/rss/news', 'homepage': 'http://espn.go.com/', 'items': [], 'category': category}
    sources['SB Nation'] = {'RSS': 'http://feeds.sbnation.com/rss/current?format=xml', 'homepage': 'http://www.sbnation.com/', 'items': [], 'category': category}
    sources['Sports Illustrated'] = {'RSS': 'http://rss.cnn.com/rss/si_topstories.rss', 'homepage': 'http://sportsillustrated.cnn.com/', 'items': [], 'category': category}
    
    # technology
    category = 'technology'
    sources['Ars Technica'] = {'RSS': 'http://feeds.arstechnica.com/arstechnica/index?format=xml', 'homepage': 'http://arstechnica.com/', 'items': [], 'category': category}
    sources['Mashable'] = {'RSS': 'http://feeds.mashable.com/Mashable?format=xml', 'homepage': 'http://mashable.com/', 'items': [], 'category': category}
    sources['TechCrunch'] = {'RSS': 'http://feeds.feedburner.com/TechCrunch/', 'homepage': 'http://techcrunch.com/', 'items': [], 'category': category}
    sources['Wired'] = {'RSS': 'http://feeds.wired.com/wired/index?format=xml', 'homepage': 'http://www.wired.com/', 'items': [], 'category': category}
    
    # business
    category = 'business'
    sources['Business Insider'] = {'RSS': 'http://feeds.feedburner.com/businessinsider?format=xml', 'homepage': 'http://www.businessinsider.com/', 'items': [], 'category': category}
    sources['CNBC'] = {'RSS': 'http://www.cnbc.com/id/19789731/device/rss/rss.xml', 'homepage': 'http://www.cnbc.com/', 'items': [], 'category': category}
    sources['Forbes'] = {'RSS': 'http://www.forbes.com/real-time/feed/', 'homepage': 'http://www.forbes.com/', 'items': [], 'category': category}
    sources['The Wall Street Journal'] = {'RSS': 'http://online.wsj.com/xml/rss/3_7011.xml', 'homepage': 'http://online.wsj.com/home-page', 'items': [], 'category': category}
    
    # daily
    category = 'daily'
    sources['Amazon.com'] = {'RSS': 'http://rssfeeds.s3.amazonaws.com/goldbox', 'homepage': 'http://www.amazon.com/', 'items': [], 'category': category}
    
    # entertainment
    category = 'entertainment'
    sources['E! Online'] = {'RSS': 'http://feeds.eonline.com/eonline/topstories?format=xml', 'homepage': 'http://www.eonline.com/', 'items': [], 'category': category}
    sources['People'] = {'RSS': 'http://feeds.people.com/people/headlines', 'homepage': 'http://www.people.com/people/', 'items': [], 'category': category}
    sources['Rolling Stone'] = {'RSS': 'http://www.rollingstone.com/siteServices/rss/allNews', 'homepage': 'http://www.rollingstone.com/', 'items': [], 'category': category}
    sources['Entertainment Weekly'] = {'RSS': 'http://feeds.ew.com/entertainmentweekly/latest', 'homepage': 'http://www.ew.com/', 'items': [], 'category': category}
    
    # politics
    category = 'politics'
    sources['Politico'] = {'RSS': 'http://feeds.politico.com/politico/rss/politicopicks', 'homepage': 'http://www.politico.com/', 'items': [], 'category': category}
    sources['The Drudge Report'] = {'RSS': 'http://feeds.feedburner.com/DrudgeReportFeed', 'homepage': 'http://www.drudgereport.com/', 'items': [], 'category': category}
    sources['The Huffington Post'] = {'RSS': 'http://feeds.huffingtonpost.com/huffingtonpost/LatestNews', 'homepage': 'http://www.huffingtonpost.com/', 'items': [], 'category': category}
    sources['The Washington Post'] = {'RSS': 'http://feeds.washingtonpost.com/rss/politics', 'homepage': 'http://www.washingtonpost.com/', 'items': [], 'category': category}

    # random
    category = 'random'
    sources['BuzzFeed'] = {'RSS': 'http://www.buzzfeed.com/index.xml', 'homepage': 'http://www.buzzfeed.com/', 'items': [], 'category': category}
    sources['Cracked'] = {'RSS': 'http://feeds.feedburner.com/CrackedRSS', 'homepage': 'http://www.cracked.com/', 'items': [], 'category': category}
    sources['Lifehacker'] = {'RSS': 'http://feeds.gawker.com/lifehacker/full', 'homepage': 'http://lifehacker.com/', 'items': [], 'category': category}
    sources['Reddit'] = {'RSS': 'http://www.reddit.com/r/all/top/.rss', 'homepage': 'http://www.reddit.com/', 'items': [], 'category': category}
    
    # science and health
    category = 'science_and_health'
    sources['Discovery'] = {'RSS': 'http://news.discovery.com/rss/news/', 'homepage': 'http://news.discovery.com/', 'items': [], 'category': category}
    sources['Science'] = {'RSS': 'http://news.sciencemag.org/rss/current.xml', 'homepage': 'http://news.sciencemag.org/', 'items': [], 'category': category}
    sources['Popular Science'] = {'RSS': 'http://feeds.popsci.com/c/34567/f/632419/index.rss', 'homepage': 'http://www.popsci.com/', 'items': [], 'category': category}
    sources['WebMD'] = {'RSS': 'http://rssfeeds.webmd.com/rss/rss.aspx?RSSSource=RSS_PUBLIC', 'homepage': 'http://www.webmd.com/', 'items': [], 'category': category}    

    # for each news source, get the feed
    for source in sources:
        feed = parse_RSS(sources[source]['RSS'])
        if feed.entries:
            # add the three most recent entries for each source
            for i in xrange(3):
                if i < len(feed.entries):
                    title = feed.entries[i].title
                    link = feed.entries[i].link
                    sources[source]['items'].append({'title': title, 'link': link})
        pass

    # sync the list to the shelf
    sync_shelf(sources)
    
    # create the new javascript file
    create_js()
    
    # push the new javascript file to S3
    push_to_S3()

if __name__ == '__main__':
    main()