function generate_units()
{

var sources = []
sources[0] = ["Rolling Stone", "", "http://www.rollingstone.com/", "'X Factor' Recap: Lightning Strikes and Britney Spears Is Spooked", "http://www.rollingstone.com/movies/news/x-factor-recap-lightning-strikes-and-britney-spears-is-spooked-20120921", "Mitt Romney Gaffes, Drunk Uncle Lead Half-Baked 'SNL' Election Special", "http://www.rollingstone.com/movies/news/snl-weekend-update-thursday-recap-should-have-waited-for-saturday-20120921", "Cee Lo to Play Las Vegas With Rod Stewart and the Muppets", "http://www.rollingstone.com/music/news/rod-stewart-muppets-to-join-cee-lo-for-las-vegas-christmas-show-20120921"];
sources[1] = ["NBC News", "", "http://www.nbcnews.com/", "Obama's battleground advantage grows", "http://pheedo.msnbc.msn.com/click.phdo?i=96f735cab5ab59fb345a67b84dfc3a12", "Video: Volcano hunter: Standing near lava ‘like a drug’", "http://pheedo.msnbc.msn.com/click.phdo?i=e7025840611c9c11500f1dd87898f282", "Hostage situation on 16th floor of Pittsburgh building", "http://pheedo.msnbc.msn.com/click.phdo?i=6fb3bbe612ad2978845394d6370961ec"];
sources[2] = ["Gamespot", "", "http://www.gamespot.com/", "Massive Character Mashup - Project X Zone", "http://www.gamespot.com/events/tgs-2012/video.html?sid=6396944", "More Characters - Project X Zone", "http://www.gamespot.com/events/tgs-2012/video.html?sid=6396943", "Tokyo Game Show 2012 - LIVE STREAM", "http://www.gamespot.com/news/tokyo-game-show-2012-live-stream-6396657"];
sources[3] = ["NPR", "", "http://www.npr.org/", "Rep. Maxine Waters Cleared By House Ethics Committee", "http://www.npr.org/blogs/thetwo-way/2012/09/21/161538755/rep-maxine-waters-cleared-by-house-ethics-committee?ft=1&f=1001", "Getting Slower And Slower: How Slow Can You Go?", "http://www.npr.org/blogs/krulwich/2012/09/12/160998731/getting-slower-and-slower-how-slow-can-you-go?ft=1&f=1001", "Another iPhone, Another Day Of Long Lines And Big Hype", "http://www.npr.org/blogs/thetwo-way/2012/09/21/161534614/another-iphone-another-day-of-long-lines-and-big-hype?ft=1&f=1001"];
sources[4] = ["Forbes", "", "http://www.forbes.com/", "The Finances And Career Prospects Of Being A Model", "http://www.forbes.com/sites/learnvest/2012/09/21/the-finances-and-career-prospects-of-being-a-model/", "Schwab Continues ETF Price War, Puts Vanguard In The Crosshairs", "http://www.forbes.com/sites/chrisbarth/2012/09/21/schwab-continues-etf-price-war-puts-vanguard-in-the-crosshairs/", "Threatened By Amazon, Walmart Commits Brand Treason", "http://www.forbes.com/sites/jeffbercovici/2012/09/21/threatened-by-amazons-kindle-walmart-commits-brand-treason/"];
sources[5] = ["Bleacher Report", "", "http://bleacherreport.com/", "Gostkowski's Missed FG Turns Foxborough into a Living Soap Opera", "http://bleacherreport.com/articles/1342724-gostkowskis-missed-fg-turns-foxborough-into-a-living-soap-opera", "Pacquiao Saying He'll Give Mayweather 55-45 Split Doesn't Mean Fight Will Happen", "http://bleacherreport.com/articles/1342689-pacquiao-saying-hell-give-mayweather-55-45-split-doesnt-mean-fight-will-happen", "BSU Football: After Beating BYU, Do the Broncos Deserve a Top 25 Ranking?", "http://bleacherreport.com/articles/1342706-bsu-football-after-beating-byu-do-the-broncos-deserve-a-top-25-ranking"];
sources[6] = ["The New York Times", "", "http://www.nytimes.com/", "Deadly Violence Breaks Out in Pakistan as Public Holiday Begins", "http://www.nytimes.com/2012/09/22/world/asia/protests-in-pakistan-over-anti-islam-film.html?partner=rss&emc=rss", "Universal Takeover of EMI Music Is Approved", "http://www.nytimes.com/2012/09/22/business/global/universal-takeover-of-emi-music-is-approved.html?partner=rss&emc=rss", "Panel Finds Maxine Waters Didn’t Violate Ethics Rules in Bank Case", "http://www.nytimes.com/2012/09/22/us/politics/panel-finds-maxine-waters-didnt-violate-ethics-rules-in-bank-case.html?partner=rss&emc=rss"];
sources[7] = ["Amazon.com", "", "http://www.amazon.com/", "Deal of the Day: Irwin Vise-Grip GrooveLock 8-Piece Plier Set", "http://www.amazon.com/dp/B000GR37WU/ref=xs_gb_rss_2498201/?smid=ATVPDKIKX0DER&ccmID=380205&tag=rssfeeds-20", "HP Pavilion G6-2132NR 15.6\" Laptop (Black)", "http://www.amazon.com/dp/B008IYNL5G/ref=xs_gb_rss_2952121/?ccmID=380205&tag=rssfeeds-20", "Save 30% on Collection New York Backpacks", "http://www.amazon.com/s/ref=xs_gb_rss_219411/?rh=n:1036592,p_8:30-,p_4:collection%20new%20york&ccmID=380205&tag=rssfeeds-20"];
sources[8] = ["ABC News", "", "http://abcnews.go.com/", "Soldier's Letter Changed Congressman's Mind on War", "http://feeds.abcnews.com/click.phdo?i=428e7fece2df50e92599b175346591f3", "iPhone 5: The Best Smartphone for the Masses", "http://feeds.abcnews.com/click.phdo?i=c64a2fa74a652253880b64ad24a5bbf6", "iPhone 5 Sells for $3,700 -- in Moscow", "http://feeds.abcnews.com/click.phdo?i=4e3e096f6ed2e9715fd10ed966cf03a0"];
sources[9] = ["Politico", "", "http://www.politico.com/", "World's Obama fever cools", "http://feeds.politico.com/click.phdo?i=8e8cad0d9b103207e4af89051e65c87e", "Joe Biden wins highest convention ratings", "http://feeds.politico.com/click.phdo?i=b1a2e23c8b3f47c13c49f4d513fcd45e", "Brown hits Warren on Cherokee claim", "http://feeds.politico.com/click.phdo?i=0807d1bf297da95d197249900127c9ff"];
sources[10] = ["NASA Picture of the Day", "", "http://apod.nasa.gov/apod/", "Wildland Fires in Idaho", "http://www.nasa.gov/multimedia/imagegallery/image_feature_2360.html"];
sources[11] = ["The Wall Street Journal", "", "http://online.wsj.com/home-page", "U.S. Seeks to Patch Laundering Net", "http://online.wsj.com/article/SB10000872396390444032404578008501644101688.html?mod=rss_whats_news_us", "U.S. Stocks Climb; Apple Rises", "http://online.wsj.com/article/SB10000872396390444165804578009791243800064.html?mod=rss_whats_news_us", "Fight Looms on Greek Bailout", "http://online.wsj.com/article/SB10000872396390444032404578008521228332116.html?mod=rss_whats_news_us"];
sources[12] = ["BBC News", "", "http://www.bbc.co.uk/news/", "Police insult minister 'must go'", "http://www.bbc.co.uk/news/uk-politics-19675297#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa", "Deadly film protests in Pakistan", "http://www.bbc.co.uk/news/world-asia-19678412#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa", "Passenger plane skids off runway", "http://www.bbc.co.uk/news/uk-england-birmingham-19676990#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa"];
sources[13] = ["Ars Technica", "", "http://arstechnica.com/", "iPhone 5 deconstructed: packed with power efficient parts", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/Z7PJibUFfVc/", "(Another) BlackBerry outage affects Europe, Africa, and the Middle East", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/YijW0-ahpmA/", "Locking up, locking down: Hands-on with iOS 6 enterprise management", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/XU9JjThWElU/"];
sources[14] = ["CBS News", "", "http://www.cbsnews.com/", "Last U.S. surge troops out of Afghanistan", "http://feeds.cbsnews.com/~r/CBSNewsMain/~3/EKzh1eTq8qE/", "More than dozen killed in Pakistan protests", "http://feeds.cbsnews.com/~r/CBSNewsMain/~3/9Clzn5cY6DU/", "Romney slams Obama \"change\" remark", "http://feeds.cbsnews.com/~r/CBSNewsMain/~3/_RrLAywaDjI/"];
sources[15] = ["Cracked", "", "http://www.cracked.com/", "23 Modern Gadgets After the Apocalypse", "http://feedproxy.google.com/~r/CrackedRSS/~3/-f2eSsb3A8E/", "3 Reasons We Need to Reexamine How We Elect Presidents", "http://feedproxy.google.com/~r/CrackedRSS/~3/8GLaeFOviQo/", "5 Terrifying Origin Stories Behind Popular Children's Songs", "http://feedproxy.google.com/~r/CrackedRSS/~3/Y7YJUoeUfIU/article_20032_5-terrifying-origin-stories-behind-popular-childrens-songs.html"];
sources[16] = ["People", "", "http://www.people.com/people/", "Adrienne Maloof Divorce Drama to Play Out on Season 3 of Real Housewives of Beverly Hills", "http://feeds.people.com/~r/people/headlines/~3/PbQvz2D-Q8o/0,,20632099,00.html", "Robin Roberts 'Energized,' Wants to Go Home After Transplant, Says Doctor", "http://feeds.people.com/~r/people/headlines/~3/4WTEfkxGftk/0,,20632126,00.html", "Lindsay Lohan Acts Up a Storm as Elizabeth Taylor (Video)", "http://feeds.people.com/~r/people/headlines/~3/PbEZS1jDTOc/0,,20632115,00.html"];
sources[17] = ["Mashable", "", "http://mashable.com/", "Kickstarter to Users: We’re Not a Store", "http://feeds.mashable.com/~r/Mashable/~3/EO_skvZcHtU/", "Your Kids Will Never Text and Drive Again After Watching These 10 Videos", "http://feeds.mashable.com/~r/Mashable/~3/bbKFgwXeJJY/", "15 Killed in Pakistan During Protests Against YouTube Film [UPDATED]", "http://feeds.mashable.com/~r/Mashable/~3/JdfmnFutNQw/"];
sources[18] = ["Popular Science", "", "http://www.popsci.com/", "The Statistical Physics Of Ponytails And Other Ig Nobel Winners", "http://feeds.popsci.com/c/34567/f/632419/s/23ad8edd/l/0L0Spopsci0N0Cscience0Carticle0C20A120E0A90Cstatistical0Ephysics0Eponytails0Eand0Eother0Eig0Enobel0Ewinners/story01.htm", "What Countries Are The Worst At Protecting Endangered Animals? [Infographic]", "http://feeds.popsci.com/c/34567/f/632419/s/23ace692/l/0L0Spopsci0N0Cscience0Carticle0C20A120E0A90Cinfographic0Eits0Ebad0Etime0Ebe0Eelephant/story01.htm", "Science Confirms The Obvious: Science Faculty Think Female Students Are Less Competent", "http://feeds.popsci.com/c/34567/f/632419/s/23ac6b1c/l/0L0Spopsci0N0Cscience0Carticle0C20A120E0A90Cscience0Efaculty0Esubtlety0Ejudge0Efemale0Estudents0Eless0Ecompetent/story01.htm"];
sources[19] = ["CNBC", "", "http://www.cnbc.com/", "Fed Wants Inflation Now, Will Clean Up ‘Mess’ Later: El-Erian", "http://www.cnbc.com//id/49115958", "Apple Fans Shrug Off Maps Fiasco, Lap Up iPhone 5", "http://www.cnbc.com//id/49115586", "Fed Hawk: Keep Rates at Zero Until 5.5% Unemployment", "http://www.cnbc.com//id/49114576"];
sources[20] = ["ESPN", "", "http://espn.go.com/", "Backups Brown, Barden shine as Giants cruise", "http://scores.espn.go.com/nfl/recap?gameId=320920029", "Report: NFL, officials remain far apart in dispute", "http://espn.go.com/nfl/story/_/id/8406500/big-gaps-remain-league-officials-report", "Backups Brown, Barden shine as Giants cruise", "http://scores.espn.go.com/nfl/recap?gameId=320920029"];
sources[21] = ["SB Nation", "", "http://www.sbnation.com/", "Aaron Hernandez Fantasy Injury Update: Still Injured", "http://www.sbnation.com/fantasy/2012/9/21/3368390/aaron-hernandez-injury-fantasy-football-patriots", "Martellus Bennett Off To Fast Fantasy Start With Giants", "http://www.sbnation.com/fantasy/2012/9/21/3368272/martellus-bennett-fantasy-football-giants", "Tony Romo Not Concerned About Dez Bryant's Slow Start: Fantasy Implications", "http://www.sbnation.com/fantasy/2012/9/21/3368206/tony-romo-not-concerned-about-dez-bryants-slow-start-fantasy"];
sources[22] = ["Yahoo! News", "", "http://news.yahoo.com/", "Pakistan: 15 killed in anti-Islam film protests", "http://news.yahoo.com/pakistan-15-killed-anti-islam-film-protests-150144705.html", "Romney’s path to 270: No margin for error", "http://news.yahoo.com/blogs/power-players-abc-news/romney-path-270-no-margin-error-112835568.html", "Pittsburgh police negotiating with armed hostage-taker", "http://news.yahoo.com/pittsburgh-police-man-holds-hostage-high-rise-142958418.html"];
sources[23] = ["IGN", "", "http://www.ign.com/", "Sleeping Dogs October DLC Revealed", "http://feeds.ign.com/~r/ign/news/~3/VmJP5NqAiWw/sleeping-dogs-october-dlc-revealed", "How Will Monster Hunter 3 Save Transfers Work?", "http://feeds.ign.com/~r/ign/news/~3/zyT4K3-thRw/how-will-monster-hunter-3-save-transfers-work", "TGS: Why Monster Hunter 4 is Not Multi-Platform", "http://feeds.ign.com/~r/ign/news/~3/zB-M0I-ubR0/why-monster-hunter-4-is-not-multi-platform"];
sources[24] = ["The Huffington Post", "", "http://www.huffingtonpost.com/", "Early Menopause Linked With Higher Stroke, Heart Disease Risk: Study", "http://www.huffingtonpost.com/2012/09/21/early-menopause-stroke-heart-disease-risk_n_1901395.html", "People With Psychopathic Traits Can't Smell As Well, Study Suggests", "http://www.huffingtonpost.com/2012/09/21/psychopath-smell-psychopathic-traits_n_1901214.html", "MD Anderson Cancer Center Launches Massive 'Moonshot' Effort Against 8 Cancers", "http://www.huffingtonpost.com/2012/09/21/md-anderson-cancer-center-cures-deaths-_n_1903597.html"];
sources[25] = ["TechCrunch", "", "http://techcrunch.com/", "Braintree Shifts Its Attention To Mobile, International Markets By Poaching From Google Wallet", "http://feedproxy.google.com/~r/Techcrunch/~3/TDb0Ntm2DdU/", "Tales From The Front Of The iPhone 5 Line: Stick It In My Veins", "http://feedproxy.google.com/~r/Techcrunch/~3/w6HSKFdPyMo/", "How Popular Is Passbook? Sephora Sees 17,000 Passbook Users On Day One, 20K After 24 Hours", "http://feedproxy.google.com/~r/Techcrunch/~3/17G9PT-5-AY/"];
sources[26] = ["Buzzfeed", "", "http://www.buzzfeed.com/", "Apple Employees Freaking Out Over Release Of iPhone 5", "http://www.buzzfeed.com/jtes/apple-store-employees-freak-out-over-iphone-5-rele", "Meet Norman, The Eco-Warrior Cat", "http://www.buzzfeed.com/copyranter/meet-norman-eco-warrior-cat", "Amy Poehler Singing Karaoke With Ellen", "http://www.buzzfeed.com/mjs538/amy-poehler-singing-karaoke"];
sources[27] = ["Time", "", "http://www.time.com/time/", "Losing Crossover Appeal Could Cost GOP the Senate", "http://feedproxy.google.com/~r/time/topstories/~3/cU1UUxbopNQ/", "What if Rich Countries Shut the Door on Immigration?", "http://feedproxy.google.com/~r/time/topstories/~3/FqjIGFjTN3U/", "The Madding Crowd: Beijing Inflames Popular Sentiment Against Japan", "http://feedproxy.google.com/~r/time/topstories/~3/Al6Z1qNGk7M/0,9171,2124878,00.html"];
sources[28] = ["CNN", "", "http://www.cnn.com/", "Kids chant 'Death to America'", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/MGYghKEl9w4/index.html", "Photos: Anti-U.S. demonstrations", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/3ab3f46gBkU/index.html", "Congress leaves; fiscal cliff remains", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/Vm-9gRJQIrA/index.html"];
sources[29] = ["WebMD", "", "http://www.webmd.com/", "Summer Tips for Psoriasis", "http://www.webmd.com/skin-problems-and-treatments/psoriasis/expck/psoriasis-in-spring-and-summer?src=RSS_PUBLIC", "Kids Exposed to Mercury, Lead at Risk for ADHD", "http://www.webmd.com/add-adhd/news/20120921/kids-mercury-lead-risk-adhd?src=RSS_PUBLIC", "Smoking, Ink Color Affect Laser Tattoo Removal", "http://www.webmd.com/skin-problems-and-treatments/news/20120920/smoking-ink-color-affect-laser-tattoo-removal?src=RSS_PUBLIC"];
sources[30] = ["Discovery", "", "http://news.discovery.com/", "How the Tabby Cat Got Its Stripes", "http://news.discovery.com/animals/tabby-cat-stripes-gene-120921.html#mkcpgn=rssnws1", "30 Min Exercise Yields Most Weight-Loss: DNews Nugget", "http://news.discovery.com/adventure/30-min-exercise-yields-most-weight-loss-dnews-nugget-120921.html#mkcpgn=rssnws1", "Catch This Shark? Throw It Back!: DNews Nugget", "http://news.discovery.com/earth/catch-this-shark-throw-it-back-dnews-nugget.html#mkcpgn=rssnws1"];
sources[31] = ["Sports Illustrated", "", "http://sportsillustrated.cnn.com/", "Chris Burke: Giants' all-hands-on-deck approach overwhelms Panthers", "http://nfl.si.com/2012/09/20/giants-all-hands-on-deck-approach-overwhelms-carolina/?xid=si_topstories", "Jay Jaffe: Nationals, Reds clinch postseason spots", "http://mlb.si.com/2012/09/21/five-cuts-nationals-reds-going-dancing/?xid=si_topstories", "Stewart Mandel: Week 4 College Football Pickoff", "http://sportsillustrated.cnn.com/2012/writers/stewart_mandel/09/20/week-4-pickoff/index.html?xid=si_topstories"];
sources[32] = ["The Drudge Report", "", "http://www.drudgereport.com/", "Pakistan explodes in protest; 17 killed...", "http://feedproxy.google.com/~r/DrudgeReportFeed/~3/eIjPuO2Ael4/20129219618263113.html", "'DAY OF LOVE'...", "http://feedproxy.google.com/~r/DrudgeReportFeed/~3/Oa23F9h2Wuk/us-protests-idUSBRE88J0VU20120921", "PROTESTS IN IRAN, INDONESIA, IRAQ, SRI LANKA, BANGLADESH, LEBANON, KASHMIR...", "http://feedproxy.google.com/~r/DrudgeReportFeed/~3/oS936SuTcaY/PROPHET_FILM_PROTEST_GLANCE"];
sources[33] = ["The Washington Post", "", "http://www.washingtonpost.com/", "GOP retreat on taxes likely if Obama wins", "http://feeds.washingtonpost.com/click.phdo?i=c7ff719917b25a94c3a27cb1429643db", "Maxine Waters cleared of House ethics charges", "http://feeds.washingtonpost.com/click.phdo?i=138d5587c27176b6f75cca3915ba5e52", "Why it’s time for Moderate Mitt", "http://feeds.washingtonpost.com/click.phdo?i=39d8a6c31e05d143ecfaccdd40a725b6"];
sources[34] = ["Reuters", "", "http://www.reuters.com/", "Insults to Islam ignite violence in Pakistan, six killed", "http://feeds.reuters.com/~r/reuters/topNews/~3/ZRP28Pog5gM/us-protests-idUSBRE88J0VU20120921", "Grumbling over maps fails to dampen Apple iPhone 5 fever", "http://feeds.reuters.com/~r/reuters/topNews/~3/LncZJStD4ZY/us-apple-iphone-idUSBRE88J1FQ20120921", "Iraq blocks Syria-bound North Korean plane, suspects weapons cargo", "http://feeds.reuters.com/~r/reuters/topNews/~3/8R0jHhBa_d4/us-syrai-crisis-iraq-idUSBRE88K0EL20120921"];
sources[35] = ["Fox News", "", "http://www.foxnews.com/", "'Self Evident' That Obama, Officials Still Not on Same Page About Attack", "http://www.foxnews.com/politics/2012/09/20/carney-elf-evident-benghazi-attack-was-terrorism/", "Community Organizing at Heart of 'Change' Comment", "http://www.foxnews.com/politics/2012/09/21/obama-cant-change-washington-unless-change-voters/", "Bay State Brawl: Brown, Warren Take Their Shots", "http://www.foxnews.com/politics/2012/09/20/brown-rips-warren-over-native-american-claim-in-first-debate-fierce-senate-race/#ixzz274dF5pIp?test=latestnews"];
sources[36] = ["Business Insider", "", "http://www.businessinsider.com/", "BATTLE OF THE JUMBO JETS: Airbus A380 Vs. Boeing 747-8I", "http://feedproxy.google.com/~r/businessinsider/~3/E7sOh4BUtxc/airbus-a380-v-boeing-747-8i-breakdown-2012-9", "Here's The Idyllic Mansion That Rory McIlroy Just Put Up For Sale For $3.2 Million", "http://feedproxy.google.com/~r/businessinsider/~3/PSmiSfKLVAc/rory-mcilroy-house-2012-9", "Check Out The Side Of The Gaza Strip The Media Never Shows", "http://feedproxy.google.com/~r/businessinsider/~3/sErvbnMKbv4/photos-life-on-the-gaza-strip-2012-9"];
sources[37] = ["USA Today", "", "http://www.usatoday.com/", "Midwest drought belt: A changed world emerges", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/gcq7v_oDdOQ/1", "3rd-party candidate complicates presidential race in Va.", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/F3A0u5aO0L4/1", "U.S. surge troops out of Afghanistan", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/WkP98XRdQkg/1"];
sources[38] = ["TMZ", "", "http://www.tmz.com/", "Chad Johnson -- Sentenced in Domestic Violence Case", "http://www.tmz.com/2012/09/21/chad-johnson-evelyn-lozada-domestic-violence-battery-sentence-plea-deal/", "Mitt Romney's Son Tagg Signed 'Abortion' Clause in His Surrogate Birth Contract", "http://www.tmz.com/2012/09/20/mitt-romney-son-tagg-abortion-clause-surrogate-birth-agreement-contract-bill-handel/", "Amy Winehouse -- Singer Gets Second Billing ... On Her GRAVESTONE", "http://www.tmz.com/2012/09/21/amy-winehouse-singer-gravestone/"];
sources[39] = ["Wired", "", "http://www.wired.com/", "Tailgate Parties Are a 'Powerful Impulse' and a Microcosm of Society", "http://feeds.wired.com/~r/wired/index/~3/mQAMiK2RI1M/", "No More Burnt Raspberry Pi: Safe Supercharging for Super-Small PC", "http://feeds.wired.com/~r/wired/index/~3/9rFdfYMSMuk/", "Dairy-Free Drama as Starbucks Drops Free Soy Milk", "http://feeds.wired.com/~r/wired/index/~3/apF75asJNIo/"];
sources[40] = ["E! Online", "", "http://www.eonline.com/", "What Kristen Stewart Affair? Liberty Ross' Mystery Guy ID'd as Ex-Flame Christopher Taylor", "http://feeds.eonline.com/~r/eonline/topstories/~3/KvQPVoZz3rw/what-kristen-stewart-affair-liberty-ross-mystery-guy-id-d-as-ex-flame-christopher-taylor", "Paris Hilton Keeps Apologizing for Homophobic/AIDS Remarks", "http://feeds.eonline.com/~r/eonline/topstories/~3/sNc0xAvizhM/paris-hilton-keeps-apologizing-for-homophobic-aids-remarks", "Maksim Chmerkovskiy Quits Dancing With the Stars, Wants to Pursue Acting Career", "http://feeds.eonline.com/~r/eonline/topstories/~3/qEJ8CLbmuGA/maksim-chmerkovskiy-quits-dancing-with-the-stars-wants-to-pursue-acting-career"];
sources[41] = ["HowStuffWorks", "", "http://www.howstuffworks.com/", "How Fakebook Works", "http://computer.howstuffworks.com/fakebook.htm", "10 Ways to Survive a Snowstorm", "http://adventure.howstuffworks.com/10-ways-to-survive-a-snowstorm.htm", "How Volcanoes Work", "http://science.howstuffworks.com/nature/natural-disasters/volcano.htm"];
sources[42] = ["Reddit", "", "http://www.reddit.com/", "Ran into this guy during lunch.", "http://www.reddit.com/r/pics/comments/107hj4/ran_into_this_guy_during_lunch/", "Sonic the Hedgehog graffiti", "http://www.reddit.com/r/gaming/comments/10735q/sonic_the_hedgehog_graffiti/", "Egypt's mufti urges Muslims to endure insults peacefully. Muslims angered by cartoons mocking the Prophet Mohammad should follow his example of enduring insults without retaliating, Egypt's highest Islamic legal official said on Thursday", "http://www.reddit.com/r/worldnews/comments/1074ih/egypts_mufti_urges_muslims_to_endure_insults/"];

sources.sort(function() {return 0.5 - Math.random()} );

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
            if (i % 2 == 0 && j % 2 == 0) {
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
            
            
            // put links in bottom part of unit
            
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