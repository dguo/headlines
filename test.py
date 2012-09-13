import shelve
import feedparser
import requests
import json

import urllib2
import webbrowser
from getimageinfo import *
import time
import copy

shelf = shelve.open("items", writeback=True)

i = 0

for source in shelf:
    for item in shelf[source]['items']:
        if item['image_link'] != '':
            print item
            print ''
            i += 1

print i
    
