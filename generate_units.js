function generate_units()
{

var sources = []
sources[0] = ["Rolling Stone", "entertainment", "http://www.rollingstone.com/", "'Paradigm Shift' by The Epilogues - Free MP3", "http://www.rollingstone.com/music/news/paradigm-shift-by-the-epilogues-free-mp3-20120921", "Rival Bangkok Gangs in Gunfight After 'Gangnam Style' Dance-Off", "http://www.rollingstone.com/music/news/rival-bangkok-gangs-in-gunfight-after-gangnam-style-dance-off-20120921", "LMFAO Taking a Break to 'Do What’s Natural'", "http://www.rollingstone.com/music/news/lmfao-taking-a-break-to-do-what-s-natural-20120921"];
sources[1] = ["NBC News", "general", "http://www.nbcnews.com/", "Romney paid 14.1 percent effective tax rate in 2011", "http://pheedo.msnbc.msn.com/click.phdo?i=a3f247eaae0664656a0fce5d5f13bc8d", "Obama's battleground advantage grows", "http://pheedo.msnbc.msn.com/click.phdo?i=96f735cab5ab59fb345a67b84dfc3a12", "For 1st time, gay marriage may win statewide vote", "http://pheedo.msnbc.msn.com/click.phdo?i=997d3334939a8cd9917e693af92f02d5"];
sources[2] = ["Gamespot", "entertainment", "http://www.gamespot.com/", "Anna Launch Trailer", "http://www.gamespot.com/anna/videos/anna-launch-trailer-6396966/", "Remember Me - Combat System Gameplay", "http://www.gamespot.com/events/tgs-2012/video.html?sid=6396965", "Shifting World Launch Trailer", "http://www.gamespot.com/shifting-world/videos/shifting-world-launch-trailer-6396964/"];
sources[3] = ["NPR", "general", "http://www.npr.org/", "One Afghan Girl's Healing Journey To The U.S.", "http://www.npr.org/2012/09/18/161359245/one-afghan-girls-healing-journey-to-the-u-s?ft=1&f=1001", "Romney's 2011 Tax Return Shows He Paid At 14.1 Percent Rate, Campaign Says", "http://www.npr.org/blogs/thetwo-way/2012/09/21/161555470/romneys-2011-tax-return-shows-he-paid-at-14-1-percent-rate-campaign-says?ft=1&f=1001", "U.S. Speedskater Accused Of Sabotaging Rival", "http://www.npr.org/blogs/thetwo-way/2012/09/20/161485253/u-s-speedskater-accused-of-sabotaging-rival?ft=1&f=1001"];
sources[4] = ["Forbes", "business", "http://www.forbes.com/", "The Most Unsung Great Hire Marissa Mayer's Made So Far", "http://www.forbes.com/sites/ericjackson/2012/09/21/the-most-unsung-great-hire-marissa-mayers-made-so-far/", "NFL Could Get $1 Billion A Year For Thursday Package", "http://www.forbes.com/sites/mikeozanian/2012/09/21/nfl-could-get-1-billion-a-year-for-thursday-package/", "Is Iran Targeting Bank Of America And JPMorgan?", "http://www.forbes.com/sites/halahtouryalai/2012/09/21/is-iran-targeting-bank-of-america-and-jpmorgan/"];
sources[5] = ["Bleacher Report", "sports", "http://bleacherreport.com/", "Tampa Bay Buccaneers: This Team Is a Chameleon", "http://bleacherreport.com/articles/1343097-tampa-bay-buccaneers-this-team-is-a-chameleon", "New England Patriots: Stevan Ridley Not Wes Welker Will Be Key to Beating Ravens", "http://bleacherreport.com/articles/1342839-new-england-patriots-stevan-ridley-not-wes-welker-will-be-key-to-beating-ravens", "Fantasy Football Week 3: Running Backs to Avoid This Weekend", "http://bleacherreport.com/articles/1343095-fantasy-football-week-3-running-backs-to-avoid-this-weekend"];
sources[6] = ["The New York Times", "general", "http://www.nytimes.com/", "How ‘Silent Spring’ Ignited the Environmental Movement", "http://www.nytimes.com/2012/09/23/magazine/how-silent-spring-ignited-the-environmental-movement.html?partner=rss&emc=rss", "The Caucus: Romney to Release 2011 Tax Returns", "http://thecaucus.blogs.nytimes.com/2012/09/21/romney-to-release-2011-tax-returns/?partner=rss&emc=rss", "The Barclays Center in Brooklyn Showcases the Borough’s Food", "http://www.nytimes.com/2012/09/26/dining/the-barclays-center-in-brooklyn-showcases-the-boroughs-food.html?partner=rss&emc=rss"];
sources[7] = ["Amazon.com", "daily", "http://www.amazon.com/", "Deal of the Day: Irwin Vise-Grip GrooveLock 8-Piece Plier Set", "http://www.amazon.com/dp/B000GR37WU/ref=xs_gb_rss_2498201/?smid=ATVPDKIKX0DER&ccmID=380205&tag=rssfeeds-20", "Super Why \"You Sized\" 3 Ft Floor Puzzle", "http://www.amazon.com/dp/B001XTVCSQ/ref=xs_gb_rss_219031/?ccmID=380205&tag=rssfeeds-20", "40% Off Juniors' Shorts from Wallflower", "http://www.amazon.com/s/ref=xs_gb_rss_219401/?rh=n:1048186,p_8:40-,p_6:A1UUEGYWYAXS55&ccmID=380205&tag=rssfeeds-20"];
sources[8] = ["ABC News", "general", "http://abcnews.go.com/", "Mitt Romney Paid 14.1 Percent Tax Rate in 2011", "http://feeds.abcnews.com/click.phdo?i=db776b7b554bb39143dd58980a599cb2", "Obama Falsely Claims 'Fast and Furious' Began Under Bush", "http://feeds.abcnews.com/click.phdo?i=67ae86a1757cd5ba2e10daf71bedb87d", "Netanyahu: I'm Not Backing Romney", "http://feeds.abcnews.com/click.phdo?i=471091c5573018713d89e9e8e3e8aaa6"];
sources[9] = ["Politico", "politics", "http://www.politico.com/", "World's Obama fever cools", "http://feeds.politico.com/click.phdo?i=8e8cad0d9b103207e4af89051e65c87e", "Romney to release 20-year tax rate 'summary,'  2011 taxes today", "http://feeds.politico.com/click.phdo?i=1b7229ec5be915bc14a96863299d61ff", "Homer Simpson's 2012 vote revealed", "http://feeds.politico.com/click.phdo?i=7eb4bb39a65d1d4428ea4869daf7d36b"];
sources[10] = ["NASA Picture of the Day", "daily", "http://apod.nasa.gov/apod/", "Wildland Fires in Idaho", "http://www.nasa.gov/multimedia/imagegallery/image_feature_2360.html"];
sources[11] = ["The Wall Street Journal", "business", "http://online.wsj.com/home-page", "U.S. Seeks to Patch Laundering Net", "http://online.wsj.com/article/SB10000872396390444032404578008501644101688.html?mod=rss_whats_news_us", "Stocks Hold Gains", "http://online.wsj.com/article/SB10000872396390444165804578009791243800064.html?mod=rss_whats_news_us", "Xstrata Delays Glencore Decision", "http://online.wsj.com/article/SB10000872396390444032404578010300076405868.html?mod=rss_whats_news_us"];
sources[12] = ["BBC News", "general", "http://www.bbc.co.uk/news/", "Pressure on police row minister", "http://www.bbc.co.uk/news/uk-politics-19675297#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa", "Deadly film protests in Pakistan", "http://www.bbc.co.uk/news/world-asia-19678412#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa", "EMI-Universal deal gets approval", "http://www.bbc.co.uk/news/business-19672277#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa"];
sources[13] = ["Ars Technica", "technology", "http://arstechnica.com/", "US, EU regulators approve Universal-EMI music deal", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/713HZL5Dbkc/", "LightSquared redux: Lawmakers admit lack of expertise, but blame FCC", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/0zYuaDiTx_E/", "Ig Nobel prizes check out monkeys' behinds, spill their coffee", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/uaGABY9yTqk/"];
sources[14] = ["CBS News", "general", "http://www.cbsnews.com/", "Romney paid 14.1% tax rate in 2011", "http://feeds.cbsnews.com/~r/CBSNewsMain/~3/RmAuGtdupfU/", "At least 17 killed in Pakistan protests", "http://feeds.cbsnews.com/~r/CBSNewsMain/~3/9Clzn5cY6DU/", "Hostage freed, suspect in custody", "http://feeds.cbsnews.com/~r/CBSNewsMain/~3/FvhYbR8AC5g/"];
sources[15] = ["Cracked", "random", "http://www.cracked.com/", "23 Modern Gadgets After the Apocalypse", "http://feedproxy.google.com/~r/CrackedRSS/~3/-f2eSsb3A8E/", "3 Reasons We Need to Reexamine How We Elect Presidents", "http://feedproxy.google.com/~r/CrackedRSS/~3/8GLaeFOviQo/", "5 Terrifying Origin Stories Behind Popular Children's Songs", "http://feedproxy.google.com/~r/CrackedRSS/~3/Y7YJUoeUfIU/article_20032_5-terrifying-origin-stories-behind-popular-childrens-songs.html"];
sources[16] = ["People", "entertainment", "http://www.people.com/people/", "Rob Corddry's (Hilarious) Emmy Prep", "http://feeds.people.com/~r/people/headlines/~3/JX3uzJRfa3M/0,,20629326,00.html", "Third Child on the Way for Harold Perrineau", "http://feeds.people.com/~r/people/headlines/~3/11rcpONuzyo/", "New Girl's Max Greenfield Thought Emmy Nod Was an Online Rumor", "http://feeds.people.com/~r/people/headlines/~3/ypITAJ2XUqQ/0,,20304925_20631908,00.html"];
sources[17] = ["Mashable", "technology", "http://mashable.com/", "25 Dead Presidents to Follow on Twitter", "http://feeds.mashable.com/~r/Mashable/~3/XC0YT-fz3yw/", "‘Hunger Games’ Gets Bad Lip Reading Treatment [VIDEO]", "http://feeds.mashable.com/~r/Mashable/~3/zkDpGLH5u7k/", "Romney Posts 2011 Tax Returns and Other Tax Info Online", "http://feeds.mashable.com/~r/Mashable/~3/pVF6oLpamBM/"];
sources[18] = ["Popular Science", "science-and-health", "http://www.popsci.com/", "Timeline: Space Shuttle Endeavour's Greatest Moments", "http://feeds.popsci.com/c/34567/f/632419/s/23aec182/l/0L0Spopsci0N0Cscience0Carticle0C20A120E0A90Ctimeline0Eendeavours0Egreatest0Emoments/story01.htm", "Archive Gallery: 9 Phone Innovations That Made The iPhone 5 Possible", "http://feeds.popsci.com/c/34567/f/632419/s/23ae9982/l/0L0Spopsci0N0Ctechnology0Carticle0C20A120E0A90Carchive0Egallery0E90Ephone0Einnovations0Emade0Eiphone0E50Epossible/story01.htm", "A New Artificial Heart Pump That Mimics the Real Thing", "http://feeds.popsci.com/c/34567/f/632419/s/23ae908b/l/0L0Spopsci0N0Ctechnology0Carticle0C20A120E0A80Cnew0Eartificial0Eheart0Epump0Eacts0Ereal0Ething/story01.htm"];
sources[19] = ["CNBC", "business", "http://www.cnbc.com/", "Fed Wants Inflation Now, Will Clean Up ‘Mess’ Later: El-Erian", "http://www.cnbc.com//id/49115958", "Apple Fans Shrug Off Maps Fiasco, Lap Up iPhone 5", "http://www.cnbc.com//id/49115586", "Apple Fanatics Line up Around the Globe", "http://www.cnbc.com//id/49117915"];
sources[20] = ["ESPN", "sports", "http://espn.go.com/", "Backups Brown, Barden shine as Giants cruise", "http://scores.espn.go.com/nfl/recap?gameId=320920029", "Report: Cabrera DQ's self from NL batting race", "http://espn.go.com/mlb/story/_/id/8407726/san-francisco-giants-melky-cabrera-disqualifies-nl-batting-title", "Sources: NFL, officials still far apart in dispute", "http://espn.go.com/nfl/story/_/id/8406500/big-gaps-remain-league-officials-sources"];
sources[21] = ["SB Nation", "sports", "http://www.sbnation.com/", "Fantasy War Room OPEN: Sit/Start Advice For Week 3!", "http://www.sbnation.com/fantasy/2012/9/21/3369766/fantasy-football-sit-start-advice-week-3-live-chat", "Devery Henderson Probable For Sunday, Presents No Fantasy Value", "http://www.sbnation.com/fantasy/2012/9/21/3369708/devery-henderson-injury-fantasy-football-saints-vs-chiefs", "Dale Earnhardt Jr. Says JR Motorsports Changes Won't Distract From NASCAR's Chase", "http://www.sbnation.com/nascar/2012/9/21/3368976/dale-earnhardt-jr-nascar-new-hampshire-2012"];
sources[22] = ["Yahoo! News", "general", "http://news.yahoo.com/", "Romney releasing 2011 tax return, paid IRS 14.1 percent", "http://news.yahoo.com/blogs/ticket/romney-release-2011-tax-return-paid-irs-14-181125301--election.html", "Obama mocks Romney: ‘What kind of inside job is he talking about?’", "http://news.yahoo.com/blogs/ticket/obama-mocks-romney-kind-inside-job-talking-173601952--election.html", "Army veteran surrenders in Pittsburgh hostage taking", "http://news.yahoo.com/pittsburgh-army-veteran-surrenders-office-worker-hostage-145850422--abc-news-topstories.html"];
sources[23] = ["IGN", "entertainment", "http://www.ign.com/", "App Store Update: September 21", "http://feeds.ign.com/~r/ign/news/~3/RiFUEmNCTZA/app-store-update-september-21-2", "What We Want in a PlayStation Store Redesign", "http://feeds.ign.com/~r/ign/news/~3/ZEjS5DPlXHc/what-we-want-in-a-playstation-store-redesign", "Marvel Teases New Point One (Again)", "http://feeds.ign.com/~r/ign/news/~3/UkSBW_fRLck/marvel-teases-new-point-one-again"];
sources[24] = ["The Huffington Post", "general", "http://www.huffingtonpost.com/", "Koch Brothers Targeted By Progressive Group's 'Greed Agenda' Bus Tour", "http://www.huffingtonpost.com/2012/09/21/koch-brothers-bus-tour_n_1903870.html", "10 States Where Income Inequality Is Growing Fastest", "http://www.huffingtonpost.com/2012/09/21/income-inequality-states_n_1904321.html", "Tweaking How We Classify Poll Leaders And Color The Map: HuffPost Election Dashboard", "http://www.huffingtonpost.com/2012/09/21/election-polls-map_n_1904122.html"];
sources[25] = ["TechCrunch", "technology", "http://techcrunch.com/", "Hands-On With Real Racing 3 And Clumsy Ninja On iPhone 5: Watch Out Game Consoles", "http://feedproxy.google.com/~r/Techcrunch/~3/0TudSvvfUgo/", "Welcome To TechCrunch’s Words-Driven Friday", "http://feedproxy.google.com/~r/Techcrunch/~3/gfpx1lmZrXw/", "Some Early iPhone 5 Adopters Report Odd Screen Issues", "http://feedproxy.google.com/~r/Techcrunch/~3/iFxQWkVbzVI/"];
sources[26] = ["Buzzfeed", "random", "http://www.buzzfeed.com/", "Steamy Homoerotic World War II Towel Ads", "http://www.buzzfeed.com/copyranter/the-steamy-homoerotic-world-war-ii-cannon-towel-ad", "Teenage Morrissey's Scathing Review Of The Ramones", "http://www.buzzfeed.com/katienotopoulos/teenage-morrisseys-scathing-review-of-the-ramones", "24 Classic Pop Songs That Peaked At Number Two", "http://www.buzzfeed.com/perpetua/24-classic-pop-songs-that-peaked-at-number-two"];
sources[27] = ["Time", "general", "http://www.time.com/time/", "Bitter Harvest: U.S. Farmers Blame Billion-Dollar Losses on Immigration Laws", "http://feedproxy.google.com/~r/time/topstories/~3/aoMGrgmJFus/", "Google+ Hangout: Are Retailers Watching Our Every Move?", "http://feedproxy.google.com/~r/time/topstories/~3/GhmfMiu9WDM/", "Was Romney's Tax Gaffe a Repudiation of Reaganite Conservatism?", "http://feedproxy.google.com/~r/time/topstories/~3/2Z8EHwxoWCo/"];
sources[28] = ["CNN", "general", "http://www.cnn.com/", "Endeavour's farewell tour", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/249CDXsmacc/index.html", "Introspection amid protests?", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/Cie9sf3LFow/index.html", "Congress leaves; fiscal cliff remains", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/Vm-9gRJQIrA/index.html"];
sources[29] = ["WebMD", "science-and-health", "http://www.webmd.com/", "Summer Tips for Psoriasis", "http://www.webmd.com/skin-problems-and-treatments/psoriasis/expck/psoriasis-in-spring-and-summer?src=RSS_PUBLIC", "Kids Exposed to Mercury, Lead at Risk for ADHD", "http://www.webmd.com/add-adhd/news/20120921/kids-mercury-lead-risk-adhd?src=RSS_PUBLIC", "Smoking, Ink Color Affect Laser Tattoo Removal", "http://www.webmd.com/skin-problems-and-treatments/news/20120920/smoking-ink-color-affect-laser-tattoo-removal?src=RSS_PUBLIC"];
sources[30] = ["Discovery", "science-and-health", "http://news.discovery.com/", "Life Expectancy Drops for Least Educated", "http://news.discovery.com/human/life-expectancy-shrinking-for-uneducated-white-women-120921.html#mkcpgn=rssnws1", "Excellent Idea of the Day: No More Turbulence", "http://news.discovery.com/earth/excellent-idea/airplane-airport-delay-turbulence-flight-120921.html#mkcpgn=rssnws1", "Food Stamps Buy $2B in Sugary Bevs: DNews Nugget", "http://news.discovery.com/human/food-stamps-buy-2b-in-sugary-bevs-dnews-nugget-120921.html#mkcpgn=rssnws1"];
sources[31] = ["Sports Illustrated", "sports", "http://sportsillustrated.cnn.com/", "Andy Staples: Rich Rodriguez, Arizona face tall task at Oregon; more Walkthrough", "http://sportsillustrated.cnn.com/2012/writers/andy_staples/09/21/arizona-rich-rodriguez-oregon/index.html?xid=si_topstories", "Don't ignore Nick Aliotti's defense at Oregon", "http://sportsillustrated.cnn.com/2012/writers/stewart_mandel/09/21/oregon-defense-nick-aliotti/index.html?xid=si_topstories", "Peter King: Griffin, Dalton among faces of changing NFL", "http://sportsillustrated.cnn.com/2012/writers/peter_king/09/21/nfl-game-plan-week3/index.html?xid=si_topstories"];
sources[32] = ["The Drudge Report", "politics", "http://www.drudgereport.com/", "GALLUP FRIDAY: O 47% R 47%...", "http://feedproxy.google.com/~r/DrudgeReportFeed/~3/IRS1QSWIY7U/Obama-Romney.aspx", "100 DAYS UNTIL LARGEST TAX HIKES IN HISTORY", "http://feedproxy.google.com/~r/DrudgeReportFeed/~3/CGXOiPIALbk/days-taxmageddon-a7203", "Romney Releases 2011 Tax Returns; Paid $1.9 Million on $13.7 in Income...", "http://feedproxy.google.com/~r/DrudgeReportFeed/~3/OAYrW5PoyX8/romneys-release-taxes_652850.html"];
sources[33] = ["The Washington Post", "politics", "http://www.washingtonpost.com/", "Mitt Romney releases tax return for 2011, showing he paid 14.1 percent tax rate", "http://feeds.washingtonpost.com/click.phdo?i=762cde18ccfc89a80aa64dfa4ab2b70a", "Growth of early voting transforms electoral strategy", "http://feeds.washingtonpost.com/click.phdo?i=ef5d5cadbaba35f511d7d1b69afde39b", "Featured Advertiser", "http://ads.pheedo.com/click.phdo?s=ef5d5cadbaba35f511d7d1b69afde39b&p=4"];
sources[34] = ["Reuters", "general", "http://www.reuters.com/", "Romney paid $1.9 million in taxes in 2011: campaign", "http://feeds.reuters.com/~r/reuters/topNews/~3/fe3bm07kQzE/us-usa-campaign-romney-taxes-idUSBRE88K11Y20120921", "Insults to Islam ignite violence in Pakistan, 15 killed", "http://feeds.reuters.com/~r/reuters/topNews/~3/ZRP28Pog5gM/us-protests-idUSBRE88J0VU20120921", "Apple iPhone 5 fever rages despite grumbling over maps", "http://feeds.reuters.com/~r/reuters/topNews/~3/LncZJStD4ZY/us-apple-iphone-idUSBRE88J1FQ20120921"];
sources[35] = ["Fox News", "general", "http://www.foxnews.com/", "Lawmakers to Obama: Get Your Story Straight", "http://www.foxnews.com/politics/2012/09/21/lawmakers-to-obama-get-your-story-straight-on-libya-attack/", "A Radical Proposal in Response to Radical Rage", "http://www.foxnews.com/opinion/2012/09/21/muhammad-cartoon-day/", "Romney Taxes Reveal 13.5% to Charity, 20% Rate", "http://www.foxnews.com/politics/2012/09/21/campaign-says-romney-paid-average-effective-tax-rate-20-percent-over-2-decades/"];
sources[36] = ["Business Insider", "business", "http://www.businessinsider.com/", "The New 'Les Misérables' Is Changing The Way Movie Musicals Are Filmed", "http://feedproxy.google.com/~r/businessinsider/~3/kAHFoamC92I/les-miserables-new-way-to-shoot-musicals-2012-9", "Jobless Rates Increased In More Than Half The Country In August", "http://feedproxy.google.com/~r/businessinsider/~3/hi0NR5PkZtY/jobless-rates-increased-in-more-than-half-the-country-in-august-2012-9", "POLL: Do You Like The White iPhone 5 Or Black iPhone 5 Better? (AAPL)", "http://feedproxy.google.com/~r/businessinsider/~3/dNjMw6RLK94/white-or-black-iphone-5-2012-9"];
sources[37] = ["USA Today", "general", "http://www.usatoday.com/", "Ousted Detroit mayor's corruption trial gets underway", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/71BbCgOlaTE/1", "Obama promotes Medicare to AARP", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/YI3eLH2XQkY/1", "Protests in Pakistan over anti-Muslim film turn deadly", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/f2fYW-13alk/1"];
sources[38] = ["TMZ", "entertainment", "http://www.tmz.com/", "'The Lone Ranger' Crew Member Dead -- Drowns on Movie Set", "http://www.tmz.com/2012/09/21/the-lone-ranger-dead-drowns-dies-crew-member/", "Kobe Bryant's Wife Vanessa To Unload Mansion", "http://www.tmz.com/2012/09/21/kobe-bryant-vanessa-bryant-selling-mansion-newport-beach/", "Congressman Fred Upton -- I'm PROUD of My Supermodel Niece", "http://www.tmz.com/2012/09/21/congressman-fred-upton-kate-upton-proud/"];
sources[39] = ["Wired", "technology", "http://www.wired.com/", "Review: <em>House at the End of the Street</em> Is a Dead End", "http://feeds.wired.com/~r/wired/index/~3/hKKebNMawqI/", "Operation iPhone Drop: From Cargo Plane to Door Stoop", "http://feeds.wired.com/~r/wired/index/~3/eQPYJny7lyg/", "Hostage-Taker Updates Facebook During Police Standoff", "http://feeds.wired.com/~r/wired/index/~3/Wwo06WQHs9Q/"];
sources[40] = ["E! Online", "entertainment", "http://www.eonline.com/", "Partners' Michael Urie and David Krumholtz Dish on Sophia Bush's \"Side-Boob-Only\" Deal, Brandon Routh's Stench", "http://feeds.eonline.com/~r/eonline/topstories/~3/AsMxWaKStzA/partners-michael-urie-and-david-krumholtz-dish-on-sophia-bush-s-quot-side-boob-only-quot-deal-brandon-routh-s-stench", "Live From E! Oprah's Fortune Flop, Gaga's Fuller Figure and a Little Bit o' Lohan!", "http://feeds.eonline.com/~r/eonline/topstories/~3/9Knr6FJUjFk/live-from-e-oprah-s-fortune-flop-gaga-s-fuller-figure-and-a-little-bit-o-lohan", "The 12 Best Things Ever Said at the Emmys", "http://feeds.eonline.com/~r/eonline/topstories/~3/L32cyyyuAEg/the-12-best-things-ever-said-at-the-emmys"];
sources[41] = ["HowStuffWorks", "science-and-health", "http://www.howstuffworks.com/", "How Fakebook Works", "http://computer.howstuffworks.com/fakebook.htm", "10 Ways to Survive a Snowstorm", "http://adventure.howstuffworks.com/10-ways-to-survive-a-snowstorm.htm", "How Volcanoes Work", "http://science.howstuffworks.com/nature/natural-disasters/volcano.htm"];
sources[42] = ["Reddit", "random", "http://www.reddit.com/", "Verizon CFO - \"Unlimited is just a word, it doesn't really mean anything.\"", "http://www.reddit.com/r/technology/comments/108trt/verizon_cfo_unlimited_is_just_a_word_it_doesnt/", "President Bill Clinton: \"the problem with any ideology is that it gives the answer before you look at the evidence. \"", "http://www.reddit.com/r/politics/comments/108t2y/president_bill_clinton_the_problem_with_any/", "My Friends Sister Got This At a Jump Rope Camp. It's Supposed to Say Rope.", "http://www.reddit.com/r/funny/comments/10825p/my_friends_sister_got_this_at_a_jump_rope_camp/"];

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