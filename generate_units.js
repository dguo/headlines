function generate_units()
{

var sources = []
sources[0] = ["Rolling Stone", "entertainment", "http://www.rollingstone.com/", "Jack White Abruptly Ends Radio City Show After 50 Minutes", "http://www.rollingstone.com/music/news/jack-white-abruptly-ends-show-after-50-minutes-20120930", "Box Office Report: 'Hotel Transylvania' Sets September Record", "http://www.rollingstone.com/movies/news/box-office-report-hotel-transylvania-sets-september-record-20120930", "Justin Bieber Throws Up Onstage During Believe Tour Kickoff", "http://www.rollingstone.com/music/videos/justin-bieber-vomits-onstage-during-believe-tour-kickoff-20120930"];
sources[1] = ["NBC News", "a.general", "http://www.nbcnews.com/", "Christie: Romney debate performance will reshape race", "http://pheedo.msnbc.msn.com/click.phdo?i=56070b88d2e03612f00004d936f23c4a", "Paul Ryan: 'We've had some missteps' in campaign", "http://pheedo.msnbc.msn.com/click.phdo?i=33bbf6e400b84c1b2d035a57650d560b"];
sources[2] = ["NPR", "a.general", "http://www.npr.org/", "Being 'Better Off' May Not Be Enough To Win Colo.", "http://www.npr.org/2012/09/30/162029579/being-better-off-may-not-be-enough-to-win-colo?ft=1&f=1001", "On The Road: Reporting On Lead Poisoning In Nigeria", "http://www.npr.org/blogs/health/2012/09/27/161900047/on-the-road-reporting-on-lead-poisoning-in-nigeria?ft=1&f=1001", "Candidates Push For Colo. To Swing In Their Favor", "http://www.npr.org/2012/09/30/162039205/candidates-push-for-colo-to-swing-in-their-favor?ft=1&f=1001"];
sources[3] = ["Forbes", "business", "http://www.forbes.com/", "Hublot's King Power Watch Raises $1 Million At Charity Boxing Auction", "http://www.forbes.com/sites/anthonydemarco/2012/09/30/hublots-king-power-watch-raises-1-million-at-charity-boxing-auction/", "'Harry Potter' And 'Dark Souls' Come To Skyrim", "http://www.forbes.com/sites/erikkain/2012/09/30/harry-potter-and-dark-souls-come-to-skyrim/", "Signs Point To Dynamite Auto Sales This Fall", "http://www.forbes.com/sites/jimhenry/2012/09/30/signs-point-to-dynamite-auto-sales-this-fall-2/"];
sources[4] = ["Bleacher Report", "sports", "http://bleacherreport.com/", "Brandon Bolden: Patriots RB Is Perfect Waiver-Wire Option for Owners in Need", "http://bleacherreport.com/articles/1353254-brandon-bolden-patriots-rb-is-perfect-waiver-wire-option-for-owners-in-need", "Redskins Snake Bitten Again by Brandon Meriweather and Aldrick Robinson Injuries", "http://bleacherreport.com/articles/1353299-redskins-snake-bitten-again-by-brandon-meriweather-and-aldrick-robinson-injuries", "Scott Chandler Injury: Updates on Bills TE's Possible Concussion", "http://bleacherreport.com/articles/1353218-scott-chandler-injury-updates-on-bills-tes-possible-concussion"];
sources[5] = ["Reuters", "a.general", "http://www.reuters.com/", "Five things to watch in the presidential debate", "http://feeds.reuters.com/~r/reuters/topNews/~3/Usx7Uw8b9wY/us-usa-campaign-debate-watch-idUSBRE88T0F520120930", "String of Iraq blasts kills at least 32", "http://feeds.reuters.com/~r/reuters/topNews/~3/PGdKnN_Av8I/us-iraq-securityviolence-idUSBRE88T03420120930", "Azerbaijan eyes aiding Israel against Iran", "http://feeds.reuters.com/~r/reuters/topNews/~3/yBBJoNZQ7i8/us-iran-israel-azerbaijan-idUSBRE88T05L20120930"];
sources[6] = ["Fox News", "a.general", "http://www.foxnews.com/", "Ryan Confident Ahead of Debates", "http://www.foxnews.com/politics/2012/09/30/ryan-were-going-to-win-this-race/", "Corker Slams 'Bizarre' Response to Libya Attacks", "http://www.foxnews.com/politics/2012/09/30/corker-calls-admins-libya-response-bizarre-joins-fellow-republicans-in-wanting/", "NY Man Sought in Murder Threatened to Kill in '85", "http://www.foxnews.com/us/2012/09/30/man-sought-in-daughter-in-law-murder-threatened-to-kill-dec-officer-in-185/"];
sources[7] = ["Business Insider", "business", "http://www.businessinsider.com/", "The USA Is Collapsing At The Ryder Cup Right Now", "http://feedproxy.google.com/~r/businessinsider/~3/oKyF5Uqvoy4/2012-ryder-cup-scores-2012-9", "Here's What Happens When Neil Young, The Foo Fighters, And 60,000 People Gather In Central Park", "http://feedproxy.google.com/~r/businessinsider/~3/mDIXUx7RTA8/global-citizen-festival-2012-9", "This Disastrous Play Perfectly Sums Up What Has Happened To The Jets This Year", "http://feedproxy.google.com/~r/businessinsider/~3/nMIP1tRmuic/santonio-holmes-injured-fumbles-video-2012-9"];
sources[8] = ["Science", "science_and_health", "http://news.sciencemag.org/", "Hermit Crabs Pass Acid Test", "http://news.sciencemag.org/sciencenow/2012/09/hermit-crabs-pass-acid-test.html?rss=1", "Billions of Spanish Research Euros Remain Unspent", "http://news.sciencemag.org/scienceinsider/2012/09/billions-of-spanish-research-eur.html?rss=1", "Netting Better Data on Global Fish Stocks", "http://news.sciencemag.org/sciencenow/2012/09/netting-better-data-on-global-fi.html?rss=1"];
sources[9] = ["USA Today", "a.general", "http://www.usatoday.com/", "Candidate Match Game 2", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/CXd10-pAw18/", "Convicted sniper Malvo shows remorse in interview", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/p_wN3pxMXr0/", "Afghan inside attack puts U.S. troop deaths at 2,000", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/clG1jCRM94U/"];
sources[10] = ["The New York Times", "a.general", "http://www.nytimes.com/", "Political Memo: Using Debates to Turn Electoral Tide: Difficult but Not Impossible", "http://www.nytimes.com/2012/10/01/us/politics/using-debates-to-turn-electoral-tide-difficult-but-not-impossible.html?partner=rss&emc=rss", "News Analysis: Pension Dilemma in Europe's Debt Crisis", "http://www.nytimes.com/2012/10/01/business/global/pension-dilemma-in-europes-debt-crisis.html?partner=rss&emc=rss", "Bo Xilai’s Son Defends Him as Upright and Devoted", "http://www.nytimes.com/2012/10/01/world/asia/bo-xilais-son-defends-him-as-upright-and-devoted.html?partner=rss&emc=rss"];
sources[11] = ["Wired", "technology", "http://www.wired.com/", "Giveaway: <em>Mars Attacks</em> Book Spills Vintage Alien Gore", "http://feeds.wired.com/~r/wired/index/~3/E6odJMw5mAY/", "Review: Riveting <em>Homeland</em> Probes Post-Traumatic Spy Syndrome", "http://feeds.wired.com/~r/wired/index/~3/iTaV5kx7MxA/", "Watch Live: Harvest Moon Meets Up With Uranus in Opposition", "http://feeds.wired.com/~r/wired/index/~3/WEEQ_nJN2f8/"];
sources[12] = ["Amazon.com", "z.daily", "http://www.amazon.com/?&linkCode=ur2&tag=thdalo00-20", "Deal of the Day: Tron: Legacy/Tron Original Classic (Five-Disc Combo: Blu-ray 3D / Blu-ray / DVD / Digital Copy)", "http://www.amazon.com/dp/B004K4N64E/ref=xs_gb_rss_2779741/?ccmID=380205&tag=thdalo00-20&linkCode=ur2", "Save over 40% on the elago S5 Slim Fit 2 Case for New Apple iPhone 5 - Soft feeling Jean Indigo", "http://www.amazon.com/elago-Slim-Case-Apple-iPhone/dp/B009B57KPI/ref=xs_gb_rss_220791/?m=A23S71QXDZCPQA&ccmID=380205&tag=thdalo00-20&linkCode=ur2", "Up to 50% off Ultra Anti-Glare Screen Protector Film for iPhone 3G/3GS (3-Pack) - Matte", "http://www.amazon.com/GreatShield-Anti-Glare-Screen-Protector-iPhone/dp/B004J6OP2U/ref=xs_gb_rss_220701/?m=A19R3BN6ZSO9A1&ccmID=380205&tag=thdalo00-20&linkCode=ur2"];
sources[13] = ["ABC News", "a.general", "http://abcnews.go.com/", "Christie: 'Stop Lying, Mr. President' About Romney's Economic Plan", "http://feeds.abcnews.com/click.phdo?i=25f0726e6070b46b5e9929b5037846de", "TSA Lets Loaded Guns Past Security, on to Planes", "http://feeds.abcnews.com/click.phdo?i=568c19c8dca6502e1c898598598e3dae", "Teen Charged With Killing Newborn Son", "http://feeds.abcnews.com/click.phdo?i=32bf3dd33d32bf2fcd6dcefc775e50b7"];
sources[14] = ["Politico", "politics", "http://www.politico.com/", "Supreme Court cases could stir 2012 race", "http://feeds.politico.com/click.phdo?i=c18a1c57ee2ff83a998c33b53732216e", "Defining moment eludes Romney", "http://feeds.politico.com/click.phdo?i=22802f5cbbf04d80ac41d584ee2897e8", "2012 map could be deja vu for Obama", "http://feeds.politico.com/click.phdo?i=4589ed59f656a959e2196bea6055dedd"];
sources[15] = ["The Wall Street Journal", "business", "http://online.wsj.com/home-page", "Spain Expects Wider Deficit on Bank Aid", "http://online.wsj.com/article/SB10000872396390444138104578028484168511130.html?mod=rss_whats_news_us", "Nokia Seals Mapping Deal With Oracle", "http://online.wsj.com/article/SB10000872396390444592404578028653433852408.html?mod=rss_whats_news_us", "Google Pounces on Apple Map Problems", "http://online.wsj.com/article/SB10000872396390444712904578024170366547916.html?mod=rss_whats_news_us"];
sources[16] = ["E! Online", "entertainment", "http://www.eonline.com/", "Lindsay Lohan Allegedly Assaulted Inside New York Hotel", "http://feeds.eonline.com/~r/eonline/topstories/~3/yCsDwYigbMI/lindsay-lohan-allegedly-assaulted-inside-new-york-hotel", "Is Yvonne Strahovski Dexter's New Big Bad? Plus, the Moment Chuck Fans Have Been Waiting For!", "http://feeds.eonline.com/~r/eonline/topstories/~3/A5s3xym1ulI/is-yvonne-strahovski-dexter-rsquo-s-new-big-bad-plus-the-moment-chuck-fans-have-been-waiting-for", "Justin Bieber Throws Up Onstage, Keeps Rockin'", "http://feeds.eonline.com/~r/eonline/topstories/~3/vTofjgmfs48/justin-bieber-throws-up-onstage-keeps-rockin"];
sources[17] = ["Reddit", "random", "http://www.reddit.com/", "Photograph of a mirror on an easel in the desert that looks like a painting", "http://www.reddit.com/r/pics/comments/10ou5k/photograph_of_a_mirror_on_an_easel_in_the_desert/", "I am Adam Savage. Co-host of Mythbusters. AMA", "http://www.reddit.com/r/IAmA/comments/10psj3/i_am_adam_savage_cohost_of_mythbusters_ama/", "Maid in Dubai tries to kill herself after her employers don't pay her for 3 months. Woman is arrested for attempting suicide and fined $270.", "http://www.reddit.com/r/worldnews/comments/10pcw7/maid_in_dubai_tries_to_kill_herself_after_her/"];
sources[18] = ["BBC News", "a.general", "http://www.bbc.co.uk/news/", "Miliband in union pay freeze row", "http://www.bbc.co.uk/news/uk-politics-19777201#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa", "Service remembers fallen officers", "http://www.bbc.co.uk/news/uk-19760739#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa", "US toll in Afghan war hits 2,000", "http://www.bbc.co.uk/news/world-asia-19776402#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa"];
sources[19] = ["Ars Technica", "technology", "http://arstechnica.com/", "How a rogue appeals court wrecked the patent system", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/8iLahBtzQ08/", "Masterpiece: Super Mario World 2: Yoshi's Island", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/6Sr-bHEtZwY/", "African mouse regenerates lost skin, cartilage and hair without scarring", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/Y2H71oEpiic/"];
sources[20] = ["CBS News", "a.general", "http://www.cbsnews.com/", "Russian church: Punk rockers deserve mercy, if repentant", "http://feeds.cbsnews.com/~r/CBSNewsWorld/~3/iu6SPosrF2s/", "7.4-mag. earthquake hits southwestern Colombia", "http://feeds.cbsnews.com/~r/CBSNewsWorld/~3/ldWbub4YDD8/", "Bomb explodes near Nigerian Islamic school", "http://feeds.cbsnews.com/~r/CBSNewsWorld/~3/onINXyfhqJ8/"];
sources[21] = ["Cracked", "random", "http://www.cracked.com/", "The 15 Most Inadequate Silver Linings Ever", "http://feedproxy.google.com/~r/CrackedRSS/~3/vQ7n0jzjnLw/", "The 5 Stupidest Ways People Try to Avoid Embarrassment", "http://feedproxy.google.com/~r/CrackedRSS/~3/01gwHlMF9N0/", "5 Pop Culture Creations Spoiled by Their Own Creators", "http://feedproxy.google.com/~r/CrackedRSS/~3/uAOEC6R45Z8/article_20044_5-pop-culture-creations-spoiled-by-their-own-creators.html"];
sources[22] = ["Mashable", "technology", "http://mashable.com/", "Here’s Why Tumblr Will Be Down Next Weekend", "http://feeds.mashable.com/~r/Mashable/~3/a3Z1Nmu0cFU/", "Top 10 Tech This Week", "http://feeds.mashable.com/~r/Mashable/~3/Wr4-4d71VpU/", "Which is Sorriest, Apple Maps or Siri? [SUNDAY COMICS]", "http://feeds.mashable.com/~r/Mashable/~3/y5Sn7xQCvNA/"];
sources[23] = ["Popular Science", "science_and_health", "http://www.popsci.com/", "Archive Gallery: PopSci's Arctic Adventures", "http://feeds.popsci.com/c/34567/f/632419/s/23eeebf3/l/0L0Spopsci0N0Cscience0Carticle0C20A120E0A90Carchive0Egallery0Epopscis0Earctic0Eadventures/story01.htm", "Buildings For A Rainbow Balloon Utopia And Other Amazing Images Of The Week", "http://feeds.popsci.com/c/34567/f/632419/s/23ee8b15/l/0L0Spopsci0N0Cscience0Carticle0C20A120E0A90Cmost0Eamazing0Eimages0Eweek0Eseptember0E240E280E20A12/story01.htm", "This Week In The Future: McDonald's iPhones Under The Sea", "http://feeds.popsci.com/c/34567/f/632419/s/23f0b7f9/l/0L0Spopsci0N0Cannouncements0Carticle0C20A120E0A90Cweek0Efuture0Eseptember0E240E280E20A12/story01.htm"];
sources[24] = ["People", "entertainment", "http://www.people.com/people/", "Bite Into a Killer Dexter-Themed Dessert", "http://feeds.people.com/~r/people/headlines/~3/O1iUnfhbc3Y/0,,20634756,00.html", "Justin Bieber 'Getting Better' After Becoming Sick On Stage", "http://feeds.people.com/~r/people/headlines/~3/tG27fhONblY/0,,20634857,00.html", "Arnold Schwarzenegger Admits to 'Hot Affair' with Brigitte Nielsen", "http://feeds.people.com/~r/people/headlines/~3/FuwUEDX3n3Q/0,,20634853,00.html"];
sources[25] = ["CNBC", "business", "http://www.cnbc.com/", "TSA: More Guns Confiscated at Airport Checkpoints", "http://www.cnbc.com//id/49223173", "Bank of America to Pay $2.43 Billion in Merrill Settlement", "http://www.cnbc.com//id/49223270", "Ex-NY Times Publisher Arthur Ochs Sulzberger Dies", "http://www.cnbc.com//id/49222745"];
sources[26] = ["ESPN", "sports", "http://espn.go.com/", "U.S. has commanding 10-6 Ryder lead", "http://espn.go.com/golf/rydercup12/story/_/id/8438347/2012-ryder-cup-us-commanding-10-6-lead", "Donald, McIlroy buoy European rally", "http://espn.go.com/golf/rydercup12/story/_/id/8445412/2012-ryder-cup-luke-donald-gets-sunday-first-point-europeans-eye-rally", "Trout becomes first rookie with 30 HRs, 40 SBs", "http://espn.go.com/los-angeles/mlb/story/_/id/8445411/los-angeles-angels-mike-trout-becomes-first-rookie-30-home-runs-40-stolen-bases"];
sources[27] = ["SB Nation", "sports", "http://www.sbnation.com/", "Sam Bradford Wins With Much In The Fantasy Department", "http://www.sbnation.com/fantasy/2012/9/30/3434026/sam-bradford-wins-with-much-in-the-fantasy-department", "Panthers Vs. Falcons Game Recap: Falcons complete late comeback, win 30-28", "http://www.sbnation.com/nfl/2012/9/30/3433810/falcons-panthers-2012-score", "Inter Milan vs. Fiorentina: Final score 2-1, Viola undone by defensive errors", "http://www.sbnation.com/seriea/2012/9/30/3433596/inter-milan-vs-fiorentina-final-score-2-1-viola-undone-by-defensive"];
sources[28] = ["Yahoo! News", "a.general", "http://news.yahoo.com/", "Paul Ryan on tax plan: 'Too long to go through all the math’", "http://news.yahoo.com/blogs/ticket/ryan-tax-plan-math-181559697--politics.html", "U.S. military deaths in Afghanistan hit 2,000", "http://news.yahoo.com/us-military-deaths-afghanistan-hit-2-000-063934010.html", "Medicare to begin fining hospitals over readmitted patients", "http://news.yahoo.com/medicare-fines-over-hospitals-readmitted-084833994.html"];
sources[29] = ["Lifehacker", "random", "http://lifehacker.com/", "Save Money By Using Vinegar In Rental Carpet Cleaners [Carpets]", "http://feeds.gawker.com/~r/lifehacker/full/~3/8QHWrtvKv84/save-money-by-using-vinegar-in-rental-carpet-cleaners", "DIY LED Holiday \"Greeting Cards\" [Video]", "http://feeds.gawker.com/~r/lifehacker/full/~3/l8g3AtWkZOE/diy-led-holiday-greeting-cards", "Stack Teacups and Saucers Together to Avoid Toppling [Dishes]", "http://feeds.gawker.com/~r/lifehacker/full/~3/95a0BjCapow/stack-teacups-and-saucers-together-to-avoid-toppling"];
sources[30] = ["The Huffington Post", "politics", "http://www.huffingtonpost.com/", "'Revenge' Season 2 Premiere: Stars Tease Sexcapades, Love Octagons, Mama Drama And More", "http://www.huffingtonpost.com/2012/09/30/revenge-season-2-premiere_n_1926972.html", "2012 Elections Veterans: Tammy Duckworth Among Former Service Members Running For Public Office", "http://www.huffingtonpost.com/2012/09/30/2012-elections-veterans_n_1927225.html", "Syria Suicide Bomb In Qamishli Kills 4 At Security Compound", "http://www.huffingtonpost.com/2012/09/30/syria-suicide-in-qamishli_n_1927217.html"];
sources[31] = ["Entertainment Weekly", "entertainment", "http://www.ew.com/", "'Once Upon a Time': It'll be 'intense'", "http://feeds.ew.com/~r/entertainmentweekly/latest/~3/8UYQNzM5RAI/", "'Once Upon a Time': Storybrooke IQ?", "http://feeds.ew.com/~r/entertainmentweekly/latest/~3/YU9AnlR2q54/0,,20302134_20634424,00.html", "'Revenge' season 2: Who's who", "http://feeds.ew.com/~r/entertainmentweekly/latest/~3/p9Chj6kNNIA/0,,20302134_20634298,00.html"];
sources[32] = ["TechCrunch", "technology", "http://techcrunch.com/", "You Don’t Need A Prototype To Raise A Seed Round", "http://feedproxy.google.com/~r/Techcrunch/~3/fk9B8FXn96c/", "Jason Calacanis’ Next Act, And Another Pivot For Inside.com, As A ‘Knowledge Community’", "http://feedproxy.google.com/~r/Techcrunch/~3/CqVNVfznUSo/", "Mass Persuasion, One User At A Time", "http://feedproxy.google.com/~r/Techcrunch/~3/ot31RyPRHxA/"];
sources[33] = ["CNN", "a.general", "http://www.cnn.com/", "Campaigns dig in ahead of first presidential debate", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/SysMpGBxLA4/index.html", "Greene: When candidates didn't debate", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/DGgrKO6GWMo/index.html", "Election raises stakes for high court", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/XVztaLF45mk/index.html"];
sources[34] = ["WebMD", "science_and_health", "http://www.webmd.com/", "Male Breast Enlargement (Gynecomastia)", "http://men.webmd.com/features/male-breast-enlargement-gynecomastia?src=RSS_PUBLIC", "Are We Too Clean? Letting Kids Get Dirty and Germy", "http://www.webmd.com/parenting/d2n-stopping-germs-12/kids-and-dirt-germs?src=RSS_PUBLIC", "Humira Approved for Ulcerative Colitis Treatment", "http://www.webmd.com/ibd-crohns-disease/ulcerative-colitis/news/20120928/humira-approved-ulcerative-colitis-treatment?src=RSS_PUBLIC"];
sources[35] = ["BuzzFeed", "random", "http://www.buzzfeed.com/", "This Is The Most Disastrous Play Of The 2012 NFL Season", "http://www.buzzfeed.com/ktlincoln/this-is-the-most-disastrous-play-of-the-2012-nfl-s", "Skylar Astin Is About To Be Everyone's New Crush", "http://www.buzzfeed.com/summeranne/skylar-astin-is-about-to-be-everyones-new-crush", "Nickelodeon Scraps TMNT \"Cowabunga\" Catchphrase", "http://www.buzzfeed.com/donnad/nickelodeon-scraps-tmnt-cowabunga-catchphrase"];
sources[36] = ["Discovery", "science_and_health", "http://news.discovery.com/", "TWiDN: Vampire Squid Doesn't Suck", "http://news.discovery.com/human/twidn-vampire-squid-doesnt-suck-120929.html#mkcpgn=rssnws1", "Hand Waves Control Wall-Sized Games", "http://news.discovery.com/tech/oblong-industries-minority-report-interface-120929.html#mkcpgn=rssnws1", "'Jesus Wife' Papyrus Deemed a Fake", "http://news.discovery.com/history/jesus-wife-papyrus-fake-120928.html#mkcpgn=rssnws1"];
sources[37] = ["Sports Illustrated", "sports", "http://sportsillustrated.cnn.com/", "Packers 7, Saints 0", "http://sportsillustrated.cnn.com/football/nfl/gameflash/2012/09/30/4952/#live?xid=si_topstories", "Brady, Pats dominate Bills in second half of 52-28 win", "http://sportsillustrated.cnn.com/football/nfl/gameflash/2012/09/30/4942/index.html#recap?xid=si_topstories", "Follow our live blog of the Ryder Cup", "http://blogs.golf.com/presstent/2012/09/live-coverage-of-2012-ryder-cup-sunday-live-blog.html?xid=si_topstories"];
sources[38] = ["The Drudge Report", "politics", "http://www.drudgereport.com/", "AFGHAN SOLDIER KILLS 2 MORE AMERICAN TROOPS...", "http://feedproxy.google.com/~r/DrudgeReportFeed/~3/GhLonE7YiiM/AS_AFGHANISTAN", "String of Iraq car bomb blasts kill at least 32...", "http://feedproxy.google.com/~r/DrudgeReportFeed/~3/9Hp1qh0KWZk/us-iraq-securityviolence-idUSBRE88T03420120930", "Muslim protesters torch Buddhist temples in Bangladesh...", "http://feedproxy.google.com/~r/DrudgeReportFeed/~3/OljZiaG2Z94/us-bangladesh-temples-idUSBRE88T03I20120930"];
sources[39] = ["The Washington Post", "politics", "http://www.washingtonpost.com/", "Elizabeth Warren holds slight lead over Scott Brown in Boston Globe poll", "http://feeds.washingtonpost.com/c/34656/f/636655/s/23fa06de/l/0L0Swashingtonpost0N0Cblogs0Cthe0Efix0Cpost0Celizabeth0Ewarren0Eholds0Eslight0Elead0Eover0Escott0Ebrown0Ein0Eboston0Eglobe0Epoll0C20A120C0A90C30A0C0A66965860E0Ab1f0E11e20E97a70E45c0A5ef136b20Iblog0Bhtml0Dwprss0Frss0Ipolitics/story01.htm", "David Plouffe defends Obama administration’s response to attack in Libya", "http://feeds.washingtonpost.com/c/34656/f/636655/s/23f99be0/l/0L0Swashingtonpost0N0Cblogs0Cthe0Efix0Cpost0Cdavid0Eplouffe0Edefends0Eobama0Eadministrations0Eresponse0Eto0Eattack0Ein0Elibya0C20A120C0A90C30A0C5c3d64e80E0Ab160E11e20E97a70E45c0A5ef136b20Iblog0Bhtml0Dwprss0Frss0Ipolitics/story01.htm", "What to expect in Wednesday’s first presidential debate", "http://feeds.washingtonpost.com/c/34656/f/636655/s/23f9d7a9/l/0L0Swashingtonpost0N0Cpolitics0Cdecision20A120Cwhat0Eto0Eexpect0Ein0Ewednesdays0Efirst0Epresidential0Edebate0C20A120C0A90C30A0C255629120E0Ab0A50E11e20Ebd1a0Eb868e65d57eb0Istory0Bhtml0Dwprss0Frss0Ipolitics/story01.htm"];

/* randomly sort the sources */
sources.sort(function() {return 0.5 - Math.random()} );

/* now sort by category */
sources.sort(function(a, b) { return (a[1] < b[1] ? -1 : (a[1] > b[1] ? 1 : 0)); });

/* splice in Amazon */
var Amazon = sources[sources.length - 1]
sources.splice(sources.length - 1, 1);
sources.splice(3, 0, Amazon);

var number_of_rows = Math.ceil(sources.length / 4);

var currentCategory = "null";

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
            
            /* set id attributes for first row of each category, excluding Amazon.com */
            if (sources[index][1] != currentCategory && sources[index][0] != "Amazon.com") {
                container_row.id = sources[index][1];
                currentCategory = sources[index][1];
            }
            
            var unit_top = document.createElement("div");
            var unit_bottom = document.createElement("div");
            
            unit_top.className = "unit-top";
            unit_bottom.className = "unit-bottom";
            
            var category = sources[index][1];
            if (category == "a.general") unit_bottom.className = unit_bottom.className + " white";
            else if (category == "business") unit_bottom.className = unit_bottom.className + " green";
            else if (category == "entertainment") unit_bottom.className = unit_bottom.className + " purple";
            else if (category == "politics") unit_bottom.className = unit_bottom.className + " brown";
            else if (category == "random") unit_bottom.className = unit_bottom.className + " black";
            else if (category == "science_and_health") unit_bottom.className = unit_bottom.className + " blue";
            else if (category == "sports") unit_bottom.className = unit_bottom.className + " red";
            else if (category == "technology") unit_bottom.className = unit_bottom.className + " orange";
            else if (category == "z.daily") unit_bottom.className = unit_bottom.className + " gold";
            
            // put logo and link to home page in top part of unit
            var source_logo_name = sources[index][0].replace(/ /g, "_") + ".png";
            var source_logo_location = "logos/" + source_logo_name;
            var logo_tag = '<img src="' + source_logo_location + '" alt="' + sources[index][0] + '" style="padding:5px;"/>';
            var gaq_call = 'onClick="' + "_gaq.push(['_trackEvent', 'Refer', 'Home page', '" + sources[index][0] + "']);" + '"';
            var name_tag = '<a href="' + sources[index][2] + '" ' + gaq_call + '>' + sources[index][0] + '</a>';
            unit_top.innerHTML = logo_tag + '<br>' + name_tag;    
            
            // put links in list in bottom part of unit
            var bottomHTML = "<ul>";
                        
            for (k = 3; k + 1 < sources[index].length; k = k + 2) {
                var gaq_call_2 = 'onClick="' + "_gaq.push(['_trackEvent', 'Refer', 'Link', '" + sources[index][0] + "']);" + '"';
                bottomHTML = bottomHTML + '<li><a href="' + sources[index][k+1] + '" ' + gaq_call_2 + '>' + sources[index][k] + '</li></a>';
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

var last_row = document.createElement("div");
last_row.innerHTML = '<center><a href="about.html" alt="Attributions">Attributions</a></center>';
document.body.appendChild(last_row);

} 