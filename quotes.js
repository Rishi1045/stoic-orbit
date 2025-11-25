const localQuotes = [
    {
        "text": "Imagine smiling after a slap in the face. Then think of doing it twenty-four hours a day.",
        "author": "Markus Zusak"
    },
    {
        "text": "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "It is the power of the mind to be unconquerable.",
        "author": "Seneca"
    },
    {
        "text": "Warriors should suffer their pain silently.",
        "author": "Erin Hunter"
    },
    {
        "text": "Until we have begun to go without them, we fail to realize how unnecessary many things are. We've been using them not because we needed them but because we had them.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Complaining does not work as a strategy. We all have finite time and energy. Any time we spend whining is unlikely to help us achieve our goals. And it won't make us happier.",
        "author": "Randy Pausch"
    },
    {
        "text": "A Stoic is someone who transforms fear into prudence, pain into transformation, mistakes into initiation, and desire into undertaking.",
        "author": "Taleb Nassim Nicholas"
    },
    {
        "text": "The things you think about determine the quality of your mind.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Feeling too much is a hell of a lot better than feeling nothing.",
        "author": "Nora Roberts"
    },
    {
        "text": "How do you defeat terrorism? Don’t be terrorized.",
        "author": "Salman Rushdie"
    },
    {
        "text": "Always resignation and acceptance. Always prudence and honour and duty. Elinor, where is your heart?",
        "author": "Jane Austen"
    },
    {
        "text": "Misfortune nobly born is good fortune.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Regard a friend as loyal, and you will make him loyal.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "To be everywhere is to be nowhere.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "What really frightens and dismays us is not external events themselves, but the way in which we think about them. It is not things that disturb us, but our interpretation of their significance.",
        "author": "Epictetus"
    },
    {
        "text": "You should live in such a way that there is nothing which you could not as easily tell your enemy as keep to yourself.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Nothing is burdensome if taken lightly, and nothing need arouse one's irritation so long as one doesn't make it bigger than it is by getting irritated.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "There will never come a time when I will be able to resist my emotions.",
        "author": "Louise Erdrich"
    },
    {
        "text": "I hear my silence talked of in every lane; The suppression of a cry is itself a cry of pain.",
        "author": "Darshan Singh"
    },
    {
        "text": "It is not the man who has too little that is poor, but the one who hankers after more.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Today I escaped anxiety. Or no, I discarded it, because it was within me, in my own perceptions — not outside.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "From the philosopher Catulus, never to be dismissive of a friend's accusation, even if it seems unreasonable, but to make every effort to restore the relationship to its normal condition.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Some people avoid thinking deeply in public, only because they are afraid of coming across as suicidal.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "If what you have seems insufficient to you, then though you possess the world, you will yet be miserable.",
        "author": "Seneca"
    },
    {
        "text": "You need to avoid certain things in your train of thought: everything random, everything irrelevant. And certainly everything self-important or malicious.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "In your actions, don't procrastinate. In your conversations, don't confuse. In your thoughts, don't wander. In your soul, don't be passive or aggressive. In your life, don't be all about business.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "It is more necessary for the soul to be cured than the body; for it is better to die than to live badly.",
        "author": "Epictetus"
    },
    {
        "text": "When force of circumstance upsets your equanimity, lose no time in recovering your self-control, and do not remain out of tune longer than you can help.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Remember that all we have is “on loan” from Fortune, which can reclaim it without our permission—indeed, without even advance notice.",
        "author": "Seneca"
    },
    {
        "text": "For death remembered should be like a mirror, Who tells us life’s but breath, to trust it error.",
        "author": "William Shakespeare"
    },
    {
        "text": "My boyfriends have all been as stoical as queen's guards. They'd been patient, committed, and dispassionate, and I'd had to really debase myself to extract any emotion, either grin or grimace, from them.",
        "author": "Koren Zailckas"
    },
    {
        "text": "Thoroughly convinced of the impossibility of his own suit, a high resolve constrained him not to injure that of another. This is a lover's most stoical virtue, as the lack of it is a lover's most venial sin.",
        "author": "Thomas Hardy"
    },
    {
        "text": "Common man's patience will bring him more happiness than common man's power.",
        "author": "Amit Kalantri"
    },
    {
        "text": "Concern should drive us into action and not into a depression. No man is free who cannot control himself.",
        "author": "Pythagoras"
    },
    {
        "text": "It is impossible to lose everything and still be alive.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Nothing, to my way of thinking, is a better proof of a well ordered mind than a man’s ability to stop just where he is and pass some time in his own company.",
        "author": "Seneca"
    },
    {
        "text": "I've come to the point where I never feel the need to stop and evaluate whether or not I am happy. I'm just 'being', and without question, by default, it works.",
        "author": "Criss Jami"
    },
    {
        "text": "Maximum remedium est irae mora.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "And why should we feel anger at the world? As if the world would notice.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Philosophy does not promise to secure anything external for man, otherwise it would be admitting something that lies beyond its proper subject-matter.",
        "author": "Epictetus"
    },
    {
        "text": "It is quite possible to be a good man without anyone realizing it.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "A resistance that dispenses with consolations is always stronger than one which relies on them.",
        "author": "Perry Anderson"
    },
    {
        "text": "Don't be overheard complaining ... not even to yourself.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "For in this Case, we are not to give Credit to the Many, who say, that none ought to be educated but the Free; but rather to the Philosophers, who say, that the Well-educated alone are free.",
        "author": "Epictetus"
    },
    {
        "text": "To the wise, peace of mind is the result of being fine with how things are; to the foolish, the result of things being fine.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "It is better to be despised for simplicity than to suffer agonies from everlasting pretense.",
        "author": "Seneca"
    },
    {
        "text": "Forever seeking, forever moving forward. To strive, to struggle.",
        "author": "Shonjuk Chakma"
    },
    {
        "text": "We are good to others only because we think that that is, or will be, good for us.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "If you are told that such an one speaks ill of you, make no defence against what was said, but answer, He surely knew not my other faults, else he would not have mentioned these only!",
        "author": "Epictetus"
    },
    {
        "text": "Sometimes silence is a sign, not of not knowing what to say, but of knowing when to say what you know.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Man, consider first what the matter is (which you propose to do), then your own nature also, what it is able to bear.",
        "author": "Epictetus"
    },
    {
        "text": "Employers pay with their money for what employees have paid for with portions of their lives.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "There is the mind of a monarch within each of us, wanting to be granted complete freedom of action but not wanting it to be turned against us.",
        "author": "Seneca"
    },
    {
        "text": "I will keep a watch on myself straightway and—the most useful step—review my day. The fact that we do not look back over our lives makes us worse.",
        "author": "Seneca"
    },
    {
        "text": "I examine my entire day and go back over what I have done and said, hiding nothing from myself, passing nothing by.",
        "author": "Seneca"
    },
    {
        "text": "Ordinary riches can be stolen from a man. Real riches cannot. In the treasure-house of your soul, there are infinitely precious things that may not be taken from you.",
        "author": "Oscar Wilde"
    },
    {
        "text": "The ignorant blame others for their own misfortune. To blame oneself is proof of progress. But the wise see all blame as foolishness.",
        "author": "Epictetus"
    },
    {
        "text": "That on which you so pride yourself will be your ruin, you who think yourself to be somebody.",
        "author": "Menander"
    },
    {
        "text": "Your mind is your most powerful ally; master it, and no obstacle will ever stand in your way.",
        "author": "Sira Masetti"
    },
    {
        "text": "We can’t choose what the world throws at us, but we can control how we react to it, and that makes all the difference.",
        "author": "Brian Reese"
    },
    {
        "text": "But there can be no such good except as the soul discovers it for itself within itself.",
        "author": "Lucius Seneca"
    },
    {
        "text": "Virtue alone affords everlasting and peace-giving joy; even if some obstacle arise, it is but like an intervening cloud, which floats beneath the sun but never prevails against it.",
        "author": "Lucius Seneca"
    },
    {
        "text": "Nothing great is produced suddenly, since not even the grape or fig is. If you say to me now that you want a fig, I will answer you that it requires time.",
        "author": "Epictetus"
    },
    {
        "text": "Therefore we ought to exercise ourselves in small things, and beginning with them to proceed to the greater.",
        "author": "Epictetus"
    },
    {
        "text": "For the military community, philosophy isn't something casually debated. But something that should be fully embodied in everyday thought and action.",
        "author": "Franklin C. Annis"
    },
    {
        "text": "All roads to Hades are of equal length",
        "author": "Epictetus"
    },
    {
        "text": "Nothing happens to any creature beyond it’s own natural endurance.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "An open eye in the dark, will find light...",
        "author": "Elijah Santiago"
    },
    {
        "text": "Nothing earthly succeeds by ignoring heaven, nothing heavenly by ignoring the earth.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Conceal a flaw, and the world will imagine the worst.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Stand up straight, not straightened The Gods give us everything, but not all at once.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "In your conversation, don’t dwell at excessive length on your own deeds or adventures. Just because you enjoy recounting your exploits doesn’t mean that others derive the same pleasure from hearing about them.",
        "author": "Massimo Pigliucci"
    },
    {
        "text": "You will feel pain. You need to accept this truth. ... When it comes, accept it; embrace it. Realize it's a sensation like any other...the same as being hot or cold.",
        "author": "Orlando A Sanchez"
    },
    {
        "text": "Forces beyond your control can take away everything you possess except one thing, your freedom to choose how you will respond to the situation.",
        "author": "Harold S. Kushner"
    },
    {
        "text": "Above all, avoid falsehood, every kind of falsehood, especially falseness to yourself. Watch over your own deceitfulness and look into it every hour, every minute.",
        "author": "Fyodor Dostoevsky"
    },
    {
        "text": "...what will you do when you are dead? My name will remain. Write it on a stone, and it will remain. But come, what remembrance of you will there be beyond Nicopolis?",
        "author": "Epictetus"
    },
    {
        "text": "At its core, Stoicism, like the sturdy oak tree, stands firm amidst the torrential downpour of life’s distractions. It teaches us that while we may not command the winds to change, we possess the power to adjust our sails.",
        "author": "Kevin L. Michel"
    },
    {
        "text": "Life will question you in its vital moments. It's up to you in how you'll respond. You might have drifted from the principles that you once followed. You could've indulged in vices or fallen into unthinking habits.",
        "author": "Bremer Acosta"
    },
    {
        "text": "The world might rage around, yet within the Stoic’s mind, a tranquil sea prevails. The Stoic remains anchored, not carried away by the torrents of distraction, but rather cultivating a steadfast presence in each fleeting moment.",
        "author": "Kevin L. Michel"
    },
    {
        "text": "Just as the sun is forever pursued by shadows, so too is our purpose chased by an unending flurry of distractions. They are the specters of our existence, conjured by the ceaseless clatter of the world.",
        "author": "Kevin L. Michel"
    },
    {
        "text": "Distractions adorn themselves in the grandeur of the immediate, urgent, and superficial, dazzling our senses and demanding our attention.",
        "author": "Kevin L. Michel"
    },
    {
        "text": "The Stoic approach is the lighthouse that guides us amidst the tempest, leading us to the land of dreams crafted in the forge of the unyielding present.",
        "author": "Kevin L. Michel"
    },
    {
        "text": "The act of focusing is not simply the mental equivalent of gazing intently at an object. It is a confluence, a harmonious marriage of mind, heart, and will.",
        "author": "Kevin L. Michel"
    },
    {
        "text": "True focus is the ability to summon our mental strength when it is required and to let it rest when it is not.",
        "author": "Kevin L. Michel"
    },
    {
        "text": "Imagine, if you will, a bird in flight. When it must overcome the gusts that hinder its path, it beats its wings with unyielding force. Yet, when it soars high in the sky, it spreads its wings and rides the wind, at peace.",
        "author": "Kevin L. Michel"
    },
    {
        "text": "True focus requires wisdom in choosing the worthy target, courage in maintaining a resolute mind, and prudence in knowing when to exert effort and when to seek rest.",
        "author": "Kevin L. Michel"
    },
    {
        "text": "Pursuing similar results for dissimilar people will make fools of kings and kings of fools.",
        "author": "Ioannis Loukopoulos"
    },
    {
        "text": "One will never be able to control all things that concern an endeavor, but the magic is in riding the wave.",
        "author": "Ioannis Loukopoulos"
    },
    {
        "text": "Strive to articulate your wants loudly so they become interwoven with reality, more than thoughts.",
        "author": "Ioannis Loukopoulos"
    },
    {
        "text": "Verily, life is a series of championships and the joy is to be found in playing the game.",
        "author": "Ioannis Loukopoulos"
    },
    {
        "text": "We should refrain from attempting to change things to fit our narrative of explaining the world, and start changing this narrative to better host the things we experience.",
        "author": "Ioannis Loukopoulos"
    },
    {
        "text": "The reaction that art produces in you has more to do with you than it does with art.",
        "author": "Ioannis Loukopoulos"
    },
    {
        "text": "A good story has no end, it continues being a part of reality well after its last point by forming a union with us.",
        "author": "Ioannis Loukopoulos"
    },
    {
        "text": "The world is asking us the questions, and it couldn’t care less what we expect from it. But here’s the good news: real meaning doesn’t come from what the world gives you, but how you respond to it.",
        "author": "Phil Van Treuren"
    },
    {
        "text": "Birds weren’t given wings just to walk everywhere . . . and you weren’t born with resilience and a beautiful mind just to have an easy life.",
        "author": "Phil Van Treuren"
    },
    {
        "text": "Life is short but life is long",
        "author": "Seneca"
    },
    {
        "text": "Death is nothing to us. When we exist, death is not; and when death exists, we are not.",
        "author": "Epicurus"
    },
    {
        "text": "You are more likely to feel an inner disturbance if you set your heart and mind on something that is beyond your control to obtain.",
        "author": "Brigid Delaney"
    },
    {
        "text": "How much longer are you going to wait to demand the best for yourself? he asked her, as she sat quietly in the back.",
        "author": "Ryan Holiday"
    },
    {
        "text": "You can also commit injustice by doing nothing.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "The closest we can get to “winning” at life is to never give up.",
        "author": "Ioannis Loukopoulos"
    },
    {
        "text": "There will come a day when i will be able to resist and control my emotions... And when that day comes, i will know that i truly made it,",
        "author": "Plandertaker"
    },
    {
        "text": "It matters not how long the action is spun out, but how good the acting is",
        "author": "Seneca"
    },
    {
        "text": "Perchance some day the memory of this sorrow Will even bring delight",
        "author": "Seneca"
    },
    {
        "text": "Speak the truth and above all claim the things you want, at least to yourself.",
        "author": "Ioannis Loukopoulos"
    },
    {
        "text": "The crossing of a blue bridge which bystanders who cannot distinguish from the blue of the horizon deem invisible.",
        "author": "Ioannis Loukopoulos"
    },
    {
        "text": "No action in the human context will succeed without reference to the divine, nor vice versa.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "He is a slave.'' But shall that stand in his way? Show me a man who is not a slave; one is a slave to lust, another to greed, another to ambition, and all men are slaves to fear.",
        "author": "Seneca"
    },
    {
        "text": "The Iliad consists of nothing more than impressions and the use of impressions. An impression prompted Paris to carry off the wife of Menelaus, and an impression prompted Helen to go with him.",
        "author": "Epictetus"
    },
    {
        "text": "We should remember that even Nature's inadvertence has its own charm, its own attractiveness. Take the baking of bread. The loaf splits open here and there, and those very cracks, in one way a failure of the baker's profession, somehow catch the eye and give particular stimulus to our appetite.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "In an era characterized by incessant noise and constant distraction, we often find our minds pulled from one thought to another like a leaf in an October breeze.",
        "author": "Alexander Zenon"
    },
    {
        "text": "The afternoon presents an intersection where the momentum that we have gained in the morning may be either sustained or lost.",
        "author": "Alexander Zenon"
    },
    {
        "text": "The only good and evil in your life lies within you – in your choices.",
        "author": "Alexander Zenon"
    },
    {
        "text": "Humans are not made for sitting at a desk all day. We have been evolving for millions of years to hunt animals through dense forest and vast plains. To walk huge distances in search of water.",
        "author": "Alexander Zenon"
    },
    {
        "text": "Our minds are a sanctuary; a safe haven which is totally impregnable to the outside world. It is only when we allow external problems and anxieties to enter our mind that this sanctuary becomes vulnerable.",
        "author": "Alexander Zenon"
    },
    {
        "text": "To the Stoics, a good life meant living in accordance with nature, both universal nature – accepting the world for what it is, not resisting it because we think it should be different – and our own nature as human beings.",
        "author": "Alexander Zenon"
    },
    {
        "text": "We human beings are not hive animals. We aren’t like bees or ants who just work constantly for the good of the community.",
        "author": "Alexander Zenon"
    },
    {
        "text": "Tomorrow will arrive, come what may. The sun will rise, as it has always done, and will set in the evening when nature commands it.",
        "author": "Alexander Zenon"
    },
    {
        "text": "The events that may befall you tomorrow are not new or novel, and the emotions that you will experience have been felt by countless others throughout the crashing torrent of time.",
        "author": "Alexander Zenon"
    },
    {
        "text": "There will come a day when i will be able to resist and control my emotions... And when that day comes, i will know that i truly made it.",
        "author": "Plandertaker"
    },
    {
        "text": "Time is a river, a violent current of events, glimpsed once and already carried past us, and another one follows and is gone.",
        "author": "Marcus Aurelious"
    },
    {
        "text": "Externals are nothing to a stoic. The falsehoods and artificial limitations of human society are nothing to proponents of the theater principle",
        "author": "Lashon Byrd"
    },
    {
        "text": "As the still dawn breaks and first light graces the horizon, we humans are presented with tremendous opportunity. We are gifted with a fresh start, a blank canvas upon which we can paint however we choose.",
        "author": "Alexander Zenon"
    },
    {
        "text": "By meditating on our thoughts, feelings, and desires, we are encouraging a sense of self-awareness and self-mastery. We observe the whimsical and impulsive movements of our mind without getting caught up in them, and in doing so we develop a greater understanding of ourselves.",
        "author": "Alexander Zenon"
    },
    {
        "text": "We are existing in a thin sliver of light between two potentially infinite portions of darkness.",
        "author": "Alexander Zenon"
    },
    {
        "text": "The only way to know what lies ahead is by continuing onward.",
        "author": "Shonjuk Chakma"
    },
    {
        "text": "True happiness is to enjoy the present, without anxious dependence upon the future.",
        "author": "Seneca"
    },
    {
        "text": "We cannot believe in the fundamental goodness of the world until and unless we ourself become that goodness.",
        "author": "Neel Burton"
    },
    {
        "text": "You never know what will be the consequence of misfortune; or, you never know what will be the consequences of good fortune",
        "author": "Allan Watts"
    },
    {
        "text": "In life our first job is this, to divide and distinguish things into two categories: externals that I cannot control, but the choices I make with regard to them I do control. Where will I find food and bad? In me, in my choices.",
        "author": "Epictetus"
    },
    {
        "text": "Associate with those who will make a better of man. Welcome those whom yourself can improve. Men learn while they teach.",
        "author": "Seneca"
    },
    {
        "text": "For when you have subjected to externals what is your own, then be a slave and do not resist, and do not sometimes choose to be a slave, and sometimes not choose, but with all your mind be one or the other.",
        "author": "Epictetus"
    },
    {
        "text": "if you gape after externals, you must of necessity ramble up and down in obedience to the will of your master. And who is the master? He who has the power over the things which you seek to gain or try to avoid.",
        "author": "Epictetus"
    },
    {
        "text": "The part of life we really live is small. For all the rest of existence is not life, but merely time.",
        "author": "Seneca"
    },
    {
        "text": "Add nothing of your own from within, and that's an end of it.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "People look for retreats for themselves, in the country, by the coast, or in the hills. There is nowhere that a person can find a more peaceful and trouble-free retreat than in his mind. So constantly give yourself this retreat, and renew yourself.",
        "author": "Maya Bennett"
    },
    {
        "text": "Kindness has become so rare that it provokes perplexity about what's sincere and what's deceitful.",
        "author": "Shonjuk Chakma"
    },
    {
        "text": "Having in mind not how bravely I was capable of dying but how far from bravely he was capable of bearing the loss, I commanded myself to live.",
        "author": "Seneca"
    },
    {
        "text": "Thinking of departed friends is to me something sweet and mellow. For when I had them with me it was with the feeling that I was going to lose them, and now that I have lost them I keep the feeling that I have them with me still.",
        "author": "Seneca"
    },
    {
        "text": "Everywhere means nowhere.",
        "author": "Seneca"
    },
    {
        "text": "It is only when you fall that you learn whether you can fly.",
        "author": "Ioannis Loukopoulos"
    },
    {
        "text": "Don’t let the force of an impression when it first hits you knock you off your feet; just say to it, “Hold on a moment; let me see who you are and what you represent. Let me put you to the test.”",
        "author": "Maya Bennett"
    },
    {
        "text": "Be careful to leave your sons well instructed rather than rich, for the hopes of the instructed are better than the wealth of the ignorant.",
        "author": "Maya Bennett"
    },
    {
        "text": "The most terrifying ghosts that haunt us are the ones of our dead dreams, especially if we were the murderers.",
        "author": "Ioannis Loukopoulos"
    },
    {
        "text": "How does one go about persuading the rain to stop?",
        "author": "Ioannis Loukopoulos"
    },
    {
        "text": "The most beautiful things come from the hardest conditions.",
        "author": "Ezedi Souvenir"
    },
    {
        "text": "Take pride in your courage for it leads to difficult situations which, once overcome, leave you more than what you were before. Only in the most extreme of pressures does carbon become diamond",
        "author": "Ioannis Loukopoulos"
    },
    {
        "text": "Do not underestimate the quiet and laid-back individuals because displaying stoicism, at certain times, is a superpower.",
        "author": "Robin S. Baker"
    },
    {
        "text": "Me? I'm a Stoic. Every time my eyes are opened, I am eager to see the world anew.",
        "author": "Ioannis Loukopoulos"
    },
    {
        "text": "Milo's Way- A Haiku Strength sought in small steps, Like Milo's calf on shoulders, Grow with steady will.",
        "author": "Amogh Swamy"
    },
    {
        "text": "You are scared of dying - and, tell me, is the kind of life you lead really any different from being dead?",
        "author": "Seneca"
    },
    {
        "text": "Say good-bye at last to those deceptive prizes more precious to those who hope for them than to those who have won them.",
        "author": "Seneca"
    },
    {
        "text": "Do not trust her seeming calm; in a moment the sea is moved to its depths.",
        "author": "Seneca"
    },
    {
        "text": "If it should ever happen to you to be turned to externals in order to please some person, you must know that you have lost your purpose in life.",
        "author": "Epictetus"
    },
    {
        "text": "Every life without exception is a short one.",
        "author": "Seneca"
    },
    {
        "text": "The best way to have people laugh with you and not at you, is to get ahead of them and laugh at yourself first.",
        "author": "Nate Hamon"
    },
    {
        "text": "So - to the best of your ability - demonstrate your own guilt, conduct inquiries of your own into all the evidence against yourself. Play the part first of prosecutor, then of judge, and finally of pleader in mitigation. Be harsh with yourself at times.",
        "author": "Seneca"
    },
    {
        "text": "It was the first and most striking characteristic of Socrates never to become heated in discourse, never to utter an injurious or insulting word - on the contrary, he persistently bore insult from others and thus put an end to the fray.",
        "author": "Epictetus"
    },
    {
        "text": "Don’t take things too personally. Critique, failures, unwarranted advice - take it to mind, not to heart. What you hear out of the mouths of others are opinions and perspectives.",
        "author": "Nate Hamon"
    },
    {
        "text": "Success is not a stamp of approval given by others.",
        "author": "Nate Hamon"
    },
    {
        "text": "I am acting on behalf of later generations. I am writing down a few things that may be of use to them.",
        "author": "Seneca"
    },
    {
        "text": "Every hour of the day, countless situations arise that call for advice, and for that advice we have to look to philosophy.",
        "author": "Seneca"
    },
    {
        "text": "It's only when you're breathing your last that the way you've spent your time will become apparent, I accept the terms, and feel no dread of the coming judgment.",
        "author": "Seneca"
    },
    {
        "text": "Even as the Sun doth not wait for prayers and incantations to rise, but shines forth and is welcomed by all: so thou also wait not for clapping of hands and shouts and praise to do thy duty; nay, do good of thine own accord, and thou wilt be loved like the Sun.",
        "author": "Epictetus"
    },
    {
        "text": "Amor Fati",
        "author": "Epictetus"
    },
    {
        "text": "Will you never come to a realisation of who you are, what you have been born for and the purpose for which the gift of vision was made in our case?",
        "author": "Epictetus"
    },
    {
        "text": "There was an iron simplicty in the seer. He was like a monolith of logic standing against waves of angry nonsense.",
        "author": "John Steinbeck"
    },
    {
        "text": "Reflect that nothing merits admiration except the spirit, the impressiveness of which prevents it from being impressed by anything.",
        "author": "Seneca"
    },
    {
        "text": "We need to set our affections on some good man and keep him constantly before our eyes, so that we may live as if he were watching us and do everything as if he saw what we were doing.",
        "author": "Seneca"
    },
    {
        "text": "The ability to do without a kingdom is a kingdom.",
        "author": "Seneca"
    },
    {
        "text": "Consider above all else whether you've advanced in philosophy or just in actual years.",
        "author": "Seneca"
    },
    {
        "text": "Life is a series of problems we must navigate with grace - one problem solved, another arises, again and again until we die.",
        "author": "Pamela Anderson"
    },
    {
        "text": "Everything that we see is changing and will soon be gone, and we should bear in mind how many things have already changed over time, like the waters of streams flowing ceaselessly past—an idea that we can call the contemplation of impermanence.",
        "author": "Donald Robertson"
    },
    {
        "text": "Ill Fortune is of more use to men than Good Fortune.",
        "author": "Boethius"
    },
    {
        "text": "Show me one who is sick and yet happy, in peril and yet happy, dying and yet happy, in exile and happy, in disgrace and happy. Show him me. By the gods I would fain see a Stoic.",
        "author": "Epictetus"
    },
    {
        "text": "Well, when do we act like sheep: when we act for the sake of the belly, or of our sex-organs, or at random, or in a filthy fashion, or without due consideration, to what level have we degenerated? To the level of sheep.",
        "author": "Epictetus"
    },
    {
        "text": "Most of us would eventually lose count if we were to literally count our blessings.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Like an attachment to a sparrow: we glimpse it and it’s gone.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "In a little while you too will close your eyes, and soon there will be others mourning the man who buries you.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "A guide, on finding a man who has lost his way, brings him back to the right path - he does not mock and jeer at him and then take himself off. You also must show the unlearned man the truth, and you will see that he will follow.",
        "author": "Epictetus"
    },
    {
        "text": "An apology is usually a disguised request for a key to the cage of guilt or regret.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "To act wise isn’t to act wisely.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "A cup with a broken handle can still handle its task.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Most people would rather have their remarks be misunderstood than be disagreed with.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Where is the harm or surprise in the ignorant behaving as the ignorant do?",
        "author": "Marcus Aurelius"
    },
    {
        "text": "What right hast thou to talk of ill of Fortune whilst keeping all Fortune's better gifts?",
        "author": "Boethius"
    },
    {
        "text": "Nature is content with few things, and with a very little of these.",
        "author": "Boethius"
    },
    {
        "text": "At any moment we may be toppled from our perch and made to do with less—less money, less recognition, less access, less resources. Even the “less-es” that come with age: less mobility, less energy, less freedom.",
        "author": "Ryan Holiday"
    },
    {
        "text": "Precision of thought comes from a tranquil mindset. A presenter can have a competitive edge if they are unmoved by the jabs and provocations that are directed at them",
        "author": "Josh King Madrid"
    },
    {
        "text": "Man, if you are anything, both walk alone and talk to yourself, and do not hide yourself in the chorus. Examine a little at last, look around, stir yourself up, that you may know who you are.",
        "author": "Epictetus"
    },
    {
        "text": "A man asked me to write to Rome on his behalf who, as most people thought, had met with misfortune; for having been before wealthy and distinguished, he had afterwards lost all and was living here.",
        "author": "Epictetus"
    },
    {
        "text": "True instruction is this:--to learn to wish that each thing should come to pass as it does. And how does it come to pass? As the Disposer has disposed it.",
        "author": "Epictetus"
    },
    {
        "text": "We always put ourselves first: the fulfilment of our desire sometimes comes last.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Small talk is one of the most common symptoms of small-mindedness.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Mindfulness is the only doorway to the unhurried life.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "A better attitude towards life is better than a better life, and leads to a better life.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Remember you will die but do brave deeds and endure",
        "author": "J.R. Potts"
    },
    {
        "text": "At the heart of stoicism lay the desire to disappoint oneself before someone else had the chance to do so. Stoic­ism was a crude defense against the dangers of the affections of others, dangers that would take more endurance than a life in the desert to be able to face.",
        "author": "Alain de Botton"
    },
    {
        "text": "Most adult geniuses are more playful than most children.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Fools act wise, not wisely.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Most people usually talk faster than they think.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "The good and the bad occur at all times and will keep happening. We can become lost if we go with the hype of ‘good and bad’ every time.",
        "author": "Tiisetso Maloma"
    },
    {
        "text": "Press on and make all your actions and words cohere and fit with one another, all struck from the same mold.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "If ever you want to find out whether anything has been achieved, observe whether your intentions are the same today as they were yesterday. A change of intention shows that the mind is at sea, drifting here and there as carried by the wind.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Things we wouldn't be willing to pay for if it meant giving up our house for them, or some pleasant or productive estate, we are quite ready to obtain at the cost of anxiety, of danger, of losing our freedom, our decency, our time.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Count yourself fortunate when you are able to live in a manner open to the public—when walls are there for shelter, not for concealment. For as a rule we think we have walls around us not to protect us but to afford greater privacy to our misdeeds.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Flattery looks very much like friendship, indeed not only resembles it but actually wins out against it. A person drinks it in with eager ears and takes it deeply to heart, delighted by the very qualities that make it dangerous.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "A charming enemy comes to me as a friend; faults creep in calling themselves virtues; temerity cloaks itself with the name of courage; cowardice gets called moderation; and timidity passes itself off as caution.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Many millions of people secretly feel caged by employment, marriage, and/or parenthood.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Most people frequently waste their life, mostly in front of a screen.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "We are not the first Who with best meaning have incurred the worst. For thee, oppressèd king, I am cast down. Myself could else outfrown false Fortune’s frown.",
        "author": "William Shakespeare"
    },
    {
        "text": "The first sign of a settled mind is that it can stay in one place and spend time with itself.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Well begun is half done. This is something that depends on the mind; so when one is willing to become good, goodness is in large part achieved.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Prosperity is a restless thing; it drives itself to distraction. It addles the brain, and not always in the same way, for it goads people in different directions—some toward power, others toward self-indulgence.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Even a poisonous snake is safe to handle in cold weather, when it is sluggish. Its venom is still there, but inactive. In the same way, there are many people whose cruelty, ambition, or self-indulgence fails to match the most outrageous cases only by the grace of fortune.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Philosophy neither rejects anyone nor chooses anyone; it shines for all.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Even if you had a lot of life left to live, you would need to parcel out your time sparingly so as to have enough for necessities. As it is, with time in such short supply, what madness it is to learn things that are superfluous.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Paying someone to do something on our behalf is the closest we can get to buying time.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "We are all talented at coming up with plausible excuses.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Being in a hurry gives us the illusion of doubling the length of every second.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Praying deceives us into thinking that we are doing something about what we are praying for.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Difficulty is the foundation of growth, which is the foundation of greatness.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Hatred is as powerful an intoxicant as love.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Fools are often unable to do what needs to be done, because they were doing, or are doing, what need not be done at that time … or at all.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Every goal or desire is a seed of an excuse to be unhappy.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "The present moment is the entirety of reality.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "The passage of time is as real as the movement of an animated object.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Life is not more kind, or less cruel, towards those who take it seriously.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "If one accomplishes some good though with toil, the toil passes, but the good remains; if one does something dishonourable with pleasure, the pleasure passes, but the dishonour remains.",
        "author": "Musonius Rufus"
    },
    {
        "text": "We suffer more in imagination than in reality.",
        "author": "Seneca"
    },
    {
        "text": "Don’t seek for everything to happen as you wish it would, but rather wish that everything happens as it actually will — then your life will flow well.",
        "author": "Epictetus"
    },
    {
        "text": "Better to trip with the feet than with the tongue.",
        "author": "Zeno of Citium"
    },
    {
        "text": "Most adults make adulthood seem like a disease that is caused by a deficiency of playfulness.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "We are often blind to the fact that our situation is not as bad as we think, until it gets worse.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Nature has given to men one tongue, but two ears, that we may hear from others twice as much as we speak.",
        "author": "Epictetus"
    },
    {
        "text": "We cannot really save time. We can merely avoid wasting it.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "We are hurried, not by what is happening, but by what we are desiring.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "You could leave life right now. Let that determine what you do and say and think.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Eternal Spirit of the chainless Mind! Brightest in dungeons, Liberty! thou art, For there thy habitation is the heart—",
        "author": "Lord Byron"
    },
    {
        "text": "It isn't manly to be enraged. Rather gentleness and civility are more human, therefrom more manly.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "The more we value things outside our control, the less control we have.",
        "author": "Seneca"
    },
    {
        "text": "Avoid talking often and excessively about your accomplishments and dangers, for however much you enjoy recounting your dangers, it's not so pleasant for others to hear about your affairs.",
        "author": "Epictetus"
    },
    {
        "text": "Whatever you're going through, there is wisdom from the stoics that can help. In fact, in many cases, they have addressed it explicitly in terms that feel shockingly modern.",
        "author": "Ryan Holiday"
    },
    {
        "text": "Capitalism is disgusted by those whose happiness is not a result of buying … or selling.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Unlearning makes learning at least three times longer than necessary.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Some children’s lives begin before the end of their parents’ childhood.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Conformity eats away individuality.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Every life is a different path to death.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "For making a good voyage a pilot and wind are necessary: and for happiness, reason and art.",
        "author": "Epictetus"
    },
    {
        "text": "Most people celebrate the continuity of their existence so passionately that you would swear they chose to exist.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Our rationality is a visitor.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "It is doubly foolish to underuse what you have overpaid for.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "It is sometimes foolish to assume that someone is wise, or vice versa.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Just as chickens wake up and scream, being reborn is the polar opposite. You are blinded by bliss and numb to such pain.",
        "author": "Jordan Binless"
    },
    {
        "text": "We are food even before we are dead.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Some sentences take seconds to read, but take minutes, hours, days, weeks, months, or even years to understand.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "When you start to lose your temper, remember: There's nothing manly about rage. It's courtesy and kindness that define a human being- and a man. That's who possesses strength and nerves and guts, not the angry whiners.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "That kindness is invincible, provided it's sincere- not ironic or an act. What can even the most vicious person do if you keep treating him with kindness and gently set him straight",
        "author": "Marcus Aurelius"
    },
    {
        "text": "There is a limit to the time assigned to you, and if you don't use it to free yourself it will be gone and will never return.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "But true good fortune is what you make for yourself. Good fortune: good character, good intentions, and good actions.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "It is a humbling practice to make a mental note whenever your assumption turns out to be wrong.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Ideally, a Stoic will be oblivious to the services he does for others, as oblivious as a grapevine is when it yields a cluster of grapes to a vintner.",
        "author": "William B. Irvine"
    },
    {
        "text": "Άριστος τρόπος τοῦ ἀμύνεσθαι τὸ μὴ ἐξομοιοῦσθαι",
        "author": "Marcus Aurelius"
    },
    {
        "text": "We cannot but obey the powers above us. Could I rage and roar as doth the sea  She lies in, yet the end must be as ’tis.",
        "author": "William Shakespeare"
    },
    {
        "text": "When that which we are enjoying is a true good, we feel joy; when it is not, we feel, at best, pleasure.",
        "author": "Neel Burton"
    },
    {
        "text": "We get addicted, not to the substance, but to the effect.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "What is divine deserves our respect because it is good; what is human deserves our affection because it is like us. And our pity too, sometimes, for its inability to tell good from bad- as terrible a blindness as the kind that can't tell white from black.",
        "author": "Marcus Aurelius"
    }
];
