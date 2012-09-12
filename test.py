import shelve
import feedparser
import requests
import json


i = [3,4,6]

print len(i)


url = 'http://feeds.eonline.com/~r/eonline/topstories/~3/g5xVk4si93I/the-new-normal-save-it-or-sink-it'


api_endpoint = 'http://www.ddiffbot.com/api/article'

params = {'token': os.environ['DIFFBOT_TOKEN'], 'format': 'json', 'url': url}


try:
    r = requests.get(api_endpoint, params=params)
    info = json.loads(r.content)

except:
   info = {'hi': 'hi'}
   
print info
