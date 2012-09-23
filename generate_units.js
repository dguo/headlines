function generate_units()
{

var sources = []
sources[0] = ["Rolling Stone", "entertainment", "http://www.rollingstone.com/", "Swedish House Mafia on What's Next", "http://www.rollingstone.com/music/news/swedish-house-mafia-on-whats-next-20120922", "Usher Puts His Game Face on for 'The Voice'", "http://www.rollingstone.com/music/news/usher-puts-his-game-face-on-for-the-voice-20120922", "Fiona Apple Talks to Audience About Her Drug Arrest", "http://www.rollingstone.com/music/news/fiona-apple-talks-to-audience-about-her-drug-arrest-20120922"];
sources[1] = ["NBC News", "general", "http://www.nbcnews.com/", "Anti-Muslim film: Pakistan minister offers bounty", "http://pheedo.msnbc.msn.com/click.phdo?i=45c8d8b013cb0e1cced617d52bd8db96", "Video: GOP urges Romney to shake up campaign", "http://pheedo.msnbc.msn.com/click.phdo?i=b8da0d3082e5110020a575ba3b55d5c0", "Many Muslims denouncing anti-Islam film decry violent protests, too", "http://pheedo.msnbc.msn.com/click.phdo?i=fe155d4b374170e53cd0ebd2fc754469"];
sources[2] = ["Gamespot", "entertainment", "http://www.gamespot.com/", "Tokyo Game Show 2012 Photo Gallery", "http://www.gamespot.com/special-feature/tgs2012_photos/photos/index.html", "Augmented reality headset developers on creating new experience", "http://www.gamespot.com/news/augmented-reality-headset-developers-on-creating-new-experience-6397027", "BlazBlue: Chrono Phantasma Overview With The Producer", "http://www.gamespot.com/events/tgs-2012/video.html?sid=6397026"];
sources[3] = ["NPR", "general", "http://www.npr.org/", "New Wave Of School Integration In Birmingham, Ala.", "http://www.npr.org/2012/09/07/160745722/new-wave-of-integration-in-birmingham-ala-schools?ft=1&f=1001", "Gaza's Future Looks Bleaker Even Than Its Past", "http://www.npr.org/2012/09/23/161587070/gazas-future-looks-bleaker-even-than-its-past?ft=1&f=1001", "Trader Joe's Recalls Brand Of Peanut Butter", "http://www.npr.org/2012/09/22/161629140/trader-joes-recalls-brand-of-peanut-butter?ft=1&f=1001"];
sources[4] = ["Forbes", "business", "http://www.forbes.com/", "Capcom's Reasons For Releasing 'Monster Hunter 4' As A 3DS Exclusive Don't Add Up", "http://www.forbes.com/sites/erikkain/2012/09/22/capcoms-reason-for-releasing-monster-hunter-4-on-3ds-only-still-doesnt-make-sense/", "Lori Greiner, Shark Tank Star And Queen Of QVC, On A Great Asset: A Partner In Her Spouse", "http://www.forbes.com/sites/davidkwilliams/2012/09/22/lori-greiner-shark-tank-star-and-queen-of-qvc-on-a-great-asset-a-partner-in-her-spouse/", "Mitt Romney Passing On Nearly Two Million In Charity - Stupidest Thing I Ever Heard", "http://www.forbes.com/sites/peterjreilly/2012/09/22/mitt-romney-passing-on-nearly-two-million-in-charity-stupidest-thing-i-ever-heard/"];
sources[5] = ["Bleacher Report", "sports", "http://bleacherreport.com/", "Tennessee vs. Akron: Zips Game Plan Was Good but It Had a Fatal Flaw", "http://bleacherreport.com/articles/1344134-tennessee-vs-akron-zips-game-plan-was-good-but-it-had-a-fatal-flaw", "UFC 152 Results: The Real Winners and Losers", "http://bleacherreport.com/articles/1343821-ufc-152-results-the-real-winners-and-losers", "Jones vs Belfort Results: What We Learned from UFC 152's Main Event", "http://bleacherreport.com/articles/1343566-jones-vs-belfort-results-what-we-learned-from-ufc-152s-main-event"];
sources[6] = ["Reuters", "general", "http://www.reuters.com/", "Apple seeks U.S. Samsung sales ban, $707 million more in damages", "http://feeds.reuters.com/~r/reuters/topNews/~3/Y8423OBDU4s/us-apple-samsung-idUSBRE88L04B20120922", "Romney tax release shows 14.1 percent rate in 2011", "http://feeds.reuters.com/~r/reuters/topNews/~3/RnlFr5Ex7EQ/us-usa-campaign-romney-taxes-idUSBRE88K11Y20120922", "Free Syrian Army rebel leaders move from Turkey to Syria", "http://feeds.reuters.com/~r/reuters/topNews/~3/89VYD9EDW4I/us-syria-crisis-idUSBRE88J0X720120922"];
sources[7] = ["Fox News", "general", "http://www.foxnews.com/", "Private Honduras City Will Have Minimal Taxes, Gov't", "http://www.foxnews.com/world/2012/09/11/private-city-in-honduras-will-have-minimal-taxes-government/", "NYPD Charges Mauling Victim With Tresspassing", "http://www.foxnews.com/us/2012/09/23/new-york-city-man-mauled-by-tiger-in-bronx-zoo-charged-with-trespassing/", "Houston Cop Kills Double Amputee in Wheelchair", "http://www.foxnews.com/us/2012/09/22/officer-shoots-kills-double-amputee-in-wheelchair-in-houston/"];
sources[8] = ["Business Insider", "business", "http://www.businessinsider.com/", "The Unintended Consequences Of QE Infinity", "http://feedproxy.google.com/~r/businessinsider/~3/Dcj_3TfyCLM/the-unintended-consequences-of-qe-infinity-2012-9", "There's A Basic Flaw At The Heart Of Obamacare", "http://feedproxy.google.com/~r/businessinsider/~3/IA2DS4WdwJM/theres-a-basic-flaw-at-the-heart-of-obamacare-2012-9", "Everyone In The Gulf Was Shocked To See This Iraqi Patrol Boat", "http://feedproxy.google.com/~r/businessinsider/~3/Yq_Fx3G-nUc/iraq-joins-mine-clearing-exercises-2012-9"];
sources[9] = ["USA Today", "general", "http://www.usatoday.com/", "States see more poverty among children, unemployed", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/LBtOwP3YHEo/1", "Romney tax return release doesn't satisfy Democrats", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/8njbGTrMroA/1", "Syrian rebels are said to seek Islamic democracy", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/Nen-ItWKHOs/1"];
sources[10] = ["The New York Times", "general", "http://www.nytimes.com/", "Florida State 49, Clemson 37: Seminoles Stand Atop A.C.C. After Offense Vs. Offense Duel With Clemson", "http://www.nytimes.com/2012/09/23/sports/ncaafootball/seminoles-stand-atop-acc-after-offense-vs-offense-duel-with-clemson.html?partner=rss&emc=rss", "With Rich Donors, a More Candid Romney Emerges", "http://www.nytimes.com/2012/09/23/us/politics/with-donors-a-more-candid-romney-emerges.html?partner=rss&emc=rss", "Iran Says Siemens Tried to Sabotage Its Nuclear Program", "http://www.nytimes.com/2012/09/23/world/middleeast/iran-says-siemens-tried-to-sabotage-its-nuclear-program.html?partner=rss&emc=rss"];
sources[11] = ["TMZ", "entertainment", "http://www.tmz.com/", "Amanda Bynes -- Friends Are Furious Her Family Isn't Helping Her", "http://www.tmz.com/2012/09/22/amanda-bynes-friends-family/", "Lindsay Lohan -- I Call Shotgun!", "http://www.tmz.com/2012/09/22/lindsay-lohan-driving-photo/", "Fiona Apple -- Explains Her Drug Arrest ... In Most Bizarre Speech Ever [Video]", "http://www.tmz.com/2012/09/22/fiona-apple-arrest-houston-concert-video/"];
sources[12] = ["Wired", "technology", "http://www.wired.com/", "<em>Bond 50</em> Giveaway: Snag Massive Blu-ray Box Set Celebrating Half-Century of 007", "http://feeds.wired.com/~r/wired/index/~3/4698uc7_PGc/", "Stunning Shots of Space Shuttle <cite>Endeavour</cite>'s Final Flight", "http://feeds.wired.com/~r/wired/index/~3/JaPwBcK0P0s/", "King of <cite>Hexagon</cite>: A Game Creator's Furious Fight to Keep His Own High Score", "http://feeds.wired.com/~r/wired/index/~3/sq8WN1QlATA/"];
sources[13] = ["Amazon.com", "daily", "http://www.amazon.com/", "Deal of the Day: Panasonic 3D Blu-Ray Disc 5.1 Surround Sound Home Theater System", "http://www.amazon.com/dp/B0078GCLUG/ref=xs_gb_rss_2920081/?ccmID=380205&tag=rssfeeds-20", "$19.95 Blowout: GE Nighthawk Platinum Headlight Bulbs", "http://www.amazon.com/gp/part-finder//ref=xs_gb_rss_2729161/?ie=UTF8&scNode=2237144011&ccmID=380205&tag=rssfeeds-20", "Save 50% on Lamaze Maternity Clothing", "http://www.amazon.com/s/ref=xs_gb_rss_2943811/?node=1285228011&emi=ATVPDKIKX0DER&brand=Lamaze&pct-off=50-&ccmID=380205&tag=rssfeeds-20"];
sources[14] = ["ABC News", "general", "http://abcnews.go.com/", "Ryan Blasts Obama for 'Dismantling' Space Program", "http://feeds.abcnews.com/click.phdo?i=13f9bc10e5cf2a38cf0d754f991039e4", "'Unwanted Kids' Dumped?: Russian Officials Want Access to Mont. Ranch", "http://feeds.abcnews.com/click.phdo?i=650682cbb6b36e27e42603cd03fe3060", "Obama Shifts Gears in Wisconsin", "http://feeds.abcnews.com/click.phdo?i=c6c44b07b2e896edee77a8cccdcefb4e"];
sources[15] = ["NASA Picture of the Day", "daily", "http://apod.nasa.gov/apod/", "Endeavour's Final Flight Ends", "http://www.nasa.gov/multimedia/imagegallery/endeavour_garver.html"];
sources[16] = ["Politico", "politics", "http://www.politico.com/", "Obama looks to block Romney in Wisc.", "http://feeds.politico.com/click.phdo?i=26b428fc1bf34c4fd51e85ebcb9a0040", "Cashing in on political comedy", "http://feeds.politico.com/click.phdo?i=81f46c605950ff4a68c047c08f103080", "'Obamacare' foes fear GOP losses", "http://feeds.politico.com/click.phdo?i=1e733bae7a139d8aca583b5601d599a3"];
sources[17] = ["E! Online", "entertainment", "http://www.eonline.com/", "James Franco, Rock Star? Multi-Hyphenate Debuts New Music Video", "http://feeds.eonline.com/~r/eonline/topstories/~3/pa969l6yYlk/james-franco-rock-star-multi-hyphenate-debuts-new-music-video", "Fiona Apple Vents Onstage About Drug Arrest, Treatment by Police", "http://feeds.eonline.com/~r/eonline/topstories/~3/1oBNCUF3OWY/fiona-apple-vents-onstage-about-drug-arrest-treatment-by-police", "Green Day Frontman Has an Onstage Meltdown", "http://feeds.eonline.com/~r/eonline/topstories/~3/91Zn9A1oASY/green-day-frontman-has-an-onstage-meltdown"];
sources[18] = ["The Wall Street Journal", "business", "http://online.wsj.com/home-page", "Pension Crisis Looms Despite Cuts", "http://online.wsj.com/article/SB10000872396390443890304578010752828935688.html?mod=rss_whats_news_us", "IMF Slams Lack of Competition in Greek Fuel Market", "http://online.wsj.com/article/SB10000872396390444620104578010360773875202.html?mod=rss_whats_news_us", "Italy to Work With Fiat on Exports", "http://online.wsj.com/article/SB10000872396390444620104578012860848910232.html?mod=rss_whats_news_us"];
sources[19] = ["HowStuffWorks", "science-and-health", "http://www.howstuffworks.com/", "How Fakebook Works", "http://computer.howstuffworks.com/fakebook.htm", "10 Ways to Survive a Snowstorm", "http://adventure.howstuffworks.com/10-ways-to-survive-a-snowstorm.htm", "How Volcanoes Work", "http://science.howstuffworks.com/nature/natural-disasters/volcano.htm"];
sources[20] = ["Reddit", "random", "http://www.reddit.com/", "A synchronized, 1 million person toilet flush is planned to clear a backed-up sewer system in Zimbabwe", "http://www.reddit.com/r/worldnews/comments/10anyj/a_synchronized_1_million_person_toilet_flush_is/", "This was uploaded to Facebook by my friend who is a teacher. Childlike wonder at its finest.", "http://www.reddit.com/r/pics/comments/10asxw/this_was_uploaded_to_facebook_by_my_friend_who_is/", "Brand new photobomb apparel from Nike!", "http://www.reddit.com/r/pics/comments/10bfua/brand_new_photobomb_apparel_from_nike/"];
sources[21] = ["BBC News", "general", "http://www.bbc.co.uk/news/", "Millionaires face tax crackdown", "http://www.bbc.co.uk/news/uk-politics-19690327#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa", "Ed Davey raps 'Tea Party' Tories", "http://www.bbc.co.uk/news/business-19688019#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa", "Church services for shot officers", "http://www.bbc.co.uk/news/uk-england-manchester-19685022#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa"];
sources[22] = ["Mashable", "technology", "http://mashable.com/", "62 Digital Resources You May Have Missed", "http://feeds.mashable.com/~r/Mashable/~3/9ibXvGoTlow/", "ITU Secretary-General: OK to Make Profit When Helping Developing Nations", "http://feeds.mashable.com/~r/Mashable/~3/QrffsaeY5OY/", "Bicyclean Pedals Toward Safer E-Waste Clean-Up", "http://feeds.mashable.com/~r/Mashable/~3/6c2fm4Die0A/"];
sources[23] = ["Ars Technica", "technology", "http://arstechnica.com/", "Apple demands $707 million in additional damages from Samsung", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/GR3dXFbS_q8/", "Pulsating Nanotube Spits Out Buckyballs", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/Bq8C_lxZYjQ/", "Is it better to review before or after code commit?", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/qInKJVA2qes/"];
sources[24] = ["CBS News", "general", "http://www.cbsnews.com/", "Libyan citizens protest militia groups", "http://feeds.cbsnews.com/~r/CBSNewsMain/~3/I52GlUBqtgM/", "Romney focuses on Calif. fundraising", "http://feeds.cbsnews.com/~r/CBSNewsMain/~3/1UcwVMDsvJU/", "Obama: More than 1 term to fix economy", "http://feeds.cbsnews.com/~r/CBSNewsMain/~3/nITujTUbxaI/"];
sources[25] = ["Cracked", "random", "http://www.cracked.com/", "5 Works of Art So Good They Ruined Their Whole Genre", "http://feedproxy.google.com/~r/CrackedRSS/~3/2RGzCSS8cK8/", "5 Illegal Drugs With Surprisingly Wholesome Medical Uses", "http://feedproxy.google.com/~r/CrackedRSS/~3/IAJmPJlKqRw/article_20023_5-illegal-drugs-with-surprisingly-wholesome-medical-uses.html", "The 6 Real and Terrifying Spider Superpowers", "http://feedproxy.google.com/~r/CrackedRSS/~3/pmiiicDY3X4/article_19315_the-6-real-terrifying-spider-superpowers.html"];
sources[26] = ["People", "entertainment", "http://www.people.com/people/", "Why It's OK for Christina Aguilera to Show Some Skin", "http://feeds.people.com/~r/people/headlines/~3/1iWRvz8ngq0/", "Emmy Nominations: PEOPLE TV Critic's Take", "http://feeds.people.com/~r/people/headlines/~3/xCyTN_aOU3g/0,,20304925_20613163,00.html", "Meet Community's Danny Pudi's Twins", "http://feeds.people.com/~r/people/headlines/~3/znVnhPBY-PM/"];
sources[27] = ["Popular Science", "science-and-health", "http://www.popsci.com/", "This Week In The Future, September 17-21, 2012", "http://feeds.popsci.com/c/34567/f/632419/s/23af9657/l/0L0Spopsci0N0Cannouncements0Carticle0C20A120E0A90Cweek0Efuture0Eseptember0E170E210E20A12/story01.htm", "Today On Mars: Curiosity Shows American Pride", "http://feeds.popsci.com/c/34567/f/632419/s/23afc57e/l/0L0Spopsci0N0Cscience0Carticle0C20A120E0A90Ctoday0Emars0Ecuriositys0Eamerican0Epride/story01.htm", "The Most Amazing Images Of The Week, September 17-21, 2012", "http://feeds.popsci.com/c/34567/f/632419/s/23af384f/l/0L0Spopsci0N0Cscience0Carticle0C20A120E0A90Cmost0Eamazing0Eimages0Eweek0Eseptember0E170E210E20A12/story01.htm"];
sources[28] = ["CNBC", "business", "http://www.cnbc.com/", "Fed Wants Inflation Now, Will Clean Up ‘Mess’ Later: El-Erian", "http://www.cnbc.com//id/49115958", "Apple Fans Shrug Off Maps Fiasco, Lap Up iPhone 5", "http://www.cnbc.com//id/49115586", "Apple Fanatics Line up Around the Globe", "http://www.cnbc.com//id/49117915"];
sources[29] = ["ESPN", "sports", "http://espn.go.com/", "Backups Brown, Barden shine as Giants cruise", "http://scores.espn.go.com/nfl/recap?gameId=320920029", "Orioles claim 16th straight extra-inning win", "http://scores.espn.go.com/mlb/recap?gameId=320922102", "Kansas St. upsets Sooners to avenge blowout", "http://scores.espn.go.com/ncf/recap?gameId=322660201"];
sources[30] = ["SB Nation", "sports", "http://www.sbnation.com/", "Oregon Keeps On Innovating", "http://www.sbnation.com/ncaa-football/2012/9/23/3375758/oregon-touchdown-colt-lyerla-bryan-bennet", "LA Galaxy Vs. Toronto FC, 2012 MLS: Galaxy Clinch Playoff Spot, Into Second Place", "http://www.sbnation.com/2012/9/23/3375694/la-galaxy-vs-toronto-fc-2012-mls-final-score-result", "Chicago Fire Vs. Columbus Crew, 2012 MLS: Fire Come Back For Vital Win", "http://www.sbnation.com/2012/9/23/3375552/chicago-fire-vs-columbus-crew-2012-mls-fire-final-score-result"];
sources[31] = ["Yahoo! News", "general", "http://news.yahoo.com/", "Beer flows as Oktoberfest begins in Munich, Germany", "http://news.yahoo.com/photos/beer-flows-as-oktoberfest-begins-1348360496-slideshow/", "CNN questioned over use of slain Libya ambassador's journal", "http://news.yahoo.com/blogs/upshot/cnn-obtains-journal-slain-ambassador-reportedly-goes-again-232525862.html", "Obama: Romney 'sure can afford to pay a little more' in taxes", "http://news.yahoo.com/blogs/ticket/obama-romney-sure-afford-pay-little-more-taxes-235711857--election.html"];
sources[32] = ["IGN", "entertainment", "http://www.ign.com/", "New Rise of the Guardians Poster", "http://feeds.ign.com/~r/ign/news/~3/-pk71XF09gY/new-posters-for-rise-of-the-guardians-and-more-upcoming-films", "Sweet Assassin's Creed Gear To Kill For", "http://feeds.ign.com/~r/ign/news/~3/sOIREFs7TYw/amazing-assassins-creed-gear-to-kill-for", "IGN Assemble! #55 - Reality Punches and Stuff", "http://feeds.ign.com/~r/ign/news/~3/G5Fzv5VKsrE/ign-assemble-55-reality-punches-and-stuff"];
sources[33] = ["The Huffington Post", "general", "http://www.huffingtonpost.com/", "Eugene Jarecki, Bill Maher Agree: The War On Drugs Is Bullsh*t (VIDEO)", "http://www.huffingtonpost.com/2012/09/22/eugene-jarecki-bill-maher_n_1906689.html", "Kansas State Upsets Oklahoma: Collin Klein Leads Wildcats Over Landry Jones, Sooners", "http://www.huffingtonpost.com/2012/09/22/kansas-state-football-colin-klein-oklahoma_n_1906748.html", "Notre Dame Football: No. 11 Irish Defeat No. 18 Michigan, 13-6", "http://www.huffingtonpost.com/2012/09/22/notre-dame-football-michigan-denard-robinson_n_1906727.html"];
sources[34] = ["TechCrunch", "technology", "http://techcrunch.com/", "The Geography of HTML5 Security", "http://feedproxy.google.com/~r/Techcrunch/~3/qD9jMk1uCwc/", "How Ridiculous Is It That Apple Maps Redirect To Google Maps On The Web?", "http://feedproxy.google.com/~r/Techcrunch/~3/4mz3OoggfrI/", "Ground Truth", "http://feedproxy.google.com/~r/Techcrunch/~3/tCEtpYdnh2g/"];
sources[35] = ["Time", "general", "http://www.time.com/time/", "Sex Education in Mississippi: Will a New Law Lower Teen Pregnancy Rates?", "http://feedproxy.google.com/~r/time/topstories/~3/7vs6g0jF850/", "The Problem with Calling Immigrants \"Illegal\"", "http://feedproxy.google.com/~r/time/topstories/~3/a-zq1ojBgPQ/", "NASA Working on Faster-than-Light Warp Drive", "http://feedproxy.google.com/~r/time/topstories/~3/Vggm8lP6wWs/"];
sources[36] = ["CNN", "general", "http://www.cnn.com/", "Sunni leader urges Muslims to have 'patience and wisdom'", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/hojgQAB3zAI/index.html", "Photos: Anti-U.S. demonstrations", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/3ab3f46gBkU/index.html", "Ex-SEALs died in effort to help in Libya", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/dCfrCf3J_P4/index.html"];
sources[37] = ["WebMD", "science-and-health", "http://www.webmd.com/", "Which Birth Control Methods Are Best for Teens?", "http://www.webmd.com/sex/birth-control/news/20120921/which-birth-control-methods-best-for-teens?src=RSS_PUBLIC", "Sugary Drinks and Weight Gain Linked", "http://www.webmd.com/diet/news/20120921/sugary-drink-weight-gain-link?src=RSS_PUBLIC", "Summer Tips for Psoriasis", "http://www.webmd.com/skin-problems-and-treatments/psoriasis/expck/psoriasis-in-spring-and-summer?src=RSS_PUBLIC"];
sources[38] = ["BuzzFeed", "random", "http://www.buzzfeed.com/", "The \"Star Wars\" Theme Song Is Music To This Baby's Ears", "http://www.buzzfeed.com/koolnewsblog/star-wars-theme-song-calms-crying-baby-1dgl", "\"Breakbad Mountain\"", "http://www.buzzfeed.com/txblacklabel/breakbad-mountain-28m7", "The Manliest Manly Men Movie On Netflix", "http://www.buzzfeed.com/lcosgrove/the-manliest-manly-men-movie-on-netflix"];
sources[39] = ["Discovery", "science-and-health", "http://news.discovery.com/", "TWiDN: If the Romans Had Glass Balls...", "http://news.discovery.com/human/roman-glass-balls-solar-dog-giant-cat-history-120921.html#mkcpgn=rssnws1", "Search for Mysterious Lost Da Vinci Aborted", "http://news.discovery.com/history/leonardo-da-vinci-mystery-lost-masterpiece-battle-of-anghiari-120922.html#mkcpgn=rssnws1", "Laser Beams Shoot from Printer", "http://news.discovery.com/tech/laser-beams-shoot-from-printer-120922.html#mkcpgn=rssnws1"];
sources[40] = ["Sports Illustrated", "sports", "http://sportsillustrated.cnn.com/", "No. 4 FSU explodes in second half, beats No. 10 Clemson 49-37", "http://sportsillustrated.cnn.com/football/ncaa/gameflash/2012/09/22/50890/index.html#recap?xid=si_topstories", "Upset in Norman: Kansas State beats No. 6 Oklahoma", "http://sportsillustrated.cnn.com/football/ncaa/gameflash/2012/09/22/50550/index.html#recap!?xid=si_topstories", "Latos, Reds shut out Dodgers to clinch NL Central", "http://sportsillustrated.cnn.com/baseball/mlb/gameflash/2012/09/22/42754/index.html#recap?&xid=si_topstories"];
sources[41] = ["The Drudge Report", "politics", "http://www.drudgereport.com/", "Slipping away? Obama campaign manager now says DON'T PAY ATTENTION TO 'NATIONAL' POLLS...", "http://feedproxy.google.com/~r/DrudgeReportFeed/~3/YYPko3Me51M/messina-forget-the-tied-national-polls-were-win", "GALLUP SATURDAY: O 47% R 47%...", "http://feedproxy.google.com/~r/DrudgeReportFeed/~3/IRS1QSWIY7U/Obama-Romney.aspx", "RASMUSSEN: O 46% R 46%...", "http://feedproxy.google.com/~r/DrudgeReportFeed/~3/6AmpsIc37WQ/daily_presidential_tracking_poll"];
sources[42] = ["The Washington Post", "politics", "http://www.washingtonpost.com/", "Romney team is both defiant and realistic", "http://feeds.washingtonpost.com/click.phdo?i=76741da28cdc9298335fac7b96875d72", "In Ohio county, electorate is hardened and fractured", "http://feeds.washingtonpost.com/click.phdo?i=4a6c3b2124f4e0ed74756350a9541695", "Obama visits Wisconsin as campaign tries to curb Ryan’s influence", "http://feeds.washingtonpost.com/click.phdo?i=960b66cb4f714d66a6b0cf3ce76728ca"];

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