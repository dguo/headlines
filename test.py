import shelve
import feedparser
import requests
import json
import headlines_updater
import urllib2
import webbrowser
from getimageinfo import *
import time
import copy

shelf = shelve.open("items", writeback=True)

counter = 0

for source in shelf:
    for item in shelf[source]['items']:
        if item['image_link'] != '':
            counter += 1
            print item
            print ''


print counter
