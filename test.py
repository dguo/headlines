import shelve
import feedparser
import requests
import json
import headlines_updater
import urllib2


i = [3,4,6]

print len(i)

shelf = shelve.open("items", writeback=True)

counter = 0
totalcounter = 0

for content in shelf:
    for item in shelf[content]['items']:
        if item['image_link'] != '':
            print item
            print ''
            counter += 1
        totalcounter += 1

print counter
print totalcounter

u = urllib2.urlopen(u'http://www.nytimes.com')

feed = feedparser.parse(u'http://www.rollingstone.com/siteServices/rss/allNews')

for i in xrange(5):
    u = urllib2.urlopen(feed.entries[i].link)
    print u.read()
    print feed.entries[i].link