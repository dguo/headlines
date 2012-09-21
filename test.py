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

template = open('template.js')

js = open('generate_units.js', 'w+')

for line in template:
    if 'var sources = []' in line:
        js.write(line)
        index = 0
        for source in shelf.keys():
            new_line = 'sources['+ str(index) + '] = ["' + source + '", "", "' + shelf[source]['homepage'] + '"'
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

