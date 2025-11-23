const localQuotes = [
    {
        "text": "We have two ears and one mouth, so we should listen more than we say.",
        "author": "Zeno of Citium"
    },
    {
        "text": "Man conquers the world by conquering himself.",
        "author": "Zeno of Citium"
    },
    {
        "text": "The goal of life is living in agreement with Nature.",
        "author": "Zeno"
    },
    {
        "text": "Well-being is attained little by little, and nevertheless is no little thing itself.",
        "author": "Zeno of Citium"
    },
    {
        "text": "When a dog is tied to a cart, if it wants to follow, it is pulled and follows... even if they don't want to, they will be compelled to follow what is destined.",
        "author": "Zeno of Citium"
    },
    {
        "text": "All the good are friends of one another.",
        "author": "Zeno of Citium"
    },
    {
        "text": "A friend is our alter ego.",
        "author": "Zeno of Citium"
    },
    {
        "text": "Nothing is more hostile to a firm grasp on knowledge than self-deception.",
        "author": "Zeno of Citium"
    },
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
        "text": "Warriors should suffer their pain silently.",
        "author": "Erin Hunter"
    },
    {
        "text": "It is the power of the mind to be unconquerable.",
        "author": "Seneca"
    },
    {
        "text": "Complaining does not work as a strategy. We all have finite time and energy. Any time we spend whining is unlikely to help us achieve our goals. And it won't make us happier.",
        "author": "Randy Pausch"
    },
    {
        "text": "Until we have begun to go without them, we fail to realize how unnecessary many things are. We've been using them not because we needed them but because we had them.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "A Stoic is someone who transforms fear into prudence, pain into transformation, mistakes into initiation, and desire into undertaking.",
        "author": "Taleb Nassim Nicholas"
    },
    {
        "text": "Feeling too much is a hell of a lot better than feeling nothing.",
        "author": "Nora Roberts"
    },
    {
        "text": "Always resignation and acceptance. Always prudence and honour and duty. Elinor, where is your heart?",
        "author": "Jane Austen"
    },
    {
        "text": "The things you think about determine the quality of your mind.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Misfortune nobly born is good fortune.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Regard [a friend] as loyal, and you will make him loyal.",
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
        "text": "Hunger is by far the best spice.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Show by a cheerful look that you don't need the help or comfort of others. Standing up - not propped up.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "We all die having lived a full life, even those who die while they are being born.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Anxiety is the shadow of what we do not want to lose.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "The triviality of a question does not make a profound answer an impossibility.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "You can wear an expensive watch and still be late.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Life is the struggle of delaying death.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Happiness is sweet; its pursuit, bitter.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "We cannot be too young to die.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Be like a headland: the Waves beat against it continuously, but it stands fast and around it the boiling water dies down.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "One of the main goals and effects of stoicism is to stop an adult from being a crybaby.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "We all too often invite a lie by asking someone how he or she is doing.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "No one is too old to live another day, or too young to die today.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Only those who are stupid mind coming across as stupid.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Sometimes we want not freedom of choice, but freedom from choice.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Complaining about a person is way less annoying when we complain to that person.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Concern should drive us into action and not into a depression. No man is free who cannot control himself.",
        "author": "Pythagoras"
    },
    {
        "text": "To complain about life is to complain about being alive.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Some solutions are seeds of some problems.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "You can be too old to live, but not too young to die.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "We do not need to lose people or things to appreciate them.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Hating our opponent benefits us. Underestimating them benefits them.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "We do things for others for ourselves.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "We must say nothing, when we have nothing to say.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "A wise answer is even more pleasing when it is a response to a foolish question.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Sometimes the only thing you can do is accept the fact that there is nothing you can do.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "It is foolish to expect a fool to act wisely.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Not everything that could have been done should have been done.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "You cannot love what you have become, yet hate what you have overcome.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Learning how to live would take most people at least three lifetimes.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Our efforts do not owe us our desired outcomes.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Freedom of speech does not come with opinions worth listening to.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "It is joyful to see someone who is hopeful in a situation that is hopeless.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Some real kings are drama queens.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "We would rarely waste time if our existence were earned.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Saving money, when buying an unnecessary thing, leads to wasting time, when using the thing.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "For those who follow nature everything is easy and straightforward, whereas for those who fight against her life is just like rowing against the stream.",
        "author": "Seneca"
    },
    {
        "text": "[E]verything which went beyond our actual needs was just so much unnecessary weight, a burden to the man who had to carry it.",
        "author": "Seneca"
    },
    {
        "text": "In order to protect ourselves we must live like doctors and be continually treating ourselves with reason.",
        "author": "Musonius Rufus"
    },
    {
        "text": "[W]e can have the things we need for our ordinary purposes if we will only be content with what the earth has made available on its surface.",
        "author": "Seneca"
    },
    {
        "text": "The things that are essential are acquired with little bother; it is the luxuries that call for toil and effort.",
        "author": "Seneca"
    },
    {
        "text": "[W]hatever happens is never as serious as rumour makes it out to be.",
        "author": "Seneca"
    },
    {
        "text": "Many are the things that have caused terror during the night and been turned into matters of laughter with the coming of daylight.",
        "author": "Seneca"
    },
    {
        "text": "[A] man is wealthy if he has attuned himself to his restricted means and has made himself rich on little.",
        "author": "Seneca"
    },
    {
        "text": "Let me indicate here how men can prove that their words are their own: let them put their preaching into practice",
        "author": "Seneca"
    },
    {
        "text": "All vices are at odds with nature.",
        "author": "Seneca"
    },
    {
        "text": "Zeno is our friend but truth is an even greater friend.",
        "author": "Latin saying"
    },
    {
        "text": "It remains for me to say that who is unwilling to exert himself almost always convicts himself as unworthy of good, since all good is gained by toil.",
        "author": "Musonius Rufus"
    },
    {
        "text": "Resent a thing by all means if it represents an injustice decreed against yourself personally; but if this same constraint is binding on the lowest and the highest alike, then make your peace.",
        "author": "Seneca"
    },
    {
        "text": "[T]he man who lives extravagantly wants his manner of living to be on everybody's lips as long as he is alive. He thinks he is wasting his time if he is not being talked about.",
        "author": "Seneca"
    },
    {
        "text": "If you admit to having derived great pleasures, your duty is not to complain about what has been taken away but to be thankful for what you have been given.",
        "author": "Seneca"
    },
    {
        "text": "Expectation is the only seed of disappointment.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "You cannot continue to hate someone without repeatedly wasting, on them, some of your precious time and mental energy.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Suffering adds spice to life.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "The fact that our minds are problem-solving machines says a lot about the nature of life.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Being in a hurry does not slow down time.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Meditation betters not only the mind but also the brain.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Most people have given back to life the power to make themselves happy.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Enlightenment does not mean making the most of bad situations. It means knowing that every situation is neither good nor bad.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Death is the release of an organism from the prison of life.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "At any given moment, it is a beautiful day in many parts of the world.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Our inability to imagine the length of the rest of existence magnifies our problems.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Suffering and happiness are not mutually exclusive.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Even the worst that has ever happened to you could have been worse.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Life is a game we are all bound to lose.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Judgments are the only possible cause of unhappiness and happiness.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Within, the only place where it is created, is the very last place most pursuers of happiness are likely to go.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "The worst that can happen to anyone will happen to everyone.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Life takes from us only lives we were given by it.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "It is our natural and moral duty as consumers of other living things to someday die.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Not having expected an event makes it seem way better or worse than it really is.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "It is the human race, not the world, that desperately needs to be changed.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "The size of your problem is in your mind.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "It is a curse to be childish, but a blessing to be childlike.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "It takes selfishness to stop someone from killing themself.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "The ability to utter wise words is not exclusive to the wise.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "It is impossible to separate the art of living from the art of dying, because to be living is to be dying.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Being grateful for the shade of a tree is not nearly as honourable as planting a tree.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Being patient with a fool requires one not to be one.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Not complaining is sometimes a show off of tolerance or patience.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Slavery often masquerades as freedom.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "The person you are mad at for being late could be late.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "To live is to owe life to die.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Because of things such as arrogance, alcohol, and promiscuity, some people are each a legend in the unmaking.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "A thing named, misnamed, unnamed, or renamed is still itself.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "To give something or someone your attention is to give it or them a portion of your life.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Death is freedom from life.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Unhappiness and the like often inspire us to perform random acts of unkindness.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Living is the outside of dying.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "A truth is not any less truthful, when it is said by someone who did not discover, or does not understand, it.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "A long life is a curse if you have a short temper.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "You have not yet reaped the sweetest fruits of meditation, if you still do not meditate only to meditate.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "You can look unhappy but feel the opposite. Or vice versa.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "It is humanly impossible to be unhappy while you are dancing or laughing willingly.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Some of the things we are trying to pray away were caused by some of our answered prayers.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "We prefer ourselves into unhappiness.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "To chase pleasure is to be chased by pain.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "There is a correlation between how seriously we take life and how many problems it gives us.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Silence is often the wisest reply.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "An accident is often caused by an attempt to prevent one.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Some of those whose existence you wish could end now do not even know about your existence.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Happiness prefers to live inside those who do not have preferences, because it never gets evicted there.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "The curse of mortality is the other side of the coin of the blessing of life.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "We prefer our way into things such as regret, unhappiness, and anxiety.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "The vast majority of people make complaining seem to be a basic human need.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Seeing your loved one asleep is a great opportunity to practice seeing them dead.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "We are all capable of laughing at what is meant or expected to make us unhappy or angry.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "The wise willingly accept the unwillingness of the foolish to accept what is as part of what is.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "The degree of our happiness is not determined by (what we regard as) the source of our happiness.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Sleep is often a form of escapism.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Human beings are makers, usually of a mountain out of a molehill.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Stoicism is a logical philosophy.",
        "author": "Ron Hall"
    },
    {
        "text": "Life is happening neither to nor for but through us.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Our deaths are not obliged to happen in the same order as our births.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "ANGER is calling to honour the needs that have gone IGNORED, UNMET, + UNSEEN.",
        "author": "Me"
    },
    {
        "text": "Life sometimes delays giving us the thing we are forever praying or working hard for, until it has managed to show us that that thing is not that important, or important at all.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "A book can be read to you, not for you.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Time and money are almost always saved to be wasted.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Whoever then has knowledge of good things, would know how to love them.",
        "author": "Epictetus"
    },
    {
        "text": "A child is one of the most common results of the lack or loss of self-control.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Appreciating what you have is the best cure for wanting what you have not.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "We are born old enough to die.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Whenever an animal is overworking, a human is to blame.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "It is foolish to waste time in order to save money.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Alcohol is the worst thing to mix with anger.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Getting something or someone we want is often a guaranteed way to eventually stop us from wanting it, him, or her.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Having to make a difficult or important decision is sometimes more agonizing than not having a choice.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Wishing is usually an indirect way of feeling sorry for yourself.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Failing can ultimately be way more rewarding than succeeding.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Developing the attitude of not minding how life is happening is better than prolonging your life.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "The mind, unconquered by violent passions, is a citadel, for a man has no fortress more impregnable in which to find refuge and remain safe forever.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "There is no correlation between the degree to which you are confident that you are right and the chances of you not being wrong.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Some people would be ashamed of driving the cars, or living in the houses, some people are showing off.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Our caring about what others think about us is one of the pillars of the economy.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "What does it mean to be getting an education? It means learning to apply natural preconceptions to particular cases as nature prescribes, and distinguishing what is in our power from what is not.",
        "author": "Epictetus"
    },
    {
        "text": "We often mistake assuming or hoping for knowing.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "No, it is events that give rise to fear -- when another has the power over them or can prevent them, that person becomes able to inspire fear.",
        "author": "Epictetus"
    },
    {
        "text": "Take it to mind, not to heart.",
        "author": "Nate Hamon"
    },
    {
        "text": "You have two essential tasks in life: to be a good person and to pursue the occupation that you love. Everything else is a waste of energy and a squandering of your potential.",
        "author": "Ryan Holiday"
    },
    {
        "text": "It usually takes maturity in a child, and immaturity in an adult, not to be on speaking terms with someone.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "No man is good by chance. Virtue is something which must be learned.",
        "author": "Seneca"
    },
    {
        "text": "Don't just say you have read books. Show that through them you have learned to think better.",
        "author": "Epictetus"
    },
    {
        "text": "It is humbling to realize that what you hate (the most) about someone is actually what they love (the most) about themselves.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Some people get killed by water. Some die from dehydration.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "A true believer in God prays only to thank, never to ask; and welcomes, with open arms, every single thing that is happening.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Some people deny the existence of God in order to give themselves credit for their successes. Some accept His existence in order to deny responsibility for their failures.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Change is not always a bad thing: it sometimes takes the form of progress. And is not always a good thing: it sometimes takes the form of regress.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "For I am not everlasting, but a human being, a part of the whole as an hour is a part of the day. Like an hour I must come, and like an hour pass away.",
        "author": "Epictetus"
    },
    {
        "text": "Engineers can prove that a bumblebee, with its heavy body and little bitty wings, can't fly. But nobody tells the bumblebees ... and they fly just fine.",
        "author": "Bill Bowerman"
    },
    {
        "text": "The universe is change, and life mere opinion.",
        "author": "Democrates"
    },
    {
        "text": "We have, not problems, but negative attitudes towards some situations.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "The fact that we are all going to die prevents the vast majority of people from being driven insane by the fact that they are going to die.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "An emotion is a mild mental illness.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Usually, that which could have been better could have been worse.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Giving in to sleep is a great opportunity to practice letting go of life.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "What some people regard as an expression of freedom is actually that of slavery.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Education almost always leaves stupidity intact.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "All too often, a wise or free person is ridiculed, because of ignorance, by fools or slaves.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Escaping death is a temporary victory.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Perhaps I did not always love him so well as I do now. But in such cases as these, a good memory is unpardonable.",
        "author": "Jane Austen"
    },
    {
        "text": "Some things do not make sense, not in themselves, but to some people.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "The fear of being poor or broke is a blessing, if you are a successful entrepreneur; but is a curse, if you want to be an entrepreneur.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "People often give us a piece of their mind with the intention to take away our peace of mind.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Happiness is an inevitable result of embracing, and unhappiness that of rejecting, what is.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "To some of us, these are the good old days in the making.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Hatred and love are equally enslaving.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Equanimity is often mistaken for depression.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "And if you want to know why all this running away cannot help you, the answer is simply this: you are running away in your own company.",
        "author": "Seneca"
    },
    {
        "text": "It takes, not cowardice, but courage to kill yourself.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Some people are a degree of impatience away from wishing a year were only a few weeks long.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Sometimes we are lucky to lose something or someone.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "For our happiness or unhappiness, we have only what we think about something or someone to thank or blame.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Life is 99 percent attitude. Yet for the majority of people, it is the remaining one percent that dominates 99 percent of their life.",
        "author": "Bill Madden"
    },
    {
        "text": "why should I demand from fortune that she should give me this and that rather than demand from myself that I should not ask for them?",
        "author": "Seneca"
    },
    {
        "text": "We cannot have, but can lose, everything.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "We sometimes learn, not from something, but from not having learned from it.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "The second best thing to not chasing success is chasing success that was defined by you, not for you.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "A man is as much a fool for shedding tears because he isn't going to be alive a thousand years from now.",
        "author": "Seneca"
    },
    {
        "text": "We make life even more painful by having expectations and preferences.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Stoicism is Buddhism without the dogma.",
        "author": "Bill Madden"
    },
    {
        "text": "The most common act of violence is the relentless mental violence we perpetrate upon ourselves with nothing other than our thoughts.",
        "author": "Bill Madden"
    },
    {
        "text": "Our mind can be in heaven while our body is in hell. And vice versa.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "That you are about to bury or have just buried your loved one does not make you and your loved ones immortal for a while.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Love, unless it is for life as a whole, is contaminated by things such as our preferences and memories.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Patience is the antidote to the restless poison of the Ego.",
        "author": "Anthon St. Maarten"
    },
    {
        "text": "To be everywhere is to be nowhere.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Confronting the worst-case scenario saps it of much of its anxiety-inducing power. Negative visualization generates a vastly more dependable calm.",
        "author": "Oliver Burkeman"
    },
    {
        "text": "Philosophy calls for simple living, not for doing penance, and the simple way of life need not be a crude one.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "What fortune has made yours is not your own.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "For the Stoics, the ideal state of mind was tranquility... And tranquility was to be achieved not by strenuously chasing after enjoyable experiences, but by cultivating a kind of calm indifference.",
        "author": "Oliver Burkeman"
    },
    {
        "text": "It is a ridiculous thing for a man not to fly from his own badness, which is indeed possible, but to fly from other men's badness, which is impossible.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Sometimes in life we must fight not only without fear, but also without hope.",
        "author": "Alessandro Pertini"
    },
    {
        "text": "There is, I assure you, a medical art for the soul. It is philosophy.",
        "author": "Cicero"
    },
    {
        "text": "It is a great man that can treat his earthenware as if it was silver, and a man who treats his silver as if it was earthenware is no less great.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "The boon that could be given can be withdrawn.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "She would admit fear but not despair.",
        "author": "Candice Millard"
    },
    {
        "text": "Killing a person does not lead to nearly as much pain as creating a human being.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "All that exists is the seed of what will emerge from it.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "An action is at least a billion times less difficult to choose than a reaction.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "The person you are mad at for being late could be dead.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "You cannot be blessed with the ability to be happy without being cursed with the ability to be unhappy.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Some things are made way more appealing than they are by our lack of them.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "We ought to be thankful not only for what we have but also for what we do not have.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "The happiest people are not those who have the most, but those who are the most grateful for what they have.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Even most of those whose wealth was not inherited or won often lose sleep over losing their wealth.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "We have never tried to do most of the things we are dead sure we cannot do.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "There is a correlation between how seriously we take life and the number of problems we have.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Feeling sorry for our bodies ought to be the closest we get to feeling sorry for ourselves.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Every habit and faculty is confirmed and strengthened by the corresponding actions, that of walking by walking, that of running by running.",
        "author": "Epictetus"
    },
    {
        "text": "Where you arrive does not matter as much as what sort of person you are when you arrive there.",
        "author": "Seneca"
    },
    {
        "text": "We ought not, therefore, to give over our hearts for good to any one part of the world. We should live with the conviction: 'I wasn't born for one particular corner: the whole world's my home country.",
        "author": "Seneca"
    },
    {
        "text": "Some of the things we fear exist nowhere but where fear happens.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "It is impossible to trip and fall while walking slowly.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Even the busiest bee does not move from one flower to another as often as an untamed mind moves from one thought to another.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Most people are like all stomachs: they cannot remain satisfied for a long time.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "We are more in control of how much we know than we are of how much we have.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Life is yet to produce someone who is loved by or important to everyone.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "They who always expect the worst are almost always pleasantly surprised.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "It would be foolish to be stoical all the time, you'd wear yourself out for nothing",
        "author": "John-Paul Sartre"
    },
    {
        "text": "As things are, there is about wisdom a nobility and magnificence in the fact that she didn't just fall to a person's lot, that each man owes her to his own efforts.",
        "author": "Seneca"
    },
    {
        "text": "It is not the man who has too little that is poor, but the one who hankers after more.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "From the philosopher Catulus, never to be dismissive of a friend's accusation, even if it seems unreasonable, but to make every effort to restore the relationship to its normal condition.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "The present is all that they can give up, since that is all you have, and what you do not have you cannot lose.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Get busy with life's purpose, toss aside empty hopes, get active in your own rescue-if you care for yourself at all-and do it while you can.",
        "author": "Marcus Aurelius"
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
        "text": "Some people avoid thinking deeply in public, only because they are afraid of coming across as suicidal.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "It is more necessary for the soul to be cured than the body; for it is better to die than to live badly.",
        "author": "Epictetus"
    },
    {
        "text": "Philosophy does not promise to secure anything external for man, otherwise it would be admitting something that lies beyond its proper subject-matter.",
        "author": "Epictetus"
    },
    {
        "text": "[A] resistance that dispenses with consolations is always stronger than one which relies on them.",
        "author": "Perry Anderson"
    },
    {
        "text": "Common man's patience will bring him more happiness than common man's power.",
        "author": "Amit Kalantri"
    },
    {
        "text": "The Well-educated alone are free.",
        "author": "Epictetus"
    },
    {
        "text": "It is impossible to lose everything and still be alive.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "When force of circumstance upsets your equanimity, lose no time in recovering your self-control, and do not remain out of tune longer than you can help.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "The greatest obstacle to living is expectancy, which hangs upon tomorrow and loses today. You are arranging what is in Fortune's control and abandoning what lies in yours.",
        "author": "Seneca"
    },
    {
        "text": "Hour by hour resolve firmly to do what comes to hand with dignity, and with humanity, independence, and justice.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Just as the earth that bears the man who tills and digs it, to bear those who speak ill of them, is a quality of the highest respect.",
        "author": "Thiruvalluvar"
    },
    {
        "text": "Why be concerned about others, come to that, when you've outdone your own self?",
        "author": "Seneca"
    },
    {
        "text": "It does good also to take walks out of doors, that our spirits may be raised and refreshed by the open air and fresh breeze.",
        "author": "Seneca"
    },
    {
        "text": "Someone has to be stoic, for the sake of, in spite of, and in the face of all those who are, not.",
        "author": "Justin K. McFarlane Beau"
    },
    {
        "text": "Even the least of our activities ought to have some end in view.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Love sometimes injures. Friendship always benefits",
        "author": "Seneca the Younger"
    },
    {
        "text": "Fourteen years without a mother had me believe I could be stoic when I finally met her.",
        "author": "Maria V. Snyder"
    },
    {
        "text": "The Greeks not only face facts. They have no desire to escape from them.",
        "author": "Edith Hamilton"
    },
    {
        "text": "I've come to the point where I never feel the need to stop and evaluate whether or not I am happy. I'm just 'being', and without question, by default, it works.",
        "author": "Criss Jami"
    },
    {
        "text": "To the wise, peace of mind is the result of being fine with how things are; to the foolish, the result of things being fine.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "It takes a great degree of tolerance, and that of humility, to strongly disagree with someone, and not express your disagreement.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "It takes the whole of life to learn how to live... it takes the whole of life to learn how to die.",
        "author": "Lucius Seneca"
    },
    {
        "text": "The world is maintained by change- in the elements and in the things they compose. That should be enough for you; treat it as an axiom.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "There is a limit to the time assigned to you, and if you don't use it to free yourself it will be gone and will never return.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Don't waste the rest of your time here worrying about other people- unless it affects the common good. It will keep you from doing anything useful.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Each of us lives only now, this brief instant. The rest has been lived already, or is impossible to see.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "It was for the best. So Nature had no choice but to do it.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Does anything genuinely beautiful need supplementing? No more than justice does- or truth, or kindness, or humility.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "So there are two reasons to embrace what happens. One is that it's happening to you. It was prescribed for you, and it pertains to you. The thread was spun long ago, by the oldest cause of all.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "But true good fortune is what you make for yourself. Good fortune: good character, good intentions, and good actions.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Today I escaped from anxiety. Or no, I discarded it, because it was within me, in my own perceptions- not outside.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "When faced with people's bad behavior, turn around and ask when you have acted like that.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "That kindness is invincible, provided it's sincere- not ironic or an act.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "When you start to lose your temper, remember: There's nothing manly about rage. It's courtesy and kindness that define a human being- and a man.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "We almost never teach or learn when arguing.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "He who has more money or possessions than you is not necessarily happier than you, happy more often than you, or happy like you.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Intelligent people question everything. Stupid people answer every question.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Most people would rather believe something that is not true about something than accept the fact that they do not understand a thing about that thing.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Most people want more than they have without having made the most of what they have.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "It is a humbling practice to make a mental note whenever your assumption turns out to be wrong.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "We live life passively whenever we are not practicing mindfulness.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "A truth whispered is not less truthful. And an untruth shouted is not less untruthful.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Some people are lucky to no longer be, and some are unlucky to still be, alive.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Some of our problems came to us; some, we went to them.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Destroying your mirrors leaves your facial blemishes intact.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "You can be invincible, if you enter into no contest in which it is not in your power to conquer.",
        "author": "Epictetus"
    },
    {
        "text": "The problem with pleasure is that it needs to be intermittent in order to retain its pleasantness.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "It is foolish to give up on yourself. And doubly so to do that before everyone has given up on you.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "99.99% of fools deny their foolishness. The rest underestimate it.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "When conversing, some people regularly stop talking, not to listen, but to rest their tongues.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Let death and exile and every other thing which appears dreadful be daily before your eyes; but most of all death: and you will never think of anything mean nor will you desire anything extravagantly.",
        "author": "Epictetus"
    },
    {
        "text": "Destroying your mirrors hides your ugliness or facial blemishes from only you.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Some of the people who we think care that we hate them do not even care that there are people who love them.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Sometimes you find yourself so grateful that a prayer of yours was not answered that you pray that it be ignored.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "A desired thing often comes with seeds of at least one desire.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "When you are unhappy, happy people are disgusting.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Sometimes silence is a sign, not of not knowing what to say, but of knowing when to say what you know.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Poverty is greatly exaggerated by sanity.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Like great ecologists, great pessimists make us see the beauty of death.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "We subconsciously wish that all of the things we hate but our enemies love were harmful.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "It is human to be angry, but childish to be controlled by anger.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "You can be hurt, not by what others think of you, but by what you think of what they think or you think they think of you.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "A man is as unhappy as he has convinced himself he is.",
        "author": "Seneca"
    },
    {
        "text": "The mind is inclined to zoom in on your problem, or few problems, to an extend that you cannot see your many blessings.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "The probability of something not happening does not decrease as we increase the number of times we worry about the possibility of it happening.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Increasing the strength of our minds is the only way to reduce the difficulty of life.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "It takes patience to nurture patience.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Not even once has life or the weather complained about a human being.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "It is childish to be surprised by something that you knew exists or is possible.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Optimism is an effort.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "When pain comes, it must not derail you from your set virtues. If it does, you have failed to practice your virtues by going with the hype of pain.",
        "author": "Tiisetso Maloma"
    },
    {
        "text": "Change: nothing inherently bad in the process, nothing inherently good in the result.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Most people will leave you with the impression that the main function of our emotions is to cloud our judgement.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "We are generally pleased the most by compliments that are insincere.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "That you have just caught success after chasing it for many years does not mean that death will stop chasing you for at least a few seconds.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "If you lose today every-day, you are lost every-day.",
        "author": "Tiisetso Maloma"
    },
    {
        "text": "What are virtues, if not practiced evenly in both times of joy and in hardships?",
        "author": "Tiisetso Maloma"
    },
    {
        "text": "I value my time so much that undressing is the only thing I am willing to do for sex.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "Having problems is not nearly as tormenting as being had by problems.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "The older you are, and the faster you walk, the crazier you look.",
        "author": "Mokokoma Mokhonoana"
    },
    {
        "text": "You have power over your mind - not outside events. Realize this, and you will find strength.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "The happiness of your life depends upon the quality of your thoughts.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
        "author": "Marcus Aurelius "
    },
    {
        "text": "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love ...",
        "author": "Marcus Aurelius"
    },
    {
        "text": "The best revenge is to be unlike him who performed the injury.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Accept the things to which fate binds you, and love the people with whom fate brings you together,but do so with all your heart.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "The soul becomes dyed with the colour of its thoughts.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "It is not death that a man should fear, but he should fear never beginning to live.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Our life is what our thoughts make it.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "If someone is able to show me that what I think or do is not right, I will happily change, for I seek the truth, by which no one was ever truly harmed.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Whenever you are about to find fault with someone, ask yourself the following question: What fault of mine most nearly resembles the one I am about to criticize?",
        "author": "Marcus Aurelius"
    },
    {
        "text": "I have often wondered how it is that every man loves himself more than all the rest of men, but yet sets less value on his own opinion of himself than on the opinion of others.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "The object of life is not to be on the side of the majority, but to escape finding oneself in the ranks of the insane.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "If it is not right do not do it; if it is not true do not say it.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Very little is needed to make a happy life; it is all within yourself in your way of thinking.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "The best revenge is not to be like your enemy.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Reject your sense of injury and the injury itself disappears.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "How much more grievous are the consequences of anger than the causes of it.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Do not act as if you were going to live ten thousand years. Death hangs over you. While you live, while it is in your power, be good.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Here is a rule to remember in future, when anything tempts you to feel bitter: not \"This is misfortune,\" but \"To bear this worthily is good fortune.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Look well into thyself; there is a source of strength which will always spring up if thou wilt always look.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "How much time he gains who does not look to see what his neighbour says or does or thinks, but only at what he does himself, to make it just and holy.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Your mind will be like its habitual thoughts; for the soul becomes dyed with the color of its thoughts.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Think not so much of what you lack as of what you have.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Disgraceful: for the soul to give up when the body is still going strong.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Do unsavory armpits and bad breath make you angry?",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Soon you'll be ashes or bones. A mere name at most - and even that is just a sound, an echo. The things we want in life are empty, stale, trivial.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Nothing happens to any man that he is not formed by nature to bear.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "to grumble at anything that happens is a rebellion against Nature, in some part of which are bound up the natures of all other things.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "To live a good life: We have the potential for it. If we learn to be indifferent to what makes no difference.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "He that sinneth, sinneth unto himself. He that is unjust, hurts himself, in that he makes himself worse than he was before.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Another useful point to bear in mind: What qualities has nature given us to counter that defect? As an antidote to unkindness it gave us kindness. And other qualities to balance other flaws.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "That which does not make a man worse than he was, also does not make his life worse, nor does it harm him either from without or from within.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Awaken; return to yourself. Now, no longer asleep, knowing they were only dreams, clear-headed again, treat everything around you as a dream.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "he may not be profound, he is always sincere.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Practice even what seems impossible.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Give up your thirst for books so that you do not die a grouch.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Moreover, to endure labour; nor to need many things; when I have anything to do, to do it myself rather than by others; not to meddle with many businesses; and not easily to admit of any slander.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "There is but one light of the sun, though it be intercepted by walls and mountains, and other thousand objects.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "To stop talking about what the good man is like, and just be one.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Waste no more time arguing that a good man should be. Be one.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Dig inside yourself. Inside there is a spring of goodness ready to gush at any moment if you keep digging.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "And to behave in a conciliatory way when people who have angered or annoyed us want to make up.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "The thing itself was no misfortune at all; to endure it and prevail is great good fortune.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "How ridiculous and what a stranger he is who is surprised at anything which happens in life.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "It is man's peculiar duty to love even those who wrong him.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "All that exists is the seed of what will emerge from it.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Is an emerald suddenly flawed if no one admires it?",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Do not waste the remainder of thy life in thoughts about others, when thou dost not refer thy thoughts to some object of common utility.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Surely it is an excellent plan, when you are seated before delicacies and choice foods, to impress upon your imagination that this is the dead body of a fish, that the dead body of a bird or a pig",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Think of yourself as dead. You have lived your life. Now, take what's left and live it properly. What doesn't transmit light creates its own darkness.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "You are a little soul carrying about a corpse, as Epictetus used to say.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Do every act of your life as though it were the very last act of your life.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "What we do now echoes in eternity.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Look back over the past, with its changing empires that rose and fell, and you can foresee the future too.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "The impediment to action advances action. What stands in the way becomes the way.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "The universe is change; our life is what our thoughts make it.",
        "author": "Marcus Aurelius "
    },
    {
        "text": "Remember that very little is needed to make a happy life.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Never esteem anything as of advantage to you that will make you break your word or lose your self-respect.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Receive without conceit, release without struggle.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Your days are numbered. Use them to throw open the windows of your soul to the sun. If you do not, the sun will soon set, and you with it.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "How ridiculous and how strange to be surprised at anything which happens in life",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Life is neither good or evil, but only a place for good and evil.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "If any man despises me, that is his problem. My only concern is not doing or saying anything deserving of contempt.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Whatever anyone does or says, I must be emerald and keep my colour.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Humans have come into being for the sake of each other, so either teach them, or learn to bear them.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Though you break your heart, men will go on as before.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Fire feeds on obstacles",
        "author": "Marcus Aurelius"
    },
    {
        "text": "To love only what happens, what was destined. No greater harmony.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "This is what you deserve. You could be good today. But instead you choose tomorrow.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Self-contraction: the mind's requirements are satisfied by doing what we should, and by the calm it brings to us.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Remember: philosophy requires only what your nature already demands.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "We are all mere nuggets of incense on the one altar. Some burn down now , some later - there is no difference .",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Constantly observe who those are whose approval you wish to have, and what ruling principles they possess.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Do, soul, do; abuse and contemn thyself; yet a while and the time for thee to respect thyself, will be at an end.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "You are a spirit, bearing the weight of a dead body, as Epictetus used to say.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "But cast away the thirst after books, that thou mayest not die murmuring, but cheerfully, truly, and from thy heart thankful to the gods.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Finally, in every event which leads you to sorrow, remember to use this principle: that this is not a misfortune, but that to bear it like a brave man is good fortune.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "..a man cannot lose a thing if he has it not.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Soon you will be dead and none of it will matter",
        "author": "Marcus Aurelius"
    },
    {
        "text": "And why should we feel anger at the world? As if the world would notice!",
        "author": "Marcus Aurelius"
    },
    {
        "text": "So that we may say, that whatsoever is, is but as it were the seed of that which shall be.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Concentrate every minute like a Roman - like a man - on doing what's in front of you with precise and genuine seriousness, tenderly, willingly, with justice.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "HE WHO ACTS UNJUSTLY ACTS IMPIOUSLY.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "that meekness is a thing unconquerable, if it be true and natural, and not affected or hypocritical.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Turn your attention within, for the fountain of all that is good lies within, and it is always ready to pour forth, if you continually delve in.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "In everything that you do, pause and ask yourself if death is a dreadful thing because it deprives you of this",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Be your own master, and look at things as a man, as a human being, as a citizen, as a mortal creature.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "He is so rich, he has no room to shit.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "The sexual embrace can only be compared with music and with prayer.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Whatever time you choose is the right time. Not late, not early.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "To be like the rock that the waves keep crashing over. It stands unmoved and the raging of the sea falls still around it.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Kindness is invincible.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "How soon will time cover all things.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "In an expression of true gratitude, sadness is conspicuous only by its absence",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Since it is possible that thou mayest depart from life this very moment, regulate every act and thought accordingly.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Why all this guesswork? You can see what needs to be done. If you can see the road, follow it.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Everything that happens happens as it should, and if you observe carefully, you will find this to be so.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "And you can also commit injustice by doing nothing.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "All men die, but that not all men die whining",
        "author": "Marcus Aurelius"
    },
    {
        "text": "I was once a fortunate man but at some point fortune abandoned me. But true good fortune is what you make for yourself. Good fortune: good character, good intentions, and good actions.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Art thou angry with him whose armpits stink? Art thou angry with him whose mouth smells foul? What good will this danger do thee?",
        "author": "Marcus Aurelius"
    },
    {
        "text": "that evil must be overcome with good.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "that to expect bad men not to do wrong is madness,",
        "author": "Marcus Aurelius"
    },
    {
        "text": "He who follows reason in all things is both tranquil and active at the same time, and also cheerful and collected.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "What stands in the way becomes the way.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Do nothing against thy will, nor contrary to the community, nor without due examination, nor with reluctancy.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Learn to ask of all questions, 'Why are they doing that?' Starting with your own.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "It is a shame when the soul is first to give way in this life, and the body does not give way.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Let nothing be done rashly, and at random, but all things according to the most exact and perfect rules of art.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Does a man offend your pride? Remember he will be dead soon, as will you.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "hold every hour in your grasp. Lay hold of to-day's task, and you will not need to depend so much upon to-morrow's. While we are postponing, life speeds by.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Be not querulous, be Content with little, be kind, be free; avoid all superfluity, all vain prattling; be magnanimous.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "It stares you in the face. No role is so well suited to philosophy as the one you happen to be in right now.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "All is change. You yourself are continuously changing and being destroyed bit by bit. So is the whole universe.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "He who lives in harmony with himself lives in harmony with the universe.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Nowhere can man find a quieter or more untroubled retreat than in his own soul",
        "author": "Marcus Aurelius"
    },
    {
        "text": "not to walk about in the house in my outdoor dress,",
        "author": "Marcus Aurelius"
    },
    {
        "text": "what stands in the way is the way",
        "author": "marcus aurelius"
    },
    {
        "text": "The soul becomes dyed with the colours of its thoughts.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "We are each of us stronger than we think.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "To-day I have got out of all trouble, or rather I have cast out all trouble, for it was not outside, but within and in my opinions.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Live every day as if they last.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "This thing, what is it in itself, in its own constitution? What is its substance and material?",
        "author": "Marcus Aurelius"
    },
    {
        "text": "A Man's life is dyed the color of his imagination.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Be cheerful also, and seek not external help nor the tranquility which others give. A man then must stand erect, not be kept erect by others.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Does the emerald lose its beauty for lack of admiration?",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Every man is worth just so much as the things about which he busies himself.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Ambition means tying your well-being to what other people say or do. Self-indulgence means tying it to the things that happen to you. Sanity means tying it to your own actions.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Death hangs over thee. While thou livest, while it is in thy power, be good.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "It is in your own power to maintain the beauty of your soul, or to be a decent human being.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Use the setback to practice other virtues.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "How ridiculous not to flee from one's own wickedness, which is possible, yet endeavour to flee from another's, which is not.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "You should always look on human life as short and cheap. Yesterday sperm: tomorrow a mummy or ashes.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "in the ways of Nature there is no evil to be found.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Put from you the belief that I have been wronged and with it will go the feeling. Reject your sense of injury, and the injury itself disappears.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "The universe is transformation; life is opinion.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Give your heart to the trade you have learnt, and draw refreshment from it.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "The whole universe is change and life itself is but what you deem it.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "The universe is change, and life mere opinion",
        "author": "Marcus Aurelius"
    },
    {
        "text": "All is ephemeral, both what remembers and what is remembered.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "At dawn, when you have trouble getting out of bed, tell yourself, \"I have to go to work - as a human being.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Do every act of your life as if it were your last.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Your mind will take on the character of your most frequent thoughts: souls are dyed by thoughts.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Perfection of character: to live your last day, every day, without frenzy, or sloth, or pretense.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "fame in a world like this is worthless.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Everything is interwoven, and the web is holy; none of its parts are unconnected. They are composed harmoniously, and together they compose the world. One world, made up of all things.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Dig deep; the water- goodness- is down there. And as long as you keep digging, it will keep bubbling up",
        "author": "Marcus Aurelius"
    },
    {
        "text": "The noblest kind retribution is to become not like your enemy,",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Thou must be like a promontory of the sea, against which though the waves beat continually, yet it both itself stands, and about it are those swelling waves stilled and quieted.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "refrain from all anger and passion.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Love the discipline you know, and let it support you.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "To wait until the emergency is to be too late.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "The best way of avenging thyself is not to become like [the wrong-doer].",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Each morning, remind yourself that this day may be your last. And when you tuck your children into bed at night, remember that they, too, are mortals who someday will die.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "The world is nothing but change. Our life is only perception.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "The best kind of revenge is, not to become like unto them.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Stick to what's in front of you - idea, action, utterance.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "No random actions, none not based on underlying principles.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Be content to seem what you really are.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Everything is only for a day, both that which remembers and that which is remembered.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Stupidity is expecting figs in winter, or children in old age.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Time is a river, a violent current of events, glimpsed once and already carried past us, and another follows and is gone.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Every living organism is fulfilled when it follows the right path for its own nature.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "What we cannot bear removes us from life; what remains can be borne.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Life is opinion.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "The blazing fire makes flames and brightness out of everything thrown into it.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "No man is happy who does not think himself so.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "All things fade and quickly turn to myth.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Live out your life in truth and justice, tolerant of those who are neither true nor just.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Death is a release from the impressions of the senses, and from desires that make us their puppets, and from the vagaries of the mind, and from the hard service of the flesh.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Anger cannot be dishonest.",
        "author": "Marcus Aurelius "
    },
    {
        "text": "It loved to happen.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "He blind, who cannot see with the eyes of his understanding.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Dig deep within yourself, for there is a fountain of goodness ever ready to flow if you will keep digging.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "No man can rob us of our free will.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Better is what benefits",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Men despise one another and flatter one another; and men wish to raise themselves above one another, and crouch before one another.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinions than our own",
        "author": "Marcus Aurelius"
    },
    {
        "text": "That which is not good for the beehive cannot be good for the bees.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "People exist for one another. You can instruct or endure them.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Look within. Within is the fountain of good, and it will ever bubble up, if you will ever dig.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Whatever happens to you has been waiting to happen since the beginning of time. The twining strands of fate wove both of them together: your own existence and the things that happen to you",
        "author": "Marcus Aurelius"
    },
    {
        "text": "All things fade into the storied past, and in a little while are shrouded in oblivion.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Pride is a master of deception: when you think you're occupied in the weightiest business, that's when he has you in his spell.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "What am I but a little flesh, a little breath, and the thinking part that rules the whole?",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Everything is only for a day, both that which remembers and that which is remembered",
        "author": "Marcus Aurelius"
    },
    {
        "text": "In a little while you will have forgotten everything; in a little while everything will have forgotten you.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Stop talking about what the good man is like, and just be one.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Anger and the sorrow it produces are far more harmful than the things which make us angry.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Do not let the future disturb you, for you will arrive there, if you arrive, with the same reason you now apply to the present.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "All things from eternity are of like forms and come round in a circle.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "Swiftly the remembrance of all things is buried in the gulf of eternity.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "All of us are creatures of a day; the rememberer and the remembered alike.",
        "author": "Marcus Aurelius"
    },
    {
        "text": "strength and honor",
        "author": "Marcus Aurelius"
    },
    {
        "text": "If anyone tells you that a certain person speaks ill of you, do not make excuses about what is said of you but answer, \"He was ignorant of my other faults, else he would not have mentioned these alone.",
        "author": "Epictetus"
    },
    {
        "text": "Wealth consists not in having great possessions, but in having few wants.",
        "author": "Epictetus"
    },
    {
        "text": "Don't explain your philosophy. Embody it.",
        "author": "Epictetus"
    },
    {
        "text": "There is only one way to happiness and that is to cease worrying about things which are beyond the power or our will.",
        "author": "Epictetus"
    },
    {
        "text": "Man is not worried by real problems so much as by his imagined anxieties about real problems",
        "author": "Epictetus"
    },
    {
        "text": "First say to yourself what you would be; and then do what you have to do.",
        "author": "Epictetus"
    },
    {
        "text": "It's not what happens to you, but how you react to it that matters.",
        "author": "Epictetus"
    },
    {
        "text": "If you want to improve, be content to be thought foolish and stupid.",
        "author": "Epictetus"
    },
    {
        "text": "Any person capable of angering you becomes your master; he can anger you only when you permit yourself to be disturbed by him.",
        "author": "Epictetus"
    },
    {
        "text": "The key is to keep company only with people who uplift you, whose presence calls forth your best.",
        "author": "Epictetus"
    },
    {
        "text": "He who laughs at himself never runs out of things to laugh at.",
        "author": "Epictetus"
    },
    {
        "text": "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.",
        "author": "Epictetus"
    },
    {
        "text": "It is impossible for a man to learn what he thinks he already knows.",
        "author": "Epictetus"
    },
    {
        "text": "Circumstances don't make the man, they only reveal him to himself.",
        "author": "Epictetus"
    },
    {
        "text": "People are not disturbed by things, but by the views they take of them.",
        "author": "Epictetus"
    },
    {
        "text": "Only the educated are free.",
        "author": "Epictetus"
    },
    {
        "text": "You are a little soul carrying around a corpse",
        "author": "Epictetus"
    },
    {
        "text": "First learn the meaning of what you say, and then speak.",
        "author": "Epictetus"
    },
    {
        "text": "No man is free who is not master of himself.",
        "author": "Epictetus"
    },
    {
        "text": "Seek not the good in external things;seek it in yourselves.",
        "author": "Epictetus"
    },
    {
        "text": "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
        "author": "Epictetus"
    },
    {
        "text": "Don't seek to have events happen as you wish, but wish them to happen as they do happen, and all will be well with you.",
        "author": "Epictetus"
    },
    {
        "text": "Do not try to seem wise to others.",
        "author": "Epictetus"
    },
    {
        "text": "Know, first, who you are, and then adorn yourself accordingly.",
        "author": "Epictetus"
    },
    {
        "text": "Small-minded people blame others. Average people blame themselves. The wise see all blame as foolishness",
        "author": "Epictetus"
    },
    {
        "text": "If evil be said of thee, and if it be true, correct thyself; if it be a lie, laugh at it.",
        "author": "Epictetus"
    },
    {
        "text": "A ship should not ride on a single anchor, nor life on a single hope",
        "author": "Epictetus"
    },
    {
        "text": "Preach not to others what they should eat, but eat as becomes you and be silent.",
        "author": "Epictetus"
    },
    {
        "text": "If you would be a reader, read; if a writer, write.",
        "author": "Epictetus"
    },
    {
        "text": "You become what you give your attention to.",
        "author": "Epictetus"
    },
    {
        "text": "If you wish to be a writer, write.",
        "author": "Epictetus"
    },
    {
        "text": "Demand not that things happen as you wish, but wish them to happen as they do, and you will go on well.",
        "author": "Epictetus"
    },
    {
        "text": "We are not disturbed by what happens to us, but by our thoughts about what happens to us.",
        "author": "Epictetus"
    },
    {
        "text": "Events do not just happen, but arrive by appointment.",
        "author": "Epictetus"
    },
    {
        "text": "Know you not that a good man does nothing for appearance sake, but for the sake of having done right?",
        "author": "Epictetus"
    },
    {
        "text": "Difficulty shows what men are.",
        "author": "Epictetus"
    },
    {
        "text": "It is not so much what happens to you as how you think about what happens.",
        "author": "Epictetus"
    },
    {
        "text": "Whatever your mission, stick by it as if it were a law and you would be committing sacrilege to betray it.",
        "author": "Epictetus"
    },
    {
        "text": "remain steadfast in pursuing your mission, always willing to shed distractions.",
        "author": "Epictetus"
    },
    {
        "text": "Some things are within our power while others are not.",
        "author": "Epictetus"
    },
    {
        "text": "You are but an appearance, and not absolutely the thing you appear to be.",
        "author": "Epictetus"
    },
    {
        "text": "I cannot stay in harmony if I let myself become upset by things beyond my control.",
        "author": "Epictetus"
    },
    {
        "text": "No man is free unless he is the master of himself.",
        "author": "Epictetus"
    },
    {
        "text": "death is nothing to fear in itself, or Socrates would have run from it.",
        "author": "Epictetus"
    },
    {
        "text": "What, then, is your own? The way you live your life.",
        "author": "Epictetus"
    },
    {
        "text": "It is better to die poor, while free from fear and grief, than to live surrounded by riches and filled with anxiety.",
        "author": "Epictetus"
    },
    {
        "text": "Study, not in order to add anything to your knowledge, but to make your knowledge better.",
        "author": "Epictetus"
    },
    {
        "text": "If you are praised by others, be skeptical of yourself.",
        "author": "Epictetus"
    },
    {
        "text": "Good luck frees many men from punishment, but no man from fear.",
        "author": "Epictetus"
    },
    {
        "text": "It is impossible to learn that which one thinks one already knows.",
        "author": "Epictetus"
    },
    {
        "text": "No person is free who is not master of themselves.",
        "author": "Epictetus"
    },
    {
        "text": "If you act rashly, without regard to consequences, you may defeat your purposes.",
        "author": "Epictetus"
    },
    {
        "text": "Don't hope that events will turn out the way you want, welcome events in whichever way they happen: this is the path to peace.",
        "author": "Epictetus"
    },
    {
        "text": "There is but one way to tranquility of mind and happiness, and that is to account no external things thine own, but to commit all to God.",
        "author": "Epictetus"
    },
    {
        "text": "Whoever is going to listen to the philosophers needs a considerable practice in listening.",
        "author": "Epictetus"
    },
    {
        "text": "If you wish to be good, first believe that you are bad.",
        "author": "Epictetus"
    },
    {
        "text": "Is freedom anything else than the right to live as we wish? Nothing else.",
        "author": "Epictetus"
    },
    {
        "text": "Do not try to seem wise to others. If you want to live a wise life, live it on your own terms and in your own eyes.",
        "author": "Epictetus"
    },
    {
        "text": "Don't live by your own rules, but in harmony with nature",
        "author": "Epictetus"
    },
    {
        "text": "We suffer not from the events in our lives but from our judgement about them.",
        "author": "Epictetus"
    },
    {
        "text": "What concerns me is not the way things are, but the way people think things are.",
        "author": "Epictetus"
    },
    {
        "text": "If they are wise, do not quarrel with them; if they are fools, ignore them.",
        "author": "Epictetus"
    },
    {
        "text": "Men are disturbed not by the things that happen, but by their opinion of the things that happen.",
        "author": "Epictetus"
    },
    {
        "text": "Circumstances do not rise to meet our expectations. Events happen as they do. People behave as they are. Embrace what you actually get.",
        "author": "Epictetus"
    },
    {
        "text": "Who, then, is the invincible human being? One who can be disconcerted by nothing that lies outside the sphere of choice.",
        "author": "Epictetus"
    },
    {
        "text": "Adopt new habits yourself: consolidate your principles by putting them into practice.",
        "author": "Epictetus"
    },
    {
        "text": "Tell yourself what you want to be, then act your part accordingly.",
        "author": "Epictetus"
    },
    {
        "text": "We should realize that an opinion is not easily formed unless a person says and hears the same things every day and practises them in real life.",
        "author": "Epictetus"
    },
    {
        "text": "It is impossible to begin to learn that which one thinks one already knows.",
        "author": "Epictetus"
    },
    {
        "text": "Protect what belongs to you at all costs; don't desire what belongs to another.",
        "author": "Epictetus"
    },
    {
        "text": "Control thy passions lest they take vengeance on thee.",
        "author": "Epictetus"
    },
    {
        "text": "I must die; so must I die groaning too?",
        "author": "Epictetus"
    },
    {
        "text": "Difficulties are things that show a person what they are.",
        "author": "Epictetus"
    },
    {
        "text": "Ask not that events should happen as you will, but let your will be that events should happen that you will have peace.",
        "author": "Epictetus"
    },
    {
        "text": "People are strange, they neither wish to live nor die.",
        "author": "Epictetus"
    },
    {
        "text": "The fear of death stems from the view that it is fearful.",
        "author": "Epictetus"
    },
    {
        "text": "Avoid banquets which are given by strangers and by ignorant persons.",
        "author": "Epictetus"
    },
    {
        "text": "But until he succeeds in suppressing his lust and anxiety, how is he really free?",
        "author": "Epictetus"
    },
    {
        "text": "To pay homage to beauty is to admire Nature; to admire Nature is to worship God.",
        "author": "Epictetus"
    },
    {
        "text": "Whenever misfortune befalls you, ask yourself how you would react if it were someone else in the same situation.",
        "author": "Epictetus"
    },
    {
        "text": "What is the product of virtue? Tranquillity.",
        "author": "Epictetus"
    },
    {
        "text": "the World turns aside to let any man pass who knows where he is going.",
        "author": "Epictetus"
    },
    {
        "text": "So what oppresses and scares us? It is our own thoughts, obviously.",
        "author": "Epictetus"
    },
    {
        "text": "Freedom is not attained through the satisfaction of desires, but through the suppression of desires.",
        "author": "Epictetus"
    },
    {
        "text": "When you desire something outside your sphere of power, you set yourself up for disappointment",
        "author": "Epictetus"
    },
    {
        "text": "If you have nothing better to do than praise me for it, then my speech was a failure.",
        "author": "Epictetus"
    },
    {
        "text": "Continually remind yourself that you are a mortal being, and someday will die.",
        "author": "Epictetus"
    },
    {
        "text": "If you want to be respected, start by respecting yourself.",
        "author": "Epictetus"
    },
    {
        "text": "Wisdom's seat is higher; she trains not the hands, but is mistress of our minds.",
        "author": "Epictetus"
    },
    {
        "text": "No person is free who is not master of themselves.",
        "author": "Epictetus"
    },
    {
        "text": "Know, first, who you are; and then adorn yourself accordingly.",
        "author": "Epictetus"
    },
    {
        "text": "Working within our sphere of control, we are naturally free, independent, and strong. Beyond that sphere, we are weak, limited, and dependent.",
        "author": "Epictetus"
    },
    {
        "text": "It is not your concern by what means something returns to the Source from which it came.",
        "author": "Epictetus"
    },
    {
        "text": "Do not try to seem wise to others.",
        "author": "Epictetus"
    },
    {
        "text": "Imagine for yourself a character, a model personality, whose example you determine to follow, in private as well as in public.",
        "author": "Epictetus"
    },
    {
        "text": "Never depend on the admiration of others. There is no strength in it. Personal merit cannot be derived from an external source.",
        "author": "Epictetus"
    },
    {
        "text": "It is not so much what happens to you as how you think about what happens.",
        "author": "Epictetus"
    },
    {
        "text": "If you would cure anger, do not feed it.",
        "author": "Epictetus"
    },
    {
        "text": "You are but an appearance, and not absolutely the thing you appear to be.",
        "author": "Epictetus"
    },
    {
        "text": "Each time an obstacle arises, remind yourself of this truth. While it may hinder some part of you, it cannot constrain your true self.",
        "author": "Epictetus"
    },
    {
        "text": "End the habit of despising things that are not within your power,",
        "author": "Epictetus"
    },
    {
        "text": "You only have to doze a moment, and all is lost. For ruin and salvation both have their source inside you.",
        "author": "Epictetus"
    },
    {
        "text": "In prosperity it is very easy to find a friend; but in adversity it is most difficult of all things.",
        "author": "Epictetus"
    },
    {
        "text": "We are disturbed not by what happens to us, but by our thoughts about what happens.",
        "author": "Epictetus The Philosopher"
    },
    {
        "text": "Proper preparation for the future consists of forming good personal habits.",
        "author": "Epictetus"
    },
    {
        "text": "Some things are up to us, and some things are not up to us.",
        "author": "Epictetus"
    },
    {
        "text": "Loss and sorrow are only possible with respect to things we own.",
        "author": "Epictetus"
    },
    {
        "text": "Pain too is just a scary mask: look under it and you will see. The body sometimes suffers, but relief is never far behind.",
        "author": "Epictetus"
    },
    {
        "text": "And who can give to another the things which he has not himself?",
        "author": "Epictetus"
    },
    {
        "text": "if you know you are in the right, why fear those who misjudge you?",
        "author": "Epictetus"
    },
    {
        "text": "You are invincible if nothing outside the will can disconcert you.",
        "author": "Epictetus"
    },
    {
        "text": "There is nothing more inspiring than a speaker who makes clear to his audience that he has need of them.",
        "author": "Epictetus"
    },
    {
        "text": "Do not seek for things to happen the way you want them to; rather, wish that what happens happen the way it happens: then you will be happy.",
        "author": "Epictetus"
    },
    {
        "text": "Let silence be your general rule; or say only what is necessary and in few words.",
        "author": "Epictetus"
    },
    {
        "text": "Remember from now on whenever something tends to make you unhappy, draw on this principle: 'This is no misfortune; but bearing with it bravely is a blessing.",
        "author": "Epictetus"
    },
    {
        "text": "So don't make a show of your philosophical learning to the uninitiated, show them by your actions what you have absorbed.",
        "author": "Epictetus"
    },
    {
        "text": "He who exercises wisdom, exercises the knowledge which is about God.",
        "author": "Epictetus"
    },
    {
        "text": "Men are disturbed not by things, but by the view which they take of them.",
        "author": "Epictetus"
    },
    {
        "text": "There is a time and place for diversion and amusements, but you should never allow them to override your true purposes.",
        "author": "Epictetus"
    },
    {
        "text": "Never say about anything, I have lost it, but only I have given it back.",
        "author": "Epictetus"
    },
    {
        "text": "Restrict yourself to choice and refusal; and exercise them carefully, with discipline and detachment.",
        "author": "Epictetus"
    },
    {
        "text": "It is not events that disturb people, it is their judgements concerning them.",
        "author": "Epictetus"
    },
    {
        "text": "Freedom is not procured by a full enjoyment of what is desired, but by controlling the desire.",
        "author": "Epictetus"
    },
    {
        "text": "Fortify yourself with contentment for this is an impregnable fortress.",
        "author": "Epictetus"
    },
    {
        "text": "It is better to die of hunger having lived without grief and fear, than to live with a troubled spirit, amid abundance",
        "author": "Epictetus"
    },
    {
        "text": "We have two ears and one mouth so that we can listen twice as much as we speak.",
        "author": "Epictetus"
    },
    {
        "text": "Either God wants to abolish evil, and cannot; or he can, but does not want to.",
        "author": "Epictetus"
    },
    {
        "text": "Men are not afraid of things, but of how they view them.",
        "author": "Epictetus"
    },
    {
        "text": "It is our attitude toward events, not events themselves, which we can control. Nothing is by its own nature calamitous -- even death is terrible only if we fear it.",
        "author": "Epictetus"
    },
    {
        "text": "An ignorant person is inclined to blame others for his own misfortune. To blame oneself is proof of progress. But the wise man never has to blame another or himself.",
        "author": "Epictetus"
    },
    {
        "text": "No great thing is created suddenly.",
        "author": "Epictetus"
    },
    {
        "text": "Give me by all means the shorter and nobler life, instead of one that is longer but of less account!",
        "author": "Epictetus"
    },
    {
        "text": "It is unrealistc to expect people to see you as you see yourself.",
        "author": "Epictetus"
    },
    {
        "text": "Freedom is secured not by the fulfilling of men's desires, but by the removal of desire.",
        "author": "Epictetus"
    },
    {
        "text": "On the occasion of every accident that befalls you, remember to turn to yourself and inquire what power you have for turning it to use.",
        "author": "Epictetus"
    },
    {
        "text": "You may fetter my leg, but Zeus himself cannot get the better of my free will.",
        "author": "Epictetus"
    },
    {
        "text": "The more we value things outside our control, the less control we have.",
        "author": "Epictetus"
    },
    {
        "text": "No person is free who is not master of himself.",
        "author": "Epictetus"
    },
    {
        "text": "Check your passions that you may not be punished by them.",
        "author": "Epictetus"
    },
    {
        "text": "You're not yet Socrates, but you can still live as if you want to be him.",
        "author": "Epictetus"
    },
    {
        "text": "The husbandman deals with land; physicians and trainers with the body; the wise man with his own Mind.",
        "author": "Epictetus"
    },
    {
        "text": "Never say of anything that I've lost it, only that Ive given it back.",
        "author": "Epictetus"
    },
    {
        "text": "Who is a friend?\" his answer was, \"A second self (alter ego).",
        "author": "Epictetus"
    },
    {
        "text": "End the habit of despising things that are not within your power, and apply your aversion to things that are within your power.",
        "author": "Epictetus"
    },
    {
        "text": "First say to yourself what you would be;and then do what you have to do.",
        "author": "Epictetus"
    },
    {
        "text": "Asked, Who is the rich man? Epictetus replied, \"He who is content.",
        "author": "Epictetus"
    },
    {
        "text": "When you are offended at any man's fault, turn to yourself and study your own failings. Then you will forget your anger.",
        "author": "Epictetus"
    },
    {
        "text": "Don't live by your own rules, but in harmony with nature",
        "author": "Epictetus"
    },
    {
        "text": "We suffer not from the events in our lives but from our judgement about them.",
        "author": "Epictetus"
    },
    {
        "text": "The essence of philosophy is that a man should so live that his happiness shall depend as little as possible on external things.",
        "author": "Epictetus"
    },
    {
        "text": "Men are disturbed not by the things that happen, but by their opinion of the things that happen.",
        "author": "Epictetus"
    },
    {
        "text": "For as long as the Source entrusts something to your hands, treat it as something borrowed, like a traveller at an inn.",
        "author": "Epictetus"
    },
    {
        "text": "only judge your own thoughts, desires, and actions as good or evil.",
        "author": "Epictetus"
    },
    {
        "text": "It is not the events but our viewpoint toward events that is the determining factor.",
        "author": "Epictetus"
    },
    {
        "text": "There is no shame in making an honest effort.",
        "author": "Epictetus"
    },
    {
        "text": "Freedom is not archived by satisfying desire, but by eliminating it.",
        "author": "Epictetus"
    },
    {
        "text": "Never say that I have taken it, only that I have given it back.",
        "author": "Epictetus"
    },
    {
        "text": "For it is not death or pain that is to be feared, but the fear of pain or death.",
        "author": "Epictetus"
    },
    {
        "text": "When someone is properly grounded in life, they shouldn't have to look outside themselves for approval.",
        "author": "Epictetus"
    },
    {
        "text": "no man is free until he s a master of himself!!",
        "author": "epictitus"
    },
    {
        "text": "No one is ever unhappy because of someone else.",
        "author": "Epictetus"
    },
    {
        "text": "Man is troubled not by events, but by the meaning he gives to them.",
        "author": "Epictetus"
    },
    {
        "text": "On the occasion of every accident (event) that befalls you, remember to turn to yourself and inquire what power you have for turning it to use.",
        "author": "Epictetus"
    },
    {
        "text": "People are not disturbed by things, but by the view they take of them.",
        "author": "Epictetus"
    },
    {
        "text": "Do not wish that all things will go well with you, but that you will go well with all things.",
        "author": "Epictetus"
    },
    {
        "text": "It is the nature of the wise to resist pleasures, but the foolish to be a slave to them.",
        "author": "Epictetus"
    },
    {
        "text": "If you wish to be a writer; write!",
        "author": "Epictetus"
    },
    {
        "text": "Prefer enduring satisfaction to immediate gratification.",
        "author": "Epictetus"
    },
    {
        "text": "Lucky is the man who dies at work.",
        "author": "Epictetus"
    },
    {
        "text": "Don't put your purpose in one place and expect to see progress made somewhere else.",
        "author": "Epictetus"
    },
    {
        "text": "We cannot choose our external circumstances, but we can always choose how we respond to them",
        "author": "Epictetus"
    },
    {
        "text": "Neither should a ship rely on one small anchor, nor should life rest on a single hope.",
        "author": "Epictetus"
    },
    {
        "text": "A city is not adorned by external things, but by the virtue of those who dwell in it.",
        "author": "Epictetus"
    },
    {
        "text": "Very little is needed for everything to be upset and ruined, only a slight lapse in reason.",
        "author": "Epictetus"
    },
    {
        "text": "Everyone's life is a warfare, and that long and various.",
        "author": "Epictetus"
    },
    {
        "text": "If thy brother wrongs thee, remember not so much his wrong-doing, but more than ever that he is thy brother.",
        "author": "Epictetus"
    },
    {
        "text": "We are at the mercy of whoever wields authority over the things we either desire or detest.",
        "author": "Epictetus"
    },
    {
        "text": "Your aim should be to view the world as an integrated whole, to faithfully incline your whole being toward the highest good, and to adopt the will of nature as your own.",
        "author": "Epictetus"
    },
    {
        "text": "What did I lack then, anyway?",
        "author": "Epictetus"
    },
    {
        "text": "The world turns aside to let any man pass who knows where he is going",
        "author": "Epictetus"
    },
    {
        "text": "Liberty is lost unless we despise those things which put the yoke upon our necks.",
        "author": "Epictetus"
    },
    {
        "text": "Desire to become pure, and, once pure, you will be at ease with yourself, and comfortable in the company of God.",
        "author": "Epictetus"
    },
    {
        "text": "So why take on the burden of matters which you cannot answer for? You are only making unnecessary problems for yourself.",
        "author": "Epictetus"
    },
    {
        "text": "Faithfulness is the antidote to bitterness and confusion.",
        "author": "Epictetus"
    },
    {
        "text": "Stop honouring externals, quit turning yourself into the tool of mere matter, or of people who can supply you or deny you those material things.",
        "author": "Epictetus"
    },
    {
        "text": "You will never have to experience defeat if you avoid contests whose outcome is outside your control.",
        "author": "Epictetus"
    },
    {
        "text": "There is no shame in making an honest effort.",
        "author": "Epictetus"
    },
    {
        "text": "If you want to improve, you must be content to be thought foolish and stupid.",
        "author": "Epictetus"
    },
    {
        "text": "When you do anything from a clear judgment that it ought to be done, never shrink from being seen to do it, even though the world should misunderstand it.",
        "author": "Epictetus"
    },
    {
        "text": "Sometimes even to live is an act of courage.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Luck is what happens when preparation meets opportunity.",
        "author": "Seneca"
    },
    {
        "text": "All cruelty springs from weakness.",
        "author": "Seneca"
    },
    {
        "text": "We suffer more often in imagination than in reality",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Difficulties strengthen the mind, as labor does the body.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "You act like mortals in all that you fear, and like immortals in all that you desire",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "As is a tale, so is life: not how long it is, but how good it is, is what matters.",
        "author": "Seneca"
    },
    {
        "text": "If a man knows not to which port he sails, no wind is favorable.",
        "author": "Seneca the Younger"
    },
    {
        "text": "It is not that we have so little time but that we lose so much.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Begin at once to live, and count each separate day as a separate life.",
        "author": "Seneca"
    },
    {
        "text": "He who is brave is free",
        "author": "Seneca"
    },
    {
        "text": "No man was ever wise by chance",
        "author": "Seneca"
    },
    {
        "text": "Associate with people who are likely to improve you.",
        "author": "Seneca"
    },
    {
        "text": "He suffers more than necessary, who suffers before it is necessary.",
        "author": "Seneca"
    },
    {
        "text": "Only time can heal what reason cannot.",
        "author": "Seneca"
    },
    {
        "text": "Most powerful is he who has himself in his own power.",
        "author": "Seneca"
    },
    {
        "text": "Therefore it is better to conquer our grief than to deceive it.",
        "author": "Seneca"
    },
    {
        "text": "Withdraw into yourself, as far as you can.",
        "author": "Seneca"
    },
    {
        "text": "A ship which looms large in the river seems tiny when on the ocean.",
        "author": "Seneca"
    },
    {
        "text": "Inwardly, we ought to be different in every respect, but our outward dress should blend in with the crowd.",
        "author": "Seneca"
    },
    {
        "text": "On Epicurus; He says: \"Contended poverty is an honourable estate.\" Indeed, if it is contented, it is not poverty at all. It is not the man who has little, but the man who craves more, that is poor.",
        "author": "Seneca"
    },
    {
        "text": "It is indeed foolish to be unhappy now because you may be unhappy at some future time.",
        "author": "Seneca"
    },
    {
        "text": "As things are, there is about wisdom a nobility and magnificence in the fact that she didn't just fall to a person's lot, that each man owes her to his own efforts.",
        "author": "Seneca"
    },
    {
        "text": "It does not matter how many books you have, but how good the books are which you have.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "It is difficult to bring people to goodness with lessons, but it is easy to do so by example.",
        "author": "Seneca"
    },
    {
        "text": "He who spares the wicked injures the good.",
        "author": "Seneca"
    },
    {
        "text": "It is a rough road that leads to the heights of greatness.",
        "author": "Seneca"
    },
    {
        "text": "It's not because things are difficult that we dare not venture. It's because we dare not venture that they are difficult.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "It is more civilized to make fun of life than to bewail it.",
        "author": "Seneca"
    },
    {
        "text": "The mind that is anxious about future events is miserable.",
        "author": "Seneca"
    },
    {
        "text": "Whatever can happen at any time can happen today.",
        "author": "Seneca"
    },
    {
        "text": "To win true freeedom you must be a slave to philosophy.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Of this one thing make sure against your dying day - that your faults die before you do.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "There is no enjoying the possession of anything valuable unless one has someone to share it with",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Beyond all things is the sea",
        "author": "Seneca"
    },
    {
        "text": "The best ideas are common property",
        "author": "Seneca"
    },
    {
        "text": "No man is crushed by misfortune unless he has first been deceived by prosperity",
        "author": "Seneca,"
    },
    {
        "text": "If you live in harmony with nature you will never be poor; if you live according what others think, you will never be rich.",
        "author": "Seneca"
    },
    {
        "text": "Life is like a play: it's not the length, but the excellence of the acting that matters.",
        "author": "Seneca"
    },
    {
        "text": "Enjoy present pleasures in such a way as not to injure future ones.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Wealth is the slave of a wise man. The master of a fool",
        "author": "Seneca"
    },
    {
        "text": "As long as you live, keep learning how to live.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "The sun also shines on the wicked.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Leisure without books is death, and burial of a man alive.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "A sword never kills anybody; it is a tool in the killer's hand.",
        "author": "Seneca"
    },
    {
        "text": "Every new beginning comes from some other beginning's end.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Often a very old man has no other proof of his long life than his age.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "We are more often frightened than hurt; and we suffer more from imagination than from reality",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "A gift consists not in what is done or given, but in the intention of the giver or doer.",
        "author": "Seneca"
    },
    {
        "text": "We learn not in the school, but in life.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Life is long if you know how to use it.",
        "author": "Seneca"
    },
    {
        "text": "Nothing is more honorable than a grateful heart.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "There is no genius without a touch of madness.",
        "author": "Seneca"
    },
    {
        "text": "To wish to be well is a part of becoming well.",
        "author": "Seneca"
    },
    {
        "text": "While we wait for life, life passes",
        "author": "Seneca"
    },
    {
        "text": "I am not born for one corner; the whole world is my native land.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Fire tests gold, suffering tests brave men.",
        "author": "Seneca"
    },
    {
        "text": "Drunkenness is nothing but voluntary madness",
        "author": "Seneca"
    },
    {
        "text": "Brave men rejoice in adversity, just as brave soldiers triumph in war.",
        "author": "Seneca"
    },
    {
        "text": "It is not because things are difficult that we do not dare, it is because we do not dare that they are difficult.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Let us say what we feel, and feel what we say; let speech harmonize with life.",
        "author": "Seneca"
    },
    {
        "text": "Can you no longer see a road to freedom? It's right in front of you. You need only turn over your wrists.",
        "author": "Seneca"
    },
    {
        "text": "Throw aside all hindrances and give up your time to attaining a sound mind",
        "author": "Seneca"
    },
    {
        "text": "It is a great thing to know the season for speech and the season for silence",
        "author": "Seneca"
    },
    {
        "text": "Fidelity purchased with money, money can destroy.",
        "author": "Seneca"
    },
    {
        "text": "As it is with a play, so it is with life - what matters is not how long the acting lasts, but how good it is.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "While we are postponing, life speeds by",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Fire tests gold and adversity tests the brave.",
        "author": "Seneca"
    },
    {
        "text": "It is a denial of justice not to stretch out a helping hand to the fallen; that is the common right of humanity.",
        "author": "Seneca"
    },
    {
        "text": "Nothing, Lucilius, is ours, except time. We were entrusted by nature with the ownership of this single thing, so fleeting and slippery that anyone who will can oust us from possession.",
        "author": "Seneca"
    },
    {
        "text": "Why be concerned about others, come to that, when you've outdone your own self?",
        "author": "Seneca"
    },
    {
        "text": "As often as I have been amongst men, I have returned less a man.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Most powerful is he who has himself in his power.",
        "author": "Lucius Amaeus Seneca"
    },
    {
        "text": "However much you possess there's someone else who has more, and you'll be fancying yourself to be short of things you need to exact extent to which you lag behind him.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "It is our conscience, not our pride, that has put doorkeepers at our doors.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "The happy life is a life that is in harmony with its own nature.",
        "author": "Seneca"
    },
    {
        "text": "We must indulge the mind and from time to time allow it the leisure which is its food and strength.",
        "author": "Seneca"
    },
    {
        "text": "Hurry up and live.",
        "author": "Seneca"
    },
    {
        "text": "Conversation has a kind of charm about it, an insinuating and insidious something that elicits secrets just like love or liquor.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Men do not care how nobly they live, but only how long, although it is within the reach of every man to live nobly, but within no man's power to live long.",
        "author": "Seneca"
    },
    {
        "text": "You ask what is the proper limit to a person's wealth? First, having what is essential, and second, having what is enough.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "When a mind is impressionable and has none too firm a hold on what is right, it must be rescued from the crowd: it is so easy for it to go over to the majority.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "the more a mind takes in the more it expands.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "All things that are still to come lie in uncertainty; live straightway!",
        "author": "Seneca"
    },
    {
        "text": "O how many noble deeds of women are lost in obscurity!",
        "author": "Seneca"
    },
    {
        "text": "While the fates permit, live happily; life speeds on with hurried step, and with winged days the wheel of the headlong year is turned.",
        "author": "Seneca"
    },
    {
        "text": "There are more things to alarm us than to harm us, and we suffer more often in apprehension than reality.",
        "author": "Seneca"
    },
    {
        "text": "If you gain from a crime, you did it.",
        "author": "Seneca"
    },
    {
        "text": "A great mind becomes a great fortune.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Truth often harms the one who digs it up.",
        "author": "Seneca"
    },
    {
        "text": "In times of happiness, no point in shaking things up. But in a time of crisis, the safest thing is change.",
        "author": "Seneca"
    },
    {
        "text": "Wherever there is a human being, there exists the opportunity for an act of kindness.",
        "author": "Seneca"
    },
    {
        "text": "All fools suffer the burden of dissatisfaction with themselves.",
        "author": "Seneca the Elder"
    },
    {
        "text": "Prove - and an easy task it is - that so-called pleasures, when they go beyond a certain limit, are but punishments...",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "To live under constraint is a misfortune, but there is no constraint to live under constraint.",
        "author": "Seneca"
    },
    {
        "text": "While we are postponing, life speeds by.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Men love their country, not because it is great, but because it is their own.",
        "author": "Seneca"
    },
    {
        "text": "If you wish to have leisure for your mind, either be a poor man, or resemble a poor man.",
        "author": "Seneca"
    },
    {
        "text": "We are waves of the same sea, leaves of the same tree, flowers from the same garden.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "No one dies except on his own day.",
        "author": "Seneca"
    },
    {
        "text": "revenge is an admission that we have been hurt. That cannot be a great mind which is disturbed by injury. He who has hurt you must be either stronger or weaker than yourself.",
        "author": "Seneca"
    },
    {
        "text": "We are unequal at birth, but are equal in death.",
        "author": "Seneca"
    },
    {
        "text": "Speak, and live, in this way; see to it that nothing keeps you down.",
        "author": "Seneca"
    },
    {
        "text": "To know how many are jealous of you, count your admirers",
        "author": "Seneca"
    },
    {
        "text": "When a man does not know what harbor he is making for, no wind is the right wind.",
        "author": "Seneca"
    },
    {
        "text": "Just as with storytelling, so with life: it's important how well it is done, not how long.",
        "author": "Seneca"
    },
    {
        "text": "To expect punishment is to suffer it; and to earn it is to expect it.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "The bravest sight in the world is to see a great man struggling against adversity.",
        "author": "Seneca"
    },
    {
        "text": "Injustice never rules forever",
        "author": "Seneca"
    },
    {
        "text": "No matter how many men you kill, you can't kill your successor.",
        "author": "Seneca"
    },
    {
        "text": "Life is slavery if the courage to die is absent.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Reason shows us there is nothing either good or bad but thinking makes it so.",
        "author": "Seneca"
    },
    {
        "text": "Preserve a sense of proportion in your attitude to everything that pleases you, and make the most of them while they are at their best.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "No man can be sane who searches for what will injure him in place of what is best.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "vices have to be crushed rather than picked at.",
        "author": "Seneca"
    },
    {
        "text": "For mere living is not a good, but living well.",
        "author": "Seneca"
    },
    {
        "text": "If you wish to be loved, love.",
        "author": "Seneca"
    },
    {
        "text": "One who seeks friendship for favourable occasions, strips it of all its nobility.",
        "author": "Seneca"
    },
    {
        "text": "Nothing is ours, except time.",
        "author": "Seneca"
    },
    {
        "text": "Do not run hither and thither and distract yourself by changing your abode; for such restlessness is the sign of a disordered spirit.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "A wise man never asks what another man serves, for only his actions will speak the truth.",
        "author": "Seneca"
    },
    {
        "text": "It is in no man's power to have whatever he wants, but he has it in his power not to wish for what he hasn't got, and cheerfully make the most of the things that do come his way.",
        "author": "Seneca"
    },
    {
        "text": "It is not what you endure that matters, but how you endure it.",
        "author": "Seneca"
    },
    {
        "text": "Fire is the test of gold; adversity, of strong men.",
        "author": "Seneca"
    },
    {
        "text": "The whole future lies in uncertainty: live immediately.",
        "author": "Seneca"
    },
    {
        "text": "Only a mind that is deeply stirred can utter something noble and beyond the power of others.",
        "author": "Seneca"
    },
    {
        "text": "Every day as it comes should be welcomed and reduced forthwith into our own possession as if it were the finest day imaginable. What flies past has to be seized at.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "The invulnerable is not that which is never struck, but that which is never wounded.",
        "author": "Seneca"
    },
    {
        "text": "We should strive, not to live long, but to live rightly;",
        "author": "Seneca"
    },
    {
        "text": "Most of my converse is with books.",
        "author": "Seneca"
    },
    {
        "text": "And first of all, we should have no cravings like theirs; for rivalry results in strife.",
        "author": "Seneca"
    },
    {
        "text": "Let us withdraw ourselves in every way; for it is as harmful to be scorned as to be admired.",
        "author": "Seneca"
    },
    {
        "text": "For he alone is in kinship with God who has scorned wealth.",
        "author": "Seneca"
    },
    {
        "text": "We often are angry,\" says our adversary, \"not with men who have hurt us, but with men who are going to hurt us: so you may be sure that anger is not born of injury.",
        "author": "Seneca"
    },
    {
        "text": "And as long as nothing satisfies you, you yourself cannot satisfy others.",
        "author": "Seneca"
    },
    {
        "text": "Restless people often pretend to be calm.",
        "author": "Seneca"
    },
    {
        "text": "We live among wicked man through our own wickedness. One thing alone can bring us peace, an agreement to treat one another with kindness.",
        "author": "Seneca"
    },
    {
        "text": "Kingdoms which act unjustly never last.",
        "author": "Seneca"
    },
    {
        "text": "We should conduct ourselves not as if we ought to live for the body, but as if we could not live without it.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "The greatest hindrance to living is expectancy, which depends upon the morrow and wastes to-day.",
        "author": "Seneca"
    },
    {
        "text": "The fool, with all his other faults, has this also, he is always getting ready to live.",
        "author": "Seneca"
    },
    {
        "text": "If you live according to nature, you will never be poor; if you live according to opinion, you will never be rich.",
        "author": "Seneca"
    },
    {
        "text": "the mind is never right but when it is at peace with itself",
        "author": "lucius annaues seneca"
    },
    {
        "text": "An unpopular rule is never long maintained.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "It is uncertain where Death will await you; there expect it everywhere.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Learning how to live takes a whole life, and, which may surprise you more, it takes a whole life to learn how to die.",
        "author": "Seneca"
    },
    {
        "text": "The man who fears death will never do anything worthy of a man who is alive.",
        "author": "Seneca"
    },
    {
        "text": "Sorrowers tend to avoid what they are most fond of and try to give vent to their grief.",
        "author": "Seneca"
    },
    {
        "text": "No man is brave and earnest if he avoids danger, if his spirit does not grow with the very difficulty of his task.",
        "author": "Seneca"
    },
    {
        "text": "Only the poor man counts his flock.",
        "author": "Seneca"
    },
    {
        "text": "Whatever your destination you will be followed by your failings.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Poor woman, do you want to know where hatred ends? Look to love.",
        "author": "Seneca"
    },
    {
        "text": "Every pleasure is most valued when it is coming to an end.",
        "author": "Seneca"
    },
    {
        "text": "The wise man will not upset the customs of the people, nor will he invite the attention of the populace by any novel ways of living.",
        "author": "Seneca"
    },
    {
        "text": "Those who are busy with other things do not notice it until the end comes.",
        "author": "Seneca"
    },
    {
        "text": "Do you ask what is the proper limit to wealth? It is, first, to have what is necessary, and, second, to have what is enough.",
        "author": "Seneca"
    },
    {
        "text": "We are born under circumstances that would be favorable if we did not abandon them. It was nature's intention that there should be no need of great equipment for a good life.",
        "author": "Seneca"
    },
    {
        "text": "We shall consider later whether these evils derive their power from their own strength, or from our own weakness.",
        "author": "Seneca"
    },
    {
        "text": "Therefore, nothing ought to be unexpected by us. Our minds should be sent forward in advance to meet all problems, and we should consider, not what is wont to happen, but what can happen.",
        "author": "Seneca"
    },
    {
        "text": "weigh carefully your hopes as well as your fears, and whenever all the elements are in doubt, decide in your own favour; believe what you prefer.",
        "author": "Seneca"
    },
    {
        "text": "Do battle with yourself: if you have the will to conquer anger, it cannot conquer you.",
        "author": "Seneca"
    },
    {
        "text": "This space that has been granted to us rushes by so speedily and so swiftly that all save a very few find life at an end just when they are getting ready to live.",
        "author": "Seneca"
    },
    {
        "text": "Money never made a man rich; on the contrary, it always smites men with a greater craving for itself.",
        "author": "Seneca"
    },
    {
        "text": "You should not become like evil men because they are many, or be hostile to the many because they are unlike you.",
        "author": "Seneca"
    },
    {
        "text": "No one has anything finished, because we have kept putting off into the future all our undertakings",
        "author": "Seneca"
    },
    {
        "text": "One who can so revere another, will soon be himself worthy of reverence.",
        "author": "Seneca"
    },
    {
        "text": "That day, which you fear as being the end of all things, is the birthday of your eternity.",
        "author": "Seneca"
    },
    {
        "text": "All that remains of our existence is not actually life but merely time.",
        "author": "Seneca"
    },
    {
        "text": "That from which you are running, is within you.",
        "author": "Seneca"
    },
    {
        "text": "We do not receive a life that is short, but rather we make it so.",
        "author": "Seneca"
    },
    {
        "text": "Once we have driven away all that excites or affrights us, there ensues unbroken tranquility and enduring freedom.",
        "author": "Seneca"
    },
    {
        "text": "Men are not made restless by activity but driven to madness by false impressions of reality.",
        "author": "Seneca"
    },
    {
        "text": "A person's fears are lighter when the danger is at hand.",
        "author": "Seneca"
    },
    {
        "text": "Who scorns his own life is lord of yours.",
        "author": "Seneca"
    },
    {
        "text": "What is death? Either a transition or an end. I am not afraid of coming to an end, this being the same as never having begun, nor of transition.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "The acquisition of riches has been for many men, not an end, but a change, of troubles.",
        "author": "Seneca"
    },
    {
        "text": "Nothing satisfies greed, but even a little satisfies nature.",
        "author": "Seneca"
    },
    {
        "text": "No one can live happily who has regard for himself alone and transforms everything into a question of his own utility",
        "author": "Seneca"
    },
    {
        "text": "The man who has anticipated the coming of troubles takes away their power when they arrive.",
        "author": "Seneca"
    },
    {
        "text": "You live as though you were going to live for ever, at no time taking thought for your weakness, and you fail to note how much time has already passed by.",
        "author": "Seneca"
    },
    {
        "text": "There is no such thing as good or bad fortune for the individual; we live in common.",
        "author": "Seneca"
    },
    {
        "text": "Loneliness is not being alone, but being empty",
        "author": "Seneca"
    },
    {
        "text": "it is as harmful to be scorned as to be admired.",
        "author": "Seneca"
    },
    {
        "text": "It is not enough if you do not shrink from work; ask for it.",
        "author": "Seneca"
    },
    {
        "text": "Everywhere means nowhere. When a person spends all his time in foreign travel, he ends by having many acquaintances, but no friends.",
        "author": "Seneca"
    },
    {
        "text": "A setback has often cleared the way for greater prosperity. Many things have fallen only to rise to more exalted heights.",
        "author": "Seneca"
    },
    {
        "text": "For a person who is not aware that he is doing anything wrong has no desire to be put right. You have to catch yourself doing it before you can reform.",
        "author": "Seneca"
    },
    {
        "text": "Never have I trusted Fortune, even when she seemed to offer peace.",
        "author": "Seneca"
    },
    {
        "text": "They are pleased to deceive themselves, as if they deceived Fate at the same time.",
        "author": "Seneca"
    },
    {
        "text": "There is no great genius without a tincture of madness.",
        "author": "Seneca"
    },
    {
        "text": "We should strive, not to live long, but to live rightly;",
        "author": "Seneca"
    },
    {
        "text": "we pray for something opposite to that which we have prayed for in the past.",
        "author": "Seneca"
    },
    {
        "text": "No man was ever wise by chance.",
        "author": "Seneca"
    },
    {
        "text": "there has never been a great mind without some degree of madness.",
        "author": "Seneca"
    },
    {
        "text": "Again, I may have less than I hoped for. But perhaps I was hoping for more than I should have.",
        "author": "Seneca"
    },
    {
        "text": "fate has decreed that nothing maintains the same condition forever.",
        "author": "Seneca"
    },
    {
        "text": "no man, if he be ungrateful, will be unhappy in the future. I allow him no day of grace; he is unhappy forthwith.",
        "author": "Seneca"
    },
    {
        "text": "Whatever happens, he says: \"I knew it.",
        "author": "Seneca"
    },
    {
        "text": "The greatest wealth is a poverty of desires",
        "author": "Seneca"
    },
    {
        "text": "Let us postpone nothing. Let us balance life's account every day... One who daily puts the finishing touches to his life is never in want of time.",
        "author": "Seneca"
    },
    {
        "text": "None of these will force you to die, but all will teach you how to die. None of them will exhaust your years, but each will contribute his years to yours.",
        "author": "Seneca"
    },
    {
        "text": "There is only one relief for great sufferings, and that is to endure and surrender to their compulsion.",
        "author": "Seneca"
    },
    {
        "text": "No one keeps himself waiting; and yet the greatest cure for anger is to wait, so that the initial passion it engenders may die down, and the fog that shrouds the mind may subside, or become less thick.",
        "author": "Seneca"
    },
    {
        "text": "The one who knows no hope knows no despair.",
        "author": "Seneca"
    },
    {
        "text": "The man who tries to find out what has been said against him, who seeks to unearth spiteful gossip, even when engaged in privately, is destroying his own peace of mind.",
        "author": "Seneca"
    },
    {
        "text": "...nothing happens to the wise man against his expectation.",
        "author": "Seneca"
    },
    {
        "text": "Oh, what darkness does great prosperity cast over our minds!",
        "author": "Seneca"
    },
    {
        "text": "If you look on wealth as a thing to be valued your imaginary poverty will cause you torment.",
        "author": "Seneca"
    },
    {
        "text": "Philosophy is good advice; and no one can give advice at the top of his lungs.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "Let us take pleasure in what we have received and make no comparison; no man will ever be happy if tortured by the greater happiness of another.",
        "author": "Seneca"
    },
    {
        "text": "No man has escaped paying the penalty for being born.",
        "author": "Seneca"
    },
    {
        "text": "The mind when distracted absorbs nothing deeply.",
        "author": "Seneca the Younger"
    },
    {
        "text": "What difference does it make, after all, what your position in life is if you dislike it yourself?",
        "author": "Seneca"
    },
    {
        "text": "The day which we fear is out last is buth the birthday of eternity",
        "author": "Seneca"
    },
    {
        "text": "The man who looks for the morrow without worrying over it knows a peaceful independence and a happiness beyond all others.",
        "author": "Seneca"
    },
    {
        "text": "There are more things likely to frighten us than there are to crush us; we suffer more often in imagination than in reality.",
        "author": "Seneca"
    },
    {
        "text": "Therefore continually remind yourself, Lucilius, how many ambitions you have attained. When you see many ahead of you, think how many are behind!",
        "author": "Seneca"
    },
    {
        "text": "He needs but little who desires but little.",
        "author": "Seneca"
    },
    {
        "text": "It takes you more time to solve a problem than to set it.",
        "author": "Seneca"
    },
    {
        "text": "reading of many books is distraction.",
        "author": "Seneca"
    },
    {
        "text": "If you regard your last day not as a punishment but as a law of nature, the breast from which you have banished the dread of death no fear will dare to enter.",
        "author": "Seneca"
    },
    {
        "text": "O, what blindness does great prosperity cast upon our minds!",
        "author": "Seneca"
    },
    {
        "text": "Wherever there is a human being, there is an opportunity for kindness.",
        "author": "Seneca the Younger"
    },
    {
        "text": "Let Nature make whatever use she pleases of matter, which is her own: lets us be cheerful and brave in the face of all, and consider that nothing of our own perishes.",
        "author": "Seneca"
    },
    {
        "text": "What Chance has made yours is not really yours.",
        "author": "Seneca"
    },
    {
        "text": "He who boasts of his descent, praises the deeds of another.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "text": "The mind that is anxious about future events is miserable.",
        "author": "Seneca"
    },
    {
        "text": "Whatever is a terror to others, fears for itself.",
        "author": "Seneca"
    },
    {
        "text": "Life is short, art is long.",
        "author": "Seneca"
    },
    {
        "text": "Poverty brought into conformity with the law of nature, is great wealth.",
        "author": "Seneca"
    },
    {
        "text": "That which is enough is ready to our hands.",
        "author": "Seneca"
    },
    {
        "text": "How much better to follow a straight course and attain a goal where the words \"pleasant\" and \"honourable\" have the same meaning!",
        "author": "Seneca"
    },
    {
        "text": "Only the wise man is content with what is his. All foolishness suffers the burden of dissatisfaction with itself.",
        "author": "Seneca"
    },
    {
        "text": "One day is equal to every day.",
        "author": "Seneca"
    },
    {
        "text": "Awake, my heart, And do such deeds as in the time to come No tongue shall praise, but none refuse to tell.",
        "author": "Seneca"
    },
    {
        "text": "Great things cannot be bought for small sums;",
        "author": "Seneca"
    },
    {
        "text": "Rehearse them in your mind: exile, torture, war, shipwreck. All the terms of our human lot should be before our eyes,",
        "author": "Seneca"
    }
];
