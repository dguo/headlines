import shelve
import feedparser
import requests
import json
import urllib2
import webbrowser
from getimageinfo import *
import time
import copy

shelf = shelve.open("items", writeback=False)

for source in shelf.keys():
    try:
        print shelf[source]['category']
    except:
        print 'error:' + source
        
shelf.close()


