/* ===================== DATA ===================== */
var TOPICS = [
  "Environment & Environmental Philosophy",
  "Anthropocentrism",
  "Biocentrism & Ecocentrism",
  "Ecocentric Theories (Deep, Social, Eco-feminism)",
  "Sustainability & Caring for the Environment",
  "Freedom & Human Acts",
  "Truth & Methods of Philosophizing",
  "Theories in Determining the Truth",
  "Fallacies",
  "Fact, Opinion & Bias"
];
var B = [];
/* Q(topic, question, CORRECT answer, [3 wrong answers], explanation) - options are shuffled automatically */
function Q(t,q,a,w,e){ B.push({t:t,q:q,o:[a].concat(w),e:e||""}); }

/* ---------- 0. ENVIRONMENT & ENVIRONMENTAL PHILOSOPHY ---------- */
Q(0,"The sum total of all surroundings of a living organism, including natural forces and other living things, which provide conditions for development and growth as well as of danger and damage.","Environment",["Ecosystem","Habitat","Biosphere"],"Environment (Endriga, 2017) is the sum total of all surroundings of a living organism.");
Q(0,"Which discipline studies the moral relationships of human beings with the environment and its non-human contents?","Environmental philosophy",["Environmental engineering","Ecology","Environmental economics"],"Environmental philosophy (also called environmental ethics) studies the moral relationship of humans with the environment.");
Q(0,"Environmental philosophy is also referred to as ______.","Environmental ethics",["Environmental science","Social ecology","Natural history"],"Philosophy explores the humanity-environment relationship through environmental philosophy or environmental ethics.");
Q(0,"The environment provides conditions for development and growth, as well as of ______.","Danger and damage",["Wealth and profit","Silence and peace","Technology and progress"],"Endriga (2017) definition: ... as well as of danger and damage.");
Q(0,"Which of the following is NOT one of the three major perspectives in environmental ethics?","Cornucopianism",["Anthropocentrism","Biocentrism","Ecocentrism"],"The three major perspectives are Anthropocentrism, Biocentrism and Ecocentrism. Cornucopian is a label under anthropocentrism.");
Q(0,"Environmental aesthetics refers to ______.","Improving the natural beauty of the environment and appreciating it",["Using nature only for profit","Limiting population growth","Replacing nature with technology"],"Environmental aesthetics = improving the natural beauty of the environment; appreciation of the environment.");
Q(0,"“Fixing disorder (stinky canals, dumped garbage, stagnant water) restores harmony.” This idea belongs to ______.","Environmental aesthetics",["Hasty generalization","Voluntariness","Consensus theory"],"Beauty is a survival mechanism: improving natural beauty contributes to the well-being of people and living organisms.");
Q(0,"According to the lesson, improving the natural beauty of the environment directly contributes to ______.","The well-being of people and living organisms",["The power of governments","Faster industrialization","The growth of the population only"],"");
Q(0,"Which is a lesson objective of The Human Person in their Environment?","Notice disorder in the environment and show appreciation of the human person's importance in it",["Memorize Latin fallacies","Prove that technology can replace nature","Compare economic systems"],"Objectives: define environmental philosophy; notice disorder in the environment; show appreciation of the importance of the human person in the environment.");
Q(0,"Like other sciences, philosophy also seeks to explore the relationship between ______ and the environment.","Humanity",["Politics","Economics only","Religion only"],"");
Q(0,"Which book is cited as the source of the environment lessons?","The Human Person, Not Real, but Existing (Babor)",["Meditations on First Philosophy","The Republic","Silent Spring"],"Source: The Human Person, Not Real, but Existing, 2nd Edition, by Eddie R. Babor (2007).");

/* ---------- 1. ANTHROPOCENTRISM ---------- */
Q(1,"A view that considers humans to be the most important species with a superior worth than other species.","Anthropocentrism",["Biocentrism","Ecocentrism","Social ecology"],"Anthropo = human. Humans are at the center and on top.");
Q(1,"Anthropocentrism mainly focuses on humans and puts the other entities of the natural world ______.","In the background",["On equal footing","At the center","Above humans"],"");
Q(1,"In the anthropocentric model (pyramid), which sits at the top?","Human beings",["Whales","Trees","Mushrooms"],"The anthropocentric model ranks humans above all other beings.");
Q(1,"According to anthropocentrism, humans continually destroy and consume natural resources for their own interest to the point of degradation and, at worst, ______.","Extinction",["Evolution","Preservation","Equality"],"");
Q(1,"Humans adopt an exploitive attitude whenever nature is merely considered as ______.","An instrument for one's profit or gain",["A partner in survival","A living community","A sacred relative"],"");
Q(1,"The unfair or unjust utilization of the environment results to ______.","Ecological crisis",["Sustainable development","Environmental integrity","Equity"],"");
Q(1,"From the anthropocentric view, it follows that human arrogance toward nature is ______.","Justifiable in order to satisfy human interest",["Always immoral","Unnecessary","Punishable by nature"],"");
Q(1,"What is the label given to individuals who assert that environmental problems either do not exist or can be solved by technology or the free market?","Cornucopian",["Deep ecologist","Ecofeminist","Biocentrist"],"Some anthropocentric philosophers support the cornucopian point of view.");
Q(1,"Which claim does the cornucopian point of view REJECT?","That Earth's resources are limited and unchecked population growth will exceed Earth's carrying capacity",["That technology can solve problems","That the free market is useful","That humans are important"],"Cornucopians reject claims that scarcity will lead to wars and famines.");
Q(1,"Cornucopians believe environmental problems can be solved by ______.","Technology or the free market",["Living in small-scale societies","Removing male dominance","Shifting to biocentrism"],"");
Q(1,"“Climate change is a hoax because heat melting ice is ‘just a theory’” and “Global warming isn't real because I was cold today” are examples of ______.","Cornucopian / anti-environmental thinking",["Ecocentric thinking","Deep ecology","Sustainable development"],"The slide used these as examples of denial of environmental problems.");
Q(1,"Which is listed among the effects of the anthropocentric model (leading to global warming)?","Earth pollution, stronger typhoons, soil erosion and famine",["Increased biodiversity","Cleaner oceans","Zero waste"],"");
Q(1,"The slide “Some Effects of Anthropocentric Model” links earth pollution, stronger typhoons, soil erosion and famine to ______.","Global warming",["Biocentrism","Sustainable development","Environmental aesthetics"],"");
Q(1,"Soil erosion is linked to ______.","Food supply",["Animal welfare","Economic efficiency","Freedom"],"");
Q(1,"“Earth provides enough to satisfy every man's needs, but not every man's greed.” Who said this?","Mahatma Gandhi",["Ronald Reagan","Oscar Arias","Erich Fromm"],"");
Q(1,"According to the quote of Mahatma Gandhi, what can the Earth NOT satisfy?","Every man's greed",["Every man's needs","Every animal's needs","Every plant's needs"],"");
Q(1,"Notes: the anthropocentric view is simply described as ______.","Human beings doing cruel things to the world",["Humans and nature working equally","Nature caring for humans","Women caring for the earth"],"From the self-made notes.");

/* ---------- 2. BIOCENTRISM & ECOCENTRISM ---------- */
Q(2,"Which view claims that humans are NOT the only important species on earth and are not inherently greater than other living things?","Biocentrism",["Anthropocentrism","Cornucopianism","Authoritarianism"],"");
Q(2,"Biocentrism suggests that humans and other living things are ______.","Interdependent and equal",["Independent","Superior and inferior","Unrelated"],"HUMANS AND OTHER LIVING THINGS ARE INTERDEPENDENT AND EQUAL.");
Q(2,"The biocentric view drives the activities of ______.","Humane organizations that advocate the ethical treatment of animals",["Mining companies","Industrial corporations","Political parties"],"");
Q(2,"R.A. 8485 is known as ______.","The Animal Welfare Act of 1998",["The Clean Air Act","The Solid Waste Management Act","The Anti-Cruelty to Humans Act"],"Note: the lesson slide states 1998 (the notes had 1990).");
Q(2,"Under R.A. 8485 Section 6, it shall be unlawful for any person to ______.","Torture any animal, neglect adequate care, or subject dogs/horses to fights",["Keep a pet at home","Feed stray animals","Plant a tree"],"");
Q(2,"The slide on animal cruelty states punishment of imprisonment of ______ and a fine of Php 30,000 to 250,000.","1–3 years",["6 months","5–10 years","20 years"],"");
Q(2,"Which view believes that humankind is merely a portion of the biological system or community and has a vital role as guardian of nature?","Ecocentrism",["Anthropocentrism","Cornucopianism","Individualism"],"");
Q(2,"Ecocentrism tells us that both ______ organisms are reliant on the processes in the ecosystem.","Living and non-living",["Only living","Only human","Only animal"],"All of these are important.");
Q(2,"Ecocentrism is devoted to preserving ______.","The totality of Earth's biodiversity and the functioning of its life-supporting system",["Only endangered animals","Only human settlements","Only forests"],"");
Q(2,"The ecocentric model emphasizes the important role of ______.","The interaction between living and non-living components of the environment",["Human dominance over nature","Economic growth","Free market competition"],"");
Q(2,"The ecocentric model promotes the idea that order and balance in nature bring about ______.","Stability and beauty",["Profit and power","Competition and war","Scarcity and famine"],"");
Q(2,"“The Shift from Ego to Eco”: Anthropocentrism is described as ______, while Ecocentrism is ______.","Ruling the world; being a part of the world",["Being a part of the world; ruling the world","Protecting animals; protecting humans","Using nature; ignoring nature"],"");
Q(2,"How many theories fall under the ecocentric model?","Three",["Two","Four","Five"],"Deep Ecology, Social Ecology and Ecofeminism.");
Q(2,"Which perspective considers non-living things (like rivers and soil) as part of the moral community?","Ecocentrism",["Anthropocentrism","Biocentrism only","Cornucopianism"],"Biocentrism centers on living things; ecocentrism includes living and non-living.");

/* ---------- 3. ECOCENTRIC THEORIES ---------- */
Q(3,"Which theory states that ecological crisis is an outcome of anthropocentrism?","Deep ecology",["Social ecology","Ecofeminism","Cornucopianism"],"");
Q(3,"Deep ecologists encourage humanity to shift away from ______ to ______.","Anthropocentrism; ecocentrism",["Ecocentrism; anthropocentrism","Biocentrism; anthropocentrism","Feminism; capitalism"],"");
Q(3,"According to this theory, ecological crisis results from authoritarian social structures.","Social ecology",["Deep ecology","Ecofeminism","Biocentrism"],"");
Q(3,"Social ecologists call for ______.","Small-scale societies that recognize humanity is linked with the well-being of the natural world",["Large industrial states","Strong centralized governments","Free-market expansion"],"");
Q(3,"Notes: Social ecology is the belief that tries to ______.","Encourage people to solve environmental problems",["Blame only women","Ignore the environment","Promote authority"],"");
Q(3,"Which theory states that ecological crisis is a consequence of male dominance?","Ecofeminism",["Deep ecology","Social ecology","Anthropocentrism"],"");
Q(3,"In ecofeminism, whatever is “superior” is ______ to whatever is “inferior.”","Entitled",["Equal","Responsible","Opposed"],"");
Q(3,"For ecofeminists, freeing nature and humanity means ______.","Removing the superior vs. inferior in human relations",["Increasing male authority","Using more technology","Ignoring social injustice"],"");
Q(3,"Ecofeminism holds that environmental destruction and social injustice (racism, poverty, sexism) share a common cause: ______.","A particular kind of hierarchical thinking",["Overpopulation","Lack of technology","Poor weather"],"");
Q(3,"Notes: In ecofeminism, women symbolize ______.","Respect and care",["Dominance","Authority","Profit"],"");
Q(3,"What do the three theories (Deep Ecology, Social Ecology, Ecofeminism) have in common?","They value the care, conservation and preservation of nature and humanity",["They support exploitation of nature","They reject ecology","They deny ecological crisis"],"");
Q(3,"The search for the meaning of life must explore not just our own survival but calls for ______.","A new socio-ecological order",["A new economic empire","A return to traditions","A rejection of nature"],"");
Q(3,"Which philosopher believes that humanity ought to recognize not only itself but also the world around it?","Erich Fromm",["René Descartes","Plato","Mahatma Gandhi"],"");
Q(3,"Match: “Authoritarian structures” → ; “male dominance” → ; “anthropocentrism” → . Which order is correct?","Social ecology; ecofeminism; deep ecology",["Deep ecology; social ecology; ecofeminism","Ecofeminism; deep ecology; social ecology","Social ecology; deep ecology; ecofeminism"],"");

/* ---------- 4. SUSTAINABILITY & CARING ---------- */
Q(4,"Sustainable development means ______.","Meeting the needs of the present without compromising the ability of future generations to meet their own needs",["Using all resources now","Stopping all development","Maximizing profit only"],"Balance between today's needs and future generations.");
Q(4,"Sustainable development focuses on reconciling ______ with the protection of the environment.","Human activities and economic development",["War and peace","Faith and reason","Politics and religion"],"");
Q(4,"Notes: Sustainable development is the ______ of natural resources to make sure there is more for the future.","Wise use",["Overuse","Sale","Hoarding"],"");
Q(4,"Major idea of sustainable development: we must make ______ regarding the use of natural resources.","Wise decisions",["Quick profits","Random choices","Secret deals"],"");
Q(4,"Major idea of sustainable development: the misuse of resources often means that ______.","Other people do not get to benefit from it",["Resources multiply","Nature heals itself","Prices go down"],"");
Q(4,"What are the three pillars of survival?","Environmental, economic and social sustainability",["Physical, psychological and moral","Anthropo, bio and eco","Prudence, frugality and equity"],"");
Q(4,"Maintaining physical natural systems so they stay diverse and productive; letting resources replenish.","Environmental sustainability",["Economic sustainability","Social sustainability","Equity"],"");
Q(4,"Long-term financial growth that does not damagingly impact society or deplete environmental factors of production.","Economic sustainability",["Environmental sustainability","Social sustainability","Environmental integrity"],"");
Q(4,"How individuals live together based on health, equality, peace and food security.","Social sustainability",["Economic sustainability","Environmental sustainability","Economic efficiency"],"");
Q(4,"“True sustainability” is found where ______.","The three pillars overlap",["Only the economy grows","Only nature is protected","Only society benefits"],"");
Q(4,"What are the three principles of sustainability?","Environmental integrity, economic efficiency, equity",["Prudence, frugality, honesty","Voluntariness, responsibility, knowledge","Truth, knowledge, belief"],"");
Q(4,"Maintaining the state of the environment; human activities should not disrupt the ecosystem and human communities in the area.","Environmental integrity",["Economic efficiency","Equity","Frugality"],"");
Q(4,"The “Stop Kaliwa Dam” campaign is an example connected to ______.","Environmental integrity",["Economic efficiency","Frugality","Hasty generalization"],"The dam threatens the ecosystem and communities.");
Q(4,"Prudence in decision-making regarding the use of resources to ensure minimum to zero waste.","Economic efficiency",["Equity","Environmental integrity","Social sustainability"],"");
Q(4,"The ability to regulate one's action and behavior.","Prudence",["Frugality","Equity","Voluntariness"],"");
Q(4,"Being thrifty with the use of one's resources.","Frugality",["Prudence","Freedom","Equity"],"");
Q(4,"Using a reusable tumbler and eco-bag instead of single-use cups and plastic bags reflects ______.","Prudence and frugality",["Cornucopianism","Ad populum","Hindsight"],"");
Q(4,"The principle that demands we use natural resources in a way that conserves them so the next generation can use them.","Equity",["Economic efficiency","Environmental integrity","Prudence"],"");
Q(4,"Which is NOT a suggested way to care for the environment?","Using more single-use plastic for convenience",["Reduce, reuse, recycle","Conserve water","Plant trees"],"");
Q(4,"The 3 Rs of caring for the environment are ______.","Reduce, reuse, recycle",["Reject, rebuild, reward","Read, review, recite","Respect, refuse, reply"],"");
Q(4,"Which of these is listed among the ways to care for the environment?","Avoid pesticides and herbicides that harm ecosystems",["Minimize recycling","Maximize travel","Dispose waste anywhere"],"Other ways: conserve water, minimize travel, support renewable energy, eat sustainably, shop wisely, educate and advocate, plant trees, dispose of waste properly and join cleanups.");
Q(4,"According to the lesson, the ideals of caring for nature cross all party lines because protecting nature needs ______.","Focused conservation, action, political will and support from industry",["Only the government","Only scientists","Only wealthy people"],"");
Q(4,"Notes (personal views): “Ecocentrists would argue that mining is immoral because ______.”","It is so harmful to the environment",["It makes money","It gives jobs","It uses technology"],"");
Q(4,"“The environment is no one's property to destroy; it's everyone's ______ to protect.”","Responsibility",["Business","Right","Possession"],"Quote by Mohith Agadi.");
Q(4,"Closing message of the lesson: Our environment is created for every human, so take good care of nature. Remember, life is all about ______.","Balance",["Competition","Power","Profit"],"");

/* ---------- 5. FREEDOM & HUMAN ACTS ---------- */
Q(5,"Freedom is the power or right to act, speak or think as you want without hindrance or restraint. This definition is from ______.","Abella (2016)",["Dimson (2015)","Endriga (2017)","Babor (2007)"],"");
Q(5,"Freedom is the exercise of ______.","Free will and intellect",["Force and power","Habit and instinct","Tradition and authority"],"");
Q(5,"Freedom is an ______ and essential property of the person.","Intrinsic",["Extrinsic","Optional","Temporary"],"");
Q(5,"The human person by nature is a free being, and it is in his or her nature to seek ______.","Wisdom",["Wealth","Power","Fame"],"");
Q(5,"Where is freedom rooted?","Self-determination, exercise of intellect, and free will",["Law, tradition and religion","Pleasure, power and wealth","Fear, passion and violence"],"");
Q(5,"The ability or power to make decisions for yourself; “the ability to BECOME.”","Self-determination",["Exercise of intellect","Free will","Voluntariness"],"");
Q(5,"The process to manifest his or her ideas and aspirations.","Exercise of intellect",["Self-determination","Free will","Responsibility"],"");
Q(5,"The ability to decide what to do independently of any outside influence.","Free will",["Self-determination","Habit","Passion"],"");
Q(5,"Notes: Freedom is the ability to do whatever you want ______.","Without restriction",["With permission","Only in groups","Only with money"],"");
Q(5,"Which kind of freedom refers to the absence of any physical restraint (to move around without restrictions)?","Physical freedom",["Psychological freedom","Moral freedom","Social freedom"],"");
Q(5,"The person is free to perform actions that he or she considers right and wise.","Psychological freedom",["Physical freedom","Moral freedom","Political freedom"],"");
Q(5,"Using freedom in a manner that upholds human dignity and goodness.","Moral freedom",["Physical freedom","Psychological freedom","Absolute freedom"],"");
Q(5,"What are the two elements of freedom?","Voluntariness and responsibility",["Knowledge and ignorance","Fear and passion","Habit and violence"],"");
Q(5,"The ability of a person to act out of his or her own free will and self-determination; may also mean acting even if not required or called to act.","Voluntariness",["Responsibility","Passion","Habit"],"");
Q(5,"Being accountable for one's actions and their consequences.","Responsibility",["Voluntariness","Free will","Ignorance"],"");
Q(5,"“With freedom comes responsibility, a responsibility that can only be met by the individual.” Who said this?","Ronald Reagan",["Oscar Arias","Erich Fromm","Plato"],"");
Q(5,"“The more freedom we enjoy, the greater the responsibility we bear, toward others as well as ourselves.” Who said this?","Oscar Arias",["Ronald Reagan","Mahatma Gandhi","Descartes"],"");
Q(5,"Human acts are the rational acts of the human person which involve ______.","Understanding and free will",["Instinct and habit","Fear and violence","Ignorance and passion"],"Notes: pinag-isipan na kilos.");
Q(5,"Human acts can be ______.","Morally good or morally bad",["Only good","Only bad","Neither good nor bad"],"");
Q(5,"What are the three essential attributes of human acts?","Knowledge, free will, voluntary",["Fear, passion, violence","Ignorance, habit, instinct","Truth, belief, justification"],"");
Q(5,"Human act attribute: “It is performed consciously.”","Knowledge",["Free will","Voluntary","Habit"],"");
Q(5,"Human act attribute: “It is done willfully.”","Voluntary",["Knowledge","Free will","Ignorance"],"");
Q(5,"Actions that are instinctive or involuntary, done under ignorance, fear, passion, violence, habits and physical and biological movements.","Acts of man",["Human acts","Moral acts","Rational acts"],"Notes: involuntary actions done under ignorance and fear.");
Q(5,"Which of the following is an ACT OF MAN rather than a human act?","Blinking or a heartbeat",["Choosing a course after thinking","Donating after deciding to help","Studying for an exam"],"Biological movements are acts of man.");
Q(5,"Lack of knowledge in a certain thing.","Ignorance",["Fear","Passion","Violence"],"");
Q(5,"A mental disorder brought on by the apprehension of some present or imminent danger.","Fear",["Passion","Habit","Ignorance"],"");
Q(5,"Mental responses; tendencies toward desirable objects or away from undesirable objects.","Passion",["Fear","Violence","Habit"],"");
Q(5,"A force exerted on a person by another person to compel him to perform a certain action against his will.","Violence",["Passion","Ignorance","Habit"],"");
Q(5,"A constant tendency that influences one to perform repeatedly similar actions.","Habit",["Passion","Fear","Violence"],"");
Q(5,"Which statement best contrasts a human act and an act of man?","Human acts are voluntary and rational; acts of man are instinctive or involuntary",["Human acts are involuntary; acts of man are rational","Both are always voluntary","Both are always immoral"],"");

/* ---------- 6. TRUTH & METHODS OF PHILOSOPHIZING ---------- */
Q(6,"Philosophy may not always give one final answer, but that does not mean that ______.","Every answer is equally good",["Philosophy is useless","Opinions are facts","Reasoning is impossible"],"");
Q(6,"Philosophy is not simply a collection of opinions. Philosophers are expected to ______.","Support positions with reasons, examine evidence, question assumptions, consider opposing arguments and use logical reasoning",["Just state what they feel","Follow the majority","Avoid evidence"],"");
Q(6,"Truth lies at the ______ of any inquiry.","Heart",["End","Edge","Beginning only"],"");
Q(6,"Who traced the need to philosophize to doubt?","René Descartes",["Plato","Socrates","Erich Fromm"],"French philosopher.");
Q(6,"“Dubito ergo cogito, cogito ergo sum” means ______.","I doubt therefore I think, I think therefore I am",["I think therefore I act","I know therefore I believe","I see therefore I trust"],"");
Q(6,"In philosophy, ______ is employed to help determine the truth.","Systematic doubt",["Blind faith","Popular vote","Tradition"],"Doubt drives our desire to discover the truth; every knowledge, opinion, evidence and experience is scrutinized and analyzed.");
Q(6,"The concept of truth is rooted in the ancient Greek idea of “justified, true belief” by ______.","Plato",["Descartes","Aristotle","Gandhi"],"");
Q(6,"According to “justified, true belief,” something is true because ______.","You believe it to be true and there is justification for such belief",["Many people said so","It is old","It is useful"],"");
Q(6,"A belief may be justified by using ______.","Perception and senses, appeal to authority, or reasoning",["Luck","Force","Threats"],"");
Q(6,"Statements or beliefs that are consistent with objective reality and can be verified through evidence or logical reasoning.","Truth",["Opinion","Claim","Bias"],"");
Q(6,"Simple data that comes from the outside and passes to our senses; it must be truthful to gain validity and acceptance.","Knowledge",["Proposition","Claim","Opinion"],"");
Q(6,"Statements about the world or reality which may or may not carry truth.","Propositions",["Claims","Facts","Theories"],"");
Q(6,"Statements that are not evidently or immediately known to be true and require further examination.","Claims",["Facts","Propositions only","Knowledge"],"");
Q(6,"To determine the truth of a claim, we must be familiar with ______.","How ideas are presented (arguments, fallacies and biases)",["Only the speaker's popularity","Only the speaker's title","The loudest voice"],"Ideas are often presented as arguments phrased to seem reasonable.");

/* ---------- 7. THEORIES OF TRUTH ---------- */
Q(7,"Which theory states that something is true if it corresponds to reality or the actual state of affairs?","Correspondence theory",["Coherence theory","Consensus theory","Pragmatic theory"],"RELATIONSHIP BETWEEN YOUR IDEA AND REALITY.");
Q(7,"“Pigs can fly” is false according to the correspondence theory because ______.","In reality pigs do not have the capability to fly",["Most people disagree","It is not useful","It does not make sense in a story"],"");
Q(7,"We accept dictionary definitions primarily because of ______.","Correspondence",["Coherence","Consensus","Pragmatism"],"");
Q(7,"Which theory proposes that something is true if it makes sense when placed in a certain situation or context?","Coherence theory",["Correspondence theory","Consensus theory","Pragmatic theory"],"");
Q(7,"In the coherence theory, there is a possibility of ______.","Varied “truth” from different perspectives",["Only one truth","No truth","Truth by voting"],"Partial point of view; everyone has different truths.");
Q(7,"The “6 or 9?” picture (“You are not wrong, they are not wrong. Everyone has their own truth.”) illustrates ______.","Coherence theory",["Correspondence theory","Ad baculum","Hasty generalization"],"");
Q(7,"Which rejects the idea that a single, universal, objective truth exists independently of human perspectives?","Relativism",["Correspondence","Consensus","Realism"],"");
Q(7,"Which theory states that a statement is true when there is agreement among people who have carefully discussed, examined and reasoned about it?","Consensus theory",["Coherence theory","Pragmatic theory","Correspondence theory"],"DEMOCRATIC. DISCUSSED. TEAM AGREEMENT.");
Q(7,"Philosophically, consensus should be based on ______.","Reason, evidence, open discussion and informed judgment",["Popularity","Majority vote alone","Tradition"],"Just because many people agreed, doesn't mean it is true.");
Q(7,"“Smoking is harmful to health” and “The Earth is round” are accepted as true mainly through ______.","Consensus of experts based on evidence",["Pragmatism","Appeal to pity","Hindsight"],"");
Q(7,"Which theory holds that something is true if we can put it into practice or if it is useful in real life?","Pragmatic theory",["Correspondence theory","Coherence theory","Consensus theory"],"");
Q(7,"In the pragmatic theory, an idea or belief is true when it ______.","Works in practice, produces useful results, or helps solve a problem",["Corresponds to reality only","Is old","Is voted by the majority"],"");
Q(7,"“Santa Claus is true as long as you receive gifts from him” illustrates ______.","Pragmatic theory",["Coherence theory","Consensus theory","Correspondence theory"],"");
Q(7,"“Reviewing for at least one hour every day will improve my exam performance” is true if ______.","It works in practice (pragmatic)",["Most classmates say so","It is written in a book","A celebrity said it"],"");
Q(7,"Notes: “Di ako maniniwala na totoo ang pagmamahal niya hanggat wala akong natatanggap na pagmamahal” is an example of ______.","Pragmatic theory",["Coherence theory","Consensus theory","Ad hominem"],"True only if it is experienced / useful for you.");
Q(7,"Pragmatic theory also believes that ideas should be ______.","Continually tested to confirm their validity",["Never questioned","Based on authority alone","Kept secret"],"");
Q(7,"Analyzing headlines such as “Pope Francis says abortion is acceptable for Catholics” using whether it fits in context uses which theory?","Coherence theory",["Pragmatic theory","Correspondence theory","None"],"");
Q(7,"Which theory pairs with “what you see in reality”?","Correspondence theory",["Coherence theory","Pragmatic theory","Consensus theory"],"");

/* ---------- 8. FALLACIES ---------- */
Q(8,"A group of statements that appear to be arguments but fail to support the conclusion.","Fallacy",["Fact","Proposition","Knowledge"],"Errors in our reasoning.");
Q(8,"“There is no hope in the Philippine government, because the Philippines is a tropical country.” is an example of ______.","A fallacy (conclusion not supported by the premise)",["A fact","A sound argument","Knowledge"],"");
Q(8,"Argumentum ad hominem is also known as ______.","Attacking the person",["Appeal to force","Appeal to pity","Appeal to tradition"],"");
Q(8,"“Hominem” came from the Latin word “homo,” which means ______.","Man",["Force","Pity","People"],"");
Q(8,"“How can we believe him when he talks about social distancing, he is a lawyer who is a liar.” Which fallacy?","Ad hominem",["Ad baculum","Ad ignorantiam","Ad verecundiam"],"");
Q(8,"“Of course he believes that the government is flawed, he is a rebel and a Communist!” Which fallacy?","Ad hominem",["Ad populum","Post hoc","Accident"],"");
Q(8,"“Puro kayo batikos, ano ba naiambag niyo?” is an example of ______.","Ad hominem",["Ad baculum","Appeal to tradition","Composition"],"The right to criticize is not reserved for those contributing more.");
Q(8,"Argumentum ad baculum is also called ______.","Appeal to force",["Appeal to pity","Appeal to people","Appeal to authority"],"");
Q(8,"“Baculum” is a Latin word meaning ______.","Scepter or stick",["Pity","People","Ignorance"],"A scepter is a symbol of authority.");
Q(8,"“TV Patrol is the best news program. If you don't believe me, I won't let you watch TV.” Which fallacy?","Ad baculum",["Ad misericordiam","Ad populum","Begging the question"],"");
Q(8,"“If this peace agreement will not be signed by the government, then we will have no recourse but to go to war.” Which fallacy?","Ad baculum",["Ad hominem","Ad ignorantiam","Composition"],"Using the threat of force.");
Q(8,"Argumentum ad misericordiam is also called ______.","Appeal to pity",["Appeal to force","Appeal to ignorance","Appeal to tradition"],"Notes: guilt trip.");
Q(8,"“Misericordia” means ______.","Pity or compassion",["Stick","People","Tradition"],"");
Q(8,"“Ma'am, please give me a passing grade. I didn't complete the requirements, but my family is having financial problems.” Which fallacy?","Ad misericordiam",["Ad baculum","Ad verecundiam","Hasty generalization"],"");
Q(8,"Argumentum ad populum is also known as ______.","Bandwagon fallacy",["Circular argument","False cause","Slippery slope"],"");
Q(8,"“Populum” is the Latin word for ______.","People",["Stick","Man","Ignorance"],"Most TV commercials are guilty of this fallacy, exploiting vanity and desires.");
Q(8,"“I'm sure you want an iPhone. Almost 80% of your schoolmates are using it.” Which fallacy?","Ad populum",["Ad hominem","Ad ignorantiam","Accident"],"");
Q(8,"“Every boy your age already has a girlfriend, you should go find one!” Which fallacy?","Ad populum (bandwagon)",["Ad baculum","Post hoc","Petitio principii"],"");
Q(8,"Which fallacy is committed when an idea is advanced because it has been practiced for a long time?","Argumentum ad traditionem (appeal to tradition)",["Ad populum","Ad hominem","Composition"],"“This is the way it has always been done.”");
Q(8,"“Marriage should be between a man and a woman. It has been so for a long time in this country; it should remain so.” Which fallacy?","Appeal to tradition",["Appeal to pity","Appeal to force","Hasty generalization"],"");
Q(8,"“Women should stay at home” (because it has always been so) is an example of ______.","Appeal to tradition",["Ad ignorantiam","Post hoc","Ad baculum"],"");
Q(8,"Which fallacy states that whatever has not been proven false must be true (and vice versa)?","Argumentum ad ignorantiam",["Ad verecundiam","Ad populum","Accident"],"Notes: if no one counterargues, it is automatically true/false.");
Q(8,"“Nobody has proven that aliens don't exist, so aliens definitely exist.” Which fallacy?","Ad ignorantiam",["Ad hominem","Petitio principii","Composition"],"");
Q(8,"“Adam was the first test tube baby. Since nobody proves otherwise, therefore it is true.” Which fallacy?","Appeal to ignorance",["Appeal to pity","Appeal to tradition","Hasty generalization"],"");
Q(8,"Petitio principii is also known as ______.","Begging the question / circular argument",["Appeal to force","Bandwagon","Post hoc"],"");
Q(8,"A fallacy in which the conclusion is taken for granted in the premises.","Petitio principii",["Hasty generalization","Accident","Ad populum"],"");
Q(8,"“Cheating is wrong because it is immoral.” Which fallacy?","Begging the question",["Ad hominem","Composition","Ad baculum"],"");
Q(8,"“What is a declarative sentence? It is a sentence that declares.” Which fallacy?","Petitio principii",["Post hoc","Ad ignorantiam","Ad misericordiam"],"");
Q(8,"“I have the right to free speech, therefore you cannot stop me from talking.” Which fallacy?","Begging the question",["Appeal to force","Appeal to pity","Accident"],"");
Q(8,"Which fallacy is committed when one reaches a generalization based on insufficient evidence?","Hasty generalization",["Composition","Accident","Ad verecundiam"],"");
Q(8,"“Our neighbor who is a police officer was convicted of being a drug dealer, therefore all police officers are drug dealers.” Which fallacy?","Hasty generalization",["Composition","Ad hominem","Post hoc"],"");
Q(8,"Notes: “Damay-damay na (if may bakla sa GC namin, bakla na lahat)” is an example of ______.","Hasty generalization",["Post hoc","Appeal to tradition","Ad baculum"],"");
Q(8,"Post hoc ergo propter hoc is the fallacy of ______.","Cause and effect (assuming that because one event follows another, it is caused by it)",["Appeal to authority","Appeal to ignorance","Circular reasoning"],"");
Q(8,"“Ever since you bought that sweater, everything has been going wrong in your life. You should get rid of it.” Which fallacy?","Post hoc ergo propter hoc",["Hasty generalization","Composition","Ad hominem"],"");
Q(8,"“Jen comes to class just as the bell rings every day. Jen's arrival causes the bell to ring.” Which fallacy?","Post hoc (cause and effect)",["Accident","Ad verecundiam","Ad populum"],"");
Q(8,"“She became an old maid because she used to sing while cooking.” Which fallacy?","Post hoc (cause and effect)",["Composition","Ad baculum","Petitio principii"],"");
Q(8,"Fallacy of composition infers that ______.","What is true of a part is true of the whole",["What is true of the whole is true of the part only","A general rule fits all cases","An authority is always right"],"Individual to all.");
Q(8,"“You are a doctor, therefore your family is doctors.” Which fallacy?","Fallacy of composition",["Fallacy of accident","Ad verecundiam","Ad hominem"],"");
Q(8,"“These cases of robbery in this district convince me that the city has become a den of thieves.” Which fallacy?","Fallacy of composition",["Ad ignorantiam","Post hoc","Ad baculum"],"");
Q(8,"Which fallacy occurs when one applies a general rule to an irrelevant situation?","Fallacy of accident",["Fallacy of composition","Hasty generalization","Begging the question"],"");
Q(8,"“Cutting people with knives is a crime. Surgeons cut people with knives. Surgeons are criminals.” Which fallacy?","Fallacy of accident",["Composition","Ad hominem","Post hoc"],"");
Q(8,"Argumentum ad verecundiam is also known as ______.","Argument from authority",["Appeal to pity","Appeal to force","Circular argument"],"");
Q(8,"“My assignment in Chemistry is not wrong. Ms. Aguirre, my English teacher who is known internationally as a novelist, confirmed my answer.” Which fallacy?","Ad verecundiam",["Ad populum","Ad hominem","Accident"],"The authority is not an expert in the relevant field.");
Q(8,"A fallacy committed when a person uses the name of a popular celebrity or expert to put more weight on the assertion.","Ad verecundiam",["Ad baculum","Ad ignorantiam","Petitio principii"],"");

/* ---------- 9. FACT, OPINION & BIAS ---------- */
Q(9,"Something concrete that can be proven (found in legal records, scientific findings, encyclopedias, atlases).","Fact",["Opinion","Bias","Claim"],"");
Q(9,"A view formed in the mind of a person about a particular issue; cannot be proved or checked.","Opinion",["Fact","Knowledge","Truth"],"");
Q(9,"Which clue words usually signal an opinion?","Think, feel, believe, seem; always, never, all, none, most, least, best, greatest, worst",["Date, place, number, name","Measured, recorded, proven","Because, therefore, hence"],"");
Q(9,"Which of the following is an opinion?","Pizza is the best food in the world.",["Water boils at 100°C at sea level.","The Philippines has 7,641 islands.","A dog barks."],"");
Q(9,"Biases are ______.","Not necessarily errors in reasoning, but tendencies or influences that affect the views of people",["Always logical errors","Always facts","Proven truths"],"");
Q(9,"The tendency to judge a person's personality by his actions without regard for external factors or influences.","Correspondence bias (attribution effect)",["Confirmation bias","Framing","Hindsight"],"");
Q(9,"“She is a teacher, she cannot be wrong.” Which bias?","Correspondence bias / attribution effect",["Confirmation bias","Cultural bias","Conflict of interest"],"");
Q(9,"The tendency to look for and readily accept information that fits one's own beliefs and reject views that go against it.","Confirmation bias",["Framing","Hindsight","Cultural bias"],"Notes: “Belief mo.”");
Q(9,"“Marrying more than one is a sin. I am a Christian.” Which bias?","Confirmation bias",["Framing","Hindsight","Conflict of interest"],"");
Q(9,"Focusing on a certain aspect of a problem while ignoring other aspects.","Framing",["Confirmation bias","Hindsight","Cultural bias"],"");
Q(9,"“I saw him going out of that house last night. I am sure he did it.” Which bias?","Framing",["Hindsight","Cultural bias","Conflict of interest"],"");
Q(9,"The tendency to see past events as predictable or to ascribe a pattern to historical events.","Hindsight",["Framing","Confirmation bias","Conflict of interest"],"");
Q(9,"“The Taal Volcano will erupt anytime soon. It happened the same in previous years.” Which bias?","Hindsight",["Framing","Cultural bias","Correspondence bias"],"");
Q(9,"A person or group is connected to or has a vested interest in the issue being discussed.","Conflict of interest",["Cultural bias","Hindsight","Framing"],"");
Q(9,"“He ordered everyone to wear face masks because he owns a face mask factory.” Which bias?","Conflict of interest",["Cultural bias","Confirmation bias","Framing"],"");
Q(9,"Analyzing an event or issue based on one's cultural standards.","Cultural bias",["Hindsight","Framing","Conflict of interest"],"");
Q(9,"“Americans are always like that. They are playing saviors since Spanish time here in the Philippines.” Which bias?","Cultural bias",["Hindsight","Confirmation bias","Framing"],"");
Q(9,"A person who speaks well is not automatically a person who ______.","Speaks the truth",["Is wise","Is a philosopher","Is a scientist"],"Do not confuse confidence with truth.");
Q(9,"Which question should a student ask before believing a claim?","What is the evidence? Is the reasoning valid? What assumptions are made? Could there be another perspective?",["Who is the most popular speaker?","How many likes does it have?","Does it sound intelligent?"],"");
Q(9,"“Don't confuse popularity with correctness” warns against which fallacy?","Ad populum",["Ad baculum","Post hoc","Accident"],"");
Q(9,"Being informed is not the same as being ______.","Wise",["Educated","Famous","Powerful"],"Wisdom comes from knowing when to question, when to listen, and when to admit you may be wrong.");
Q(9,"“Don't surrender your ability to think just because someone else sounds convincing.” This best supports which method of philosophizing?","Questioning wisely and seeking evidence (systematic doubt)",["Blind acceptance","Following the majority","Obedience to authority"],"");

/* ---------- extra items (verified against slides) ---------- */
Q(8,"“Mga dilawan kayo kaya ayaw niyo tumulong kay presidente!” is an example of ______.","Ad hominem",["Ad baculum","Appeal to tradition","Hasty generalization"],"Having an opinion doesn't mean political affiliation or refusal to help.");
Q(8,"“Bakit ba kayo galit sa China? Ang racist niyo naman!” Labeling critics as racists does not make the argument less valid. Which fallacy?","Ad hominem",["Ad populum","Ad misericordiam","Composition"],"");
Q(8,"A scepter, the symbol of authority that the Pope normally carries, is connected to which fallacy?","Argumentum ad baculum",["Argumentum ad populum","Argumentum ad hominem","Argumentum ad ignorantiam"],"Baculum = scepter or stick.");
Q(8,"“All these charges are baseless; this is just plain harassment. Can't you see how this is affecting my family?” Which fallacy?","Ad misericordiam",["Ad baculum","Ad hominem","Post hoc"],"");
Q(8,"“Traditio” means ______.","Tradition",["Truth","Threat","Trust"],"");
Q(8,"Argumentum ad ignorantiam is committed when a person cannot give a counter argument or evidence, and therefore claims ______.","His or her assertions are correct and the opponent is wrong",["The argument is circular","The majority agrees","A celebrity said so"],"");
Q(8,"“According to Zecharia Sitchin, author of Cosmic Code, Adam was the first test tube baby. Since nobody proves otherwise, therefore it is true.” Which fallacy?","Ad ignorantiam",["Ad verecundiam only","Composition","Accident"],"");
Q(9,"“Facts are the truth and are accepted as such.” Where can facts be found?","Legal records, scientific findings, encyclopaedias, atlases",["Personal feelings","Social media comments only","Rumors"],"");
Q(9,"An opinion is “what someone believes or thinks, and is ______.”","Not necessarily the truth",["Always the truth","Always false","Always a fact"],"");
Q(9,"Which statement about bias is correct according to the lesson?","Biases are tendencies or influences that affect people's views, not necessarily errors in reasoning",["Biases are always logical fallacies","Biases are proven facts","Biases only exist in scientists"],"");
Q(9,"As students, your responsibility is not to believe everything but to ______.","Think before you believe",["Believe what is popular","Follow the loudest speaker","Avoid asking questions"],"");
Q(9,"“Information is everywhere, but ______.”","Not everything you hear, read or see is true",["Everything is true","Only the news is true","Only the internet is false"],"");
Q(9,"“Don't confuse confidence with ______.”","Truth",["Wisdom only","Tradition","Authority"],"");
Q(9,"“Use your mind. Question wisely. Seek evidence. And never be afraid to ask: ______”","“But is it really true?”",["“Who said it?”","“Is it popular?”","“Is it old?”"],"");
Q(7,"The coherence theory slide asks you to analyze headlines like “Extra Judicial Killing.” What does the theory ask you to consider?","Whether it makes sense in a certain situation or context",["Whether most people voted for it","Whether it is useful","Whether a celebrity said it"],"");
Q(7,"Pragmatic theory example: “Prayer is powerful” is true if ______.","It works and is useful in practice for the person",["It corresponds to a dictionary","Most experts agree","It has been practiced a long time"],"");
Q(0,"Which is a slide example of disorder in the environment that environmental aesthetics wants fixed?","Stinky canals, dumped garbage and stagnant water",["Tall buildings","Wind turbines","Recycled paper"],"");
Q(4,"In the three pillars diagram, where the three circles overlap is labeled ______.","True sustainability",["Cornucopia","Anthropocentrism","Ecological crisis"],"");

/* ===================== ENGINE ===================== */
var pool=[], idx=0, ans=[], mode="practice", t0=0, tmr=null, finished=false, lastTopics=[];

function $(id){return document.getElementById(id);}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}

function buildTopics(){
  var h="";
  for(var i=0;i<TOPICS.length;i++){
    var n=B.filter(function(q){return q.t===i;}).length;
    h+='<label class="chk"><input type="checkbox" class="tp" value="'+i+'" checked onchange="updAvail()"><span>'+esc(TOPICS[i])+'<small>'+n+' questions</small></span></label>';
  }
  $("topicList").innerHTML=h;
  updAvail();
  try{var b=localStorage.getItem("phil_best");if(b)$("bestInfo").textContent="Best score: "+b+"%";}catch(e){}
}
function selected(){var r=[];document.querySelectorAll(".tp").forEach(function(c){if(c.checked)r.push(parseInt(c.value,10));});return r;}
function selAll(v){document.querySelectorAll(".tp").forEach(function(c){c.checked=v;});updAvail();}
function updAvail(){var s=selected();var n=B.filter(function(q){return s.indexOf(q.t)>-1;}).length;$("availInfo").textContent=n+" questions available in your selected topics (total bank: "+B.length+").";}

function startQuiz(){
  var s=selected();
  if(!s.length){alert("Please choose at least one topic.");return;}
  var src=B.filter(function(q){return s.indexOf(q.t)>-1;});
  if($("order").value==="shuffle")src=shuffle(src);
  var c=$("count").value;
  if(c!=="all")src=src.slice(0,parseInt(c,10));
  lastTopics=s;
  begin(src);
}
function begin(src){
  mode=$("mode").value;
  pool=src.map(function(q){
    var opts=shuffle(q.o.map(function(t,i){return {t:t,c:i===0};}));
    return {t:q.t,q:q.q,e:q.e,opts:opts,ci:opts.findIndex(function(o){return o.c;})};
  });
  idx=0;ans=pool.map(function(){return null;});finished=false;
  $("start").classList.add("hidden");$("result").classList.add("hidden");$("quiz").classList.remove("hidden");
  $("finishBtn").classList.toggle("hidden",false);
  t0=Date.now();clearInterval(tmr);tmr=setInterval(tick,1000);tick();
  render();window.scrollTo(0,0);
}
function tick(){var s=Math.floor((Date.now()-t0)/1000);$("timer").textContent=("0"+Math.floor(s/60)).slice(-2)+":"+("0"+(s%60)).slice(-2);}

function render(){
  var q=pool[idx];
  $("qCount").textContent="Question "+(idx+1)+" of "+pool.length;
  $("topicName").textContent="";
  $("tag").textContent=TOPICS[q.t];
  $("qText").textContent=q.q;
  $("prog").style.width=((idx+1)/pool.length*100)+"%";
  var L="ABCD",h="";
  var locked=(mode==="practice"&&ans[idx]!==null);
  q.opts.forEach(function(o,i){
    var cls="opt";
    if(locked){ if(o.c)cls+=" correct"; else if(ans[idx]===i)cls+=" wrong"; }
    else if(ans[idx]===i)cls+=" sel";
    h+='<button class="'+cls+'" '+(locked?"disabled":"")+' onclick="pick('+i+')"><span class="l">'+L[i]+'.</span><span>'+esc(o.t)+'</span></button>';
  });
  $("opts").innerHTML=h;
  var fb="";
  if(locked){
    var ok=ans[idx]===q.ci;
    fb='<div class="fb '+(ok?"ok":"no")+'"><b>'+(ok?"Correct!":"Wrong.")+'</b> '+(ok?"":"Correct answer: <b>"+esc(q.opts[q.ci].t)+"</b>. ")+esc(q.e)+'</div>';
  }
  $("fb").innerHTML=fb;
  $("prevBtn").disabled=idx===0;
  $("nextBtn").disabled=idx===pool.length-1;
  var g="";
  for(var k=0;k<pool.length;k++){g+='<button class="'+(ans[k]!==null?"done ":"")+(k===idx?"cur":"")+'" onclick="jump('+k+')">'+(k+1)+'</button>';}
  $("qgrid").innerHTML=g;
}
function pick(i){
  if(mode==="practice"&&ans[idx]!==null)return;
  ans[idx]=i;render();
}
function go(d){idx=Math.max(0,Math.min(pool.length-1,idx+d));render();window.scrollTo(0,0);}
function jump(k){idx=k;render();}
function quitQuiz(){if(confirm("Quit this exam? Your progress will be lost.")){clearInterval(tmr);toStart();}}
function toStart(){clearInterval(tmr);$("quiz").classList.add("hidden");$("result").classList.add("hidden");$("start").classList.remove("hidden");buildTopics();window.scrollTo(0,0);}

function finish(){
  var un=ans.filter(function(a){return a===null;}).length;
  if(un>0&&!confirm(un+" question(s) unanswered. Submit anyway?"))return;
  clearInterval(tmr);finished=true;
  var sec=Math.floor((Date.now()-t0)/1000);
  var correct=0,per={};
  pool.forEach(function(q,i){
    per[q.t]=per[q.t]||{c:0,n:0};per[q.t].n++;
    if(ans[i]===q.ci){correct++;per[q.t].c++;}
  });
  var pct=Math.round(correct/pool.length*100);
  $("rScore").textContent=correct+" / "+pool.length+"  ("+pct+"%)";
  var msg=pct>=90?"Excellent! You're ready for the exam.":pct>=75?"Great job! A little more review and you're set.":pct>=60?"Not bad. Review the items you missed.":"Keep studying. Re-read the lessons and try again.";
  $("rMsg").textContent=msg;
  $("rTime").textContent="Time: "+Math.floor(sec/60)+" min "+(sec%60)+" sec";
  var t='<tr><th>Topic</th><th>Score</th></tr>';
  Object.keys(per).sort(function(a,b){return a-b;}).forEach(function(k){
    var p=per[k],pc=Math.round(p.c/p.n*100);
    t+='<tr><td>'+esc(TOPICS[k])+'</td><td><span class="pill '+(pc>=75?"g":"r")+'">'+p.c+'/'+p.n+'</span></td></tr>';
  });
  $("rTopics").innerHTML=t;
  $("retakeWrong").classList.toggle("hidden",correct===pool.length);
  try{var b=parseInt(localStorage.getItem("phil_best")||"0",10);if(pct>b)localStorage.setItem("phil_best",String(pct));}catch(e){}
  $("rvFilter").value="all";renderReview();
  $("quiz").classList.add("hidden");$("result").classList.remove("hidden");window.scrollTo(0,0);
}
function renderReview(){
  var f=$("rvFilter").value,L="ABCD",h="";
  pool.forEach(function(q,i){
    var ok=ans[i]===q.ci;
    if(f==="wrong"&&ok)return;
    h+='<div class="rv '+(ok?"ok":"no")+'"><b class="q">'+(i+1)+'. '+esc(q.q)+'</b>'+
      'Your answer: '+(ans[i]===null?'<i>(skipped)</i>':'<b>'+L[ans[i]]+'. '+esc(q.opts[ans[i]].t)+'</b>')+
      '<br>'+(ok?'':'Correct answer: <b>'+L[q.ci]+'. '+esc(q.opts[q.ci].t)+'</b><br>')+
      (q.e?'<span class="small">'+esc(q.e)+'</span>':'')+'</div>';
  });
  $("review").innerHTML=h||'<p class="center">Perfect score &mdash; nothing to review!</p>';
}
function retake(onlyWrong){
  var src;
  if(onlyWrong){
    src=pool.filter(function(q,i){return ans[i]!==q.ci;}).map(function(q){
      return {t:q.t,q:q.q,e:q.e,o:[q.opts[q.ci].t].concat(q.opts.filter(function(o){return !o.c;}).map(function(o){return o.t;}))};
    });
    if(!src.length)return;
  }else{
    var s=lastTopics.length?lastTopics:selected();
    src=shuffle(B.filter(function(q){return s.indexOf(q.t)>-1;}));
    var c=pool.length;src=src.slice(0,c);
  }
  begin(src);
}
function toggleTheme(){
  document.body.classList.toggle("dark");
  var d=document.body.classList.contains("dark");
  $("themeBtn").textContent=d?"Light mode":"Dark mode";
  try{localStorage.setItem("phil_dark",d?"1":"0");}catch(e){}
}
(function init(){
  try{if(localStorage.getItem("phil_dark")==="1"){document.body.classList.add("dark");$("themeBtn").textContent="Light mode";}}catch(e){}
  buildTopics();
})();
