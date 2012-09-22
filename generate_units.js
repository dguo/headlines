function generate_units()
{

var sources = []
sources[0] = ["Rolling Stone", "entertainment", "http://www.rollingstone.com/", "Yoko Ono Calls for 'Immediate Release' of Pussy Riot", "http://www.rollingstone.com/music/news/yoko-ono-calls-for-immediate-release-of-pussy-riot-20120921", "Stephen Colbert Lands Guest Spot on 'The Office'", "http://www.rollingstone.com/movies/news/stephen-colbert-lands-guest-spot-on-the-office-20120921", "Bill Clinton Breaks Down DNC Speech on 'Daily Show'", "http://www.rollingstone.com/movies/videos/bill-clinton-breaks-down-dnc-speech-on-daily-show-20120921"];
sources[1] = ["NBC News", "general", "http://www.nbcnews.com/", "Protesting Libyans overrun militant compound", "http://pheedo.msnbc.msn.com/click.phdo?i=212430632db1b21fca871fccfd5eaf12", "Drones capture mountain scenery in Pakistan", "http://pheedo.msnbc.msn.com/click.phdo?i=18d7a8eca1d12f61ad93ac65ab57e9d7", "House adjourns after few fall work days, punting on unfinished business", "http://pheedo.msnbc.msn.com/click.phdo?i=32fbc521b51dd1072ac40a80ecfd811a"];
sources[2] = ["Gamespot", "entertainment", "http://www.gamespot.com/", "BlazBlue: Chrono Phantasma Overview With The Producer", "http://www.gamespot.com/events/tgs-2012/video.html?sid=6397026", "Does Japan Hate PC Gaming? - PC Gaming at Tokyo Game Show 2012", "http://www.gamespot.com/events/tgs-2012/video.html?sid=6397025", "Tokyo Game Show 2012 - LIVE STREAM - Day Two", "http://www.gamespot.com/news/tokyo-game-show-2012-live-stream-day-two-6397020"];
sources[3] = ["NPR", "general", "http://www.npr.org/", "Synchronized Flushing In Zimbabwe Is Not A New Olympic Sport", "http://www.npr.org/blogs/thetwo-way/2012/09/22/161609631/synchronized-flushing-in-zimbabwe-is-not-a-new-olympic-sport?ft=1&f=1001", "There's Still Time For Romney To Make An Effective Case", "http://www.npr.org/blogs/itsallpolitics/2012/09/22/161599747/theres-still-time-for-romney-to-make-an-effective-case?ft=1&f=1001", "Harlem Hosts First Strokes Of Emancipation", "http://www.npr.org/2012/09/22/161600834/harlem-hosts-first-strokes-of-emancipation?ft=1&f=1001"];
sources[4] = ["Forbes", "business", "http://www.forbes.com/", "Nokia Maps Drives Circles Around Apple and Google", "http://www.forbes.com/sites/bobegan/2012/09/20/nokia-maps-drives-circles-around-apple-and-google/", "There is Such a Thing as Redistribution", "http://www.forbes.com/sites/modeledbehavior/2012/09/22/there-is-such-a-thing-as-redistribution/", "A Hale Of A Hero: Nathan Hale And The Fight For Liberty", "http://www.forbes.com/sites/realspin/2012/09/22/a-hale-of-a-hero-nathan-hale-and-the-fight-for-liberty/"];
sources[5] = ["Bleacher Report", "sports", "http://bleacherreport.com/", "Tiger Woods at Tour Championship Tracker: Day 3 Highlights, Updates and More", "http://bleacherreport.com/articles/1343784-tiger-woods-at-tour-championship-tracker-day-3-highlights-updates-and-more", "Michigan vs. Notre Dame: Why Irish RB Cierre Wood Is the Key to Victory", "http://bleacherreport.com/articles/1343763-michigan-vs-notre-dame-why-irish-rb-cierre-wood-is-the-key-to-victory", "3 Questions We Have About Vitor Belfort Before He Faces Jon Jones", "http://bleacherreport.com/articles/1343748-jon-jones-vs-vitor-belfort-questions-we-have-about-vitor-belfort"];
sources[6] = ["Reuters", "general", "http://www.reuters.com/", "Apple seeks U.S. Samsung sales ban, $707 million more in damages", "http://feeds.reuters.com/~r/reuters/topNews/~3/Y8423OBDU4s/us-apple-samsung-idUSBRE88L04B20120922", "Romney tax release shows 14.1 percent rate in 2011", "http://feeds.reuters.com/~r/reuters/topNews/~3/RnlFr5Ex7EQ/us-usa-campaign-romney-taxes-idUSBRE88K11Y20120922", "FSA says leaders move from Turkey to rebel-controlled Syria", "http://feeds.reuters.com/~r/reuters/topNews/~3/89VYD9EDW4I/us-syria-crisis-idUSBRE88J0X720120922"];
sources[7] = ["Fox News", "general", "http://www.foxnews.com/", "Al Qaeda Affiliate, Militia Eyed in Libya", "http://www.foxnews.com/politics/2012/09/21/consulate-attack-in-libya-entailed-coordinated-assault-involving-100-sources/", "Obama Accuses Congress Of Taking 'Campaign' Break", "http://www.foxnews.com/politics/2012/09/22/obama-accused-hill-lawmakers-ducking-elected-duties-amid-criticism-doing/", "White House Linked to Prostitution Scandal?", "http://www.foxnews.com/politics/2012/09/21/federal-investigator-white-house-personnel-may-have-been-involved-in-colombia/"];
sources[8] = ["Business Insider", "business", "http://www.businessinsider.com/", "Danica Patrick's Future For Go Daddy's 2013 Super Bowl Ads", "http://feedproxy.google.com/~r/businessinsider/~3/MYRmxAol3i0/go-daddys-2013-super-bowl-ads-2012-9", "Apple Wants $707 Million More From Samsung For Damages", "http://feedproxy.google.com/~r/businessinsider/~3/VIV-V7bchvg/apple-seeks-us-samsung-sales-ban-707-million-more-in-damages-2012-9", "Um, Siri, We've Got A Slight Problem Here... (AAPL)", "http://feedproxy.google.com/~r/businessinsider/~3/VcmPkI87dUw/siri-on-the-iphone-5-2012-9"];
sources[9] = ["USA Today", "general", "http://www.usatoday.com/", "My Semicolon Life: Tracing my family's cancer history", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/EGqfjUF0U-s/1", "Obama question prompts Vermont ballot request", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/6U5ZzfpYMJQ/1", "Libya: 2 killed in Benghazi protester-militia clashes", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/8sdvl6Cz6Hg/1"];
sources[10] = ["The New York Times", "general", "http://www.nytimes.com/", "Living Large in Tiny Spaces", "http://www.nytimes.com/2012/09/23/realestate/living-large-in-tiny-spaces.html?partner=rss&emc=rss", "In Europe, Facebook Agrees to Stop Facial Recognition", "http://www.nytimes.com/2012/09/22/technology/facebook-backs-down-on-face-recognition-in-europe.html?partner=rss&emc=rss", "Under Pressure, Romney Offers More Tax Data", "http://www.nytimes.com/2012/09/22/us/politics/under-pressure-romney-offers-more-tax-data.html?partner=rss&emc=rss"];
sources[11] = ["TMZ", "entertainment", "http://www.tmz.com/", "Amanda Bynes -- Friends Are Furious Her Family Isn't Helping Her", "http://www.tmz.com/2012/09/22/amanda-bynes-friends-family/", "Supermodel Maggie Rizer -- United Airlines Killed My Dog", "http://www.tmz.com/2012/09/22/supermodel-maggie-rizer-united-airlines-killed-my-dog/", "Mystikal -- If Music Fails ... I'M DOING PORN", "http://www.tmz.com/2012/09/22/mystikal-porn-career/"];
sources[12] = ["Wired", "technology", "http://www.wired.com/", "From Food to iPhones: These Are the Lines That Try Men's Souls", "http://feeds.wired.com/~r/wired/index/~3/4eDoHlbbmd0/", "Game|Life Podcast: PlayStation Price Grows as Tokyo Game Show Shrinks", "http://feeds.wired.com/~r/wired/index/~3/7DxYi488-PQ/", "NIH Decision Signals the Beginning of the End for Medical Research on Chimps", "http://feeds.wired.com/~r/wired/index/~3/S3P56upwzY4/"];
sources[13] = ["Amazon.com", "daily", "http://www.amazon.com/", "Deal of the Day: Panasonic 3D Blu-Ray Disc 5.1 Surround Sound Home Theater System", "http://www.amazon.com/dp/B0078GCLUG/ref=xs_gb_rss_2920081/?ccmID=380205&tag=rssfeeds-20", "Over 40% off the XM XpressRCi with PowerConnect Vehicle Kit", "http://www.amazon.com/XDRC2V1-XpressRCi-PowerConnect-Vehicle-Kit/dp/B002VCIYQW/ref=xs_gb_rss_2959731/?ccmID=380205&tag=rssfeeds-20", "Kindle Books for $3.99 or Less", "http://www.amazon.com/gp/feature.html/ref=xs_gb_rss_217631/?ie=UTF8&docId=1000706171&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=center-1&pf_rd_r=0AVKTDG9EJATVQ17V81T&pf_rd_t=101&pf_rd_p=1392111042&pf_rd_i=1286228011&ccmID=380205&tag=rssfeeds-20"];
sources[14] = ["ABC News", "general", "http://abcnews.go.com/", "Will Mitt Romney Finally Get a Campaign Reset?", "http://feeds.abcnews.com/click.phdo?i=8d2569fc275f8c2c3a86128602a38e94", "Obama Slams House GOP Over Unfinished Business", "http://feeds.abcnews.com/click.phdo?i=30a28f71512ec5dfb6382f045a70e946", "Rubio Tweet Rage vs. American Airlines", "http://feeds.abcnews.com/click.phdo?i=00fbabe60c008ef381753b872c4c7a3b"];
sources[15] = ["NASA Picture of the Day", "daily", "http://apod.nasa.gov/apod/", "Endeavour's Final Flight Ends", "http://www.nasa.gov/multimedia/imagegallery/endeavour_garver.html"];
sources[16] = ["Politico", "politics", "http://www.politico.com/", "'Obamacare' foes fear GOP losses", "http://feeds.politico.com/click.phdo?i=1e733bae7a139d8aca583b5601d599a3", "Mitt tax release puzzles strategists", "http://feeds.politico.com/click.phdo?i=7a03d985197e43be47ddb291e87334b2", "Mini-Mitt", "http://feeds.politico.com/click.phdo?i=d82bd36804444912d116bf62efa0f597"];
sources[17] = ["E! Online", "entertainment", "http://www.eonline.com/", "Week in Review: Kate Middleton Scandal Takes Europe, Rob & Kristen Meet Up, Kelsey Grammer Walks Out", "http://feeds.eonline.com/~r/eonline/topstories/~3/SKj_6nwMz8c/week-in-review-kate-middleton-scandal-takes-europe-rob-kristen-meet-up-kelsey-grammer-walks-out", "Lady Gaga's Secret Normal Wardrobe Revealed! And More of Your Q's...Answered!", "http://feeds.eonline.com/~r/eonline/topstories/~3/zXgDKdzz05g/lady-gaga-s-secret-normal-wardrobe-revealed-and-more-of-your-q-s-answered", "Kate Walsh \"Open\" to Returning to Grey's Anatomy: \"There's Always That Possibility\"", "http://feeds.eonline.com/~r/eonline/topstories/~3/Sgc7aJyz-94/kate-walsh-quot-open-quot-to-returning-to-grey-s-anatomy-quot-there-s-always-that-possibility-quot"];
sources[18] = ["The Wall Street Journal", "business", "http://online.wsj.com/home-page", "Apple Asks Judge for More From Samsung", "http://online.wsj.com/article/SB10000872396390444165804578011824001730696.html?mod=rss_whats_news_us", "Global Sales of iPhone Kick Off", "http://online.wsj.com/article/SB10000872396390444165804578008932005264600.html?mod=rss_whats_news_us", "Firms Miss Out on Jobs Push", "http://online.wsj.com/article/SB10000872396390443890304578010173740711636.html?mod=rss_whats_news_us"];
sources[19] = ["HowStuffWorks", "science-and-health", "http://www.howstuffworks.com/", "How Fakebook Works", "http://computer.howstuffworks.com/fakebook.htm", "10 Ways to Survive a Snowstorm", "http://adventure.howstuffworks.com/10-ways-to-survive-a-snowstorm.htm", "How Volcanoes Work", "http://science.howstuffworks.com/nature/natural-disasters/volcano.htm"];
sources[20] = ["Reddit", "random", "http://www.reddit.com/", "This imprint in the sand was left by a sleeping elephant at the Oregon Zoo.", "http://www.reddit.com/r/pics/comments/1095ic/this_imprint_in_the_sand_was_left_by_a_sleeping/", "\"Hundreds of pro-democracy demonstrators marched in Benghazi and overtook the headquarters of a radical Islamist group tied to the attack.\"", "http://www.reddit.com/r/worldnews/comments/109teg/hundreds_of_prodemocracy_demonstrators_marched_in/", "Spontaneous Wingman of the Year [fb]", "http://www.reddit.com/r/funny/comments/10a8cp/spontaneous_wingman_of_the_year_fb/"];
sources[21] = ["BBC News", "general", "http://www.bbc.co.uk/news/", "Rebel command 'moved into Syria'", "http://www.bbc.co.uk/news/world-middle-east-19686938#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa", "Clegg urges fight for 'fairness'", "http://www.bbc.co.uk/news/uk-politics-19676263#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa", "'Meteors' seen across UK skies", "http://www.bbc.co.uk/news/uk-19683687#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa"];
sources[22] = ["Mashable", "technology", "http://mashable.com/", "Top 10 GIFs of the Week", "http://feeds.mashable.com/~r/Mashable/~3/LLCRplaC7zw/", "5 Fascinating Facts We Learned From Reddit This Week", "http://feeds.mashable.com/~r/Mashable/~3/Lq_EPtdju9s/", "Apple Rolls Out iPhone 5 Ad Blitz [VIDEOS]", "http://feeds.mashable.com/~r/Mashable/~3/0dGpEsOpShs/"];
sources[23] = ["Ars Technica", "technology", "http://arstechnica.com/", "Is Apple's new maps app upsetting? The OpenForum chimes in", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/zjuwy0iiK3Y/", "Getting handsy with the hardware (and the software)", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/gFfS12Yn21U/", "Web attacks on big US banks originated in Iran, unconfirmed reports say", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/pC1PpRydLtk/"];
sources[24] = ["CBS News", "general", "http://www.cbsnews.com/", "Salman Rushdie: Life like a \"spy novel\"", "http://feeds.cbsnews.com/~r/CBSNewsMain/~3/r_KCkkKgbE0/", "Bangladeshi protests of anti-Muslim film", "http://feeds.cbsnews.com/~r/CBSNewsMain/~3/m4NtzZA95mE/", "New use for drones: Sports photography", "http://feeds.cbsnews.com/~r/CBSNewsMain/~3/iqraSKIXy8Q/"];
sources[25] = ["Cracked", "random", "http://www.cracked.com/", "5 Works of Art So Good They Ruined Their Whole Genre", "http://feedproxy.google.com/~r/CrackedRSS/~3/2RGzCSS8cK8/", "5 Illegal Drugs With Surprisingly Wholesome Medical Uses", "http://feedproxy.google.com/~r/CrackedRSS/~3/IAJmPJlKqRw/article_20023_5-illegal-drugs-with-surprisingly-wholesome-medical-uses.html", "The 6 Real and Terrifying Spider Superpowers", "http://feedproxy.google.com/~r/CrackedRSS/~3/pmiiicDY3X4/article_19315_the-6-real-terrifying-spider-superpowers.html"];
sources[26] = ["People", "entertainment", "http://www.people.com/people/", "Jenna von Oy Blogs: A Walk on the 'Child' Side", "http://feeds.people.com/~r/people/headlines/~3/xzQa8esOUS8/", "Amanda Knox's Ex Raffaele Sollecito: The Life I Had Is Gone", "http://feeds.people.com/~r/people/headlines/~3/QIoI4bjIErM/0,,20631791,00.html", "What Did Kristin Cavallari Receive as a Push Present?", "http://feeds.people.com/~r/people/headlines/~3/DuYTAVaMArg/kristin-cavallari-baby-pictures-push-present"];
sources[27] = ["Popular Science", "science-and-health", "http://www.popsci.com/", "This Week In The Future, September 17-21, 2012", "http://feeds.popsci.com/c/34567/f/632419/s/23af9657/l/0L0Spopsci0N0Cannouncements0Carticle0C20A120E0A90Cweek0Efuture0Eseptember0E170E210E20A12/story01.htm", "Today On Mars: Curiosity Shows American Pride", "http://feeds.popsci.com/c/34567/f/632419/s/23afc57e/l/0L0Spopsci0N0Cscience0Carticle0C20A120E0A90Ctoday0Emars0Ecuriositys0Eamerican0Epride/story01.htm", "The Most Amazing Images Of The Week, September 17-21, 2012", "http://feeds.popsci.com/c/34567/f/632419/s/23af384f/l/0L0Spopsci0N0Cscience0Carticle0C20A120E0A90Cmost0Eamazing0Eimages0Eweek0Eseptember0E170E210E20A12/story01.htm"];
sources[28] = ["CNBC", "business", "http://www.cnbc.com/", "Fed Wants Inflation Now, Will Clean Up ‘Mess’ Later: El-Erian", "http://www.cnbc.com//id/49115958", "Apple Fans Shrug Off Maps Fiasco, Lap Up iPhone 5", "http://www.cnbc.com//id/49115586", "Apple Fanatics Line up Around the Globe", "http://www.cnbc.com//id/49117915"];
sources[29] = ["ESPN", "sports", "http://espn.go.com/", "Backups Brown, Barden shine as Giants cruise", "http://scores.espn.go.com/nfl/recap?gameId=320920029", "Ex-Pirates owner McClatchy comes out as gay", "http://espn.go.com/mlb/story/_/id/8409943/ex-pittsburgh-pirates-owner-kevin-mcclatchy-comes-gay", "UCI questions Armstrong file's delay by USADA", "http://espn.go.com/olympics/cycling/story/_/id/8409755/uci-questions-lance-armstrong-file-delay-usada"];
sources[30] = ["SB Nation", "sports", "http://www.sbnation.com/", "Kenny Tate Injury: Maryland LB Likely To Play Vs. West Virginia", "http://www.sbnation.com/ncaa-football/2012/9/22/3372864/kenny-tate-injury-maryland-terrapins-west-virginia", "Chelsea Vs. Stoke City: Final Score 1-0 As Blues Keep Unbeaten Record", "http://www.sbnation.com/2012/9/22/3372870/chelsea-vs-stoke-city-2012-epl-final-score-match-report-result", "Southampton Vs. Aston Villa: Final Score 4-1, Saints Pick Up 1st Win", "http://www.sbnation.com/2012/9/22/3372760/southampton-vs-aston-villa-final-score-match-report"];
sources[31] = ["Yahoo! News", "general", "http://news.yahoo.com/", "Libyan Islamist militia swept out of Benghazi bases", "http://news.yahoo.com/libyan-islamist-militia-swept-benghazi-bases-022901566.html", "NYPD: Man who was mauled chose to jump into tigers’ den", "http://news.yahoo.com/nypd-mauled-man-chose-jump-tigers-den-154515989.html", "Romney campaign trails in crucial ground game", "http://news.yahoo.com/romney-campaign-trails-crucial-ground-game-121307959--election.html"];
sources[32] = ["IGN", "entertainment", "http://www.ign.com/", "J.J. Abrams/Prisoner of Azkaban Director Team Up", "http://feeds.ign.com/~r/ign/news/~3/96TtkFT3-P4/jj-abrams-and-alfonso-cuaron-team-for-nbc-pilot", "FOX Nabs New Comedy Series from Ted Trio", "http://feeds.ign.com/~r/ign/news/~3/J6ATz2qH890/fox-nabs-new-comedy-series-from-ted-trio", "Hero Worship: Darth Vader Still Rules", "http://feeds.ign.com/~r/ign/news/~3/lHD1qSTahAM/hero-worship-2"];
sources[33] = ["The Huffington Post", "general", "http://www.huffingtonpost.com/", "White House Quiet As Obama Campaign Kicks Into High Gear", "http://www.huffingtonpost.com/2012/09/22/white-house-2012-campaign_n_1905849.html", "Donatella Versace Reveals Medusa Fashion Show Details And What She's Passionate About", "http://www.huffingtonpost.com/2012/09/22/donatella-versace-fashion-week-interview_n_1905862.html", "Intel Halts Boy Scout Donations Over Anti-Gay Policy", "http://www.huffingtonpost.com/2012/09/22/intel-stops-boy-scout-don_n_1905856.html"];
sources[34] = ["TechCrunch", "technology", "http://techcrunch.com/", "If Silicon Valley Stocks Are Down, Why Are Home Prices Up?", "http://feedproxy.google.com/~r/Techcrunch/~3/KdGy4lZYizs/", "Welcome To The Long Tail Of Social Media Marketing: Linqia Exits Stealth Mode With $3.5M Series A From Javelin, Esther Dyson", "http://feedproxy.google.com/~r/Techcrunch/~3/9xA6LlTlP-g/", "Google Granted Pseudonym Patent (You’re Welcome. And, What Is Wrong With You)", "http://feedproxy.google.com/~r/Techcrunch/~3/ggdtUudNxZ8/"];
sources[35] = ["Time", "general", "http://www.time.com/time/", "Romney Releases 2011 Taxes: Returns Show He Paid 14% Effective Rate", "http://feedproxy.google.com/~r/time/topstories/~3/1GbTQvJo6TU/", "The iPhone 5 Maps Flap: Five Alternatives to Apple's Panned Product", "http://feedproxy.google.com/~r/time/topstories/~3/K9oXos-ByLk/", "Viewpoint: The Problem with Calling Immigrants \"Illegal\"", "http://feedproxy.google.com/~r/time/topstories/~3/a-zq1ojBgPQ/"];
sources[36] = ["CNN", "general", "http://www.cnn.com/", "Gingrich: Romney has to get tough", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/MeuAMSI8Eh0/", "U.S. braces for more protests", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/hojgQAB3zAI/index.html", "Ex-SEALs died in effort to help in Libya", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/dCfrCf3J_P4/index.html"];
sources[37] = ["WebMD", "science-and-health", "http://www.webmd.com/", "Which Birth Control Methods Are Best for Teens?", "http://www.webmd.com/sex/birth-control/news/20120921/which-birth-control-methods-best-for-teens?src=RSS_PUBLIC", "Sugary Drinks and Weight Gain Linked", "http://www.webmd.com/diet/news/20120921/sugary-drink-weight-gain-link?src=RSS_PUBLIC", "Summer Tips for Psoriasis", "http://www.webmd.com/skin-problems-and-treatments/psoriasis/expck/psoriasis-in-spring-and-summer?src=RSS_PUBLIC"];
sources[38] = ["BuzzFeed", "random", "http://www.buzzfeed.com/", "The Dos And Don'ts Of Week 3 Fantasy Football", "http://www.buzzfeed.com/ktlincoln/the-dos-and-donts-of-week-3-fantasy-football", "Who Would You Cast In A Full House Remake?", "http://www.buzzfeed.com/kmallikarjuna/who-would-you-cast-in-a-full-house-remake-725b", "Happiness In 26 Photos", "http://www.buzzfeed.com/mjs538/happiness-in-photos"];
sources[39] = ["Discovery", "science-and-health", "http://news.discovery.com/", "Happy First Day of Fall!", "http://news.discovery.com/earth/fall-starts-today-120922.html#mkcpgn=rssnws1", "Anti-Islam Video Will Remain On YouTube", "http://news.discovery.com/tech/anti-islam-video-will-remain-youtube-120921.html#mkcpgn=rssnws1", "Playboy Bunny Being Drowned Out by Rising Seas", "http://news.discovery.com/animals/playboy-bunny-nearly-drowns-out-due-to-sea-level-rise.html#mkcpgn=rssnws1"];
sources[40] = ["Sports Illustrated", "sports", "http://sportsillustrated.cnn.com/", "Ohio State hosts UAB in early action", "http://sportsillustrated.cnn.com/football/ncaa/gameflash/2012/09/22/49716/index.html#boxscore?xid=si_topstories", "Maryland-WVU", "http://sportsillustrated.cnn.com/football/ncaa/gameflash/2012/09/22/50621/index.html#preview?xid=si_topstories", "Joe Sheehan: Brewers close gap, Carpenter returns and CC dominates", "http://sportsillustrated.cnn.com/2012/writers/joe_sheehan/09/22/playoff-chase/index.html?xid=si_topstories"];
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