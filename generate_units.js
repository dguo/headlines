function generate_units()
{

var sources = []
sources[0] = ["Rolling Stone", "entertainment", "http://www.rollingstone.com/", "Yoko Ono Calls for 'Immediate Release' of Pussy Riot", "http://www.rollingstone.com/music/news/yoko-ono-calls-for-immediate-release-of-pussy-riot-20120921", "Stephen Colbert Lands Guest Spot on 'The Office'", "http://www.rollingstone.com/movies/news/stephen-colbert-lands-guest-spot-on-the-office-20120921", "Bill Clinton Breaks Down DNC Speech on 'Daily Show'", "http://www.rollingstone.com/movies/videos/bill-clinton-breaks-down-dnc-speech-on-daily-show-20120921"];
sources[1] = ["NBC News", "general", "http://www.nbcnews.com/", "House adjourns after few fall work days, punting on unfinished business", "http://pheedo.msnbc.msn.com/click.phdo?i=32fbc521b51dd1072ac40a80ecfd811a", "Romney paid 14.1 percent effective tax rate in 2011", "http://pheedo.msnbc.msn.com/click.phdo?i=a3f247eaae0664656a0fce5d5f13bc8d", "Ann Romney's plane makes emergency landing", "http://pheedo.msnbc.msn.com/click.phdo?i=da75e136b5ff707997a7e1530cf15e6f"];
sources[2] = ["Gamespot", "entertainment", "http://www.gamespot.com/", "Free Play Friday: Defenders, Bombs, Portals, Pac-Man!", "http://www.gamespot.com/features/free-play-friday-defenders-bombs-portals-pac-man-6397022", "Transcripted Review", "http://www.gamespot.com/transcripted/reviews/transcripted-review-6397009/", "Borderlands 2 Review", "http://www.gamespot.com/borderlands-2/reviews/borderlands-2-review-6397018/"];
sources[3] = ["NPR", "general", "http://www.npr.org/", "Congress Heads Out After Approving Funding Bill", "http://www.npr.org/2012/09/22/161598126/congress-heads-out-after-approving-funding-bill?ft=1&f=1001", "Libyans Storm Militia Compound In Benghazi", "http://www.npr.org/2012/09/21/161595596/libyans-storm-militia-compound-in-benghazi?ft=1&f=1001", "Do You Know The Way To San Jose? iPhone Users May Not", "http://www.npr.org/blogs/alltechconsidered/2012/09/21/161591319/do-you-know-the-way-to-san-jose-iphone-users-may-not?ft=1&f=1001"];
sources[4] = ["Forbes", "business", "http://www.forbes.com/", "Archaeologists Find A 6,500 Year Old Dental Filling", "http://www.forbes.com/sites/alexknapp/2012/09/22/archaeologists-find-a-6500-year-old-dental-filling/", "How the AARP Made $2.8 Billion By Supporting Obamacare's Cuts to Medicare", "http://www.forbes.com/sites/aroy/2012/09/22/the-aarps-2-8-billion-reasons-for-supporting-obamacares-cuts-to-medicare/", "'Dark Souls' Easter Egg Spotted In 'Borderlands 2' - Time To Engage In Some Jolly Cooperation", "http://www.forbes.com/sites/erikkain/2012/09/22/dark-souls-easter-egg-spotted-in-borderlands-2-time-to-engage-in-some-jolly-cooperation/"];
sources[5] = ["Bleacher Report", "sports", "http://bleacherreport.com/", "How Matthew Stafford and the Lions Should Attack Titans' Struggling Defense", "http://bleacherreport.com/articles/1343497-how-stafford-and-the-lions-should-attack-titans-struggling-defense", "Fantasy Football Week 3: Top 20 Quarterbacks for the Rest of the Year", "http://bleacherreport.com/articles/1343616-fantasy-football-week-3-top-20-quarterbacks-for-the-rest-of-the-year", "Jaguars vs. Colts: Shutting Down the Run Key to a Jacksonville Victory", "http://bleacherreport.com/articles/1341856-jaguars-vs-colts-shutting-down-the-run-key-to-a-jacksonville-victory"];
sources[6] = ["Reuters", "general", "http://www.reuters.com/", "Romney tax release shows 14.1 percent rate in 2011", "http://feeds.reuters.com/~r/reuters/topNews/~3/RnlFr5Ex7EQ/us-usa-campaign-romney-taxes-idUSBRE88K11Y20120922", "Libyan Islamist militia swept out of Benghazi bases", "http://feeds.reuters.com/~r/reuters/topNews/~3/4bNaou5w-oc/us-protests-benghazi-idUSBRE88L02A20120922", "Apple iPhone 5 fever rages despite grumbling over maps", "http://feeds.reuters.com/~r/reuters/topNews/~3/pkl3G_oK4cg/us-apple-iphone-idUSBRE88J1FQ20120922"];
sources[7] = ["Fox News", "general", "http://www.foxnews.com/", "Libyans Hit Militia After Attack", "http://www.foxnews.com/world/2012/09/21/libyans-storm-ansar-al-sharia-compound-in-backlash-attack-on-us-consulate/", "Man Mauled by Tiger After Falling in Bronx Zoo Exhibit", "http://www.foxnews.com/us/2012/09/21/new-york-man-is-mauled-by-tiger-at-bronx-zoo-loses-leg/", "Florida Police Hunt for Missing Strip Club Dancer", "http://www.foxnews.com/us/2012/09/21/police-search-for-missing-florida-dancer/%20?test=latestnews"];
sources[8] = ["Business Insider", "business", "http://www.businessinsider.com/", "HERE'S THE FIRST IPHONE 5 AD FROM APPLE", "http://feedproxy.google.com/~r/businessinsider/~3/Ou1oxWiAQns/heres-the-first-iphone-5-ad-from-apple-2012-9", "This Brain Chemical Could Be Why We Binge Eat", "http://feedproxy.google.com/~r/businessinsider/~3/W7HVhFoSwkQ/overeating-caused-by-brain-chemical-enkephalin-2012-9", "Hockey Coach Delivers First Pitch Strike Using A Hockey Stick", "http://feedproxy.google.com/~r/businessinsider/~3/t1nchK2TA4Y/video-lightning-coach-guy-boucher-with-first-pitch-strike-for-rays-using-a-hockey-stick-2012-9"];
sources[9] = ["USA Today", "general", "http://www.usatoday.com/", "Teens who cut out sugary drinks slowed weight gain", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/xghVS_sI1fQ/1", "Colo. mass-shooting theater to reopen", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/7qQLtOofCKs/1", "Libyans storm militia in backlash of attack on U.S.", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/iXMUOG0vbHQ/1"];
sources[10] = ["The New York Times", "general", "http://www.nytimes.com/", "Iranian Group M.E.K. Wins Removal From U.S. Terrorist List", "http://www.nytimes.com/2012/09/22/world/middleeast/iranian-opposition-group-mek-wins-removal-from-us-terrorist-list.html?partner=rss&emc=rss", "At the Track, Racing Economics Collide With Veterinarians’ Oath", "http://www.nytimes.com/2012/09/22/us/at-the-track-racing-economics-collide-with-veterinarians-oath.html?partner=rss&emc=rss", "Los Angeles Prepares for Carmageddon II", "http://www.nytimes.com/2012/09/22/us/los-angeles-prepares-for-carmageddon-sequel.html?partner=rss&emc=rss"];
sources[11] = ["TMZ", "entertainment", "http://www.tmz.com/", "Tony Scott -- Wills His Entire Fortune to Wife and Kids", "http://www.tmz.com/2012/09/21/director-tony-scott-will-probate/", "Derek Boogaard -- Dead NHL Star's Parents File $9.8 Million Lawsuit", "http://www.tmz.com/2012/09/21/derek-boogaard-parents-lawsuit-nhl-pa-new-york-rangers/", "Michael Vick's Brother Marcus Vick -- WANTED After Skipping Court Date", "http://www.tmz.com/2012/09/21/marcus-vick-arrest-warrant-virginia-suspended-license/"];
sources[12] = ["Wired", "technology", "http://www.wired.com/", "From Food to iPhones: These Are the Lines That Try Men's Souls", "http://feeds.wired.com/~r/wired/index/~3/4eDoHlbbmd0/", "Game|Life Podcast: PlayStation Price Grows as Tokyo Game Show Shrinks", "http://feeds.wired.com/~r/wired/index/~3/7DxYi488-PQ/", "NIH Decision Signals the Beginning of the End for Medical Research on Chimps", "http://feeds.wired.com/~r/wired/index/~3/S3P56upwzY4/"];
sources[13] = ["Amazon.com", "daily", "http://www.amazon.com/", "Deal of the Day: Irwin Vise-Grip GrooveLock 8-Piece Plier Set", "http://www.amazon.com/dp/B000GR37WU/ref=xs_gb_rss_2498201/?smid=ATVPDKIKX0DER&ccmID=380205&tag=rssfeeds-20", "Save up to 50% on Sole Treadmills", "http://www.amazon.com/s/ref=xs_gb_rss_2957311/?rh=n%3A3375251%2Ck%3Asole+treadmill%2Cp_4%3ASole%2Cp_6%3AATVPDKIKX0DER%2Cn%3A!3375301%2Cn%3A3407731%2Cn%3A3407741%2Cn%3A3407831&bbn=3407741&keywords=sole+treadmill&ie=UTF8&qid=1342457286&rnid=3407741#/?rh=n%3A3375251%2Ck%3Asole+treadmill%2Cp_4%3ASole%2Cp_6%3AATVPDKIKX0DER%2Cn%3A!3375301%2Cn%3A3407731%2Cn%3A3407741%2Cn%3A3407831%2Cp_8%3A2229058011%2Cp_72%3A1248957011%2Cp_n_feature_keywords_browse-bin%3A3451600011&bbn=3407831&keywords=sole+treadmill&ie=UTF8&qid=1342457313&rnid=2760134011&ccmID=380205&tag=rssfeeds-20", "Save up to 50% on Sole Elliptical Trainers", "http://www.amazon.com/s/ref=xs_gb_rss_2957341/?rh=n%3A3375251%2Cn%3A!3375301%2Cn%3A3407731%2Ck%3Asole%2Cn%3A3407741%2Cn%3A3407771%2Cp_85%3A2470955011%2Cp_4%3ASole%2Cp_6%3AATVPDKIKX0DER&bbn=3407771&keywords=sole&ie=UTF8&qid=1348199928&rnid=331592011&ccmID=380205&tag=rssfeeds-20"];
sources[14] = ["ABC News", "general", "http://abcnews.go.com/", "Romney Paid More Taxes Than Required - 14 Pct.", "http://feeds.abcnews.com/click.phdo?i=9a9b43c93bfbd02c573bc87b58411556", "Ann Romney's Plane Makes Emergency Landing", "http://feeds.abcnews.com/click.phdo?i=72588853b89fdd8e554d9089aa8371c6", "Obama Ad Fails to Stop Pakistan Riots", "http://feeds.abcnews.com/click.phdo?i=798e4cf3ade9ab744d7afc3a9fe71512"];
sources[15] = ["NASA Picture of the Day", "daily", "http://apod.nasa.gov/apod/", "Endeavour's Final Flight Ends", "http://www.nasa.gov/multimedia/imagegallery/endeavour_garver.html"];
sources[16] = ["Politico", "politics", "http://www.politico.com/", "Mitt tax release puzzles strategists", "http://feeds.politico.com/click.phdo?i=7a03d985197e43be47ddb291e87334b2", "Senate passes stop-gap spending bill", "http://feeds.politico.com/click.phdo?i=383003352690cf9abdaf275844c3e084", "No Vegas honeymoon for Romney", "http://feeds.politico.com/click.phdo?i=4c6f4da3eecb0d45c6890368fedcccd5"];
sources[17] = ["E! Online", "entertainment", "http://www.eonline.com/", "Justin Timberlake and Pals Take Bachelor Party to Mexico", "http://feeds.eonline.com/~r/eonline/topstories/~3/PW8uJm2NZXI/justin-timberlake-and-pals-take-bachelor-party-to-mexico", "Amanda Bynes' Driving Drama: License Suspended Due to Unpaid Tickets, Not Dings and Alleged DUI", "http://feeds.eonline.com/~r/eonline/topstories/~3/D-8bfBIG5tw/amanda-bynes-driving-drama-license-suspended-due-to-unpaid-tickets-not-dings-and-alleged-dui", "Dark Knight Tragedy: Shooting Victims Sue Movie Theater for Negligence", "http://feeds.eonline.com/~r/eonline/topstories/~3/J7NY_7pNKPA/dark-knight-tragedy-shooting-victims-sue-movie-theater-for-negligence"];
sources[18] = ["The Wall Street Journal", "business", "http://online.wsj.com/home-page", "Senate Passes $500 Billion Funding Bill", "http://online.wsj.com/article/SB10000872396390444165804578011440569584714.html?mod=rss_whats_news_us", "Federal Jobs Program Fails to Catch On", "http://online.wsj.com/article/SB10000872396390443890304578010173740711636.html?mod=rss_whats_news_us", "Harley Goes Lean to Build Hogs", "http://online.wsj.com/article/SB10000872396390443720204578004164199848452.html?mod=rss_whats_news_us"];
sources[19] = ["HowStuffWorks", "science-and-health", "http://www.howstuffworks.com/", "How Fakebook Works", "http://computer.howstuffworks.com/fakebook.htm", "10 Ways to Survive a Snowstorm", "http://adventure.howstuffworks.com/10-ways-to-survive-a-snowstorm.htm", "How Volcanoes Work", "http://science.howstuffworks.com/nature/natural-disasters/volcano.htm"];
sources[20] = ["Reddit", "random", "http://www.reddit.com/", "Verizon CFO - \"Unlimited is just a word, it doesn't really mean anything.\"", "http://www.reddit.com/r/technology/comments/108trt/verizon_cfo_unlimited_is_just_a_word_it_doesnt/", "President Bill Clinton: \"the problem with any ideology is that it gives the answer before you look at the evidence. \"", "http://www.reddit.com/r/politics/comments/108t2y/president_bill_clinton_the_problem_with_any/", "This imprint in the sand was left by a sleeping elephant at the Oregon Zoo.", "http://www.reddit.com/r/pics/comments/1095ic/this_imprint_in_the_sand_was_left_by_a_sleeping/"];
sources[21] = ["BBC News", "general", "http://www.bbc.co.uk/news/", "Mitchell police row: PM attacked", "http://www.bbc.co.uk/news/uk-politics-19683692#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa", "Protesters rout Benghazi militia", "http://www.bbc.co.uk/news/world-africa-19680785#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa", "Clegg 'fair tax' conference call", "http://www.bbc.co.uk/news/uk-politics-19676263#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa"];
sources[22] = ["Mashable", "technology", "http://mashable.com/", "eBay, Grameen Foundation to Launch Mobile Marketplace in Rural Indonesia", "http://feeds.mashable.com/~r/Mashable/~3/Dn6Z6blDl-A/", "Social Travel Apps Broaden Your Vacation Options", "http://feeds.mashable.com/~r/Mashable/~3/6AuNqE9N2uA/", "English Soccer Club Defends Player on Twitter After Racial Abuse", "http://feeds.mashable.com/~r/Mashable/~3/htk9cYJn18k/"];
sources[23] = ["Ars Technica", "technology", "http://arstechnica.com/", "Web attacks on big US banks originated in Iran, unconfirmed reports say", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/pC1PpRydLtk/", "California's first 3D printer retail store to sell $600 model", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/ubq1tEywWjo/", "Confirmed: Apple's A6 uses triple-core GPU", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/1t4epLY10Ls/"];
sources[24] = ["CBS News", "general", "http://www.cbsnews.com/", "Romney: We don't need a turnaround", "http://feeds.cbsnews.com/~r/CBSNewsMain/~3/HZmkNhHxpr0/", "Romney paid 14.1% tax rate in 2011", "http://feeds.cbsnews.com/~r/CBSNewsMain/~3/RmAuGtdupfU/", "Deadly riots in Pakistan over film", "http://feeds.cbsnews.com/~r/CBSNewsMain/~3/yGq9NZHpkRs/"];
sources[25] = ["Cracked", "random", "http://www.cracked.com/", "23 Modern Gadgets After the Apocalypse", "http://feedproxy.google.com/~r/CrackedRSS/~3/-f2eSsb3A8E/", "3 Reasons We Need to Reexamine How We Elect Presidents", "http://feedproxy.google.com/~r/CrackedRSS/~3/8GLaeFOviQo/", "5 Terrifying Origin Stories Behind Popular Children's Songs", "http://feedproxy.google.com/~r/CrackedRSS/~3/Y7YJUoeUfIU/article_20032_5-terrifying-origin-stories-behind-popular-childrens-songs.html"];
sources[26] = ["People", "entertainment", "http://www.people.com/people/", "Amanda Bynes Charged with Driving with a Suspended License", "http://feeds.people.com/~r/people/headlines/~3/2c-lLCVdHh4/0,,20632376,00.html", "Leigh-Allyn Baker Welcomes Second Son", "http://feeds.people.com/~r/people/headlines/~3/-eYOQ_LNIds/", "Gilles Marini: Any Bone Is Worth Breaking to Win Dancing with the Stars", "http://feeds.people.com/~r/people/headlines/~3/NVnFeaY2fss/0,,20632028,00.html"];
sources[27] = ["Popular Science", "science-and-health", "http://www.popsci.com/", "This Week In The Future, September 17-21, 2012", "http://feeds.popsci.com/c/34567/f/632419/s/23af9657/l/0L0Spopsci0N0Cannouncements0Carticle0C20A120E0A90Cweek0Efuture0Eseptember0E170E210E20A12/story01.htm", "Today On Mars: Curiosity Shows American Pride", "http://feeds.popsci.com/c/34567/f/632419/s/23afc57e/l/0L0Spopsci0N0Cscience0Carticle0C20A120E0A90Ctoday0Emars0Ecuriositys0Eamerican0Epride/story01.htm", "The Most Amazing Images Of The Week, September 17-21, 2012", "http://feeds.popsci.com/c/34567/f/632419/s/23af384f/l/0L0Spopsci0N0Cscience0Carticle0C20A120E0A90Cmost0Eamazing0Eimages0Eweek0Eseptember0E170E210E20A12/story01.htm"];
sources[28] = ["CNBC", "business", "http://www.cnbc.com/", "Fed Wants Inflation Now, Will Clean Up ‘Mess’ Later: El-Erian", "http://www.cnbc.com//id/49115958", "Apple Fans Shrug Off Maps Fiasco, Lap Up iPhone 5", "http://www.cnbc.com//id/49115586", "Apple Fanatics Line up Around the Globe", "http://www.cnbc.com//id/49117915"];
sources[29] = ["ESPN", "sports", "http://espn.go.com/", "Backups Brown, Barden shine as Giants cruise", "http://scores.espn.go.com/nfl/recap?gameId=320920029", "Martin homers to lead off 10th, gives Yanks win", "http://scores.espn.go.com/mlb/recap?gameId=320921110", "Jeter reaffirms he wants to stay Yankee for life", "http://espn.go.com/new-york/mlb/story/_/id/8408313/derek-jeter-reaffirms-wants-stay-new-york-yankee-life"];
sources[30] = ["SB Nation", "sports", "http://www.sbnation.com/", "Baylor Vs. UL Monroe Final Score: Bears Shrug Off Slow Start, Win 47-42", "http://www.sbnation.com/ncaa-football/2012/9/21/3371418/baylor-louisiana-monroe-final-score-recap", "A Football Game Is Happening In Monroe, Louisiana", "http://www.sbnation.com/2012/9/21/3371460/redneck-ognize-slobber-ul-monroe-baylor", "Chad Johnson Pleads No Contest, Receives One Year Of Probation", "http://www.sbnation.com/nfl/2012/9/21/3371218/Evelyn-Lozada-chad-johnson-arrest-ochocinco-court"];
sources[31] = ["Yahoo! News", "general", "http://news.yahoo.com/", "Libyans storm Islamist militia headquarters in backlash of attack on U.S.", "http://news.yahoo.com/libyans-storm-militia-backlash-attack-us-225317193.html", "Romney releases 2011 tax return, paid IRS 14.1 percent", "http://news.yahoo.com/blogs/ticket/romney-release-2011-tax-return-paid-irs-14-181125301--election.html", "Space shuttle Endeavour takes its final historic flight", "http://news.yahoo.com/photos/readers-endeavour-photos-slideshow/"];
sources[32] = ["IGN", "entertainment", "http://www.ign.com/", "J.J. Abrams/Prisoner of Azkaban Director Team Up", "http://feeds.ign.com/~r/ign/news/~3/96TtkFT3-P4/jj-abrams-and-alfonso-cuaron-team-for-nbc-pilot", "FOX Nabs New Comedy Series from Ted Trio", "http://feeds.ign.com/~r/ign/news/~3/J6ATz2qH890/fox-nabs-new-comedy-series-from-ted-trio", "Hero Worship: Darth Vader Still Rules", "http://feeds.ign.com/~r/ign/news/~3/lHD1qSTahAM/hero-worship-2"];
sources[33] = ["The Huffington Post", "general", "http://www.huffingtonpost.com/", "Voting Wrongs", "http://www.huffingtonpost.com/2012/09/21/voting-wrongs_n_1905311.html", "Benghazi Anti-Militia Protest: Libyan Protesters Drive Islamist Militia From Country's 2nd-Largest City", "http://www.huffingtonpost.com/2012/09/21/libya-militia-protests-benghazi_n_1905288.html", "ALMA Awards 2012: Winners And Show Highlights (VIDEO, PHOTOS)", "http://www.huffingtonpost.com/2012/09/21/alma-awards-2012-winners-_n_1905245.html"];
sources[34] = ["TechCrunch", "technology", "http://techcrunch.com/", "Overcome These 6 Challenges When Selling To Startups", "http://feedproxy.google.com/~r/Techcrunch/~3/UdHj-Sikq6k/", "No One Who Looks Like This Works, Or Has Worked, At TechCrunch", "http://feedproxy.google.com/~r/Techcrunch/~3/TB3WhOaDqCc/", "Watch Apple’s First iPhone 5 TV Ads: “Physics,” “Cheese,” “Thumb,” and “Ears”", "http://feedproxy.google.com/~r/Techcrunch/~3/omPPX6homgY/"];
sources[35] = ["Time", "general", "http://www.time.com/time/", "Romney Releases 2011 Taxes: Returns Show He Paid 14% Effective Rate", "http://feedproxy.google.com/~r/time/topstories/~3/1GbTQvJo6TU/", "The iPhone 5 Maps Flap: Five Alternatives to Apple's Panned Product", "http://feedproxy.google.com/~r/time/topstories/~3/K9oXos-ByLk/", "Viewpoint: The Problem with Calling Immigrants \"Illegal\"", "http://feedproxy.google.com/~r/time/topstories/~3/a-zq1ojBgPQ/"];
sources[36] = ["CNN", "general", "http://www.cnn.com/", "Libyan democracy supporters take over radical group's HQ", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/204FfUXcxb4/index.html", "Ex-SEALs died after rushing to help", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/dCfrCf3J_P4/index.html", "Muslim-led protests kill 15 in Pakistan", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/Cie9sf3LFow/index.html"];
sources[37] = ["WebMD", "science-and-health", "http://www.webmd.com/", "Which Birth Control Methods Are Best for Teens?", "http://www.webmd.com/sex/birth-control/news/20120921/which-birth-control-methods-best-for-teens?src=RSS_PUBLIC", "Sugary Drinks and Weight Gain Linked", "http://www.webmd.com/diet/news/20120921/sugary-drink-weight-gain-link?src=RSS_PUBLIC", "Summer Tips for Psoriasis", "http://www.webmd.com/skin-problems-and-treatments/psoriasis/expck/psoriasis-in-spring-and-summer?src=RSS_PUBLIC"];
sources[38] = ["BuzzFeed", "random", "http://www.buzzfeed.com/", "Stephen King Stories Starring Superheroes", "http://www.buzzfeed.com/donnad/stephen-king-stories-starring-superheroes", "The Mistake", "http://www.buzzfeed.com/txblacklabel/the-mistake-nsfw-28m7", "The Best \"Dark Knight\"-Quoting K-Pop Jam You'll Hear Today", "http://www.buzzfeed.com/perpetua/the-best-dark-knight-quoting-k-pop-jam-youll-he"];
sources[39] = ["Discovery", "science-and-health", "http://news.discovery.com/", "Anti-Islam Video Will Remain On YouTube", "http://news.discovery.com/tech/anti-islam-video-will-remain-youtube-120921.html#mkcpgn=rssnws1", "Playboy Bunny Being Drowned Out by Rising Seas", "http://news.discovery.com/animals/playboy-bunny-nearly-drowns-out-due-to-sea-level-rise.html#mkcpgn=rssnws1", "Life Expectancy Drops for Least Educated", "http://news.discovery.com/human/life-expectancy-shrinking-for-uneducated-white-women-120921.html#mkcpgn=rssnws1"];
sources[40] = ["Sports Illustrated", "sports", "http://sportsillustrated.cnn.com/", "Something Brewing", "http://sportsillustrated.cnn.com/baseball/mlb/scoreboards/today/?xid=si_topstories", "It's now desperation time for Dodgers, Angels", "http://mlb.si.com/2012/09/21/weekend-watch-pen-ultimatum-for-fading-contenders-like-dodgers-angels/#more-1857?xid=si_topstories", "Michigan-ND stand up, more Superlatives", "http://college-football.si.com/2012/09/21/notre-dame-michigan-saturday-superlatives/?xid=si_topstories"];
sources[41] = ["The Drudge Report", "politics", "http://www.drudgereport.com/", "CAMPAIGN SCARE: ANN ROMNEY PLANE MAKES EMERGENCY LANDING...", "http://feedproxy.google.com/~r/DrudgeReportFeed/~3/fQC2RFtUywo/", "Cabin filled with smoke...", "http://feedproxy.google.com/~r/DrudgeReportFeed/~3/oX5_jV8exHo/US_ANN_ROMNEY_EMERGENCY_LANDING", "Electrical Fire...", "http://feedproxy.google.com/~r/DrudgeReportFeed/~3/Zp_udYcQkAk/"];
sources[42] = ["The Washington Post", "politics", "http://www.washingtonpost.com/", "Mitt Romney releases tax return for 2011, showing he paid 14.1 percent tax rate", "http://feeds.washingtonpost.com/click.phdo?i=762cde18ccfc89a80aa64dfa4ab2b70a", "At AARP summit, campaigns joust over Ryan Medicare plan", "http://feeds.washingtonpost.com/click.phdo?i=21132f09e297fd0c2b8ebb496d624e27", "Congress wraps up, leaving work until after election", "http://feeds.washingtonpost.com/click.phdo?i=0e4bf5000077b10e35ce891b15f09b60"];

/* randomly sort the sources */
sources.sort(function() {return 0.5 - Math.random()} );

/* guarantee that the fourth unit is Amazon */
if (sources[3][0] != "Amazon.com") {
    var Amazon_index = -1;
    for (a = 0; a < sources.length; a++) {
        if (sources[a][0] == "Amazon.com") {
            Amazon_index = a;
            break;
        }
    }
    if (Amazon_index != -1) {
        var temp = sources[3];
        sources[3] = sources[Amazon_index];
        sources[Amazon_index] = temp;
    }
}

/* guarantee that the first unit is a general news source */
if (sources[0][1] != "general") {
    var general_index = -1;
    for (b = 0; b < sources.length; b++) {
        if (sources[b][1] == "general") {
            general_index = b;
            break;
        }
    }
    if (general_index != -1) {
        var temp = sources[0];
        sources[0] = sources[general_index];
        sources[general_index] = temp;
    }
}

var number_of_rows = Math.ceil(sources.length / 4);

for (i = 0; i < number_of_rows; i++) {
    
    var container_row = document.createElement("div");
    container_row.className = "container row" + i;
    
    var row = document.createElement("div");
    row.className = "row";
    container_row.appendChild(row);
    
    var unit1 = document.createElement("div");
    unit1.className = "threecol";
    
    var unit2 = document.createElement("div");
    unit2.className = "threecol";
    
    var unit3 = document.createElement("div");
    unit3.className = "threecol";
    
    var unit4 = document.createElement("div");
    unit4.className = "threecol last";
    
    for (j = 0; j < 4; j++) {
        
        var index = (i * 4) + j;
        if (index < sources.length) {
            
            var unit_top = document.createElement("div");
            var unit_bottom = document.createElement("div");
            
            // checkerboard pattern for blue vs. red units
            if ((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0)) {
                unit_top.className = "unit-even-top";
                unit_bottom.className = "unit-even-bottom";
            }
            else {
                unit_top.className = "unit-odd-top";
                unit_bottom.className = "unit-odd-bottom";
            }
            
            // put logo and link to home page in top part of unit
            var source_logo_name = sources[index][0].replace(/ /g, "_") + ".png";
            var source_logo_location = "logos/" + source_logo_name;
            var logo_tag = '<img src="' + source_logo_location + '" alt="' + sources[index][0] + '" style="padding:5px;"/>';
            var name_tag = '<a href="' + sources[index][2] + '">' + sources[index][0] + '</a>';
            unit_top.innerHTML = logo_tag + '<br>' + name_tag;
            
            
            // put links in list in bottom part of unit
            
            var bottomHTML = "<ul>";
            
            //if (sources[index][3] == 1) {
            //    bottomHTML = '<p><a href="' + sources[index][5] + '">' + sources[index][4] + '</a></p>';
            //    bottomHTML = bottomHTML + '<br><br>' + '<img style="max-width: 70%; max-height: 70%" display: block; src="' + sources[index][6] + '" alt="' + sources[index][5] + '" class="center"/>';
            //}
            
            for (k = 3; k + 1 < sources[index].length; k = k + 2) {  
                bottomHTML = bottomHTML + '<li><a href="' + sources[index][k+1] + '">' + sources[index][k] + '</li></a>';
                if (k != sources[index].length - 2) {
                   // bottomHTML = bottomHTML + '<br><br>';
                }
            }
            
            unit_bottom.innerHTML = "<p>" + bottomHTML + "</ul></p>";
            
            if (j == 0) {
                unit1.appendChild(unit_top);
                unit1.appendChild(unit_bottom);
            }
            else if (j == 1) {
                unit2.appendChild(unit_top);
                unit2.appendChild(unit_bottom);
            }
            else if (j == 2) {
                unit3.appendChild(unit_top);
                unit3.appendChild(unit_bottom);
            }
            else if (j == 3) {
                unit4.appendChild(unit_top);
                unit4.appendChild(unit_bottom);
            }
        }
    }
    
    row.appendChild(unit1);
    row.appendChild(unit2);
    row.appendChild(unit3);
    row.appendChild(unit4);
    
    document.body.appendChild(container_row);
}

} 