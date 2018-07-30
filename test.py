import os
import shelve
import feedparser
import requests
import json
import urllib2
import webbrowser
from getimageinfo import *
import time
import copy
from boto.s3.connection import S3Connection
from boto.s3.key import Key

conn = S3Connection(os.environ['AWS_ACCESS_KEY_ID'], os.environ['AWS_SECRET_ACCESS_KEY'])

bucket = conn.get_bucket('www.dailylore.com')

key = bucket.new_key('index.html')

key.set_contents_from_filename('index.html')

key.set_acl('public-read')
