function generate_units()
{

var sources = []
sources[0] = ["Rolling Stone", "entertainment", "http://www.rollingstone.com/", "Report: Rick Ross and Young Jeezy Brawl at the BET Hip-Hop Awards", "http://www.rollingstone.com/music/news/report-rick-ross-and-young-jeezy-brawl-at-the-bet-awards-20120930", "Kings of Leon's Jared Followill Marries Model Martha Patterson", "http://www.rollingstone.com/music/news/kings-of-leons-jared-followill-marries-model-martha-patterson-20120929", "Jay-Z Represents Brooklyn at First Barclays Center Show", "http://www.rollingstone.com/music/news/jay-z-represents-brooklyn-at-first-barclays-center-show-20120929"];
sources[1] = ["NBC News", "a.general", "http://www.nbcnews.com/", "Christie: Romney debate performance will reshape race", "http://pheedo.msnbc.msn.com/click.phdo?i=56070b88d2e03612f00004d936f23c4a", "Sponsored By:", "http://ads.pheedo.com/click.phdo?s=56070b88d2e03612f00004d936f23c4a&p=4", "Paul Ryan: 'We've had some missteps' in campaign", "http://pheedo.msnbc.msn.com/click.phdo?i=33bbf6e400b84c1b2d035a57650d560b"];
sources[2] = ["NPR", "a.general", "http://www.npr.org/", "Candidates Push For Colo. To Swing In Their Favor", "http://www.npr.org/2012/09/30/162039205/candidates-push-for-colo-to-swing-in-their-favor?ft=1&f=1001", "Insider Attacks Hinder Transition Out Of Afghanistan", "http://www.npr.org/2012/09/30/162039203/insider-attacks-hinder-transition-out-of-afghanistan?ft=1&f=1001", "Venezuela's Young Voters Courted Heavily In Election", "http://www.npr.org/2012/09/30/162027555/venezuelas-young-voters-courted-heavily-in-election?ft=1&f=1001"];
sources[3] = ["The Washington Post", "politics", "http://www.washingtonpost.com/", "Chris Christie ramps up expectations for Mitt Romney ahead of first debate", "http://feeds.washingtonpost.com/c/34656/f/636655/s/23f968db/l/0L0Swashingtonpost0N0Cblogs0Cthe0Efix0Cpost0Cchris0Echristie0Eramps0Eup0Eexpectations0Efor0Emitt0Eromney0Eahead0Eof0Efirst0Edebate0C20A120C0A90C30A0Ccb19a16c0E0Ab0Af0E11e20E97a70E45c0A5ef136b20Iblog0Bhtml0Dwprss0Frss0Ipolitics/story01.htm", "Roy Blunt: Todd Akin ‘very well may win’ Missouri Senate race", "http://feeds.washingtonpost.com/c/34656/f/636655/s/23f92023/l/0L0Swashingtonpost0N0Cblogs0Cthe0Efix0Cpost0Croy0Eblunt0Etodd0Eakin0Every0Ewell0Emay0Ewin0Emissouri0Esenate0Erace0C20A120C0A90C30A0Cca88e2e0A0E0Ab0A90E11e20E97a70E45c0A5ef136b20Iblog0Bhtml0Dwprss0Frss0Ipolitics/story01.htm", "Paul Ryan on debates: ‘I don’t think one event is going to make or break this campaign’", "http://feeds.washingtonpost.com/c/34656/f/636655/s/23f91b95/l/0L0Swashingtonpost0N0Cblogs0Cthe0Efix0Cpost0Cpaul0Eryan0Eon0Edebates0Ei0Edont0Ethink0Eone0Eevent0Eis0Egoing0Eto0Emake0Eor0Ebreak0Ethis0Ecampaign0C20A120C0A90C30A0Cb6f252a0A0E0Ab0A60E11e20E97a70E45c0A5ef136b20Iblog0Bhtml0Dwprss0Frss0Ipolitics/story01.htm"];
sources[4] = ["Forbes", "business", "http://www.forbes.com/", "Live Blog: Find Your Customers", "http://www.forbes.com/sites/nyuentrepreneurschallenge/2012/09/30/live-blog-find-your-customers/", "The Libor Reform That Doesn't Reform Libor Enough", "http://www.forbes.com/sites/timworstall/2012/09/30/the-libor-reform-that-doesnt-reform-libor-enough/", "We Don't Know Enough About Climate Change Yet", "http://www.forbes.com/sites/timworstall/2012/09/30/we-dont-know-enough-about-climate-change-yet/"];
sources[5] = ["Bleacher Report", "sports", "http://bleacherreport.com/", "Homer Bailey Claims Cincinnati Reds Have Been Overlooked—Have They?", "http://bleacherreport.com/articles/1352973-homer-bailey-claims-cincinnati-reds-have-been-overlooked-have-they", "Tiger Woods vs. Francesco Molinari Ryder Cup Tracker: Highlights and Analysis", "http://bleacherreport.com/articles/1353005-tiger-woods-versus-francesco-molinari-ryder-cup-tracker-highlights-and-analysis", "NHL Lockout: What Krys Barch and Players Are Saying About Work Stoppage", "http://bleacherreport.com/articles/1352926-nhl-lockout-what-krys-barch-and-players-are-saying-about-work-stoppage"];
sources[6] = ["Reuters", "a.general", "http://www.reuters.com/", "As Obama and Romney prep for debates, VP candidates seek votes", "http://feeds.reuters.com/~r/reuters/topNews/~3/9OIl3MBf0eA/us-usa-campaign-idUSBRE88N13D20120929", "String of Iraq car bomb blasts kill at least 32", "http://feeds.reuters.com/~r/reuters/topNews/~3/PGdKnN_Av8I/us-iraq-securityviolence-idUSBRE88T03420120930", "Insight: Azerbaijan eyes aiding Israel against Iran", "http://feeds.reuters.com/~r/reuters/topNews/~3/yBBJoNZQ7i8/us-iran-israel-azerbaijan-idUSBRE88T05L20120930"];
sources[7] = ["Fox News", "a.general", "http://www.foxnews.com/", "Inside Attack Puts US Deaths at 2,000", "http://www.foxnews.com/world/2012/09/30/nato-troop-and-civilian-killed-in-apparent-insider-attack-in-afghanistan/#ixzz27vU5ggZm?test=latestnews", "Ryan: 'We're Going to Win,' Despite Trailing in Polls", "http://www.foxnews.com/politics/2012/09/30/ryan-were-going-to-win-this-race/", "Community Cheers Homecoming Prank Victim", "http://www.foxnews.com/us/2012/09/29/community-cheers-victim-apparent-homecoming-court-school-prank/"];
sources[8] = ["Business Insider", "business", "http://www.businessinsider.com/", "Finally, A German Economist Who's Getting History Right", "http://feedproxy.google.com/~r/businessinsider/~3/3nd-szr34t8/germanys-peter-bofinger-opposes-austerity-2012-9", "America's 15 Cheapest Law Schools", "http://feedproxy.google.com/~r/businessinsider/~3/1c2aEZ5-DWo/cheapest-law-schools-in-the-country-2012-9", "If We Had To Illustrate The State Of The Economy In 3 Charts, These Are The Ones We Would Pick", "http://feedproxy.google.com/~r/businessinsider/~3/TmIi0Ek5WFc/the-state-of-the-economy-in-3-charts-2012-9"];
sources[9] = ["Science", "science_and_health", "http://news.sciencemag.org/", "Hermit Crabs Pass Acid Test", "http://news.sciencemag.org/sciencenow/2012/09/hermit-crabs-pass-acid-test.html?rss=1", "Billions of Spanish Research Euros Remain Unspent", "http://news.sciencemag.org/scienceinsider/2012/09/billions-of-spanish-research-eur.html?rss=1", "Netting Better Data on Global Fish Stocks", "http://news.sciencemag.org/sciencenow/2012/09/netting-better-data-on-global-fi.html?rss=1"];
sources[10] = ["USA Today", "a.general", "http://www.usatoday.com/", "Men have more options in prostate cancer treatments", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/Z2XwstJE4LY/", "Switch to digital projectors imperils some theaters", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/ceWPceF22yU/", "Ole Miss reflects on the 50 years since integration", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/jRJdnbOPi9s/"];
sources[11] = ["The New York Times", "a.general", "http://www.nytimes.com/", "Ending Segregation of the Mentally Disabled", "http://www.nytimes.com/2012/09/30/us/ending-segregation-of-the-mentally-disabled.html?partner=rss&emc=rss", "Another Wave of Bombings Across Iraq", "http://www.nytimes.com/2012/10/01/world/middleeast/another-wave-of-bombings-across-iraq.html?partner=rss&emc=rss", "News Analysis: To Encourage Biking, Cities Forget About Helmets", "http://www.nytimes.com/2012/09/30/sunday-review/to-encourage-biking-cities-forget-about-helmets.html?partner=rss&emc=rss"];
sources[12] = ["Wired", "technology", "http://www.wired.com/", "Giveaway: <em>Mars Attacks</em> Book Spills Vintage Alien Gore", "http://feeds.wired.com/~r/wired/index/~3/E6odJMw5mAY/", "Review: Riveting <em>Homeland</em> Probes Post-Traumatic Spy Syndrome", "http://feeds.wired.com/~r/wired/index/~3/iTaV5kx7MxA/", "Watch Live: Harvest Moon Meets Up With Uranus in Opposition", "http://feeds.wired.com/~r/wired/index/~3/WEEQ_nJN2f8/"];
sources[13] = ["Amazon.com", "z.daily", "http://www.amazon.com/?&linkCode=ur2&tag=thdalo00-20", "Deal of the Day: Tron: Legacy/Tron Original Classic (Five-Disc Combo: Blu-ray 3D / Blu-ray / DVD / Digital Copy)", "http://www.amazon.com/dp/B004K4N64E/ref=xs_gb_rss_2779741/?ccmID=380205&tag=thdalo00-20&linkCode=ur2", "New Markdowns: 48% off Swiss Watches from Roamer of Switzerland", "http://www.amazon.com/s/ref=xs_gb_rss_2946011/?ie=UTF8&page=1&rh=n%3A377110011%2Cp_4%3ARoamer%20of%20Switzerland%2Cp_85%3A2470955011&bbn=377110011&ccmID=380205&tag=thdalo00-20&linkCode=ur2", "New Markdowns: 50% off Valentino Watches", "http://www.amazon.com/s/ref=xs_gb_rss_2923191/?ie=UTF8&page=1&rh=n%3A377110011%2Ck%3AValentino%2Cp_4%3AValentino%2Cp_85%3A2470955011&bbn=377110011&ccmID=380205&tag=thdalo00-20&linkCode=ur2"];
sources[14] = ["ABC News", "a.general", "http://abcnews.go.com/", "US Military Deaths in Afghanistan Hit 2,000", "http://feeds.abcnews.com/click.phdo?i=359d0f80ecdd307079cf5fee8c3c9e67", "Ryan Said He Doesn't Think One Debate Is 'Going to Make or Break' Campaign", "http://feeds.abcnews.com/click.phdo?i=5525a024f242b6a5ab2ab980981641d3", "Teen Charged With Killing Newborn Son", "http://feeds.abcnews.com/click.phdo?i=32bf3dd33d32bf2fcd6dcefc775e50b7"];
sources[15] = ["Politico", "politics", "http://www.politico.com/", "Supreme Court cases could stir 2012 race", "http://feeds.politico.com/click.phdo?i=c18a1c57ee2ff83a998c33b53732216e", "Defining moment eludes Romney", "http://feeds.politico.com/click.phdo?i=22802f5cbbf04d80ac41d584ee2897e8", "2012 map could be deja vu for Obama", "http://feeds.politico.com/click.phdo?i=4589ed59f656a959e2196bea6055dedd"];
sources[16] = ["The Wall Street Journal", "business", "http://online.wsj.com/home-page", "Google Pounces on Apple Map Problems", "http://online.wsj.com/article/SB10000872396390444712904578024170366547916.html?mod=rss_whats_news_us", "BofA Takes New Crisis-Era Hit", "http://online.wsj.com/article/SB10000872396390443843904578024110468736042.html?mod=rss_whats_news_us", "Spain Warns of Wider Budget Gap", "http://online.wsj.com/article/SB10000872396390444712904578026230256709760.html?mod=rss_whats_news_us"];
sources[17] = ["E! Online", "entertainment", "http://www.eonline.com/", "Homeland Scoop: Why Tonight's Season Premiere Will Blow You Away!", "http://feeds.eonline.com/~r/eonline/topstories/~3/S0XnUZPb_Fc/homeland-scoop-why-tonight-s-season-premiere-will-blow-you-away", "Sons of Anarchy's 11 Most Shocking Moments Ever! Death, Kidnapping and Really Bad Chili", "http://feeds.eonline.com/~r/eonline/topstories/~3/uTfz8DFqbRA/sons-of-anarchy-s-11-most-shocking-moments-ever-death-kidnapping-and-really-bad-chili", "Revenge Cheat Sheet: Everything You Need to Know Before Tonight's Big Premiere!", "http://feeds.eonline.com/~r/eonline/topstories/~3/5dqYMfq0qlg/revenge-cheat-sheet-everything-you-need-to-know-before-tonight-s-big-premiere"];
sources[18] = ["Reddit", "random", "http://www.reddit.com/", "Photograph of a mirror on an easel in the desert that looks like a painting", "http://www.reddit.com/r/pics/comments/10ou5k/photograph_of_a_mirror_on_an_easel_in_the_desert/", "Behind the Bowling Alley", "http://www.reddit.com/r/pics/comments/10oawi/behind_the_bowling_alley/", "Maid in Dubai tries to kill herself after her employers don't pay her for 3 months. Woman is arrested for attempting suicide and fined $270.", "http://www.reddit.com/r/worldnews/comments/10pcw7/maid_in_dubai_tries_to_kill_herself_after_her/"];
sources[19] = ["BBC News", "a.general", "http://www.bbc.co.uk/news/", "Miliband threat to break up banks", "http://www.bbc.co.uk/news/uk-politics-19775686#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa", "Service remembers fallen officers", "http://www.bbc.co.uk/news/uk-19760739#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa", "Deadly Kenya Sunday school attack", "http://www.bbc.co.uk/news/world-africa-19776747#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa"];
sources[20] = ["Ars Technica", "technology", "http://arstechnica.com/", "Python 3.3 arrives with new yield expression", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/3bmvfcq1rM0/", "Sales ban on Samsung Galaxy Tab 10.1 will be reconsidered", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/hfC8cnEyaQI/", "Ars Technicast, Episode 11: Our all-time favorite video game villains", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/xFql-nUN5NE/"];
sources[21] = ["CBS News", "a.general", "http://www.cbsnews.com/", "Bomb explodes near Nigerian Islamic school", "http://feeds.cbsnews.com/~r/CBSNewsWorld/~3/onINXyfhqJ8/", "U.S. service member dead in Afghan insider attack", "http://feeds.cbsnews.com/~r/CBSNewsWorld/~3/_xlZr84UntA/", "Video: Youngest Gitmo prisoner returned to Canada", "http://feeds.cbsnews.com/~r/CBSNewsWorld/~3/Yx2ivMmssWQ/"];
sources[22] = ["Cracked", "random", "http://www.cracked.com/", "The 15 Most Inadequate Silver Linings Ever", "http://feedproxy.google.com/~r/CrackedRSS/~3/vQ7n0jzjnLw/", "The 5 Stupidest Ways People Try to Avoid Embarrassment", "http://feedproxy.google.com/~r/CrackedRSS/~3/01gwHlMF9N0/", "5 Pop Culture Creations Spoiled by Their Own Creators", "http://feedproxy.google.com/~r/CrackedRSS/~3/uAOEC6R45Z8/article_20044_5-pop-culture-creations-spoiled-by-their-own-creators.html"];
sources[23] = ["Mashable", "technology", "http://mashable.com/", "4 Tips to Avoid Work-From-Home Email Scams", "http://feeds.mashable.com/~r/Mashable/~3/0xkqDVlENO8/", "Top 5 Apps Your Kids Will Love This Week", "http://feeds.mashable.com/~r/Mashable/~3/baubirRjIiw/", "Power Nap With This Head-Consuming Ostrich Pillow", "http://feeds.mashable.com/~r/Mashable/~3/hORHnaQE1g0/"];
sources[24] = ["People", "entertainment", "http://www.people.com/people/", "Roxy Morris Opens Up About Her Survivor Meltdown", "http://feeds.people.com/~r/people/headlines/~3/U7exq-mmuAM/0,,20634851,00.html", "Logan Lerman: Five Things to Know About the Rising Star", "http://feeds.people.com/~r/people/headlines/~3/HpIAEmIQGX4/0,,20633123,00.html", "Anne Hathaway Marries Adam Shulman", "http://feeds.people.com/~r/people/headlines/~3/uBTJSzSH098/0,,20633276,00.html"];
sources[25] = ["Popular Science", "science_and_health", "http://www.popsci.com/", "Archive Gallery: PopSci's Arctic Adventures", "http://feeds.popsci.com/c/34567/f/632419/s/23eeebf3/l/0L0Spopsci0N0Cscience0Carticle0C20A120E0A90Carchive0Egallery0Epopscis0Earctic0Eadventures/story01.htm", "Buildings For A Rainbow Balloon Utopia And Other Amazing Images Of The Week", "http://feeds.popsci.com/c/34567/f/632419/s/23ee8b15/l/0L0Spopsci0N0Cscience0Carticle0C20A120E0A90Cmost0Eamazing0Eimages0Eweek0Eseptember0E240E280E20A12/story01.htm", "This Week In The Future: McDonald's iPhones Under The Sea", "http://feeds.popsci.com/c/34567/f/632419/s/23f0b7f9/l/0L0Spopsci0N0Cannouncements0Carticle0C20A120E0A90Cweek0Efuture0Eseptember0E240E280E20A12/story01.htm"];
sources[26] = ["CNBC", "business", "http://www.cnbc.com/", "TSA: More Guns Confiscated at Airport Checkpoints", "http://www.cnbc.com//id/49223173", "Bank of America to Pay $2.43 Billion in Merrill Settlement", "http://www.cnbc.com//id/49223270", "Ex-NY Times Publisher Arthur Ochs Sulzberger Dies", "http://www.cnbc.com//id/49222745"];
sources[27] = ["ESPN", "sports", "http://espn.go.com/", "U.S. has commanding 10-6 Ryder lead", "http://espn.go.com/golf/rydercup12/story/_/id/8438347/2012-ryder-cup-us-commanding-10-6-lead", "U.S. has commanding 10-6 Ryder lead", "http://espn.go.com/golf/rydercup12/story/_/id/8438347/2012-ryder-cup-us-commanding-10-6-lead", "Bills' Jackson, Spiller active vs. Pats", "http://espn.go.com/nfl/story/_/id/8444737/buffalo-bills-fred-jackson-says-playing-new-england-patriots"];
sources[28] = ["SB Nation", "sports", "http://www.sbnation.com/", "NFL inactive list, Titans vs. Texans: Kenny Britt out for Tennessee", "http://www.sbnation.com/nfl/2012/9/30/3432532/texans-titans-inactives-nfl", "NFL Inactive List, Chargers Vs. Chiefs: No Glenn Dorsey, Peyton Hillis for Kansas City on Sunday", "http://www.sbnation.com/nfl/2012/9/30/3432514/chiefs-chargers-inactives-nfl", "C.J. Spiller injury: Bills RB active for Sunday's game against Patriots", "http://www.sbnation.com/nfl/2012/9/30/3432584/cj-spiller-fred-jackson-injury-bills-vs-patriots"];
sources[29] = ["Yahoo! News", "a.general", "http://news.yahoo.com/", "Insight: Mom and pop investors miss out on stock market gains", "http://www.reuters.com/article/2012/09/30/us-usa-stocks-retailinvestors-idUSBRE88T0AE20120930?type=PersonalFinance&feedType=RSS&feedName=PersonalFinance&rpc=43", "Obama and Romney fight for religious groups’ votes", "http://news.yahoo.com/obama-romney-fight-religious-groups-votes-then-romney-131539713.html", "Attack kills 2 Americans, at least 2 Afghans", "http://news.yahoo.com/attack-kills-2-americans-least-2-afghans-091513802.html"];
sources[30] = ["Lifehacker", "random", "http://lifehacker.com/", "Five Best Budget Pens [Hive Five]", "http://feeds.gawker.com/~r/lifehacker/full/~3/8RCKu8YhQ6w/five-best-budget-pens", "Muffin Pan Omelets Let You Make Breakfast for the Week in One Batch [Breakfast]", "http://feeds.gawker.com/~r/lifehacker/full/~3/RgQYyn5lDqc/muffin-pan-omelets-let-you-make-breakfast-for-the-week-in-one-batch", "Get More Juice Out of Citrus Fruit with Kitchen Tongs [Clever Uses]", "http://feeds.gawker.com/~r/lifehacker/full/~3/OhTCVzxAjy8/get-more-juice-out-of-citrus-fruit-with-kitchen-tongs"];
sources[31] = ["The Huffington Post", "politics", "http://www.huffingtonpost.com/", "Chris Christie: Todd Akin Shouldn't Get Republican Support", "http://www.huffingtonpost.com/2012/09/30/chris-christie-todd-akin_n_1926828.html", "Accent Signage Systems: Shootings 'Devastated' Minneapolis Business", "http://www.huffingtonpost.com/2012/09/30/accent-signage-systems-shootings-minneapolis_n_1926843.html", "Snoozing Till Noon? It Could Be A Sleep Disorder", "http://www.huffingtonpost.com/2012/09/30/delayed-sleep-phase-disorder_n_1894572.html"];
sources[32] = ["Entertainment Weekly", "entertainment", "http://www.ew.com/", "'Doctor Who': What'd you think?", "http://feeds.ew.com/~r/entertainmentweekly/latest/~3/VMj0ByRbQ1I/", "'Revenge' season 2: Who's who", "http://feeds.ew.com/~r/entertainmentweekly/latest/~3/p9Chj6kNNIA/0,,20302134_20634298,00.html", "'Once Upon a Time': Storybrooke IQ?", "http://feeds.ew.com/~r/entertainmentweekly/latest/~3/YU9AnlR2q54/0,,20302134_20634424,00.html"];
sources[33] = ["TechCrunch", "technology", "http://techcrunch.com/", "B&N Drops Price Of Its Nook GlowLight In Advance Of Amazon’s New Reader", "http://feedproxy.google.com/~r/Techcrunch/~3/GBM7mrkMZjs/", "Why Angel Investors Don’t Make Money … And Advice For People Who Are Going To Become Angels Anyway", "http://feedproxy.google.com/~r/Techcrunch/~3/2OGsb6_oJCs/", "Games Are A Difficult Investment Proposition, But Crowdfunding Could Change That", "http://feedproxy.google.com/~r/Techcrunch/~3/_zGvZn6969k/"];
sources[34] = ["CNN", "a.general", "http://www.cnn.com/", "Escalating attacks, but few answers in Syria", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/0UDIjyDKpk0/index.html", "U.S. warns Iran: Stop arming Syria", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/9pOa71rm5DU/index.html", "Iran agency runs Onion story as its own", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/sQdq1t44ET4/index.html"];
sources[35] = ["WebMD", "science_and_health", "http://www.webmd.com/", "Male Breast Enlargement (Gynecomastia)", "http://men.webmd.com/features/male-breast-enlargement-gynecomastia?src=RSS_PUBLIC", "Are We Too Clean? Letting Kids Get Dirty and Germy", "http://www.webmd.com/parenting/d2n-stopping-germs-12/kids-and-dirt-germs?src=RSS_PUBLIC", "Humira Approved for Ulcerative Colitis Treatment", "http://www.webmd.com/ibd-crohns-disease/ulcerative-colitis/news/20120928/humira-approved-ulcerative-colitis-treatment?src=RSS_PUBLIC"];
sources[36] = ["BuzzFeed", "random", "http://www.buzzfeed.com/", "Justin Bieber Puking On Stage", "http://www.buzzfeed.com/summeranne/a-cllp-of-justin-bieber-puking-on-stage", "25 Adult Jokes In Cartoons That You Never Understood As A Kid", "http://www.buzzfeed.com/daves4/jokes-you-never-got-as-a-kid", "Why You Should Run A 5K", "http://www.buzzfeed.com/mollykateri/14-reasons-you-should-run-a-5k-421u"];
sources[37] = ["Discovery", "science_and_health", "http://news.discovery.com/", "TWiDN: Vampire Squid Doesn't Suck", "http://news.discovery.com/human/twidn-vampire-squid-doesnt-suck-120929.html#mkcpgn=rssnws1", "Hand Waves Control Wall-Sized Games", "http://news.discovery.com/tech/oblong-industries-minority-report-interface-120929.html#mkcpgn=rssnws1", "'Jesus Wife' Papyrus Deemed a Fake", "http://news.discovery.com/history/jesus-wife-papyrus-fake-120928.html#mkcpgn=rssnws1"];
sources[38] = ["Sports Illustrated", "sports", "http://sportsillustrated.cnn.com/", "Will Carroll: NFL Week 4 Med Check: Spiller, Jackson, Nicks among downgrades", "http://sportsillustrated.cnn.com/2012/writers/will_carroll/09/29/week-4-med-check-cj-spiller-hakeem-nicks/index.html?xid=si_topstories", "Get last-minute lineup advice from Will Carroll", "http://sportsillustrated.cnn.com/2012/fantasy/09/28/liveblog-fantasy-football-chat-week4/index.html#?xid=si_topstories", "Holly Anderson: Smith, West Virginia outlast Baylor in record-breaking Big 12 shootout", "http://college-football.si.com/2012/09/29/west-virginia-baylor-geno-smith-big-12/?xid=si_topstories"];
sources[39] = ["The Drudge Report", "politics", "http://www.drudgereport.com/", "AFGHAN SOLDIER KILLS 2 MORE AMERICAN TROOPS...", "http://feedproxy.google.com/~r/DrudgeReportFeed/~3/GhLonE7YiiM/AS_AFGHANISTAN", "String of Iraq car bomb blasts kill at least 32...", "http://feedproxy.google.com/~r/DrudgeReportFeed/~3/9Hp1qh0KWZk/us-iraq-securityviolence-idUSBRE88T03420120930", "Muslim protesters torch Buddhist temples in Bangladesh...", "http://feedproxy.google.com/~r/DrudgeReportFeed/~3/OljZiaG2Z94/us-bangladesh-temples-idUSBRE88T03I20120930"];

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