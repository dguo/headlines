function generate_units()
{

var sources = []
sources[0] = ["Rolling Stone", "entertainment", "http://www.rollingstone.com/", "Kings of Leon's Jared Followill Marries Model Martha Patterson", "http://www.rollingstone.com/music/news/kings-of-leons-jared-followill-marries-model-martha-patterson-20120929", "Jay-Z Represents Brooklyn at First Barclays Center Show", "http://www.rollingstone.com/music/news/jay-z-represents-brooklyn-at-first-barclays-center-show-20120929", "Patti Smith Salutes Andy Warhol at the Metropolitan Museum of Art", "http://www.rollingstone.com/music/news/patti-smith-salutes-andy-warhol-at-the-metropolitan-museum-of-art-20120929"];
sources[1] = ["NBC News", "general", "http://www.nbcnews.com/", "NYT: More suspicious voter forms found in Fla.", "http://pheedo.msnbc.msn.com/click.phdo?i=0515f0ab219b5d1437f78a7477d6e38c", "Wild horses sold by US going to slaughterhouses?", "http://pheedo.msnbc.msn.com/click.phdo?i=d311b13d4f738439c288baba0f73fc10", "US routing Europe in Ryder Cup", "http://pheedo.msnbc.msn.com/click.phdo?i=d7ff84321490fabcf008be62e7cc7b03"];
sources[2] = ["NPR", "general", "http://www.npr.org/", "U.K.'s Simmering Class Tensions Roil Over \"Plebe\" Flap", "http://www.npr.org/2012/09/30/161972993/u-k-s-simmering-class-tensions-roil-over-plebe-flap?ft=1&f=1001", "Pope's Butler On Trial: Evidence Tossed On Day One", "http://www.npr.org/2012/09/29/162018034/popes-butler-on-trial-evidence-tossed-on-day-one?ft=1&f=1001", "Ohio County A Historic Predictor Of State's Vote", "http://www.npr.org/2012/09/29/162019588/ohio-county-a-historic-predictor-of-states-vote?ft=1&f=1001"];
sources[3] = ["The Washington Post", "politics", "http://www.washingtonpost.com/", "For Romney, wealth means both freedom and a trap", "http://feeds.washingtonpost.com/c/34656/f/636655/s/23f63092/l/0L0Swashingtonpost0N0Cpolitics0Cdecision20A120Cfor0Eromney0Ewealth0Emeant0Eboth0Efreedom0Eand0Ea0Etrap0C20A120C0A90C290C2f7f9a80A0E0A8950E11e20Ea10Ac0Efa5a255a92580Istory0Bhtml0Dwprss0Frss0Ipolitics/story01.htm", "Egypt, Yemen challenge some U.S. ideas", "http://feeds.washingtonpost.com/c/34656/f/636655/s/23f63101/l/0L0Swashingtonpost0N0Cworld0Cnational0Esecurity0Cegypt0Eyemen0Echallenge0Esome0Eus0Eideas0C20A120C0A90C290C2bb612820E0A98d0E11e20E858a0E5311df86ab0A40Istory0Bhtml0Dwprss0Frss0Ipolitics/story01.htm", "Amid debt crisis, Paul Ryan sat on the sidelines", "http://feeds.washingtonpost.com/c/34656/f/636655/s/23f5a317/l/0L0Swashingtonpost0N0Cbusiness0Ceconomy0Camid0Edebt0Ecrisis0Epaul0Eryan0Esat0Eon0Esidelines0C20A120C0A90C290C8dbad1280Efe7c0E11e10Eb1530E21850A9a954e10Istory0Bhtml0Dwprss0Frss0Ipolitics/story01.htm"];
sources[4] = ["Forbes", "business", "http://www.forbes.com/", "Ancient Burial Cloth Provides Clues To Bronze Age Trade", "http://www.forbes.com/sites/alexknapp/2012/09/30/ancient-burial-cloth-provides-clues-to-bronze-age-trade/", "Doctor Who 7.05: The Clock Winds Down for Amy and Rory", "http://www.forbes.com/sites/carolpinchefsky/2012/09/30/doctor-who-7-05-the-clock-winds-down/", "Ten Clean Energy Technologies the U.S. Military Needs to Win the Next Naval War", "http://www.forbes.com/sites/williampentland/2012/09/30/ten-clean-energy-technologies-the-u-s-military-needs-to-win-the-next-naval-war/"];
sources[5] = ["Bleacher Report", "sports", "http://bleacherreport.com/", "Oregon vs. Washington State: Ducks Can Turn It on at Will, but Is That Bad?", "http://bleacherreport.com/articles/1352861-oregon-vs-washington-state-ducks-can-turn-it-on-at-will-but-is-that-bad", "Bleacher Report's College Football Top 25 Poll: Week 6", "http://bleacherreport.com/articles/1345593-bleacher-reports-college-football-top-25-poll-week-6", "Alabama Football: Why Wideout Amari Cooper Is Quickly Becoming a Legend", "http://bleacherreport.com/articles/1352808-alabama-football-why-wideout-amari-cooper-is-quickly-becoming-a-legend"];
sources[6] = ["Reuters", "general", "http://www.reuters.com/", "As Obama and Romney prep for debates, VP candidates seek votes", "http://feeds.reuters.com/~r/reuters/topNews/~3/9OIl3MBf0eA/us-usa-campaign-idUSBRE88N13D20120929", "String of Iraq car bomb blasts kill at least 17", "http://feeds.reuters.com/~r/reuters/topNews/~3/PGdKnN_Av8I/us-iraq-securityviolence-idUSBRE88T03420120930", "NATO soldier, civilian, killed in Afghan \"insider\" attack", "http://feeds.reuters.com/~r/reuters/topNews/~3/naQcE79ypKE/us-afghanistan-attack-idUSBRE88T02G20120930"];
sources[7] = ["Fox News", "general", "http://www.foxnews.com/", "Administration Gives Defense Firms Cover to Downplay Possible Layoffs", "http://www.foxnews.com/politics/2012/09/29/admin-to-pay-legal-fees-for-contractors-that-dont-issue-sequestration-warnings/", "GOP Senators to Hold Fundraiser for Rep. Akin", "http://www.foxnews.com/politics/2012/09/29/republican-senators-to-hold-akin-fundraiser-keeping-alive-hope-to-win-chamber/#ixzz27vahGefP", "Amber Alert Issued for Two Children Missing After Fire", "http://www.foxnews.com/us/2012/09/29/amber-alert-issued-for-2-children-missing-after-tennessee-fire/"];
sources[8] = ["Business Insider", "business", "http://www.businessinsider.com/", "See What A Famed Syrian Market Looked Like Before It Was Destroyed By Fire", "http://feedproxy.google.com/~r/businessinsider/~3/AswDmqHKcWE/photos-the-aleppo-souk-2012-9", "Bizarre End To The Florida State Game Will Leave A Lot Of Gamblers Fuming", "http://feedproxy.google.com/~r/businessinsider/~3/AngsiDYtkrU/video-bizarre-end-to-the-florida-state-game-will-leave-a-lot-of-gamblers-fuming-2012-9", "Ireland Risks Becoming A 'Feeder Nation'", "http://feedproxy.google.com/~r/businessinsider/~3/hH3oFr6jxjw/ireland-risks-becoming-a-feeder-nation-2012-9"];
sources[9] = ["Science", "science_and_health", "http://news.sciencemag.org/", "Hermit Crabs Pass Acid Test", "http://news.sciencemag.org/sciencenow/2012/09/hermit-crabs-pass-acid-test.html?rss=1", "Billions of Spanish Research Euros Remain Unspent", "http://news.sciencemag.org/scienceinsider/2012/09/billions-of-spanish-research-eur.html?rss=1", "Netting Better Data on Global Fish Stocks", "http://news.sciencemag.org/sciencenow/2012/09/netting-better-data-on-global-fi.html?rss=1"];
sources[10] = ["USA Today", "general", "http://www.usatoday.com/", "Ole Miss reflects on the 50 years since integration", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/jRJdnbOPi9s/", "Lottery winner who kept taking food stamps found dead", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/YE7d9dupDIo/", "Hundreds of Libyans hand over their weapons", "http://rssfeeds.usatoday.com/~r/usatoday-NewsTopStories/~3/IKTFypf4ZzU/"];
sources[11] = ["The New York Times", "general", "http://www.nytimes.com/", "Ex-South Korea Leader Haunts Daughter’s Presidential Bid", "http://www.nytimes.com/2012/09/30/world/asia/ex-south-korea-leader-haunts-daughters-presidential-bid.html?partner=rss&emc=rss", "Tension, but No Violence, as Protestants Parade in Belfast", "http://www.nytimes.com/2012/09/30/world/europe/tension-but-no-violence-as-protestants-parade-in-belfast.html?partner=rss&emc=rss", "Away From Cities, a Life Laced With Violence for Syrians", "http://www.nytimes.com/2012/09/30/world/middleeast/syrians-struggle-in-the-countryside-amid-indiscriminate-violence.html?partner=rss&emc=rss"];
sources[12] = ["Wired", "technology", "http://www.wired.com/", "Watch Live: Harvest Moon Meets Up With Uranus in Opposition", "http://feeds.wired.com/~r/wired/index/~3/WEEQ_nJN2f8/", "These $10 Robots Will Change Robotics Education", "http://feeds.wired.com/~r/wired/index/~3/XaeTJ8vFgRw/", "David Byrne Breaks Down <em>How Music Works</em> in New Book", "http://feeds.wired.com/~r/wired/index/~3/UzRUAzXzDX4/"];
sources[13] = ["Amazon.com", "daily", "http://www.amazon.com/", "Deal of the Day: Tron: Legacy/Tron Original Classic (Five-Disc Combo: Blu-ray 3D / Blu-ray / DVD / Digital Copy)", "http://www.amazon.com/dp/B004K4N64E/ref=xs_gb_rss_2779741/?ccmID=380205&tag=rssfeeds-20", "Rebate Deal: Get 4-for-3 on Monroe or Rancho Shocks and Struts", "http://www.amazon.com/gp/feature.html/ref=xs_gb_rss_2866221/?ie=UTF8&docId=1000830961&ccmID=380205&tag=rssfeeds-20", "Rebate Deal: Get $40 Back on Walker Catalytic Converters", "http://www.amazon.com/gp/part-finder//ref=xs_gb_rss_2866331/?ie=UTF8&scNode=5749040011&ccmID=380205&tag=rssfeeds-20"];
sources[14] = ["ABC News", "general", "http://abcnews.go.com/", "Ryan Tells Hunters Thought of 2nd Obama Term Makes Him 'Shudder'", "http://feeds.abcnews.com/click.phdo?i=379a452b82028479e97fbbebbc010b16", "Carjacker in TV Suicide Identified", "http://feeds.abcnews.com/click.phdo?i=db9d31e8e12123ad8e751eefa5e9ca49", "Teen Charged With Killing Newborn Son", "http://feeds.abcnews.com/click.phdo?i=32bf3dd33d32bf2fcd6dcefc775e50b7"];
sources[15] = ["Politico", "politics", "http://www.politico.com/", "Defining moment eludes Romney", "http://feeds.politico.com/click.phdo?i=22802f5cbbf04d80ac41d584ee2897e8", "2012 map could be deja vu for Obama", "http://feeds.politico.com/click.phdo?i=4589ed59f656a959e2196bea6055dedd", "Lehrer: Master of moderation", "http://feeds.politico.com/click.phdo?i=6d33ed0b49144b5050cbfa13a54e8710"];
sources[16] = ["The Wall Street Journal", "business", "http://online.wsj.com/home-page", "Google Pounces on Apple Map Problems", "http://online.wsj.com/article/SB10000872396390444712904578024170366547916.html?mod=rss_whats_news_us", "BofA Takes New Crisis-Era Hit", "http://online.wsj.com/article/SB10000872396390443843904578024110468736042.html?mod=rss_whats_news_us", "Spain Warns of Wider Budget Gap", "http://online.wsj.com/article/SB10000872396390444712904578026230256709760.html?mod=rss_whats_news_us"];
sources[17] = ["E! Online", "entertainment", "http://www.eonline.com/", "Anne Hathaway's Wedding Dress Revealed: First Look at Her Custom Valentino Gown", "http://feeds.eonline.com/~r/eonline/topstories/~3/znND3ys-Slg/anne-hathaway-s-wedding-dress-revealed-first-look-at-her-custom-valentino-gown", "Anne Hathaway Marries Adam Shulman", "http://feeds.eonline.com/~r/eonline/topstories/~3/HUt-BlGiB4w/anne-hathaway-marries-adam-shulman", "Johnny Lewis' Final Movie: 186 Dollars to Freedom Filmmakers Say They're \"Devastated\"", "http://feeds.eonline.com/~r/eonline/topstories/~3/bRsrWQLQZBI/johnny-lewis-final-movie-186-dollars-to-freedom-filmmakers-say-they-re-quot-devastated-quot"];
sources[18] = ["Reddit", "random", "http://www.reddit.com/", "WSJournal Accused of Failing Disclosure, 10 Op-Ed Writers Are Romney Advisers", "http://www.reddit.com/r/politics/comments/10nxyt/wsjournal_accused_of_failing_disclosure_10_oped/", "Photograph of a mirror on an easel in the desert that looks like a painting", "http://www.reddit.com/r/pics/comments/10ou5k/photograph_of_a_mirror_on_an_easel_in_the_desert/", "Thank you, Ken M.", "http://www.reddit.com/r/funny/comments/10o1yl/thank_you_ken_m/"];
sources[19] = ["BBC News", "general", "http://www.bbc.co.uk/news/", "Miliband threat to break up banks", "http://www.bbc.co.uk/news/uk-politics-19775686#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa", "US toll in Afghan war hits 2,000", "http://www.bbc.co.uk/news/world-asia-19776402#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa", "Late fightback gives Europe hope", "http://www.bbc.co.uk/sport/0/golf/19773309"];
sources[20] = ["Ars Technica", "technology", "http://arstechnica.com/", "Python 3.3 arrives with new yield expression", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/3bmvfcq1rM0/", "Sales ban on Samsung Galaxy Tab 10.1 will be reconsidered", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/hfC8cnEyaQI/", "Ars Technicast, Episode 11: Our all-time favorite video game villains", "http://feeds.arstechnica.com/~r/arstechnica/index/~3/xFql-nUN5NE/"];
sources[21] = ["CBS News", "general", "http://www.cbsnews.com/", "Video: Youngest Gitmo prisoner returned to Canada", "http://feeds.cbsnews.com/~r/CBSNewsWorld/~3/Yx2ivMmssWQ/", "Madrid anti-austerity protests turn violent again", "http://feeds.cbsnews.com/~r/CBSNewsWorld/~3/Y3g4JhZgLrA/", "Syrian fighting torches historic medieval market", "http://feeds.cbsnews.com/~r/CBSNewsWorld/~3/WZYJTWvoLvc/"];
sources[22] = ["Cracked", "random", "http://www.cracked.com/", "3 People Who Cheated Death Using Cartoon Physics", "http://feedproxy.google.com/~r/CrackedRSS/~3/7r6JBgTKZR4/", "4 Fictional Works People Insist Are Real", "http://feedproxy.google.com/~r/CrackedRSS/~3/LlJGfrOD1Mw/", "4 Reasons We've Stopped Trusting the Media", "http://feedproxy.google.com/~r/CrackedRSS/~3/aOWRjUvbOLw/"];
sources[23] = ["Mashable", "technology", "http://mashable.com/", "Power Nap With This Head-Consuming Ostrich Pillow", "http://feeds.mashable.com/~r/Mashable/~3/hORHnaQE1g0/", "Bots Drive 16% of U.S. Web Traffic [INFOGRAPHIC]", "http://feeds.mashable.com/~r/Mashable/~3/qFEaNezOy5Q/", "Apple Cites Improved Working Conditions in Foreign Factories [REPORT]", "http://feeds.mashable.com/~r/Mashable/~3/Z9tCYN7GoCg/"];
sources[24] = ["People", "entertainment", "http://www.people.com/people/", "Anne Hathaway Marries Adam Shulman", "http://feeds.people.com/~r/people/headlines/~3/uBTJSzSH098/0,,20633276,00.html", "Jared Followill of Kings of Leon Is Married", "http://feeds.people.com/~r/people/headlines/~3/pW89PaR68XU/0,,20634552,00.html", "Why Salma Hayek Is the Week’s Best Dressed Star", "http://feeds.people.com/~r/people/headlines/~3/kibUdR6tDG0/"];
sources[25] = ["Popular Science", "science_and_health", "http://www.popsci.com/", "Archive Gallery: PopSci's Arctic Adventures", "http://feeds.popsci.com/c/34567/f/632419/s/23eeebf3/l/0L0Spopsci0N0Cscience0Carticle0C20A120E0A90Carchive0Egallery0Epopscis0Earctic0Eadventures/story01.htm", "Buildings For A Rainbow Balloon Utopia And Other Amazing Images Of The Week", "http://feeds.popsci.com/c/34567/f/632419/s/23ee8b15/l/0L0Spopsci0N0Cscience0Carticle0C20A120E0A90Cmost0Eamazing0Eimages0Eweek0Eseptember0E240E280E20A12/story01.htm", "This Week In The Future: McDonald's iPhones Under The Sea", "http://feeds.popsci.com/c/34567/f/632419/s/23f0b7f9/l/0L0Spopsci0N0Cannouncements0Carticle0C20A120E0A90Cweek0Efuture0Eseptember0E240E280E20A12/story01.htm"];
sources[26] = ["CNBC", "business", "http://www.cnbc.com/", "TSA: More Guns Confiscated at Airport Checkpoints", "http://www.cnbc.com//id/49223173", "Bank of America to Pay $2.43 Billion in Merrill Settlement", "http://www.cnbc.com//id/49223270", "Ex-NY Times Publisher Arthur Ochs Sulzberger Dies", "http://www.cnbc.com//id/49222745"];
sources[27] = ["ESPN", "sports", "http://espn.go.com/", "U.S. has commanding 10-6 Ryder lead", "http://espn.go.com/golf/rydercup12/story/_/id/8438347/2012-ryder-cup-us-commanding-10-6-lead", "U.S. has commanding 10-6 Ryder lead", "http://espn.go.com/golf/rydercup12/story/_/id/8438347/2012-ryder-cup-us-commanding-10-6-lead", "Tiger still point-less at Ryder despite late surge", "http://espn.go.com/golf/rydercup12/story/_/id/8443059/2012-ryder-cup-tiger-woods-point-less-late-rally"];
sources[28] = ["SB Nation", "sports", "http://www.sbnation.com/", "Vancouver Whitecaps vs. Seattle Sounders, 2012 MLS: Final score 0-0, Sounders clinch playoff spot", "http://www.sbnation.com/mls/2012/9/30/3431522/whitecaps-vs-sounders-2012-mls-final-score-match-report-result", "Houston Dynamo vs. New England Revolution, 2012 MLS: Final score 2-0, Dynamo strike late to win", "http://www.sbnation.com/mls/2012/9/30/3431346/houston-dynamo-vs-new-england-revolution-2012-mls-final-score-report-result", "Oregon vs. Washington State 2012 results: Ducks overpower Cougars, 51-26", "http://www.sbnation.com/2012/9/30/3431356/washington-state-oregon-2012-score-results"];
sources[29] = ["Yahoo! News", "general", "http://news.yahoo.com/", "Minneapolis shooter's family feared mental illness", "http://news.yahoo.com/minneapolis-gunmans-family-feared-mental-illness-192015293.html", "Afghan 'inside' attack puts U.S. troop deaths at 2,000", "http://news.yahoo.com/afghan-inside-attack-puts-us-troop-deaths-2-062902604.html", "Afghan forces also suffer from insider attacks", "http://news.yahoo.com/afghan-forces-suffer-insider-attacks-185712158.html"];
sources[30] = ["Lifehacker", "random", "http://lifehacker.com/", "Get More Juice Out of Citrus Fruit with Kitchen Tongs [Clever Uses]", "http://feeds.gawker.com/~r/lifehacker/full/~3/OhTCVzxAjy8/get-more-juice-out-of-citrus-fruit-with-kitchen-tongs", "Add Bluetooth Sound to a Boombox [Video]", "http://feeds.gawker.com/~r/lifehacker/full/~3/eJ6IUJpheJo/add-bluetooth-sound-to-a-boombox", "DIY Washing Soda [Cleaning]", "http://feeds.gawker.com/~r/lifehacker/full/~3/JCRusUgsnYU/diy-washing-soda"];
sources[31] = ["The Huffington Post", "politics", "http://www.huffingtonpost.com/", "Waco, Texas Cricket Carcasses Causing Problem For Businesses", "http://www.huffingtonpost.com/2012/09/29/waco-texas-cricket-carcasses-causing-problems_n_1926113.html", "Tomato Trade Agreement With Mexico May Be Squashed By U.S.", "http://www.huffingtonpost.com/2012/09/29/us-mexico-tomato-trade-deal_n_1926056.html", "Wynnewood, Oklahoma Refinery Explosion Leaves 1 Dead, 1 Injured", "http://www.huffingtonpost.com/2012/09/29/wynnewood-oklahoma-refinery-explosion_n_1925755.html"];
sources[32] = ["Entertainment Weekly", "entertainment", "http://www.ew.com/", "'Doctor Who': What'd you think?", "http://feeds.ew.com/~r/entertainmentweekly/latest/~3/VMj0ByRbQ1I/", "'Revenge' season 2: Who's who", "http://feeds.ew.com/~r/entertainmentweekly/latest/~3/p9Chj6kNNIA/0,,20302134_20634298,00.html", "'Once Upon a Time': Storybrooke IQ?", "http://feeds.ew.com/~r/entertainmentweekly/latest/~3/YU9AnlR2q54/0,,20302134_20634424,00.html"];
sources[33] = ["TechCrunch", "technology", "http://techcrunch.com/", "Italians Take Up The Torch To Ignite Their Own Tech Startup Scene", "http://feedproxy.google.com/~r/Techcrunch/~3/6iwxtB18iMg/", "A Tech Way Around “Creative Block”", "http://feedproxy.google.com/~r/Techcrunch/~3/4GaBTLGYGMk/", "Klout Would Like Potential Employers To Consider Your Score Before Hiring You. And That’s Stupid.", "http://feedproxy.google.com/~r/Techcrunch/~3/MxXOF-tIR0Y/"];
sources[34] = ["CNN", "general", "http://www.cnn.com/", "U.S. warns Iran: Stop arming Syria", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/9pOa71rm5DU/index.html", "Iran agency runs Onion story as its own", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/sQdq1t44ET4/index.html", "NATO: Two killed in 'insider' attack", "http://rss.cnn.com/~r/rss/cnn_topstories/~3/V-V7sGbvyMs/index.html"];
sources[35] = ["WebMD", "science_and_health", "http://www.webmd.com/", "Male Breast Enlargement (Gynecomastia)", "http://men.webmd.com/features/male-breast-enlargement-gynecomastia?src=RSS_PUBLIC", "Are We Too Clean? Letting Kids Get Dirty and Germy", "http://www.webmd.com/parenting/d2n-stopping-germs-12/kids-and-dirt-germs?src=RSS_PUBLIC", "Humira Approved for Ulcerative Colitis Treatment", "http://www.webmd.com/ibd-crohns-disease/ulcerative-colitis/news/20120928/humira-approved-ulcerative-colitis-treatment?src=RSS_PUBLIC"];
sources[36] = ["BuzzFeed", "random", "http://www.buzzfeed.com/", "Jack White Totally Pisses Off New York Crowd", "http://www.buzzfeed.com/perpetua/jack-white-totally-pisses-off-new-york-crowd", "Insanely Popular Girls Who Get Paid To Go Shopping", "http://www.buzzfeed.com/thepetcollective/insanely-popular-girls-who-get-paid-to-go-shopping-5x4b", "A Marriage Proposal In 3D", "http://www.buzzfeed.com/txblacklabel/a-3d-proposal-28m7"];
sources[37] = ["Discovery", "science_and_health", "http://news.discovery.com/", "TWiDN: Vampire Squid Doesn't Suck", "http://news.discovery.com/human/twidn-vampire-squid-doesnt-suck-120929.html#mkcpgn=rssnws1", "Hand Waves Control Wall-Sized Games", "http://news.discovery.com/tech/oblong-industries-minority-report-interface-120929.html#mkcpgn=rssnws1", "'Jesus Wife' Papyrus Deemed a Fake", "http://news.discovery.com/history/jesus-wife-papyrus-fake-120928.html#mkcpgn=rssnws1"];
sources[38] = ["Sports Illustrated", "sports", "http://sportsillustrated.cnn.com/", "Holly Anderson: Smith, West Virginia outlast Baylor in record-breaking Big 12 shootout", "http://college-football.si.com/2012/09/29/west-virginia-baylor-geno-smith-big-12/?xid=si_topstories", "Game Recap", "http://sportsillustrated.cnn.com/football/ncaa/gameflash/2012/09/29/50581/index.html#recap?xid=si_topstories", "Europe rallies, but U.S. leads 10-5 at Ryder Cup", "http://www.golf.com/tour-and-news/us-leads-europe-after-two-days-ryder-cup-2012/?xid=si_topstories"];
sources[39] = ["The Drudge Report", "politics", "http://www.drudgereport.com/", "BLOWOUT RALLY AGAINST CHAVEZ", "http://feedproxy.google.com/~r/DrudgeReportFeed/~3/qF85S7aF1fI/Venezuelas-marathon-man-looks-to-run-down-Chavez.html", "RYAN WARNS: 'We need to tackle challenges before they tackle us'...", "http://feedproxy.google.com/~r/DrudgeReportFeed/~3/-INAqt1yvIA/709309999", "Dollar Falls Most in Year...", "http://feedproxy.google.com/~r/DrudgeReportFeed/~3/N-1gZOm6xtE/dollar-falls-most-since-2011-as-central-banks-bump-up-stimulus.html"];

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
            
            unit_top.className = "unit-top";
            unit_bottom.className = "unit-bottom";
            
            var category = sources[index][1];
            if (category == "general") unit_bottom.className = unit_bottom.className + " white";
            else if (category == "business") unit_bottom.className = unit_bottom.className + " green";
            else if (category == "entertainment") unit_bottom.className = unit_bottom.className + " purple";
            else if (category == "politics") unit_bottom.className = unit_bottom.className + " brown";
            else if (category == "random") unit_bottom.className = unit_bottom.className + " black";
            else if (category == "science_and_health") unit_bottom.className = unit_bottom.className + " blue";
            else if (category == "sports") unit_bottom.className = unit_bottom.className + " red";
            else if (category == "technology") unit_bottom.className = unit_bottom.className + " orange";
            else if (category == "daily") unit_bottom.className = unit_bottom.className + " gold";
            
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