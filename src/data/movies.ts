import { orderBy, uniqBy } from 'lodash';
export const response = [
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [28, 80],
    id: 385687,
    original_language: 'en',
    original_title: 'Fast & Furious 10',
    overview: 'The tenth installment in the Fast Saga.',
    poster_path: '/2DyEk84XnbJEdPlGF43crxfdtHH.jpg',
    title: 'Fast & Furious 10',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 1168.467,
      },
    ],
  },
  {
    adult: false,
    backdrop_path: '/qi6Edc1OPcyENecGtz8TF0DUr9e.jpg',
    genre_ids: [27, 9648, 53],
    id: 423108,
    original_language: 'en',
    original_title: 'The Conjuring: The Devil Made Me Do It',
    overview:
      "Paranormal investigators Ed and Lorraine Warren encounter what would become one of the most sensational cases from their files. The fight for the soul of a young boy takes them beyond anything they'd ever seen before, to mark the first time in U.S. history that a murder suspect would claim demonic possession as a defense.",
    poster_path: '/xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg',
    title: 'The Conjuring: The Devil Made Me Do It',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 1156.593,
      },
    ],
    release_date: '2021-05-25',
  },
  {
    adult: false,
    backdrop_path: '/c0izdYdnTe4uMRifHgvTA85wPz0.jpg',
    genre_ids: [28, 12, 27, 80],
    id: 503736,
    original_language: 'en',
    original_title: 'Army of the Dead',
    overview:
      'Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble: venturing into the quarantine zone to pull off the greatest heist ever attempted.',
    poster_path: '/z8CExJekGrEThbpMXAmCFvvgoJR.jpg',
    title: 'Army of the Dead',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 1140.14,
      },
    ],
    release_date: '2021-05-14',
  },
  {
    adult: false,
    backdrop_path: '/3RMbkXS4ocMmoJyAD3ZsWbm32Kx.jpg',
    genre_ids: [18, 878, 53],
    id: 615658,
    original_language: 'en',
    original_title: 'Awake',
    overview:
      'After a sudden global event wipes out all electronics and takes away humankind’s ability to sleep, chaos quickly begins to consume the world. Only Jill, an ex-soldier with a troubled past, may hold the key to a cure in the form of her own daughter. The question is, can Jill safely deliver her daughter and save the world before she herself loses her mind.',
    poster_path: '/uZkNbB8isWXHMDNoIbqXvmslBMC.jpg',
    title: 'Awake',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 1136.254,
      },
    ],
    release_date: '2021-06-09',
  },
  {
    adult: false,
    backdrop_path: '/ok7RdHhVngnwkvKj09tvtOvypG.jpg',
    genre_ids: [80, 18, 53, 9648],
    id: 649409,
    original_language: 'en',
    original_title: 'No Sudden Move',
    overview:
      "A group of criminals are brought together under mysterious circumstances and have to work together to uncover what's really going on when their simple job goes completely sideways.",
    poster_path: '/34BmdJkdvRweC3xJJFlOFQ2IbYc.jpg',
    title: 'No Sudden Move',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 1054.1,
      },
    ],
    release_date: '2021-06-24',
  },
  {
    adult: false,
    backdrop_path: '/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg',
    genre_ids: [28, 14, 12],
    id: 460465,
    original_language: 'en',
    original_title: 'Mortal Kombat',
    overview:
      "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
    poster_path: '/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg',
    title: 'Mortal Kombat',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 1009.889,
      },
    ],
    release_date: '2021-04-07',
  },
  {
    adult: false,
    backdrop_path: '/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg',
    genre_ids: [28, 12, 14],
    id: 399566,
    original_language: 'en',
    original_title: 'Godzilla vs. Kong',
    overview:
      'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
    poster_path: '/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
    title: 'Godzilla vs. Kong',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8,
      },
      {
        id: 'popularity',
        rating: 992.262,
      },
    ],
    release_date: '2021-03-24',
  },
  {
    adult: false,
    backdrop_path: '/syjh4WJARo5gwjyUYxOPOElWGWh.jpg',
    genre_ids: [27, 53],
    id: 698320,
    original_language: 'en',
    original_title: 'The Mad Hatter',
    overview:
      'An eccentric professor takes four of his students to the mansion of the “Mad Hatter”, an urban legend driven insane by mercury poisoning and grief. He says that there’s nothing to worry about now: the strange, shambling “caretakers” that haunt the home are merely servants that have fallen to inbreeding, and the Hatter himself has been dead for years. But as the students start disappearing one by one, those that remain start to question if the professor’s experiment is truly scientific...and if the Hatter didn’t just succumb to his madness, but decided to spread it...',
    poster_path: '/lTUfalNirpq7SBASa6lnzs27iam.jpg',
    title: 'The Mad Hatter',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 940.814,
      },
    ],
    release_date: '2021-01-29',
  },
  {
    adult: false,
    backdrop_path: '/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg',
    genre_ids: [16, 28, 12, 14],
    id: 635302,
    original_language: 'ja',
    original_title: '劇場版「鬼滅の刃」無限列車編',
    overview:
      "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
    poster_path: '/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg',
    title: 'Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.4,
      },
      {
        id: 'popularity',
        rating: 885.572,
      },
    ],
    release_date: '2020-10-16',
  },
  {
    adult: false,
    backdrop_path: '/pVNXmfZvQKFdUKVYNJxZAiy69DC.jpg',
    genre_ids: [28, 12],
    id: 529106,
    original_language: 'ru',
    original_title: 'Майор Гром: Чумной Доктор',
    overview:
      'Igor Grom is a skilled policeman from St. Petersburg, known for his daring nature and uncompromising attitude towards the criminals of all kinds. Incredible strength, analytical mind and integrity – these qualities make Major Grom the perfect policeman. Working tirelessly, he always pushes through, and meets the challenges standing in the way.',
    poster_path: '/wnesEmcq7xdw1Rm1Bn6XEFTkenR.jpg',
    title: 'Major Grom: Plague Doctor',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 830.05,
      },
    ],
    release_date: '2021-04-01',
  },
  {
    adult: false,
    backdrop_path: '/pfcj8IYB5bK8RTWiHwOCGfIzVw6.jpg',
    genre_ids: [18, 14, 53],
    id: 845222,
    original_language: 'ko',
    original_title: '킹덤: 아신전',
    overview:
      'Tragedy, betrayal and a mysterious discovery fuel a woman\'s vengeance for the loss of her tribe and family in this special episode of "Kingdom."',
    poster_path: '/cE9SBjWMUK0HFxmT1cVFDtu5CLT.jpg',
    title: 'Kingdom: Ashin of the North',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 807.065,
      },
    ],
    release_date: '2021-07-23',
  },
  {
    adult: false,
    backdrop_path: '/q2mtFwvQQbun4nM9p16gA3Hqb0H.jpg',
    genre_ids: [9648, 53, 27],
    id: 631843,
    original_language: 'en',
    original_title: 'Old',
    overview:
      'A group of families on a tropical holiday discover that the secluded beach where they are staying is somehow causing them to age rapidly – reducing their entire lives into a single day.',
    poster_path: '/cGLL4SY6jFjjUZkz2eFxgtCtGgK.jpg',
    title: 'Old',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 806.465,
      },
    ],
    release_date: '2021-07-21',
  },
  {
    adult: false,
    backdrop_path: '/wPjtacig0kIkVcTQmXoNt6jbMwo.jpg',
    genre_ids: [28, 35],
    id: 617502,
    original_language: 'en',
    original_title: 'Jolt',
    overview:
      'Lindy is an acid-tongued woman with rage issues who controls her temper by shocking herself with an electrode vest. One day she makes a connection with Justin, who gives her a glimmer of hope for a shock-free future, but when he’s murdered she launches herself on a revenge-fueled rampage in pursuit of his killer.',
    poster_path: '/gYZAHan5CHPFXORpQMvOjCTug4E.jpg',
    title: 'Jolt',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 794.422,
      },
    ],
    release_date: '2021-07-15',
  },
  {
    adult: false,
    backdrop_path: '/A0xW7GgeFQoQmPOn7HcHkBQ5nlb.jpg',
    genre_ids: [53, 28],
    id: 817451,
    original_language: 'en',
    original_title: 'Endangered Species',
    overview:
      'Jack Halsey takes his wife, their adult kids, and a friend for a dream vacation in Kenya. But as they venture off alone into a wilderness park, their safari van is flipped over by an angry rhino, leaving them injured and desperate. Then, as two of them go in search of rescue, a bloody, vicious encounter with a leopard and a clan of hyenas incites a desperate fight for survival.',
    poster_path: '/ccsSqbpEqr2KK9eMvoeF8ERFCd5.jpg',
    title: 'Endangered Species',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 793.01,
      },
    ],
    release_date: '2021-05-27',
  },
  {
    adult: false,
    backdrop_path: '/5C8bfwglg91uZhc2fbfpSjNGamV.jpg',
    genre_ids: [27, 9648],
    id: 591273,
    original_language: 'en',
    original_title: 'Fear Street: 1994',
    overview:
      'In 1994, a group of teenagers discovers that the terrifying events which have haunted their town for generations ​are all connected — and that they may be the next targets.',
    poster_path: '/9J9Wy39ZjrVmfk7yMkulpcI5sy0.jpg',
    title: 'Fear Street: 1994',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 761.372,
      },
    ],
    release_date: '2021-06-28',
  },
  {
    adult: false,
    backdrop_path: '/fPGeS6jgdLovQAKunNHX8l0avCy.jpg',
    genre_ids: [28, 53, 10752],
    id: 567189,
    original_language: 'en',
    original_title: "Tom Clancy's Without Remorse",
    overview:
      'An elite Navy SEAL uncovers an international conspiracy while seeking justice for the murder of his pregnant wife.',
    poster_path: '/rEm96ib0sPiZBADNKBHKBv5bve9.jpg',
    title: "Tom Clancy's Without Remorse",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 758.917,
      },
    ],
    release_date: '2021-04-29',
  },
  {
    adult: false,
    backdrop_path: '/yC4DRg5aGgNpkHpUDpLtBqzownS.jpg',
    genre_ids: [878, 28],
    id: 586047,
    original_language: 'ko',
    original_title: '서복',
    overview:
      'A former intelligence agent gets involved with the first human clone, Seo Bok, who others seek, causing trouble.',
    poster_path: '/nxxuWC32Y6TULj4VnVwMPUFLIpK.jpg',
    title: 'Seobok',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 752.875,
      },
    ],
    release_date: '2021-04-12',
  },
  {
    adult: false,
    backdrop_path: '/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg',
    genre_ids: [28, 12, 14, 878],
    id: 791373,
    original_language: 'en',
    original_title: "Zack Snyder's Justice League",
    overview:
      "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
    poster_path: '/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg',
    title: "Zack Snyder's Justice League",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.4,
      },
      {
        id: 'popularity',
        rating: 742.401,
      },
    ],
    release_date: '2021-03-18',
  },
  {
    adult: false,
    backdrop_path: '/6viJBbovWxJYavdjPy7UPTLvaOS.jpg',
    genre_ids: [9648, 27],
    id: 591275,
    original_language: 'en',
    original_title: 'Fear Street: 1666',
    overview:
      "In 1666, a colonial town is gripped by a hysterical witch-hunt that has deadly consequences for centuries to come, and it's up to teenagers in 1994 to finally put an end to their town's curse, before it's too late.",
    poster_path: '/rmEPtz3Ufzol2VWUAZYzOFaBio3.jpg',
    title: 'Fear Street: 1666',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 739.798,
      },
    ],
    release_date: '2021-07-14',
  },
  {
    adult: false,
    backdrop_path: '/4qdalDaJDy6LSBNapxmCc4Wvpls.jpg',
    genre_ids: [27, 9648],
    id: 611489,
    original_language: 'en',
    original_title: 'Initiation',
    overview:
      "Whiton University unravels the night a star-athlete is murdered, kicking off a spree of social media slayings that force students to uncover the truth behind the school's hidden secrets and the horrifying meaning of an exclamation point.",
    poster_path: '/oT3q1gClsLyDS6kI15FYISy4arw.jpg',
    title: 'Initiation',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 720.321,
      },
    ],
    release_date: '2021-05-07',
  },
  {
    adult: false,
    backdrop_path: '/4kIRrW1AlHP5Idne8CPHeQt8nR5.jpg',
    genre_ids: [16, 10751, 35, 14],
    id: 550205,
    original_language: 'en',
    original_title: 'Wish Dragon',
    overview:
      'Determined teen Din is longing to reconnect with his childhood best friend when he meets a wish-granting dragon who shows him the magic of possibilities.',
    poster_path: '/lnPf6hzANL6pVQTxUlsNYSuhT5l.jpg',
    title: 'Wish Dragon',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.2,
      },
      {
        id: 'popularity',
        rating: 555.924,
      },
    ],
    release_date: '2021-01-15',
  },
  {
    adult: false,
    backdrop_path: '/efrdAWS63s8TTWdrI2uNdIhn1dj.jpg',
    genre_ids: [53, 28, 80],
    id: 808023,
    original_language: 'en',
    original_title: 'The Virtuoso',
    overview:
      "A lonesome stranger with nerves of steel must track down and kill a rogue hitman to satisfy an outstanding debt. But the only information he's been given is a time and location where to find his quarry. No name. No description. Nothing.",
    poster_path: '/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg',
    title: 'The Virtuoso',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 554.559,
      },
    ],
    release_date: '2021-04-30',
  },
  {
    adult: false,
    backdrop_path: '/qAhedRxRYWZAgZ8O8pHIl6QHdD7.jpg',
    genre_ids: [28, 12, 35],
    id: 384018,
    original_language: 'en',
    original_title: 'Fast & Furious Presents: Hobbs & Shaw',
    overview:
      "Ever since US Diplomatic Security Service Agent Hobbs and lawless outcast Shaw first faced off, they just have traded smack talk and body blows. But when cyber-genetically enhanced anarchist Brixton's ruthless actions threaten the future of humanity, they join forces to defeat him.",
    poster_path: '/qRyy2UmjC5ur9bDi3kpNNRCc5nc.jpg',
    title: 'Fast & Furious Presents: Hobbs & Shaw',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 530.359,
      },
    ],
    release_date: '2019-08-01',
  },
  {
    adult: false,
    backdrop_path: '/fRrpOILyXuWaWLmqF7kXeMVwITQ.jpg',
    genre_ids: [27, 53, 12, 9648],
    id: 522444,
    original_language: 'en',
    original_title: 'Black Water: Abyss',
    overview:
      'An adventure-loving couple convince their friends to explore a remote, uncharted cave system in the forests of Northern Australia. With a tropical storm approaching, they abseil into the mouth of the cave, but when the caves start to flood, tensions rise as oxygen levels fall and the friends find themselves trapped. Unknown to them, the storm has also brought in a pack of dangerous and hungry crocodiles.',
    poster_path: '/95S6PinQIvVe4uJAd82a2iGZ0rA.jpg',
    title: 'Black Water: Abyss',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.1,
      },
      {
        id: 'popularity',
        rating: 526.239,
      },
    ],
    release_date: '2020-07-09',
  },
  {
    adult: false,
    backdrop_path: '/oZK07PoV0MAG8ts7n95foyRfU3l.jpg',
    genre_ids: [35, 18],
    id: 633954,
    original_language: 'fr',
    original_title: 'Le guide de la famille parfaite',
    overview:
      'A couple in Québec deals with the pitfalls, pressure and high expectations of raising kids in a society obsessed with success and social media image.',
    poster_path: '/cBhkSwZpb3QpUwFuFdWAXTqWAtS.jpg',
    title: 'The Guide to the Perfect Family',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 522.818,
      },
    ],
    release_date: '2021-07-14',
  },
  {
    adult: false,
    backdrop_path: '/9ns9463dwOeo1CK1JU2wirL5Yi1.jpg',
    genre_ids: [35, 10751, 16],
    id: 587807,
    original_language: 'en',
    original_title: 'Tom & Jerry',
    overview:
      'Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can’t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.',
    poster_path: '/8XZI9QZ7Pm3fVkigWJPbrXCMzjq.jpg',
    title: 'Tom & Jerry',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 517.244,
      },
    ],
    release_date: '2021-02-11',
  },
  {
    adult: false,
    backdrop_path: '/srYya1ZlI97Au4jUYAktDe3avyA.jpg',
    genre_ids: [28, 12, 14],
    id: 464052,
    original_language: 'en',
    original_title: 'Wonder Woman 1984',
    overview:
      'A botched store robbery places Wonder Woman in a global battle against a powerful and mysterious ancient force that puts her powers in jeopardy.',
    poster_path: '/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
    title: 'Wonder Woman 1984',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 510.808,
      },
    ],
    release_date: '2020-12-16',
  },
  {
    adult: false,
    backdrop_path: '/z8TvnEVRenMSTemxYZwLGqFofgF.jpg',
    genre_ids: [28, 14, 12],
    id: 458576,
    original_language: 'en',
    original_title: 'Monster Hunter',
    overview:
      'A portal transports Cpt. Artemis and an elite unit of soldiers to a strange world where powerful monsters rule with deadly ferocity. Faced with relentless danger, the team encounters a mysterious hunter who may be their only hope to find a way home.',
    poster_path: '/1UCOF11QCw8kcqvce8LKOO6pimh.jpg',
    title: 'Monster Hunter',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 504.876,
      },
    ],
    release_date: '2020-12-03',
  },
  {
    adult: false,
    backdrop_path: '/5Mka2Q8NgOd4COeTAbugu4WilC2.jpg',
    genre_ids: [9648, 53, 27],
    id: 604360,
    original_language: 'ko',
    original_title: '제8일의 밤',
    overview:
      "With prayer beads in one hand and an ax in the other, a monk hunts down a millennia-old spirit that's possessing humans and unleashing hell on Earth.",
    poster_path: '/trSDStH3UP4ux4lAILNNSqDXSB3.jpg',
    title: 'The 8th Night',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 487.461,
      },
    ],
    release_date: '2021-07-02',
  },
  {
    adult: false,
    backdrop_path: '/miOnymJ0dN2psWBB8Vleo3fUyrc.jpg',
    genre_ids: [18, 10751, 35],
    id: 607259,
    original_language: 'en',
    original_title: 'Fatherhood',
    overview:
      'A widowed new dad copes with doubts, fears, heartache and dirty diapers as he sets out to raise his daughter on his own. Inspired by a true story.',
    poster_path: '/pR2fzm82fl0giommpo310LBOMbV.jpg',
    title: 'Fatherhood',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 484.314,
      },
    ],
    release_date: '2021-06-18',
  },
  {
    adult: false,
    backdrop_path: '/roALP6N8Q2h57mBxecQJazs0IFz.jpg',
    genre_ids: [27],
    id: 676845,
    original_language: 'es',
    original_title: 'Juega Conmigo',
    overview:
      'Sofia, an insecure young woman, begins babysitting two troublesome siblings that turn her job into a complete living hell. That is until a devilish presence starts messing with the trio and they must band together to fight the demon away.',
    poster_path: '/iM5kNvZzcMSmWv7CFTxnTu5zfoa.jpg',
    title: 'Come Play With Me',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 476.016,
      },
    ],
    release_date: '2021-02-25',
  },
  {
    adult: false,
    backdrop_path: '/uS9apevOgs2fuYghf9szOoK1u63.jpg',
    genre_ids: [16, 9648, 28, 80],
    id: 736073,
    original_language: 'en',
    original_title: 'Batman: The Long Halloween, Part One',
    overview:
      "Following a brutal series of murders taking place on Halloween, Thanksgiving, and Christmas, Gotham City's young vigilante known as the Batman sets out to pursue the mysterious serial killer alongside police officer James Gordon and district attorney Harvey Dent.",
    poster_path: '/fvaB0jrzFXq07bUpox03k6qOAJu.jpg',
    title: 'Batman: The Long Halloween, Part One',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 471.764,
      },
    ],
    release_date: '2021-06-21',
  },
  {
    adult: false,
    backdrop_path: '/3nVQMybCN16GPeVWkvgEVnmvk1U.jpg',
    genre_ids: [16, 9648, 28, 80],
    id: 736074,
    original_language: 'en',
    original_title: 'Batman: The Long Halloween, Part Two',
    overview:
      "As Gotham City's young vigilante, the Batman, struggles to pursue a brutal serial killer, district attorney Harvey Dent gets caught in a feud involving the criminal family of the Falcones.",
    poster_path: '/5X1n5q08mZ7NpNpxehMFODxfNYq.jpg',
    title: 'Batman: The Long Halloween, Part Two',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.1,
      },
      {
        id: 'popularity',
        rating: 470.088,
      },
    ],
    release_date: '2021-07-26',
  },
  {
    adult: false,
    backdrop_path: '/pU15NMZueYMpcnJmBSB63a8uIMV.jpg',
    genre_ids: [53, 878],
    id: 687149,
    original_language: 'es',
    original_title: 'Tóxico',
    overview:
      'In the middle of a mysterious insomnia epidemic that slowly takes on catastrophic dimensions, Laura (39) and Augusto (42) flee the city in their motorhome to get away from the chaos. As they move down the route, the world becomes an increasingly strange and dangerous place. Finally, Laura reveals a story that changes everything. The road is depopulating, the silence grows and it is increasingly difficult to differentiate the reality from the dream.',
    poster_path: '/6KpCQfmjD3xH5VZ1MMxv6SqGd5b.jpg',
    title: 'Toxic',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 465.815,
      },
    ],
    release_date: '2020-04-23',
  },
  {
    adult: false,
    backdrop_path: '/nR6tcBslmfpC6tHW6GPs7fcHV8g.jpg',
    genre_ids: [28, 12, 18],
    id: 602063,
    original_language: 'ja',
    original_title: 'るろうに剣心 最終章 The Final',
    overview:
      "In 1879, Kenshin and his allies face their strongest enemy yet: his former brother-in-law Enishi Yukishiro and his minions, who've vowed their revenge.",
    poster_path: '/7bbEASVf9XWtfxWiuWUMY3uyhTb.jpg',
    title: 'Rurouni Kenshin: The Final',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 462.056,
      },
    ],
    release_date: '2021-04-23',
  },
  {
    adult: false,
    backdrop_path: '/uozb2VeD87YmhoUP1RrGWfzuCrr.jpg',
    genre_ids: [28, 80],
    id: 495764,
    original_language: 'en',
    original_title:
      'Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)',
    overview:
      'Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.',
    poster_path: '/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg',
    title:
      'Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 461.717,
      },
    ],
    release_date: '2020-02-05',
  },
  {
    adult: false,
    backdrop_path: '/vDR2h5uQNgWyx3fsEVnEOcNFibZ.jpg',
    genre_ids: [80, 53],
    id: 801335,
    original_language: 'en',
    original_title: 'Girl in the Basement',
    overview:
      'Sara is a teen girl who is looking forward to her 18th birthday to move away from her controlling father Don. But before she could even blow out the candles, Don imprisons her in the basement of their home.',
    poster_path: '/qmddUxRwbsxHa7oEXm4PWh1KZe8.jpg',
    title: 'Girl in the Basement',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.1,
      },
      {
        id: 'popularity',
        rating: 461.595,
      },
    ],
    release_date: '2021-02-27',
  },
  {
    adult: false,
    backdrop_path: '/gGSm6ZmWtGazs2H1m0gOp7cx1ZZ.jpg',
    genre_ids: [28, 12, 80],
    id: 726429,
    original_language: 'es',
    original_title: 'Xtremo',
    overview:
      'Two years after the murder of his son and father, a retired hitman sets in motion a carefully crafted revenge plan against the killer: his own brother.',
    poster_path: '/cwUhVcDeMYYeu8fq5q1OPOoSbZ7.jpg',
    title: 'Xtreme',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 460.786,
      },
    ],
    release_date: '2021-06-04',
  },
  {
    adult: false,
    backdrop_path: '/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg',
    genre_ids: [10751, 16, 10402, 35, 14],
    id: 508442,
    original_language: 'en',
    original_title: 'Soul',
    overview:
      'Joe Gardner is a middle school teacher with a love for jazz music. After a successful gig at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.',
    poster_path: '/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg',
    title: 'Soul',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.2,
      },
      {
        id: 'popularity',
        rating: 442.459,
      },
    ],
    release_date: '2020-12-25',
  },
  {
    adult: false,
    backdrop_path: '/mYM8x2Atv4MaLulaV0KVJWI1Djv.jpg',
    genre_ids: [28, 80, 53],
    id: 804435,
    original_language: 'en',
    original_title: 'Vanquish',
    overview:
      'Victoria is a young mother trying to put her dark past as a Russian drug courier behind her, but retired cop Damon forces Victoria to do his bidding by holding her daughter hostage. Now, Victoria must use guns, guts and a motorcycle to take out a series of violent gangsters—or she may never see her child again.',
    poster_path: '/AoWY1gkcNzabh229Icboa1Ff0BM.jpg',
    title: 'Vanquish',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 441.947,
      },
    ],
    release_date: '2021-04-16',
  },
  {
    adult: false,
    backdrop_path: '/gGTCDNEvwG848u34Op1nZNALLUr.jpg',
    genre_ids: [28, 80, 53],
    id: 385128,
    original_language: 'en',
    original_title: 'F9',
    overview:
      "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.",
    poster_path: '/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg',
    title: 'F9',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 5860.581,
      },
    ],
    release_date: '2021-05-19',
  },
  {
    adult: false,
    backdrop_path: '/8s4h9friP6Ci3adRGahHARVd76E.jpg',
    genre_ids: [16, 35, 10751, 878],
    id: 379686,
    original_language: 'en',
    original_title: 'Space Jam: A New Legacy',
    overview:
      "When LeBron and his young son Dom are trapped in a digital space by a rogue A.I., LeBron must get them home safe by leading Bugs, Lola Bunny and the whole gang of notoriously undisciplined Looney Tunes to victory over the A.I.'s digitized champions on the court. It's Tunes versus Goons in the highest-stakes challenge of his life.",
    poster_path: '/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg',
    title: 'Space Jam: A New Legacy',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 4781.639,
      },
    ],
    release_date: '2021-07-08',
  },
  {
    adult: false,
    backdrop_path: '/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg',
    genre_ids: [28, 12, 53, 878],
    id: 497698,
    original_language: 'en',
    original_title: 'Black Widow',
    overview:
      'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.',
    poster_path: '/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg',
    title: 'Black Widow',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 4627.772,
      },
    ],
    release_date: '2021-07-07',
  },
  {
    adult: false,
    backdrop_path: '/tehpKMsls621GT9WUQie2Ft6LmP.jpg',
    genre_ids: [12, 53, 28, 27, 37],
    id: 602223,
    original_language: 'en',
    original_title: 'The Forever Purge',
    overview:
      'All the rules are broken as a sect of lawless marauders decides that the annual Purge does not stop at daybreak and instead should never end as they chase a group of immigrants who they want to punish because of their harsh historical past.',
    poster_path: '/uHA5COgDzcxjpYSHHulrKVl6ByL.jpg',
    title: 'The Forever Purge',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 3702.294,
      },
    ],
    release_date: '2021-06-30',
  },
  {
    adult: false,
    backdrop_path: '/gX5UrH1TLVVBwI7WxplW43BD6Z1.jpg',
    genre_ids: [16, 35, 12, 10751],
    id: 459151,
    original_language: 'en',
    original_title: 'The Boss Baby: Family Business',
    overview:
      'The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.',
    poster_path: '/5dExO5G2iaaTxYnLIFKLWofDzyI.jpg',
    title: 'The Boss Baby: Family Business',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 3444.216,
      },
    ],
    release_date: '2021-07-01',
  },
  {
    adult: false,
    backdrop_path: '/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg',
    genre_ids: [16, 35, 10751, 14],
    id: 508943,
    original_language: 'en',
    original_title: 'Luca',
    overview:
      'Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.',
    poster_path: '/jTswp6KyDYKtvC52GbHagrZbGvD.jpg',
    title: 'Luca',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.1,
      },
      {
        id: 'popularity',
        rating: 3019.966,
      },
    ],
    release_date: '2021-06-17',
  },
  {
    adult: false,
    backdrop_path: '/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg',
    genre_ids: [28, 878],
    id: 588228,
    original_language: 'en',
    original_title: 'The Tomorrow War',
    overview:
      'The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a desperate quest to rewrite the fate of the planet.',
    poster_path: '/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg',
    title: 'The Tomorrow War',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.2,
      },
      {
        id: 'popularity',
        rating: 2876.135,
      },
    ],
    release_date: '2021-06-30',
  },
  {
    adult: false,
    backdrop_path: '/zm2kMjiz0u6qdn2XKbEbQkDiltN.jpg',
    genre_ids: [27],
    id: 675024,
    original_language: 'es',
    original_title: 'El exorcismo de Carmen Farías',
    overview:
      "Carmen, a brave journalist, discovers soon after her mother's death that she has inherited her grandma's house. She decides to move there without knowing it hides dark secrets.",
    poster_path: '/uoTPjx07dxTrC1g3dYeaS2WNVGL.jpg',
    title: 'The Exorcism of Carmen Farias',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 2581.669,
      },
    ],
    release_date: '2021-07-05',
  },
  {
    adult: false,
    backdrop_path: '/wjQXZTlFM3PVEUmKf1sUajjygqT.jpg',
    genre_ids: [878, 28, 53],
    id: 581726,
    original_language: 'en',
    original_title: 'Infinite',
    overview:
      'Evan McCauley has skills he never learned and memories of places he has never visited. Self-medicated and on the brink of a mental breakdown, a secret group that call themselves “Infinites” come to his rescue, revealing that his memories are real.',
    poster_path: '/niw2AKHz6XmwiRMLWaoyAOAti0G.jpg',
    title: 'Infinite',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 2045.089,
      },
    ],
    release_date: '2021-06-10',
  },
  {
    adult: false,
    backdrop_path: '/7WJjFviFBffEJvkAms4uWwbcVUk.jpg',
    genre_ids: [12, 14, 35, 28],
    id: 451048,
    original_language: 'en',
    original_title: 'Jungle Cruise',
    overview:
      'Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his dilapidated boat. Together, they search for an ancient tree that holds the power to heal – a discovery that will change the future of medicine.',
    poster_path: '/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
    title: 'Jungle Cruise',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.2,
      },
      {
        id: 'popularity',
        rating: 1946.942,
      },
    ],
    release_date: '2021-07-28',
  },
  {
    adult: false,
    backdrop_path: '/iJ2HVOZT9Kjayrhy21pbGIJs9ey.jpg',
    genre_ids: [28, 12, 14],
    id: 525660,
    original_language: 'cn',
    original_title: '真·三国无双',
    overview:
      'Warlords, warriors and statesmen wage a battle for supremacy in this fantasy tale based on the hit video games and the "Romance of the Three Kingdoms."',
    poster_path: '/7BCTdek5LFHglcgl7shsm7igJAH.jpg',
    title: 'Dynasty Warriors',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 1915.982,
      },
    ],
    release_date: '2021-04-29',
  },
  {
    adult: false,
    backdrop_path: '/3OwaKVZf3A2NdnarqKbwzFEhKir.jpg',
    genre_ids: [16, 14, 10751, 28, 12, 878],
    id: 730840,
    original_language: 'en',
    original_title: 'Trollhunters: Rise of the Titans',
    overview:
      'Arcadia may look like an ordinary town, but it lies at the center of magical and mystical lines that makes it a nexus for many battles among otherworldly creatures, including trolls, aliens, and wizards. Now, various heroes will team-up in an epic adventure where they must fight the Arcane Order for control over the magic that binds them all together.',
    poster_path: '/zvUNFeTz0Sssb210wSiIiHRjA4W.jpg',
    title: 'Trollhunters: Rise of the Titans',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 1837.168,
      },
    ],
    release_date: '2021-07-21',
  },
  {
    adult: false,
    backdrop_path: '/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg',
    genre_ids: [35, 80],
    id: 337404,
    original_language: 'en',
    original_title: 'Cruella',
    overview:
      'In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.',
    poster_path: '/rTh4K5uw9HypmpGslcKd4QfHl93.jpg',
    title: 'Cruella',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.4,
      },
      {
        id: 'popularity',
        rating: 1635.546,
      },
    ],
    release_date: '2021-05-26',
  },
  {
    adult: false,
    backdrop_path: '/70AV2Xx5FQYj20labp0EGdbjI6E.jpg',
    genre_ids: [80, 28, 53],
    id: 637649,
    original_language: 'en',
    original_title: 'Wrath of Man',
    overview:
      "A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.",
    poster_path: '/M7SUK85sKjaStg4TKhlAVyGlz3.jpg',
    title: 'Wrath of Man',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 1558.624,
      },
    ],
    release_date: '2021-04-22',
  },
  {
    adult: false,
    backdrop_path: '/5HjzYTihkH7EvOWSE7KcsF6pBMM.jpg',
    genre_ids: [10751, 35, 12, 16, 14],
    id: 522478,
    original_language: 'en',
    original_title: 'Peter Rabbit 2: The Runaway',
    overview:
      'Bea, Thomas, and the rabbits have created a makeshift family, but despite his best efforts, Peter can’t seem to shake his mischievous reputation. Adventuring out of the garden, Peter finds himself in a world where his mischief is appreciated, but when his family risks everything to come looking for him, Peter must figure out what kind of bunny he wants to be.',
    poster_path: '/cycDz68DtTjJrDJ1fV8EBq2Xdpb.jpg',
    title: 'Peter Rabbit 2: The Runaway',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 1481.849,
      },
    ],
    release_date: '2021-03-25',
  },
  {
    adult: false,
    backdrop_path: '/6FzuNrApEc71aJ3CwwkpadbNled.jpg',
    genre_ids: [28, 35, 80],
    id: 581644,
    original_language: 'en',
    original_title: 'The Misfits',
    overview:
      'After being recruited by a group of unconventional thieves, renowned criminal Richard Pace finds himself caught up in an elaborate gold heist that promises to have far-reaching implications on his life and the lives of countless others.',
    poster_path: '/dPOyYnCkRbWAEem85N3VFpQODf5.jpg',
    title: 'The Misfits',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.4,
      },
      {
        id: 'popularity',
        rating: 1460.728,
      },
    ],
    release_date: '2021-06-10',
  },
  {
    adult: false,
    backdrop_path: '/AsqUSUqXrK8JfH8WEQnCXVbIAv6.jpg',
    genre_ids: [878, 53, 27],
    id: 520763,
    original_language: 'en',
    original_title: 'A Quiet Place Part II',
    overview:
      'Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.',
    poster_path: '/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg',
    title: 'A Quiet Place Part II',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 1436.462,
      },
    ],
    release_date: '2021-05-21',
  },
  {
    adult: false,
    backdrop_path: '/s15olg5LwRqTjgDd5KIfVXhcoqs.jpg',
    genre_ids: [27, 53, 28],
    id: 760883,
    original_language: 'de',
    original_title: 'Blood Red Sky',
    overview:
      'A woman with a mysterious illness is forced into action when a group of terrorists attempt to hijack a transatlantic overnight flight. In order to protect her son she will have to reveal a dark secret, and unleash the inner monster she has fought to hide.',
    poster_path: '/ky8Fua6PD7FyyOA7JACh3GDETli.jpg',
    title: 'Blood Red Sky',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 1427.675,
      },
    ],
    release_date: '2021-07-23',
  },
  {
    adult: false,
    backdrop_path: '/x9p2syPxeK2OYCpz35fsg0EFjlG.jpg',
    genre_ids: [16, 28, 12, 35, 10751, 14, 878],
    id: 834404,
    original_language: 'en',
    original_title: 'Teen Titans Go! See Space Jam',
    overview:
      "The Teen Titans are visited by the Nerdlucks, the Space Jam villains who tried to capture Michael Jordan and the Looney Tunes. Astonished to discover his fellow Titans have never seen Space Jam, Cyborg organizes an exclusive watch party. Of course, if the Titans are watching a movie, don't expect silence to be golden. Raven and Starfire provide the commentary, Cyborg presents the fun facts, Beast Boy points out the butt shots, and Robin, but Robin doesn't trust their new alien friends. Are the Nerdlucks here to attend an innocent watch party, or do they have more sinister motives up their sleeves?",
    poster_path: '/rMoVOCw6DF3zC6hS76ZhQMWiXNX.jpg',
    title: 'Teen Titans Go! See Space Jam',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 1326.877,
      },
    ],
    release_date: '2021-06-20',
  },
  {
    adult: false,
    backdrop_path: '/zsH3iW60T1t2HBTtrSKzzxJ406J.jpg',
    genre_ids: [16, 35, 10751],
    id: 846214,
    original_language: 'en',
    original_title: 'The Simpsons: The Good, the Bart, and the Loki',
    overview:
      'Loki is banished from Asgard once again and must face his toughest opponents yet: the Simpsons and Springfield’s mightiest heroes. The God of Mischief teams up with Bart Simpson in the ultimate crossover event paying tribute to the Marvel Cinematic Universe of superheroes and villains.',
    poster_path: '/rtMdtzywcAGOrF6t8fbxJBqpdcq.jpg',
    title: 'The Simpsons: The Good, the Bart, and the Loki',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 1278.673,
      },
    ],
    release_date: '2021-07-07',
  },
  {
    adult: false,
    backdrop_path: '/5H1NuHeLuApgKhFvhQWoLMBqYa.jpg',
    genre_ids: [18],
    id: 833971,
    original_language: 'es',
    original_title: 'La Casa de las Flores: la película',
    overview:
      'The De La Mora siblings concoct a mischievous plan to break into their old family home to retrieve a hidden treasure of significant importance.',
    poster_path: '/nzbwTwSo8aKuvAytaPG6s0xGVE8.jpg',
    title: 'The House of Flowers: The Movie',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.2,
      },
      {
        id: 'popularity',
        rating: 282.35,
      },
    ],
    release_date: '2021-06-23',
  },
  {
    adult: false,
    backdrop_path: '/vw3zNfzvnVNF7nIjpiEgcdznfeC.jpg',
    genre_ids: [16, 28, 14],
    id: 664767,
    original_language: 'en',
    original_title: "Mortal Kombat Legends: Scorpion's Revenge",
    overview:
      'After the vicious slaughter of his family by stone-cold mercenary Sub-Zero, Hanzo Hasashi is exiled to the torturous Netherrealm. There, in exchange for his servitude to the sinister Quan Chi, he’s given a chance to avenge his family – and is resurrected as Scorpion, a lost soul bent on revenge. Back on Earthrealm, Lord Raiden gathers a team of elite warriors – Shaolin monk Liu Kang, Special Forces officer Sonya Blade and action star Johnny Cage – an unlikely band of heroes with one chance to save humanity. To do this, they must defeat Shang Tsung’s horde of Outworld gladiators and reign over the Mortal Kombat tournament.',
    poster_path: '/4VlXER3FImHeFuUjBShFamhIp9M.jpg',
    title: "Mortal Kombat Legends: Scorpion's Revenge",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.3,
      },
      {
        id: 'popularity',
        rating: 282.137,
      },
    ],
    release_date: '2020-04-12',
  },
  {
    adult: false,
    backdrop_path: '/jeAQdDX9nguP6YOX6QSWKDPkbBo.jpg',
    genre_ids: [14, 28, 878],
    id: 590706,
    original_language: 'en',
    original_title: 'Jiu Jitsu',
    overview:
      'Every six years, an ancient order of jiu-jitsu fighters joins forces to battle a vicious race of alien invaders. But when a celebrated war hero goes down in defeat, the fate of the planet and mankind hangs in the balance.',
    poster_path: '/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg',
    title: 'Jiu Jitsu',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.1,
      },
      {
        id: 'popularity',
        rating: 279.657,
      },
    ],
    release_date: '2020-11-20',
  },
  {
    adult: false,
    backdrop_path: '/4QA7pKpmNgeXkhN1FFIBelHwr6V.jpg',
    genre_ids: [16, 28, 12, 35, 18, 14, 10749],
    id: 784500,
    original_language: 'ja',
    original_title: '劇場版 美少女戦士セーラームーンEternal 前編',
    overview:
      'While under the care of the Outer Sailor Guardians, Hotaru begins to age rapidly. Then, the time comes for all the Sailor Guardians to reunite!',
    poster_path: '/f91rtk8dODezNLT3grQrELyzFwA.jpg',
    title: 'Pretty Guardian Sailor Moon Eternal The Movie Part 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.2,
      },
      {
        id: 'popularity',
        rating: 273.143,
      },
    ],
    release_date: '2021-02-11',
  },
  {
    adult: false,
    backdrop_path: '/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
    genre_ids: [12, 878, 28],
    id: 299534,
    original_language: 'en',
    original_title: 'Avengers: Endgame',
    overview:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    poster_path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    title: 'Avengers: Endgame',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.3,
      },
      {
        id: 'popularity',
        rating: 272.805,
      },
    ],
    release_date: '2019-04-24',
  },
  {
    adult: false,
    backdrop_path: '/8XiTPU1zfy41Xgg96TCHXj4uQJf.jpg',
    genre_ids: [28, 12, 878],
    id: 429617,
    original_language: 'en',
    original_title: 'Spider-Man: Far From Home',
    overview:
      'Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.',
    poster_path: '/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg',
    title: 'Spider-Man: Far From Home',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 272.613,
      },
    ],
    release_date: '2019-06-28',
  },
  {
    adult: false,
    backdrop_path: '/roYyPiQDQKmIKUEhO912693tSja.jpg',
    genre_ids: [27, 18, 878],
    id: 447332,
    original_language: 'en',
    original_title: 'A Quiet Place',
    overview:
      'A family is forced to live in silence while hiding from creatures that hunt by sound.',
    poster_path: '/nAU74GmpUk7t5iklEp3bufwDq4n.jpg',
    title: 'A Quiet Place',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 272.485,
      },
    ],
    release_date: '2018-04-03',
  },
  {
    adult: false,
    backdrop_path: '/3ombg55JQiIpoPnXYb2oYdr6DtP.jpg',
    genre_ids: [878, 28],
    id: 560144,
    original_language: 'en',
    original_title: 'Skylines',
    overview:
      "When a virus threatens to turn the now earth-dwelling friendly alien hybrids against humans, Captain Rose Corley must lead a team of elite mercenaries on a mission to the alien world in order to save what's left of humanity.",
    poster_path: '/2W4ZvACURDyhiNnSIaFPHfNbny3.jpg',
    title: 'Skylines',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 262.258,
      },
    ],
    release_date: '2020-10-25',
  },
  {
    adult: false,
    backdrop_path: '/b2NJHrx796DcD403eZoX4qt7cjf.jpg',
    genre_ids: [35],
    id: 835666,
    original_language: 'pt',
    original_title: 'Como Hackear Seu Chefe',
    overview:
      "Victor accidentally sends a compromising email to his nagging boss. With the help of his office crush and a clueless friend, he'll try to save his job while having to deal with a rook hacker the porn industry, a children's online game and Smiley, the company mascot.",
    poster_path: '/sXIIGA2VeK1FAhd9c547kcBIryq.jpg',
    title: 'Como Hackear Seu Chefe',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 260.841,
      },
    ],
    release_date: '2021-06-04',
  },
  {
    adult: false,
    backdrop_path: '/6XVqVAMOsKL5C26pHesiAawuGYW.jpg',
    genre_ids: [27, 53],
    id: 630586,
    original_language: 'en',
    original_title: 'Wrong Turn',
    overview:
      'Jen and a group of friends set out to hike the Appalachian Trail. Despite warnings to stick to the trail, the hikers stray off course—and cross into land inhabited by The Foundation, a hidden community of mountain dwellers who use deadly means to protect their way of life.',
    poster_path: '/4U1SBHmwHkNA0eHZ2n1CuiC1K1g.jpg',
    title: 'Wrong Turn',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 260.165,
      },
    ],
    release_date: '2021-01-26',
  },
  {
    adult: false,
    backdrop_path: '/eTgQlyIQH0nA5BsmYpvCzSPAorg.jpg',
    genre_ids: [53, 28, 18],
    id: 793723,
    original_language: 'fr',
    original_title: 'Sentinelle',
    overview:
      'Transferred home after a traumatizing combat mission, a highly trained French soldier uses her lethal skills to hunt down the man who hurt her sister.',
    poster_path: '/AmUGn1rJ9XDDP6DYn9OA2uV8MIg.jpg',
    title: 'Sentinelle',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 255.963,
      },
    ],
    release_date: '2021-03-05',
  },
  {
    adult: false,
    backdrop_path: '/lwRhCxyEiGdvhjCWuLpOANthysH.jpg',
    genre_ids: [53, 18, 9648],
    id: 522406,
    original_language: 'en',
    original_title: 'Flashback',
    overview:
      'Frederick Fitzell is living his best life—until he starts having horrific visions of Cindy, a girl who vanished in high school. After reaching out to old friends with whom he used to take a mystery drug called Mercury, Fredrick realizes the only way to stop the visions lies deep within his own memories, so he embarks on a terrifying mental odyssey to learn the truth.',
    poster_path: '/prffYgzc7xYWXBiFoFfsgzgrNfj.jpg',
    title: 'Flashback',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 252.544,
      },
    ],
    release_date: '2021-06-03',
  },
  {
    adult: false,
    backdrop_path: '/6mKAKhj8POVGqV1GsroS5mGIUe9.jpg',
    genre_ids: [14, 28, 12],
    id: 666750,
    original_language: 'en',
    original_title: 'Dragonheart: Vengeance',
    overview:
      'Lukas, a young farmer whose family is killed by savage raiders in the countryside, sets out on an epic quest for revenge, forming an unlikely trio with a majestic dragon and a swashbuckling, sword-fighting mercenary, Darius.',
    poster_path: '/qs6gz6atyQcAvqC6qZaslOjliUG.jpg',
    title: 'Dragonheart: Vengeance',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 252.104,
      },
    ],
    release_date: '2020-02-04',
  },
  {
    adult: false,
    backdrop_path: '/7HtvmsLrDeiAgDGa1W3m6senpfE.jpg',
    genre_ids: [12, 16, 10751],
    id: 681260,
    original_language: 'en',
    original_title: 'Maya the Bee: The Golden Orb',
    overview:
      'When Maya, a headstrong little bee, and her best friend Willi, rescue an ant princess they find themselves in the middle of an epic bug battle that will take them to strange new worlds and test their friendship to its limits.',
    poster_path: '/tMS2qcbhbkFpcwLnbUE9o9IK4HH.jpg',
    title: 'Maya the Bee: The Golden Orb',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 251.149,
      },
    ],
    release_date: '2021-01-07',
  },
  {
    adult: false,
    backdrop_path: '/y0SiXoTLQp93NbLQ4XhgVz18UAS.jpg',
    genre_ids: [16, 28, 14],
    id: 663558,
    original_language: 'en',
    original_title: 'NE ZHA Reborn',
    overview:
      '3000 years after the boy-god Nezha conquers the Dragon King then disappears in mythological times, he returns as an ordinary man to find his own path to becoming a true hero.',
    poster_path: '/6goDkAD6J3br81YMQf0Gat8Bqjy.jpg',
    title: 'New Gods: Nezha Reborn',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.4,
      },
      {
        id: 'popularity',
        rating: 248.172,
      },
    ],
    release_date: '2021-02-06',
  },
  {
    adult: false,
    backdrop_path: '/z7HLq35df6ZpRxdMAE0qE3Ge4SJ.jpg',
    genre_ids: [28, 12, 35],
    id: 615678,
    original_language: 'en',
    original_title: 'Thunder Force',
    overview:
      'In a world where supervillains are commonplace, two estranged childhood best friends reunite after one devises a treatment that gives them powers to protect their city.',
    poster_path: '/3mKMWP5OokB7QpcOMA1yl8BXFAF.jpg',
    title: 'Thunder Force',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 246.626,
      },
    ],
    release_date: '2021-04-09',
  },
  {
    adult: false,
    backdrop_path: '/zLTfRrrVXNW3OWUk6U1eFZhB18m.jpg',
    genre_ids: [28, 35, 16],
    id: 347201,
    original_language: 'ja',
    original_title: 'BORUTO -NARUTO THE MOVIE-',
    overview:
      "The spirited Boruto Uzumaki, son of Seventh Hokage Naruto, is a skilled ninja who possesses the same brashness and passion his father once had. However, the constant absence of his father, who is busy with his Hokage duties, puts a damper on Boruto's fire. He ends up meeting his father's friend Sasuke, and requests to become... his apprentice!? The curtain on the story of the new generation rises!",
    poster_path: '/1k6iwC4KaPvTBt1JuaqXy3noZRY.jpg',
    title: 'Boruto: Naruto the Movie',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 245.375,
      },
    ],
    release_date: '2015-08-07',
  },
  {
    adult: false,
    backdrop_path: '/aoHiMjRt0Qs1dtkV61LyxTnQtJl.jpg',
    genre_ids: [12, 14],
    id: 337401,
    original_language: 'en',
    original_title: 'Mulan',
    overview:
      'When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.',
    poster_path: '/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg',
    title: 'Mulan',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 245.301,
      },
    ],
    release_date: '2020-09-04',
  },
  {
    adult: false,
    backdrop_path: '/bjIPzixuWnOzxDG25WaXKuy9lYZ.jpg',
    genre_ids: [28, 35, 53],
    id: 522931,
    original_language: 'en',
    original_title: "Hitman's Wife's Bodyguard",
    overview:
      "The world’s most lethal odd couple – bodyguard Michael Bryce and hitman Darius Kincaid – are back on another life-threatening mission. Still unlicensed and under scrutiny, Bryce is forced into action by Darius's even more volatile wife, the infamous international con artist Sonia Kincaid. As Bryce is driven over the edge by his two most dangerous protectees, the trio get in over their heads in a global plot and soon find that they are all that stand between Europe and a vengeful and powerful madman.",
    poster_path: '/6zwGWDpY8Zu0L6W4SYWERBR8Msw.jpg',
    title: "Hitman's Wife's Bodyguard",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 243.451,
      },
    ],
    release_date: '2021-06-14',
  },
  {
    adult: false,
    backdrop_path: '/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg',
    genre_ids: [28, 53, 80],
    id: 458156,
    original_language: 'en',
    original_title: 'John Wick: Chapter 3 - Parabellum',
    overview:
      'Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.',
    poster_path: '/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg',
    title: 'John Wick: Chapter 3 - Parabellum',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 242.683,
      },
    ],
    release_date: '2019-05-15',
  },
  {
    adult: false,
    backdrop_path: '/c7dFSqZQYqNNJVpacpIGZe3gkLW.jpg',
    genre_ids: [16, 35, 14],
    id: 813258,
    original_language: 'en',
    original_title: 'Monster Pets: A Hotel Transylvania Short',
    overview:
      'Drac tries out some new monster pets to help occupy Tinkles for playtime.',
    poster_path: '/dkokENeY5Ka30BFgWAqk14mbnGs.jpg',
    title: 'Monster Pets: A Hotel Transylvania Short',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 709.295,
      },
    ],
    release_date: '2021-04-02',
  },
  {
    adult: false,
    backdrop_path: '/rlNnwObbMu5G2FaOUlacnUIdIIA.jpg',
    genre_ids: [16, 35, 10751, 12],
    id: 726684,
    original_language: 'fr',
    original_title: 'Miraculous World : Shanghai, la légende de Ladydragon',
    overview:
      'On school break, Marinette heads to Shanghai to meet Adrien. But after arriving, Marinette loses all her stuff, including the Miraculous that allows her to turn into Ladybug!',
    poster_path: '/qQ0VKsGRQ2ofAmswGNzZnvC1xPE.jpg',
    title: 'Miraculous World: Shanghai – The Legend of Ladydragon',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 703.442,
      },
    ],
    release_date: '2021-04-04',
  },
  {
    adult: false,
    backdrop_path: '/7jpj6ek9dftr3IXm7Pnq2pkhir3.jpg',
    genre_ids: [27, 9648],
    id: 591274,
    original_language: 'en',
    original_title: 'Fear Street: 1978',
    overview:
      "In 1978, two rival groups at Camp Nightwing must band together to solve a terrifying mystery when horrors from their towns' history come alive.",
    poster_path: '/5dNTxhoGDTHHGqUTdxcr4H1dqlU.jpg',
    title: 'Fear Street: 1978',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 695.095,
      },
    ],
    release_date: '2021-07-08',
  },
  {
    adult: false,
    backdrop_path: '/vqEjXzWdzPbV2DZ7bk29weDFiDl.jpg',
    genre_ids: [16, 12, 10751, 37],
    id: 637693,
    original_language: 'en',
    original_title: 'Spirit Untamed',
    overview:
      "Lucky Prescott's life is changed forever when she moves from her home in the city to a small frontier town and befriends a wild mustang named Spirit.",
    poster_path: '/5cbGVDmRMYVzkq5cItZ7cYlDdDR.jpg',
    title: 'Spirit Untamed',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 688.728,
      },
    ],
    release_date: '2021-05-20',
  },
  {
    adult: false,
    backdrop_path: '/5Zv5KmgZzdIvXz2KC3n0MyecSNL.jpg',
    genre_ids: [28, 53, 80],
    id: 634528,
    original_language: 'en',
    original_title: 'The Marksman',
    overview:
      'Jim Hanson’s quiet life is suddenly disturbed by two people crossing the US/Mexico border – a woman and her young son – desperate to flee a Mexican cartel. After a shootout leaves the mother dead, Jim becomes the boy’s reluctant defender. He embraces his role as Miguel’s protector and will stop at nothing to get him to safety, as they go on the run from the relentless assassins.\r Stars...Liam Neeson',
    poster_path: '/6vcDalR50RWa309vBH1NLmG2rjQ.jpg',
    title: 'The Marksman',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 674.594,
      },
    ],
    release_date: '2021-01-15',
  },
  {
    adult: false,
    backdrop_path: '/jw6ASGRT2gi8EjCImpGtbiJ9NQ9.jpg',
    genre_ids: [27],
    id: 632357,
    original_language: 'en',
    original_title: 'The Unholy',
    overview:
      'Alice, a young hearing-impaired girl who, after a supposed visitation from the Virgin Mary, is inexplicably able to hear, speak and heal the sick. As word spreads and people from near and far flock to witness her miracles, a disgraced journalist hoping to revive his career visits the small New England town to investigate. When terrifying events begin to happen all around, he starts to question if these phenomena are the works of the Virgin Mary or something much more sinister.',
    poster_path: '/bShgiEQoPnWdw4LBrYT5u18JF34.jpg',
    title: 'The Unholy',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 670.579,
      },
    ],
    release_date: '2021-03-31',
  },
  {
    adult: false,
    backdrop_path: '/rAgsOIhqRS6tUthmHoqnqh9PIAE.jpg',
    genre_ids: [28, 12, 35, 878],
    id: 436969,
    original_language: 'en',
    original_title: 'The Suicide Squad',
    overview:
      'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
    poster_path: '/464N3J1i6L5SsazPmX9m3q1GiZ3.jpg',
    title: 'The Suicide Squad',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.3,
      },
      {
        id: 'popularity',
        rating: 666.854,
      },
    ],
    release_date: '2021-07-28',
  },
  {
    adult: false,
    backdrop_path: '/80sOjpOe7M7sYjvYlhdnQTdxCl7.jpg',
    genre_ids: [35],
    id: 845422,
    original_language: 'es',
    original_title: 'Fondeados',
    overview:
      'While blind drunk, two unemployed millennials entrepreneurs drunkenly post a video pitch about their revolutionary app to a crowdfunding site. When the app catches fire and they accidentally raise millions of dollars they actually have to create the app.',
    poster_path: '/ytenWBdOd9UtMjyAsJuqBbTl67X.jpg',
    title: 'Bankrolled',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 666.38,
      },
    ],
    release_date: '2021-07-23',
  },
  {
    adult: false,
    backdrop_path: '/uWeffFhprUohUL5GO3YfQqdsVrI.jpg',
    genre_ids: [18, 80, 28, 53],
    id: 615457,
    original_language: 'en',
    original_title: 'Nobody',
    overview:
      'Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a "nobody." When two thieves break into his home one night, Hutch\'s unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.',
    poster_path: '/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg',
    title: 'Nobody',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.4,
      },
      {
        id: 'popularity',
        rating: 649.242,
      },
    ],
    release_date: '2021-03-26',
  },
  {
    adult: false,
    backdrop_path: '/uEWCi9fc89m9qS5SNshlvxkSsLJ.jpg',
    genre_ids: [27, 53],
    id: 159211,
    original_language: 'en',
    original_title: 'The Haunting of Helena',
    overview:
      'After a divorce, Sophia moves to the south of Italy with her daughter, Helena. Their new home, an apartment within an austere building of the fascist age, is a chance for them to start a new life. But inside an old storage room hides a mysterious closet and a buried secret. After the loss of Helena’s first baby tooth, a chilling obsession begins and an apparition haunts her sleep...',
    poster_path: '/iB8rf8FYHGlrbmLybCo6Mpg8hNt.jpg',
    title: 'The Haunting of Helena',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.4,
      },
      {
        id: 'popularity',
        rating: 636.523,
      },
    ],
    release_date: '2013-01-14',
  },
  {
    adult: false,
    backdrop_path: '/jWMWZ2ttg8B8YtVzG04UfhlcL67.jpg',
    genre_ids: [28, 53],
    id: 809314,
    original_language: 'en',
    original_title: 'Trigger Point',
    overview:
      "Nicolas Shaw is a retired U.S. special operative who becomes part of an elite 'invisible' team that quietly takes out the worst villains around the world.",
    poster_path: '/qlXenN6jjgbsIyEJxBjkfkEU0q8.jpg',
    title: 'Trigger Point',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 631.139,
      },
    ],
    release_date: '2021-04-23',
  },
  {
    adult: false,
    backdrop_path: '/h9DIlghaiTxbQbt1FIwKNbQvEL.jpg',
    genre_ids: [28, 12, 53],
    id: 581387,
    original_language: 'ko',
    original_title: '백두산',
    overview:
      'A group of unlikely heroes from across the Korean peninsula try to save the day after a volcano erupts on the mythical and majestic Baekdu Mountain.',
    poster_path: '/gCZ0RHifBxZGedde7WPWSgjpyZt.jpg',
    title: 'Ashfall',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 629.719,
      },
    ],
    release_date: '2019-12-19',
  },
  {
    adult: false,
    backdrop_path: '/hJuDvwzS0SPlsE6MNFOpznQltDZ.jpg',
    genre_ids: [10751, 14, 16, 28, 12],
    id: 527774,
    original_language: 'en',
    original_title: 'Raya and the Last Dragon',
    overview:
      'Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.',
    poster_path: '/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
    title: 'Raya and the Last Dragon',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.1,
      },
      {
        id: 'popularity',
        rating: 623.087,
      },
    ],
    release_date: '2021-03-03',
  },
  {
    adult: false,
    backdrop_path: '/xH23sRbfMtwZ2oBtBf607VUNrGt.jpg',
    genre_ids: [27],
    id: 645856,
    original_language: 'en',
    original_title: 'The Seventh Day',
    overview:
      'A renowned exorcist teams up with a rookie priest for his first day of training. As they plunge deeper into hell on earth, the lines between good and evil blur, and their own demons emerge.',
    poster_path: '/dtt2dfMdmlCcgaJZkPPQsIY5oR6.jpg',
    title: 'The Seventh Day',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.6,
      },
      {
        id: 'popularity',
        rating: 605.406,
      },
    ],
    release_date: '2021-03-26',
  },
  {
    adult: false,
    backdrop_path: '/kkXMDMRGtuO9cewtFjWNREC74nf.jpg',
    genre_ids: [28, 35, 36, 16, 14],
    id: 739542,
    original_language: 'en',
    original_title: 'America: The Motion Picture',
    overview:
      'A chainsaw-wielding George Washington teams with beer-loving bro Sam Adams to take down the Brits in a tongue-in-cheek riff on the American Revolution.',
    poster_path: '/1JRRvx5RotvWM1maeq9r82ktdHi.jpg',
    title: 'America: The Motion Picture',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 599.436,
      },
    ],
    release_date: '2021-06-30',
  },
  {
    adult: false,
    backdrop_path: '/xEopUXG3LwBpBav8xT2YxKQhb22.jpg',
    genre_ids: [18, 27, 9648, 35],
    id: 768334,
    original_language: 'it',
    original_title: 'A Classic Horror Story',
    overview:
      'Five carpoolers travel in a motorhome to reach a common destination. Night falls, and to avoid a dead animal carcass, they crash into a tree. When they come to their senses, they find themselves in the middle of nowhere. The road they were traveling on has disappeared and there is only a dense, impenetrable forest and a wooden house in the middle of a clearing, which they discover is the home of a spine-chilling cult.',
    poster_path: '/xnxGmUof0HiugUaNbUFiS4GJPx4.jpg',
    title: 'A Classic Horror Story',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 590.241,
      },
    ],
    release_date: '2021-07-14',
  },
  {
    adult: false,
    backdrop_path: '/fmIp40ev4VGquK2bMo52PQgaV2d.jpg',
    genre_ids: [16, 10751, 12, 14, 35],
    id: 529203,
    original_language: 'en',
    original_title: 'The Croods: A New Age',
    overview:
      "Searching for a safer habitat, the prehistoric Crood family discovers an idyllic, walled-in paradise that meets all of its needs. Unfortunately, they must also learn to live with the Bettermans -- a family that's a couple of steps above the Croods on the evolutionary ladder. As tensions between the new neighbors start to rise, a new threat soon propels both clans on an epic adventure that forces them to embrace their differences, draw strength from one another, and survive together.",
    poster_path: '/tbVZ3Sq88dZaCANlUcewQuHQOaE.jpg',
    title: 'The Croods: A New Age',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 584.255,
      },
    ],
    release_date: '2020-11-25',
  },
  {
    adult: false,
    backdrop_path: '/kroGs6BT7NuMQgYF4Mo32eKaSES.jpg',
    genre_ids: [878, 53],
    id: 842171,
    original_language: 'th',
    original_title: 'โปรเจกต์ลับ หลับ เป็น ตาย',
    overview:
      'Four insomniac med school students are lured into a neuroscience experiment that spirals out of control and must find a way out before it’s too late.',
    poster_path: '/jhbJCqSUmhFJJYo27DP44kdN6Fb.jpg',
    title: 'Deep',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 566.424,
      },
    ],
    release_date: '2021-07-16',
  },
  {
    adult: false,
    backdrop_path: '/ouOojiypBE6CD1aqcHPVq7cJf2R.jpg',
    genre_ids: [18, 53, 28],
    id: 578701,
    original_language: 'en',
    original_title: 'Those Who Wish Me Dead',
    overview:
      'A young boy finds himself pursued by two assassins in the Montana wilderness, with a survival expert determined to protect him, and a forest fire threatening to consume them all.',
    poster_path: '/xCEg6KowNISWvMh8GvPSxtdf9TO.jpg',
    title: 'Those Who Wish Me Dead',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 566.334,
      },
    ],
    release_date: '2021-05-05',
  },
  {
    adult: false,
    backdrop_path: '/7JENyUT8ABxcvrcijDBVpdjgCY9.jpg',
    genre_ids: [27, 53, 9648],
    id: 602734,
    original_language: 'en',
    original_title: 'Spiral: From the Book of Saw',
    overview:
      'Working in the shadow of an esteemed police veteran, brash Detective Ezekiel “Zeke” Banks and his rookie partner take charge of a grisly investigation into murders that are eerily reminiscent of the city’s gruesome past.  Unwittingly entrapped in a deepening mystery, Zeke finds himself at the center of the killer’s morbid game.',
    poster_path: '/lcyKve7nXRFgRyms9M1bndNkKOx.jpg',
    title: 'Spiral: From the Book of Saw',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 561.868,
      },
    ],
    release_date: '2021-05-12',
  },
  {
    adult: false,
    backdrop_path: '/5VKquU8PNujrxLmsYGHf2TCRNFQ.jpg',
    genre_ids: [878],
    id: 582306,
    original_language: 'en',
    original_title: 'Assassin 33 A.D.',
    overview:
      'When a billionaire gives a group of young scientists unlimited resources to study the science of matter transfer, the scientists unlock the secrets of time travel. But they soon find out that the project is backed by a militant extremist group, and the billionaire plans to go back in time and prove that Jesus never rose from the dead.',
    poster_path: '/8jDvtdH327I8TgX3UPdkAsZF1dA.jpg',
    title: 'Assassin 33 A.D.',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.6,
      },
      {
        id: 'popularity',
        rating: 242.053,
      },
    ],
    release_date: '2020-01-24',
  },
  {
    adult: false,
    backdrop_path: '/kzIiKLccwuzD3qD5OHFyPIkiqEw.jpg',
    genre_ids: [28, 10749, 16],
    id: 317442,
    original_language: 'ja',
    original_title: 'The Last: Naruto the Movie',
    overview:
      'Two years after the events of the Fourth Great Ninja War, the moon that Hagoromo Otsutsuki created long ago to seal away the Gedo Statue begins to descend towards the world, threatening to become a meteor that would destroy everything on impact. Amidst this crisis, a direct descendant of Kaguya Otsutsuki named Toneri Otsutsuki attempts to kidnap Hinata Hyuga but ends up abducting her younger sister Hanabi. Naruto and his allies now mount a rescue mission before finding themselves embroiled in a final battle to decide the fate of everything.',
    poster_path: '/bAQ8O5Uw6FedtlCbJTutenzPVKd.jpg',
    title: 'The Last: Naruto the Movie',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 241.606,
      },
    ],
    release_date: '2014-12-06',
  },
  {
    adult: false,
    backdrop_path: '/xrAaJAn3hqkInq5kE1AGJqIGXyT.jpg',
    genre_ids: [27],
    id: 573680,
    original_language: 'en',
    original_title: 'The Banishing',
    overview:
      'In the 1930s, a young reverend and his family are forced to confront their worst fears when they discover their new home holds a horrifying secret.',
    poster_path: '/xD9mc8JCVXA8T8u4Od7qOUBuGH4.jpg',
    title: 'The Banishing',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 241.106,
      },
    ],
    release_date: '2021-04-29',
  },
  {
    adult: false,
    backdrop_path: '/m03jul0YdVEOFXEQVUv6pOVQYGL.jpg',
    genre_ids: [10751, 14, 35, 16],
    id: 400155,
    original_language: 'en',
    original_title: 'Hotel Transylvania 3: Summer Vacation',
    overview:
      'Dracula, Mavis, Johnny and the rest of the Drac Pack take a vacation on a luxury Monster Cruise Ship, where Dracula falls in love with the ship’s captain, Ericka, who’s secretly a descendant of Abraham Van Helsing, the notorious monster slayer.',
    poster_path: '/o7RY5zNHdH2heGS1hET2Rt6hZOe.jpg',
    title: 'Hotel Transylvania 3: Summer Vacation',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 240.244,
      },
    ],
    release_date: '2018-06-28',
  },
  {
    adult: false,
    backdrop_path: '/15BJ65zMu2bBQEztTvqTAoobAKB.jpg',
    genre_ids: [80, 18, 53, 28],
    id: 606523,
    original_language: 'ko',
    original_title: '낙원의 밤',
    overview:
      'An assassin named Tae-goo is offered a chance to switch sides with his rival Bukseong gang, headed by Chairman Doh. Tae-goo rejects the offer that results in the murder of his sister and niece. In revenge, Tae-goo brutally kills Chairman Doh and his men and flees to Jeju Island where he meets Jae-yeon, a terminally ill woman. Though, the henchman of the Bukseong gang, Executive Ma is mercilessly hunting Tae-goo to take revenge.',
    poster_path: '/dYCWUAidqgakGETwZkfGxU7CWhL.jpg',
    title: 'Night in Paradise',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 235.347,
      },
    ],
    release_date: '2020-09-03',
  },
  {
    adult: false,
    backdrop_path: '/4mfFtlGeInPrQVm1hpv7th02yjx.jpg',
    genre_ids: [27, 9648, 53],
    id: 259693,
    original_language: 'en',
    original_title: 'The Conjuring 2',
    overview:
      'Lorraine and Ed Warren travel to north London to help a single mother raising four children alone in a house plagued by malicious spirits.',
    poster_path: '/zEqyD0SBt6HL7W9JQoWwtd5Do1T.jpg',
    title: 'The Conjuring 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 235.101,
      },
    ],
    release_date: '2016-05-13',
  },
  {
    adult: false,
    backdrop_path: '/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg',
    genre_ids: [18, 28, 53],
    id: 545609,
    original_language: 'en',
    original_title: 'Extraction',
    overview:
      'Tyler Rake, a fearless mercenary who offers his services on the black market, embarks on a dangerous mission when he is hired to rescue the kidnapped son of a Mumbai crime lord.',
    poster_path: '/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg',
    title: 'Extraction',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 233.848,
      },
    ],
    release_date: '2020-04-24',
  },
  {
    adult: false,
    backdrop_path: '/4GlSMUpzSd3cliYGFJVziSDX53S.jpg',
    genre_ids: [12, 14],
    id: 671,
    original_language: 'en',
    original_title: "Harry Potter and the Philosopher's Stone",
    overview:
      "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
    poster_path: '/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg',
    title: "Harry Potter and the Philosopher's Stone",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 233.151,
      },
    ],
    release_date: '2001-11-16',
  },
  {
    adult: false,
    backdrop_path: '/6hgItrYQEG33y0I7yP2SRl2ei4w.jpg',
    genre_ids: [10749, 18],
    id: 613504,
    original_language: 'en',
    original_title: 'After We Collided',
    overview:
      'Tessa finds herself struggling with her complicated relationship with Hardin; she faces a dilemma that could change their lives forever.',
    poster_path: '/kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg',
    title: 'After We Collided',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 232.949,
      },
    ],
    release_date: '2020-09-02',
  },
  {
    adult: false,
    backdrop_path: '/czHYg6LQ5926OL8wj5kC09pNR12.jpg',
    genre_ids: [27, 35],
    id: 647302,
    original_language: 'en',
    original_title: 'Benny Loves You',
    overview:
      'Jack, a man desperate to improve his life, throws away his beloved childhood plush, Benny. It’s a move that has disastrous consequences when Benny springs to life with deadly intentions!',
    poster_path: '/mQ8vALvqA0z0qglG3gI6xpVcslo.jpg',
    title: 'Benny Loves You',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 232.516,
      },
    ],
    release_date: '2019-11-21',
  },
  {
    adult: false,
    backdrop_path: '/8LHSDyRizQ4kQz5rEHPKyXPvMG3.jpg',
    genre_ids: [16, 10752, 878],
    id: 736069,
    original_language: 'en',
    original_title: 'Justice Society: World War II',
    overview:
      'When the Flash finds himself dropped into the middle of World War II, he joins forces with Wonder Woman and her top-secret team known as the Justice Society of America.',
    poster_path: '/e4REOC6CZW8J6FslA4nRvdQXFXR.jpg',
    title: 'Justice Society: World War II',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 230.235,
      },
    ],
    release_date: '2021-04-27',
  },
  {
    adult: false,
    backdrop_path: '/l5yp73psXVRYy2ce09lD8yDuu2g.jpg',
    genre_ids: [27, 53],
    id: 138843,
    original_language: 'en',
    original_title: 'The Conjuring',
    overview:
      'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse. Forced to confront a powerful entity, the Warrens find themselves caught in the most terrifying case of their lives.',
    poster_path: '/wVYREutTvI2tmxr6ujrHT704wGF.jpg',
    title: 'The Conjuring',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 230.116,
      },
    ],
    release_date: '2013-03-20',
  },
  {
    adult: false,
    backdrop_path: '/wzJRB4MKi3yK138bJyuL9nx47y6.jpg',
    genre_ids: [28, 53, 878],
    id: 577922,
    original_language: 'en',
    original_title: 'Tenet',
    overview:
      'Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
    poster_path: '/k68nPLbIST6NP96JmTxmZijEvCA.jpg',
    title: 'Tenet',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 228.537,
      },
    ],
    release_date: '2020-08-22',
  },
  {
    adult: false,
    backdrop_path: '/1n1ravUpU0bBY4nBorl2mhAaEKw.jpg',
    genre_ids: [10751],
    id: 814094,
    original_language: 'en',
    original_title: 'The Healing Garden',
    overview:
      'An aging military chaplain and a young girl from a broken home join forces to plant a miracle garden touched by God. The Healing Garden is a faith-based film, laced with warmth and comedy. It celebrates the healing of families and communities through faith.',
    poster_path: '/xvucmkfomDPhgvhQ1YtWrV11wQN.jpg',
    title: 'The Healing Garden',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4,
      },
      {
        id: 'popularity',
        rating: 228.356,
      },
    ],
    release_date: '2021-02-22',
  },
  {
    adult: false,
    backdrop_path: '/jnq4fV53Px9HvUZD2bQIxtGSwS7.jpg',
    genre_ids: [80, 18, 28],
    id: 644083,
    original_language: 'en',
    original_title: 'Twist',
    overview:
      'A Dickens classic brought thrillingly up to date in the teeming heartland of modern London, where a group of street smart young hustlers plan the heist of the century for the ultimate payday.',
    poster_path: '/7sXthW46RwmPBdacGHnhOzLv40d.jpg',
    title: 'Twist',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 225.843,
      },
    ],
    release_date: '2021-01-22',
  },
  {
    adult: false,
    backdrop_path: '/vfuzELmhBjBTswXj2Vqxnu5ge4g.jpg',
    genre_ids: [53, 80],
    id: 602269,
    original_language: 'en',
    original_title: 'The Little Things',
    overview:
      'Deputy Sheriff Joe "Deke" Deacon joins forces with Sgt. Jim Baxter to search for a serial killer who\'s terrorizing Los Angeles. As they track the culprit, Baxter is unaware that the investigation is dredging up echoes of Deke\'s past, uncovering disturbing secrets that could threaten more than his case.',
    poster_path: '/tLO1aD1ghdtVMT32z2sRmzgYKYd.jpg',
    title: 'The Little Things',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 223.732,
      },
    ],
    release_date: '2021-01-28',
  },
  {
    adult: false,
    backdrop_path: '/syuRL8LkPz4HguGAxAwvUt3HWlK.jpg',
    genre_ids: [53],
    id: 666624,
    original_language: 'it',
    original_title: 'Security',
    overview:
      'After the assault of a young woman in their seaside town, a security expert and his family get caught in a powerful riptide of secrets and lies.',
    poster_path: '/wLjN3vIw63GJ6m1J2fhGL3D2VXd.jpg',
    title: 'Security',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 220.305,
      },
    ],
    release_date: '2021-06-07',
  },
  {
    adult: false,
    backdrop_path: '/DA7gzvlBoxMNL0XmGgTZOyv67P.jpg',
    genre_ids: [16, 10751, 35, 14],
    id: 741074,
    original_language: 'en',
    original_title: 'Once Upon a Snowman',
    overview:
      'The previously untold origins of Olaf, the innocent and insightful, summer-loving snowman are revealed as we follow Olaf’s first steps as he comes to life and searches for his identity in the snowy mountains outside Arendelle.',
    poster_path: '/hddzYJtfYYeMDOQVcH58n8m1W3A.jpg',
    title: 'Once Upon a Snowman',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 217.313,
      },
    ],
    release_date: '2020-10-23',
  },
  {
    adult: false,
    backdrop_path: '/a9zFUuxzChmAlIybVge9IZt1hH0.jpg',
    genre_ids: [35],
    id: 578908,
    original_language: 'en',
    original_title: 'Bad Trip',
    overview:
      'Two pals embark on a road trip full of funny pranks that pull real people into mayhem.',
    poster_path: '/A1Gy5HX3DKGaNW1Ay30NTIVJqJ6.jpg',
    title: 'Bad Trip',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 216.26,
      },
    ],
    release_date: '2021-03-26',
  },
  {
    adult: false,
    backdrop_path: '/mi76WsBDStlmU1taHXasYh10LEm.jpg',
    genre_ids: [35, 18],
    id: 676842,
    original_language: 'es',
    original_title: 'Después de ti',
    overview:
      'Su, a woman whose friends are only men, finds herself forced to follow a series of absurd instructions to overcome the unexpected death of her fiancé.',
    poster_path: '/vX1XLbrHxpryX9EOWI3akbasz6c.jpg',
    title: 'Instructions for Su',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 215.715,
      },
    ],
    release_date: '2021-04-08',
  },
  {
    adult: false,
    backdrop_path: '/y3XMIea7mwTzxt3NFFXi5YJKeFJ.jpg',
    genre_ids: [16, 28, 14],
    id: 20982,
    original_language: 'ja',
    original_title: '劇場版 NARUTO -ナルト- 疾風伝',
    overview:
      'Demons that once almost destroyed the world, are revived by someone. To prevent the world from being destroyed, the demon has to be sealed and the only one who can do it is the shrine maiden Shion from the country of demons, who has two powers; one is sealing demons and the other is predicting the deaths of humans. This time Naruto\'s mission is to guard Shion, but she predicts Naruto\'s death. The only way to escape it, is to get away from Shion, which would leave her unguarded, then the demon, whose only goal is to kill Shion will do so, thus meaning the end of the world. Naruto decides to challenge this "prediction of death."',
    poster_path: '/vDkct38sSFSWJIATlfJw0l3QOIR.jpg',
    title: 'Naruto Shippuden the Movie',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 319.305,
      },
    ],
    release_date: '2007-08-04',
  },
  {
    adult: false,
    backdrop_path: '/jFINtstDUh0vHOGImpMAmLrPcXy.jpg',
    genre_ids: [28, 27, 35],
    id: 643586,
    original_language: 'en',
    original_title: "Willy's Wonderland",
    overview:
      "When his car breaks down, a quiet loner agrees to clean an abandoned family fun center in exchange for repairs. He soon finds himself waging war against possessed animatronic mascots while trapped inside Willy's Wonderland.",
    poster_path: '/keEnkeAvifw8NSEC4f6WsqeLJgF.jpg',
    title: "Willy's Wonderland",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 318.247,
      },
    ],
    release_date: '2021-02-12',
  },
  {
    adult: false,
    backdrop_path: '/zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg',
    genre_ids: [12, 35, 14],
    id: 512200,
    original_language: 'en',
    original_title: 'Jumanji: The Next Level',
    overview:
      'As the gang return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored in order to escape the world’s most dangerous game.',
    poster_path: '/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg',
    title: 'Jumanji: The Next Level',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 317.821,
      },
    ],
    release_date: '2019-12-04',
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [18],
    id: 288905,
    original_language: 'es',
    original_title: 'Los viejos',
    overview:
      'Toño sets off on a long journey back to his hometown in the south of Bolivia in attempt to reconcile with the past.',
    poster_path: '/u4ZXIKpSAWlwfR9ezxiCOuqsEGO.jpg',
    title: 'Los viejos',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4,
      },
      {
        id: 'popularity',
        rating: 313.401,
      },
    ],
    release_date: '2011-10-08',
  },
  {
    adult: false,
    backdrop_path: '/63xBsC6u54uJggUd7mntwB6RuaN.jpg',
    genre_ids: [35, 10749],
    id: 662237,
    original_language: 'ko',
    original_title: '새콤달콤',
    overview:
      'Faced with real-world opportunities and challenges, a couple endures the highs and lows of trying to make a long-distance relationship survive.',
    poster_path: '/3yGwAPl6LWpi8QwHjwCMaqsPgNB.jpg',
    title: 'Sweet & Sour',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.1,
      },
      {
        id: 'popularity',
        rating: 309.94,
      },
    ],
    release_date: '2021-06-04',
  },
  {
    adult: false,
    backdrop_path: '/ovggmAOu1IbPGTQE8lg4lBasNC7.jpg',
    genre_ids: [878, 28, 12, 53],
    id: 412656,
    original_language: 'en',
    original_title: 'Chaos Walking',
    overview:
      'Two unlikely companions embark on a perilous adventure through the badlands of an unexplored planet as they try to escape a dangerous and disorienting reality, where all inner thoughts are seen and heard by everyone.',
    poster_path: '/9kg73Mg8WJKlB9Y2SAJzeDKAnuB.jpg',
    title: 'Chaos Walking',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 309.613,
      },
    ],
    release_date: '2021-02-24',
  },
  {
    adult: false,
    backdrop_path: '/lQ1r7trIWYUeCCq6GbHzaUl0fNM.jpg',
    genre_ids: [28, 12],
    id: 568620,
    original_language: 'en',
    original_title: 'Snake Eyes: G.I. Joe Origins',
    overview:
      "After saving the life of their heir apparent, tenacious loner Snake Eyes is welcomed into an ancient Japanese clan called the Arashikage where he is taught the ways of the ninja warrior. But, when secrets from his past are revealed, Snake Eyes' honor and allegiance will be tested – even if that means losing the trust of those closest to him.",
    poster_path: '/uIXF0sQGXOxQhbaEaKOi2VYlIL0.jpg',
    title: 'Snake Eyes: G.I. Joe Origins',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 309.587,
      },
    ],
    release_date: '2021-07-22',
  },
  {
    adult: false,
    backdrop_path: '/3N316jUSdhvPyYTW29G4v9ebbcS.jpg',
    genre_ids: [53, 28, 80],
    id: 38700,
    original_language: 'en',
    original_title: 'Bad Boys for Life',
    overview:
      'Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.',
    poster_path: '/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg',
    title: 'Bad Boys for Life',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 309.069,
      },
    ],
    release_date: '2020-01-15',
  },
  {
    adult: false,
    backdrop_path: '/las0P4Dua54XrZ73VQmGUaH1z0U.jpg',
    genre_ids: [16, 28, 18, 878],
    id: 283566,
    original_language: 'ja',
    original_title: 'シン・エヴァンゲリオン劇場版:||',
    overview:
      'In the aftermath of the Fourth Impact, stranded without their Evangelions, Shinji, Asuka, and Rei search for refuge in the desolate red remains of Tokyo-3. But the danger to the world is far from over. A new impact is looming on the horizon—one that will prove to be the true end of Evangelion.',
    poster_path: '/jDwZavHo99JtGsCyRzp4epeeBHx.jpg',
    title: 'Evangelion: 3.0+1.0 Thrice Upon a Time',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 300.747,
      },
    ],
    release_date: '2021-03-08',
  },
  {
    adult: false,
    backdrop_path: '/drulhSX7P5TQlEMQZ3JoXKSDEfz.jpg',
    genre_ids: [18, 14, 878],
    id: 581389,
    original_language: 'ko',
    original_title: '승리호',
    overview:
      "When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that's known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.",
    poster_path: '/p9YDHJKvUoi7v2SCd3vLGPae1Xp.jpg',
    title: 'Space Sweepers',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 300.404,
      },
    ],
    release_date: '2021-02-05',
  },
  {
    adult: false,
    backdrop_path: '/sNQWRiwOc1R261yg7XVXxq0b5F9.jpg',
    genre_ids: [16],
    id: 812456,
    original_language: 'en',
    original_title: 'Barbie & Chelsea the Lost Birthday',
    overview:
      'Enjoy high-sea thrills as Barbie, Chelsea and the rest of the Roberts family set sail on an adventure cruise.  "Barbie & Chelsea The Lost Birthday" tells the story of Chelsea, Barbie’s precocious youngest sister, and the rest of the Roberts family as they set sail on an adventure cruise for her seventh birthday. When they cross the International Date Line, Chelsea discovers her actual birthday has been lost and she embarks on a fantastical journey through an enchanted jungle island in order to save it.',
    poster_path: '/esS12yF3CDuk5juvdFvi4PIwOuW.jpg',
    title: 'Barbie & Chelsea the Lost Birthday',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 299.236,
      },
    ],
    release_date: '2021-05-14',
  },
  {
    adult: false,
    backdrop_path: '/wu1uilmhM4TdluKi2ytfz8gidHf.jpg',
    genre_ids: [10751, 16, 14, 12, 35],
    id: 400160,
    original_language: 'en',
    original_title: 'The SpongeBob Movie: Sponge on the Run',
    overview:
      'When his best friend Gary is suddenly snatched away, SpongeBob takes Patrick on a madcap mission far beyond Bikini Bottom to save their pink-shelled pal.',
    poster_path: '/jlJ8nDhMhCYJuzOw3f52CP1W8MW.jpg',
    title: 'The SpongeBob Movie: Sponge on the Run',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 296.864,
      },
    ],
    release_date: '2020-08-14',
  },
  {
    adult: false,
    backdrop_path: '/9lropttr13U34csVkseFGZY98Kl.jpg',
    genre_ids: [12, 18],
    id: 346687,
    original_language: 'en',
    original_title: 'The Water Man',
    overview:
      'Gunner and his mother share a special bond. She supports his daydreaming and artistic pursuits, while his frequently-on-the-road father, Amos, with whom Gunner shares a strained relationship, has other ideas about where his son’s interests should lie. Gunner and his dad attempt to smooth over their differences for the sake of the family, but when his mom’s sickness worsens, Gunner disappears into stacks of books on both science and the supernatural in search of possible cures. When Gunner and his rebellious friend Jo go missing during their quest into the Water Man’s mysterious forest, Amos must immerse himself in his son’s world to find them and put his family back together.',
    poster_path: '/krupbFlSTnnKIjpRryrg2CTdeIL.jpg',
    title: 'The Water Man',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 296.794,
      },
    ],
    release_date: '2021-05-07',
  },
  {
    adult: false,
    backdrop_path: '/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg',
    genre_ids: [12, 28, 878],
    id: 299536,
    original_language: 'en',
    original_title: 'Avengers: Infinity War',
    overview:
      'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
    poster_path: '/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    title: 'Avengers: Infinity War',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.3,
      },
      {
        id: 'popularity',
        rating: 296.003,
      },
    ],
    release_date: '2018-04-25',
  },
  {
    adult: false,
    backdrop_path: '/e0lVsZrD6CPX8pt0QIDK7HDoRpy.jpg',
    genre_ids: [10749, 18],
    id: 785537,
    original_language: 'tr',
    original_title: 'Geçen Yaz',
    overview:
      "For Deniz, a 16-year-old teenager, this summer is different from the others. Deniz, who goes to his family's summer house every year, falls in love with a young girl named Aslı. Trying to get closer to Aslı, Deniz realizes that a handsome young man, Burak, also likes Aslı.",
    poster_path: '/iPtCd4sSWW1q9O5dWEzWKrVeCcY.jpg',
    title: 'Last Summer',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.6,
      },
      {
        id: 'popularity',
        rating: 287.804,
      },
    ],
    release_date: '2021-07-09',
  },
  {
    adult: false,
    backdrop_path: '/2M2JxEv3HSpjnZWjY9NOdGgfUd.jpg',
    genre_ids: [53, 28, 80, 18],
    id: 553604,
    original_language: 'en',
    original_title: 'Honest Thief',
    overview:
      "A bank robber tries to turn himself in because he's falling in love and wants to live an honest life...but when he realizes the Feds are more corrupt than him, he must fight back to clear his name.",
    poster_path: '/zeD4PabP6099gpE0STWJrJrCBCs.jpg',
    title: 'Honest Thief',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 287.554,
      },
    ],
    release_date: '2020-09-03',
  },
  {
    adult: false,
    backdrop_path: '/nz8xWrTKZzA5A7FgxaM4kfAoO1W.jpg',
    genre_ids: [878, 28],
    id: 651571,
    original_language: 'en',
    original_title: 'Breach',
    overview:
      'A hardened mechanic must stay awake and maintain an interstellar ark fleeing the dying planet Earth with a few thousand lucky souls on board... the last of humanity. Unfortunately, humans are not the only passengers. A shapeshifting alien creature has taken residence, its only goal is to kill as many people as possible. The crew must think quickly to stop this menace before it destroys mankind.',
    poster_path: '/13B6onhL6FzSN2KaNeQeMML05pS.jpg',
    title: 'Breach',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.5,
      },
      {
        id: 'popularity',
        rating: 286.499,
      },
    ],
    release_date: '2020-12-17',
  },
  {
    adult: false,
    backdrop_path: '/6TPZSJ06OEXeelx1U1VIAt0j9Ry.jpg',
    genre_ids: [28, 80, 53],
    id: 587996,
    original_language: 'es',
    original_title: 'Bajocero',
    overview:
      'When a prisoner transfer van is attacked, the cop in charge must fight those inside and outside while dealing with a silent foe: the icy temperatures.',
    poster_path: '/dWSnsAGTfc8U27bWsy2RfwZs0Bs.jpg',
    title: 'Below Zero',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 286.098,
      },
    ],
    release_date: '2021-01-29',
  },
  {
    adult: false,
    backdrop_path: '/gFDOQMQwo5UWegXE5kNEchn1eKx.jpg',
    genre_ids: [53, 80, 18],
    id: 580532,
    original_language: 'en',
    original_title: 'Crisis',
    overview:
      'Three stories about the world of opioids collide: a drug trafficker arranges a multi-cartel Fentanyl smuggling operation between Canada and the U.S., an architect recovering from an OxyContin addiction tracks down the truth behind her son\'s involvement with narcotics, and a university professor battles unexpected revelations about his research employer, a drug company with deep government influence bringing a new "non-addictive" painkiller to market.',
    poster_path: '/15e2VcMTtk3pqgGlHWxisvygFAw.jpg',
    title: 'Crisis',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 283.393,
      },
    ],
    release_date: '2021-02-26',
  },
  {
    adult: false,
    backdrop_path: '/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg',
    genre_ids: [878, 28],
    id: 335983,
    original_language: 'en',
    original_title: 'Venom',
    overview:
      'Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.',
    poster_path: '/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
    title: 'Venom',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 282.415,
      },
    ],
    release_date: '2018-09-28',
  },
  {
    adult: false,
    backdrop_path: '/4br4B8C0SRIYcKHUgoaOlGo50MU.jpg',
    genre_ids: [27],
    id: 575088,
    original_language: 'ru',
    original_title: 'Яга. Кошмар тёмного леса',
    overview:
      'The young family who moved to a new apartment on the outskirts of the city. The nanny hired by them for the newborn daughter quickly gained confidence. However, the older boy, Egor, talks about the frightening behavior of a woman, but his parents do not believe him. The surveillance cameras installed by the father for comfort only confirm everything is in order. Then one day, Egor, returning home, finds no trace of either the nanny or the little sister, and the parents are in a strange trance and do not even remember that they had a daughter. Then Egor, together with his friends, goes in search, during which it turns out that the nanny is an ancient Slavic demon, popularly known as Baba Yaga.',
    poster_path: '/8m5HTXzwewlfXhtZtLlLts53YTW.jpg',
    title: 'Baba Yaga: Terror of the Dark Forest',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 135.965,
      },
    ],
    release_date: '2020-02-27',
  },
  {
    adult: false,
    backdrop_path: '/64GBB3Qp1sG9AJZediJKEjUkUwI.jpg',
    genre_ids: [28, 12],
    id: 560964,
    original_language: 'hi',
    original_title: 'जंगली',
    overview:
      "A vet returns home to his father's elephant reserve where he encounters and fights an international poacher's racket.",
    poster_path: '/4Jwof1qQ6U99TZFkBCngBdfW8J2.jpg',
    title: 'Junglee',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 135.584,
      },
    ],
    release_date: '2019-03-29',
  },
  {
    adult: false,
    backdrop_path: '/nN4Gs3vZAOJ1D6FRtrwbU9VGYwU.jpg',
    genre_ids: [16, 10749, 10751],
    id: 486589,
    original_language: 'en',
    original_title: 'Red Shoes And The Seven Dwarfs',
    overview:
      'Princes who have been turned into Dwarfs seek the red shoes of a lady in order to break the spell, although it will not be easy.',
    poster_path: '/MBiKqTsouYqAACLYNDadsjhhC0.jpg',
    title: 'Red Shoes And The Seven Dwarfs',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 135.035,
      },
    ],
    release_date: '2019-07-25',
  },
  {
    adult: false,
    backdrop_path: '/AlFqBwJnokrp9zWTXOUv7uhkaeq.jpg',
    genre_ids: [28, 12, 878],
    id: 284054,
    original_language: 'en',
    original_title: 'Black Panther',
    overview:
      "King T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantle to join with ex-girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje (the Wakandan 'special forces') and an American secret agent, to prevent Wakanda from being dragged into a world war.",
    poster_path: '/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
    title: 'Black Panther',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 133.842,
      },
    ],
    release_date: '2018-02-13',
  },
  {
    adult: false,
    backdrop_path: '/k2WyDw2NTUIWnuEs5gT7wgrCQg6.jpg',
    genre_ids: [28, 53],
    id: 423204,
    original_language: 'en',
    original_title: 'Angel Has Fallen',
    overview:
      'After a treacherous attack, Secret Service agent Mike Banning is charged with attempting to assassinate President Trumbull. Chased by his own colleagues and the FBI, Banning begins a race against the clock to clear his name.',
    poster_path: '/fapXd3v9qTcNBTm39ZC4KUVQDNf.jpg',
    title: 'Angel Has Fallen',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 133.145,
      },
    ],
    release_date: '2019-08-21',
  },
  {
    adult: false,
    backdrop_path: '/buop8brXQ8gGiOPrVTxZZUqE8Oa.jpg',
    genre_ids: [27, 53, 9648],
    id: 723072,
    original_language: 'en',
    original_title: 'Host',
    overview:
      'Six friends hire a medium to hold a séance via Zoom during lockdown — but they get far more than they bargained for as things quickly go wrong. When an evil spirit starts invading their homes, they begin to realize they might not survive the night.',
    poster_path: '/o978ZNS9QP9VH1wxBlL2ngcEj8o.jpg',
    title: 'Host',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 132.974,
      },
    ],
    release_date: '2020-12-04',
  },
  {
    adult: false,
    backdrop_path: '/pY6ut8zUtLe66YkegpLegptES79.jpg',
    genre_ids: [35],
    id: 818659,
    original_language: 'pt',
    original_title: 'Carnaval',
    overview:
      "After a breakup, an influencer takes her friends on a free trip to Bahia's vibrant Carnival, where she learns life's not just about social media likes.",
    poster_path: '/ze1Sdb7WB64TBJhPqg8sJtwQtes.jpg',
    title: 'Carnaval',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.3,
      },
      {
        id: 'popularity',
        rating: 132.764,
      },
    ],
    release_date: '2021-06-02',
  },
  {
    adult: false,
    backdrop_path: '/jxYROBerNLUExmqFb2yArglwIHd.jpg',
    genre_ids: [27],
    id: 720026,
    original_language: 'en',
    original_title: 'Butchers',
    overview:
      'A family of sadistic butchers lives deep inside the backcountry. From the dead of winter to the dog days of summer, anyone who crosses their path is dead meat.',
    poster_path: '/xLbuMxKORru3oTlItLBWpI5WJxR.jpg',
    title: 'Butchers',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.9,
      },
      {
        id: 'popularity',
        rating: 131.696,
      },
    ],
    release_date: '2021-01-12',
  },
  {
    adult: false,
    backdrop_path: '/ftODZXaXpWtV5XFD8gS9n9KwLDr.jpg',
    genre_ids: [35, 28, 53],
    id: 581600,
    original_language: 'en',
    original_title: 'Spenser Confidential',
    overview:
      'Spenser, a former Boston patrolman who just got out from prison, teams up with Hawk, an aspiring fighter, to unravel the truth behind the death of two police officers.',
    poster_path: '/fePczipv6ZzDO2uoww4vTAu2Sq3.jpg',
    title: 'Spenser Confidential',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 131.003,
      },
    ],
    release_date: '2020-03-06',
  },
  {
    adult: false,
    backdrop_path: '/21bk7sqIsFfeof4vppwGEw1Ahvw.jpg',
    genre_ids: [28, 53],
    id: 466550,
    original_language: 'hi',
    original_title: 'Drive',
    overview:
      'A getaway driver is attracted to a female neighbor whose husband owes money to a local gangster. As a result he is drawn deeper into a dangerous underworld.',
    poster_path: '/1ZUNyvVGTPkeBVXXTMnhIRoXlfo.jpg',
    title: 'Drive',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.7,
      },
      {
        id: 'popularity',
        rating: 130.983,
      },
    ],
    release_date: '2019-11-01',
  },
  {
    adult: false,
    backdrop_path: '/shqLeIkqPAAXM8iT6wVDiXUYz1p.jpg',
    genre_ids: [16, 10751],
    id: 12429,
    original_language: 'ja',
    original_title: '崖の上のポニョ',
    overview:
      'The son of a sailor, 5-year old Sosuke, lives a quiet life on an oceanside cliff with his mother Lisa. One fateful day, he finds a beautiful goldfish trapped in a bottle on the beach and upon rescuing her, names her Ponyo. But she is no ordinary goldfish.',
    poster_path: '/yp8vEZflGynlEylxEesbYasc06i.jpg',
    title: 'Ponyo',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 130.888,
      },
    ],
    release_date: '2008-07-19',
  },
  {
    adult: false,
    backdrop_path: '/cHkhb5A4gQRK6zs6Pv7zorHs8Nk.jpg',
    genre_ids: [28, 53, 80, 18],
    id: 168259,
    original_language: 'en',
    original_title: 'Furious 7',
    overview:
      'Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.',
    poster_path: '/wurKlC3VKUgcfsn0K51MJYEleS2.jpg',
    title: 'Furious 7',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 130.873,
      },
    ],
    release_date: '2015-04-01',
  },
  {
    adult: false,
    backdrop_path: '/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg',
    genre_ids: [10751, 16, 12, 35, 14, 10402],
    id: 330457,
    original_language: 'en',
    original_title: 'Frozen II',
    overview:
      'Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.',
    poster_path: '/mINJaa34MtknCYl5AjtNJzWj8cD.jpg',
    title: 'Frozen II',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 164.474,
      },
    ],
    release_date: '2019-11-20',
  },
  {
    adult: false,
    backdrop_path: '/9pHxv7TX0jOKNgnGMDP6RJ2m1GL.jpg',
    genre_ids: [28, 53],
    id: 737568,
    original_language: 'en',
    original_title: 'The Doorman',
    overview:
      "A former Marine turned doorman at a luxury New York City high-rise must outsmart and battle a group of art thieves and their ruthless leader — while struggling to protect her sister's family. As the thieves become increasingly desperate and violent, the doorman calls upon her deadly fighting skills to end the showdown.",
    poster_path: '/pklyUbh4k1DbHdnsOMASyw7C6NH.jpg',
    title: 'The Doorman',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 130.84,
      },
    ],
    release_date: '2020-10-01',
  },
  {
    adult: false,
    backdrop_path: '/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg',
    genre_ids: [16, 12, 10751, 35],
    id: 862,
    original_language: 'en',
    original_title: 'Toy Story',
    overview:
      "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
    poster_path: '/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg',
    title: 'Toy Story',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 130.552,
      },
    ],
    release_date: '1995-10-30',
  },
  {
    adult: false,
    backdrop_path: '/2l5UHZBcp9cx1PwKLdisJ0gV9jB.jpg',
    genre_ids: [16, 35, 14, 12, 10751],
    id: 808,
    original_language: 'en',
    original_title: 'Shrek',
    overview:
      "It ain't easy bein' green -- especially if you're a likable (albeit smelly) ogre named Shrek. On a mission to retrieve a gorgeous princess from the clutches of a fire-breathing dragon, Shrek teams up with an unlikely compatriot -- a wisecracking donkey.",
    poster_path: '/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg',
    title: 'Shrek',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 129.794,
      },
    ],
    release_date: '2001-05-18',
  },
  {
    adult: false,
    backdrop_path: '/nq4LRhGrCZ8ucxMaLMPa3uZV6ku.jpg',
    genre_ids: [35],
    id: 709629,
    original_language: 'es',
    original_title: 'Guerra de Likes',
    overview:
      'In order to advance her career in the dynamic world of publicity in Mexico City, Raquel tries to reunite with her high school friend Cecy who has become the queen of social media. But unlike followers, friendships do not come instantly.',
    poster_path: '/jpdWHOu6EJbYnLXLCA52h82nLEz.jpg',
    title: 'War of Likes',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 129.199,
      },
    ],
    release_date: '2021-03-12',
  },
  {
    adult: false,
    backdrop_path: '/tXQP5bdZbNWogkQhTHy0H5kqlUy.jpg',
    genre_ids: [53, 28],
    id: 560192,
    original_language: 'en',
    original_title: 'Grand Isle',
    overview:
      "Walter and his neglected wife lure a young man into their Victorian home to escape a hurricane. When the man is charged with murder by Det. Jones, he must reveal the couple's wicked secrets to save himself.",
    poster_path: '/8mcXb3km7hZ8aJKpxxgnvvxt9gW.jpg',
    title: 'Grand Isle',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 129.196,
      },
    ],
    release_date: '2019-12-06',
  },
  {
    adult: false,
    backdrop_path: '/aHYUj0hICtWZ5tPiCIm6pWUcjYK.jpg',
    genre_ids: [27, 28, 10752],
    id: 675327,
    original_language: 'en',
    original_title: 'Shadow in the Cloud',
    overview:
      'A WWII pilot traveling with top secret documents on a B-17 Flying Fortress encounters an evil presence on board the flight.',
    poster_path: '/t7EUMSlfUN3jUSZUJOLURAzJzZs.jpg',
    title: 'Shadow in the Cloud',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 129.096,
      },
    ],
    release_date: '2021-01-01',
  },
  {
    adult: false,
    backdrop_path: '/jczV8IGmAAPyEJBwt2cLqJMaoab.jpg',
    genre_ids: [10402, 10751, 10770, 10749],
    id: 788647,
    original_language: 'es',
    original_title: 'Un Cumpleaños Muy Kally',
    overview:
      "A Movie based on the Nickelodeon Original Tv Series Kally's Mashup.  It tells of the crazy journey that the teenager undertakes days before her birthday. The problems begin when Kally meets the pop icon of the moment, a star who has everything that is successful is also seductive. But Dante is not willing to lose her so easily. While she is having the best time of her life, Kally must decide what to do with her career and her heart.",
    poster_path: '/1vWXqEmChgKkNFBt1KV5Vo4yc5o.jpg',
    title: "Kally's Mashup, A very Kally's Birthday",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 128.991,
      },
    ],
    release_date: '2021-07-30',
  },
  {
    adult: false,
    backdrop_path: '/pO1SnM5a1fEsYrFaVZW78Wb0zRJ.jpg',
    genre_ids: [10751, 16, 12, 35, 10770],
    id: 677638,
    original_language: 'en',
    original_title: 'We Bare Bears: The Movie',
    overview:
      "When Grizz, Panda, and Ice Bear's love of food trucks and viral videos get out of hand, the brothers are now chased away from their home and embark on a trip to Canada, where they can live in peace.",
    poster_path: '/kPzcvxBwt7kEISB9O4jJEuBn72t.jpg',
    title: 'We Bare Bears: The Movie',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 128.763,
      },
    ],
    release_date: '2020-06-30',
  },
  {
    adult: false,
    backdrop_path: '/eqVgQwv8HfDN2tv4XWhqW5GryV4.jpg',
    genre_ids: [27, 35],
    id: 607383,
    original_language: 'en',
    original_title: 'Aquaslash',
    overview:
      "To celebrate their graduation, the teenagers from Valley Hills High School have organized an ’80s-themed party at the old Wet Valley water park. Things turn gruesome when it's revealed that a mysterious maniac has inserted giant razor blades into one of the water slides. The water park thus becomes the backdrop for a bloodbath (literally), and everyone is a suspect...",
    poster_path: '/wB8qqLIaYDkYEnjbS5hAJiTuYU6.jpg',
    title: 'Aquaslash',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4,
      },
      {
        id: 'popularity',
        rating: 214.727,
      },
    ],
    release_date: '2019-07-29',
  },
  {
    adult: false,
    backdrop_path: '/7KL4yJ4JsbtS1BNRilUApLvMnc5.jpg',
    genre_ids: [53, 18, 27],
    id: 649087,
    original_language: 'sv',
    original_title: 'Red Dot',
    overview:
      'On a hiking trip to rekindle their marriage, a couple find themselves fleeing for their lives in the unforgiving wilderness from an unknown shooter.',
    poster_path: '/tQYEDajjpPubDGReUcLtvywi5Pb.jpg',
    title: 'Red Dot',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 210.89,
      },
    ],
    release_date: '2021-02-11',
  },
  {
    adult: false,
    backdrop_path: '/1hJbE72WiRuWH11QPNiHsvt29xA.jpg',
    genre_ids: [28, 878, 53, 27, 80],
    id: 442249,
    original_language: 'en',
    original_title: 'The First Purge',
    overview:
      'To push the crime rate below one percent for the rest of the year, the New Founding Fathers of America test a sociological theory that vents aggression for one night in one isolated community. But when the violence of oppressors meets the rage of the others, the contagion will explode from the trial-city borders and spread across the nation.',
    poster_path: '/litjsBoiydO6JlO70uOX4N3WnNL.jpg',
    title: 'The First Purge',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 210.589,
      },
    ],
    release_date: '2018-07-04',
  },
  {
    adult: false,
    backdrop_path: '/2dWWf6qjVU0TklCUKCUra1Yqfz3.jpg',
    genre_ids: [18],
    id: 618416,
    original_language: 'en',
    original_title: 'Penguin Bloom',
    overview:
      "When an unlikely ally enters the Bloom family's world in the form of an injured baby magpie they name Penguin, the bird’s arrival makes a profound difference in the struggling family’s life.",
    poster_path: '/5l6k0Z9tYddXW9327V2jZrfWG00.jpg',
    title: 'Penguin Bloom',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 210.464,
      },
    ],
    release_date: '2021-01-21',
  },
  {
    adult: false,
    backdrop_path: '/uicia399gyMGE1smatJ41M0CtFx.jpg',
    genre_ids: [16, 28, 12, 14],
    id: 505262,
    original_language: 'ja',
    original_title: '僕のヒーローアカデミア THE MOVIE ～2人の英雄～',
    overview:
      "All Might and Deku accept an invitation to go abroad to a floating and mobile manmade city, called 'I-Island', where they research quirks as well as hero supplemental items at the special 'I-Expo' convention that is currently being held on the island. During that time, suddenly, despite an iron wall of security surrounding the island, the system is breached by a villain, and the only ones able to stop him are the students of Class 1-A.",
    poster_path: '/hC4nTxdhXqFWzgqynGvvXVMiMNp.jpg',
    title: 'My Hero Academia: Two Heroes',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.1,
      },
      {
        id: 'popularity',
        rating: 210.296,
      },
    ],
    release_date: '2018-08-03',
  },
  {
    adult: false,
    backdrop_path: '/uQtqiAu2bBlokqjlURVLEha6zoi.jpg',
    genre_ids: [80, 18],
    id: 544401,
    original_language: 'en',
    original_title: 'Cherry',
    overview:
      'Cherry drifts from college dropout to army medic in Iraq - anchored only by his true love, Emily. But after returning from the war with PTSD, his life spirals into drugs and crime as he struggles to find his place in the world.',
    poster_path: '/pwDvkDyaHEU9V7cApQhbcSJMG1w.jpg',
    title: 'Cherry',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 210.123,
      },
    ],
    release_date: '2021-02-26',
  },
  {
    adult: false,
    backdrop_path: '/9NlswPRK5Kap6KVr59Feah9EBLP.jpg',
    genre_ids: [12, 36, 28],
    id: 631939,
    original_language: 'en',
    original_title: 'The Legion',
    overview:
      'Noreno, a half-Roman, is entrusted with the mission of crossing the snowy mountains of Armenia, swarming with Parthian patrols, to seek help for his slowly dying men.',
    poster_path: '/6ssoBXQOxNhrsGJoM6Tcvm57V79.jpg',
    title: 'The Legion',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 207.299,
      },
    ],
    release_date: '2020-05-08',
  },
  {
    adult: false,
    backdrop_path: '/eFw5YSorHidsajLTayo1noueIxI.jpg',
    genre_ids: [28, 53, 35],
    id: 509967,
    original_language: 'en',
    original_title: '6 Underground',
    overview:
      'After faking his death, a tech billionaire recruits a team of international operatives for a bold and bloody mission to take down a brutal dictator.',
    poster_path: '/lnWkyG3LLgbbrIEeyl5mK5VRFe4.jpg',
    title: '6 Underground',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 206.769,
      },
    ],
    release_date: '2019-12-10',
  },
  {
    adult: false,
    backdrop_path: '/jzdnhRhG0dsuYorwvSqPqqnM1cV.jpg',
    genre_ids: [28, 80, 53],
    id: 337339,
    original_language: 'en',
    original_title: 'The Fate of the Furious',
    overview:
      'When a mysterious woman seduces Dom into the world of crime and a betrayal of those closest to him, the crew face trials that will test them as never before.',
    poster_path: '/dImWM7GJqryWJO9LHa3XQ8DD5NH.jpg',
    title: 'The Fate of the Furious',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 206.04,
      },
    ],
    release_date: '2017-04-12',
  },
  {
    adult: false,
    backdrop_path: '/a6cDxdwaQIFjSkXf7uskg78ZyTq.jpg',
    genre_ids: [28, 12, 878],
    id: 290859,
    original_language: 'en',
    original_title: 'Terminator: Dark Fate',
    overview:
      'Decades after Sarah Connor prevented Judgment Day, a lethal new Terminator is sent to eliminate the future leader of the resistance. In a fight to save mankind, battle-hardened Sarah Connor teams up with an unexpected ally and an enhanced super soldier to stop the deadliest Terminator yet.',
    poster_path: '/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg',
    title: 'Terminator: Dark Fate',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 205.534,
      },
    ],
    release_date: '2019-10-23',
  },
  {
    adult: false,
    backdrop_path: '/hP7dN2B5ztQgSIN5Qvk63MY4EeO.jpg',
    genre_ids: [99],
    id: 691179,
    original_language: 'en',
    original_title: 'Friends: The Reunion',
    overview:
      'The cast of Friends reunites for a once-in-a-lifetime celebration of the hit series, an unforgettable evening filled with iconic memories, uncontrollable laughter, happy tears, and special guests.',
    poster_path: '/bT3c4TSOP8vBmMoXZRDPTII6eDa.jpg',
    title: 'Friends: The Reunion',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.3,
      },
      {
        id: 'popularity',
        rating: 202.792,
      },
    ],
    release_date: '2021-05-27',
  },
  {
    adult: false,
    backdrop_path: '/qq9Whyz2tmIh5MjGN5or1S6Q9MZ.jpg',
    genre_ids: [28, 27, 53],
    id: 316727,
    original_language: 'en',
    original_title: 'The Purge: Election Year',
    overview:
      'Two years after choosing not to kill the man who killed his son, former police sergeant Leo Barnes has become head of security for Senator Charlene Roan, the front runner in the next Presidential election due to her vow to eliminate the Purge. On the night of what should be the final Purge, a betrayal from within the government forces Barnes and Roan out onto the street where they must fight to survive the night.',
    poster_path: '/ubLbY97m8lYJ3Fykh7nfiwB5eth.jpg',
    title: 'The Purge: Election Year',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 196.906,
      },
    ],
    release_date: '2016-06-29',
  },
  {
    adult: false,
    backdrop_path: '/7TxeZVg2evMG42p0uSbMJpWNQ8A.jpg',
    genre_ids: [10751, 16, 14],
    id: 520946,
    original_language: 'en',
    original_title: '100% Wolf',
    overview:
      "Freddy Lupin, heir to a proud family line of werewolves, is in for a shock when on his 14th birthday his first 'warfing' goes awry, turning him into a ferocious poodle. The pack elders give Freddy until the next moonrise to prove he has the heart of a wolf, or risk being cast out forever. With the help of an unlikely ally in a streetwise stray named Batty, Freddy must prove he's 100% Wolf.",
    poster_path: '/2VrvxK4yxNCU6KVgo5TADJeBEQu.jpg',
    title: '100% Wolf',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 196.183,
      },
    ],
    release_date: '2020-06-26',
  },
  {
    adult: false,
    backdrop_path: '/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg',
    genre_ids: [28, 53, 18],
    id: 522938,
    original_language: 'en',
    original_title: 'Rambo: Last Blood',
    overview:
      'After fighting his demons for decades, John Rambo now lives in peace on his family ranch in Arizona, but his rest is interrupted when Gabriela, the granddaughter of his housekeeper María, disappears after crossing the border into Mexico to meet her biological father. Rambo, who has become a true father figure for Gabriela over the years, undertakes a desperate and dangerous journey to find her.',
    poster_path: '/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg',
    title: 'Rambo: Last Blood',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 195.584,
      },
    ],
    release_date: '2019-09-19',
  },
  {
    adult: false,
    backdrop_path: '/AhFRV5YxJamUZ4oZdxv6PI0ythi.jpg',
    genre_ids: [28, 878],
    id: 580489,
    original_language: 'en',
    original_title: 'Venom: Let There Be Carnage',
    overview: 'Sequel to the box-office hit film "Venom."',
    poster_path: '/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg',
    title: 'Venom: Let There Be Carnage',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 193.38,
      },
    ],
    release_date: '2021-09-15',
  },
  {
    adult: false,
    backdrop_path: '/m5HPKCi7GdhKmxPTcOQmcLfEmZ9.jpg',
    genre_ids: [12, 35, 16, 14],
    id: 532067,
    original_language: 'ja',
    original_title: 'この素晴らしい世界に祝福を！紅伝説',
    overview:
      "It is not strange that the Demon Lord's forces fear the Crimson Demons, the clan from which Megumin and Yunyun originate. Even if the Demon Lord's generals attack their village, the Crimson Demons can just easily brush them off with their supreme mastery of advanced and overpowered magic.  When Yunyun receives a seemingly serious letter regarding a potential disaster coming to her hometown, she immediately informs Kazuma Satou and the rest of his party. After a series of wacky misunderstandings, it turns out to be a mere prank by her fellow demon who wants to be an author. Even so, Megumin becomes worried about her family and sets out toward the Crimson Demons' village with the gang.  There, Kazuma and the others decide to sightsee the wonders of Megumin's birthplace. However, they soon come to realize that the nonsense threat they received might have been more than just a joke.",
    poster_path: '/j73LuQcA21KvkVFcroWWMN8tTJv.jpg',
    title:
      "KonoSuba: God's Blessing on this Wonderful World! Legend of Crimson",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.5,
      },
      {
        id: 'popularity',
        rating: 192.453,
      },
    ],
    release_date: '2019-08-30',
  },
  {
    adult: false,
    backdrop_path: '/eK6eBzp7m7WZYaJ3iAnjdPDngiP.jpg',
    genre_ids: [16],
    id: 835739,
    original_language: 'en',
    original_title: 'Super Monsters: Once Upon a Rhyme',
    overview:
      'From Goldilocks to Hansel and Gretel, the Super Monsters reimagine classic fairy tales and favorite nursery rhymes with a musical, magical spin!',
    poster_path: '/unIkHTdCEIdHdtmWjEwfv7Ifllk.jpg',
    title: 'Super Monsters: Once Upon a Rhyme',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 188.99,
      },
    ],
    release_date: '2021-06-01',
  },
  {
    adult: false,
    backdrop_path: '/kU7ZiyeUwcpTkYj3UcxSqGdZmxY.jpg',
    genre_ids: [16, 28],
    id: 618353,
    original_language: 'en',
    original_title: 'Batman: Death in the Family',
    overview:
      "Tragedy strikes the Batman's life again when Robin Jason Todd tracks down his birth mother only to run afoul of the Joker. An adaptation of the 1988 comic book storyline of the same name.",
    poster_path: '/k8Q9ulyRE8fkvZMkAM9LPYMKctb.jpg',
    title: 'Batman: Death in the Family',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 186.722,
      },
    ],
    release_date: '2020-10-13',
  },
  {
    adult: false,
    backdrop_path: '/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg',
    genre_ids: [28, 12, 878],
    id: 299537,
    original_language: 'en',
    original_title: 'Captain Marvel',
    overview:
      'The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.',
    poster_path: '/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
    title: 'Captain Marvel',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 186.648,
      },
    ],
    release_date: '2019-03-06',
  },
  {
    adult: false,
    backdrop_path: '/bvRnPaai6JL7XHF4K6414DdSHro.jpg',
    genre_ids: [12, 14],
    id: 672,
    original_language: 'en',
    original_title: 'Harry Potter and the Chamber of Secrets',
    overview:
      'Cars fly, trees fight back, and a mysterious house-elf comes to warn Harry Potter at the start of his second year at Hogwarts. Adventure and danger await when bloody writing on a wall announces: The Chamber Of Secrets Has Been Opened. To save Hogwarts will require all of Harry, Ron and Hermione’s magical abilities and courage.',
    poster_path: '/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg',
    title: 'Harry Potter and the Chamber of Secrets',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 186.32,
      },
    ],
    release_date: '2002-11-13',
  },
  {
    adult: false,
    backdrop_path: '/j28p5VwI5ieZnNwfeuZ5Ve3mPsn.jpg',
    genre_ids: [35, 28, 12, 878],
    id: 550988,
    original_language: 'en',
    original_title: 'Free Guy',
    overview:
      'A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.',
    poster_path: '/hMYoG5ORvBaHqd7mhkcqOR5XlDi.jpg',
    title: 'Free Guy',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 171.354,
      },
    ],
    release_date: '2021-08-11',
  },
  {
    adult: false,
    backdrop_path: '/gKZAQ3b9yApxFunUBlS5Mp74QG4.jpg',
    genre_ids: [10751, 16, 14, 10402, 35, 12],
    id: 354912,
    original_language: 'en',
    original_title: 'Coco',
    overview:
      "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
    poster_path: '/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg',
    title: 'Coco',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.2,
      },
      {
        id: 'popularity',
        rating: 170.994,
      },
    ],
    release_date: '2017-10-27',
  },
  {
    adult: false,
    backdrop_path: '/nNmJRkg8wWnRmzQDe2FwKbPIsJV.jpg',
    genre_ids: [878, 28, 12],
    id: 24428,
    original_language: 'en',
    original_title: 'The Avengers',
    overview:
      'When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!',
    poster_path: '/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
    title: 'The Avengers',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 170.981,
      },
    ],
    release_date: '2012-04-25',
  },
  {
    adult: false,
    backdrop_path: '/fZHvSNUBKSgRAduB5k0fFST1xYn.jpg',
    genre_ids: [16, 10751],
    id: 749618,
    original_language: 'es',
    original_title: 'El camino de Xico',
    overview:
      'The peace of a small town is endangered when a corporation wants to destroy the mountain that protects them. A girl named Copi and her best friend Xico, a Xoloitzcuintle dog, will go into the mountains to try to save the town.',
    poster_path: '/g8ZyfUC0THygJkVoO2J7NxsdPI5.jpg',
    title: "Xico's Journey",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 169.777,
      },
    ],
    release_date: '2020-11-12',
  },
  {
    adult: false,
    backdrop_path: '/75iMCbiw9IQZC3UT2C4eF83QxHT.jpg',
    genre_ids: [35, 18],
    id: 761270,
    original_language: 'sv',
    original_title: 'Dancing Queens',
    overview:
      'The story of Dylan Pettersson, a 23-year-old girl from a small island in the Swedish archipelago with big dancing aspirations.',
    poster_path: '/xq2pkQZV5Yt1METvy5S0QjmCpsn.jpg',
    title: 'Dancing Queens',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 168.544,
      },
    ],
    release_date: '2021-06-03',
  },
  {
    adult: false,
    backdrop_path: '/psTz3J2QXVKTQCGrPDFuC4kAOLb.jpg',
    genre_ids: [16, 35, 10751, 9648, 12, 14],
    id: 682254,
    original_language: 'en',
    original_title: 'Scooby-Doo! The Sword and the Scoob',
    overview:
      'An evil sorceress transports the gang back to the age of chivalrous knights, spell-casting wizards, and fire-breathing dragons.',
    poster_path: '/sCoG0ibohbPrnyomtzegSuBL40L.jpg',
    title: 'Scooby-Doo! The Sword and the Scoob',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 167.588,
      },
    ],
    release_date: '2021-02-22',
  },
  {
    adult: false,
    backdrop_path: '/ww7eC3BqSbFsyE5H5qMde8WkxJ2.jpg',
    genre_ids: [28, 27, 878, 53],
    id: 443791,
    original_language: 'en',
    original_title: 'Underwater',
    overview:
      'After an earthquake destroys their underwater station, six researchers must navigate two miles along the dangerous, unknown depths of the ocean floor to make it to safety in a race against time.',
    poster_path: '/gzlbb3yeVISpQ3REd3Ga1scWGTU.jpg',
    title: 'Underwater',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 167.195,
      },
    ],
    release_date: '2020-01-08',
  },
  {
    adult: false,
    backdrop_path: '/tTlAA0REGPXSZPBfWyTW9ipIv1I.jpg',
    genre_ids: [28, 12, 878, 18],
    id: 315635,
    original_language: 'en',
    original_title: 'Spider-Man: Homecoming',
    overview:
      'Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.',
    poster_path: '/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg',
    title: 'Spider-Man: Homecoming',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 166.419,
      },
    ],
    release_date: '2017-07-05',
  },
  {
    adult: false,
    backdrop_path: '/vKzbIoHhk1z9DWYi8kyFe9Gg0HF.jpg',
    genre_ids: [35],
    id: 484718,
    original_language: 'en',
    original_title: 'Coming 2 America',
    overview:
      "Prince Akeem Joffer is set to become King of Zamunda when he discovers he has a son he never knew about in America – a street savvy Queens native named Lavelle. Honoring his royal father's dying wish to groom this son as the crown prince, Akeem and Semmi set off to America once again.",
    poster_path: '/nWBPLkqNApY5pgrJFMiI9joSI30.jpg',
    title: 'Coming 2 America',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 166.264,
      },
    ],
    release_date: '2021-03-05',
  },
  {
    adult: false,
    backdrop_path: '/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg',
    genre_ids: [10751, 16, 12, 35, 14, 10402],
    id: 330457,
    original_language: 'en',
    original_title: 'Frozen II',
    overview:
      'Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.',
    poster_path: '/mINJaa34MtknCYl5AjtNJzWj8cD.jpg',
    title: 'Frozen II',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 164.474,
      },
    ],
    release_date: '2019-11-20',
  },
  {
    adult: false,
    backdrop_path: '/3s9O5af2xWKWR5JzP2iJZpZeQQg.jpg',
    genre_ids: [28, 12, 878],
    id: 351286,
    original_language: 'en',
    original_title: 'Jurassic World: Fallen Kingdom',
    overview:
      'Three years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on Isla Nublar. So, Claire Dearing recruits Owen Grady to help prevent the extinction of the dinosaurs once again.',
    poster_path: '/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',
    title: 'Jurassic World: Fallen Kingdom',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 163.514,
      },
    ],
    release_date: '2018-06-06',
  },
  {
    adult: false,
    backdrop_path: '/5MgMCnslrxQfOfaq6T5ndkLlcCk.jpg',
    genre_ids: [16, 35, 10749, 18, 14],
    id: 572154,
    original_language: 'ja',
    original_title: '青春ブタ野郎はゆめみる少女の夢を見ない',
    overview:
      'In Fujisawa, Sakuta Azusagawa is in his second year of high school. Blissful days with his girlfriend and upperclassman, Mai Sakurajima, are interrupted by the appearance of his first crush, Shoko Makinohara.',
    poster_path: '/pvdBzHOWjrLl69lUswPiVnI8szv.jpg',
    title: 'Rascal Does Not Dream of a Dreaming Girl',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.5,
      },
      {
        id: 'popularity',
        rating: 163.061,
      },
    ],
    release_date: '2019-06-15',
  },
  {
    adult: false,
    backdrop_path: '/jn52me8AagfNt7r84SgQbV0R9ZG.jpg',
    genre_ids: [28, 12, 878],
    id: 181812,
    original_language: 'en',
    original_title: 'Star Wars: The Rise of Skywalker',
    overview:
      'The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.',
    poster_path: '/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
    title: 'Star Wars: The Rise of Skywalker',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 162.58,
      },
    ],
    release_date: '2019-12-18',
  },
  {
    adult: false,
    backdrop_path: '/qwgGtdlLMKYvT2tV8hLY22syRHN.jpg',
    genre_ids: [28, 35, 14],
    id: 287947,
    original_language: 'en',
    original_title: 'Shazam!',
    overview:
      'A boy is given the ability to become an adult superhero in times of need with a single magic word.',
    poster_path: '/xnopI5Xtky18MPhK40cZAGAOVeV.jpg',
    title: 'Shazam!',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 162.535,
      },
    ],
    release_date: '2019-03-29',
  },
  {
    adult: false,
    backdrop_path: '/tzJZaglq1hR7RS35BKG68Xz7KY0.jpg',
    genre_ids: [16, 35, 14],
    id: 797394,
    original_language: 'ru',
    original_title: 'Ганзель, Гретель и Агентство Магии',
    overview:
      'The Secret Magic Control Agency sends its two best agents, Hansel and Gretel, to fight against the witch of the Gingerbread House.',
    poster_path: '/4ZSzEDVdxWVMVO4oZDvoodQOEfr.jpg',
    title: 'Secret Magic Control Agency',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 161.997,
      },
    ],
    release_date: '2021-03-18',
  },
  {
    adult: false,
    backdrop_path: '/6tPOZmNQ1tbzlhcMmyhYN1a1dEh.jpg',
    genre_ids: [28, 53],
    id: 809968,
    original_language: 'pl',
    original_title: 'Bartkowiak',
    overview:
      "After his brother dies in a car crash, a disgraced MMA fighter takes over the family nightclub — and soon learns his sibling's death wasn’t an accident.",
    poster_path: '/kOVko9u2CSwpU8zGj14Pzei6Eco.jpg',
    title: 'Bartkowiak',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.4,
      },
      {
        id: 'popularity',
        rating: 161.02,
      },
    ],
    release_date: '2021-07-28',
  },
  {
    adult: false,
    backdrop_path: '/y6FYAhaeFMj9Lsk8OdF2NeWQkbd.jpg',
    genre_ids: [28, 14, 10751, 35],
    id: 615677,
    original_language: 'en',
    original_title: 'We Can Be Heroes',
    overview:
      "When alien invaders capture Earth's superheroes, their kids must learn to work together to save their parents - and the planet.",
    poster_path: '/1S21HpcKY6uQ9UAw68aICmrJaq6.jpg',
    title: 'We Can Be Heroes',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 160.099,
      },
    ],
    release_date: '2020-12-25',
  },
  {
    adult: false,
    backdrop_path: '/ne4QPHn56Z1vxk6iKJKvDnmNI9Y.jpg',
    genre_ids: [80, 28, 18, 53],
    id: 611914,
    original_language: 'en',
    original_title: 'The Courier',
    overview:
      'This intense action-thriller unfolds in real time as two embattled souls fight for their lives. Gary Oldman stars as a vicious crime boss out to kill Nick, the lone witness set to testify against him. He hires a mysterious female motorcycle courier to unknowingly deliver a poison-gas bomb to slay Nick, but after she rescues Nick from certain death, the duo must confront an army of ruthless hired killers in order to survive the night.',
    poster_path: '/cmC7bJZ5sCzx9ZsrlXOrYJfYtLc.jpg',
    title: 'The Courier',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 158.409,
      },
    ],
    release_date: '2019-11-22',
  },
  {
    adult: false,
    backdrop_path: '/laeEtakR2pLKu3CeRwB2lU5Y53X.jpg',
    genre_ids: [10751, 16],
    id: 10567,
    original_language: 'en',
    original_title: 'Dinosaur',
    overview:
      'An orphaned dinosaur raised by lemurs joins an arduous trek to a sancturary after a meteorite shower destroys his family home.',
    poster_path: '/rSje3FS7ycJSglowlngjsvDt7vO.jpg',
    title: 'Dinosaur',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 93.631,
      },
    ],
    release_date: '2000-05-19',
  },
  {
    adult: false,
    backdrop_path: '/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg',
    genre_ids: [28, 878, 35, 10751],
    id: 454626,
    original_language: 'en',
    original_title: 'Sonic the Hedgehog',
    overview:
      'Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.',
    poster_path: '/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg',
    title: 'Sonic the Hedgehog',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 157.856,
      },
    ],
    release_date: '2020-02-12',
  },
  {
    adult: false,
    backdrop_path: '/mixAxUgBRIq83luPKokPHdcLNvf.jpg',
    genre_ids: [99],
    id: 562446,
    original_language: 'en',
    original_title: 'Stuntman',
    overview:
      'A veteran stuntman sets out to complete the jump that bested his idol Evel Knievel: clearing the Snake River Canyon in a rocket-powered craft.',
    poster_path: '/uNVN5MyQOAOKoqWL9ClVVWbZbW1.jpg',
    title: 'Stuntman',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 157.785,
      },
    ],
    release_date: '2018-09-23',
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [35],
    id: 678580,
    original_language: 'es',
    original_title: 'El mesero',
    overview:
      'A waiter pretends to be an important businessman in order to reach the upper class through his entrepreneurial dreams.',
    poster_path: '/oRlYgkktpdk0TQpgXXjdfK98bZ2.jpg',
    title: 'El mesero',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 438.936,
      },
    ],
    release_date: '2021-07-15',
  },
  {
    adult: false,
    backdrop_path: '/aMFl4wOPhJ7NVua6SgU9zIJvFSx.jpg',
    genre_ids: [16, 10751, 35, 12, 10770],
    id: 755812,
    original_language: 'fr',
    original_title: 'Miraculous World : New York, les héros unis',
    overview:
      'During a school field trip, Ladybug and Cat Noir meet the American superheroes, whom they have to save from an akumatised super-villain. They discover that Miraculous exist in the United States too.',
    poster_path: '/19kfvGktytDZInUmpv3WlaHoTxP.jpg',
    title: 'Miraculous World: New York, United HeroeZ',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.3,
      },
      {
        id: 'popularity',
        rating: 424.478,
      },
    ],
    release_date: '2020-09-26',
  },
  {
    adult: false,
    backdrop_path: '/lzDoIMmz8ECRYT6xDgYnjek8dJv.jpg',
    genre_ids: [53, 80],
    id: 656940,
    original_language: 'en',
    original_title: 'Body Brokers',
    overview:
      'Utah and his girlfriend Opal, are drug addicts living on the streets in rural Ohio. After getting recruited by body broker Wood, and offered treatment in Los Angeles, Wood takes Utah under his wing and introduces him to treatment center mogul Vin. Wood and Vin bring Utah in on their lucrative and illegal dealings, where saving lives comes second to the bottom line.',
    poster_path: '/8l9zU9932kjrJqrTVEVSm4Zfyne.jpg',
    title: 'Body Brokers',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 424.424,
      },
    ],
    release_date: '2021-02-19',
  },
  {
    adult: false,
    backdrop_path: '/mfRGScUMc88E83bEY12gLTXm2AL.jpg',
    genre_ids: [35, 18, 10749],
    id: 800669,
    original_language: 'id',
    original_title: 'A Perfect Fit',
    overview:
      'Sparks fly when a fashion blogger in Bali meets a gifted shoemaker, leading her to question her commitment to her fiancé.',
    poster_path: '/nLwtsKUBhPcZKtrFQfVMpTxa7Of.jpg',
    title: 'A Perfect Fit',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 420.599,
      },
    ],
    release_date: '2021-07-15',
  },
  {
    adult: false,
    backdrop_path: '/gPKcJzrbgs1670fOeKN1xQH9mNa.jpg',
    genre_ids: [80, 18, 9648, 53],
    id: 823855,
    original_language: 'en',
    original_title: 'I Am All Girls',
    overview:
      'A special crimes investigator forms an unlikely bond with a serial killer to bring down a global child sex trafficking syndicate.',
    poster_path: '/m6bUeV4mczG3z2YXXr5XDKPsQzv.jpg',
    title: 'I Am All Girls',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 418.773,
      },
    ],
    release_date: '2021-05-14',
  },
  {
    adult: false,
    backdrop_path: '/szY15QJKhed0nhUz1NONTz1vez5.jpg',
    genre_ids: [10751, 35, 14, 16],
    id: 811367,
    original_language: 'en',
    original_title: '22 vs. Earth',
    overview:
      'Set before the events of ‘Soul’, 22 refuses to go to Earth, enlisting a gang of 5 new souls in attempt of rebellion. However, 22’s subversive plot leads to a surprising revelation about the meaning of life.',
    poster_path: '/32vLDKSzcCMh55zqqaSqqUA8naz.jpg',
    title: '22 vs. Earth',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 412.793,
      },
    ],
    release_date: '2021-04-30',
  },
  {
    adult: false,
    backdrop_path: '/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg',
    genre_ids: [80, 53, 18],
    id: 475557,
    original_language: 'en',
    original_title: 'Joker',
    overview:
      'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
    poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    title: 'Joker',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.2,
      },
      {
        id: 'popularity',
        rating: 406.578,
      },
    ],
    release_date: '2019-10-02',
  },
  {
    adult: false,
    backdrop_path: '/9guoVF7zayiiUq5ulKQpt375VIy.jpg',
    genre_ids: [16, 28, 14, 12],
    id: 592350,
    original_language: 'ja',
    original_title: '僕のヒーローアカデミア THE MOVIE ヒーローズ：ライジング',
    overview:
      "Class 1-A visits Nabu Island where they finally get to do some real hero work. The place is so peaceful that it's more like a vacation … until they're attacked by a villain with an unfathomable Quirk! His power is eerily familiar, and it looks like Shigaraki had a hand in the plan. But with All Might retired and citizens' lives on the line, there's no time for questions. Deku and his friends are the next generation of heroes, and they're the island's only hope.",
    poster_path: '/zGVbrulkupqpbwgiNedkJPyQum4.jpg',
    title: 'My Hero Academia: Heroes Rising',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.5,
      },
      {
        id: 'popularity',
        rating: 399.02,
      },
    ],
    release_date: '2019-12-20',
  },
  {
    adult: false,
    backdrop_path: '/AmzVV7kqds8BJBXwnQtx5YpqFdU.jpg',
    genre_ids: [18, 10749],
    id: 638449,
    original_language: 'en',
    original_title: 'The Last Letter From Your Lover',
    overview:
      'A young journalist in London becomes obsessed with a series of letters she discovers that recounts an intense star-crossed love affair from the 1960s.',
    poster_path: '/fDKK51YdOfu9pTmSRw7sHUhGFxm.jpg',
    title: 'The Last Letter From Your Lover',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 379.758,
      },
    ],
    release_date: '2021-07-23',
  },
  {
    adult: false,
    backdrop_path: '/kDQdFs5XL6G8TuXvd0NnJfQ59GP.jpg',
    genre_ids: [878, 12, 9648, 28, 53, 14, 35],
    id: 641501,
    original_language: 'fr',
    original_title: 'Comment je suis devenu super-héros',
    overview:
      "Paris 2020. While superheroes have assimilated into the Parisian society, they discover a new drug that gives themselves personal superpowers to mere mortals. Lieutenants Moreau and Schaltzmann are investigating the case with the support of two ex-superheroes, Monte Carlo and Callista. They'll do whatever it takes to dismantle the traffic. But Moreau's past resurfaces, and the investigation becomes more complicated.",
    poster_path: '/d0wn9YtEnmbucx8ZUsT918ctoiK.jpg',
    title: 'How I Became a Superhero',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 377.518,
      },
    ],
    release_date: '2020-11-19',
  },
  {
    adult: false,
    backdrop_path: '/7QabKu8tizoqy8qCZJXljdSpP4A.jpg',
    genre_ids: [16, 10751, 14, 35, 12],
    id: 585083,
    original_language: 'en',
    original_title: 'Hotel Transylvania: Transformania',
    overview:
      'When Van Helsing\'s mysterious invention, the "Monsterfication Ray," goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it\'s too late, and before they drive each other crazy.',
    poster_path: '/6zt5l4DYV1kLPL5Vqz1kLq3THXD.jpg',
    title: 'Hotel Transylvania: Transformania',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 370.528,
      },
    ],
    release_date: '2021-09-09',
  },
  {
    adult: false,
    backdrop_path: '/fX8e94MEWSuTJExndVYxKsmA4Hw.jpg',
    genre_ids: [28, 12, 80],
    id: 604822,
    original_language: 'zh',
    original_title: '急先锋',
    overview:
      "Covert security company Vanguard is the last hope of survival for an accountant after he is targeted by the world's deadliest mercenary organization.",
    poster_path: '/mKvw1Ic9enfFlCPBNJGiejRPMUO.jpg',
    title: 'Vanguard',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 346.817,
      },
    ],
    release_date: '2020-09-30',
  },
  {
    adult: false,
    backdrop_path: '/vwpxy4kmQyW5aBJ3uxhQM6koU6H.jpg',
    genre_ids: [10751, 16],
    id: 743439,
    original_language: 'de',
    original_title: 'PAW Patrol: Jet to the Rescue',
    overview:
      'Get ready to zoom back to Barkingburg with the pups in this all-new TV movie! When the scheming DUKE of Flappington steals a powerful levitation gem from the royal castle, it’s up to the PAW Patrol to jet to the rescue before the town is lost forever! Then join the PAW Patrol in even more high-flying adventures where they will save a stunt pilot, one of Mayor Humdinger’s kittens, and even Skye when she breaks her wing flying to Jake’s Mountain!',
    poster_path: '/qHcn3PbjVHxBweDZxWpYH3JfugS.jpg',
    title: 'PAW Patrol: Jet to the Rescue',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 343.329,
      },
    ],
    release_date: '2020-09-03',
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [18],
    id: 772173,
    original_language: 'es',
    original_title: 'Los Dias Que No Estuve',
    overview: '',
    poster_path: '/hoxopHvtpXCd8Uex24jC3pkB8sN.jpg',
    title: 'Los Dias Que No Estuve',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 339.49,
      },
    ],
    release_date: '2021-02-19',
  },
  {
    adult: false,
    backdrop_path: '/fejok33Ijc6SppiEU1cfwA9Mo2.jpg',
    genre_ids: [28, 80, 18],
    id: 717192,
    original_language: 'nl',
    original_title: 'Ferry',
    overview:
      'Before he built a drug empire, Ferry Bouman returns to his hometown on a revenge mission that finds his loyalty tested — and a love that alters his life.',
    poster_path: '/w6n1pu9thpCVHILejsuhKf3tNCV.jpg',
    title: 'Ferry',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 336.954,
      },
    ],
    release_date: '2021-05-14',
  },
  {
    adult: false,
    backdrop_path: '/7vCOBYP52Mm8Nlc09hLUtWfxHjJ.jpg',
    genre_ids: [28, 53],
    id: 767304,
    original_language: 'en',
    original_title: 'Redemption Day',
    overview:
      "Having just returned home, decorated U.S. Marine Captain Brad Paxton's wife, Kate, is kidnapped by a terrorist group while working in Morocco. He is forced back into action for a daring and deadly operation to save the woman he loves.",
    poster_path: '/yCTo0s8xzQplZY5h70cRy2OA4Pt.jpg',
    title: 'Redemption Day',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 329.93,
      },
    ],
    release_date: '2021-01-08',
  },
  {
    adult: false,
    backdrop_path: '/8rIoyM6zYXJNjzGseT3MRusMPWl.jpg',
    genre_ids: [10751, 14, 12, 35, 27],
    id: 531219,
    original_language: 'en',
    original_title: "Roald Dahl's The Witches",
    overview:
      "In late 1967, a young orphaned boy goes to live with his loving grandma in the rural Alabama town of Demopolis. As the boy and his grandmother encounter some deceptively glamorous but thoroughly diabolical witches, she wisely whisks him away to a seaside resort. Regrettably, they arrive at precisely the same time that the world's Grand High Witch has gathered.",
    poster_path: '/b1C0FuXp4wiPmHLVKq4kwtDMgK6.jpg',
    title: "Roald Dahl's The Witches",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 329.859,
      },
    ],
    release_date: '2020-10-25',
  },
  {
    adult: false,
    backdrop_path: '/lOSdUkGQmbAl5JQ3QoHqBZUbZhC.jpg',
    genre_ids: [53, 28, 878],
    id: 775996,
    original_language: 'en',
    original_title: 'Outside the Wire',
    overview:
      'In the near future, a drone pilot is sent into a deadly militarized zone and must work with an android officer to locate a doomsday device.',
    poster_path: '/6XYLiMxHAaCsoyrVo38LBWMw2p8.jpg',
    title: 'Outside the Wire',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 327.432,
      },
    ],
    release_date: '2021-01-15',
  },
  {
    adult: false,
    backdrop_path: '/zlqMASc3vEtdym2OvXgE7fC6onT.jpg',
    genre_ids: [28, 878],
    id: 338762,
    original_language: 'en',
    original_title: 'Bloodshot',
    overview:
      "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
    poster_path: '/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg',
    title: 'Bloodshot',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 324.992,
      },
    ],
    release_date: '2020-03-05',
  },
  {
    adult: false,
    backdrop_path: '/54yOImQgj8i85u9hxxnaIQBRUuo.jpg',
    genre_ids: [28, 80, 18, 53],
    id: 539885,
    original_language: 'en',
    original_title: 'Ava',
    overview:
      'A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.',
    poster_path: '/qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg',
    title: 'Ava',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.7,
      },
      {
        id: 'popularity',
        rating: 323.363,
      },
    ],
    release_date: '2020-07-02',
  },
  {
    adult: false,
    backdrop_path: '/xIoWDHSA2ymOewcCpoUID4PpDb3.jpg',
    genre_ids: [35, 10751, 16, 878],
    id: 2300,
    original_language: 'en',
    original_title: 'Space Jam',
    overview:
      "Jokes fly as the Tune Squad takes on the Nerdlucks in a hardcourt game to decide if the Looney Tunes remain here... or become attractions at a far-off galactic off-ramp called Moron Mountain. The Nerdlucks have a monstrous secret weapon: they've stolen the skills of top NBA stars like Charles Barkley and Patrick Ewing and become Monstars. But that's not all, folks. The Tune Squad’s secret weapon just happens to be the finest player in this or any other universe. He's outta this world. So's the fun.",
    poster_path: '/jY3eCEknk8mUoJZasSQj7Sa2UfC.jpg',
    title: 'Space Jam',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 185.174,
      },
    ],
    release_date: '1996-11-15',
  },
  {
    adult: false,
    backdrop_path: '/ldZ37wdvIxIGOadZAJZhWNp4AdF.jpg',
    genre_ids: [10751, 16, 35, 878],
    id: 825597,
    original_language: 'en',
    original_title: 'Maggie Simpson in The Force Awakens from Its Nap',
    overview:
      'In a daycare far, far away… but still in Springfield, Maggie is on an epic quest for her stolen pacifier. Her adventure brings her face-to-face with young Padawans, Sith Lords, familiar droids, Rebel scum, and an ultimate battle against the dark side, in this original short celebrating the Star Wars galaxy.',
    poster_path: '/2xnf2ZaGXudvgBKPtVXMkNeooh1.jpg',
    title: 'Maggie Simpson in The Force Awakens from Its Nap',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 183.992,
      },
    ],
    release_date: '2021-05-04',
  },
  {
    adult: false,
    backdrop_path: '/8moTOzunF7p40oR5XhlDvJckOSW.jpg',
    genre_ids: [27, 14],
    id: 474350,
    original_language: 'en',
    original_title: 'It Chapter Two',
    overview:
      "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
    poster_path: '/zfE0R94v1E8cuKAerbskfD3VfUt.jpg',
    title: 'It Chapter Two',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 183.764,
      },
    ],
    release_date: '2019-09-04',
  },
  {
    adult: false,
    backdrop_path: '/rH79sB6Nkx4cMW3JzsUy7wK0rhX.jpg',
    genre_ids: [28, 878, 27],
    id: 345940,
    original_language: 'en',
    original_title: 'The Meg',
    overview:
      'A deep sea submersible pilot revisits his past fears in the Mariana Trench, and accidentally unleashes the seventy foot ancestor of the Great White Shark believed to be extinct.',
    poster_path: '/xqECHNvzbDL5I3iiOVUkVPJMSbc.jpg',
    title: 'The Meg',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 183.492,
      },
    ],
    release_date: '2018-08-09',
  },
  {
    adult: false,
    backdrop_path: '/zogWnCSztU8xvabaepQnAwsOtOt.jpg',
    genre_ids: [28, 80, 18],
    id: 531499,
    original_language: 'en',
    original_title: 'The Tax Collector',
    overview:
      'David Cuevas is a family man who works as a gangland tax collector for high ranking Los Angeles gang members. He makes collections across the city with his partner Creeper making sure people pay up or will see retaliation. An old threat returns to Los Angeles that puts everything David loves in harm’s way.',
    poster_path: '/3eg0kGC2Xh0vhydJHO37Sp4cmMt.jpg',
    title: 'The Tax Collector',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.7,
      },
      {
        id: 'popularity',
        rating: 182.09,
      },
    ],
    release_date: '2020-08-07',
  },
  {
    adult: false,
    backdrop_path: '/c7VbRPlev1bRfKvTxr98erw5T7B.jpg',
    genre_ids: [16, 35, 10751],
    id: 585,
    original_language: 'en',
    original_title: 'Monsters, Inc.',
    overview:
      "James Sullivan and Mike Wazowski are monsters, they earn their living scaring children and are the best in the business... even though they're more afraid of the children than they are of them. When a child accidentally enters their world, James and Mike suddenly find that kids are not to be afraid of and they uncover a conspiracy that could threaten all children across the world.",
    poster_path: '/sgheSKxZkttIe8ONsf2sWXPgip3.jpg',
    title: 'Monsters, Inc.',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 181.624,
      },
    ],
    release_date: '2001-11-01',
  },
  {
    adult: false,
    backdrop_path: '/ve4TEHHmJdnEKVWSYlRa3DdoeKz.jpg',
    genre_ids: [12, 14],
    id: 673,
    original_language: 'en',
    original_title: 'Harry Potter and the Prisoner of Azkaban',
    overview:
      'Year three at Hogwarts means new fun and challenges as Harry learns the delicate art of approaching a Hippogriff, transforming shape-shifting Boggarts into hilarity and even turning back time. But the term also brings danger: soul-sucking Dementors hover over the school, an ally of the accursed He-Who-Cannot-Be-Named lurks within the castle walls, and fearsome wizard Sirius Black escapes Azkaban. And Harry will confront them all.',
    poster_path: '/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg',
    title: 'Harry Potter and the Prisoner of Azkaban',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8,
      },
      {
        id: 'popularity',
        rating: 180.457,
      },
    ],
    release_date: '2004-05-31',
  },
  {
    adult: false,
    backdrop_path: '/kIgfFzjjBNgx6Tr2LCw8Zkq921s.jpg',
    genre_ids: [28, 16, 878],
    id: 303857,
    original_language: 'ja',
    original_title: 'ドラゴンボールZ 復活の「F」',
    overview:
      "One peaceful day on Earth, two remnants of Frieza's army named Sorbet and Tagoma arrive searching for the Dragon Balls with the aim of reviving Frieza. They succeed, and Frieza subsequently seeks revenge on the Saiyans.",
    poster_path: '/vBXWdNFs6mCOmq7x761ATxuLXFi.jpg',
    title: "Dragon Ball Z: Resurrection 'F'",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 179.388,
      },
    ],
    release_date: '2015-04-18',
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [10749, 18],
    id: 744275,
    original_language: 'en',
    original_title: 'After We Fell',
    overview:
      "Just as Tessa's life begins to become unglued, nothing is what she thought it would be. Not her friends nor her family. The only person that she should be able to rely on is Hardin, who is furious when he discovers the massive secret that she's been keeping. Before Tessa makes the biggest decision of her life, everything changes because of revelations about her family.",
    poster_path: '/oOZITZodAja6optBgLh8ZZrgzbb.jpg',
    title: 'After We Fell',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 179.267,
      },
    ],
    release_date: '2021-09-01',
  },
  {
    adult: false,
    backdrop_path: '/9n6Cw2wl5ISOLxHhBVwZQfSN94D.jpg',
    genre_ids: [12, 14, 10751],
    id: 674,
    original_language: 'en',
    original_title: 'Harry Potter and the Goblet of Fire',
    overview:
      "When Harry Potter's name emerges from the Goblet of Fire, he becomes a competitor in a grueling battle for glory among three wizarding schools — the Triwizard Tournament. But since Harry never submitted his name for the Tournament, who did? Now Harry must confront a deadly dragon, fierce water demons and an enchanted maze only to find himself in the cruel grasp of He Who Must Not Be Named. In this fourth film adaptation of J.K. Rowling's Harry Potter series, everything changes as Harry, Ron and Hermione leave childhood forever and take on challenges greater than anything they could have imagined.",
    poster_path: '/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg',
    title: 'Harry Potter and the Goblet of Fire',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 179.117,
      },
    ],
    release_date: '2005-11-16',
  },
  {
    adult: false,
    backdrop_path: '/wlnDNMQlnwl5ETlVY6n9CEtR5s0.jpg',
    genre_ids: [878, 28, 80, 53, 18],
    id: 461130,
    original_language: 'en',
    original_title: 'Code 8',
    overview:
      'In Lincoln City, some inhabitants have extraordinary abilities. Most live below the poverty line, under the close surveillance of a heavily militarized police force. Connor, a construction worker with powers, involves with a criminal gang to help his ailing mother. (Based on the short film “Code 8,” 2016.)',
    poster_path: '/izGX7npHEopDQvngYcxMJEfcFbj.jpg',
    title: 'Code 8',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 178.803,
      },
    ],
    release_date: '2019-12-06',
  },
  {
    adult: false,
    backdrop_path: '/vxZaw8C5w4XlYEPtptzKJ7lBIFH.jpg',
    genre_ids: [53, 27, 18],
    id: 599281,
    original_language: 'en',
    original_title: 'Fear of Rain',
    overview:
      'A teenage girl living with schizophrenia begins to suspect her neighbor has kidnapped a child. Her parents try desperately to help her live a normal life, without exposing their own tragic secrets, and the only person who believes her is Caleb – a boy she isn’t even sure exists.',
    poster_path: '/b2shaNA4F8zNIwoRYr33lPTiFfl.jpg',
    title: 'Fear of Rain',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 177.902,
      },
    ],
    release_date: '2021-02-12',
  },
  {
    adult: false,
    backdrop_path: '/iID0at69rWzZOIarUIFrfDOFJA.jpg',
    genre_ids: [27, 14, 18, 10770],
    id: 786300,
    original_language: 'en',
    original_title: 'Tentacles',
    overview:
      'A young Los Angeles couple Tara and Sam fall head over heels into a new romance, entwining their lives—until their intimacy transforms into something terrifying.',
    poster_path: '/kBKKXVbVwIP81u8Bnhguux48Sdn.jpg',
    title: 'Tentacles',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 177.262,
      },
    ],
    release_date: '2021-02-12',
  },
  {
    adult: false,
    backdrop_path: '/dpoIQ9MN54cxuLZxDABEUOSFGY3.jpg',
    genre_ids: [28, 12, 14],
    id: 297761,
    original_language: 'en',
    original_title: 'Suicide Squad',
    overview:
      'From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.',
    poster_path: '/rbsm0i2q2uqlUSFgUAHq3xCUO4j.jpg',
    title: 'Suicide Squad',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 176.857,
      },
    ],
    release_date: '2016-08-03',
  },
  {
    adult: false,
    backdrop_path: '/kNGW6f47HUk0hISjj1AvXoLNL3L.jpg',
    genre_ids: [28, 878, 27, 9648],
    id: 520901,
    original_language: 'en',
    original_title: 'Doom: Annihilation',
    overview:
      "A group of UAC Marines responds to a distress call from a top-secret scientific base on Phobos, a Martian moon, only to discover it's been overrun by demons.",
    poster_path: '/7EGElXVSNnqcPjuhXPd6UVUX1rD.jpg',
    title: 'Doom: Annihilation',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.9,
      },
      {
        id: 'popularity',
        rating: 175.475,
      },
    ],
    release_date: '2019-09-30',
  },
  {
    adult: false,
    backdrop_path: '/siBfSB55FBc7IdvgtApq6NaXNHw.jpg',
    genre_ids: [878, 27, 53],
    id: 158015,
    original_language: 'en',
    original_title: 'The Purge',
    overview:
      "Given the country's overcrowded prisons, the U.S. government begins to allow 12-hour periods of time in which all illegal activity is legal. During one of these free-for-alls, a family must protect themselves from a home invasion.",
    poster_path: '/1x4fHaDdlpWT5P2UV4ClKguWbTE.jpg',
    title: 'The Purge',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 175.09,
      },
    ],
    release_date: '2013-05-31',
  },
  {
    adult: false,
    backdrop_path: '/d2UxKyaJ5GgzuHaSsWinFfv3g6L.jpg',
    genre_ids: [28, 27, 53],
    id: 581392,
    original_language: 'ko',
    original_title: '반도',
    overview:
      'A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.',
    poster_path: '/eeqvAzCccAZOhU3RfbvHB3s44S6.jpg',
    title: 'Peninsula',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 174.896,
      },
    ],
    release_date: '2020-07-15',
  },
  {
    adult: false,
    backdrop_path: '/z9ft5HYHzWcasR6SGcgeluxTznB.jpg',
    genre_ids: [10751, 16, 10402, 35, 18],
    id: 335797,
    original_language: 'en',
    original_title: 'Sing',
    overview:
      'A koala named Buster recruits his best friend to help him drum up business for his theater by hosting a singing competition.',
    poster_path: '/lW0kUtXTOVlHTVhDO2VzNBACAHX.jpg',
    title: 'Sing',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 174.534,
      },
    ],
    release_date: '2016-11-23',
  },
  {
    adult: false,
    backdrop_path: '/hB8ypGAAq1YiyyTdCSQeFoXHPXW.jpg',
    genre_ids: [53, 27],
    id: 482373,
    original_language: 'en',
    original_title: "Don't Breathe 2",
    overview:
      'The Blind Man has been hiding out for several years in an isolated cabin and has taken in and raised a young girl orphaned from a devastating house fire. Their quiet life together is shattered when a group of criminals kidnap the girl, forcing the Blind Man to leave his safe haven to save her.',
    poster_path: '/nlnCyiKagoJsEXcQtnbBorS0Q7a.jpg',
    title: "Don't Breathe 2",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 174.1,
      },
    ],
    release_date: '2021-08-12',
  },
  {
    adult: false,
    backdrop_path: '/yCpGGDCabhweKMdJpjT4uXexM63.jpg',
    genre_ids: [99],
    id: 512128,
    original_language: 'es',
    original_title: 'Los Viejos',
    overview:
      'A timeless look at art, love and beauty, The Oldies follows three elderly Cuban musicians as they relate their stories of struggle and reveal their undying passion for life.',
    poster_path: '/p4TEPCq9m2ggTeQiZzV4cysy9Ba.jpg',
    title: 'The Oldies',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 2,
      },
      {
        id: 'popularity',
        rating: 172.155,
      },
    ],
    release_date: '2018-01-01',
  },
  {
    adult: false,
    backdrop_path: '/mBbA77FyzhU0Tz9tmbKG8heGmh3.jpg',
    genre_ids: [878, 18, 27],
    id: 594718,
    original_language: 'ru',
    original_title: 'Спутник',
    overview:
      'At the height of the Cold War, a Soviet spacecraft crash lands after a mission gone awry, leaving the commander as its only survivor. After a renowned Russian psychologist is brought in to evaluate the commander’s mental state, it becomes clear that something dangerous may have come back to Earth with him…',
    poster_path: '/eAUzmhP54bE1vPXaY7FbuZREJlR.jpg',
    title: 'Sputnik',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 146.423,
      },
    ],
    release_date: '2020-09-08',
  },
  {
    adult: false,
    backdrop_path: '/lm4xH0YwFbVvTgdtau1thNK5S6J.jpg',
    genre_ids: [53, 27],
    id: 511987,
    original_language: 'en',
    original_title: 'Crawl',
    overview:
      'When a huge hurricane hits her hometown in Florida, Haley ignores evacuation orders to look for her father. After finding him badly wounded, both are trapped by the flood. With virtually no time to escape the storm, they discover that rising water levels are the least of their problems.',
    poster_path: '/mKxpYRIrCZLxZjNqpocJ2RdQW8v.jpg',
    title: 'Crawl',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 145.845,
      },
    ],
    release_date: '2019-07-11',
  },
  {
    adult: false,
    backdrop_path: '/7qKWTyYvkyIrWgkUOHiNxHv3FNK.jpg',
    genre_ids: [12, 14, 9648],
    id: 675,
    original_language: 'en',
    original_title: 'Harry Potter and the Order of the Phoenix',
    overview:
      'The rebellion begins! Lord Voldemort has returned, but the Ministry of Magic is doing everything it can to keep the wizarding world from knowing the truth – including appointing Ministry official Dolores Umbridge as the new Defence Against the Dark Arts professor at Hogwarts. When Umbridge refuses to teach practical defensive magic, Ron and Hermione convince Harry to secretly train a select group of students for the wizarding war that lies ahead. A terrifying showdown between good and evil awaits in this enthralling film version of the fifth novel in J.K. Rowling’s Harry Potter series. Prepare for battle!',
    poster_path: '/s836PRwHkLjrOJrfW0eo7B4NJOf.jpg',
    title: 'Harry Potter and the Order of the Phoenix',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 144.902,
      },
    ],
    release_date: '2007-06-28',
  },
  {
    adult: false,
    backdrop_path: '/yQIBS8B9l2qXoPoPtxSXvH7CfoT.jpg',
    genre_ids: [18, 36, 10752],
    id: 324786,
    original_language: 'en',
    original_title: 'Hacksaw Ridge',
    overview:
      'WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first Conscientious Objector in American history to receive the Congressional Medal of Honor.',
    poster_path: '/fTuxNlgEm04PPFkr1xfK94Jn8BW.jpg',
    title: 'Hacksaw Ridge',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.2,
      },
      {
        id: 'popularity',
        rating: 144.848,
      },
    ],
    release_date: '2016-10-07',
  },
  {
    adult: false,
    backdrop_path: '/kkUQ8zpBKe0L7ZkgsojWC85pYpi.jpg',
    genre_ids: [14, 12],
    id: 12445,
    original_language: 'en',
    original_title: 'Harry Potter and the Deathly Hallows: Part 2',
    overview:
      "Harry, Ron and Hermione continue their quest to vanquish the evil Voldemort once and for all. Just as things begin to look hopeless for the young wizards, Harry discovers a trio of magical objects that endow him with powers to rival Voldemort's formidable skills.",
    poster_path: '/da22ZBmrDOXOCDRvr8Gic8ldhv4.jpg',
    title: 'Harry Potter and the Deathly Hallows: Part 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.1,
      },
      {
        id: 'popularity',
        rating: 144.453,
      },
    ],
    release_date: '2011-07-07',
  },
  {
    adult: false,
    backdrop_path: '/y07caIA4yErsDOZ2IzfSDGzTz7B.jpg',
    genre_ids: [27, 878],
    id: 791910,
    original_language: 'en',
    original_title: 'Rise of the Mummy',
    overview:
      'A group of archaeology students awaken an ancient mummy. After being trapped in a time loop, the only way they can escape, is to defeat the mummy. As the body count rises, it seems the Mummy has to collect the souls of those who woke him to be able to walk the earth - for good.',
    poster_path: '/tmghT8HaddVIS9hEXIOI9GuDchi.jpg',
    title: 'Rise of the Mummy',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5,
      },
      {
        id: 'popularity',
        rating: 143.545,
      },
    ],
    release_date: '2021-04-03',
  },
  {
    adult: false,
    backdrop_path: '/5MlvT4DZIdkpb7A9t375HVoiJ1v.jpg',
    genre_ids: [28, 53],
    id: 646207,
    original_language: 'en',
    original_title: 'The Ice Road',
    overview:
      'After a remote diamond mine collapses in far northern Canada, an ice road driver must lead an impossible rescue mission over a frozen ocean to save the trapped miners.',
    poster_path: '/537klaNsLjynwopYTrqz6ro03l4.jpg',
    title: 'The Ice Road',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 143.424,
      },
    ],
    release_date: '2021-06-24',
  },
  {
    adult: false,
    backdrop_path: '/obExOU9qDnMcxvWPumoD14oxup5.jpg',
    genre_ids: [53, 27, 18],
    id: 509635,
    original_language: 'en',
    original_title: 'Alone',
    overview:
      'A recently widowed traveler is kidnapped by a cold blooded killer, only to escape into the wilderness where she is forced to battle against the elements as her pursuer closes in on her.',
    poster_path: '/n9OzZmPMnVrV0cMQ7amX0DtBkQH.jpg',
    title: 'Alone',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 143.124,
      },
    ],
    release_date: '2020-09-10',
  },
  {
    adult: false,
    backdrop_path: '/4fhU4yeVm2EZMJboXjGqM9pbppN.jpg',
    genre_ids: [10749, 35],
    id: 806643,
    original_language: 'en',
    original_title: 'This Little Love of Mine',
    overview:
      'Laura Price is a successful San Francisco lawyer on the cusp of promotion – a far cry from her childhood growing up on a tropical island with best friends Chip and Gem. When the firm’s biggest client – Chip’s grandfather – asks Laura to travel to the island and deliver a contract to make Chip his heir, she leaves behind her practice and fiancé Owen to convince her childhood friend to sign a contract that will make him a billionaire.',
    poster_path: '/p8i1MN7DiqHWVGLluRUaPqEOyhb.jpg',
    title: 'This Little Love of Mine',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 141.895,
      },
    ],
    release_date: '2021-04-22',
  },
  {
    adult: false,
    backdrop_path: '/q7fXcrDPJcf6t3rzutaNwTzuKP1.jpg',
    genre_ids: [878, 12, 28],
    id: 333339,
    original_language: 'en',
    original_title: 'Ready Player One',
    overview:
      'When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.',
    poster_path: '/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
    title: 'Ready Player One',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 141.209,
      },
    ],
    release_date: '2018-03-28',
  },
  {
    adult: false,
    backdrop_path: '/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg',
    genre_ids: [10749, 16, 18],
    id: 372058,
    original_language: 'ja',
    original_title: '君の名は。',
    overview:
      'High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.',
    poster_path: '/q719jXXEzOoYaps6babgKnONONX.jpg',
    title: 'Your Name.',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.6,
      },
      {
        id: 'popularity',
        rating: 138.052,
      },
    ],
    release_date: '2016-08-26',
  },
  {
    adult: false,
    backdrop_path: '/oj9pEWQq5higRzKWiE8f0d5hBSb.jpg',
    genre_ids: [53, 27, 18],
    id: 617708,
    original_language: 'es',
    original_title: 'La Llorona',
    overview:
      'Accused of the genocide of Mayan people, retired general Enrique is trapped in his mansion by massive protests. Abandoned by his staff, the indignant old man and his family must face the devastating truth of his actions and the growing sense that a wrathful supernatural force is targeting them for his crimes.',
    poster_path: '/lIMrT43BRAXWxtSAtj7Kc0awgVT.jpg',
    title: 'La Llorona',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 138.014,
      },
    ],
    release_date: '2020-01-22',
  },
  {
    adult: false,
    backdrop_path: '/udkrGMA9hsEGkQpmZ31rGpQQKp8.jpg',
    genre_ids: [28, 9648, 878, 53],
    id: 198663,
    original_language: 'en',
    original_title: 'The Maze Runner',
    overview:
      "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape.",
    poster_path: '/ode14q7WtDugFDp78fo9lCsmay9.jpg',
    title: 'The Maze Runner',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 137.918,
      },
    ],
    release_date: '2014-09-10',
  },
  {
    adult: false,
    backdrop_path: '/wXsQvli6tWqja51pYxXNG1LFIGV.jpg',
    genre_ids: [10751, 16, 18],
    id: 8587,
    original_language: 'en',
    original_title: 'The Lion King',
    overview:
      'A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young prince must decide his fate: Will he remain an outcast or face his demons and become what he needs to be?',
    poster_path: '/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg',
    title: 'The Lion King',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.3,
      },
      {
        id: 'popularity',
        rating: 137.863,
      },
    ],
    release_date: '1994-06-23',
  },
  {
    adult: false,
    backdrop_path: '/uO6ZUez70Twan92pqoV60T9kiGH.jpg',
    genre_ids: [99],
    id: 440249,
    original_language: 'en',
    original_title: 'After Porn Ends 2',
    overview:
      "After Porn Ends 2 picks up where its predecessor left off and not only turns back the clock to meet the oldest living stars in adult film's history, but goes in depth with some of Its most current retirees and juxtaposes their experiences in a life after porn. Delving deeper into society's ongoing stigmas of race, misogyny, and the reality of decreasing opportunities for these former VHS box cover stars. For some, their careers in adult entertainment is accepted proudly and without regret. In fact, it seems to have proven to be the pathway to their current happiness and inner peace. For others, however, a career in porn has proven to be a conduit to certain despair as they struggle to find a way to bury their past and emerge with a new career or calling.",
    poster_path: '/rfItXrtDGILwsCdmgVxX79phFuI.jpg',
    title: 'After Porn Ends 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.4,
      },
      {
        id: 'popularity',
        rating: 137.175,
      },
    ],
    release_date: '2017-03-28',
  },
  {
    adult: false,
    backdrop_path: '/jW44Mb6zCPzjoMc29bbAC7vUIm8.jpg',
    genre_ids: [27],
    id: 732472,
    original_language: 'en',
    original_title: 'The Amityville Harvest',
    overview:
      'While staying at an aging manor to research its liquor-smuggling history, Christina and her documentary video team interview their spooky host Vincent—but no one can capture his image or voice on video. After shocking dreams and bloody encounters, the crew members fall under Victor’s hypnotic spell.',
    poster_path: '/luBPZjYEIALVs5AKp95OI9aCX9M.jpg',
    title: 'The Amityville Harvest',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 136.703,
      },
    ],
    release_date: '2020-10-20',
  },
  {
    adult: false,
    backdrop_path: '/nWlhFPdaWXWkhZrnELgboEqV0dp.jpg',
    genre_ids: [878, 53, 28],
    id: 700995,
    original_language: 'es',
    original_title: 'Devoto, la invasión silenciosa',
    overview:
      "Five strangers wake up locked in a strange building. They don't know who took them there or for what purpose. Throughout a night they will discover with surprise that an invasion is taking place outside that complex. And this motley group of strangers, for a reason they will have to figure out, are the ones chosen to try to stop it.",
    poster_path: '/ppqef9A3tg3PJiIA82gTiA7n9Fi.jpg',
    title: 'Devoto, la invasión silenciosa',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 2.9,
      },
      {
        id: 'popularity',
        rating: 136.646,
      },
    ],
    release_date: '2020-05-07',
  },
  {
    adult: false,
    backdrop_path: '/lrNbt21hRirjyTK0SeLA0L4RAVS.jpg',
    genre_ids: [28, 27, 878],
    id: 340102,
    original_language: 'en',
    original_title: 'The New Mutants',
    overview:
      'Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves.',
    poster_path: '/xZNw9xxtwbEf25NYoz52KdbXHPM.jpg',
    title: 'The New Mutants',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 136.53,
      },
    ],
    release_date: '2020-08-26',
  },
  {
    adult: false,
    backdrop_path: '/30BxobPLvzTp3ziDDPDnKLQUzi8.jpg',
    genre_ids: [878, 28],
    id: 373571,
    original_language: 'en',
    original_title: 'Godzilla: King of the Monsters',
    overview:
      "Follows the heroic efforts of the crypto-zoological agency Monarch as its members face off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah. When these ancient super-species, thought to be mere myths, rise again, they all vie for supremacy, leaving humanity's very existence hanging in the balance.",
    poster_path: '/fQ40gmFM4p03tXwMxQQKh2cCBW4.jpg',
    title: 'Godzilla: King of the Monsters',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 136.199,
      },
    ],
    release_date: '2019-05-29',
  },
  {
    adult: false,
    backdrop_path: '/sZkhzNns3oXPl3BlIwZNKpZZnIm.jpg',
    genre_ids: [18],
    id: 681022,
    original_language: 'en',
    original_title: 'Cowboys',
    overview:
      'Troy and his young transgender son Joe are on the run from his conservative mother in the Montana wilderness, with a detective in hot pursuit.',
    poster_path: '/88ddT0lpefhVCwN0hNCA4dH2IKU.jpg',
    title: 'Cowboys',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 136.077,
      },
    ],
    release_date: '2020-04-15',
  },
  {
    adult: false,
    backdrop_path: '/e7tMI0zVKJB2TS74TaBifIZIkCp.jpg',
    genre_ids: [27, 28, 35],
    id: 338967,
    original_language: 'en',
    original_title: 'Zombieland: Double Tap',
    overview:
      'Columbus, Tallahassee, Wichita, and Little Rock move to the American heartland as they face off against evolved zombies, fellow survivors, and the growing pains of the snarky makeshift family.',
    poster_path: '/dtRbVsUb5O12WWO54SRpiMtHKC0.jpg',
    title: 'Zombieland: Double Tap',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 156.972,
      },
    ],
    release_date: '2019-10-09',
  },
  {
    adult: false,
    backdrop_path: '/mnq5O3MyfHIJvunmE0fRhMrQQ89.jpg',
    genre_ids: [28, 53],
    id: 659067,
    original_language: 'fr',
    original_title: 'La Terre et le Sang',
    overview:
      'A sawmill owner and his teenage daughter become tangled in a deadly feud when a drug dealer stashes stolen cocaine on their remote property.',
    poster_path: '/23S0NEXXOMhhXhF566Pw5sx7hnZ.jpg',
    title: 'Earth and Blood',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 156.905,
      },
    ],
    release_date: '2020-04-17',
  },
  {
    adult: false,
    backdrop_path: '/jw0849O7WLarbYKJkA9WpRLeGKG.jpg',
    genre_ids: [35, 10749],
    id: 802504,
    original_language: 'nl',
    original_title: 'Just Say Yes',
    overview:
      'Incurable romantic Lotte finds her life upended when her plans for a picture-perfect wedding unravel -- just as her self-absorbed sister gets engaged.',
    poster_path: '/3btDwus5VN5jOWfA9strpDJWwfj.jpg',
    title: 'Just Say Yes',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 154.447,
      },
    ],
    release_date: '2021-04-02',
  },
  {
    adult: false,
    backdrop_path: '/x0VXCWSTny5JRvpgDnw5ptwQyhA.jpg',
    genre_ids: [878, 28, 12, 35],
    id: 346910,
    original_language: 'en',
    original_title: 'The Predator',
    overview:
      'When a young child accidentally triggers extraterrestrial hunters to return to Earth, a ragtag crew of ex-soldiers and scientists join forces to prevent the end of the human race.',
    poster_path: '/wMq9kQXTeQCHUZOG4fAe5cAxyUA.jpg',
    title: 'The Predator',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.6,
      },
      {
        id: 'popularity',
        rating: 153.907,
      },
    ],
    release_date: '2018-09-05',
  },
  {
    adult: false,
    backdrop_path: '/c3F4P2oauA7IQmy4hM0OmRt2W7d.jpg',
    genre_ids: [878, 28, 53],
    id: 453405,
    original_language: 'en',
    original_title: 'Gemini Man',
    overview:
      "Henry Brogan is an elite 51-year-old assassin who's ready to call it quits after completing his 72nd job. His plans get turned upside down when he becomes the target of a mysterious operative who can seemingly predict his every move. To his horror, Brogan soon learns that the man who's trying to kill him is a younger, faster, cloned version of himself.",
    poster_path: '/uTALxjQU8e1lhmNjP9nnJ3t2pRU.jpg',
    title: 'Gemini Man',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 153.424,
      },
    ],
    release_date: '2019-10-02',
  },
  {
    adult: false,
    backdrop_path: '/ySHlkHDbXztjdjRJ0pZN7FXRnaW.jpg',
    genre_ids: [16, 12, 28, 14],
    id: 631132,
    original_language: 'ja',
    original_title: "ゴブリンスレイヤー -GOBLIN'S CROWN-",
    overview:
      'Goblin Slayer and his party head up to the snowy mountains in the north after receiving that request from the Sword Maiden to find any information on the Noble Fencer that disappeared after leaving to slay some goblins. A small village gets attacked, they encounter a mysterious chapel, and something about how these goblins are acting bothers the Goblin slayer.  In order to save the captured Noble Fencer, the Goblin Slayer and his party head to an ancient fortress covered in snow to face off with a powerful foe and a horde of goblins!',
    poster_path: '/oyDaF4za9C9GxfYSyZUmj2aZGJT.jpg',
    title: "Goblin Slayer: Goblin's Crown",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 152.927,
      },
    ],
    release_date: '2020-02-01',
  },
  {
    adult: false,
    backdrop_path: '/ovwN1JDPvllWZaH3xtKp7txRWDj.jpg',
    genre_ids: [27],
    id: 715658,
    original_language: 'en',
    original_title: 'The Scientist',
    overview:
      'An unconventional scientist, struggling to care for his terminally-ill wife, embarks on a journey to develop a cure for her. However, his methods of treatment and tampering with human DNA, could lead to the extinction of humanity.',
    poster_path: '/hIkKM1nlzk8DThFT4vxgW1KoofL.jpg',
    title: 'The Scientist',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 152.326,
      },
    ],
    release_date: '2020-09-21',
  },
  {
    adult: false,
    backdrop_path: '/2q4ec7QNNmLQYxvxjZrB4AZeb2W.jpg',
    genre_ids: [18],
    id: 778552,
    original_language: 'en',
    original_title: 'The Penitent Thief',
    overview:
      'The story of the two unnamed men who were crucified alongside Jesus and how they came to be beside him on the cross that fateful day. Dismas and his brother Jotham, along with Gestas, another young man who will share their fate, suffer tragedy and injustice at the hands of a band of thieves and a ruthless Roman centurion. Theirs is a story of survival against the odds, but they cannot outrun their destiny.',
    poster_path: '/2IHmKFzWDkUVqbLfy01M2eSQM5e.jpg',
    title: 'The Penitent Thief',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.7,
      },
      {
        id: 'popularity',
        rating: 152.31,
      },
    ],
    release_date: '2021-02-25',
  },
  {
    adult: false,
    backdrop_path: '/u1wHUA0R48FH4WV3sGqjwx3aNZm.jpg',
    genre_ids: [16, 18, 10402, 10749],
    id: 632632,
    original_language: 'ja',
    original_title: '映画 ギヴン',
    overview:
      "The film centers on the love relationship among the band's bassist Haruki Nakayama, drummer Akihiko Kaji, and Akihiko's roommate and ex-boyfriend Ugetsu Murata.",
    poster_path: '/xKCtoYHUyX8zAg68eemnYa2orep.jpg',
    title: 'Given',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.8,
      },
      {
        id: 'popularity',
        rating: 152.19,
      },
    ],
    release_date: '2020-08-22',
  },
  {
    adult: false,
    backdrop_path: '/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg',
    genre_ids: [28, 12, 35, 14, 878],
    id: 284053,
    original_language: 'en',
    original_title: 'Thor: Ragnarok',
    overview:
      'Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his home-world and the end of Asgardian civilization, at the hands of a powerful new threat, the ruthless Hela.',
    poster_path: '/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
    title: 'Thor: Ragnarok',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 150.84,
      },
    ],
    release_date: '2017-10-25',
  },
  {
    adult: false,
    backdrop_path: '/w7c5L2yOVR7hhnTr69SpSxMpj3v.jpg',
    genre_ids: [878, 28, 16],
    id: 487242,
    original_language: 'en',
    original_title: 'Suicide Squad: Hell to Pay',
    overview:
      'Task Force X targets a powerful mystical object that they will risk their lives to steal.',
    poster_path: '/7o0OQUf15v2m45gXluRUMTRC14h.jpg',
    title: 'Suicide Squad: Hell to Pay',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 150.342,
      },
    ],
    release_date: '2018-05-09',
  },
  {
    adult: false,
    backdrop_path: '/gbdiI8tzptuOcGp4anJeZAiUzA1.jpg',
    genre_ids: [27, 53],
    id: 652004,
    original_language: 'en',
    original_title: 'The Wolf of Snow Hollow',
    overview:
      'A stressed-out police officer struggles not to give in to the paranoia that grips his small mountain town as bodies turn up after each full moon.',
    poster_path: '/nXeTSXR5ryFwxrlpmD9hhXJTAuc.jpg',
    title: 'The Wolf of Snow Hollow',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 149.838,
      },
    ],
    release_date: '2020-10-23',
  },
  {
    adult: false,
    backdrop_path: '/9NWhSoWnQGpkjdWLLHUd9N8dGF2.jpg',
    genre_ids: [18, 28, 53],
    id: 489245,
    original_language: 'en',
    original_title: 'The Kill Team',
    overview:
      "When Andrew Briggman—a young soldier in the US invasion of Afghanistan—witnesses other recruits killing innocent civilians under the direction of a sadistic Sergeant, he considers reporting them to higher-ups. However, the heavily-armed and increasingly-violent platoon becomes suspicious that someone in their ranks has turned on them, and Andrew begins to fear that he'll be the next target.",
    poster_path: '/wLRZbtrbV51oQuvqNeK6vhb6btV.jpg',
    title: 'The Kill Team',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 149.493,
      },
    ],
    release_date: '2019-10-17',
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [16],
    id: 610150,
    original_language: 'ja',
    original_title: 'ドラゴンボール超：スーパーヒーロー',
    overview: '',
    poster_path: '/eJHtAsfF096EpJPvWbFEX3wErE7.jpg',
    title: 'Dragon Ball Super: Super Hero',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 149.395,
      },
    ],
  },
  {
    adult: false,
    backdrop_path: '/cjRUhKyt2Jo3V1KNzc5tpPNfccG.jpg',
    genre_ids: [878, 28, 12],
    id: 320288,
    original_language: 'en',
    original_title: 'Dark Phoenix',
    overview:
      "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
    poster_path: '/kZv92eTc0Gg3mKxqjjDAM73z9cy.jpg',
    title: 'Dark Phoenix',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 148.323,
      },
    ],
    release_date: '2019-06-05',
  },
  {
    adult: false,
    backdrop_path: '/kT8bDEAgEYBKhRJtqM97qTw6uRW.jpg',
    genre_ids: [12, 14],
    id: 767,
    original_language: 'en',
    original_title: 'Harry Potter and the Half-Blood Prince',
    overview:
      'As Lord Voldemort tightens his grip on both the Muggle and wizarding worlds, Hogwarts is no longer a safe haven. Harry suspects perils may even lie within the castle, but Dumbledore is more intent upon preparing him for the final battle fast approaching. Together they work to find the key to unlock Voldemorts defenses and to this end, Dumbledore recruits his old friend and colleague Horace Slughorn, whom he believes holds crucial information. Even as the decisive showdown looms, romance blossoms for Harry, Ron, Hermione and their classmates. Love is in the air, but danger lies ahead and Hogwarts may never be the same again.',
    poster_path: '/z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg',
    title: 'Harry Potter and the Half-Blood Prince',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 148.159,
      },
    ],
    release_date: '2009-07-07',
  },
  {
    adult: false,
    backdrop_path: '/bRHSlon9z3gykN6CVePkIgbYSaZ.jpg',
    genre_ids: [10749, 18],
    id: 387844,
    original_language: 'ko',
    original_title: '착한 처제',
    overview:
      "Ha-yeong is a successful psychologist. One day she gets a secretive request from her sister Ha-joo. Apparently Ha-joo's husband Woo-seong is refusing to have sex. Ha-yeong agrees to be their couple therapist but finds out that her brother-in-law actually has sexual desires for her and not her sister...",
    poster_path: '/g462IXqa1Id9R1Xtu3EzqiEOGwN.jpg',
    title: 'Nice Sister-In-Law',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 147.909,
      },
    ],
    release_date: '2015-11-19',
  },
  {
    adult: false,
    backdrop_path: '/ldUfP9TCStQrvc8aVZ5F5Sv7hTg.jpg',
    genre_ids: [878, 35, 27],
    id: 670428,
    original_language: 'en',
    original_title: 'Psycho Goreman',
    overview:
      'Siblings Mimi and Luke unwittingly resurrect an ancient alien overlord. Using a magical amulet, they force the monster to obey their childish whims, and accidentally attract a rogues’ gallery of intergalactic assassins to small-town suburbia.',
    poster_path: '/foQnDv051kQ7satMQkbkPsUxzkD.jpg',
    title: 'Psycho Goreman',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 147.011,
      },
    ],
    release_date: '2021-01-22',
  },
  {
    adult: false,
    backdrop_path: '/oLPxM7Zx2tsilktqrxCUz5M99cc.jpg',
    genre_ids: [12, 28, 18, 36],
    id: 127533,
    original_language: 'ja',
    original_title: 'るろうに剣心',
    overview:
      'Former legendary assassin Kenshin Himura has now become a wandering samurai. Offering aid & protecting those in need as atonement for his past deeds. During this time Kenshin Himura comes across and aides Kaoru Kamiya (Emi Takei). Her father opened the Kamiya Kasshin-ryu, a kendo school located in Tokyo and Kaoru is now an instructor there. Kaoru then invites Kenshin to stay at her dojo. Their relationship develops further, but Kenshin is still haunted by his violent past...',
    poster_path: '/vo3Zs07PZfKNsTrU0pcPZONJcN5.jpg',
    title: 'Rurouni Kenshin Part I: Origins',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 146.962,
      },
    ],
    release_date: '2012-08-25',
  },
  {
    adult: false,
    backdrop_path: '/7GWDrjxeBsh5onaYf5XHjIM9BA1.jpg',
    genre_ids: [28, 53],
    id: 578189,
    original_language: 'en',
    original_title: 'Black and Blue',
    overview:
      'A fast-paced action thriller about a rookie cop who inadvertently captures the murder of a young drug dealer on her body cam. After realizing that the murder was committed by corrupt cops, she teams up with the one person from her community who is willing to help her as she tries to escape both the criminals out for revenge and the police who are desperate to destroy the incriminating footage.',
    poster_path: '/1cSHEKYYP8Dpi4o1iBVd4U75FYt.jpg',
    title: 'Black and Blue',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 146.535,
      },
    ],
    release_date: '2019-10-25',
  },
  {
    adult: false,
    backdrop_path: '/fcjOngTcwB2DurqKP2vwMs6qsTl.jpg',
    genre_ids: [28, 53, 18],
    id: 500922,
    original_language: 'en',
    original_title: 'A Score to Settle',
    overview:
      "A former mob enforcer who is released from prison after serving 22 years for a crime he didn't commit sets out on a path for revenge against the people who wronged him.",
    poster_path: '/4PBwZGBP6ziKuOgHRpbVRyGoqy3.jpg',
    title: 'A Score to Settle',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 115.474,
      },
    ],
    release_date: '2019-08-01',
  },
  {
    adult: false,
    backdrop_path: '/zKPgnVtTxMuVIneBw4rskMXMsQD.jpg',
    genre_ids: [28, 10751],
    id: 545330,
    original_language: 'da',
    original_title: 'Hacker',
    overview:
      '13-year-old Benjamin discovers that his mother didn’t die in an accident as he was led to believe. The trail leads to high-ranking officials in the Danish Secret Service. "Trust no one!", he is told.',
    poster_path: '/sJKcpT5LRuCdGpWm29yH2bMWqT0.jpg',
    title: 'Hacker',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 115.45,
      },
    ],
    release_date: '2019-03-28',
  },
  {
    adult: false,
    backdrop_path: '/2NdMA6PbFMJEP5DmadfGPMECeQc.jpg',
    genre_ids: [35, 10751, 16, 18, 10402],
    id: 438695,
    original_language: 'en',
    original_title: 'Sing 2',
    overview:
      'Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.',
    poster_path: '/eAeD5AOAbKCFkQgejxGbzOIVNB6.jpg',
    title: 'Sing 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 115.322,
      },
    ],
    release_date: '2021-12-02',
  },
  {
    adult: false,
    backdrop_path: '/r17jFHAemzcWPPtoO0UxjIX0xas.jpg',
    genre_ids: [53, 28, 80],
    id: 324552,
    original_language: 'en',
    original_title: 'John Wick: Chapter 2',
    overview:
      'John Wick is forced out of retirement by a former associate looking to seize control of a shadowy international assassins’ guild. Bound by a blood oath to aid him, Wick travels to Rome and does battle against some of the world’s most dangerous killers.',
    poster_path: '/hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg',
    title: 'John Wick: Chapter 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 114.672,
      },
    ],
    release_date: '2017-02-08',
  },
  {
    adult: false,
    backdrop_path: '/YLyORLsYIjC0d1TFBSpJKk7piP.jpg',
    genre_ids: [16, 18, 10749, 10751],
    id: 504253,
    original_language: 'ja',
    original_title: '君の膵臓をたべたい',
    overview:
      'Spring time in April and the last of the cherry blossoms are still in bloom. The usually aloof bookworm with no interest in others comes across a book in a hospital waiting room. Handwritten on the cover are the words: "Living with Dying." He soon discovers that it is a diary kept by his very popular and genuinely cheerful classmate, Sakura Yamauchi, who reveals to him that she is secretly suffering from a pancreatic illness and only has a limited time left. It is at this moment that she gains just one more person to share her secret. Trying to maintain a normal life as much as possible, Sakura is determined to live her life to the fullest until the very last day. As her free spirit and unpredictable actions throw him for a loop, his heart begins to gradually change.',
    poster_path: '/vHdVU0HyyB6k6kuYt8qjwTz9one.jpg',
    title: 'I Want to Eat Your Pancreas',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.3,
      },
      {
        id: 'popularity',
        rating: 114.132,
      },
    ],
    release_date: '2018-09-01',
  },
  {
    adult: false,
    backdrop_path: '/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg',
    genre_ids: [10751, 12, 16],
    id: 420818,
    original_language: 'en',
    original_title: 'The Lion King',
    overview:
      "Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
    poster_path: '/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg',
    title: 'The Lion King',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 113.041,
      },
    ],
    release_date: '2019-07-12',
  },
  {
    adult: false,
    backdrop_path: '/q5HZvtyqG8Vz39Ee9uTQbLeEml.jpg',
    genre_ids: [16, 18],
    id: 378064,
    original_language: 'ja',
    original_title: '映画 聲の形',
    overview:
      'Shouya Ishida starts bullying the new girl in class, Shouko Nishimiya, because she is deaf. But as the teasing continues, the rest of the class starts to turn on Shouya for his lack of compassion. When they leave elementary school, Shouko and Shouya do not speak to each other again... until an older, wiser Shouya, tormented by his past behaviour, decides he must see Shouko once more. He wants to atone for his sins, but is it already too late...?',
    poster_path: '/tuFaWiqX0TXoWu7DGNcmX3UW7sT.jpg',
    title: 'A Silent Voice: The Movie',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.4,
      },
      {
        id: 'popularity',
        rating: 112.378,
      },
    ],
    release_date: '2016-09-17',
  },
  {
    adult: false,
    backdrop_path: '/dBt0DoFfbhOI4ypUfRj1uTq623M.jpg',
    genre_ids: [27, 53, 9648],
    id: 521029,
    original_language: 'en',
    original_title: 'Annabelle Comes Home',
    overview:
      "Determined to keep Annabelle from wreaking more havoc, demonologists Ed and Lorraine Warren bring the possessed doll to the locked artifacts room in their home, placing her “safely” behind sacred glass and enlisting a priest’s holy blessing. But an unholy night of horror awaits as Annabelle awakens the evil spirits in the room, who all set their sights on a new target—the Warrens' ten-year-old daughter, Judy, and her friends.",
    poster_path: '/qWsHMrbg9DsBY3bCMk9jyYCRVRs.jpg',
    title: 'Annabelle Comes Home',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 112.141,
      },
    ],
    release_date: '2019-06-26',
  },
  {
    adult: false,
    backdrop_path: '/p6ExERRwodksg0fFKzCjmNCR6Hw.jpg',
    genre_ids: [53],
    id: 531299,
    original_language: 'en',
    original_title: 'Kill Chain',
    overview:
      'A hotel room shootout between two assassins kicks off a long night where bodies fall like dominoes, as we follow a chain of crooked cops, gangsters, hitmen, a femme Fatale and an ex-mercenary through a relay of murder, betrayal, revenge and redemption.',
    poster_path: '/wy0Xs5mGtD92PyKvsl0lxzbzscG.jpg',
    title: 'Kill Chain',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.5,
      },
      {
        id: 'popularity',
        rating: 112.04,
      },
    ],
    release_date: '2020-02-20',
  },
  {
    adult: false,
    backdrop_path: '/qtq1mai9POAX2IRGcxhVpf8f6Aj.jpg',
    genre_ids: [27],
    id: 756278,
    original_language: 'en',
    original_title: 'Haunting of the Mary Celeste',
    overview:
      'Rachel, a concerned researcher, and her team have set out to sea to prove that the disappearance of a family and crew from a merchant ship was for reasons having to do with the supernatural. Her theory that those on the Mary Celeste vanished into a "rift" between dimensions proves true as the boat breaks down and her crew begins to vanish one by one.',
    poster_path: '/gk179gfqaW3TV191VN7xU0dLAi.jpg',
    title: 'Haunting of the Mary Celeste',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 111.631,
      },
    ],
    release_date: '2020-10-23',
  },
  {
    adult: false,
    backdrop_path: '/aL53oMdZKZRJRH8txH07DLuleF9.jpg',
    genre_ids: [28, 12, 14, 878],
    id: 284052,
    original_language: 'en',
    original_title: 'Doctor Strange',
    overview:
      'After his career is destroyed, a brilliant but arrogant surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.',
    poster_path: '/xf8PbyQcR5ucXErmZNzdKR0s8ya.jpg',
    title: 'Doctor Strange',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 111.21,
      },
    ],
    release_date: '2016-10-25',
  },
  {
    adult: false,
    backdrop_path: '/xRKwiUHGnsZGxZaO6OIKqpzJjPa.jpg',
    genre_ids: [28, 53],
    id: 466622,
    original_language: 'en',
    original_title: 'The Rhythm Section',
    overview:
      'Blake Lively stars as Stephanie Patrick, a woman on a path of self-destruction after her family is tragically killed in a plane crash. When she discovers the wreck was no accident, Stephanie enters the dark, complex world of international espionage seeking vengeance. Her search leads to Iain Boyd (Jude Law), a former MI6 agent who trains her to hunt down those responsible. With nothing left to lose, Stephanie transforms from victim to assassin and discovers that neither revenge nor the truth are what they appear in this action-packed thriller from the producers of James Bond.',
    poster_path: '/spTr0VYyRtl36Lkk6nCnnbFXhus.jpg',
    title: 'The Rhythm Section',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.6,
      },
      {
        id: 'popularity',
        rating: 109.697,
      },
    ],
    release_date: '2020-01-31',
  },
  {
    adult: false,
    backdrop_path: '/l4B2QI2lRKzHMJHke9FAsXLHP35.jpg',
    genre_ids: [16, 35, 10751],
    id: 863,
    original_language: 'en',
    original_title: 'Toy Story 2',
    overview:
      "Andy heads off to Cowboy Camp, leaving his toys to their own devices. Things shift into high gear when an obsessive toy collector named Al McWhiggen, owner of Al's Toy Barn kidnaps Woody. Andy's toys mount a daring rescue mission, Buzz Lightyear meets his match and Woody has to decide where he and his heart truly belong.",
    poster_path: '/eVGu0zsezaSCuN67zgNhzjeNI9Z.jpg',
    title: 'Toy Story 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 109.528,
      },
    ],
    release_date: '1999-10-30',
  },
  {
    adult: false,
    backdrop_path: '/c1YQcpqsljC7lYEmTIeftcl22VS.jpg',
    genre_ids: [53, 28],
    id: 484641,
    original_language: 'fr',
    original_title: 'Anna',
    overview:
      "Beneath Anna Poliatova's striking beauty lies a secret that will unleash her indelible strength and skill to become one of the world's most feared government assassins.",
    poster_path: '/2U0oAVAE0lDRhNmJPPYhDW9kQ8t.jpg',
    title: 'Anna',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 109.285,
      },
    ],
    release_date: '2019-06-19',
  },
  {
    adult: false,
    backdrop_path: '/zn13a7U9eMTJq8sHthe3bCgsVm4.jpg',
    genre_ids: [28, 12, 14],
    id: 122917,
    original_language: 'en',
    original_title: 'The Hobbit: The Battle of the Five Armies',
    overview:
      "Immediately after the events of The Desolation of Smaug, Bilbo and the dwarves try to defend Erebor's mountain of treasure from others who claim it: the men of the ruined Laketown and the elves of Mirkwood. Meanwhile an army of Orcs led by Azog the Defiler is marching on Erebor, fueled by the rise of the dark lord Sauron. Dwarves, elves and men must unite, and the hope for Middle-Earth falls into Bilbo's hands.",
    poster_path: '/xT98tLqatZPQApyRmlPL12LtiWp.jpg',
    title: 'The Hobbit: The Battle of the Five Armies',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 109.223,
      },
    ],
    release_date: '2014-12-10',
  },
  {
    adult: false,
    backdrop_path: '/en971MEXui9diirXlogOrPKmsEn.jpg',
    genre_ids: [28, 12, 35],
    id: 293660,
    original_language: 'en',
    original_title: 'Deadpool',
    overview:
      'Deadpool tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.',
    poster_path: '/3E53WEZJqP6aM84D8CckXx4pIHw.jpg',
    title: 'Deadpool',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 109.125,
      },
    ],
    release_date: '2016-02-09',
  },
  {
    adult: false,
    backdrop_path: '/r0AWsZ9dBvC2No3kND9nxv3iRbb.jpg',
    genre_ids: [18, 36, 10752],
    id: 504949,
    original_language: 'en',
    original_title: 'The King',
    overview:
      'England, 15th century. Hal, a capricious prince who lives among the populace far from court, is forced by circumstances to reluctantly accept the throne and become Henry V.',
    poster_path: '/8u0QBGUbZcBW59VEAdmeFl9g98N.jpg',
    title: 'The King',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 109.107,
      },
    ],
    release_date: '2019-10-11',
  },
  {
    adult: false,
    backdrop_path: '/2FYzxgLNuNVwncilzUeCGbOQzP7.jpg',
    genre_ids: [35, 878],
    id: 479455,
    original_language: 'en',
    original_title: 'Men in Black: International',
    overview:
      'The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest, most global threat to date: a mole in the Men in Black organization.',
    poster_path: '/dPrUPFcgLfNbmDL8V69vcrTyEfb.jpg',
    title: 'Men in Black: International',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 108.843,
      },
    ],
    release_date: '2019-06-12',
  },
  {
    adult: false,
    backdrop_path: '/9igMXvlUR1zrahnQdiXAg3dtaTb.jpg',
    genre_ids: [80, 18, 53, 28],
    id: 559969,
    original_language: 'en',
    original_title: 'El Camino: A Breaking Bad Movie',
    overview:
      'In the wake of his dramatic escape from captivity, Jesse Pinkman must come to terms with his past in order to forge some kind of future.',
    poster_path: '/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg',
    title: 'El Camino: A Breaking Bad Movie',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 108.57,
      },
    ],
    release_date: '2019-10-11',
  },
  {
    adult: false,
    backdrop_path: '/yOCRqvrRrxbs5FYq2pX1KtLJwmR.jpg',
    genre_ids: [28, 12, 878, 53],
    id: 135397,
    original_language: 'en',
    original_title: 'Jurassic World',
    overview:
      'Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.',
    poster_path: '/rhr4y79GpxQF9IsfJItRXVaoGs4.jpg',
    title: 'Jurassic World',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 108.552,
      },
    ],
    release_date: '2015-06-06',
  },
  {
    adult: false,
    backdrop_path: '/yImmxRokQ48PD49ughXdpKTAsAU.jpg',
    genre_ids: [28, 12, 35, 10751],
    id: 644092,
    original_language: 'en',
    original_title: "Finding 'Ohana",
    overview:
      "Two Brooklyn siblings' summer in a rural Oahu town takes an exciting turn when a journal pointing to long-lost treasure sets them on an adventure, leading them to reconnect with their Hawaiian heritage.",
    poster_path: '/tTWl37oAYRXS3D5mEHmjveXXyrN.jpg',
    title: "Finding 'Ohana",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 119.392,
      },
    ],
    release_date: '2021-01-29',
  },
  {
    adult: false,
    backdrop_path: '/wrqUiMXttHE4UBFMhLHlN601MZh.jpg',
    genre_ids: [28],
    id: 427641,
    original_language: 'en',
    original_title: 'Rampage',
    overview:
      'Primatologist Davis Okoye shares an unshakable bond with George, the extraordinarily intelligent, silverback gorilla who has been in his care since birth.  But a rogue genetic experiment gone awry mutates this gentle ape into a raging creature of enormous size.  To make matters worse, it’s soon discovered there are other similarly altered animals.  As these newly created alpha predators tear across North America, destroying everything in their path, Okoye teams with a discredited genetic engineer to secure an antidote, fighting his way through an ever-changing battlefield, not only to halt a global catastrophe but to save the fearsome creature that was once his friend.',
    poster_path: '/MGADip4thVSErP34FAAfzFBTZ5.jpg',
    title: 'Rampage',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 119.381,
      },
    ],
    release_date: '2018-04-12',
  },
  {
    adult: false,
    backdrop_path: '/b33E34IywGC4NWYY3G1ck7uehNF.jpg',
    genre_ids: [16, 10751, 35, 14, 12],
    id: 809,
    original_language: 'en',
    original_title: 'Shrek 2',
    overview:
      "Shrek, Fiona and Donkey set off to Far, Far Away to meet Fiona's mother and father. But not everyone is happy. Shrek and the King find it hard to get along, and there's tension in the marriage. The fairy godmother discovers that Shrek has married Fiona instead of her Son Prince Charming and sets about destroying their marriage.",
    poster_path: '/b6BGbffMYYtwwIED1BGkghbuJm0.jpg',
    title: 'Shrek 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 119.381,
      },
    ],
    release_date: '2004-05-19',
  },
  {
    adult: false,
    backdrop_path: '/4phMeITqEnShF5C3ZD0Q8YQFMAB.jpg',
    genre_ids: [53, 878, 28],
    id: 574982,
    original_language: 'ru',
    original_title: 'Аванпост',
    overview:
      'Contact between most towns on Earth has been severed. A small ring-like area in Eastern Europe still has electricity, and maybe even life is being reported from space. What military forces find outside the ring is shocking.',
    poster_path: '/avl9MEQhtvokNnzoWepkmHBZ2ss.jpg',
    title: 'The Blackout',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 119.26,
      },
    ],
    release_date: '2019-11-21',
  },
  {
    adult: false,
    backdrop_path: '/ize3ZieqSy0TCWljmVoEiy8fSFS.jpg',
    genre_ids: [14, 16, 10749, 18],
    id: 568160,
    original_language: 'ja',
    original_title: '天気の子',
    overview:
      'The summer of his high school freshman year, Hodaka runs away from his remote island home to Tokyo, and quickly finds himself pushed to his financial and personal limits. The weather is unusually gloomy and rainy every day, as if taking its cue from his life. After many days of solitude, he finally finds work as a freelance writer for a mysterious occult magazine. Then, one day, Hodaka meets Hina on a busy street corner. This bright and strong-willed girl possesses a strange and wonderful ability: the power to stop the rain and clear the sky.',
    poster_path: '/qgrk7r1fV4IjuoeiGS5HOhXNdLJ.jpg',
    title: 'Weathering with You',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.2,
      },
      {
        id: 'popularity',
        rating: 118.981,
      },
    ],
    release_date: '2019-06-19',
  },
  {
    adult: false,
    backdrop_path: '/5gTQmnGYKxDfmUWJ9GUWqrszRxN.jpg',
    genre_ids: [10751, 16, 9648, 35],
    id: 721656,
    original_language: 'en',
    original_title: 'Happy Halloween, Scooby-Doo!',
    overview:
      'Scooby-Doo and the gang team up with their pals, Bill Nye The Science Guy and Elvira Mistress of the Dark, to solve this mystery of gigantic proportions and save Crystal Cove!',
    poster_path: '/5aL71e0XBgHZ6zdWcWeuEhwD2Gw.jpg',
    title: 'Happy Halloween, Scooby-Doo!',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 118.686,
      },
    ],
    release_date: '2020-10-06',
  },
  {
    adult: false,
    backdrop_path: '/qsimYNbLnak0QAHK3sopWzyW8H7.jpg',
    genre_ids: [18, 28, 12, 53, 9648, 14],
    id: 518764,
    original_language: 'zh',
    original_title: '动物世界',
    overview:
      'Drifting aimlessly through life, Kaisi (Li Yi Feng) has racked up debts of several million having borrowed money from his friends. Lured with the promise of writing it all off, Kaisi leaves his ailing mother and childhood sweetheart Qing (Zhou Dongyu) to board the ship Destiny and attend a gambling party controlled by the mysterious Anderson (Michael Douglas).  All players join the game with stars. For each game they lose, their opponent captures a star. Everyone is holding daggers behind their backs plotting dirty means by which to overcome their opponents. The game quickly deteriorates into a slaughter and Kaisi must battle save his own skin…',
    poster_path: '/kxc25B05Gq4CbCoWbyTFf9iF0wn.jpg',
    title: 'Animal World',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 118.293,
      },
    ],
    release_date: '2018-06-29',
  },
  {
    adult: false,
    backdrop_path: '/6qVF0gnLnbKCgcMfCpCB8GH7B5I.jpg',
    genre_ids: [28, 12, 16, 878, 35],
    id: 324857,
    original_language: 'en',
    original_title: 'Spider-Man: Into the Spider-Verse',
    overview:
      'Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson "Kingpin" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.',
    poster_path: '/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg',
    title: 'Spider-Man: Into the Spider-Verse',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.4,
      },
      {
        id: 'popularity',
        rating: 118.172,
      },
    ],
    release_date: '2018-12-06',
  },
  {
    adult: false,
    backdrop_path: '/hrMbAi9fPTmc6EtpyyAgDKznptu.jpg',
    genre_ids: [10749, 18],
    id: 398818,
    original_language: 'en',
    original_title: 'Call Me by Your Name',
    overview:
      "In 1980s Italy, a relationship begins between seventeen-year-old teenage Elio and the older adult man hired as his father's research assistant.",
    poster_path: '/tcNniniS4rfqrLH0oORikJfnIwY.jpg',
    title: 'Call Me by Your Name',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.3,
      },
      {
        id: 'popularity',
        rating: 117.309,
      },
    ],
    release_date: '2017-09-01',
  },
  {
    adult: false,
    backdrop_path: '/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
    genre_ids: [12, 18, 878],
    id: 157336,
    original_language: 'en',
    original_title: 'Interstellar',
    overview:
      'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
    poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    title: 'Interstellar',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.3,
      },
      {
        id: 'popularity',
        rating: 116.901,
      },
    ],
    release_date: '2014-11-05',
  },
  {
    adult: false,
    backdrop_path: '/htBUhLSS7FfHtydgYxUWjL3J1Q1.jpg',
    genre_ids: [16, 12, 10751, 14],
    id: 560050,
    original_language: 'en',
    original_title: 'Over the Moon',
    overview:
      'In this animated musical, a girl builds a rocket ship and blasts off, hoping to meet a mythical moon goddess.',
    poster_path: '/lQfdytwN7eh0tXWjIiMceFdBBvD.jpg',
    title: 'Over the Moon',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 116.828,
      },
    ],
    release_date: '2020-10-16',
  },
  {
    adult: false,
    backdrop_path: '/2RHjd10wqv57xYzZkNK8Sl09Ddt.jpg',
    genre_ids: [16, 28, 35, 14, 12],
    id: 768744,
    original_language: 'ja',
    original_title:
      '僕のヒーローアカデミア THE MOVIE ワールド ヒーローズ ミッション',
    overview:
      'A mysterious group called Humarize strongly believes in the Quirk Singularity Doomsday theory which states that when quirks get mixed further in with future generations, that power will bring forth the end of humanity. In order to save everyone, the Pro-Heroes around the world ask UA Academy heroes-in-training to assist them and form a world-classic selected hero team. It is up to the heroes to save the world and the future of heroes in what is the most dangerous crisis to take place yet in My Hero Academy.',
    poster_path: '/yjdOpEtlzlAnw4Kw0NGw25VrbIb.jpg',
    title: "My Hero Academia: World Heroes' Mission",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 116.727,
      },
    ],
    release_date: '2021-08-06',
  },
  {
    adult: false,
    backdrop_path: '/AmHOQ7rpHwiaUMRjKXztnauSJb7.jpg',
    genre_ids: [28, 12, 14, 878],
    id: 19995,
    original_language: 'en',
    original_title: 'Avatar',
    overview:
      'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
    poster_path: '/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg',
    title: 'Avatar',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 116.655,
      },
    ],
    release_date: '2009-12-10',
  },
  {
    adult: false,
    backdrop_path: '/lkeBhXGJFRlhI7cBWn8LQQAdZqK.jpg',
    genre_ids: [10751, 16, 878, 35, 10402, 12, 10770],
    id: 594328,
    original_language: 'en',
    original_title: 'Phineas and Ferb: The Movie: Candace Against the Universe',
    overview:
      'Phineas and Ferb travel across the galaxy to rescue their older sister Candace, who has been abducted by aliens and taken to a utopia in a far-off planet, free of her pesky little brothers.',
    poster_path: '/n6hptKS7Y0ZjkYwbqKOK3jz9XAC.jpg',
    title: 'Phineas and Ferb: The Movie: Candace Against the Universe',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 116.601,
      },
    ],
    release_date: '2020-08-28',
  },
  {
    adult: false,
    backdrop_path: '/l2Ao3NXfrXtWzlBZ5DnP2l2szJj.jpg',
    genre_ids: [16, 12],
    id: 595172,
    original_language: 'en',
    original_title: "The Pilgrim's Progress",
    overview:
      'An epic journey, faithfully adapted to modern-day. Christian faces distractions, challenges, and perils at every turn of the way. But ends victorious, with helpful guides, as he stays on the narrow path to the distant Celestial City.',
    poster_path: '/vtfsNxAsDHElFvYHUc9Khwqg17Y.jpg',
    title: "The Pilgrim's Progress",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 116.579,
      },
    ],
    release_date: '2019-04-18',
  },
  {
    adult: false,
    backdrop_path: '/7unT3bKHwOXL9e646z9Ib17M9Pf.jpg',
    genre_ids: [27, 53],
    id: 681019,
    original_language: 'pl',
    original_title: 'W lesie dziś nie zaśnie nikt',
    overview:
      'The movie begins innocently enough - a group of technology addicted teenagers finds themselves in an off-line camp. However hiking in the woods with no smartphone in sight will not go as planned. They will have to fight for their lives against things they never have seen before, even in the darkest reaches of the Internet. Faced against the dangers lurking in the forest, they will find true friendship, love and sacrifice. Will they come out of it in one piece, or in bloody bits?',
    poster_path: '/5vFCHFVLPcU4M8uNXM1ba9y83Iu.jpg',
    title: 'Nobody Sleeps in the Woods Tonight',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5,
      },
      {
        id: 'popularity',
        rating: 116.46,
      },
    ],
    release_date: '2020-03-13',
  },
  {
    adult: false,
    backdrop_path: '/9N3KKOKpqEFe9GhHaIVHwk9N1Y.jpg',
    genre_ids: [16, 35, 10751, 14],
    id: 76492,
    original_language: 'en',
    original_title: 'Hotel Transylvania',
    overview:
      "Welcome to Hotel Transylvania, Dracula's lavish five-stake resort, where monsters and their families can live it up and no humans are allowed. One special weekend, Dracula has invited all his best friends to celebrate his beloved daughter Mavis's 118th birthday. For Dracula catering to all of these legendary monsters is no problem but the party really starts when one ordinary guy stumbles into the hotel and changes everything!",
    poster_path: '/eJGvzGrsfe2sqTUPv5IwLWXjVuR.jpg',
    title: 'Hotel Transylvania',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 116.014,
      },
    ],
    release_date: '2012-09-20',
  },
  {
    adult: false,
    backdrop_path: '/yeNH8w3yEAfZxHsTig2pG8B13vN.jpg',
    genre_ids: [28, 35],
    id: 729720,
    original_language: 'fr',
    original_title: 'Le Dernier Mercenaire',
    overview:
      'A mysterious former secret service agent must urgently return to France when his estranged son  is falsely accused of arms and drug trafficking by the government, following a blunder by an overzealous bureaucrat and a mafia operation.',
    poster_path: '/ttpKJ7XQxDZV252KNEHXtykYT41.jpg',
    title: 'The Last Mercenary',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 115.816,
      },
    ],
    release_date: '2021-07-30',
  },
  {
    adult: false,
    backdrop_path: '/ngBFDOsx13sFXiMweDoL54XYknR.jpg',
    genre_ids: [53, 18, 878],
    id: 450465,
    original_language: 'en',
    original_title: 'Glass',
    overview:
      'In a series of escalating encounters, former security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities. Meanwhile, the shadowy presence of Elijah Price emerges as an orchestrator who holds secrets critical to both men.',
    poster_path: '/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg',
    title: 'Glass',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 115.668,
      },
    ],
    release_date: '2019-01-16',
  },
  {
    adult: false,
    backdrop_path: '/uztSaahK3bNVE5iZh4mRjHcCeii.jpg',
    genre_ids: [10751, 14, 35],
    id: 662546,
    original_language: 'en',
    original_title: 'Godmothered',
    overview:
      'A young and unskilled fairy godmother that ventures out on her own to prove her worth by tracking down a young girl whose request for help was ignored. What she discovers is that the girl has now become a grown woman in need of something very different than a "prince charming."',
    poster_path: '/80tDCErk6ymHS7YfvqJcbnnTtqa.jpg',
    title: 'Godmothered',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 115.615,
      },
    ],
    release_date: '2020-12-04',
  },
  {
    adult: false,
    backdrop_path: '/eN1TMy5hT72G2v92x5cNM5trdFv.jpg',
    genre_ids: [16, 878, 28],
    id: 34433,
    original_language: 'ja',
    original_title: 'ドラゴンボールＺ 燃え尽きろ!!熱戦・烈戦・超激戦',
    overview:
      "While the Saiyan Paragus persuades Vegeta to rule a new planet, King Kai alerts Goku of the South Galaxy's destruction by an unknown Super Saiyan.",
    poster_path: '/6iO8TJCyLI4BiPYOvdwzPV2bhoV.jpg',
    title: 'Dragon Ball Z: Broly – The Legendary Super Saiyan',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 128.448,
      },
    ],
    release_date: '1993-03-06',
  },
  {
    adult: false,
    backdrop_path: '/2Vc0BTGCKRhbJcZnMD46V5zzjQR.jpg',
    genre_ids: [18, 53],
    id: 745078,
    original_language: 'pl',
    original_title: 'Prime Time',
    overview:
      'On the last day of 1999, 20-year-old Sebastian locks himself in a TV studio. He has two hostages, a gun, and an important message for the world. The story of the attack explores a rebel’s extreme measures and last resort.',
    poster_path: '/mEegKDrhRZVnn0Y87TdKqGwjowo.jpg',
    title: 'Prime Time',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.9,
      },
      {
        id: 'popularity',
        rating: 128.436,
      },
    ],
    release_date: '2021-01-30',
  },
  {
    adult: false,
    backdrop_path: '/scdEGYcHCf2v9dBheXtIVNu2NqW.jpg',
    genre_ids: [10751, 35],
    id: 11674,
    original_language: 'en',
    original_title: '101 Dalmatians',
    overview:
      'An evil high-fashion designer plots to steal Dalmatian puppies in order to make an extravagant fur coat, but instead creates an extravagant mess.',
    poster_path: '/8o2ADoAyG796UwTjwBFjPyBz0yG.jpg',
    title: '101 Dalmatians',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 128.374,
      },
    ],
    release_date: '1996-11-17',
  },
  {
    adult: false,
    backdrop_path: '/mCVQ2cZmGkAHG2Q3fDZTQA1YzeI.jpg',
    genre_ids: [16, 35, 10751, 12],
    id: 425,
    original_language: 'en',
    original_title: 'Ice Age',
    overview:
      'With the impending ice age almost upon them, a mismatched trio of prehistoric critters – Manny the woolly mammoth, Diego the saber-toothed tiger and Sid the giant sloth – find an orphaned infant and decide to return it to its human parents. Along the way, the unlikely allies become friends but, when enemies attack, their quest takes on far nobler aims.',
    poster_path: '/gLhHHZUzeseRXShoDyC4VqLgsNv.jpg',
    title: 'Ice Age',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 128.291,
      },
    ],
    release_date: '2002-03-10',
  },
  {
    adult: false,
    backdrop_path: '/bjfoBpZ5qP71wrUwGCLTZ2tDtw8.jpg',
    genre_ids: [80, 28, 18],
    id: 592656,
    original_language: 'en',
    original_title: 'Brothers by Blood',
    overview:
      'Peter and Michael, raised on the streets of Philadelphia, are the children of Irish mob members, forever linked by the crimes of their fathers. 30 years later, Michael now runs the criminal organization and lusts for more power, his dangerous antics frequently held in check by his cautious cousin Peter. Haunted by the death of his sister, whose passing destroyed both his parents, Peter is caught between the dreams of childhood and the realities of his life as an enforcer. His only reprieve is a local boxing gym, a sanctuary that is quickly threatened as Michael’s desire for control escalates.',
    poster_path: '/2RKGUCbo2R6IDsufxApL6nRFL4j.jpg',
    title: 'Brothers by Blood',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 128.154,
      },
    ],
    release_date: '2021-01-22',
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [18, 14, 10749],
    id: 553301,
    original_language: 'en',
    original_title: 'Your Name',
    overview:
      'J.J. Abrams and Paramount Pictures have announced they’ll be turning the critically acclaimed Japanese anime Your Name into a live-action film.',
    poster_path: null,
    title: 'Your Name',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 127.005,
      },
    ],
    release_date: '',
  },
  {
    adult: false,
    backdrop_path: '/s7XjGIy8cCYpMHDGNFMbP2zE7uq.jpg',
    genre_ids: [28, 80],
    id: 656113,
    original_language: 'ta',
    original_title: 'ஜகமே தந்திரம்',
    overview:
      'When a clever, carefree gangster is recruited to help an overseas crime lord take down a rival, he is caught off guard by the moral dilemmas that follow.',
    poster_path: '/goLoLNagbnWpPQh4YQE9R2hSLqj.jpg',
    title: 'Jagame Thandhiram',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 126.657,
      },
    ],
    release_date: '2021-06-18',
  },
  {
    adult: false,
    backdrop_path: '/3GW0A72MxsSgghqpjc2O2MvO8Ec.jpg',
    genre_ids: [27, 35],
    id: 714277,
    original_language: 'es',
    original_title: 'La Funeraria',
    overview:
      'Bernardo is an undertaker. He runs his mortuary business in the same house where he resides. In the front, he has his clients. And in the back, his dysfunctional family lives amongst coffins, wreaths, and the mischievous but nonviolent ghosts that visit on a daily basis. But when a malevolent entity enters the scene, it wreaks havoc on the already fractured household.',
    poster_path: '/1rlgIzw129hEl46bFaJZ7wpEEZZ.jpg',
    title: 'The Funeral Home',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 3.9,
      },
      {
        id: 'popularity',
        rating: 126.347,
      },
    ],
    release_date: '2021-04-15',
  },
  {
    adult: false,
    backdrop_path: '/88J6waYVTta8Qz3iX3qUeWNA5d5.jpg',
    genre_ids: [18, 10749],
    id: 447362,
    original_language: 'en',
    original_title: 'Life in a Year',
    overview:
      'A 17 year old finds out that his girlfriend is dying, so he sets out to give her an entire life, in the last year she has left.',
    poster_path: '/bP7u19opmHXYeTCUwGjlLldmUMc.jpg',
    title: 'Life in a Year',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.4,
      },
      {
        id: 'popularity',
        rating: 125.524,
      },
    ],
    release_date: '2020-11-27',
  },
  {
    adult: false,
    backdrop_path: '/oSSEcPDfwgZSv2i01Oqxdb9t8fI.jpg',
    genre_ids: [28, 12, 35, 14],
    id: 621870,
    original_language: 'en',
    original_title: 'Secret Society of Second Born Royals',
    overview:
      'Sam is a teenage royal rebel, second in line to the throne of the kingdom of Illyria. Just as her disinterest in the royal way of life is at an all-time high, she discovers she has super-human abilities and is invited to join a secret society of similar extraordinary second-born royals charged with keeping the world safe.',
    poster_path: '/xOmGTJtBgRVSAF4S5dZEUqHqyy5.jpg',
    title: 'Secret Society of Second Born Royals',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 125.348,
      },
    ],
    release_date: '2020-09-25',
  },
  {
    adult: false,
    backdrop_path: '/n3UanIvmnBlH531pykuzNs4LbH6.jpg',
    genre_ids: [18, 28, 36],
    id: 359724,
    original_language: 'en',
    original_title: 'Ford v Ferrari',
    overview:
      'American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.',
    poster_path: '/dR1Ju50iudrOh3YgfwkAU1g2HZe.jpg',
    title: 'Ford v Ferrari',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8,
      },
      {
        id: 'popularity',
        rating: 125.297,
      },
    ],
    release_date: '2019-11-13',
  },
  {
    adult: false,
    backdrop_path: '/cGUxPXVZF5n5P09dnlhWC8bLVp7.jpg',
    genre_ids: [18, 53],
    id: 505225,
    original_language: 'en',
    original_title: 'The Last Thing He Wanted',
    overview:
      'At the turning point of the Iran-Contra affair, Elena McMahon, a fearless investigative journalist covering the 1984 US presidential campaign, puts herself in danger when she abandons her assigned task in order to fulfill the last wish of her ailing father, a mysterious man whose past activities she barely knows.',
    poster_path: '/gItrnbEbMBbUrdIkFz8kgS2gkt.jpg',
    title: 'The Last Thing He Wanted',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5,
      },
      {
        id: 'popularity',
        rating: 124.886,
      },
    ],
    release_date: '2020-02-14',
  },
  {
    adult: false,
    backdrop_path: '/q62bpQ67qaXY0u6b2wFEnQYIbPd.jpg',
    genre_ids: [10751, 12, 16, 35, 14, 18],
    id: 301528,
    original_language: 'en',
    original_title: 'Toy Story 4',
    overview:
      'Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that\'s Andy or Bonnie. But when Bonnie adds a reluctant new toy called "Forky" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.',
    poster_path: '/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg',
    title: 'Toy Story 4',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 124.776,
      },
    ],
    release_date: '2019-06-19',
  },
  {
    adult: false,
    backdrop_path: '/997ToEZvF2Obp9zNZbY5ELVnmrW.jpg',
    genre_ids: [10749, 18],
    id: 537915,
    original_language: 'en',
    original_title: 'After',
    overview:
      "Tessa Young is a dedicated student, dutiful daughter and loyal girlfriend to her high school sweetheart. Entering her first semester of college, Tessa's guarded world opens up when she meets Hardin Scott, a mysterious and brooding rebel who makes her question all she thought she knew about herself -- and what she wants out of life.",
    poster_path: '/u3B2YKUjWABcxXZ6Nm9h10hLUbh.jpg',
    title: 'After',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 124.699,
      },
    ],
    release_date: '2019-04-11',
  },
  {
    adult: false,
    backdrop_path: '/A3DD0R6vZ5SwD0qGKaU7HL5KVat.jpg',
    genre_ids: [28],
    id: 500916,
    original_language: 'en',
    original_title: 'Primal',
    overview:
      'A big-game hunter for zoos books passage on a Greek shipping freighter with a fresh haul of exotic and deadly animals from the Amazon, including a rare white Jaguar – along with a political assassin being extradited to the U.S in secret. Two days into the journey, the assassin escapes and releases the captive animals, throwing the ship into chaos.',
    poster_path: '/v0Air5GTsfgtjsnZyji2lH6r2b8.jpg',
    title: 'Primal',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 124.443,
      },
    ],
    release_date: '2019-12-27',
  },
  {
    adult: false,
    backdrop_path: '/h3LF8053pE4gcT84Y9buaz6SxXV.jpg',
    genre_ids: [12, 14],
    id: 12444,
    original_language: 'en',
    original_title: 'Harry Potter and the Deathly Hallows: Part 1',
    overview:
      "Harry, Ron and Hermione walk away from their last year at Hogwarts to find and destroy the remaining Horcruxes, putting an end to Voldemort's bid for immortality. But with Harry's beloved Dumbledore dead and Voldemort's unscrupulous Death Eaters on the loose, the world is more dangerous than ever.",
    poster_path: '/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg',
    title: 'Harry Potter and the Deathly Hallows: Part 1',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 123.933,
      },
    ],
    release_date: '2010-10-17',
  },
  {
    adult: false,
    backdrop_path: '/kvRT3GwcnqGHzPjXIVrVPhUix7Z.jpg',
    genre_ids: [12, 28, 878],
    id: 271110,
    original_language: 'en',
    original_title: 'Captain America: Civil War',
    overview:
      'Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.',
    poster_path: '/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg',
    title: 'Captain America: Civil War',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 123.749,
      },
    ],
    release_date: '2016-04-27',
  },
  {
    adult: false,
    backdrop_path: '/jedggylU3FyIN7XRAl9WY8mrT6H.jpg',
    genre_ids: [878, 53, 18],
    id: 471498,
    original_language: 'fr',
    original_title: 'Oxygène',
    overview:
      'A woman wakes in a cryogenic chamber with no recollection of how she got there, and must find a way out before running out of air.',
    poster_path: '/u74DFoZGTcZ8cuHO8nvQkCqXEVP.jpg',
    title: 'Oxygen',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 123.669,
      },
    ],
    release_date: '2021-05-12',
  },
  {
    adult: false,
    backdrop_path: '/5vyL5X9f1BMtUIFDSvrfKKvMtGG.jpg',
    genre_ids: [28, 53],
    id: 619278,
    original_language: 'en',
    original_title: 'Inside Man: Most Wanted',
    overview:
      'An NYPD hostage negotiator teams up with a federal agent to rescue dozens of tourists held hostage during a 10-hour seige at the U.S. Federal Reserve.',
    poster_path: '/kxvxcgRHwV7T3PR4jNFDdQTLPm.jpg',
    title: 'Inside Man: Most Wanted',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 123.508,
      },
    ],
    release_date: '2019-09-24',
  },
  {
    adult: false,
    backdrop_path: '/kbI9M2m45SSwi3t5ztygAlKxUql.jpg',
    genre_ids: [16, 28, 878],
    id: 44251,
    original_language: 'ja',
    original_title: 'ドラゴンボールＺ 危険なふたり！超戦士はねむれない',
    overview:
      'A Saiyan Space pod crash-lands on Earth out of which a wounded Saiyan crawls: Broly, the Legendary Super Saiyan. The wounded Broly shouts out in frustration and turns into normal form. The place soon freezes, trapping him in it and he falls into a coma.',
    poster_path: '/4CkArpSqySpBQH95Oqr94ktU6rU.jpg',
    title: 'Dragon Ball Z: Broly – Second Coming',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 123.343,
      },
    ],
    release_date: '1994-03-12',
  },
  {
    adult: false,
    backdrop_path: '/1uKHoFWyYJn060dpIXUCU7Wbc15.jpg',
    genre_ids: [10752, 18, 28],
    id: 228150,
    original_language: 'en',
    original_title: 'Fury',
    overview:
      "In the last months of World War II, as the Allies make their final push in the European theatre, a battle-hardened U.S. Army sergeant named 'Wardaddy' commands a Sherman tank called 'Fury' and its five-man crew on a deadly mission behind enemy lines. Outnumbered and outgunned, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
    poster_path: '/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg',
    title: 'Fury',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 76,
      },
    ],
    release_date: '2014-10-15',
  },
  {
    adult: false,
    backdrop_path: '/s1eUjN5hLpez9QoBK8t4rUoopgN.jpg',
    genre_ids: [28, 12, 35, 14, 16],
    id: 433422,
    original_language: 'ja',
    original_title: '劇場版 FAIRY TAIL 『DRAGON CRY』',
    overview:
      'Natsu Dragneel and his friends travel to the island Kingdom of Stella, where they will reveal dark secrets, fight the new enemies and once again save the world from destruction.',
    poster_path: '/4CtvjdvuRj3iPlvtpvFomhTxjXR.jpg',
    title: 'Fairy Tail: Dragon Cry',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 75.997,
      },
    ],
    release_date: '2017-05-06',
  },
  {
    adult: false,
    backdrop_path: '/uhYoytlNaq46dG81wLmHqaSuzWu.jpg',
    genre_ids: [28, 12, 14],
    id: 76338,
    original_language: 'en',
    original_title: 'Thor: The Dark World',
    overview:
      'Thor fights to restore order across the cosmos… but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.',
    poster_path: '/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg',
    title: 'Thor: The Dark World',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 75.953,
      },
    ],
    release_date: '2013-10-30',
  },
  {
    adult: false,
    backdrop_path: '/pXjMdj8lnXaNEuIgJr10JvGSMLk.jpg',
    genre_ids: [16, 10751, 12, 35],
    id: 675445,
    original_language: 'en',
    original_title: 'PAW Patrol: The Movie',
    overview:
      'Ryder and the pups are called to Adventure City to stop Mayor Humdinger from turning the bustling metropolis into a state of chaos.',
    poster_path: '/hPR96pkMfhY6T8wqbM0ZVmlojlq.jpg',
    title: 'PAW Patrol: The Movie',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 75.917,
      },
    ],
    release_date: '2021-08-09',
  },
  {
    adult: false,
    backdrop_path: '/tudjLo45nZhlJTTOlYVOxvR8C1o.jpg',
    genre_ids: [18],
    id: 695568,
    original_language: 'en',
    original_title: 'Finding Grace',
    overview:
      'A struggling family, already on the verge of disintegration, faces new challenges that will test their faith in God and each other.',
    poster_path: '/d7LKwASjH0rgbSIz0eqUbzHZWe3.jpg',
    title: 'Finding Grace',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 75.866,
      },
    ],
    release_date: '2020-04-21',
  },
  {
    adult: false,
    backdrop_path: '/9mBQu3cMwMc71HLzjB1xBaPs46R.jpg',
    genre_ids: [10751, 12, 16],
    id: 9732,
    original_language: 'en',
    original_title: "The Lion King II: Simba's Pride",
    overview:
      "The circle of life continues for Simba, now fully grown and in his rightful place as the king of Pride Rock. Simba and Nala have given birth to a daughter, Kiara who's as rebellious as her father was. But Kiara drives her parents to distraction when she catches the eye of Kovu, the son of the evil lioness, Zira. Will Kovu steal Kiara's heart?",
    poster_path: '/sWR1x6UCMCGN9xEf8RGhPS934X0.jpg',
    title: "The Lion King II: Simba's Pride",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 75.543,
      },
    ],
    release_date: '1998-10-24',
  },
  {
    adult: false,
    backdrop_path: '/vvzucWIigLAWS8QawQRvpmUKM6.jpg',
    genre_ids: [27, 53],
    id: 534072,
    original_language: 'en',
    original_title: 'Great White',
    overview:
      'A tourist trip quickly turns into a living nightmare when five passengers on a seaplane become stranded miles away from shore. What follows is a desperate bid for survival as the group tries to make it to land before they either run out of supplies or are taken by the man-eating sharks lurking just beneath the surface.',
    poster_path: '/fbFG87LLTuPT8MZHRxofYvDnelc.jpg',
    title: 'Great White',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 75.519,
      },
    ],
    release_date: '2021-05-07',
  },
  {
    adult: false,
    backdrop_path: '/owraiceOKtSOa3t8sp3wA9K2Ox6.jpg',
    genre_ids: [16, 28, 12, 878],
    id: 703771,
    original_language: 'en',
    original_title: 'Deathstroke: Knights & Dragons - The Movie',
    overview:
      "Ten years ago, Slade Wilson-aka the super-assassin called Deathstroke-made a tragic mistake and his wife and son paid a terrible price. Now, a decade later, Wilson's family is threatened once again by the murderous Jackal and the terrorists of H.I.V.E. Can Deathstroke atone for the sins of the past-or will his family pay the ultimate price?",
    poster_path: '/vFIHbiy55smzi50RmF8LQjmpGcx.jpg',
    title: 'Deathstroke: Knights & Dragons - The Movie',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 75.517,
      },
    ],
    release_date: '2020-08-04',
  },
  {
    adult: false,
    backdrop_path: '/W8V8d9bjLZURgEGbIB5TC70yaj.jpg',
    genre_ids: [28, 53, 878],
    id: 401478,
    original_language: 'en',
    original_title: 'Death Race: Beyond Anarchy',
    overview:
      'Black Ops specialist Connor Gibson infiltrates a maximum security prison to take down legendary driver Frankenstein in a violent and brutal car race.',
    poster_path: '/1PrlKvPUbDQAqFQBCyyt68hLLl.jpg',
    title: 'Death Race: Beyond Anarchy',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 75.314,
      },
    ],
    release_date: '2018-10-02',
  },
  {
    adult: false,
    backdrop_path: '/wKAidKCypwuxtZfZ4iP584PsWXV.jpg',
    genre_ids: [27, 35, 878],
    id: 320846,
    original_language: 'en',
    original_title: 'Sky Sharks',
    overview:
      'A team of Arctic geologists stumble across an abandoned laboratory in which the Nazis developed an incredible and brutal secret weapon during the final months of WW2. Deep in the ice, they accidentally awake a deadly army of flying zombie sharks ridden by genetically mutated, undead super-humans, who are unleashed into the skies, wreaking their bloodthirsty revenge on any aircraft that takes to the air. An elite task force is assembled to take on this deadly threat and stop the Sky Sharks from conquering the air, but as time runs out, the task force realises they will have to fight fire with fire, and the stage is set for the greatest flying super-mutant zombie shark air battle the world has ever seen....',
    poster_path: '/ne2xAzlgSaWvBrYGw2LkO8W5pHi.jpg',
    title: 'Sky Sharks',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.2,
      },
      {
        id: 'popularity',
        rating: 75.251,
      },
    ],
    release_date: '2020-10-07',
  },
  {
    adult: false,
    backdrop_path: '/bblKpucB0XbyQBmfXsaRN985Rgh.jpg',
    genre_ids: [18],
    id: 458220,
    original_language: 'en',
    original_title: 'Palmer',
    overview:
      "After 12 years in prison, former high school football star Eddie Palmer returns home to put his life back together—and forms an unlikely bond with Sam, an outcast boy from a troubled home. But Eddie's past threatens to ruin his new life and family.",
    poster_path: '/xSDdRAjxKAGi8fUBLOqSrBhJmF0.jpg',
    title: 'Palmer',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8,
      },
      {
        id: 'popularity',
        rating: 75.223,
      },
    ],
    release_date: '2021-01-29',
  },
  {
    adult: false,
    backdrop_path: '/4mcOCiR06dqQ5eoEJcG3zvonjOa.jpg',
    genre_ids: [878, 28, 53, 12],
    id: 294254,
    original_language: 'en',
    original_title: 'Maze Runner: The Scorch Trials',
    overview:
      'Thomas and his fellow Gladers face their greatest challenge yet: searching for clues about the mysterious and powerful organization known as WCKD. Their journey takes them to the Scorch, a desolate landscape filled with unimaginable obstacles. Teaming up with resistance fighters, the Gladers take on WCKD’s vastly superior forces and uncover its shocking plans for them all.',
    poster_path: '/mYw7ZyejqSCPFlrT2jHZOESZDU3.jpg',
    title: 'Maze Runner: The Scorch Trials',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 75.19,
      },
    ],
    release_date: '2015-09-09',
  },
  {
    adult: false,
    backdrop_path: '/g4a5YLWwi6OCp8TcvxsUNrXMbN5.jpg',
    genre_ids: [878, 28, 53, 12],
    id: 87101,
    original_language: 'en',
    original_title: 'Terminator Genisys',
    overview:
      "The year is 2029. John Connor, leader of the resistance continues the war against the machines. At the Los Angeles offensive, John's fears of the unknown future begin to emerge when TECOM spies reveal a new plot by SkyNet that will attack him from both fronts; past and future, and will ultimately change warfare forever.",
    poster_path: '/oZRVDpNtmHk8M1VYy1aeOWUXgbC.jpg',
    title: 'Terminator Genisys',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 75.159,
      },
    ],
    release_date: '2015-06-23',
  },
  {
    adult: false,
    backdrop_path: '/csDxOOSjfcJNNRo4ma8ltVynELV.jpg',
    genre_ids: [16, 10751, 35],
    id: 10193,
    original_language: 'en',
    original_title: 'Toy Story 3',
    overview:
      "Woody, Buzz, and the rest of Andy's toys haven't been played with in years. With Andy about to go to college, the gang find themselves accidentally left at a nefarious day care center. The toys must band together to escape and return home to Andy.",
    poster_path: '/4cpGytCB0eqvRks4FAlJoUJiFPG.jpg',
    title: 'Toy Story 3',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 75.104,
      },
    ],
    release_date: '2010-06-16',
  },
  {
    adult: false,
    backdrop_path: '/zphhP17YnyrihDBYdd1qxvI3ZSl.jpg',
    genre_ids: [27, 53, 18],
    id: 741998,
    original_language: 'it',
    original_title: 'Il legame',
    overview:
      "While visiting her fiancé's mother in southern Italy, a woman must fight the mysterious and malevolent curse intent on claiming her daughter.",
    poster_path: '/k8Oj2YlFKbwj1SNKZcb5Fw1Yosj.jpg',
    title: 'The Binding',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.5,
      },
      {
        id: 'popularity',
        rating: 74.975,
      },
    ],
    release_date: '2020-10-02',
  },
  {
    adult: false,
    backdrop_path: '/tKa1gmGKAUVYnflYcadipeL3d9h.jpg',
    genre_ids: [28, 12, 878],
    id: 68721,
    original_language: 'en',
    original_title: 'Iron Man 3',
    overview:
      "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    poster_path: '/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg',
    title: 'Iron Man 3',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 74.936,
      },
    ],
    release_date: '2013-04-18',
  },
  {
    adult: false,
    backdrop_path: '/rm2oMykm5nX6SzXFr7TGHkO6r8Z.jpg',
    genre_ids: [12, 878],
    id: 428078,
    original_language: 'en',
    original_title: 'Mortal Engines',
    overview:
      'Many thousands of years in the future, Earth’s cities roam the globe on huge wheels, devouring each other in a struggle for ever diminishing resources. On one of these massive traction cities, the old London, Tom Natsworthy has an unexpected encounter with a mysterious young woman from the wastelands who will change the course of his life forever.',
    poster_path: '/gLhYg9NIvIPKVRTtvzCWnp1qJWG.jpg',
    title: 'Mortal Engines',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 74.845,
      },
    ],
    release_date: '2018-11-27',
  },
  {
    adult: false,
    backdrop_path: '/wjOxI24eaGp5k186rhz2UKL6yqb.jpg',
    genre_ids: [37, 12],
    id: 576379,
    original_language: 'en',
    original_title: 'Hell on the Border',
    overview:
      'This epic, action-packed Western tells the incredible true story of Bass Reeves, the first black marshal in the Wild West. Having escaped from slavery after the Civil War, he arrives in Arkansas seeking a job with the law. To prove himself, he must hunt down a deadly outlaw with the help of a grizzled journeyman. As he chases the criminal deeper into the Cherokee Nation, Reeves must not only dodge bullets, but severe discrimination in hopes of earning his star--and cement his place as a cowboy legend.',
    poster_path: '/yQqMvQJ9DZV7J4WkDda5Y8yzsPw.jpg',
    title: 'Hell on the Border',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.7,
      },
      {
        id: 'popularity',
        rating: 74.787,
      },
    ],
    release_date: '2019-12-13',
  },
  {
    adult: false,
    backdrop_path: '/zlpKUEE4A5LjaTmEz37pw2VZQug.jpg',
    genre_ids: [28, 12, 35, 14, 10749, 16],
    id: 553835,
    original_language: 'ja',
    original_title:
      '劇場版 ダンジョンに出会いを求めるのは間違っているだろうか -オリオンの矢-',
    overview:
      'In the city of Orario, beneath an impossibly tall tower, lies the dungeon. Only adventurers who form partnerships with the gods themselves have any hope of defeating the monsters that lie within. But the dungeon is not the only place where monsters exist. Far from Orario, in the ruins of an ancient city, a new threat arises. To counter this threat, the goddess Artemis has come to Orario in search of a champion—but it’s not Ais Wallenstein (the legendary Sword Princess) nor Ottar (the strongest warrior to ever enter the dungeon) that she chooses. Rather it is Bell Cranel, a newbie adventurer partnered with a low-tier goddess.',
    poster_path: '/vh1Ye1jWmR7pFJpTIHbSR521zO5.jpg',
    title:
      'Is It Wrong to Try to Pick Up Girls in a Dungeon?: Arrow of the Orion',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 74.619,
      },
    ],
    release_date: '2019-02-15',
  },
  {
    adult: false,
    backdrop_path: '/fGgsIJXTCofFOQydtvWmo9ZIzJX.jpg',
    genre_ids: [16, 12, 10751, 35],
    id: 269149,
    original_language: 'en',
    original_title: 'Zootopia',
    overview:
      "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
    poster_path: '/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg',
    title: 'Zootopia',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 74.599,
      },
    ],
    release_date: '2016-02-11',
  },
  {
    adult: false,
    backdrop_path: '/m3GqDIJo3U1pjcBCbHadFYbrOMX.jpg',
    genre_ids: [16, 28, 14, 878],
    id: 39107,
    original_language: 'ja',
    original_title: 'ドラゴンボールZ 復活のフュージョン!! 悟空とベジータ',
    overview:
      'Not paying attention to his job, a young demon allows the evil cleansing machine to overflow and explode, turning the young demon into the infamous monster Janemba. Goku and Vegeta make solo attempts to defeat the monster, but realize their only option is fusion.',
    poster_path: '/7AHvaEAeQfkfJ4OqcBePxa2ao09.jpg',
    title: 'Dragon Ball Z: Fusion Reborn',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 67.259,
      },
    ],
    release_date: '1995-03-04',
  },
  {
    adult: false,
    backdrop_path: '/8Qsr8pvDL3s1jNZQ4HK1d1Xlvnh.jpg',
    genre_ids: [12, 14],
    id: 259316,
    original_language: 'en',
    original_title: 'Fantastic Beasts and Where to Find Them',
    overview:
      'In 1926, Newt Scamander arrives at the Magical Congress of the United States of America with a magically expanded briefcase, which houses a number of dangerous creatures and their habitats. When the creatures escape from the briefcase, it sends the American wizarding authorities after Newt, and threatens to strain even further the state of magical and non-magical relations.',
    poster_path: '/h6NYfVUyM6CDURtZSnBpz647Ldd.jpg',
    title: 'Fantastic Beasts and Where to Find Them',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 67.143,
      },
    ],
    release_date: '2016-11-16',
  },
  {
    adult: false,
    backdrop_path: '/s6awXOxTKYQLSktiIJfI3969dZH.jpg',
    genre_ids: [35],
    id: 449562,
    original_language: 'en',
    original_title: 'The Hustle',
    overview:
      'Two female scam artists, one low rent and the other high class, compete to swindle a naïve tech prodigy out of his fortune. A remake of the 1988 comedy "Dirty Rotten Scoundrels."',
    poster_path: '/hHAD7cx1j2RAyjwREVgJeLcLVoi.jpg',
    title: 'The Hustle',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 67.083,
      },
    ],
    release_date: '2019-05-09',
  },
  {
    adult: false,
    backdrop_path: '/qdthf9WrRDSaIkGVQGhhJ9pz1hn.jpg',
    genre_ids: [28, 12, 16, 10751, 35],
    id: 9502,
    original_language: 'en',
    original_title: 'Kung Fu Panda',
    overview:
      'When the Valley of Peace is threatened, lazy Po the panda discovers his destiny as the "chosen one" and trains to become a kung fu hero, but transforming the unsleek slacker into a brave warrior won\'t be easy. It\'s up to Master Shifu and the Furious Five -- Tigress, Crane, Mantis, Viper and Monkey -- to give it a try.',
    poster_path: '/wWt4JYXTg5Wr3xBW2phBrMKgp3x.jpg',
    title: 'Kung Fu Panda',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 66.809,
      },
    ],
    release_date: '2008-06-04',
  },
  {
    adult: false,
    backdrop_path: '/mE9TXKcVsnfDW1n7k8qrAQMwk1F.jpg',
    genre_ids: [53, 28, 35],
    id: 791469,
    original_language: 'en',
    original_title: 'Dark Web: Cicada 3301',
    overview:
      'Genius hacker Connor discovers Cicada 3301, an online treasure hunt that could be a recruiting tool for a secret society. Soon Conner, art-expert friend Avi, and secretive librarian Gwen are dashing from graffiti sites to ancient libraries to uncover real-world clues. But they must outrun aggressive NSA agents, also hot on the trail of Cicada, who want the glory for themselves.',
    poster_path: '/tJlLfuvIBBn5aFoyW1IQWeFHl6v.jpg',
    title: 'Dark Web: Cicada 3301',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 66.765,
      },
    ],
    release_date: '2021-03-12',
  },
  {
    adult: false,
    backdrop_path: '/chKGRT7RjkHWlU0hRFQeJMx2Bra.jpg',
    genre_ids: [18, 99],
    id: 511679,
    original_language: 'es',
    original_title: 'Héctor El Father: Conocerás la verdad',
    overview:
      'This autobiography of Hector Delgado runs from his childhood to become one of the greatest exponents of the urban genre, but the results of that life did not please him and led him to try to take his life  .After being victim of a firefight at a service station in Aguada, a city hall in Puerto Rico, he stopped earning at least two hundred American dollars for presentation and being "devout of Jesus"',
    poster_path: '/tkP0FzEivLxsUYt8BlaL8Sh7ceY.jpg',
    title: 'Héctor El Father: Conocerás la verdad',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 66.748,
      },
    ],
    release_date: '2018-03-22',
  },
  {
    adult: false,
    backdrop_path: '/3mNA9xRqd5WfDj1hBpbbniFcI2T.jpg',
    genre_ids: [10749, 10751, 16, 14],
    id: 10020,
    original_language: 'en',
    original_title: 'Beauty and the Beast',
    overview:
      "Follow the adventures of Belle, a bright young woman who finds herself in the castle of a prince who's been turned into a mysterious beast. With the help of the castle's enchanted staff, Belle soon learns the most important lesson of all -- that true beauty comes from within.",
    poster_path: '/7oCAPOphDKpIaxTrnukmDrZ8XKD.jpg',
    title: 'Beauty and the Beast',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 66.663,
      },
    ],
    release_date: '1991-10-22',
  },
  {
    adult: false,
    backdrop_path: '/cwHnTIsu5qSfZSU8siS5QDhmguV.jpg',
    genre_ids: [18, 27, 9648],
    id: 387827,
    original_language: 'es',
    original_title: 'Tiempo compartido',
    overview:
      'While staying at a tropical resort, a man becomes convinced the American timeshare company running it has an evil plan to take away his loved ones.',
    poster_path: '/jWwLENF11LVApfrCxjuG936cnID.jpg',
    title: 'Time Share',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.5,
      },
      {
        id: 'popularity',
        rating: 66.575,
      },
    ],
    release_date: '2018-08-02',
  },
  {
    adult: false,
    backdrop_path: '/l4t6QYcDEIXep6C5Vmjna8Fl5Vy.jpg',
    genre_ids: [16, 35, 10751],
    id: 295693,
    original_language: 'en',
    original_title: 'The Boss Baby',
    overview:
      "A story about how a new baby's arrival impacts a family, told from the point of view of a delightfully unreliable narrator, a wildly imaginative 7 year old named Tim.",
    poster_path: '/unPB1iyEeTBcKiLg8W083rlViFH.jpg',
    title: 'The Boss Baby',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 66.477,
      },
    ],
    release_date: '2017-03-23',
  },
  {
    adult: false,
    backdrop_path: '/77PAhK4rTkKPIXvMueg6xlq7tao.jpg',
    genre_ids: [12, 14, 18, 10749],
    id: 50620,
    original_language: 'en',
    original_title: 'The Twilight Saga: Breaking Dawn - Part 2',
    overview:
      'After the birth of Renesmee, the Cullens gather other vampire clans in order to protect the child from a false allegation that puts the family in front of the Volturi.',
    poster_path: '/jHE7WUf3FDod8vw3O3twh0JVZun.jpg',
    title: 'The Twilight Saga: Breaking Dawn - Part 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 66.382,
      },
    ],
    release_date: '2012-11-13',
  },
  {
    adult: false,
    backdrop_path: '/ukNTB96qPadujTRDagpN5EBHR5P.jpg',
    genre_ids: [16, 12, 35, 10751],
    id: 46195,
    original_language: 'en',
    original_title: 'Rio',
    overview:
      'Captured by smugglers when he was just a hatchling, a macaw named Blu never learned to fly and lives a happily domesticated life in Minnesota with his human friend, Linda. Blu is thought to be the last of his kind, but when word comes that Jewel, a lone female, lives in Rio de Janeiro, Blu and Linda go to meet her. Animal smugglers kidnap Blu and Jewel, but the pair soon escape and begin a perilous adventure back to freedom -- and Linda.',
    poster_path: '/BSZ2dA3G369e3pHIXGhh5orzPt.jpg',
    title: 'Rio',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 66.323,
      },
    ],
    release_date: '2011-04-03',
  },
  {
    adult: false,
    backdrop_path: '/a86HspaEx3u1HzSBPBqxq3wnKLK.jpg',
    genre_ids: [28, 80, 18],
    id: 487680,
    original_language: 'en',
    original_title: 'The Kitchen',
    overview:
      "The mobster husbands of three 1978 Hell's Kitchen housewives are sent to prison by the FBI. Left with little but a sharp ax to grind, the ladies take the Irish mafia's matters into their own hands — proving unexpectedly adept at everything from running the rackets to taking out the competition… literally.",
    poster_path: '/l3smhHvnczXg8E2WzysRVKIXSYJ.jpg',
    title: 'The Kitchen',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 66.318,
      },
    ],
    release_date: '2019-08-08',
  },
  {
    adult: false,
    backdrop_path: '/6ydGnzbo8s4yRNqQWPAvVSiNU8N.jpg',
    genre_ids: [16, 12, 35, 10751, 878, 28],
    id: 501929,
    original_language: 'en',
    original_title: 'The Mitchells vs. the Machines',
    overview:
      "A quirky, dysfunctional family's road trip is upended when they find themselves in the middle of the robot apocalypse and suddenly become humanity's unlikeliest last hope.",
    poster_path: '/mI2Di7HmskQQ34kz0iau6J1vr70.jpg',
    title: 'The Mitchells vs. the Machines',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8,
      },
      {
        id: 'popularity',
        rating: 66.253,
      },
    ],
    release_date: '2021-04-22',
  },
  {
    adult: false,
    backdrop_path: '/dT05ycGuf4h1uYYAJttxTFKkfBQ.jpg',
    genre_ids: [10752, 18],
    id: 662334,
    original_language: 'es',
    original_title: 'Chaco',
    overview:
      "In 1934, Bolivia is at war with Paraguay. Liborio and Ticona and other Bolivian indigenous soldiers are lost in the hell of the Chaco, under the commandment of German Captain Kundt. They're looking for the Paraguayan enemy that they haven't seen for months, and that they will never find. They leave together in a search that will make them realize, progressively, the destiny they have been pushed into and the inevitable condition of a defeated troop. They're walking like shadows, wandering forever in the middle of dust and silence.",
    poster_path: '/hCR2i9rK6P4VHMfFw2MT5jDGJcN.jpg',
    title: 'Chaco',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 66.246,
      },
    ],
    release_date: '2019-03-06',
  },
  {
    adult: false,
    backdrop_path: '/8z5qtVE2N3AuA3bmvIQsI10Wjg8.jpg',
    genre_ids: [10770, 18, 27],
    id: 7342,
    original_language: 'en',
    original_title: 'Carrie',
    overview:
      'Carrie White is a lonely and painfully shy teenage girl with telekinetic powers who is slowly pushed to the edge of insanity by frequent bullying from both classmates at her school, and her own religious, but abusive, mother.',
    poster_path: '/knjeEeeyIwDkUtZwDfJOcUIuNdB.jpg',
    title: 'Carrie',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 65.93,
      },
    ],
    release_date: '2002-11-04',
  },
  {
    adult: false,
    backdrop_path: '/a7sAqMKv5tkAdMzFfIhPqIBmQ9g.jpg',
    genre_ids: [878, 28, 12],
    id: 102899,
    original_language: 'en',
    original_title: 'Ant-Man',
    overview:
      'Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.',
    poster_path: '/rS97hUJ1otKTTripGwQ0ujbuIri.jpg',
    title: 'Ant-Man',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 65.867,
      },
    ],
    release_date: '2015-07-14',
  },
  {
    adult: false,
    backdrop_path: '/x5EUEv1N9g4BCX9GQXKvv3nqMVo.jpg',
    genre_ids: [10752, 18, 28, 36],
    id: 429351,
    original_language: 'en',
    original_title: '12 Strong',
    overview:
      'A team of CIA agents and special forces head into Afghanistan in the aftermath of the September 11th attacks in an attempt to dismantle the Taliban.',
    poster_path: '/j18021qCeRi3yUBtqd2UFj1c0RQ.jpg',
    title: '12 Strong',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 65.786,
      },
    ],
    release_date: '2018-01-16',
  },
  {
    adult: false,
    backdrop_path: '/oaOZ3EavXCBKXnkNoVTVZykmoOD.jpg',
    genre_ids: [18],
    id: 535845,
    original_language: 'en',
    original_title: 'Brian Banks',
    overview:
      "An All-American football player's dreams to play in the NFL are halted when he is falsely accused of rape and sent to prison.",
    poster_path: '/4MnCFcFHYAEMG4NBTUKvjhf5AhU.jpg',
    title: 'Brian Banks',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 65.707,
      },
    ],
    release_date: '2019-08-09',
  },
  {
    adult: false,
    backdrop_path: '/alItugxBbjNC10ezLSisplhSKJ.jpg',
    genre_ids: [878, 28, 12],
    id: 91314,
    original_language: 'en',
    original_title: 'Transformers: Age of Extinction',
    overview:
      'As humanity picks up the pieces, following the conclusion of "Transformers: Dark of the Moon," Autobots and Decepticons have all but vanished from the face of the planet. However, a group of powerful, ingenious businessman and scientists attempt to learn from past Transformer incursions and push the boundaries of technology beyond what they can control - all while an ancient, powerful Transformer menace sets Earth in his cross-hairs.',
    poster_path: '/jyzrfx2WaeY60kYZpPYepSjGz4S.jpg',
    title: 'Transformers: Age of Extinction',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 65.656,
      },
    ],
    release_date: '2014-06-25',
  },
  {
    adult: false,
    backdrop_path: '/s9I2LmQMYCanl6DvC3X1AOHs2r8.jpg',
    genre_ids: [28, 53, 80, 12],
    id: 399361,
    original_language: 'en',
    original_title: 'Triple Frontier',
    overview:
      'Struggling to make ends meet, former special ops soldiers reunite for a high-stakes heist: stealing $75 million from a South American drug lord.',
    poster_path: '/aBw8zYuAljVM1FeK5bZKITPH8ZD.jpg',
    title: 'Triple Frontier',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 65.507,
      },
    ],
    release_date: '2019-03-06',
  },
  {
    adult: false,
    backdrop_path: '/evSN8IybGaPZrrkgNa1ID3gcch8.jpg',
    genre_ids: [35, 14],
    id: 425909,
    original_language: 'en',
    original_title: 'Ghostbusters: Afterlife',
    overview:
      'When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.',
    poster_path: '/fMyCgXLYehlbiQPlcu7nG98GFZU.jpg',
    title: 'Ghostbusters: Afterlife',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 68.9,
      },
    ],
    release_date: '2021-11-11',
  },
  {
    adult: false,
    backdrop_path: '/8Hs3LJ83GZFmJgfMUo0uoOopeGp.jpg',
    genre_ids: [80, 53, 28, 9648],
    id: 693113,
    original_language: 'en',
    original_title: 'Midnight in the Switchgrass',
    overview:
      "FBI Agent Helter and his partner Lombardi are very close to busting a sex-trafficking ring. When they realize their investigation has crossed the path of a brutal serial killer, they team up with a Texas Ranger to put an end to the infamous 'Truck Stop Killer'.",
    poster_path: '/1OTSuh2HNcTRfme8caU8DjgJ39K.jpg',
    title: 'Midnight in the Switchgrass',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.7,
      },
      {
        id: 'popularity',
        rating: 68.89,
      },
    ],
    release_date: '2021-07-23',
  },
  {
    adult: false,
    backdrop_path: '/5qWtPhMLxY7cS1GkAvJZlPKgNPd.jpg',
    genre_ids: [10751, 16, 35, 14],
    id: 11836,
    original_language: 'en',
    original_title: 'The SpongeBob SquarePants Movie',
    overview:
      "There's trouble brewing in Bikini Bottom. Someone has stolen King Neptune's crown, and it looks like Mr. Krab, SpongeBob's boss, is the culprit. Though he's just been passed over for the promotion of his dreams, SpongeBob stands by his boss, and along with his best pal Patrick, sets out on a treacherous mission to Shell City to reclaim the crown and save Mr. Krab's life.",
    poster_path: '/6sgo6TCakeL4KFwwcJyvkZ7zhMX.jpg',
    title: 'The SpongeBob SquarePants Movie',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 68.876,
      },
    ],
    release_date: '2004-11-14',
  },
  {
    adult: false,
    backdrop_path: '/jNUpYq2jRSwQM89vST9yQZelMSu.jpg',
    genre_ids: [10402, 18, 36],
    id: 424694,
    original_language: 'en',
    original_title: 'Bohemian Rhapsody',
    overview:
      "Singer Freddie Mercury, guitarist Brian May, drummer Roger Taylor and bass guitarist John Deacon take the music world by storm when they form the rock 'n' roll band Queen in 1970. Hit songs become instant classics. When Mercury's increasingly wild lifestyle starts to spiral out of control, Queen soon faces its greatest challenge yet – finding a way to keep the band together amid the success and excess.",
    poster_path: '/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg',
    title: 'Bohemian Rhapsody',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8,
      },
      {
        id: 'popularity',
        rating: 68.756,
      },
    ],
    release_date: '2018-10-24',
  },
  {
    adult: false,
    backdrop_path: '/gUttUEqsrvaMlK5oL5TSQ54iE96.jpg',
    genre_ids: [18, 53, 80, 9648],
    id: 520663,
    original_language: 'en',
    original_title: 'The Woman in the Window',
    overview:
      'An agoraphobic woman living alone in New York begins spying on her new neighbors only to witness a disturbing act of violence.',
    poster_path: '/wcrjc1uwQaqoqtqi67Su4VCOYo0.jpg',
    title: 'The Woman in the Window',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 68.63,
      },
    ],
    release_date: '2021-05-14',
  },
  {
    adult: false,
    backdrop_path: '/16lk65YfrDFIr6evkWRjSeOOSws.jpg',
    genre_ids: [14, 16, 10751],
    id: 9479,
    original_language: 'en',
    original_title: 'The Nightmare Before Christmas',
    overview:
      "Tired of scaring humans every October 31 with the same old bag of tricks, Jack Skellington, the spindly king of Halloween Town, kidnaps Santa Claus and plans to deliver shrunken heads and other ghoulish gifts to children on Christmas morning. But as Christmas approaches, Jack's rag-doll girlfriend, Sally, tries to foil his misguided plans.",
    poster_path: '/oQffRNjK8e19rF7xVYEN8ew0j7b.jpg',
    title: 'The Nightmare Before Christmas',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 68.618,
      },
    ],
    release_date: '1993-10-09',
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [35],
    id: 718916,
    original_language: 'en',
    original_title: 'The Exchange',
    overview:
      'A socially awkward but highly enterprising teenager decides to acquire a "mail order best friend"; a sophisticated exchange student from France. Instead, he ends up importing his personal nightmare, a cologne-soaked, chain-smoking, sex-obsessed youth who quickly becomes the hero of his new community.',
    poster_path: '/xigoOefmTruDPydbUtibOPe8vgl.jpg',
    title: 'The Exchange',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 68.572,
      },
    ],
    release_date: '2021-07-30',
  },
  {
    adult: false,
    backdrop_path: '/dqaobSdoRTEA3rRDhiWnrtNd7fB.jpg',
    genre_ids: [27],
    id: 758510,
    original_language: 'pt',
    original_title: 'A Gruta',
    overview:
      'The only one survivor of a mysterious murderer that killed his wife, friends and the tourism guide who leaded them through a interdicted grotto, a boy become the only suspect to make the crime. He, however, claim for his innocence saying that your wife killed those people as she was possessed by an evil force. Refusing to talk to police officers who are in charge for the crime investigation, he asks for help to a nun.',
    poster_path: '/nBdoS8tjWubpEyQnqmM6tpZR3GU.jpg',
    title: 'A Gruta',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 68.248,
      },
    ],
    release_date: '2020-10-29',
  },
  {
    adult: false,
    backdrop_path: '/naUJGskMlDg2HZ0FhsaMG5xPF2K.jpg',
    genre_ids: [35, 27],
    id: 623491,
    original_language: 'en',
    original_title: 'The Babysitter: Killer Queen',
    overview:
      "Two years after defeating a satanic cult led by his babysitter Bee, Cole's trying to forget his past and focus on surviving high school. But when old enemies unexpectedly return, Cole will once again have to outsmart the forces of evil.",
    poster_path: '/yx7akzfwbPCLlxKgZ1NycThFC92.jpg',
    title: 'The Babysitter: Killer Queen',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 68.222,
      },
    ],
    release_date: '2020-09-10',
  },
  {
    adult: false,
    backdrop_path: '/8vlu5KfAJhYm3JLyLzHa75jEpKp.jpg',
    genre_ids: [28],
    id: 646332,
    original_language: 'es',
    original_title: 'Alma de héroe',
    overview:
      "A soldier will have a mission of rescuing his partner kidnapped in the Colombian jungle although he will miss a dating with a beautiful girl that is his partner's sister.",
    poster_path: '/Am3avSjCB9y7fmqwFY8qIatPpYi.jpg',
    title: 'Soul of Hero',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 68.158,
      },
    ],
    release_date: '2019-05-02',
  },
  {
    adult: false,
    backdrop_path: '/m5dA4JZsj78EBTa2D6imWOAebwB.jpg',
    genre_ids: [35],
    id: 4247,
    original_language: 'en',
    original_title: 'Scary Movie',
    overview:
      'A familiar-looking group of teenagers find themselves being stalked by a more-than-vaguely recognizable masked killer! As the victims begin to pile up and the laughs pile on, none of your favorite scary movies escape the razor-sharp satire of this outrageously funny parody!',
    poster_path: '/lRQiJXETkCnVVurHmglNvMXrZOx.jpg',
    title: 'Scary Movie',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 68.14,
      },
    ],
    release_date: '2000-07-07',
  },
  {
    adult: false,
    backdrop_path: '/uLczFoWGrx6bvcwcGJJipwp8eTq.jpg',
    genre_ids: [16, 18, 14],
    id: 431819,
    original_language: 'ja',
    original_title: '打ち上げ花火、下から見るか？横から見るか？',
    overview:
      'Moshimo, Japan. The annual fireworks festival is about to take place and a group of schoolboys, arguing over whether they are round or flat when viewed from different angles, set out to find it out.',
    poster_path: '/ifm8CdFjYMfEq0bLT7XwJxjZmjO.jpg',
    title: 'Fireworks',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 68.099,
      },
    ],
    release_date: '2017-08-18',
  },
  {
    adult: false,
    backdrop_path: '/ngT5lZ37bvryz5popo1IDOh03WL.jpg',
    genre_ids: [18, 53],
    id: 635731,
    original_language: 'en',
    original_title: 'Pig',
    overview:
      'A truffle hunter who lives alone in the Oregon wilderness must visit Portland to find the mysterious person who stole his beloved foraging pig.',
    poster_path: '/1InMm4Mbjx8wCKvIy5gglo5i3HN.jpg',
    title: 'Pig',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 67.942,
      },
    ],
    release_date: '2021-07-16',
  },
  {
    adult: false,
    backdrop_path: '/gnunxHJFZt6BjDdEf9sXXlxveMO.jpg',
    genre_ids: [18],
    id: 585381,
    original_language: 'es',
    original_title: 'Souvenir',
    overview:
      'The enigmatic Isabel decides to rent her belly to give birth to the baby of Sara and Joaquin, a possessive couple obsessed with the idea of starting a family.',
    poster_path: '/33dxxU2Z6eQM6VU7QPN8lZM5o9a.jpg',
    title: 'Souvenir',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 67.833,
      },
    ],
    release_date: '2021-03-04',
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [18],
    id: 197158,
    original_language: 'pt',
    original_title: 'Pornô!',
    overview:
      'Three tales of the erotic: Two young ladies experiment with lesbianism, a handsome and wealthy socialite makes a beautiful woman patiently wait to make love to him, and a gorgeous, but controlling and dominating blind woman makes a hunky stud her sexual hostage in her swanky mansion home.',
    poster_path: '/bhbPSpYjsRJAK7rXqL8APK9EwBl.jpg',
    title: 'Porno',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.5,
      },
      {
        id: 'popularity',
        rating: 67.82,
      },
    ],
    release_date: '1981-01-01',
  },
  {
    adult: false,
    backdrop_path: '/bjjZXrP8PEdFeJkKERc62xlarMI.jpg',
    genre_ids: [18],
    id: 581734,
    original_language: 'en',
    original_title: 'Nomadland',
    overview:
      'A woman in her sixties embarks on a journey through the western United States after losing everything in the Great Recession, living as a van-dwelling modern-day nomad.',
    poster_path: '/8Vc5EOUEIF1EUXuX9eLFf7BvN3P.jpg',
    title: 'Nomadland',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 67.798,
      },
    ],
    release_date: '2021-01-29',
  },
  {
    adult: false,
    backdrop_path: '/7HNPNdNNvTQmDATWDmcRJVrv0B2.jpg',
    genre_ids: [878, 53, 18, 9648],
    id: 539892,
    original_language: 'en',
    original_title: 'Freaks',
    overview:
      "Kept locked inside the house by her father, 7-year-old Chloe lives in fear and fascination of the outside world, where Abnormals create a constant threat—or so she believes. When a mysterious stranger offers her a glimpse of what's really happening outside, Chloe soon finds that while the truth isn't so simple, the danger is very real.",
    poster_path: '/kc2cvuqESIiRX5QoZOoMTBq18kQ.jpg',
    title: 'Freaks',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 67.738,
      },
    ],
    release_date: '2019-03-02',
  },
  {
    adult: false,
    backdrop_path: '/syUZZtXNsmOnApAGCyjKF3aKfn0.jpg',
    genre_ids: [28, 35],
    id: 403310,
    original_language: 'ja',
    original_title: 'HK 変態仮面　アブノーマル・クライシス',
    overview:
      "News about the disappearance of panties is still being covered every day.  Kyosuke (Ryohei Suzuki) still wears Aiko Completo's (Fumika Shimizu) panties to battle evil. Meanwhile, Aiko has mixed emotions and decides to get her panties back. Kyosuke suffers from the loss of Aiko's panties and disappears, but his biggest enemy yet is about to materialise...",
    poster_path: '/mvLYHpJCFK0gur7mlrLMA8z2a9F.jpg',
    title: 'HK: Hentai Kamen 2 - Abnormal Crisis',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 67.537,
      },
    ],
    release_date: '2016-05-14',
  },
  {
    adult: false,
    backdrop_path: '/i8zpnOQEZI14iYXWHtbf6ct1Fo0.jpg',
    genre_ids: [10751, 16],
    id: 9904,
    original_language: 'en',
    original_title: 'The Wild',
    overview:
      'An adolescent lion is accidentally shipped from the New York Zoo to Africa. Now running free, his zoo pals must put aside their differences to help bring him back.',
    poster_path: '/sxqzaOto1qyUseSg6YpIP9Su5lp.jpg',
    title: 'The Wild',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.5,
      },
      {
        id: 'popularity',
        rating: 67.452,
      },
    ],
    release_date: '2006-03-06',
  },
  {
    adult: false,
    backdrop_path: '/yrR1Hk2NbWupDHfroGt2spdE1Jm.jpg',
    genre_ids: [27, 53, 9648],
    id: 21208,
    original_language: 'en',
    original_title: 'Orphan',
    overview:
      'After losing their baby, a married couple adopt 9-year old Esther, who may not be as innocent as she seems.',
    poster_path: '/lCGpOgoTOGLtZnBiGY9HRg5Xnjd.jpg',
    title: 'Orphan',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 67.385,
      },
    ],
    release_date: '2009-07-24',
  },
  {
    adult: false,
    backdrop_path: '/mrYJ0ijgaxjHKAs0ybNYxyfP8l5.jpg',
    genre_ids: [35, 10751],
    id: 9820,
    original_language: 'en',
    original_title: 'The Parent Trap',
    overview:
      "Hallie Parker and Annie James are identical twins separated at a young age because of their parents' divorce. Unknowingly to their parents, the girls are sent to the same summer camp where they meet, discover the truth about themselves, and then plot with each other to switch places.",
    poster_path: '/dNqgjqxHIdfsQRQL5XTujNfX9pj.jpg',
    title: 'The Parent Trap',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 95.367,
      },
    ],
    release_date: '1998-07-28',
  },
  {
    adult: false,
    backdrop_path: '/hvXWVpKvFWAqiGyTYloudgLXKMY.jpg',
    genre_ids: [27, 53],
    id: 300669,
    original_language: 'en',
    original_title: "Don't Breathe",
    overview:
      "A group of teens break into a blind man's home thinking they'll get away with the perfect crime. They're wrong.",
    poster_path: '/kkUMGON2uFRlxI3zIMFdjqARnbb.jpg',
    title: "Don't Breathe",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 95.215,
      },
    ],
    release_date: '2016-06-08',
  },
  {
    adult: false,
    backdrop_path: '/sAtoMqDVhNDQBc3QJL3RF6hlhGq.jpg',
    genre_ids: [878, 18],
    id: 335984,
    original_language: 'en',
    original_title: 'Blade Runner 2049',
    overview:
      "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
    poster_path: '/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg',
    title: 'Blade Runner 2049',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 94.985,
      },
    ],
    release_date: '2017-10-04',
  },
  {
    adult: false,
    backdrop_path: '/5gh7y35Y96qt2qZtydsJ52aWD5Y.jpg',
    genre_ids: [80, 18, 53],
    id: 599845,
    original_language: 'it',
    original_title: "L'Immortale",
    overview:
      "After reuniting with his first mentor Bruno and receiving his latest mission, an exiled Ciro is left to fearlessly confront whatever comes his way, navigating a new chapter of gang warfare while grappling with devastating memories of loss and trauma. Weaving between his past as an orphan in Naples' cruel underworld and present as a hardened, cunning assassin with nothing left to lose, Ciro is plunged into the cold, dark depths of a world where immortality is just another form of damnation.",
    poster_path: '/kWLsOI2CPpdCBiAxpAXPdoE9435.jpg',
    title: 'The Immortal',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 94.666,
      },
    ],
    release_date: '2019-12-05',
  },
  {
    adult: false,
    backdrop_path: '/2LL1jHtNKJhTDc3tA1difsAnLui.jpg',
    genre_ids: [53, 27, 35, 80],
    id: 667141,
    original_language: 'en',
    original_title: '12 Hour Shift',
    overview:
      "It's 1999 and over the course of one 12-hour shift at an Arkansas hospital, a junkie nurse, her scheming cousin and a group of black market organ-trading criminals start a heist that could lead to their collective demise.",
    poster_path: '/c3SbZPZPOfGMHq7DB7FnTIMQKuY.jpg',
    title: '12 Hour Shift',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.3,
      },
      {
        id: 'popularity',
        rating: 94.593,
      },
    ],
    release_date: '2020-10-02',
  },
  {
    adult: false,
    backdrop_path: '/z7noaCJ4KtmhwHw7QcNtnMMo4Qy.jpg',
    genre_ids: [28, 53, 80],
    id: 345887,
    original_language: 'en',
    original_title: 'The Equalizer 2',
    overview:
      'Robert McCall, who serves an unflinching justice for the exploited and oppressed, embarks on a relentless, globe-trotting quest for vengeance when a long-time girl friend is murdered.',
    poster_path: '/cQvc9N6JiMVKqol3wcYrGshsIdZ.jpg',
    title: 'The Equalizer 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 94.21,
      },
    ],
    release_date: '2018-07-19',
  },
  {
    adult: false,
    backdrop_path: '/xIAaN3AQqaJiN5RJ0WsmBady8Hq.jpg',
    genre_ids: [28],
    id: 440471,
    original_language: 'en',
    original_title: 'Escape Plan 2: Hades',
    overview:
      "Ray Breslin manages an elite team of security specialists trained in the art of breaking people out of the world's most impenetrable prisons. When his most trusted operative, Shu Ren, is kidnapped and disappears inside the most elaborate prison ever built, Ray must track him down with the help of some of his former friends.",
    poster_path: '/Aqhl55vpzxNFqVfc2DpedUsR39L.jpg',
    title: 'Escape Plan 2: Hades',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5,
      },
      {
        id: 'popularity',
        rating: 94.101,
      },
    ],
    release_date: '2018-06-05',
  },
  {
    adult: false,
    backdrop_path: '/9pkZesKMnblFfKxEhQx45YQ2kIe.jpg',
    genre_ids: [27, 53],
    id: 381288,
    original_language: 'en',
    original_title: 'Split',
    overview:
      'Though Kevin has evidenced 23 personalities to his trusted psychiatrist, Dr. Fletcher, there remains one still submerged who is set to materialize and dominate all the others. Compelled to abduct three teenage girls led by the willful, observant Casey, Kevin reaches a war for survival among all of those contained within him — as well as everyone around him — as the walls between his compartments shatter apart.',
    poster_path: '/lli31lYTFpvxVBeFHWoe5PMfW5s.jpg',
    title: 'Split',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 94.1,
      },
    ],
    release_date: '2016-11-15',
  },
  {
    adult: false,
    backdrop_path: '/laeEtakR2pLKu3CeRwB2lU5Y53X.jpg',
    genre_ids: [10751, 16],
    id: 10567,
    original_language: 'en',
    original_title: 'Dinosaur',
    overview:
      'An orphaned dinosaur raised by lemurs joins an arduous trek to a sancturary after a meteorite shower destroys his family home.',
    poster_path: '/rSje3FS7ycJSglowlngjsvDt7vO.jpg',
    title: 'Dinosaur',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 93.631,
      },
    ],
    release_date: '2000-05-19',
  },
  {
    adult: false,
    backdrop_path: '/blfZnm6StMPnTY35kaooPBCsSVp.jpg',
    genre_ids: [27, 53],
    id: 238636,
    original_language: 'en',
    original_title: 'The Purge: Anarchy',
    overview:
      'One night per year, the government sanctions a 12-hour period in which citizens can commit any crime they wish -- including murder -- without fear of punishment or imprisonment. Leo, a sergeant who lost his son, plans a vigilante mission of revenge during the mayhem. However, instead of a death-dealing avenger, he becomes the unexpected protector of four innocent strangers who desperately need his help if they are to survive the night.',
    poster_path: '/f2HD5iVhJWWv72QVWThUKk09zYy.jpg',
    title: 'The Purge: Anarchy',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 93.569,
      },
    ],
    release_date: '2014-07-17',
  },
  {
    adult: false,
    backdrop_path: '/3Z8TQeeB4wC5zEXw4XugyO0upLV.jpg',
    genre_ids: [27],
    id: 480157,
    original_language: 'en',
    original_title: 'House of the Witch',
    overview:
      'A group of high-school kids set out to play a Halloween prank at an abandoned house, but once they enter they become victims of a demonic witch who has set her wrath upon them.',
    poster_path: '/cg6xjZOnGsYYqC7SH3o8oJV9Vr1.jpg',
    title: 'House of the Witch',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.4,
      },
      {
        id: 'popularity',
        rating: 93.461,
      },
    ],
    release_date: '2017-10-07',
  },
  {
    adult: false,
    backdrop_path: '/3SDoquTjagne0jWzdxEu31KFLmw.jpg',
    genre_ids: [12, 14, 28],
    id: 10195,
    original_language: 'en',
    original_title: 'Thor',
    overview:
      "Against his father Odin's will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth.",
    poster_path: '/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg',
    title: 'Thor',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 93.168,
      },
    ],
    release_date: '2011-04-21',
  },
  {
    adult: false,
    backdrop_path: '/tintsaQ0WLzZsTMkTiqtMB3rfc8.jpg',
    genre_ids: [28, 80, 35],
    id: 522627,
    original_language: 'en',
    original_title: 'The Gentlemen',
    overview:
      'American expat Mickey Pearson has built a highly profitable marijuana empire in London. When word gets out that he’s looking to cash out of the business forever it triggers plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.',
    poster_path: '/jtrhTYB7xSrJxR1vusu99nvnZ1g.jpg',
    title: 'The Gentlemen',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 93.162,
      },
    ],
    release_date: '2019-12-03',
  },
  {
    adult: false,
    backdrop_path: '/fCK2T5ruQrqRsciJ01jjQSkNWVq.jpg',
    genre_ids: [16, 28, 12, 14],
    id: 613200,
    original_language: 'zh',
    original_title: '全职高手之巅峰荣耀',
    overview:
      "Prequel movie to the animated series The King's Avatar, dealing with Ye Xiu's original entry into the pro gaming world of Glory, and the first Pro League series tournament.",
    poster_path: '/aQ7ZUDxcSf8U4ynCstNCMLgdhrD.jpg',
    title: "The King's Avatar: For the Glory",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 93.133,
      },
    ],
    release_date: '2019-08-16',
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [],
    id: 670892,
    original_language: 'en',
    original_title: 'Escuadrón suicida',
    overview:
      "A group of professional commandos have to rescue a young female hostage from the drug cartel. Once in the jungle, they're being killed one by one by a fearful enemy.",
    poster_path: '/wACXWoDChXuGE0r8n0bpoOttaVt.jpg',
    title: 'Suicide Squad',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 93.054,
      },
    ],
    release_date: '1991-01-01',
  },
  {
    adult: false,
    backdrop_path: '/h7WBvAHd6IqDsAycFWsqlcdt1i3.jpg',
    genre_ids: [10751, 35],
    id: 105965,
    original_language: 'en',
    original_title: 'Beverly Hills Chihuahua 3: Viva la Fiesta!',
    overview:
      "When Papi, Chloe, the pups, Uncle Pedro, and their owners move to a hotel, the smallest pup Rosa feels like she doesn't fit in, and Papi wants to make her feel better by showing her how special she is.",
    poster_path: '/fK3U8xulldz6lhMDuz3LFB7ngWH.jpg',
    title: 'Beverly Hills Chihuahua 3: Viva la Fiesta!',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 93.008,
      },
    ],
    release_date: '2012-09-03',
  },
  {
    adult: false,
    backdrop_path: '/pGTXJcZQIgqzFZlWy6KxlamlTHK.jpg',
    genre_ids: [18, 10749],
    id: 621013,
    original_language: 'en',
    original_title: 'Chemical Hearts',
    overview:
      'When a hopelessly romantic high school senior falls for a mysterious new classmate, it sets them both on an unexpected journey that teaches them about love, loss, and most importantly themselves.',
    poster_path: '/q1MNlZYqhoD4U7sd7pjxD6SUf4z.jpg',
    title: 'Chemical Hearts',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 92.671,
      },
    ],
    release_date: '2020-08-21',
  },
  {
    adult: false,
    backdrop_path: '/6MQmtWk4cFwSDyNvIgoJRBIHUT3.jpg',
    genre_ids: [14, 28, 12],
    id: 559,
    original_language: 'en',
    original_title: 'Spider-Man 3',
    overview:
      'The seemingly invincible Spider-Man goes up against an all-new crop of villains—including the shape-shifting Sandman. While Spider-Man’s superpowers are altered by an alien organism, his alter ego, Peter Parker, deals with nemesis Eddie Brock and also gets caught up in a love triangle.',
    poster_path: '/2jLxKF73SAPkyhIWrnv67IH7kJ1.jpg',
    title: 'Spider-Man 3',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 92.595,
      },
    ],
    release_date: '2007-05-01',
  },
  {
    adult: false,
    backdrop_path: '/7cGsa6sqTFsrws322p0QaIe7GUX.jpg',
    genre_ids: [28, 27],
    id: 571627,
    original_language: 'ko',
    original_title: '사자',
    overview:
      'After waking up with mysterious wounds on his hands, a champion fighter finds himself in an otherworldly battle against evil forces that wreak havoc in the human world.',
    poster_path: '/9Z2qT9iZYLzzsCSYu7A4SEQsKX0.jpg',
    title: 'The Divine Fury',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 92.492,
      },
    ],
    release_date: '2019-07-31',
  },
  {
    adult: false,
    backdrop_path: '/2f8fkWSWOVcTlWforoVpsuaCiwI.jpg',
    genre_ids: [53, 28],
    id: 449985,
    original_language: 'en',
    original_title: 'Triple Threat',
    overview:
      "A crime syndicate places a hit on a billionaire's daughter, making her the target of an elite assassin squad. A small band of down-and-out mercenaries protects her, fighting tooth and nail to stop the assassins from reaching their target.",
    poster_path: '/cSpM3QxmoSLp4O1WAMQpUDcaB7R.jpg',
    title: 'Triple Threat',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 92.361,
      },
    ],
    release_date: '2019-03-19',
  },
  {
    adult: false,
    backdrop_path: '/sdVZxrCFK6MB62Kxv3v9BUbCng3.jpg',
    genre_ids: [35, 18, 80],
    id: 725649,
    original_language: 'es',
    original_title: 'Lavaperros',
    overview:
      'When a narco past his prime refuses to pay a debt to an upstart, only a secret stash of money can save his men. But guess what the gardener just found?',
    poster_path: '/1kzUhxh9waTvbV4yW1fU1TaaC1z.jpg',
    title: 'Dogwashers',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 79.009,
      },
    ],
    release_date: '2020-10-09',
  },
  {
    adult: false,
    backdrop_path: '/wO5QSWZPBT71gMLvrRex0bVc0V9.jpg',
    genre_ids: [35, 10749],
    id: 583083,
    original_language: 'en',
    original_title: 'The Kissing Booth 2',
    overview:
      'With college decisions looming, Elle juggles her long-distance romance with Noah, changing relationship with bestie Lee and feelings for a new classmate.',
    poster_path: '/mb7wQv0adK3kjOUr9n93mANHhPJ.jpg',
    title: 'The Kissing Booth 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 79.002,
      },
    ],
    release_date: '2020-07-24',
  },
  {
    adult: false,
    backdrop_path: '/1aABIiqBY7yoQESE8qWvR0w9bJZ.jpg',
    genre_ids: [16, 10751, 878, 14],
    id: 265712,
    original_language: 'ja',
    original_title: 'STAND BY ME ドラえもん',
    overview:
      "In the suburbs of Tokyo some time ago, there lived a clumsy boy about 10 years old. There appeared in front of him named Sewashi, Nobita's descendant of four generations later from the 22nd century, and Doraemon, a 22nd century cat-type caretaker robot who helps people with its secret gadgets. Sewashi claims that his family is suffering from the debts Nobita made even to his generation, so in order to change this disastrous future, he brought along Doraemon as Nobita's caretaker to bring happiness to his future, although Doraemon is not happy about this. And so Sewashi installed an accomplishment program into Doraemon forcing him to take care of Nobita. Unless he makes Nobita happy, Doraemon can no longer go back to the 22nd century. This is how the life of Doraemon and Nobita begins. Will Doraemon succeed this mission and return to the 22nd century?",
    poster_path: '/jArnRnllnxbvE2CEV8jc2hhwweS.jpg',
    title: 'Stand by Me Doraemon',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 78.839,
      },
    ],
    release_date: '2014-08-08',
  },
  {
    adult: false,
    backdrop_path: '/mPNGcX1j5SFeDETkvcJA9POaNx8.jpg',
    genre_ids: [28, 18, 878, 53],
    id: 429415,
    original_language: 'en',
    original_title: 'Extinction',
    overview:
      'A chief mechanic at a factory, haunted by apocalyptic nightmares, becomes a hero when Earth is invaded by a mysterious army bent on destruction.',
    poster_path: '/qjnNdjrZIdi7d316SjjkgEjJRSg.jpg',
    title: 'Extinction',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 78.735,
      },
    ],
    release_date: '2018-07-26',
  },
  {
    adult: false,
    backdrop_path: '/vVIlpxGfxvY6K5MOEXAl1zAqNA2.jpg',
    genre_ids: [16, 10751],
    id: 11360,
    original_language: 'en',
    original_title: 'Dumbo',
    overview:
      'Dumbo is a baby elephant born with over-sized ears and a supreme lack of confidence. But thanks to his even more diminutive buddy Timothy the Mouse,  the pint-sized pachyderm learns to surmount all obstacles.',
    poster_path: '/hKDdllslMtsU9JixAv5HR9biXlp.jpg',
    title: 'Dumbo',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 78.726,
      },
    ],
    release_date: '1941-10-22',
  },
  {
    adult: false,
    backdrop_path: '/yJyZRrXaYUjhOrJGga8awbw4Rud.jpg',
    genre_ids: [12, 14, 10749, 10751],
    id: 420817,
    original_language: 'en',
    original_title: 'Aladdin',
    overview:
      'A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.',
    poster_path: '/ykUEbfpkf8d0w49pHh0AD2KrT52.jpg',
    title: 'Aladdin',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 78.642,
      },
    ],
    release_date: '2019-05-22',
  },
  {
    adult: false,
    backdrop_path: '/jrlq8lWxB3OKjKwJ0kCjtg5fIII.jpg',
    genre_ids: [16, 10751, 12, 35],
    id: 49013,
    original_language: 'en',
    original_title: 'Cars 2',
    overview:
      'Star race car Lightning McQueen and his pal Mater head overseas to compete in the World Grand Prix race. But the road to the championship becomes rocky as Mater gets caught up in an intriguing adventure of his own: international espionage.',
    poster_path: '/okIz1HyxeVOMzYwwHUjH2pHi74I.jpg',
    title: 'Cars 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 78.505,
      },
    ],
    release_date: '2011-06-11',
  },
  {
    adult: false,
    backdrop_path: '/uIGbye92DBh3PQ645ZnS5gz5PkN.jpg',
    genre_ids: [18],
    id: 818367,
    original_language: 'en',
    original_title: "Let's Be Tigers",
    overview:
      "Avalon’s not ready to process the loss of her mother, but when she's put in charge of a 4-year-old for one night, she finds more comfort than she ever could have expected.",
    poster_path: '/hPaF9ICdWIAubVAsM9t8elG5ddV.jpg',
    title: "Let's Be Tigers",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 78.501,
      },
    ],
    release_date: '2021-05-28',
  },
  {
    adult: false,
    backdrop_path: '/scQf03Fm3jeyv4FH04qvi4fp4wh.jpg',
    genre_ids: [80, 35, 28],
    id: 402900,
    original_language: 'en',
    original_title: "Ocean's Eight",
    overview:
      "Debbie Ocean, a criminal mastermind, gathers a crew of female thieves to pull off the heist of the century at New York's annual Met Gala.",
    poster_path: '/MvYpKlpFukTivnlBhizGbkAe3v.jpg',
    title: "Ocean's Eight",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 78.381,
      },
    ],
    release_date: '2018-06-07',
  },
  {
    adult: false,
    backdrop_path: '/pGqBDYycGWsMYc57sYv5M9GAQoW.jpg',
    genre_ids: [27],
    id: 627290,
    original_language: 'en',
    original_title: 'Antebellum',
    overview:
      "Successful author Veronica finds herself trapped in a horrifying reality and must uncover the mind-bending mystery before it's too late.",
    poster_path: '/irkse1FMm9dWemwlxKJ7RINT9Iy.jpg',
    title: 'Antebellum',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 78.345,
      },
    ],
    release_date: '2020-09-02',
  },
  {
    adult: false,
    backdrop_path: '/8NCftAWfkETwrbf7QwEaDH1xpus.jpg',
    genre_ids: [10751, 16, 12, 35],
    id: 953,
    original_language: 'en',
    original_title: 'Madagascar',
    overview:
      "Alex the lion is the king of the urban jungle, the main attraction at New York's Central Park Zoo. He and his best friends—Marty the zebra, Melman the giraffe and Gloria the hippo—have spent their whole lives in blissful captivity before an admiring public and with regular meals provided for them. Not content to leave well enough alone, Marty lets his curiosity get the better of him and makes his escape—with the help of some prodigious penguins—to explore the world.",
    poster_path: '/uHkmbxb70IQhV4q94MiBe9dqVqv.jpg',
    title: 'Madagascar',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 78.227,
      },
    ],
    release_date: '2005-05-25',
  },
  {
    adult: false,
    backdrop_path: '/upsk7nfUjf8ZSYuokwa5U5YXERm.jpg',
    genre_ids: [28, 18, 27, 878, 53],
    id: 72190,
    original_language: 'en',
    original_title: 'World War Z',
    overview:
      'Life for former United Nations investigator Gerry Lane and his family seems content. Suddenly, the world is plagued by a mysterious infection turning whole human populations into rampaging mindless zombies. After barely escaping the chaos, Lane is persuaded to go on a mission to investigate this disease. What follows is a perilous trek around the world where Lane must brave horrific dangers and long odds to find answers before human civilization falls.',
    poster_path: '/1SWBSYJsnyhdNRfLI1T6RsCxAQ4.jpg',
    title: 'World War Z',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 78.052,
      },
    ],
    release_date: '2013-06-20',
  },
  {
    adult: false,
    backdrop_path: '/doZDR89j4qSiVmkOioVvAXvLu91.jpg',
    genre_ids: [16, 14, 12, 18],
    id: 514710,
    original_language: 'ja',
    original_title: 'ちいさな英雄－カニとタマゴと透明人間－',
    overview:
      'Two tiny, aquatic humanoids search for their missing father, a boy battles a lethal allergy to eggs, and an invisible salaryman tries to become a hero.',
    poster_path: '/5jURYLaG6BX0klRHsiHc3pzOlOm.jpg',
    title: 'Modest Heroes',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 45.315,
      },
    ],
    release_date: '2018-08-24',
  },
  {
    adult: false,
    backdrop_path: '/A2KqRrQ0cVCFEl7Qf0YttMa3QkS.jpg',
    genre_ids: [28, 16, 878, 10751],
    id: 13640,
    original_language: 'en',
    original_title: 'Superman: Doomsday',
    overview:
      'When LexCorp accidentally unleashes a murderous creature, Superman meets his greatest challenge as a champion. Based on the "The Death of Superman" storyline that appeared in DC Comics\' publications in the 1990s.',
    poster_path: '/itvuWm7DFWWzWgW0xgiaKzzWszP.jpg',
    title: 'Superman: Doomsday',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 78.023,
      },
    ],
    release_date: '2007-09-18',
  },
  {
    adult: false,
    backdrop_path: '/AcxbOWUbwtIEDisfuhNGHQNfnMK.jpg',
    genre_ids: [16, 10751],
    id: 11544,
    original_language: 'en',
    original_title: 'Lilo & Stitch',
    overview:
      'As Stitch, a runaway genetic experiment from a faraway planet, wreaks havoc on the Hawaiian Islands, he becomes the mischievous adopted alien "puppy" of an independent little girl named Lilo and learns about loyalty, friendship, and \'ohana, the Hawaiian tradition of family.',
    poster_path: '/d73UqZWyw3MUMpeaFcENgLZ2kWS.jpg',
    title: 'Lilo & Stitch',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 77.908,
      },
    ],
    release_date: '2002-06-21',
  },
  {
    adult: false,
    backdrop_path: '/l1H7adqYhxBrBK45aKAzqm6nIVC.jpg',
    genre_ids: [28, 16, 878],
    id: 39103,
    original_language: 'ja',
    original_title: 'ドラゴンボールZ 激突!!100億パワーの戦士たち',
    overview:
      'Cooler has resurrected himself as a robot and is enslaving the people of New Namek. Goku and the gang must help.',
    poster_path: '/zJn14ySh0NTZCOIReQZiWE1fkje.jpg',
    title: 'Dragon Ball Z: The Return of Cooler',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 77.844,
      },
    ],
    release_date: '1992-03-07',
  },
  {
    adult: false,
    backdrop_path: '/msnknPOg9dx86b0YozXOFP8PgBI.jpg',
    genre_ids: [10751, 16, 12, 35],
    id: 270946,
    original_language: 'en',
    original_title: 'Penguins of Madagascar',
    overview:
      'Skipper, Kowalski, Rico and Private join forces with undercover organization The North Wind to stop the villainous Dr. Octavius Brine from destroying the world as we know it.',
    poster_path: '/dXbpNrPDZDMEbujFoOxmMNQVMHa.jpg',
    title: 'Penguins of Madagascar',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 77.815,
      },
    ],
    release_date: '2014-11-22',
  },
  {
    adult: false,
    backdrop_path: '/2Fk3AB8E9dYIBc2ywJkxk8BTyhc.jpg',
    genre_ids: [28, 53, 18],
    id: 524047,
    original_language: 'en',
    original_title: 'Greenland',
    overview:
      'John Garrity, his estranged wife and their young son embark on a perilous journey to find sanctuary as a planet-killing comet hurtles toward Earth. Amid terrifying accounts of cities getting levelled, the Garritys experience the best and worst in humanity. As the countdown to the global apocalypse approaches zero, their incredible trek culminates in a desperate and last-minute flight to a possible safe haven.',
    poster_path: '/bNo2mcvSwIvnx8K6y1euAc1TLVq.jpg',
    title: 'Greenland',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 77.77,
      },
    ],
    release_date: '2020-07-29',
  },
  {
    adult: false,
    backdrop_path: '/102o4nnZtS0bR9osDz7cRc7WO6n.jpg',
    genre_ids: [10751, 12, 35, 16],
    id: 13654,
    original_language: 'en',
    original_title: "101 Dalmatians II: Patch's London Adventure",
    overview:
      "Being one of 101 takes its toll on Patch, who doesn't feel unique. When he's accidentally left behind on moving day, he meets his idol, Thunderbolt, who enlists him on a publicity campaign.",
    poster_path: '/mcl56J7tDPjzEesgpX4UPgAdbvf.jpg',
    title: "101 Dalmatians II: Patch's London Adventure",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 77.702,
      },
    ],
    release_date: '2003-03-02',
  },
  {
    adult: false,
    backdrop_path: '/41bSXMJpsasOEkeKx8THtDVjCb6.jpg',
    genre_ids: [35],
    id: 836487,
    original_language: 'es',
    original_title: 'Alan Saldaña: encarcelado',
    overview:
      'Mexican comedian Alan Saldaña is back, poking gentle fun at himself and parceling advice, especially about how to stay married and how to be parents.',
    poster_path: '/z05e1QBvPgS4vuX2wgwMtK34KhM.jpg',
    title: 'Alan Saldaña: Locked Up',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 3,
      },
      {
        id: 'popularity',
        rating: 77.643,
      },
    ],
    release_date: '2021-06-03',
  },
  {
    adult: false,
    backdrop_path: '/1n00NlOGRFZVs8coBxyZLm5l4EC.jpg',
    genre_ids: [28, 12, 878, 14],
    id: 335988,
    original_language: 'en',
    original_title: 'Transformers: The Last Knight',
    overview:
      'Autobots and Decepticons are at war, with humans on the sidelines. Optimus Prime is gone. The key to saving our future lies buried in the secrets of the past, in the hidden history of Transformers on Earth.',
    poster_path: '/s5HQf2Gb3lIO2cRcFwNL9sn1o1o.jpg',
    title: 'Transformers: The Last Knight',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 77.625,
      },
    ],
    release_date: '2017-06-16',
  },
  {
    adult: false,
    backdrop_path: '/hugKriLPeBm3lErSCQiFOgQzpkC.jpg',
    genre_ids: [28, 53, 80],
    id: 574060,
    original_language: 'en',
    original_title: 'Gunpowder Milkshake',
    overview:
      'In her turbulent life as a professional assassin, Scarlet was cruelly forced to abandon her daughter Sam and go on the run. Years later, despite the estrangement, Sam has also grown up into a cold blooded hitwoman. After a high-stake mission spins out of control, putting an innocent 8-year-old girl in the middle of the gang war she has unleashed, Sam has no choice but to go rogue. This ultimately leads her back to her mother and her former hitwomen sidekicks, who all join forces in an avenging war against those who took everything from them.',
    poster_path: '/5AaKulwpUtkscAokKWtLenGTfVS.jpg',
    title: 'Gunpowder Milkshake',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 63.238,
      },
    ],
    release_date: '2021-07-15',
  },
  {
    adult: false,
    backdrop_path: '/xNq5K3BTvSFTiYupsuoDboNL3mD.jpg',
    genre_ids: [28, 12, 16],
    id: 704264,
    original_language: 'en',
    original_title: 'Primal: Tales of Savagery',
    overview:
      "Genndy Tartakovsky's Primal: Tales of Savagery features a caveman and a dinosaur on the brink of extinction. Bonded by tragedy, this unlikely friendship becomes the only hope of survival.",
    poster_path: '/osBa5SDOCyk8DzLcy8Qa3bdwUXu.jpg',
    title: 'Primal: Tales of Savagery',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.4,
      },
      {
        id: 'popularity',
        rating: 63.235,
      },
    ],
    release_date: '2019-11-21',
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [35, 10749],
    id: 20222,
    original_language: 'es',
    original_title: 'Sexo con amor',
    overview:
      'In Santiago, Chile, the schoolteacher Luisa proposes a debate about sex with the parents of her students with the intention of giving classes about sex education to the youngsters.',
    poster_path: '/ub91ikhfzCWF3bfmWLqwN8I4q1Z.jpg',
    title: 'Sex with Love',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 63.091,
      },
    ],
    release_date: '2003-03-27',
  },
  {
    adult: false,
    backdrop_path: '/nnL7vunWHE24iU7WGGP84q7FXO9.jpg',
    genre_ids: [16, 10751],
    id: 756,
    original_language: 'en',
    original_title: 'Fantasia',
    overview:
      "Walt Disney's timeless masterpiece is an extravaganza of sight and sound! See the music come to life, hear the pictures burst into song and experience the excitement that is Fantasia over and over again.",
    poster_path: '/mSJgxrTaTgDSOoggIPcj3ZoZswT.jpg',
    title: 'Fantasia',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 63.091,
      },
    ],
    release_date: '1940-11-13',
  },
  {
    adult: false,
    backdrop_path: '/kRtlcDGTowJGcKKX3F0u1C0vObD.jpg',
    genre_ids: [35, 10749, 53],
    id: 673319,
    original_language: 'en',
    original_title: 'Happily',
    overview:
      "Tom and Janet have been happily married for years. But a visit from a mysterious stranger leads to a dead body, a lot of questions, and a tense couples' trip with friends who may not actually be friends at all.",
    poster_path: '/uCV98jOIxwd0SMICfHFNcuo5CHS.jpg',
    title: 'Happily',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 63.018,
      },
    ],
    release_date: '2021-03-19',
  },
  {
    adult: false,
    backdrop_path: '/hNCGEGCg65c1qI0kWs1eVsvP0Y0.jpg',
    genre_ids: [16, 35, 10751],
    id: 763568,
    original_language: 'en',
    original_title: 'Arlo the Alligator Boy',
    overview:
      'Upon learning that he is from New York City, a wide-eyed boy, who is half human and half alligator, decides to leave his sheltered life in the swamp and search for his long lost father. A musical adventure.',
    poster_path: '/oOQMJM7G2W8v2AEK722k8welIJY.jpg',
    title: 'Arlo the Alligator Boy',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 62.911,
      },
    ],
    release_date: '2021-04-16',
  },
  {
    adult: false,
    backdrop_path: '/qRik98bxXPn4qCHTe3ffhbGFRAu.jpg',
    genre_ids: [27, 14, 28, 878],
    id: 295830,
    original_language: 'ja',
    original_title: '進撃の巨人 ATTACK ON TITAN',
    overview:
      '100 years ago, titans suddenly appeared on Earth. Soon, human civilization veered on collapse due to the titans. Humans then built a giant wall to defend themselves. Within the giant walls, humans lived in peace, but, 100 years later, the giant wall is broken.',
    poster_path: '/ihuDg9TeRzoOhv2cZVA8gi50NFl.jpg',
    title: 'Attack on Titan',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 62.895,
      },
    ],
    release_date: '2015-08-01',
  },
  {
    adult: false,
    backdrop_path: '/k99D5W4qtLK0nuPQSSzCG9FimcD.jpg',
    genre_ids: [35, 18, 80, 53],
    id: 556867,
    original_language: 'en',
    original_title: 'Breaking News in Yuba County',
    overview:
      'An overlooked pencil-pusher catches her husband in bed with another woman, the shock of which causes him to die of a heart attack. So she buries his body and takes advantage of the growing celebrity status that comes from having a missing husband. But she quickly finds herself in over her head, dodging cops and criminals, all while trying to keep the truth from her sister, a local news anchor who’s desperate for a story.',
    poster_path: '/pMyCYtgfBmMisX3RFc5eH6zIV5Y.jpg',
    title: 'Breaking News in Yuba County',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 62.824,
      },
    ],
    release_date: '2021-05-20',
  },
  {
    adult: false,
    backdrop_path: '/bLI7uIY9Y1vDkx1Bt6Crn2NJELL.jpg',
    genre_ids: [53, 27],
    id: 280002,
    original_language: 'en',
    original_title: 'The Remaining',
    overview:
      'When a group of close-knit friends assemble for the marriage of Skylar and Dan, they have no idea they will witness The Rapture and face a series of catastrophic events turning the celebration into a life-or-death struggle.',
    poster_path: '/z0HOfkCxd3QhEUfC3tR0s6U4ajp.jpg',
    title: 'The Remaining',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.5,
      },
      {
        id: 'popularity',
        rating: 62.82,
      },
    ],
    release_date: '2014-08-25',
  },
  {
    adult: false,
    backdrop_path: '/nbxNZO1YTl18gF2pcWjm2A9nyu8.jpg',
    genre_ids: [99],
    id: 820492,
    original_language: 'en',
    original_title: 'Audible',
    overview:
      'Football player Amaree McKenstry-Hall and his Maryland School for the Deaf teammates attempt to defend their winning streak while coming to terms with the tragic loss of a close friend.',
    poster_path: '/clGYpIxW2PkxY1Mm6i8gdF347d6.jpg',
    title: 'Audible',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 62.637,
      },
    ],
    release_date: '2021-04-29',
  },
  {
    adult: false,
    backdrop_path: '/yFuKvT4Vm3sKHdFY4eG6I4ldAnn.jpg',
    genre_ids: [28, 12, 878],
    id: 1771,
    original_language: 'en',
    original_title: 'Captain America: The First Avenger',
    overview:
      "During World War II, Steve Rogers is a sickly man from Brooklyn who's transformed into super-soldier Captain America to aid in the war effort. Rogers must stop the Red Skull – Adolf Hitler's ruthless head of weaponry, and the leader of an organization that intends to use a mysterious device of untold powers for world domination.",
    poster_path: '/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg',
    title: 'Captain America: The First Avenger',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 62.583,
      },
    ],
    release_date: '2011-07-22',
  },
  {
    adult: false,
    backdrop_path: '/xzIaIFXs14vr5BGoAQ2IJsQ60EB.jpg',
    genre_ids: [14, 16, 28],
    id: 17581,
    original_language: 'ja',
    original_title: '劇場版 NARUTO -ナルト- 疾風伝 絆',
    overview:
      'A mysterious group of ninjas makes a surprise attack on the Konohagakure, which takes great damage. The nightmare of another Shinobi World War could become a reality. Sasuke, who was still a missing nin from Konoha trying to kill his brother, Itachi, appears for the second time in front of Naruto at an unknown location to prevent it from happening.',
    poster_path: '/bBqEiQbbfyt4MWR3NhDZMbS4Wp8.jpg',
    title: 'Naruto Shippuden the Movie: Bonds',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 62.437,
      },
    ],
    release_date: '2008-08-02',
  },
  {
    adult: false,
    backdrop_path: '/6QmX2BDVr1hIOIPHqnxvp1C1ZZp.jpg',
    genre_ids: [35, 28, 80],
    id: 339846,
    original_language: 'en',
    original_title: 'Baywatch',
    overview:
      'Devoted lifeguard Mitch Buchannon butts heads with a brash new recruit. Together, they uncover a local criminal plot that threatens the future of the Bay.',
    poster_path: '/6HE4xd8zloDqmjMZuhUCCw2UcY1.jpg',
    title: 'Baywatch',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 62.39,
      },
    ],
    release_date: '2017-05-12',
  },
  {
    adult: false,
    backdrop_path: '/wC7CmxxtBF9ST6mAUPKvLgaRGnZ.jpg',
    genre_ids: [12, 18, 10751],
    id: 2383,
    original_language: 'en',
    original_title: "L'Ours",
    overview:
      'An orphan bear cub hooks up with an adult male as they try to dodge human hunters.',
    poster_path: '/tzZZ68P93eUK3E1gAJXRjFtnNkZ.jpg',
    title: 'The Bear',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 62.367,
      },
    ],
    release_date: '1988-10-21',
  },
  {
    adult: false,
    backdrop_path: '/wyv2Y9vXYJwJzF6cNVuVwVOsOUj.jpg',
    genre_ids: [18, 14, 28],
    id: 397567,
    original_language: 'ko',
    original_title: '신과함께-죄와 벌',
    overview:
      'Having died unexpectedly, firefighter Ja-hong is taken to the afterlife by 3 afterlife guardians. Only when he passes 7 trials over 49 days and proves he was innocent in human life, he’s able to reincarnate, and his 3 afterlife guardians are by his side to defend him in trial.',
    poster_path: '/gJSvIsI6oQfFim0PGyuuiCYfqKs.jpg',
    title: 'Along with the Gods: The Two Worlds',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8,
      },
      {
        id: 'popularity',
        rating: 62.349,
      },
    ],
    release_date: '2017-12-14',
  },
  {
    adult: false,
    backdrop_path: '/neH7GNmzMs1BDLqHXOnTuB04dNh.jpg',
    genre_ids: [12, 16, 35, 10751, 14],
    id: 11688,
    original_language: 'en',
    original_title: "The Emperor's New Groove",
    overview:
      "Kuzco is a self-centered emperor who summons Pacha from a village and to tell him that his home will be destroyed to make room for Kuzco's new summer home. Kuzco's advisor, Yzma, tries to poison Kuzco and accidentally turns him into a llama, who accidentally ends up in Pacha's village. Pacha offers to help Kuzco if he doesn't destroy his house, and so they form an unlikely partnership.",
    poster_path: '/wwbgkXQBEKtnyIJapk6gUgWkVw8.jpg',
    title: "The Emperor's New Groove",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 62.168,
      },
    ],
    release_date: '2000-12-15',
  },
  {
    adult: false,
    backdrop_path: '/o8u0NyEigCEaZHBdCYTRfXR8U4i.jpg',
    genre_ids: [27, 9648, 53],
    id: 396422,
    original_language: 'en',
    original_title: 'Annabelle: Creation',
    overview:
      "Several years after the tragic death of their little girl, a doll maker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the doll maker's possessed creation—Annabelle.",
    poster_path: '/snYI6TDLkB8wL7SHFyBV6qkJuPx.jpg',
    title: 'Annabelle: Creation',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 62.07,
      },
    ],
    release_date: '2017-08-03',
  },
  {
    adult: false,
    backdrop_path: '/tIG8FwHRiHLOlWJdizp2oxdkSL2.jpg',
    genre_ids: [14, 28, 27],
    id: 561,
    original_language: 'en',
    original_title: 'Constantine',
    overview:
      'John Constantine has literally been to Hell and back. When he teams up with a policewoman to solve the mysterious suicide of her twin sister, their investigation takes them through the world of demons and angels that exists beneath the landscape of contemporary Los Angeles.',
    poster_path: '/vPYgvd2MwHlxTamAOjwVQp4qs1W.jpg',
    title: 'Constantine',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 62.041,
      },
    ],
    release_date: '2005-02-08',
  },
  {
    adult: false,
    backdrop_path: '/nVodCGKYLpqNC8YwQAbivKlWCgZ.jpg',
    genre_ids: [28, 12, 14],
    id: 293167,
    original_language: 'en',
    original_title: 'Kong: Skull Island',
    overview:
      'Explore the mysterious and dangerous home of the king of the apes as a team of explorers ventures deep inside the treacherous, primordial island.',
    poster_path: '/r2517Vz9EhDhj88qwbDVj8DCRZN.jpg',
    title: 'Kong: Skull Island',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 62.039,
      },
    ],
    release_date: '2017-03-08',
  },
  {
    adult: false,
    backdrop_path: '/qX5T5GVAcq2UKaaiAx5SZp1AtlY.jpg',
    genre_ids: [80, 28, 878],
    id: 198184,
    original_language: 'en',
    original_title: 'Chappie',
    overview:
      "Every child comes into the world full of promise, and none more so than Chappie: he is gifted, special, a prodigy. Like any child, Chappie will come under the influence of his surroundings—some good, some bad—and he will rely on his heart and soul to find his way in the world and become his own man. But there's one thing that makes Chappie different from any one else: he is a robot.",
    poster_path: '/hpnuXlKKWznTgbheGe4iQXzkuwJ.jpg',
    title: 'Chappie',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 61.995,
      },
    ],
    release_date: '2015-03-04',
  },
  {
    adult: false,
    backdrop_path: '/7rFTO7yEJaAXzx3OX1wHgVzVTXc.jpg',
    genre_ids: [10751, 14, 878],
    id: 16523,
    original_language: 'en',
    original_title: 'Where the Wild Things Are',
    overview:
      'Max imagines running away from his mom and sailing to a far-off land where large talking beasts -- Ira, Carol, Douglas, the Bull, Judith and Alexander -- crown him as their king, play rumpus, build forts and discover secret hideaways.',
    poster_path: '/sDFV9VEjwTUWF1s5sjOllsb70jk.jpg',
    title: 'Where the Wild Things Are',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 64.107,
      },
    ],
    release_date: '2009-10-16',
  },
  {
    adult: false,
    backdrop_path: '/4840rkbpsiuow5ew155oVKcqJwj.jpg',
    genre_ids: [18],
    id: 615,
    original_language: 'en',
    original_title: 'The Passion of the Christ',
    overview:
      "A graphic portrayal of the last twelve hours of Jesus of Nazareth's life.",
    poster_path: '/2C9vyK6leWDb2ds65R7uIwSmh8V.jpg',
    title: 'The Passion of the Christ',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 64.044,
      },
    ],
    release_date: '2004-02-25',
  },
  {
    adult: false,
    backdrop_path: '/yuxdzbQHEecWGOvaXeEYVtIyAfn.jpg',
    genre_ids: [878, 27],
    id: 515454,
    original_language: 'en',
    original_title: 'Come True',
    overview:
      "Looking for an escape from her recurring nightmares, 18-year-old Sarah submits to a university sleep study, but soon realizes she's become the conduit to a frightening new discovery.",
    poster_path: '/hGPGRRz6FTIRed1zestdWrV2Iwd.jpg',
    title: 'Come True',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 64.005,
      },
    ],
    release_date: '2021-03-12',
  },
  {
    adult: false,
    backdrop_path: '/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg',
    genre_ids: [18, 28, 80, 53],
    id: 155,
    original_language: 'en',
    original_title: 'The Dark Knight',
    overview:
      'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
    poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    title: 'The Dark Knight',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.5,
      },
      {
        id: 'popularity',
        rating: 63.992,
      },
    ],
    release_date: '2008-07-16',
  },
  {
    adult: false,
    backdrop_path: '/4dtbvoAaqiM3fVwzdffLxUdAiY6.jpg',
    genre_ids: [10751, 35, 14],
    id: 8871,
    original_language: 'en',
    original_title: 'How the Grinch Stole Christmas',
    overview:
      'Inside a snowflake exists the magical land of Whoville. In Whoville, live the Whos, an almost mutated sort of Munchkin-like people. All the Whos love Christmas, yet just outside of their beloved Whoville lives the Grinch. The Grinch is a nasty creature that hates Christmas, and plots to steal it away from the Whos, whom he equally abhors. Yet a small child, Cindy Lou Who, decides to try befriending the Grinch.',
    poster_path: '/1WZbbPApEivA421gCOluuzMMKCk.jpg',
    title: 'How the Grinch Stole Christmas',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 63.955,
      },
    ],
    release_date: '2000-11-17',
  },
  {
    adult: false,
    backdrop_path: '/ig7qUy7drkEFZNCK7gi0hMn1WMN.jpg',
    genre_ids: [28, 878, 12],
    id: 68726,
    original_language: 'en',
    original_title: 'Pacific Rim',
    overview:
      "A ragtag band of humans band together in the year 2025 to fight legions of monstrous creatures rising from the sea. Using massive piloted robots to combat the alien threat, earth's survivors take the fight to the invading alien force lurking in the depths of the Pacific Ocean. Nearly defenseless in the face of the relentless enemy, the forces of mankind have no choice but to turn to two unlikely heroes -- a washed up former pilot and an untested trainee -- who now stand as earth's final hope against the mounting apocalypse.",
    poster_path: '/mmznhaQDwlHWpUwKuNxtQiubbmM.jpg',
    title: 'Pacific Rim',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 63.866,
      },
    ],
    release_date: '2013-07-11',
  },
  {
    adult: false,
    backdrop_path: '/pz81SGRPxUI3OINfpf7XIdwEJgI.jpg',
    genre_ids: [16, 28, 14, 35],
    id: 570269,
    original_language: 'ja',
    original_title: '劇場版トリニティセブン -天空図書館と真紅の魔王-',
    overview:
      'The series focuses on the adventures of Arata Kasuga, a high school student, who is targeted by Lilith, a teacher at a mystical school. Given three choices in an effort to help save the breakdown phenomenon of the world by evil forces and while attempting to solve the mystery of his beloved cousin and childhood friend, Hijiri, who disappeared to a difference space.',
    poster_path: '/vh4f6N3VdgzmYnRK3VctwBZWdv9.jpg',
    title: "Trinity Seven 2: Heaven's Library & Crimson Lord",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 63.669,
      },
    ],
    release_date: '2019-03-29',
  },
  {
    adult: false,
    backdrop_path: '/4UvNG6JFaSzMLUXUsq62VcVjNhP.jpg',
    genre_ids: [16, 35, 10751],
    id: 93456,
    original_language: 'en',
    original_title: 'Despicable Me 2',
    overview:
      'Gru is recruited by the Anti-Villain League to help deal with a powerful new super criminal.',
    poster_path: '/5Fh4NdoEnCjCK9wLjdJ9DJNFl2b.jpg',
    title: 'Despicable Me 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 63.643,
      },
    ],
    release_date: '2013-06-26',
  },
  {
    adult: false,
    backdrop_path: '/q0eXltiQKRqD3qMdN3OC55O06Dy.jpg',
    genre_ids: [18, 10749],
    id: 86331,
    original_language: 'fr',
    original_title: 'Q',
    overview:
      'In a social context deteriorated by a countrywide economic crisis, the life of several people will be turned upside down after they meet Cécile, a character who symbolizes desire.',
    poster_path: '/O71Q0BxQyqz8Ru6WHKJ6rxGoWc.jpg',
    title: 'Desire',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5,
      },
      {
        id: 'popularity',
        rating: 63.641,
      },
    ],
    release_date: '2011-09-14',
  },
  {
    adult: false,
    backdrop_path: '/m0OK4jdSuwoMCgggzApzol36e7F.jpg',
    genre_ids: [53],
    id: 633163,
    original_language: 'es',
    original_title: 'La sabiduría',
    overview:
      'Three young woman leave a party and decide to spend a few days in a country house away from the urbanization in the middle of the Argentine pampas. Upon arrival they are invited to a party called by the pawns and locals.',
    poster_path: '/2mIRhKx5hOjsmbp4YAc4n0sJNHr.jpg',
    title: 'La sabiduría',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 63.638,
      },
    ],
    release_date: '2019-11-14',
  },
  {
    adult: false,
    backdrop_path: '/gDbNf0JpmG46fFTHJIPdFga9RRg.jpg',
    genre_ids: [878, 27],
    id: 300668,
    original_language: 'en',
    original_title: 'Annihilation',
    overview:
      "A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don't apply.",
    poster_path: '/4YRplSk6BhH6PRuE9gfyw9byUJ6.jpg',
    title: 'Annihilation',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 63.638,
      },
    ],
    release_date: '2018-02-22',
  },
  {
    adult: false,
    backdrop_path: '/eo6pahstCYRUm0Lk4MORmfCs2SH.jpg',
    genre_ids: [16, 10751],
    id: 752455,
    original_language: 'en',
    original_title: "Angela's Christmas Wish",
    overview:
      'A determined Angela makes a wish to reunite her family in time for Christmas, then launches a plan to find her way from Ireland to Australia.',
    poster_path: '/8ftutOnMM5JHl69mvkNbs8f1AUR.jpg',
    title: "Angela's Christmas Wish",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 63.572,
      },
    ],
    release_date: '2020-12-01',
  },
  {
    adult: false,
    backdrop_path: '/eGa0w1EbNnb2wF696NVbF65IR4Y.jpg',
    genre_ids: [99],
    id: 638566,
    original_language: 'ja',
    original_title: 'NARUTO to BORUTO The Live 2019',
    overview:
      '“NARUTO to BORUTO THE LIVE 2019”, a special event for the 20th anniversary of the first publication of “NARUTO” series in Weekly Shonen Jump!! Featuring live performances by artists performing the theme songs of both “NARUTO” and “BORUTO: NARUTO NEXT GENERATIONS”, anime cast members reading original story episodes, and more.',
    poster_path: '/8OkxtHotJnegiBbWQSz8fD60NEc.jpg',
    title: 'NARUTO to BORUTO The Live 2019',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 63.529,
      },
    ],
    release_date: '2019-05-05',
  },
  {
    adult: false,
    backdrop_path: '/g2djzUqA6mFplzC03gDk0WSyg99.jpg',
    genre_ids: [10402, 12, 16, 10751, 14],
    id: 568124,
    original_language: 'en',
    original_title: 'Encanto',
    overview:
      "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
    poster_path: '/gKV303VdLsR2PAEJMhSeZ2cxfQ0.jpg',
    title: 'Encanto',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 63.5,
      },
    ],
    release_date: '2021-11-24',
  },
  {
    adult: false,
    backdrop_path: '/hBwDYiOPwXHuwiYGP82ekFNSeBr.jpg',
    genre_ids: [12, 14, 10749],
    id: 50619,
    original_language: 'en',
    original_title: 'The Twilight Saga: Breaking Dawn - Part 1',
    overview:
      'The new found married bliss of Bella Swan and vampire Edward Cullen is cut short when a series of betrayals and misfortunes threatens to destroy their world.',
    poster_path: '/dSSzv6JrlwS48pBeTNSswLJXOYF.jpg',
    title: 'The Twilight Saga: Breaking Dawn - Part 1',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 63.47,
      },
    ],
    release_date: '2011-11-16',
  },
  {
    adult: false,
    backdrop_path: '/s5Dz4TsaW5jyLw5GS73jgqgwHsZ.jpg',
    genre_ids: [878, 28, 53],
    id: 426865,
    original_language: 'en',
    original_title: 'UFO',
    overview:
      'A college student, who sees a UFO, uses his exceptional math skills to investigate the sighting with his friends while the FBI follows closely behind.',
    poster_path: '/jdy1GTdaAXqhsCVOpIXokifYdCh.jpg',
    title: 'UFO',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 63.463,
      },
    ],
    release_date: '2018-09-04',
  },
  {
    adult: false,
    backdrop_path: '/hwBFGNabkGv2ZIyFUnCTSSmprf7.jpg',
    genre_ids: [27, 14],
    id: 714338,
    original_language: 'hi',
    original_title: 'Bulbbul',
    overview:
      'A child bride grows up to be an enigmatic woman presiding over her household, harboring a painful past as supernatural murders of men plague her village.',
    poster_path: '/4XYEqHqvcf6vxFhNyeKZz5xbUfV.jpg',
    title: 'Bulbbul',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 63.437,
      },
    ],
    release_date: '2020-06-24',
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [16, 35],
    id: 573164,
    original_language: 'es',
    original_title: 'Un Rescate de Huevitos',
    overview: 'Toto and Di are the parents of two beautiful eggs: Uly and Max.',
    poster_path: '/lq68Z5htr1bjPd8X0U3PBZRcUij.jpg',
    title: 'Eggs Run',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 63.424,
      },
    ],
    release_date: '2021-08-12',
  },
  {
    adult: false,
    backdrop_path: '/bDnIpQHvr9YqCeDUsa8H4oWSTOF.jpg',
    genre_ids: [27],
    id: 10585,
    original_language: 'en',
    original_title: "Child's Play",
    overview:
      'A single mother gives her son a beloved doll for his birthday, only to discover that it is possessed by the soul of a serial killer.',
    poster_path: '/wvpgvcWNkF2HLuTEMIM7K83MvZ.jpg',
    title: "Child's Play",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 63.384,
      },
    ],
    release_date: '1988-11-08',
  },
  {
    adult: false,
    backdrop_path: '/aYMvNOHPozMqpRu76EmzCH0PksC.jpg',
    genre_ids: [27, 53, 9648],
    id: 13474,
    original_language: 'en',
    original_title: 'P2',
    overview:
      'Angela, a corporate climber, gets stuck working late on Christmas Eve and finds herself the target of an unhinged security guard. With no help in sight, the woman must overcome physical and psychological challenges to survive.',
    poster_path: '/3mTtQSKoFNyvhbcqBUJl8tPRqMz.jpg',
    title: 'P2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 63.331,
      },
    ],
    release_date: '2007-11-09',
  },
  {
    adult: false,
    backdrop_path: '/a0xTB1vBxMGt6LGG4N7k1wO9lfL.jpg',
    genre_ids: [28, 12, 35],
    id: 458897,
    original_language: 'en',
    original_title: "Charlie's Angels",
    overview:
      "When a systems engineer blows the whistle on a dangerous technology, Charlie's Angels from across the globe are called into action, putting their lives on the line to protect society.",
    poster_path: '/1DPUFG6QnGqzpvEaDEv7TaepycM.jpg',
    title: "Charlie's Angels",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 123.283,
      },
    ],
    release_date: '2019-11-14',
  },
  {
    adult: false,
    backdrop_path: '/8RKBHHRqOMOLh5qW3sS6TSFTd8h.jpg',
    genre_ids: [28, 878, 12],
    id: 399579,
    original_language: 'en',
    original_title: 'Alita: Battle Angel',
    overview:
      'When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.',
    poster_path: '/xRWht48C2V8XNfzvPehyClOvDni.jpg',
    title: 'Alita: Battle Angel',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 123.093,
      },
    ],
    release_date: '2019-01-31',
  },
  {
    adult: false,
    backdrop_path: '/vam9VHLZl8tqNwkp1zjEAxIOrkk.jpg',
    genre_ids: [14, 10751, 10770],
    id: 671583,
    original_language: 'en',
    original_title: 'Upside-Down Magic',
    overview:
      'Nory and her best friend Reina enter the Sage Academy for Magical Studies, where Nory’s unconventional powers land her in a class for those with wonky, or “upside-down,” magic. Undaunted, Nory sets out to prove that that upside-down magic can be just as powerful as right-side-up.',
    poster_path: '/h9vTJ78h0SASYUxg4jV0AQ00oF2.jpg',
    title: 'Upside-Down Magic',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 123.062,
      },
    ],
    release_date: '2020-07-31',
  },
  {
    adult: false,
    backdrop_path: '/mzMCO3dArUcg1OTmjxi8oZ0FQvK.jpg',
    genre_ids: [16, 10751, 10770],
    id: 743904,
    original_language: 'en',
    original_title: 'Curious George: Go West, Go Wild',
    overview:
      "While farm-sitting, George accidentally lets the farm animals escape. Ted, George and wannabe cowboy Emmett must round 'em up, accounting for every animal -- and emerging with some new skills, to boot.",
    poster_path: '/7WWOiP8F6PHjXpJrnRZfvO2XNW.jpg',
    title: 'Curious George: Go West, Go Wild',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 122.711,
      },
    ],
    release_date: '2020-09-08',
  },
  {
    adult: false,
    backdrop_path: '/1umKVgbjFG5Cho5ZKTpcvRFJjuJ.jpg',
    genre_ids: [35, 53, 80],
    id: 609242,
    original_language: 'es',
    original_title: 'El robo del siglo',
    overview:
      'In 2006, a group of thieves performed what is considered one of the most famous and smart bank heists in the history of Argentina. How they robbed the Rio bank is as surprising as what happened afterwards. This is their story.',
    poster_path: '/acQ5lwnQGwre8n3m8JzTTcNKc5h.jpg',
    title: 'The Heist of the Century',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 122.595,
      },
    ],
    release_date: '2020-01-16',
  },
  {
    adult: false,
    backdrop_path: '/lvBBd22ywTsMYLnEOmUOzsXuM2f.jpg',
    genre_ids: [28],
    id: 608813,
    original_language: 'en',
    original_title: 'In Full Bloom',
    overview:
      'Set shortly after the end of World War II, IN FULL BLOOM is a philosophical boxing drama of two fighters from opposite worlds (USA and Japan) who are pulled together for a questionable fight arranged by their unscrupulous managers and the Yakuza.',
    poster_path: '/613YOhOiOxQMj80Relyq6ip4xsV.jpg',
    title: 'In Full Bloom',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 122.568,
      },
    ],
    release_date: '2019-06-19',
  },
  {
    adult: false,
    backdrop_path: '/ebaQIQ0Uj60Rb9qcXaz0wF5B77I.jpg',
    genre_ids: [36, 14, 18],
    id: 584044,
    original_language: 'en',
    original_title: 'The Viking War',
    overview:
      'Ingrid and her siblings are on the run from the Beserkers who have begun invading the villages, taking over, savagely using the residents on a game where they vs a Beserker, and if they win, they get to survive - only, no one ever wins. The siblings are trying to escape the Beserkers after they violently murdered and took over their town. However, the Beserkers are on their trail, and want to put them in the game.',
    poster_path: '/7BEY3dAb6ZVHzND1Ewmw2PTAl76.jpg',
    title: 'The Viking War',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.5,
      },
      {
        id: 'popularity',
        rating: 122.317,
      },
    ],
    release_date: '2019-10-15',
  },
  {
    adult: false,
    backdrop_path: '/sCtJkYwBrJm8mygRrDGyluf1gSV.jpg',
    genre_ids: [27, 878, 53],
    id: 736509,
    original_language: 'en',
    original_title: 'Intersect',
    overview:
      'A group of young Miskatonic University scientists invent a time machine, only to learn that they are being manipulated by mysterious, unseen forces from another dimension.',
    poster_path: '/e6hgmD0P133bW5EH1kfhscwXN2a.jpg',
    title: 'Intersect',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 122.016,
      },
    ],
    release_date: '2020-02-12',
  },
  {
    adult: false,
    backdrop_path: '/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg',
    genre_ids: [35, 53, 18],
    id: 496243,
    original_language: 'ko',
    original_title: '기생충',
    overview:
      "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    poster_path: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    title: 'Parasite',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.5,
      },
      {
        id: 'popularity',
        rating: 121.88,
      },
    ],
    release_date: '2019-05-30',
  },
  {
    adult: false,
    backdrop_path: '/hBIZ6RiaCWszRbdvHAy6RWHyT3c.jpg',
    genre_ids: [16, 14, 28],
    id: 118406,
    original_language: 'ja',
    original_title: 'Road to Ninja: Naruto the Movie',
    overview:
      "Sixteen years ago, a mysterious masked ninja unleashes a powerful creature known as the Nine-Tailed Demon Fox on the Hidden Leaf Village Konoha, killing many people. In response, the Fourth Hokage Minato Namikaze and his wife Kushina Uzumaki, the Demon Fox's living prison or Jinchūriki, manage to seal the creature inside their newborn son Naruto Uzumaki. With the Tailed Beast sealed, things continued as normal. However, in the present day, peace ended when a group of ninja called the Akatsuki attack Konoha under the guidance of Tobi, the mysterious masked man behind Fox's rampage years ago who intends on executing his plan to rule the world by shrouding it in illusions.",
    poster_path: '/xLal6fXNtiJN6Zw6qk21xAtdOeN.jpg',
    title: 'Naruto Shippuden the Movie: Road to Ninja',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 121.268,
      },
    ],
    release_date: '2012-07-28',
  },
  {
    adult: false,
    backdrop_path: '/afMyocyc9QHdksy5EAJW6Mm2rt4.jpg',
    genre_ids: [16, 14],
    id: 50253,
    original_language: 'ja',
    original_title: '聖闘士星矢 天界編 序奏 ~overture~',
    overview:
      "After the bloody battle against Hades, the goddess Athena and her saints are still recovering when they find themselves face to face with their newest and most formidable foe: the dreadful moon goddess Artemis. Artemis replaces Athena as the earth guardian deity and takes over the Sanctuary, turning Athena's Saints into her servants.  Upon invading the Sanctuary, the Bronze Saints learn that Athena was banished by Artemis and decide to fight the moon goddess in order to rescue their true goddess and free the Earth from Artemis's ominous control.",
    poster_path: '/gUEqAmR99OmyEPXb7wJpKtEIwLy.jpg',
    title: 'Saint Seiya Heaven Chapter: Overture',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 120.901,
      },
    ],
    release_date: '2004-02-14',
  },
  {
    adult: false,
    backdrop_path: '/xnqust9Li4oxfhXD5kcPi3UC8i4.jpg',
    genre_ids: [28, 12, 878],
    id: 99861,
    original_language: 'en',
    original_title: 'Avengers: Age of Ultron',
    overview:
      'When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.',
    poster_path: '/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg',
    title: 'Avengers: Age of Ultron',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 120.554,
      },
    ],
    release_date: '2015-04-22',
  },
  {
    adult: false,
    backdrop_path: '/gXuTcVYpn4YhYLPm69IxJAdxqtR.jpg',
    genre_ids: [35, 10749],
    id: 834500,
    original_language: 'en',
    original_title: 'Trippin’ with the Kandasamys',
    overview:
      "To rekindle their marriages, best friends-turned-in-laws Shanthi and Jennifer plan a couples' getaway. But it comes with all kinds of surprises.",
    poster_path: '/1tpuwM9fZFcMNkkGU0WwqPAEaFz.jpg',
    title: 'Trippin’ with the Kandasamys',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 120.44,
      },
    ],
    release_date: '2021-06-04',
  },
  {
    adult: false,
    backdrop_path: '/tCsYQTkQx7vknDmTw666K1XxAdx.jpg',
    genre_ids: [28, 18],
    id: 348893,
    original_language: 'en',
    original_title: 'Boyka: Undisputed IV',
    overview:
      'In the fourth installment of the fighting franchise, Boyka is shooting for the big leagues when an accidental death in the ring makes him question everything he stands for. When he finds out the wife of the man he accidentally killed is in trouble, Boyka offers to fight in a series of impossible battles to free her from a life of servitude',
    poster_path: '/7QGdIJWWTkPhVjpQ0zA6z69khod.jpg',
    title: 'Boyka: Undisputed IV',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 120.43,
      },
    ],
    release_date: '2016-08-01',
  },
  {
    adult: false,
    backdrop_path: '/TB88CYene7rzMs32FzFTLs0eU4.jpg',
    genre_ids: [10749, 35],
    id: 785539,
    original_language: 'en',
    original_title: 'Resort to Love',
    overview:
      'Aspiring pop star Erica ends up as the entertainment at her ex-fiancé’s wedding after reluctantly taking a gig at a luxurious island resort while in the wake of a music career meltdown.',
    poster_path: '/6TrkFcgCF8Vznk45rs3qvxxejiV.jpg',
    title: 'Resort to Love',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 120.203,
      },
    ],
    release_date: '2021-07-29',
  },
  {
    adult: false,
    backdrop_path: '/Abv3ZtGV2NXxPimArb3LDLg2bDH.jpg',
    genre_ids: [53, 16, 28, 35, 27, 9648],
    id: 75624,
    original_language: 'ja',
    original_title: '劇場版 NARUTO -ナルト- ブラッド・プリズン',
    overview:
      "After his capture for attempted assassination of the Raikage, leader of Kumogakure, as well as killing Jōnin from Kirigakure and Iwagakure, Naruto is imprisoned in Hōzukijou: A criminal containment facility known as the Blood Prison. Mui, the castle master, uses the ultimate imprisonment technique to steal power from the prisoners, which is when Naruto notices his life has been targeted. Thus begins the battle to uncover the truth behind the mysterious murders and prove Naruto's innocence.",
    poster_path: '/4WT7zYFpe0fsbg6TitppiHddWAh.jpg',
    title: 'Naruto Shippuden the Movie: Blood Prison',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 120.195,
      },
    ],
    release_date: '2011-07-30',
  },
  {
    adult: false,
    backdrop_path: '/ifBIpsuutQlul3Mexjw2QdkFXG4.jpg',
    genre_ids: [28, 53],
    id: 641790,
    original_language: 'en',
    original_title: 'Trauma Center',
    overview:
      "Lt. Wakes is a vengeful police detective determined to solve the murders of his partner and an informant, and joins forces with a witness injured during the shootings. After the killers pursue the witness across the abandoned floor of a hospital, she confirms Wakes's worst fears.",
    poster_path: '/8K73wvCTBA3XKgZTtOZWgENUnis.jpg',
    title: 'Trauma Center',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.7,
      },
      {
        id: 'popularity',
        rating: 120.159,
      },
    ],
    release_date: '2019-12-06',
  },
  {
    adult: false,
    backdrop_path: '/rRpAZOPY3XxMJY65AJ396IWyjU4.jpg',
    genre_ids: [16, 10751, 14],
    id: 14836,
    original_language: 'en',
    original_title: 'Coraline',
    overview:
      'When Coraline moves to an old house, she feels bored and neglected by her parents. She finds a hidden door with a bricked up passage. During the night, she crosses the passage and finds a parallel world where everybody has buttons instead of eyes, with caring parents and all her dreams coming true. When the Other Mother invites Coraline to stay in her world forever, the girl refuses and finds that the alternate reality where she is trapped is only a trick to lure her.',
    poster_path: '/gPMh5rsVrDDAYMDbTcz6Up1DQ4z.jpg',
    title: 'Coraline',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 119.939,
      },
    ],
    release_date: '2009-02-05',
  },
  {
    adult: false,
    backdrop_path: '/tHjoTxM4SMgazi3Y2X8mmAtONVL.jpg',
    genre_ids: [10751, 12, 35, 14],
    id: 621876,
    original_language: 'en',
    original_title: 'Flora & Ulysses',
    overview:
      "When Flora rescues a squirrel she names Ulysses, she is amazed to discover he possesses unique superhero powers, which take them on an adventure of humorous complications that ultimately change Flora's life--and her outlook--forever.",
    poster_path: '/syobJCxZcIJl0OpjNroZSQKa1kW.jpg',
    title: 'Flora & Ulysses',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 119.794,
      },
    ],
    release_date: '2021-02-19',
  },
  {
    adult: false,
    backdrop_path: '/3P52oz9HPQWxcwHOwxtyrVV1LKi.jpg',
    genre_ids: [28, 35, 12],
    id: 383498,
    original_language: 'en',
    original_title: 'Deadpool 2',
    overview:
      "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.",
    poster_path: '/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg',
    title: 'Deadpool 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 119.736,
      },
    ],
    release_date: '2018-05-10',
  },
  {
    adult: false,
    backdrop_path: '/jLS805N4QmLVPurQwuaCFTNEZss.jpg',
    genre_ids: [10751, 16, 12, 14],
    id: 436931,
    original_language: 'ja',
    original_title: '劇場版 ポケットモンスター キミにきめた！',
    overview:
      "Ash Ketchum wakes up late one morning after having broken his alarm clock in his sleep. He eventually makes it to Professor Oak's lab, but is told that the three starter List of Pokémon (Bulbasaur, Squirtle, and Charmander) have already been taken by Trainers who were on time. However, Oak reveals that he has one more Pokémon, an Electric-type named Pikachu. Despite its volatile and feisty personality, as well as its refusal to get inside a Poké Ball, Ash happily takes Pikachu for his journey.",
    poster_path: '/cmpOaiRtjnhLNF2iPslMXCOcVJ.jpg',
    title: 'Pokémon the Movie: I Choose You!',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 101.423,
      },
    ],
    release_date: '2017-07-15',
  },
  {
    adult: false,
    backdrop_path: '/1I8QhrrHKaxGE3e0f2S75kqrxd9.jpg',
    genre_ids: [16, 28, 878],
    id: 39106,
    original_language: 'ja',
    original_title: 'ドラゴンボールＺ 超戦士撃破!!勝のはオレだ',
    overview:
      "Jaga Bada, Mr. Satan's old sparring partner, has invited Satan to his personal island to hold a grudge match. Trunks and Goten decide to come for the adventure and Android #18 is following Satan for the money he owes her. Little do they know that Jaga Bada's scientist have found a way to resurrect Broly, the legendary Super Saiyan.",
    poster_path: '/zndqKR7TTDVWMgD0CSqARVugXoP.jpg',
    title: 'Dragon Ball Z: Bio-Broly',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 101.018,
      },
    ],
    release_date: '1994-07-09',
  },
  {
    adult: false,
    backdrop_path: '/nM1kHUIalqE2cr3el1A06yKUlha.jpg',
    genre_ids: [12, 16, 35, 14],
    id: 223702,
    original_language: 'en',
    original_title: 'Sausage Party',
    overview:
      'Frank leads a group of supermarket products on a quest to discover the truth about their existence and what really happens when they become chosen to leave the grocery store.',
    poster_path: '/6jjOY2Vgii2wbUOYNWkMLLqnpZB.jpg',
    title: 'Sausage Party',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.7,
      },
      {
        id: 'popularity',
        rating: 100.937,
      },
    ],
    release_date: '2016-07-11',
  },
  {
    adult: false,
    backdrop_path: '/1TPzecXAb5uCqmscA6WaQqKMmvV.jpg',
    genre_ids: [35],
    id: 554596,
    original_language: 'es',
    original_title: 'No Manches Frida 2',
    overview: 'Ex-con Zequi and company come back for a new adventure.',
    poster_path: '/rG7rDoTe1ZEa936eonDCkV76nkx.jpg',
    title: 'No Manches Frida 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.1,
      },
      {
        id: 'popularity',
        rating: 100.444,
      },
    ],
    release_date: '2019-03-15',
  },
  {
    adult: false,
    backdrop_path: '/obKCYv66xyqEi0aswy0A9IWHa5f.jpg',
    genre_ids: [18, 53, 28],
    id: 1372,
    original_language: 'en',
    original_title: 'Blood Diamond',
    overview:
      "An ex-mercenary turned smuggler. A Mende fisherman. Amid the explosive civil war overtaking 1999 Sierra Leone, these men join for two desperate missions: recovering a rare pink diamond of immense value and rescuing the fisherman's son, conscripted as a child soldier into the brutal rebel forces ripping a swath of torture and bloodshed countrywide.",
    poster_path: '/m6rZ3dmqjcTvVNKtqwQ6hxYQ9nk.jpg',
    title: 'Blood Diamond',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 100.048,
      },
    ],
    release_date: '2006-01-26',
  },
  {
    adult: false,
    backdrop_path: '/sLK03Ed0D8EOoqLFBjrOcYSz8Tm.jpg',
    genre_ids: [80, 53, 18],
    id: 579051,
    original_language: 'en',
    original_title: 'Silk Road',
    overview:
      'The true story of Ross Ulbricht, the charismatic young tech-mastermind who unleashed the darknet website Silk Road, and the corrupt DEA agent determined to bring down his billion-dollar empire.',
    poster_path: '/6KxiEWyIDpz1ikmD7nv3GTX4Uoj.jpg',
    title: 'Silk Road',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 99.964,
      },
    ],
    release_date: '2021-02-19',
  },
  {
    adult: false,
    backdrop_path: '/t22fWbzdnThPseipsdpwgdPOPCR.jpg',
    genre_ids: [35, 28],
    id: 726739,
    original_language: 'en',
    original_title: 'Cats & Dogs 3: Paws Unite',
    overview:
      "It's been ten years since the creation of the Great Truce, an elaborate joint-species surveillance system designed and monitored by cats and dogs to keep the peace when conflicts arise. But when a tech-savvy villain hacks into wireless networks to use frequencies only heard by cats and dogs, he manipulates them into conflict and the worldwide battle between cats and dogs is BACK ON. Now, a team of inexperienced and untested agents will have to use their old-school animal instincts to restore order and peace between cats and dogs everywhere.",
    poster_path: '/4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg',
    title: 'Cats & Dogs 3: Paws Unite',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 99.903,
      },
    ],
    release_date: '2020-10-02',
  },
  {
    adult: false,
    backdrop_path: '/kLsrE6q4ld144ECBkydZ4dV8t9T.jpg',
    genre_ids: [27],
    id: 648990,
    original_language: 'es',
    original_title: 'La casa',
    overview:
      'Responding to an urgent call for help, a police officer becomes trapped by the evil spirits of a cursed house.',
    poster_path: '/fvTGWaQejnHQBZbEOrdbb38NBTC.jpg',
    title: 'La Casa',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 99.74,
      },
    ],
    release_date: '2020-01-30',
  },
  {
    adult: false,
    backdrop_path: '/dUbtr5cXaCyFByz41ch806Omyj9.jpg',
    genre_ids: [18, 10749, 53],
    id: 796849,
    original_language: 'ja',
    original_title: '彼女',
    overview:
      "Rei helps the woman she's been in love with for years escape her abusive husband. While on the run, their feelings for each other catch fire.",
    poster_path: '/c7JzcVK4OZY1u7HYiFBOASkKPP5.jpg',
    title: 'Ride or Die',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 99.693,
      },
    ],
    release_date: '2021-04-15',
  },
  {
    adult: false,
    backdrop_path: '/eHTZoXmB4vnDqANZXPZcdAiYQo5.jpg',
    genre_ids: [16, 18, 10749, 14, 878],
    id: 667520,
    original_language: 'ja',
    original_title: '泣きたい私は猫をかぶる',
    overview:
      'Miyo "Muge" Sasaki is a peculiar second-year junior high student who has fallen in love with her classmate Kento Hinode. Muge resolutely pursues Kento every day, but he takes no notice of her. Nevertheless, while carrying a secret she can tell no one, Muge continues to pursue Kento. Muge discovers a magic mask that allows her to transform into a cat named Tarō. The magic lets Muge get close to Kento, but eventually it may also make her unable to transform back to a human.',
    poster_path: '/6inkRM1XGBG5vRhclCPWfMenp7N.jpg',
    title: 'A Whisker Away',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.1,
      },
      {
        id: 'popularity',
        rating: 99.589,
      },
    ],
    release_date: '2020-06-18',
  },
  {
    adult: false,
    backdrop_path: '/7KsqfXDECZMryX1Rv4RKsT7SIjQ.jpg',
    genre_ids: [53, 35, 80, 28],
    id: 390043,
    original_language: 'en',
    original_title: "The Hitman's Bodyguard",
    overview:
      "The world's top bodyguard gets a new client, a hit man who must testify at the International Court of Justice. They must put their differences aside and work together to make it to the trial on time.",
    poster_path: '/5CGjlz2vyBhW5xHW4eNOZIdgzYq.jpg',
    title: "The Hitman's Bodyguard",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 99.491,
      },
    ],
    release_date: '2017-08-16',
  },
  {
    adult: false,
    backdrop_path: '/fgsHxz21B27hOOqQBiw9L6yWcM7.jpg',
    genre_ids: [27, 9648, 53],
    id: 439079,
    original_language: 'en',
    original_title: 'The Nun',
    overview:
      'When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together they uncover the order’s unholy secret. Risking not only their lives but their faith and their very souls, they confront a malevolent force in the form of the same demonic nun that first terrorized audiences in “The Conjuring 2” as the abbey becomes a horrific battleground between the living and the damned.',
    poster_path: '/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg',
    title: 'The Nun',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 99.317,
      },
    ],
    release_date: '2018-09-05',
  },
  {
    adult: false,
    backdrop_path: '/bvbyidkMaBls1LTaIWYY6UmYTaL.jpg',
    genre_ids: [878, 28, 12, 53],
    id: 336843,
    original_language: 'en',
    original_title: 'Maze Runner: The Death Cure',
    overview:
      'Thomas leads his group of escaped Gladers on their final and most dangerous mission yet. To save their friends, they must break into the legendary Last City, a WCKD-controlled labyrinth that may turn out to be the deadliest maze of all. Anyone who makes it out alive will get answers to the questions the Gladers have been asking since they first arrived in the maze.',
    poster_path: '/2zYfzA3TBwrMC8tfFbpiTLODde0.jpg',
    title: 'Maze Runner: The Death Cure',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 99.243,
      },
    ],
    release_date: '2018-01-10',
  },
  {
    adult: false,
    backdrop_path: '/7jjwdoIVPJp7gcDo9uE1sVZi2Rs.jpg',
    genre_ids: [18, 10749],
    id: 296096,
    original_language: 'en',
    original_title: 'Me Before You',
    overview:
      'A small town girl is caught between dead-end jobs. A high-profile, successful man becomes wheelchair bound following an accident. The man decides his life is not worth living until the girl is hired for six months to be his new caretaker. Worlds apart and trapped together by circumstance, the two get off to a rocky start. But the girl becomes determined to prove to the man that life is worth living and as they embark on a series of adventures together, each finds their world changing in ways neither of them could begin to imagine.',
    poster_path: '/oo2Q3T8juOYFh2G1YJ3oSMAfUyq.jpg',
    title: 'Me Before You',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 99.168,
      },
    ],
    release_date: '2016-06-01',
  },
  {
    adult: false,
    backdrop_path: '/7IGKrY1f1KfwMipx9wZC4NRgIdF.jpg',
    genre_ids: [18, 10749, 53],
    id: 216015,
    original_language: 'en',
    original_title: 'Fifty Shades of Grey',
    overview:
      "When college senior Anastasia Steele steps in for her sick roommate to interview prominent businessman Christian Grey for their campus paper, little does she realize the path her life will take. Christian, as enigmatic as he is rich and powerful, finds himself strangely drawn to Ana, and she to him. Though sexually inexperienced, Ana plunges headlong into an affair -- and learns that Christian's true sexual proclivities push the boundaries of pain and pleasure.",
    poster_path: '/63kGofUkt1Mx0SIL4XI4Z5AoSgt.jpg',
    title: 'Fifty Shades of Grey',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 98.992,
      },
    ],
    release_date: '2015-02-11',
  },
  {
    adult: false,
    backdrop_path: '/eVHVwP71el20fofkCHo78ebQv7Q.jpg',
    genre_ids: [28, 12, 35, 80, 53],
    id: 343668,
    original_language: 'en',
    original_title: 'Kingsman: The Golden Circle',
    overview:
      'When an attack on the Kingsman headquarters takes place and a new villain rises, Eggsy and Merlin are forced to work together with the American agency known as the Statesman to save the world.',
    poster_path: '/34xBL6BXNYFqtHO9zhcgoakS4aP.jpg',
    title: 'Kingsman: The Golden Circle',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 98.943,
      },
    ],
    release_date: '2017-09-20',
  },
  {
    adult: false,
    backdrop_path: '/5BkSkNtfrnTuKOtTaZhl8avn4wU.jpg',
    genre_ids: [14, 28, 12, 878],
    id: 456740,
    original_language: 'en',
    original_title: 'Hellboy',
    overview:
      "Hellboy comes to England, where he must defeat Nimue, Merlin's consort and the Blood Queen. But their battle will bring about the end of the world, a fate he desperately tries to turn away.",
    poster_path: '/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg',
    title: 'Hellboy',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.5,
      },
      {
        id: 'popularity',
        rating: 98.942,
      },
    ],
    release_date: '2019-04-10',
  },
  {
    adult: false,
    backdrop_path: '/xgDj56UWyeWQcxQ44f5A3RTWuSs.jpg',
    genre_ids: [16, 35, 10751, 14],
    id: 2062,
    original_language: 'en',
    original_title: 'Ratatouille',
    overview:
      "Remy, a resident of Paris, appreciates good food and has quite a sophisticated palate. He would love to become a chef so he can create and enjoy culinary masterpieces to his heart's delight. The only problem is, Remy is a rat. When he winds up in the sewer beneath one of Paris' finest restaurants, the rodent gourmet finds himself ideally placed to realize his dream.",
    poster_path: '/npHNjldbeTHdKKw28bJKs7lzqzj.jpg',
    title: 'Ratatouille',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 98.907,
      },
    ],
    release_date: '2007-06-28',
  },
  {
    adult: false,
    backdrop_path: '/aJn9XeesqsrSLKcHfHP4u5985hn.jpg',
    genre_ids: [12, 28, 878, 35],
    id: 283995,
    original_language: 'en',
    original_title: 'Guardians of the Galaxy Vol. 2',
    overview:
      "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
    poster_path: '/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg',
    title: 'Guardians of the Galaxy Vol. 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 98.876,
      },
    ],
    release_date: '2017-04-19',
  },
  {
    adult: false,
    backdrop_path: '/muth4OYamXf41G2evdrLEg8d3om.jpg',
    genre_ids: [14, 28],
    id: 557,
    original_language: 'en',
    original_title: 'Spider-Man',
    overview:
      'After being bitten by a genetically altered spider, nerdy high school student Peter Parker is endowed with amazing powers to become the Amazing superhero known as Spider-Man.',
    poster_path: '/fwoETElxZqiF3it8F4HitSliXqp.jpg',
    title: 'Spider-Man',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 98.661,
      },
    ],
    release_date: '2002-05-01',
  },
  {
    adult: false,
    backdrop_path: '/aiM3XxYE2JvW1vJ4AC6cI1RjAoT.jpg',
    genre_ids: [28, 80, 53],
    id: 438650,
    original_language: 'en',
    original_title: 'Cold Pursuit',
    overview:
      "The quiet family life of Nels Coxman, a snowplow driver, is upended after his son's murder. Nels begins a vengeful hunt for Viking, the drug lord he holds responsible for the killing, eliminating Viking's associates one by one. As Nels draws closer to Viking, his actions bring even more unexpected and violent consequences, as he proves that revenge is all in the execution.",
    poster_path: '/hXgmWPd1SuujRZ4QnKLzrj79PAw.jpg',
    title: 'Cold Pursuit',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.7,
      },
      {
        id: 'popularity',
        rating: 108.228,
      },
    ],
    release_date: '2019-02-07',
  },
  {
    adult: false,
    backdrop_path: '/ygWKYTu7OnZKF9H5NsgjL9iURGV.jpg',
    genre_ids: [28, 53, 80],
    id: 480042,
    original_language: 'en',
    original_title: 'Escape Plan: The Extractors',
    overview:
      "After security expert Ray Breslin is hired to rescue the kidnapped daughter of a Hong Kong tech mogul from a formidable Latvian prison, Breslin's girlfriend is also captured. Now he and his team must pull off a deadly rescue mission to confront their sadistic foe and save the hostages before time runs out.",
    poster_path: '/r15SUgzjL8bablcdEkHk9T7TSRl.jpg',
    title: 'Escape Plan: The Extractors',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.2,
      },
      {
        id: 'popularity',
        rating: 107.481,
      },
    ],
    release_date: '2019-06-20',
  },
  {
    adult: false,
    backdrop_path: '/dsdbViTNjLu4DbgkkYmuY4xDQ20.jpg',
    genre_ids: [27, 53, 9648, 28, 878],
    id: 585216,
    original_language: 'en',
    original_title: 'Escape Room: Tournament of Champions',
    overview:
      "Six people unwittingly find themselves locked in another series of escape rooms, slowly uncovering what they have in common to survive as they discover all the games that they've played before.",
    poster_path: '/jGYJyPzVgrVV2bgClI9uvEZgVLE.jpg',
    title: 'Escape Room: Tournament of Champions',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 107.25,
      },
    ],
    release_date: '2021-07-01',
  },
  {
    adult: false,
    backdrop_path: '/sDnsobefVmEd7Eh8IoV79bvNcc7.jpg',
    genre_ids: [12, 16],
    id: 366170,
    original_language: 'ja',
    original_title: '遊☆戯☆王 THE DARK SIDE OF DIMENSIONS',
    overview: 'Yugi and Kaiba have a special duel that transcends dimensions.',
    poster_path: '/nFQkn1KE0Is3FUW0yPPgdVvCnlo.jpg',
    title: 'Yu-Gi-Oh!: The Dark Side of Dimensions',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 107.195,
      },
    ],
    release_date: '2016-04-23',
  },
  {
    adult: false,
    backdrop_path: '/lvNQKZUsw7pg79CROCFlIk8PT67.jpg',
    genre_ids: [12, 878, 16, 14, 27],
    id: 627661,
    original_language: 'en',
    original_title: 'Cranston Academy: Monster Zone',
    overview:
      'An intelligent 15-year-old high school student is unexpectedly transferred to a boarding school where he opens a portal of monsters from another dimension.',
    poster_path: '/maBFNvaxae6IgLL4qwz7hvz19EZ.jpg',
    title: 'Cranston Academy: Monster Zone',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 106.734,
      },
    ],
    release_date: '2020-04-29',
  },
  {
    adult: false,
    backdrop_path: '/h0IMyviDhX9QsRrhquuTejmjxPC.jpg',
    genre_ids: [53, 27],
    id: 675490,
    original_language: 'en',
    original_title: 'The Unfamiliar',
    overview:
      'A British Army doctor comes back from a war, thinking that she has PTSD only to discover that there is a more daunting malevolence at work making the life that she knew unfamiliar.',
    poster_path: '/Xt37loPwHjipC1qaCbfLfDcFu4.jpg',
    title: 'The Unfamiliar',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 106.591,
      },
    ],
    release_date: '2020-08-21',
  },
  {
    adult: false,
    backdrop_path: '/skvI4rYFrKXS73BJxWGH54Omlvv.jpg',
    genre_ids: [10751, 14, 12],
    id: 420809,
    original_language: 'en',
    original_title: 'Maleficent: Mistress of Evil',
    overview:
      'Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.',
    poster_path: '/vloNTScJ3w7jwNwtNGoG8DbTThv.jpg',
    title: 'Maleficent: Mistress of Evil',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 106.435,
      },
    ],
    release_date: '2019-10-16',
  },
  {
    adult: false,
    backdrop_path: '/3SrCDYkkibQ97zjdvf0NhTLTe3I.jpg',
    genre_ids: [28, 9648, 53, 878],
    id: 500921,
    original_language: 'en',
    original_title: 'Between Worlds',
    overview:
      "Joe—a down-on-his-luck truck driver haunted by the memory of his deceased wife and child—meets Julie, a spiritually gifted woman who enlists his help in a desperate effort to find the lost soul of her comatose daughter. But the spirit of Joe's dead wife proves stronger, possessing the young woman's body and determined to settle her unfinished business with the living.",
    poster_path: '/r4YPeaIEYdhRrBFbeMVyQCnMirH.jpg',
    title: 'Between Worlds',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.2,
      },
      {
        id: 'popularity',
        rating: 106.295,
      },
    ],
    release_date: '2018-12-21',
  },
  {
    adult: false,
    backdrop_path: '/rwI1slpd0wG9cmpNFqjgu7MHj8A.jpg',
    genre_ids: [16, 35, 10751, 14],
    id: 14248,
    original_language: 'en',
    original_title: 'Igor',
    overview:
      "A cliché hunchbacked evil scientist's assistant aspires to become a scientist himself, much to the displeasure of the rest of the evil science community.",
    poster_path: '/mI4SPs0bZQm7bGVZKToC8KUsTd.jpg',
    title: 'Igor',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 105.615,
      },
    ],
    release_date: '2008-09-19',
  },
  {
    adult: false,
    backdrop_path: '/7m8zy0eJ0d0JmEyOkC2fSx1KbYU.jpg',
    genre_ids: [12, 14],
    id: 428045,
    original_language: 'ru',
    original_title: 'Тайна печати Дракона',
    overview:
      'The Russian Czar Peter the Great commissions Jonathan Green, an English traveller, to map the Far East territories of the Russian Empire. Green sets off on yet another long journey, full of unbelievable adventures, which eventually leads him to China. On his way, the famous cartographer makes breath-taking discoveries, meets mysterious creatures, Chinese princesses, deadly masters of oriental martial arts, and even Lun Van, the King of Dragons, himself. What could be more perilous than looking into the eyes of Viy? Only meeting him again… What will prevail this time — the unflinching scepticism of the scientist or ancient black magic, which has already gained influence over the Far East Lands?',
    poster_path: '/mgM67qwgZgsvnxUBkE4TzzbiDUS.jpg',
    title: 'Iron Mask',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 105.356,
      },
    ],
    release_date: '2019-08-16',
  },
  {
    adult: false,
    backdrop_path: '/9il7qNbeYnPMYlutsVYDsj4hRyb.jpg',
    genre_ids: [18],
    id: 480530,
    original_language: 'en',
    original_title: 'Creed II',
    overview:
      "Between personal obligations and training for his next big fight against an opponent with ties to his family's past, Adonis Creed is up against the challenge of his life.",
    poster_path: '/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg',
    title: 'Creed II',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 104.487,
      },
    ],
    release_date: '2018-11-21',
  },
  {
    adult: false,
    backdrop_path: '/6P3c80EOm7BodndGBUAJHHsHKrp.jpg',
    genre_ids: [28, 12, 878],
    id: 363088,
    original_language: 'en',
    original_title: 'Ant-Man and the Wasp',
    overview:
      'Just when his time under house arrest is about to end, Scott Lang once again puts his freedom at risk to help Hope van Dyne and Dr. Hank Pym dive into the quantum realm and try to accomplish, against time and any chance of success, a very dangerous rescue mission.',
    poster_path: '/eivQmS3wqzqnQWILHLc4FsEfcXP.jpg',
    title: 'Ant-Man and the Wasp',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 103.796,
      },
    ],
    release_date: '2018-07-04',
  },
  {
    adult: false,
    backdrop_path: '/cFVgXPmF8UMGH67roYd4e3QaAHP.jpg',
    genre_ids: [878, 28, 80, 16],
    id: 655431,
    original_language: 'ja',
    original_title: 'PSYCHO-PASS サイコパス 3 FIRST INSPECTOR',
    overview:
      'Inspector Kei Mikhail Ignatov finds himself involved with an organization named Bifrost with the possibility of freeing his wife if he betrays Unit One. Koichi Azusawa coordinates an assault on the Public Safety Bureau tower using his hacker Obata, locking down the building and kidnapping Inspector Arata Shindo. Azusawa demands that governor Karina Komiya resign from her position.',
    poster_path: '/m2RzGRMbdMUcp8S3PYtlPpHa83g.jpg',
    title: 'Psycho-Pass 3: First Inspector',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 103.628,
      },
    ],
    release_date: '2020-03-27',
  },
  {
    adult: false,
    backdrop_path: '/a8ppJJIQmEJcLSFfhxupc4aT4KW.jpg',
    genre_ids: [18, 28, 53],
    id: 571785,
    original_language: 'ko',
    original_title: '사냥의 시간',
    overview:
      'Four young men want to leave their dystopian world behind and go to a distant paradise to execute a money robbery, a daring act that will have unexpected consequences.',
    poster_path: '/bkuuvDoPkOJpg0ZDzHkUWt8ZG5A.jpg',
    title: 'Time to Hunt',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 103.531,
      },
    ],
    release_date: '2020-02-22',
  },
  {
    adult: false,
    backdrop_path: '/AglvRe4XNrV8livEMocj7jFkxtT.jpg',
    genre_ids: [37, 16, 12, 35, 10751, 18],
    id: 9023,
    original_language: 'en',
    original_title: 'Spirit: Stallion of the Cimarron',
    overview:
      'As a wild stallion travels across the frontiers of the Old West, he befriends a young human and finds true love with a mare.',
    poster_path: '/cUgYrz4twiJ3QgVGpRfey984NIB.jpg',
    title: 'Spirit: Stallion of the Cimarron',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 102.746,
      },
    ],
    release_date: '2002-05-24',
  },
  {
    adult: false,
    backdrop_path: '/aBvw8qYDMmbyU4ttzWSfiTxeICG.jpg',
    genre_ids: [35],
    id: 557940,
    original_language: 'es',
    original_title: 'Las Pildoras de mi Novio',
    overview:
      "A Woman's island getaway with her boyfriend is thrown for a loop when he forgets to take his prescription medications along.",
    poster_path: '/hVSOXCBuPXw8yXqbNfwU9ogIp88.jpg',
    title: "My Boyfriend's Meds",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 102.395,
      },
    ],
    release_date: '2020-02-14',
  },
  {
    adult: false,
    backdrop_path: '/cWUOv3H7YFwvKeaQhoAQTLLpo9Z.jpg',
    genre_ids: [80, 18, 35],
    id: 106646,
    original_language: 'en',
    original_title: 'The Wolf of Wall Street',
    overview:
      "A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, corporate banking world and mob infiltration. Based on Jordan Belfort's autobiography.",
    poster_path: '/pWHf4khOloNVfCxscsXFj3jj6gP.jpg',
    title: 'The Wolf of Wall Street',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8,
      },
      {
        id: 'popularity',
        rating: 102.307,
      },
    ],
    release_date: '2013-12-25',
  },
  {
    adult: false,
    backdrop_path: '/bSvUW4JQ6g4QiKvwejcfcPRd4Ke.jpg',
    genre_ids: [12, 35, 10751, 14],
    id: 118,
    original_language: 'en',
    original_title: 'Charlie and the Chocolate Factory',
    overview:
      "A young boy wins a tour through the most magnificent chocolate factory in the world, led by the world's most unusual candy maker.",
    poster_path: '/wfGfxtBkhBzQfOZw4S8IQZgrH0a.jpg',
    title: 'Charlie and the Chocolate Factory',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 102.159,
      },
    ],
    release_date: '2005-07-13',
  },
  {
    adult: false,
    backdrop_path: '/yIDS5QLvKtgzfu43eUWx5JkGW6p.jpg',
    genre_ids: [16, 28, 878],
    id: 126963,
    original_language: 'ja',
    original_title: 'ドラゴンボールZ 神と神',
    overview:
      'The events of Battle of Gods take place some years after the battle with Majin Buu, which determined the fate of the entire universe. After awakening from a long slumber, Beerus, the God of Destruction is visited by Whis, his attendant and learns that the galactic overlord Frieza has been defeated by a Super Saiyan from the North Quadrant of the universe named Goku, who is also a former student of the North Kai. Ecstatic over the new challenge, Goku ignores King Kai\'s advice and battles Beerus, but he is easily overwhelmed and defeated. Beerus leaves, but his eerie remark of "Is there nobody on Earth more worthy to destroy?" lingers on. Now it is up to the heroes to stop the God of Destruction before all is lost.',
    poster_path: '/nxZEdYcHMuD8SSuwusDnK9CD2H1.jpg',
    title: 'Dragon Ball Z: Battle of Gods',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 102.142,
      },
    ],
    release_date: '2013-03-30',
  },
  {
    adult: false,
    backdrop_path: '/4s2d3xdyqotiVNHTlTlJjrr3q0H.jpg',
    genre_ids: [12, 10751, 16, 28, 35],
    id: 177572,
    original_language: 'en',
    original_title: 'Big Hero 6',
    overview:
      'A special bond develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.',
    poster_path: '/2mxS4wUimwlLmI1xp6QW6NSU361.jpg',
    title: 'Big Hero 6',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 101.79,
      },
    ],
    release_date: '2014-10-24',
  },
  {
    adult: false,
    backdrop_path: '/7cQKUEcRkw2EeK7KDn8eRqS3XkC.jpg',
    genre_ids: [27, 14, 9648, 53],
    id: 504631,
    original_language: 'en',
    original_title: 'Mermaid Down',
    overview:
      "A mermaid is ripped from the Pacific, her tail is chopped off and she's thrown into a mental home where no one believes she is a mermaid.",
    poster_path: '/ag1m3lVUatlJ4EspOYPkhm2SRYr.jpg',
    title: 'Mermaid Down',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 65.498,
      },
    ],
    release_date: '2019-10-15',
  },
  {
    adult: false,
    backdrop_path: '/vEGSvemhKZGG2sX00AoqEFF2jAZ.jpg',
    genre_ids: [18],
    id: 409502,
    original_language: 'en',
    original_title: "I'm Not Ashamed",
    overview:
      'Based on the inspiring and powerful true story and journal entries of Rachel Joy Scott- the first student killed in the Columbine High School shooting in 1999.',
    poster_path: '/P4bxuNq5XT0Wc3MYpoLP52e0P6.jpg',
    title: "I'm Not Ashamed",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 65.496,
      },
    ],
    release_date: '2016-10-21',
  },
  {
    adult: false,
    backdrop_path: '/lyt9DYP0Suy1j8XnjJl0saVOs8K.jpg',
    genre_ids: [12, 16, 10751, 35, 878],
    id: 278154,
    original_language: 'en',
    original_title: 'Ice Age: Collision Course',
    overview:
      "Set after the events of Continental Drift, Scrat's epic pursuit of his elusive acorn catapults him outside of Earth, where he accidentally sets off a series of cosmic events that transform and threaten the planet. To save themselves from peril, Manny, Sid, Diego, and the rest of the herd leave their home and embark on a quest full of thrills and spills, highs and lows, laughter and adventure while traveling to exotic new lands and encountering a host of colorful new characters.",
    poster_path: '/mSR0AjQaZ3mIx77h2vC5ZR7KDwO.jpg',
    title: 'Ice Age: Collision Course',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 65.448,
      },
    ],
    release_date: '2016-06-23',
  },
  {
    adult: false,
    backdrop_path: '/xiw4mTeahSbFMUgxapE9lfrBTUd.jpg',
    genre_ids: [10749, 35],
    id: 454619,
    original_language: 'en',
    original_title: 'Overboard',
    overview:
      'A spoiled, wealthy yacht owner is thrown overboard and becomes the target of revenge from his mistreated employee.',
    poster_path: '/41Rzkgo9y7n6BNGD6O8j0LVs8Yu.jpg',
    title: 'Overboard',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 65.304,
      },
    ],
    release_date: '2018-05-03',
  },
  {
    adult: false,
    backdrop_path: '/jJUK0IKdVvsTONsCVTVHQkEn7bZ.jpg',
    genre_ids: [9648, 878, 53],
    id: 530382,
    original_language: 'en',
    original_title: 'In the Shadow of the Moon',
    overview:
      'In 1988, Philadelphia police officer Thomas "Locke" Lockhart, hungry to become a detective, begins tracking a serial killer whose crimes defy scientific explanation. When the killer mysteriously resurfaces nine years later, Locke\'s obsession with finding the truth threatens to destroy his career, his family, and possibly his sanity.',
    poster_path: '/5DSVYlKwEzGBxTkS95L73c3oxLs.jpg',
    title: 'In the Shadow of the Moon',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 65.261,
      },
    ],
    release_date: '2019-09-27',
  },
  {
    adult: false,
    backdrop_path: '/1xQtvgay8rDwSaZPwyhcecqV8UD.jpg',
    genre_ids: [35, 10749],
    id: 582596,
    original_language: 'en',
    original_title: 'The Wrong Missy',
    overview:
      "A guy meets the woman of his dreams and invites her to his company's corporate retreat, but realizes he sent the invite to the wrong person.",
    poster_path: '/A2YlIrzypvhS3vTFMcDkG3xLvac.jpg',
    title: 'The Wrong Missy',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 65.194,
      },
    ],
    release_date: '2020-05-13',
  },
  {
    adult: false,
    backdrop_path: '/70Y5eqstTp93sF2ivb3mkEqLCEi.jpg',
    genre_ids: [9648, 12, 35],
    id: 9637,
    original_language: 'en',
    original_title: 'Scooby-Doo',
    overview:
      'The Mystery Inc. gang have gone their separate ways and have been apart for two years, until they each receive an invitation to Spooky Island. Not knowing that the others have also been invited, they show up and discover an amusement park that affects young visitors in very strange ways.',
    poster_path: '/98zsG0FX7z6R4i5q0HONLM21dpt.jpg',
    title: 'Scooby-Doo',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 65.192,
      },
    ],
    release_date: '2002-06-14',
  },
  {
    adult: false,
    backdrop_path: '/i25Qs826elaSSBrAtJMVO3mfuZB.jpg',
    genre_ids: [16, 10751],
    id: 38757,
    original_language: 'en',
    original_title: 'Tangled',
    overview:
      "When the kingdom's most wanted-and most charming-bandit Flynn Rider hides out in a mysterious tower, he's taken hostage by Rapunzel, a beautiful and feisty tower-bound teen with 70 feet of magical, golden hair. Flynn's curious captor, who's looking for her ticket out of the tower where she's been locked away for years, strikes a deal with the handsome thief and the unlikely duo sets off on an action-packed escapade, complete with a super-cop horse, an over-protective chameleon and a gruff gang of pub thugs.",
    poster_path: '/ym7Kst6a4uodryxqbGOxmewF235.jpg',
    title: 'Tangled',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 65.105,
      },
    ],
    release_date: '2010-11-24',
  },
  {
    adult: false,
    backdrop_path: '/9Ef8abhHjuqyCNlhscEohNXsLJj.jpg',
    genre_ids: [35],
    id: 554590,
    original_language: 'es',
    original_title: 'Tod@s Caen',
    overview:
      'A pair of seducers try to prove who has the best techniques while trying not to fall in love with each other.',
    poster_path: '/maqsygPJvhESIOQGclUAEEWxNC.jpg',
    title: 'Tod@s Caen',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 65.091,
      },
    ],
    release_date: '2019-08-30',
  },
  {
    adult: false,
    backdrop_path: '/bLJTjfbZ1c5zSNiAvGYs1Uc82ir.jpg',
    genre_ids: [28, 12, 14],
    id: 338970,
    original_language: 'en',
    original_title: 'Tomb Raider',
    overview:
      'Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.',
    poster_path: '/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg',
    title: 'Tomb Raider',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 64.955,
      },
    ],
    release_date: '2018-03-05',
  },
  {
    adult: false,
    backdrop_path: '/4QGrZLj7cAuHu53hJbnap5PT6ER.jpg',
    genre_ids: [27, 9648, 80],
    id: 176,
    original_language: 'en',
    original_title: 'Saw',
    overview:
      'Obsessed with teaching his victims the value of life, a deranged, sadistic serial killer abducts the morally wayward. Once captured, they must face impossible choices in a horrific game of survival. The victims must fight to win their lives back, or die trying...',
    poster_path: '/pparEGTCxcTiImyVFoKD0LX11N8.jpg',
    title: 'Saw',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 64.909,
      },
    ],
    release_date: '2004-10-01',
  },
  {
    adult: false,
    backdrop_path: '/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg',
    genre_ids: [18, 80],
    id: 238,
    original_language: 'en',
    original_title: 'The Godfather',
    overview:
      'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
    poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    title: 'The Godfather',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.7,
      },
      {
        id: 'popularity',
        rating: 64.862,
      },
    ],
    release_date: '1972-03-14',
  },
  {
    adult: false,
    backdrop_path: '/uo4KdQ8nfUw2xLTMP2PO1UCmzWq.jpg',
    genre_ids: [16, 28],
    id: 189349,
    original_language: 'ja',
    original_title: '炎の中忍試験! ナルトvs木ノ葉丸!!',
    overview:
      'Naruto faces off against his old pupil Konohamaru in a tournament during the chuunin entrance exams.',
    poster_path: '/9gjBGyDOd20GOqXOZxQd6E3MlUg.jpg',
    title: 'Chunin Exam on Fire! and Naruto vs. Konohamaru!',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 64.856,
      },
    ],
    release_date: '2011-07-30',
  },
  {
    adult: false,
    backdrop_path: '/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg',
    genre_ids: [16, 10751, 14],
    id: 129,
    original_language: 'ja',
    original_title: '千と千尋の神隠し',
    overview:
      'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.',
    poster_path: '/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
    title: 'Spirited Away',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.5,
      },
      {
        id: 'popularity',
        rating: 64.51,
      },
    ],
    release_date: '2001-07-20',
  },
  {
    adult: false,
    backdrop_path: '/sxPycUAaLJJGq2lhhgzR96ePaO0.jpg',
    genre_ids: [878],
    id: 645541,
    original_language: 'en',
    original_title: 'Ellipse',
    overview:
      'A man and his dog are stranded on a volatile, oval-shaped planet and are forced to adapt and escape before time destroys them both.',
    poster_path: '/4I0CQfnMy6sRR7QhgqsXR16TmIs.jpg',
    title: 'Ellipse',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.1,
      },
      {
        id: 'popularity',
        rating: 64.395,
      },
    ],
    release_date: '2019-12-12',
  },
  {
    adult: false,
    backdrop_path: '/nMKfeFtE9bML6yjdcymrt5vtaNz.jpg',
    genre_ids: [12, 16, 10751],
    id: 10009,
    original_language: 'en',
    original_title: 'Brother Bear',
    overview:
      "When an impulsive boy named Kenai is magically transformed into a bear, he must literally walk in another's footsteps until he learns some valuable life lessons. His courageous and often zany journey introduces him to a forest full of wildlife, including the lovable bear cub Koda, hilarious moose Rutt and Tuke, woolly mammoths and rambunctious rams.",
    poster_path: '/9VvLgj28J5m04y5gO0mt5np4yF8.jpg',
    title: 'Brother Bear',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 64.347,
      },
    ],
    release_date: '2003-10-23',
  },
  {
    adult: false,
    backdrop_path: '/8kt6eGNajaW3tbpzpGfxzAzd1df.jpg',
    genre_ids: [99],
    id: 838305,
    original_language: 'es',
    original_title: 'Seve',
    overview:
      'The story of the late great master of golf Severiano Ballesteros, told by his brothers and contemporary players.',
    poster_path: '/l18c2o2osANsXSvc8LX8kqIBJfU.jpg',
    title: 'Seve',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 2,
      },
      {
        id: 'popularity',
        rating: 64.321,
      },
    ],
    release_date: '2021-06-04',
  },
  {
    adult: false,
    backdrop_path: '/5GbkL9DDRzq3A21nR7Gkv6cFGjq.jpg',
    genre_ids: [35, 18, 10749],
    id: 556678,
    original_language: 'en',
    original_title: 'Emma.',
    overview:
      'In 1800s England, a well-meaning but selfish young woman meddles in the love lives of her friends.',
    poster_path: '/uHpHzbHLSsVmAuuGuQSpyVDZmDc.jpg',
    title: 'Emma.',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 64.31,
      },
    ],
    release_date: '2020-02-13',
  },
  {
    adult: false,
    backdrop_path: '/1WDITmJAHz4rAnjVv1XYN4IfjKq.jpg',
    genre_ids: [27],
    id: 593655,
    original_language: 'en',
    original_title: 'Castle Freak',
    overview:
      'After she’s permanently blinded in a tragic car accident, Rebecca receives some bizarre news: her long-lost mother has recently passed away, leaving her their family’s ancestral castle in rural Albania. Traveling to the estate with a group of friends, Rebecca hopes it will be an opportunity for her to reconnect with a past she never knew and a mother who seemingly left her behind. When mysterious events begin to occur and her friends begin to die, Rebecca must unravel the secrets of her family’s history before she too falls prey to the Castle Freak.',
    poster_path: '/HJEosQRIdBzAHEdZJCUF7e5FmF.jpg',
    title: 'Castle Freak',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5,
      },
      {
        id: 'popularity',
        rating: 64.298,
      },
    ],
    release_date: '2020-12-04',
  },
  {
    adult: false,
    backdrop_path: '/gioXMobK8vbD6bcTsjKYKfgacNt.jpg',
    genre_ids: [12, 14, 28],
    id: 49051,
    original_language: 'en',
    original_title: 'The Hobbit: An Unexpected Journey',
    overview:
      'Bilbo Baggins, a hobbit enjoying his quiet life, is swept into an epic quest by Gandalf the Grey and thirteen dwarves who seek to reclaim their mountain home from Smaug, the dragon.',
    poster_path: '/yHA9Fc37VmpUA5UncTxxo3rTGVA.jpg',
    title: 'The Hobbit: An Unexpected Journey',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 64.181,
      },
    ],
    release_date: '2012-11-26',
  },
  {
    adult: false,
    backdrop_path: '/PwI3EfasE9fVuXsmMu9ffJh0Re.jpg',
    genre_ids: [27, 9648, 53],
    id: 406563,
    original_language: 'en',
    original_title: 'Insidious: The Last Key',
    overview:
      'Parapsychologist Elise Rainier and her team travel to Five Keys, NM, to investigate a man’s claim of a haunting. Terror soon strikes when Rainier realizes that the house he lives in was her family’s old home.',
    poster_path: '/nb9fc9INMg8kQ8L7sE7XTNsZnUX.jpg',
    title: 'Insidious: The Last Key',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 52.432,
      },
    ],
    release_date: '2018-01-03',
  },
  {
    adult: false,
    backdrop_path: '/4NdAMnBwSAaSsUjoXkcU5aW28RF.jpg',
    genre_ids: [28, 80, 53],
    id: 273481,
    original_language: 'en',
    original_title: 'Sicario',
    overview:
      'An idealistic FBI agent is enlisted by a government task force to aid in the escalating war against drugs at the border area between the U.S. and Mexico.',
    poster_path: '/tw0lXhbNkklvseuJ4aYldkVyXV7.jpg',
    title: 'Sicario',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 52.383,
      },
    ],
    release_date: '2015-09-17',
  },
  {
    adult: false,
    backdrop_path: '/cxeYjWtq97AwqMMlGhWWYSy5uci.jpg',
    genre_ids: [10751, 14, 16, 35],
    id: 459159,
    original_language: 'en',
    original_title: 'Hotel Transylvania: Puppy!',
    overview:
      'The residents of Hotel Transylvania find their world turned upside-down when youngster Dennis gets a surprise monster-sized pet.',
    poster_path: '/sNxIazoQqDQukfQqkYxTgx9DRbu.jpg',
    title: 'Hotel Transylvania: Puppy!',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 52.38,
      },
    ],
    release_date: '2017-07-28',
  },
  {
    adult: false,
    backdrop_path: '/irpJXGiVr539uuspcQcNdkhS2lq.jpg',
    genre_ids: [16, 28, 35, 10751, 878],
    id: 38055,
    original_language: 'en',
    original_title: 'Megamind',
    overview:
      'Bumbling supervillain Megamind finally defeats his nemesis, the superhero Metro Man. But without a hero, he loses all purpose and must find new meaning to his life.',
    poster_path: '/uZ9ytt3sPTx62XTfN56ILSuYWRe.jpg',
    title: 'Megamind',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 52.365,
      },
    ],
    release_date: '2010-10-28',
  },
  {
    adult: false,
    backdrop_path: '/nKM71iyHoXG2DUBXml0mNwPChvg.jpg',
    genre_ids: [10749, 10770, 35],
    id: 647325,
    original_language: 'en',
    original_title: 'The Thing About Harry',
    overview:
      "Two high school enemies, uber-jock Harry and out-and-proud Sam, are forced to share a car ride to their Missouri hometown for a friend's engagement party on Valentine's Day. Things take a turn when Sam learns Harry has come out.",
    poster_path: '/sdn5NdFMcsub3QUwlovOA9fPJoW.jpg',
    title: 'The Thing About Harry',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 52.341,
      },
    ],
    release_date: '2020-02-15',
  },
  {
    adult: false,
    backdrop_path: '/iSMUo3G248S8rwbTMkZXVKSPbY5.jpg',
    genre_ids: [35, 27],
    id: 184345,
    original_language: 'en',
    original_title: 'A Haunted House 2',
    overview:
      'After exorcising the demons of his ex-, Malcolm starts afresh with his new girlfriend and her two children. After moving into their dream home, Malcolm is once again plagued by bizarre paranormal events.',
    poster_path: '/gzwZYGnp4c4iO6yMw4pCxyJ4rMm.jpg',
    title: 'A Haunted House 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 52.313,
      },
    ],
    release_date: '2014-04-17',
  },
  {
    adult: false,
    backdrop_path: '/1vdEUx5sZi2leQOefOV0h2c9LYs.jpg',
    genre_ids: [16, 10751, 12, 14],
    id: 10693,
    original_language: 'en',
    original_title: 'Peter Pan',
    overview:
      'Leaving the safety of their nursery behind, Wendy, Michael and John follow Peter Pan to a magical world where childhood lasts forever. But while in Neverland, the kids must face Captain Hook and foil his attempts to get rid of Peter for good.',
    poster_path: '/6UTZmeQcxbtW32MyR5nKIx7ID4f.jpg',
    title: 'Peter Pan',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 52.313,
      },
    ],
    release_date: '1953-02-05',
  },
  {
    adult: false,
    backdrop_path: '/n6rv1hySg2Ie0UyJENwnnJWb3no.jpg',
    genre_ids: [28, 16, 12],
    id: 575249,
    original_language: 'ja',
    original_title: 'Dragon Ball Z: The Real 4-D at 超天下一武道会',
    overview:
      'Dragon Ball Z: The Real 4-D at Super Tenkaichi Budoka is a cinematic attraction at Universal Studios Japan and the successor to Dragon Ball Z: The Real 4-D. Like its predecessor, it is a new installment in the Dragon Ball series, this time primarily featuring the face off between Super Saiyan Blue Goku and Broly God.',
    poster_path: '/bsML7r1iijCiGjowbcUfsgtrUWH.jpg',
    title: 'Dragon Ball Z: The Real 4-D at Super Tenkaichi Budokai',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 52.311,
      },
    ],
    release_date: '2017-06-30',
  },
  {
    adult: false,
    backdrop_path: '/ob8w7gQNV4uL43fCGbD6y89rpDn.jpg',
    genre_ids: [53, 28],
    id: 595985,
    original_language: 'fr',
    original_title: 'Cold Blood Legacy - La mémoire du sang',
    overview:
      "A legendary but retired hit man lives in peace and isolation in the barren North American wilderness. When he rescues a woman from a snowmobiling accident, he soon discovers that she's harboring a secret that forces him to return to his lethal ways.",
    poster_path: '/uGMIxhhMvQEE0mNlATXpEAG4mgl.jpg',
    title: 'Cold Blood',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.3,
      },
      {
        id: 'popularity',
        rating: 52.307,
      },
    ],
    release_date: '2019-05-15',
  },
  {
    adult: false,
    backdrop_path: '/npCPnwDyWfQltGfIZKN6WqeUXGI.jpg',
    genre_ids: [14, 12, 28],
    id: 57158,
    original_language: 'en',
    original_title: 'The Hobbit: The Desolation of Smaug',
    overview:
      'The Dwarves, Bilbo and Gandalf have successfully escaped the Misty Mountains, and Bilbo has gained the One Ring. They all continue their journey to get their gold back from the Dragon, Smaug.',
    poster_path: '/xQYiXsheRCDBA39DOrmaw1aSpbk.jpg',
    title: 'The Hobbit: The Desolation of Smaug',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 52.295,
      },
    ],
    release_date: '2013-12-11',
  },
  {
    adult: false,
    backdrop_path: '/4EtSV3LmwHQSlmAeyn9pJ3ANtC8.jpg',
    genre_ids: [28],
    id: 513691,
    original_language: 'en',
    original_title: 'The Debt Collector',
    overview:
      'A classically-trained martial artist goes to work as a debt collector for the mob. The job seems easy enough, until one “client” pulls him into a situation deeper than could ever be expected.',
    poster_path: '/5XyuUPoIeEf3guWLQW9lATON84v.jpg',
    title: 'The Debt Collector',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 52.279,
      },
    ],
    release_date: '2018-06-05',
  },
  {
    adult: false,
    backdrop_path: '/oYmgOhICbuhEEVvdQlD6YF8VwDn.jpg',
    genre_ids: [27, 9648],
    id: 72571,
    original_language: 'en',
    original_title: 'Paranormal Activity 3',
    overview:
      'In 1988, young sisters Katie and Kristi befriend an invisible entity who resides in their home.',
    poster_path: '/9nYranPiWdNmbD5PRPPSL7VUFTS.jpg',
    title: 'Paranormal Activity 3',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 52.24,
      },
    ],
    release_date: '2011-10-19',
  },
  {
    adult: false,
    backdrop_path: '/yOtnFqFFzA4z2G1i8zoTt5GRxpu.jpg',
    genre_ids: [18],
    id: 339984,
    original_language: 'en',
    original_title: 'Miracles from Heaven',
    overview:
      'When Christy discovers her 10-year-old daughter Anna has a rare, incurable disease, she becomes a ferocious advocate for her daughter’s healing as she searches for a solution. After Anna has a freak accident and falls three stories, a miracle unfolds in the wake of her dramatic rescue that leaves medical specialists mystified, her family restored and their community inspired.',
    poster_path: '/hz9VF1TfaM0D04pYneSXUkNeOZv.jpg',
    title: 'Miracles from Heaven',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 52.222,
      },
    ],
    release_date: '2016-03-17',
  },
  {
    adult: false,
    backdrop_path: '/wCZXqPget92sP8j03WPyldtQ90f.jpg',
    genre_ids: [28, 53],
    id: 458594,
    original_language: 'en',
    original_title: 'Peppermint',
    overview:
      'A grieving mother transforms herself into a vigilante following the murders of her husband and daughter, eluding the authorities to deliver her own personal brand of justice.',
    poster_path: '/jrzxS0vcbzIIay1sdYm0rgI2QfJ.jpg',
    title: 'Peppermint',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 52.188,
      },
    ],
    release_date: '2018-09-06',
  },
  {
    adult: false,
    backdrop_path: '/2sHD7FUlgyy1TBAxPtzLF4yDb2D.jpg',
    genre_ids: [27, 53],
    id: 393345,
    original_language: 'en',
    original_title: 'Cult of Chucky',
    overview:
      'Confined to an asylum for the criminally insane, Nica Pierce is convinced that she, not Chucky, murdered her entire family. But when the psychiatrist introduces a new therapeutic "Good Guy" doll with a familiar face, a string of new, grisly deaths leads Nica to wonder if she isn\'t crazy after all.',
    poster_path: '/zqz4a0xX0L0NlmWbw7ByneeFcVp.jpg',
    title: 'Cult of Chucky',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.7,
      },
      {
        id: 'popularity',
        rating: 52.182,
      },
    ],
    release_date: '2017-10-23',
  },
  {
    adult: false,
    backdrop_path: '/wpDfUXl9YtIlG4tchSVsTGTzJK4.jpg',
    genre_ids: [53, 27],
    id: 550201,
    original_language: 'th',
    original_title: 'The Pool นรก 6 เมตร',
    overview:
      "Left alone to clean up a 6-meter-deep deserted pool, Day falls asleep on an inflatable raft. When he wakes, the water level has sunk so low that he can't climb out on his own. Stuck in the pool, Day screams for help, but the only thing that hears him is a creature from a nearby crocodile farm.",
    poster_path: '/qmND84lMjMx32E40LID5f7WJB7u.jpg',
    title: 'The Pool',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 52.109,
      },
    ],
    release_date: '2018-09-27',
  },
  {
    adult: false,
    backdrop_path: '/4byUSbNrjqCSjqVYrJU6AxqyZYr.jpg',
    genre_ids: [14, 35, 10751],
    id: 888,
    original_language: 'en',
    original_title: 'The Flintstones',
    overview:
      'Modern Stone Age family the Flintstones hit the big screen in this live-action version of the classic cartoon. Fred helps Barney adopt a child. Barney sees an opportunity to repay him when Slate Mining tests its employees to find a new executive. But no good deed goes unpunished.',
    poster_path: '/ocsb0qiGlcn6UlcDRHa3xxSCc8Y.jpg',
    title: 'The Flintstones',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.3,
      },
      {
        id: 'popularity',
        rating: 51.966,
      },
    ],
    release_date: '1994-05-26',
  },
  {
    adult: false,
    backdrop_path: '/RA2FjGBj1zMEEblkcXkpTthXzK.jpg',
    genre_ids: [12, 14],
    id: 602411,
    original_language: 'en',
    original_title: 'Adventures of Aladdin',
    overview:
      'With the help of a magical lamp, an impoverished young man transforms himself into a prince in order to win the heart of a beautiful princess. A live-action retelling of the 1992 Disney film of the same name.',
    poster_path: '/w900HA8MiAEDY3IQl6mz5JY916F.jpg',
    title: 'Adventures of Aladdin',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.4,
      },
      {
        id: 'popularity',
        rating: 51.948,
      },
    ],
    release_date: '2019-05-14',
  },
  {
    adult: false,
    backdrop_path: '/doJ2NNdt9APYoRHhCN0nc6S8IGU.jpg',
    genre_ids: [28, 14, 878],
    id: 354556,
    original_language: 'ru',
    original_title: 'Защитники',
    overview:
      'During the Cold War, an organization called "Patriot" created a super-hero squad, which includes members of multiple soviet republics. For years, the heroes had to hide their identities, but in hard times they must show themselves again.',
    poster_path: '/qQB4RKFeUMqLBiMdwMbpgdePBeO.jpg',
    title: 'Guardians',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.8,
      },
      {
        id: 'popularity',
        rating: 51.928,
      },
    ],
    release_date: '2017-02-14',
  },
  {
    adult: false,
    backdrop_path: '/jt2Z8twvtEsXORNmSG7u9xMM7lx.jpg',
    genre_ids: [28],
    id: 500852,
    original_language: 'en',
    original_title: 'Miss Bala',
    overview:
      'Gloria finds a power she never knew she had when she is drawn into a dangerous world of cross-border crime. Surviving will require all of her cunning, inventiveness, and strength.',
    poster_path: '/ae9yrSAS7nLZPbbkOm61pSuIqeo.jpg',
    title: 'Miss Bala',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 51.911,
      },
    ],
    release_date: '2019-02-01',
  },
  {
    adult: false,
    backdrop_path: '/bmuTrxbPcr1nKCsV5YWWJi73PGR.jpg',
    genre_ids: [28, 12, 35, 10751, 878],
    id: 12279,
    original_language: 'en',
    original_title: 'Spy Kids 3-D: Game Over',
    overview:
      "Carmen's caught in a virtual reality game designed by the Kids' new nemesis, the Toymaker. It's up to Juni to save his sister, and ultimately the world.",
    poster_path: '/oP53PyexPlQd1xDt8kkvX5LdQdT.jpg',
    title: 'Spy Kids 3-D: Game Over',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.1,
      },
      {
        id: 'popularity',
        rating: 58.526,
      },
    ],
    release_date: '2003-07-25',
  },
  {
    adult: false,
    backdrop_path: '/p0oItHbOAH6W00Zt8hnl4esJFet.jpg',
    genre_ids: [10751, 12, 16, 28, 14],
    id: 350499,
    original_language: 'ja',
    original_title: 'ポケモン・ザ・ムービーXY 光輪の超魔神 フーパ',
    overview:
      'Ash, Pikachu, and their friends come to a desert city by the sea. Here they meet the Mythical Pokémon Hoopa, which has the ability to summon things—including people and Pokémon—through its magic rings. After a scary incident, they learn of a story about a brave hero who stopped the rampage of a terrifying Pokémon long ago. Now, the threat that has been bottled up for years is in danger of breaking loose again.',
    poster_path: '/ujLIgISIV6Fv6j509SZp2Tmq2ZJ.jpg',
    title: 'Pokémon the Movie: Hoopa and the Clash of Ages',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 58.509,
      },
    ],
    release_date: '2015-07-18',
  },
  {
    adult: false,
    backdrop_path: '/2ZFZavJ8EMy6m0vtaHla4iamwqk.jpg',
    genre_ids: [16, 12, 10751],
    id: 774810,
    original_language: 'en',
    original_title: 'A Trash Truck Christmas',
    overview:
      'When Santa crash-lands in the junkyard on Christmas Eve, Hank, Trash Truck and their animal friends all have a hand in rescuing the holiday for everyone.',
    poster_path: '/2kWVSZfK9gbbNQD93Qwi8VvYjlB.jpg',
    title: 'A Trash Truck Christmas',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 58.43,
      },
    ],
    release_date: '2020-12-11',
  },
  {
    adult: false,
    backdrop_path: '/g6qb2h3dT1tb0zkhktD5r7ZHbmp.jpg',
    genre_ids: [27, 878],
    id: 715123,
    original_language: 'en',
    original_title: 'Books of Blood',
    overview:
      'A journey into uncharted and forbidden territory through three tales tangled in space and time.',
    poster_path: '/bXLVZGgLgd7OwbfP6fC5GCfrxuD.jpg',
    title: 'Books of Blood',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 58.426,
      },
    ],
    release_date: '2020-10-07',
  },
  {
    adult: false,
    backdrop_path: '/xDwQBiE7rxKq2TMUS6SRfQmCLY5.jpg',
    genre_ids: [28, 18, 53],
    id: 525554,
    original_language: 'fr',
    original_title: 'Lukas',
    overview:
      'A tough nightclub bouncer struggling to raise his 8-year-old daughter is forced to go undercover after an unfortunate event.',
    poster_path: '/w7rFgyr7rujNYRex9oxzG26Zq6z.jpg',
    title: 'The Bouncer',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 58.412,
      },
    ],
    release_date: '2018-08-22',
  },
  {
    adult: false,
    backdrop_path: '/2nOMUnQ4OtsKVTmpp3og7MYt4oG.jpg',
    genre_ids: [28, 53],
    id: 347375,
    original_language: 'en',
    original_title: 'Mile 22',
    overview:
      'An elite group of American operatives, aided by a top-secret tactical command team, must transport an asset who holds life-threatening information to an extraction point 22 miles away through the hostile streets of an Asian city.',
    poster_path: '/2L8ehd95eSW9x7KINYtZmRkAlrZ.jpg',
    title: 'Mile 22',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 58.394,
      },
    ],
    release_date: '2018-08-16',
  },
  {
    adult: false,
    backdrop_path: '/dNavgFrTFcojvhRuvlwSYrV7zo9.jpg',
    genre_ids: [878, 53],
    id: 560704,
    original_language: 'en',
    original_title: 'Beyond White Space',
    overview:
      'When a deep space fishing vessel is robbed by a gang of pirates, the Captain makes a daring decision to go after a rare and nearly extinct species. His obsession propels them further into space as the crew spins toward mutiny and betrayal.',
    poster_path: '/9IU1Z334s1ssVVU1L2QnMQv77w5.jpg',
    title: 'Beyond White Space',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.7,
      },
      {
        id: 'popularity',
        rating: 58.38,
      },
    ],
    release_date: '2018-12-14',
  },
  {
    adult: false,
    backdrop_path: '/4FPP2n1uazvlWvzIqn8ysaOpEID.jpg',
    genre_ids: [878, 18, 53],
    id: 559581,
    original_language: 'en',
    original_title: 'Stowaway',
    overview:
      'A three-person crew on a mission to Mars faces an impossible choice when an unplanned passenger jeopardizes the lives of everyone on board.',
    poster_path: '/yOscLK7KzEPDdi1P8RmevGIjOSp.jpg',
    title: 'Stowaway',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 58.304,
      },
    ],
    release_date: '2021-06-24',
  },
  {
    adult: false,
    backdrop_path: '/gzycjJWGw04DF6C7IYOA1F0cWhc.jpg',
    genre_ids: [18, 10749],
    id: 694256,
    original_language: 'it',
    original_title: 'Sulla stessa onda',
    overview:
      'A summer fling born under the Sicilian sun quickly develops into a heartbreaking love story that forces a boy and girl to grow up too quickly.',
    poster_path: '/j9O2WXJqF45ynkng4SAsZ1h0OCt.jpg',
    title: 'Caught by a Wave',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 58.274,
      },
    ],
    release_date: '2021-03-25',
  },
  {
    adult: false,
    backdrop_path: '/j7n2zYUODG8ViBSq7VyXyGlwJfH.jpg',
    genre_ids: [28, 53],
    id: 460321,
    original_language: 'en',
    original_title: 'Close',
    overview:
      'A counter-terrorism expert takes a job protecting a young heiress. After an attempted kidnapping puts both of their lives in danger, they must flee.',
    poster_path: '/4kjUGqPIv6kpxJUvjmeQX7nQpKd.jpg',
    title: 'Close',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 58.274,
      },
    ],
    release_date: '2019-01-18',
  },
  {
    adult: false,
    backdrop_path: '/cYdHaKx6Ihj1BIvbxpCxIGXfZ02.jpg',
    genre_ids: [10749, 18],
    id: 527641,
    original_language: 'en',
    original_title: 'Five Feet Apart',
    overview:
      "Seventeen-year-old Stella spends most of her time in the hospital as a cystic fibrosis patient. Her life is full of routines, boundaries and self-control — all of which get put to the test when she meets Will, an impossibly charming teen who has the same illness. There's an instant flirtation, though restrictions dictate that they must maintain a safe distance between them. As their connection intensifies, so does the temptation to throw the rules out the window and embrace that attraction.",
    poster_path: '/kreTuJBkUjVWePRfhHZuYfhNE1T.jpg',
    title: 'Five Feet Apart',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.4,
      },
      {
        id: 'popularity',
        rating: 58.045,
      },
    ],
    release_date: '2019-03-15',
  },
  {
    adult: false,
    backdrop_path: '/1tXlUvfhLVjM5rZcN2783IhCkbu.jpg',
    genre_ids: [28, 18],
    id: 307081,
    original_language: 'en',
    original_title: 'Southpaw',
    overview:
      'Billy "The Great" Hope, the reigning junior middleweight boxing champion, has an impressive career, a loving wife and daughter, and a lavish lifestyle. However, when tragedy strikes, Billy hits rock bottom, losing his family, his house and his manager. He soon finds an unlikely savior in Tick Willis, a former fighter who trains the city\'s toughest amateur boxers. With his future on the line, Hope fights to reclaim the trust of those he loves the most.',
    poster_path: '/r6QlMEQGNvM0YpbN04qhx5xdMiQ.jpg',
    title: 'Southpaw',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 57.836,
      },
    ],
    release_date: '2015-03-24',
  },
  {
    adult: false,
    backdrop_path: '/mTW5ssHIgGvGzAaOJmyxmuHd62j.jpg',
    genre_ids: [12],
    id: 766208,
    original_language: 'en',
    original_title: 'Jumanji: Level One',
    overview:
      'Set in 1869, two children receive a mysterious game after their father goes missing in the jungles of Africa. They unravel both the secret of their father’s disappearance and the origin of Jumanji.  See how it all began.',
    poster_path: '/mI7sIBqIsCsTjLvuiVVTfvW3FLU.jpg',
    title: 'Jumanji: Level One',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 57.783,
      },
    ],
    release_date: '2021-01-20',
  },
  {
    adult: false,
    backdrop_path: '/yvXIEuNmwybB4e1GDRGjdVUUL6f.jpg',
    genre_ids: [16, 10751, 14, 12, 18],
    id: 475215,
    original_language: 'ja',
    original_title: '未来のミライ',
    overview:
      "The movie follows a 4-year old boy who is struggling to cope with the arrival of a little sister in the family until things turn magical. A mysterious garden in the backyard of the boy's home becomes a gateway allowing the child to travel back in time and encounter his mother as a little girl and his great-grandfather as a young man. These fantasy-filled adventures allow the child to change his perspective and help him become the big brother he was meant to be.",
    poster_path: '/b9XvI4Nehzi0nXyNVD6DtT39P6l.jpg',
    title: 'Mirai',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 57.776,
      },
    ],
    release_date: '2018-06-16',
  },
  {
    adult: false,
    backdrop_path: '/brLBKS5vQfP1vjiupHqa3xg1XQC.jpg',
    genre_ids: [14, 12, 35],
    id: 520725,
    original_language: 'fr',
    original_title: 'Le prince oublié',
    overview:
      'Djibi lives alone with Sofia, his 8-year-old daughter. Every night, he invents a story to put him to sleep. When Sofia falls asleep, these extraordinary stories come to life somewhere in an imaginary world inhabited by knights, pirates and other dragons. In this world that belongs only to them, Sofia is always the princess to save, and the brave Prince is none other than Djibi himself.  But 3 years later, the entry of Sofia to the college will mark the end of her childhood. To the despair of her father, she no longer needs her stories at night. On the one hand, Djibi will have to accept that his daughter will grow up and move away from him. On the other hand, in the World of Stories, the Prince will have to face the most epic of all his adventures. Find your destiny in a world where it no longer has a place.',
    poster_path: '/iFcSfoMu9hQIX4t0CxIkDJKgIES.jpg',
    title: 'The Lost Prince',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 57.769,
      },
    ],
    release_date: '2020-02-12',
  },
  {
    adult: false,
    backdrop_path: '/AdKA2F1SzYPhSZdEbjH1Zh75UVQ.jpg',
    genre_ids: [27, 53],
    id: 694,
    original_language: 'en',
    original_title: 'The Shining',
    overview:
      "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the madness that lurks within.",
    poster_path: '/b6ko0IKC8MdYBBPkkA1aBPLe2yz.jpg',
    title: 'The Shining',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.2,
      },
      {
        id: 'popularity',
        rating: 57.642,
      },
    ],
    release_date: '1980-05-23',
  },
  {
    adult: false,
    backdrop_path: '/sumajFyOoIKubI15POZ0p8Ekpzu.jpg',
    genre_ids: [28, 878, 53],
    id: 593035,
    original_language: 'en',
    original_title: 'Alien Warfare',
    overview:
      'A team of Navy Seals investigates a mysterious science outpost only to have to combat a squad of powerful alien soldiers.',
    poster_path: '/rJOj0T5DyChfECevDg0xpEGznsl.jpg',
    title: 'Alien Warfare',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.3,
      },
      {
        id: 'popularity',
        rating: 57.637,
      },
    ],
    release_date: '2019-04-05',
  },
  {
    adult: false,
    backdrop_path: '/dZ1sOBUIrgX4iIEKjo6GiQpUMiL.jpg',
    genre_ids: [99],
    id: 61927,
    original_language: 'en',
    original_title: 'Porno Unplugged',
    overview:
      'Journalist Fabian Burstein looks behind the curtains of the porn industry. Starting in Budapest he heads westwards to explore a new world on its victory march rooted deeply in Austria. On this journey he meets the heroes and leading actors of this story: Austrians Mick Blue, Renee Pornero and Thomas Janisch. Porno Unplugged follows its native porn stars to where their lives happen. From east to west...',
    poster_path: '/uoQmK7FRXNIQa7sikGg1xM0QaN9.jpg',
    title: 'Porno Unplugged',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 57.634,
      },
    ],
    release_date: '2009-03-17',
  },
  {
    adult: false,
    backdrop_path: '/kcvKEvTWqIGMjpVJdbDVRHdIt4C.jpg',
    genre_ids: [28, 53, 12],
    id: 370172,
    original_language: 'en',
    original_title: 'No Time to Die',
    overview:
      'Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.',
    poster_path: '/w0oZEHvERujPV5JdsSp1r6rO7sl.jpg',
    title: 'No Time to Die',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 57.624,
      },
    ],
    release_date: '2021-09-29',
  },
  {
    adult: false,
    backdrop_path: '/qXD5vfFe1blOXJbOHXlU5CYJMQB.jpg',
    genre_ids: [16, 28, 10751, 878],
    id: 16577,
    original_language: 'en',
    original_title: 'Astro Boy',
    overview:
      "Set in the futuristic Metro City, Astro Boy (Atom) is a young robot with incredible powers created by a brilliant scientist in the image of the son he had lost. Unable to fulfill his creator's expectations, Astro embarks on a journey in search of acceptance, experiencing betrayal and a netherworld of robot gladiators, before returning to save Metro City and reconcile with the father who rejected him.",
    poster_path: '/fYOJaaCpqq1NatziVJntmsXXDi8.jpg',
    title: 'Astro Boy',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 57.561,
      },
    ],
    release_date: '2009-10-15',
  },
  {
    adult: false,
    backdrop_path: '/o7XHctO2t4fIdzch8v8ApNaJMcX.jpg',
    genre_ids: [16, 35, 10751],
    id: 35,
    original_language: 'en',
    original_title: 'The Simpsons Movie',
    overview:
      "After Homer accidentally pollutes the town's water supply, Springfield is encased in a gigantic dome by the EPA and the Simpsons are declared fugitives.",
    poster_path: '/s3b8TZWwmkYc2KoJ5zk77qB6PzY.jpg',
    title: 'The Simpsons Movie',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 98.579,
      },
    ],
    release_date: '2007-07-25',
  },
  {
    adult: false,
    backdrop_path: '/53aUwtolUZxgzMr2KbDpOnD8jo3.jpg',
    genre_ids: [16, 10751],
    id: 718867,
    original_language: 'en',
    original_title: 'The Larva Island Movie',
    overview:
      'Back at home, Chuck relates the island shenanigans of his larva pals Red and Yellow to a skeptical reporter in this movie sequel to the hit cartoon.',
    poster_path: '/uHdxICUIRGoJjK67aOp3ykvL8ZW.jpg',
    title: 'The Larva Island Movie',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 98.177,
      },
    ],
    release_date: '2020-07-23',
  },
  {
    adult: false,
    backdrop_path: '/7uacpbrJd9g9xSTLgfyg1NwkAiu.jpg',
    genre_ids: [10752, 28, 18, 36],
    id: 508664,
    original_language: 'en',
    original_title: 'Danger Close: The Battle of Long Tan',
    overview:
      'Vietnam War, 1966. Australia and New Zealand send troops to support the United States and South Vietnamese in their fight against the communist North. Soldiers are very young men, recruits and volunteers who have never been involved in a combat. On August 18th, members of Delta Company will face the true horror of a ruthless battle among the trees of a rubber plantation called Long Tân. They are barely a hundred. The enemy is a human wave ready to destroy them.',
    poster_path: '/aB1rCWGMsM2mm1kBDleaPkqUCFo.jpg',
    title: 'Danger Close: The Battle of Long Tan',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 97.988,
      },
    ],
    release_date: '2019-08-08',
  },
  {
    adult: false,
    backdrop_path: '/o3gOoWXt7y7R9dKNMlEqhU33sRV.jpg',
    genre_ids: [16, 10751, 14],
    id: 10144,
    original_language: 'en',
    original_title: 'The Little Mermaid',
    overview:
      'This colorful adventure tells the story of an impetuous mermaid princess named Ariel who falls in love with the very human Prince Eric and puts everything on the line for the chance to be with him. Memorable songs and characters -- including the villainous sea witch Ursula.',
    poster_path: '/9nJ9rm6RwYgIggnGVy8Dej4olef.jpg',
    title: 'The Little Mermaid',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 97.706,
      },
    ],
    release_date: '1989-11-17',
  },
  {
    adult: false,
    backdrop_path: '/yY7kr7Rgvo8W0Kr3U0bMV8Zq1qM.jpg',
    genre_ids: [10749, 35],
    id: 576393,
    original_language: 'zh',
    original_title: '一吻定情',
    overview:
      "After an earthquake destroys Xiang Qin's house, she and her father move in with the family of her father's college buddy. To her surprise, her new kind and amicable aunt and uncle are the parents of her cold and distant schoolmate, Jiang Zhi Shu, a genius with an IQ of 200 whom not too long ago rejected her when she confessed her feelings for him. Will the close proximity give her a second chance to win Zhi Shu's heart? Or will her love for him end under his cold words?",
    poster_path: '/nMNVfz2bmcgj9Du0wywVHjbRIsz.jpg',
    title: 'Fall in Love at First Kiss',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 97.526,
      },
    ],
    release_date: '2019-02-14',
  },
  {
    adult: false,
    backdrop_path: '/xUUtcxWC6H48UCrpRwwSPQz69XC.jpg',
    genre_ids: [53, 27],
    id: 659986,
    original_language: 'en',
    original_title: 'The Owners',
    overview:
      'A group of friends think they found the perfect easy score - an empty house with a safe full of cash. But when the elderly couple that lives there comes home early, the tables are suddenly turned. As a deadly game of cat and mouse ensues, the would-be thieves must fight to save themselves from a nightmare they could never have imagined.',
    poster_path: '/gzFatNrw0lhKD5NxaU6zC7S2KjP.jpg',
    title: 'The Owners',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 97.446,
      },
    ],
    release_date: '2020-08-27',
  },
  {
    adult: false,
    backdrop_path: '/gkxSIlZPEwGPimQ8TEE8C52cOSO.jpg',
    genre_ids: [16, 35, 10751, 12],
    id: 8355,
    original_language: 'en',
    original_title: 'Ice Age: Dawn of the Dinosaurs',
    overview:
      'Times are changing for Manny the moody mammoth, Sid the motor mouthed sloth and Diego the crafty saber-toothed tiger. Life heats up for our heroes when they meet some new and none-too-friendly neighbors – the mighty dinosaurs.',
    poster_path: '/cXOLaxcNjNAYmEx1trZxOTKhK3Q.jpg',
    title: 'Ice Age: Dawn of the Dinosaurs',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 97.392,
      },
    ],
    release_date: '2009-06-29',
  },
  {
    adult: false,
    backdrop_path: '/jlxDtvmdniVlnGDaDWIrlCiDNpj.jpg',
    genre_ids: [16, 28, 12, 80, 14],
    id: 732450,
    original_language: 'en',
    original_title: 'Batman: Soul of the Dragon',
    overview:
      'Bruce Wayne faces a deadly menace from his past, with the help of three former classmates: world-renowned martial artists Richard Dragon, Ben Turner and Lady Shiva.',
    poster_path: '/uDhnTtSxU5a8DtZdbbin3aZmkmU.jpg',
    title: 'Batman: Soul of the Dragon',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 97.359,
      },
    ],
    release_date: '2021-01-12',
  },
  {
    adult: false,
    backdrop_path: '/3GTSbc85Xangv8JkBSsQZMXGyhh.jpg',
    genre_ids: [27, 9648],
    id: 595149,
    original_language: 'en',
    original_title: 'Death of Me',
    overview:
      'A couple on holiday on a remote South Pacific island awaken one morning with a hang over and no recollection of what transpired. When playing back a video of the previous night, they see they participated in a local ritual that somehow ends with him murdering her.',
    poster_path: '/8F9xUvb1JMWUMkFV2Yq3aiueAbq.jpg',
    title: 'Death of Me',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.9,
      },
      {
        id: 'popularity',
        rating: 97.313,
      },
    ],
    release_date: '2020-10-02',
  },
  {
    adult: false,
    backdrop_path: '/mIpCxBWNz6SHCQBe2K2PFr5MB7f.jpg',
    genre_ids: [16, 10751],
    id: 62211,
    original_language: 'en',
    original_title: 'Monsters University',
    overview:
      "A look at the relationship between Mike and Sulley during their days at Monsters University — when they weren't necessarily the best of friends.",
    poster_path: '/upaMBEonGeZGQc3xtUVZOfe1lGl.jpg',
    title: 'Monsters University',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 96.893,
      },
    ],
    release_date: '2013-06-19',
  },
  {
    adult: false,
    backdrop_path: '/cyEAb9it7G9Atwc5ldUZ0F0iN7c.jpg',
    genre_ids: [35],
    id: 18785,
    original_language: 'en',
    original_title: 'The Hangover',
    overview:
      "When three friends finally come to after a raucous night of bachelor-party revelry, they find a baby in the closet and a tiger in the bathroom. But they can't seem to locate their best friend, Doug – who's supposed to be tying the knot. Launching a frantic search for Doug, the trio perseveres through a nasty hangover to try to make it to the church on time.",
    poster_path: '/jjCPcxw7QCmFPYM1t3BThdEawJK.jpg',
    title: 'The Hangover',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 96.881,
      },
    ],
    release_date: '2009-06-02',
  },
  {
    adult: false,
    backdrop_path: '/puJKgNcWaGgMk5VHanSSomUTpmw.jpg',
    genre_ids: [10751, 14, 16, 10749],
    id: 11224,
    original_language: 'en',
    original_title: 'Cinderella',
    overview:
      "Cinderella has faith her dreams of a better life will come true. With help from her loyal mice friends and a wave of her Fairy Godmother's wand, Cinderella's rags are magically turned into a glorious gown and off she goes to the Royal Ball. But when the clock strikes midnight, the spell is broken, leaving a single glass slipper... the only key to the ultimate fairy-tale ending!",
    poster_path: '/4nssBcQUBadCTBjrAkX46mVEKts.jpg',
    title: 'Cinderella',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 96.761,
      },
    ],
    release_date: '1950-02-22',
  },
  {
    adult: false,
    backdrop_path: '/9ywA15OAiwjSTvg3cBs9B7kOCBF.jpg',
    genre_ids: [18, 10749],
    id: 337167,
    original_language: 'en',
    original_title: 'Fifty Shades Freed',
    overview:
      'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
    poster_path: '/9ZedQHPQVveaIYmDSTazhT3y273.jpg',
    title: 'Fifty Shades Freed',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 96.695,
      },
    ],
    release_date: '2018-01-17',
  },
  {
    adult: false,
    backdrop_path: '/bXILbW1i0WRShd6s4LfLKdJM6zm.jpg',
    genre_ids: [10751, 16, 35, 28, 12],
    id: 42246,
    original_language: 'en',
    original_title: 'Tom and Jerry: The Fast and the Furry',
    overview:
      'After being evicted from their old house by Tom\'s owner for causing major damage, cat and mouse Tom and Jerry enter a race entitled the "Fabulous Super Race" to win a mansion.',
    poster_path: '/7PeNpz4mDyRqDxMhC0g0FCpVwPB.jpg',
    title: 'Tom and Jerry: The Fast and the Furry',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 96.666,
      },
    ],
    release_date: '2005-10-11',
  },
  {
    adult: false,
    backdrop_path: '/7bN5BIbOZJ1h9Atp59fptJuwKV0.jpg',
    genre_ids: [28, 53],
    id: 416194,
    original_language: 'no',
    original_title: 'Skjelvet',
    overview:
      'A geologist races against time to save his estranged wife and two children when a devastating earthquake strikes Oslo, Norway.',
    poster_path: '/jA5MVaNWe76EjuXn4FqkeaHDPuj.jpg',
    title: 'The Quake',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 96.489,
      },
    ],
    release_date: '2018-08-31',
  },
  {
    adult: false,
    backdrop_path: '/mwfDVoJ5YIOeswfZARje1H6wSoj.jpg',
    genre_ids: [18, 27, 878, 53],
    id: 710871,
    original_language: 'th',
    original_title: 'โกสต์แล็บ..ฉีกกฎทดลองผี',
    overview:
      'After witnessing a haunting in their hospital, two doctors become dangerously obsessed with obtaining scientific proof that ghosts exist.',
    poster_path: '/vdMsMYfkHJ6mLht5QCg7Hl8hnEp.jpg',
    title: 'Ghost Lab',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 96.45,
      },
    ],
    release_date: '2021-05-26',
  },
  {
    adult: false,
    backdrop_path: '/bftdQMCkQa3KXHWXwAaW0g1p6ZH.jpg',
    genre_ids: [16, 10751, 12, 35],
    id: 638134,
    original_language: 'en',
    original_title: 'Pets United',
    overview:
      'When Roger (a Robin Hood-esque, stray dog) and Belle (an elegant yet spoilt pet cat) are thrown together amidst the chaos of a robot take-over of their home city, they must push all their preconceptions aside in order to survive, as they embark on a high-stakes, action-packed adventure.',
    poster_path: '/gtwqIYSOCRwEndZTg9s6iWjEZc1.jpg',
    title: 'Pets United',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 96.245,
      },
    ],
    release_date: '2019-11-08',
  },
  {
    adult: false,
    backdrop_path: '/nDP33LmQwNsnPv29GQazz59HjJI.jpg',
    genre_ids: [28, 12, 14],
    id: 447404,
    original_language: 'en',
    original_title: 'Pokémon Detective Pikachu',
    overview:
      'In a world where people collect pocket-size monsters (Pokémon) to do battle, a boy comes across an intelligent monster who seeks to be a detective.',
    poster_path: '/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg',
    title: 'Pokémon Detective Pikachu',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 96.175,
      },
    ],
    release_date: '2019-05-03',
  },
  {
    adult: false,
    backdrop_path: '/hMANgfPHR1tRObNp2oPiOi9mMlz.jpg',
    genre_ids: [28, 12, 878],
    id: 424783,
    original_language: 'en',
    original_title: 'Bumblebee',
    overview:
      'On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.  When Charlie revives him, she quickly learns this is no ordinary yellow VW bug.',
    poster_path: '/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg',
    title: 'Bumblebee',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 95.856,
      },
    ],
    release_date: '2018-12-15',
  },
  {
    adult: false,
    backdrop_path: '/7JCYI5Xrgt21fEQXIZ2ZFCRhyqK.jpg',
    genre_ids: [16, 12, 10751, 14, 35, 28],
    id: 49519,
    original_language: 'en',
    original_title: 'The Croods',
    overview:
      'The prehistoric Croods family live in a particularly dangerous moment in time. Patriarch Grug, his mate Ugga, teenage daughter Eep, son Thunk, and feisty Gran gather food by day and huddle together in a cave at night. When a more evolved caveman named Guy arrives on the scene, Grug is distrustful, but it soon becomes apparent that Guy is correct about the impending destruction of their world.',
    poster_path: '/27zvjVOtOi5ped1HSlJKNsKXkFH.jpg',
    title: 'The Croods',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 95.752,
      },
    ],
    release_date: '2013-03-15',
  },
  {
    adult: false,
    backdrop_path: '/2kR79WCmVIzFYQWH9X3LqcehvC2.jpg',
    genre_ids: [18],
    id: 514439,
    original_language: 'en',
    original_title: 'Breakthrough',
    overview:
      "Tragedy strikes when a woman named Joyce's son falls through the ice on a frozen lake and is trapped underwater for over 15 minutes. After being rushed to the hospital, the 14-year-old boy continues to fight for his life as Joyce, her husband and their pastor stay by his bedside and pray for a miracle.",
    poster_path: '/85BfZAYh4zC1U6NBz2ZkXb3y67v.jpg',
    title: 'Breakthrough',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 89.775,
      },
    ],
    release_date: '2019-04-10',
  },
  {
    adult: false,
    backdrop_path: '/ezLKohe4HKsHQbwQwhv0ARo83NC.jpg',
    genre_ids: [10751, 14, 12, 35],
    id: 624963,
    original_language: 'en',
    original_title: "A Babysitter's Guide to Monster Hunting",
    overview:
      "Recruited by a secret society of babysitters, a high schooler battles the Boogeyman and his monsters when they nab the boy she's watching on Halloween.",
    poster_path: '/bkld8Me0WiLWipLORRNfF1yIPHu.jpg',
    title: "A Babysitter's Guide to Monster Hunting",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 89.772,
      },
    ],
    release_date: '2020-10-14',
  },
  {
    adult: false,
    backdrop_path: '/ohBudODLg90h2R8jQf4DvfGjY4A.jpg',
    genre_ids: [9648, 80, 53, 10749],
    id: 695969,
    original_language: 'hi',
    original_title: 'हसीन दिलरुबा',
    overview:
      "Under investigation as a suspect in her husband's murder, a wife reveals details of their thorny marriage that seem to only further blur the truth.",
    poster_path: '/aq1y0tqiH1ojIAQBbxZXFbArEAy.jpg',
    title: 'Haseen Dillruba',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 89.755,
      },
    ],
    release_date: '2021-07-02',
  },
  {
    adult: false,
    backdrop_path: '/zLa8fA7boGtNoNH7n6iYi9UqoaH.jpg',
    genre_ids: [878, 27, 9648],
    id: 458305,
    original_language: 'en',
    original_title: 'Vivarium',
    overview:
      'A young woman and her fiancé are in search of the perfect starter home. After following a mysterious real estate agent to a new housing development, the couple finds themselves trapped in a maze of identical houses and forced to raise an otherworldly child.',
    poster_path: '/myf3qzpeN0JbuFRPwSpJcz7rmAT.jpg',
    title: 'Vivarium',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 89.7,
      },
    ],
    release_date: '2019-09-07',
  },
  {
    adult: false,
    backdrop_path: '/fydUcbkqLyESCFa9U5XKqi8dIVj.jpg',
    genre_ids: [16, 12, 10751],
    id: 109445,
    original_language: 'en',
    original_title: 'Frozen',
    overview:
      "Young princess Anna of Arendelle dreams about finding true love at her sister Elsa’s coronation. Fate takes her on a dangerous journey in an attempt to end the eternal winter that has fallen over the kingdom. She's accompanied by ice delivery man Kristoff, his reindeer Sven, and snowman Olaf. On an adventure where she will find out what friendship, courage, family, and true love really means.",
    poster_path: '/mbPrrbt8bSLcHSBCHnRclPlMZPl.jpg',
    title: 'Frozen',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 89.485,
      },
    ],
    release_date: '2013-11-20',
  },
  {
    adult: false,
    backdrop_path: '/eFqoN0TFsHDr6BUgBQKIsMj0jL1.jpg',
    genre_ids: [16, 12, 10751],
    id: 313297,
    original_language: 'en',
    original_title: 'Kubo and the Two Strings',
    overview:
      'Kubo mesmerizes the people in his village with his magical gift for spinning wild tales with origami. When he accidentally summons an evil spirit seeking vengeance, Kubo is forced to go on a quest to solve the mystery of his fallen samurai father and his mystical weaponry, as well as discover his own magical powers.',
    poster_path: '/la6QA9tk4Foq8OBH2Dyh5dTcw6H.jpg',
    title: 'Kubo and the Two Strings',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 89.438,
      },
    ],
    release_date: '2016-08-18',
  },
  {
    adult: false,
    backdrop_path: '/rFxWhQB3JmmwCU5kcQQFrnpzGtF.jpg',
    genre_ids: [16, 10751, 12],
    id: 10674,
    original_language: 'en',
    original_title: 'Mulan',
    overview:
      'A tomboyish girl disguises herself as a young man so she can fight with the Imperial Chinese Army against the invading Huns. With help from wise-cracking dragon Mushu, Mulan just might save her country -- and win the heart of handsome Captain Li Shang.',
    poster_path: '/bJ0DxWQDLdjSJmFHwtximVdgJ5P.jpg',
    title: 'Mulan',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 89.344,
      },
    ],
    release_date: '1998-06-18',
  },
  {
    adult: false,
    backdrop_path: '/vbY95t58MDArtyUXUIb8Fx1dCry.jpg',
    genre_ids: [28, 878, 12],
    id: 1726,
    original_language: 'en',
    original_title: 'Iron Man',
    overview:
      'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
    poster_path: '/78lPtwv72eTNqFW9COBYI0dWDJa.jpg',
    title: 'Iron Man',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 89.283,
      },
    ],
    release_date: '2008-04-30',
  },
  {
    adult: false,
    backdrop_path: '/Ig8RuhcsePQuOCvw4ggH1uFI18.jpg',
    genre_ids: [18, 36],
    id: 582876,
    original_language: 'uk',
    original_title: 'Антон і червона химера',
    overview:
      'Ukraine, 1919. The friendship of two boys, Anton and Jacob, one Christian, the other Jewish, manages to survive the prejudices and hatred that dominate the minds of adults in the aftermath of World War I and the Russian Revolution.',
    poster_path: '/hssonpZfsLSmkpHVlwx85WouYqq.jpg',
    title: 'Anton',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 3.5,
      },
      {
        id: 'popularity',
        rating: 89.187,
      },
    ],
    release_date: '2021-02-12',
  },
  {
    adult: false,
    backdrop_path: '/3QZXtx2WUSucsQH2Uo7zCiTHzXT.jpg',
    genre_ids: [35, 10751, 16],
    id: 735364,
    original_language: 'en',
    original_title: 'The Boss Baby: Get That Baby!',
    overview:
      "Think you've got what it takes to be the boss? This interactive special puts your skills to the test and matches you up with one of 16 jobs at Baby Corp.",
    poster_path: '/epvUyxGpiaacwojju2CMa0I3Y6T.jpg',
    title: 'The Boss Baby: Get That Baby!',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 89.161,
      },
    ],
    release_date: '2020-09-01',
  },
  {
    adult: false,
    backdrop_path: '/2mU4rVU7CQBT3Rbk5JqofNA8nlX.jpg',
    genre_ids: [10749, 16, 14],
    id: 573699,
    original_language: 'zh',
    original_title: '白蛇：缘起',
    overview:
      'One day a young woman named Blanca is saved by Xuan, a snake catcher from a nearby village. She has lost her memory, and together they go on a journey to discover her real identity, developing deeper feelings for one another along the way. But as they learn more about her past, they uncover a darker plot of supernatural forces vying for power, with the fate of the world hanging in the balance.',
    poster_path: '/30SLnoKmYNyRPkKCYowsrGLRnJA.jpg',
    title: 'White Snake',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 89.082,
      },
    ],
    release_date: '2019-01-11',
  },
  {
    adult: false,
    backdrop_path: '/5D849yJ7isoK17flsH99yJUAMPI.jpg',
    genre_ids: [12, 14, 28],
    id: 285,
    original_language: 'en',
    original_title: "Pirates of the Caribbean: At World's End",
    overview:
      'Captain Barbossa, long believed to be dead, has come back to life and is headed to the edge of the Earth with Will Turner and Elizabeth Swann. But nothing is quite as it seems.',
    poster_path: '/8ORuWcrYPgjwUDyCzr7qsOlCdwn.jpg',
    title: "Pirates of the Caribbean: At World's End",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 88.987,
      },
    ],
    release_date: '2007-05-19',
  },
  {
    adult: false,
    backdrop_path: '/xjotE7aFdZ0D8aGriYjFOtDayct.jpg',
    genre_ids: [14, 12, 28, 10751, 10749],
    id: 102651,
    original_language: 'en',
    original_title: 'Maleficent',
    overview:
      "A beautiful, pure-hearted young woman, Maleficent has an idyllic life growing up in a peaceable forest kingdom, until one day when an invading army threatens the harmony of the land.  Maleficent rises to be the land's fiercest protector, but she ultimately suffers a ruthless betrayal – an act that begins to turn her heart into stone. Bent on revenge, Maleficent faces an epic battle with the invading King's successor and, as a result, places a curse upon his newborn infant Aurora. As the child grows, Maleficent realizes that Aurora holds the key to peace in the kingdom – and to Maleficent's true happiness as well.",
    poster_path: '/ik8PugpL41s137RAWEGTAWu0dPo.jpg',
    title: 'Maleficent',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 88.956,
      },
    ],
    release_date: '2014-05-28',
  },
  {
    adult: false,
    backdrop_path: '/mGr18hk6oDQyGjaSpbF7o5epoJV.jpg',
    genre_ids: [28, 16, 878],
    id: 39104,
    original_language: 'ja',
    original_title: 'ドラゴンボールＺ 極限バトル！三大超サイヤ人',
    overview:
      "Dr. Gero's Androids #13, #14, and #15 are awakened by the laboratory computers and immediately head to the mall where Goku is shopping. After Goku, Trunks, and Vegeta defeat #14 and #15, #13 absorbs their inner computers and becomes a super being greater than the original three separately were. Now it is up to Goku to stop him.",
    poster_path: '/uVJqC187rKxQ1sJsWlKjNfAzeTk.jpg',
    title: 'Dragon Ball Z: Super Android 13!',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 88.605,
      },
    ],
    release_date: '1992-07-11',
  },
  {
    adult: false,
    backdrop_path: '/mMoG4nPSDupXIXOwVvpexZY2W0N.jpg',
    genre_ids: [28, 18, 53],
    id: 254128,
    original_language: 'en',
    original_title: 'San Andreas',
    overview:
      'In the aftermath of a massive earthquake in California, a rescue-chopper pilot makes a dangerous journey across the state in order to rescue his estranged daughter.',
    poster_path: '/2Gfjn962aaFSD6eST6QU3oLDZTo.jpg',
    title: 'San Andreas',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 88.578,
      },
    ],
    release_date: '2015-05-27',
  },
  {
    adult: false,
    backdrop_path: '/mabuNsGJgRuCTuGqjFkWe1xdu19.jpg',
    genre_ids: [28, 12, 16, 10751],
    id: 260513,
    original_language: 'en',
    original_title: 'Incredibles 2',
    overview:
      'Elastigirl springs into action to save the day, while Mr. Incredible faces his greatest challenge yet – taking care of the problems of his three children.',
    poster_path: '/aTbRJHCrQwceSS5b8LYj7hC654I.jpg',
    title: 'Incredibles 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 88.374,
      },
    ],
    release_date: '2018-06-14',
  },
  {
    adult: false,
    backdrop_path: '/poRKW1DNzNXfZQPPSGDVaRcwN7a.jpg',
    genre_ids: [10751, 10770, 16],
    id: 359983,
    original_language: 'en',
    original_title: 'The Lion Guard: Return of the Roar',
    overview:
      "Set in the African savannah, the film follows Kion as he assembles the members of the 'Lion Guard'. Throughout the film, the diverse team of young animals will learn how to utilize each of their unique abilities to solve problems and accomplish tasks to maintain balance within the Circle of Life, while also introducing viewers to the vast array of animals that populate the prodigious African landscape.",
    poster_path: '/duqg6CiSik02nSXjiQHo8TcwY4b.jpg',
    title: 'The Lion Guard: Return of the Roar',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 88.321,
      },
    ],
    release_date: '2015-11-22',
  },
  {
    adult: false,
    backdrop_path: '/hIHtyIYgBqHybOgUdoAmveipuiO.jpg',
    genre_ids: [28, 27, 878],
    id: 703745,
    original_language: 'en',
    original_title: 'Deep Blue Sea 3',
    overview:
      'Dr. Emma Collins and her team are spending their third summer on the island of Little Happy studying the effect of climate change on the great white sharks who come to the nearby nursery every year to give birth. Along with the last two inhabitants of this former fishing village, their peaceful life is disrupted when a "scientific" team led by her ex-boyfriend and marine biologist Richard show up looking for three bull sharks who we soon learn aren\'t just any bull sharks.',
    poster_path: '/bKthjUmxjHjvJK8FktFfQdmwP12.jpg',
    title: 'Deep Blue Sea 3',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 88.252,
      },
    ],
    release_date: '2020-07-28',
  },
  {
    adult: false,
    backdrop_path: '/6VmFqApQRyZZzmiGOQq2C92jyvH.jpg',
    genre_ids: [18, 10749],
    id: 597,
    original_language: 'en',
    original_title: 'Titanic',
    overview:
      "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.",
    poster_path: '/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
    title: 'Titanic',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 87.968,
      },
    ],
    release_date: '1997-11-18',
  },
  {
    adult: false,
    backdrop_path: '/iMM6K3cdHYIVToqKSnLp9DNa1m3.jpg',
    genre_ids: [28, 12, 878, 14],
    id: 634649,
    original_language: 'en',
    original_title: 'Spider-Man: No Way Home',
    overview: '',
    poster_path: '/5RjyUm9HP2ZRwvqCqK9sDqlQHxa.jpg',
    title: 'Spider-Man: No Way Home',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 87.886,
      },
    ],
    release_date: '2021-12-15',
  },
  {
    adult: false,
    backdrop_path: '/fJ5eT1ARwNUvsjmZKVbp6Qt3f7W.jpg',
    genre_ids: [16, 10751, 14, 12, 35, 10749],
    id: 11970,
    original_language: 'en',
    original_title: 'Hercules',
    overview:
      "Bestowed with superhuman strength, a young mortal named Hercules sets out to prove himself a hero in the eyes of his father, the great god Zeus. Along with his friends Pegasus, a flying horse, and Phil, a personal trainer, Hercules is tricked by the hilarious, hotheaded villain Hades, who's plotting to take over Mount Olympus!",
    poster_path: '/16JPL3c6ET7ibfO35WjjWxCaVmj.jpg',
    title: 'Hercules',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 77.45,
      },
    ],
    release_date: '1997-06-20',
  },
  {
    adult: false,
    backdrop_path: '/l1nYo0yzKjf84atnBDbx0do16vQ.jpg',
    genre_ids: [878, 28, 12, 10751],
    id: 438590,
    original_language: 'en',
    original_title: 'A-X-L',
    overview:
      'The life of a teenage boy is forever altered by a chance encounter with cutting edge military technology.',
    poster_path: '/9kB56ZdMB6RgY5QtX9Bar45jCeI.jpg',
    title: 'A-X-L',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 77.423,
      },
    ],
    release_date: '2018-08-23',
  },
  {
    adult: false,
    backdrop_path: '/gXSpNiP9a5uq0mo1hcfp2PVUsOV.jpg',
    genre_ids: [28, 878, 16],
    id: 503314,
    original_language: 'ja',
    original_title: 'ドラゴンボール超スーパー ブロリー',
    overview:
      "Earth is peaceful following the Tournament of Power. Realizing that the universes still hold many more strong people yet to see, Goku spends all his days training to reach even greater heights. Then one day, Goku and Vegeta are faced by a Saiyan called 'Broly' who they've never seen before. The Saiyans were supposed to have been almost completely wiped out in the destruction of Planet Vegeta, so what's this one doing on Earth? This encounter between the three Saiyans who have followed completely different destinies turns into a stupendous battle, with even Frieza (back from Hell) getting caught up in the mix.",
    poster_path: '/f03YksE4NggUjG75toz4H1YAGRf.jpg',
    title: 'Dragon Ball Super: Broly',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 77.408,
      },
    ],
    release_date: '2018-12-14',
  },
  {
    adult: false,
    backdrop_path: '/mA9PrseviOSHkM2lZja9FAUoarN.jpg',
    genre_ids: [35, 10751],
    id: 800823,
    original_language: 'es',
    original_title: 'A todo tren: destino Asturias',
    overview:
      'When Ricardo, a responsible father, decides to personally take his son to a camp in Asturias, other parents propose that he should also take care of their children. When the train is about to leave, Felipe, a flamboyant individual and grandfather of two of the children, shows up at the station.',
    poster_path: '/xxK9GyYqEN8224PxSdkOKYbLPZX.jpg',
    title: 'The Kids Are Alright: Destination Asturias',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.4,
      },
      {
        id: 'popularity',
        rating: 77.396,
      },
    ],
    release_date: '2021-07-08',
  },
  {
    adult: false,
    backdrop_path: '/c4lQ9UYLeanBAmoJDcv5MMDioNG.jpg',
    genre_ids: [28, 12, 14],
    id: 566525,
    original_language: 'en',
    original_title: 'Shang-Chi and the Legend of the Ten Rings',
    overview:
      'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
    poster_path: '/12ijlLGQ5QQGZhhzsevfcIFCahT.jpg',
    title: 'Shang-Chi and the Legend of the Ten Rings',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 77.012,
      },
    ],
    release_date: '2021-09-01',
  },
  {
    adult: false,
    backdrop_path: '/ksMcPijqq5uayFEUkeJlSYXrrp3.jpg',
    genre_ids: [16, 878],
    id: 539140,
    original_language: 'ja',
    original_title: 'センコロール コネクト',
    overview:
      'Student Yuki has never seen one of the giant monsters she always hears about on the news and that threaten her city. But when she meets the lethargic Tetsu one day, things change suddenly. Because Tetsu moves around the houses with a creature called Cencoroll, which he can control with mind control and which can transform into a wide variety of objects. But not only Yuki is fascinated by Cencoroll: the boy Shu tries to take Cencoroll from Tetsu with the help of his own telepathy monster, whereupon the four engage in a bitter fight, in which Yuki also intervenes and the entire city is converted into a battle arena.',
    poster_path: '/2ayrhipQ6wETRZyixZW8UPKztEG.jpg',
    title: 'Cencoroll Connect',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 76.962,
      },
    ],
    release_date: '2019-06-29',
  },
  {
    adult: false,
    backdrop_path: '/vyxkDD95jhsFz5T0jo9P87IX3V.jpg',
    genre_ids: [16, 10751, 14],
    id: 18095,
    original_language: 'ja',
    original_title:
      'ドラゴンボールGT 悟空外伝! 勇気の証しは四星球(スーシンチュウ)',
    overview:
      "Son Goku Jr. is the great-great-great-great-grandson of the legendary martial artist Son Goku. However, unlike his predecessor he's not a brave fighter. He's constantly picked on by school bullies, his grandmother Pan sees this and she's worried, but even though Goku Jr. is not a strong and powerful Saiyan, he has a kind heart, and Pan loves him. When Pan gets sick Goku Jr. realizes he must do something if he doesn't want to lose Pan. Then he will remember about the legends of the Dragon Balls. It was told they granted a wish to the bearer, Goku Jr. needs a magical wish more than ever.",
    poster_path: '/reNPMjkPg9f6wgf6kHSSkKjBarL.jpg',
    title: "Dragon Ball GT: A Hero's Legacy",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 76.876,
      },
    ],
    release_date: '1997-03-26',
  },
  {
    adult: false,
    backdrop_path: '/fKtYXUhX5fxMxzQfyUcQW9Shik6.jpg',
    genre_ids: [16, 10751, 35, 12],
    id: 385103,
    original_language: 'en',
    original_title: 'Scoob!',
    overview:
      'In Scooby-Doo’s greatest adventure yet, see the never-before told story of how lifelong friends Scooby and Shaggy first met and how they joined forces with young detectives Fred, Velma, and Daphne to form the famous Mystery Inc. Now, with hundreds of cases solved, Scooby and the gang face their biggest, toughest mystery ever: an evil plot to unleash the ghost dog Cerberus upon the world. As they race to stop this global “dogpocalypse,” the gang discovers that Scooby has a secret legacy and an epic destiny greater than anyone ever imagined.',
    poster_path: '/jHo2M1OiH9Re33jYtUQdfzPeUkx.jpg',
    title: 'Scoob!',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 76.833,
      },
    ],
    release_date: '2020-07-23',
  },
  {
    adult: false,
    backdrop_path: '/7C921eWK06n12c1miRXnYoEu5Yv.jpg',
    genre_ids: [12, 28, 14],
    id: 166426,
    original_language: 'en',
    original_title: 'Pirates of the Caribbean: Dead Men Tell No Tales',
    overview:
      "Thrust into an all-new adventure, a down-on-his-luck Capt. Jack Sparrow feels the winds of ill-fortune blowing even more strongly when deadly ghost sailors led by his old nemesis, the evil Capt. Salazar, escape from the Devil's Triangle. Jack's only hope of survival lies in seeking out the legendary Trident of Poseidon, but to find it, he must forge an uneasy alliance with a brilliant and beautiful astronomer and a headstrong young man in the British navy.",
    poster_path: '/qwoGfcg6YUS55nUweKGujHE54Wy.jpg',
    title: 'Pirates of the Caribbean: Dead Men Tell No Tales',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 76.786,
      },
    ],
    release_date: '2017-05-23',
  },
  {
    adult: false,
    backdrop_path: '/uILX4gGU9OqpndR7JXENn29MoEv.jpg',
    genre_ids: [99],
    id: 689249,
    original_language: 'es',
    original_title: 'La casa de papel: El fenómeno',
    overview:
      "A documentary on why and how 'Money Heist' sparked a wave of enthusiasm around the world for a lovable group of thieves and their professor.",
    poster_path: '/AboUXTrDWEi0PuZUqaft0iwBTm7.jpg',
    title: 'Money Heist: The Phenomenon',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 76.694,
      },
    ],
    release_date: '2020-04-03',
  },
  {
    adult: false,
    backdrop_path: '/3uaD05vhpsjiZ9KHpF2TI2GrXON.jpg',
    genre_ids: [18, 10770],
    id: 441168,
    original_language: 'en',
    original_title: "From Straight A's to XXX",
    overview:
      "When a change of circumstances leaves Miriam unable to pay her college tuition, she makes a surprising decision: to start performing in adult films, using the pseudonym Belle Knox. Miriam lies to her family and her friends at school, keeping her double life a secret. But soon rumours spread and Miriam becomes the subject of vicious online attacks and unwanted attention. Miriam fights back: she talks to the media, saying her new line of work empowers her as a feminist. But her confident stand has unintended consequences. Miriam is shunned by her conservative family and her colleagues in the adult film world. One impulsive decision has quickly spiralled out of control - and Miriam's problems are just beginning.",
    poster_path: '/pv5n66n3J9DzNeEzGymhQ0q2FcS.jpg',
    title: "From Straight A's to XXX",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.7,
      },
      {
        id: 'popularity',
        rating: 76.651,
      },
    ],
    release_date: '2017-02-11',
  },
  {
    adult: false,
    backdrop_path: '/tirhxzSR6g1A9Iayo2lpYW4luUF.jpg',
    genre_ids: [878],
    id: 433249,
    original_language: 'en',
    original_title: 'IO',
    overview:
      "As a young scientist searches for a way to save a dying Earth, she finds a connection with a man who's racing to catch the last shuttle off the planet.",
    poster_path: '/utH781EwjzzXQC6fZUO3cw8L5Ht.jpg',
    title: 'IO',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.9,
      },
      {
        id: 'popularity',
        rating: 76.609,
      },
    ],
    release_date: '2019-01-18',
  },
  {
    adult: false,
    backdrop_path: '/cH0AXST2dsHcD62qTbS4Cte6Wjb.jpg',
    genre_ids: [35],
    id: 526019,
    original_language: 'en',
    original_title: 'Like a Boss',
    overview:
      'Two female friends with very different ideals decide to start a beauty company together. One is more practical, while the other wants to earn her fortune and live a lavish lifestyle.',
    poster_path: '/yce0CZPWd0GGudksRJi8p4gDj1M.jpg',
    title: 'Like a Boss',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 76.579,
      },
    ],
    release_date: '2020-01-09',
  },
  {
    adult: false,
    backdrop_path: '/7OlCmUwpJzJepUaOZ0n6oiCbNMP.jpg',
    genre_ids: [99, 27, 53],
    id: 128748,
    original_language: 'en',
    original_title: 'Curse of the Blair Witch',
    overview:
      'Curse of the Blair Witch is a documentary about the Blair Witch legend and the three filmmakers who disappeared in October of 1999. It first aired on the Sci-Fi Channel on July 11, 1999 as a promotional prelude to the release of The Blair Witch Project on July 30, 1999.',
    poster_path: '/kTqRbjRIA6B1RbBaoLV098kwtXa.jpg',
    title: 'Curse of the Blair Witch',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 76.542,
      },
    ],
    release_date: '1999-07-11',
  },
  {
    adult: false,
    backdrop_path: '/lFwykSz3Ykj1Q3JXJURnGUTNf1o.jpg',
    genre_ids: [16, 10751, 12],
    id: 166428,
    original_language: 'en',
    original_title: 'How to Train Your Dragon: The Hidden World',
    overview:
      'As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.',
    poster_path: '/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg',
    title: 'How to Train Your Dragon: The Hidden World',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 76.433,
      },
    ],
    release_date: '2019-01-03',
  },
  {
    adult: false,
    backdrop_path: '/wRTZaxAiDP0ZEeQsO0HiiSqYCSp.jpg',
    genre_ids: [16, 10751, 35, 12],
    id: 950,
    original_language: 'en',
    original_title: 'Ice Age: The Meltdown',
    overview:
      "Diego, Manny and Sid return in this sequel to the hit animated movie Ice Age. This time around, the deep freeze is over, and the ice-covered earth is starting to melt, which will destroy the trio's cherished valley. The impending disaster prompts them to reunite and warn all the other beasts about the desperate situation.",
    poster_path: '/hzJzd0OFRHjSykLuSmDG8ssPJAn.jpg',
    title: 'Ice Age: The Meltdown',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 76.312,
      },
    ],
    release_date: '2006-03-29',
  },
  {
    adult: false,
    backdrop_path: '/kyTlMMVWo1GffYoQctZwLqJcwaj.jpg',
    genre_ids: [16, 35, 12, 10751],
    id: 57800,
    original_language: 'en',
    original_title: 'Ice Age: Continental Drift',
    overview:
      'Manny, Diego, and Sid embark upon another adventure after their continent is set adrift. Using an iceberg as a ship, they encounter sea creatures and battle pirates as they explore a new world.',
    poster_path: '/6NSFKyOz7ppsd0KY6g4HInIZ53P.jpg',
    title: 'Ice Age: Continental Drift',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 76.295,
      },
    ],
    release_date: '2012-06-27',
  },
  {
    adult: false,
    backdrop_path: '/eakQ2Gn1HxuOaSj3VrbIzcDKHy3.jpg',
    genre_ids: [18],
    id: 818370,
    original_language: 'en',
    original_title: 'The Little Prince(ss)',
    overview:
      "When Gabriel, a 7-year-old Chinese kid who loves ballet, becomes friends with Rob, another Chinese kid from school, Rob’s dad gets suspicious about Gabriel's feminine behavior and decides to intervene.",
    poster_path: '/4O65UNeSnWqRcuTUFcy75PluCzz.jpg',
    title: 'The Little Prince(ss)',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 76.135,
      },
    ],
    release_date: '2021-05-28',
  },
  {
    adult: false,
    backdrop_path: '/9cGSFGZVVLsrnbs0AFPDh6X2ynl.jpg',
    genre_ids: [16, 10751, 12, 18, 35],
    id: 150540,
    original_language: 'en',
    original_title: 'Inside Out',
    overview:
      "Growing up can be a bumpy road, and it's no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco. Riley's guiding emotions— Joy, Fear, Anger, Disgust and Sadness—live in Headquarters, the control centre inside Riley's mind, where they help advise her through everyday life and tries to keep things positive, but the emotions conflict on how best to navigate a new city, house and school.",
    poster_path: '/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg',
    title: 'Inside Out',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 76.087,
      },
    ],
    release_date: '2015-06-09',
  },
  {
    adult: false,
    backdrop_path: '/gNJSXReTcsIRbRoiE3PBqNbBDL0.jpg',
    genre_ids: [27, 53],
    id: 480414,
    original_language: 'en',
    original_title: 'The Curse of La Llorona',
    overview:
      'A social worker dealing with the disappearance of two children fears for her own family after beginning the investigation.',
    poster_path: '/jhZlXSnFUpNiLAek9EkPrtLEWQI.jpg',
    title: 'The Curse of La Llorona',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.7,
      },
      {
        id: 'popularity',
        rating: 76.032,
      },
    ],
    release_date: '2019-04-17',
  },
  {
    adult: false,
    backdrop_path: '/sabbmaIKLDg13XUsmimM6jbrPfX.jpg',
    genre_ids: [35],
    id: 214756,
    original_language: 'en',
    original_title: 'Ted 2',
    overview:
      "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
    poster_path: '/38C91I7Xft0gyY7BITm8i4yvuRb.jpg',
    title: 'Ted 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 92.351,
      },
    ],
    release_date: '2015-06-25',
  },
  {
    adult: false,
    backdrop_path: '/hE6Jh9FJiBrakHcT3vmWxM0GVpv.jpg',
    genre_ids: [28, 53],
    id: 399402,
    original_language: 'en',
    original_title: 'Hunter Killer',
    overview:
      "Captain Glass of the USS Arkansas discovers that a coup d'état is taking place in Russia, so he and his crew join an elite group working on the ground to prevent a war.",
    poster_path: '/a0j18XNVhP4RcW3wXwsqT0kVoQm.jpg',
    title: 'Hunter Killer',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 92.343,
      },
    ],
    release_date: '2018-10-19',
  },
  {
    adult: false,
    backdrop_path: '/nPRwI7U7GoZstXEHyHVc5LuuSVr.jpg',
    genre_ids: [878, 28, 12, 35],
    id: 98566,
    original_language: 'en',
    original_title: 'Teenage Mutant Ninja Turtles',
    overview:
      'When a kingpin threatens New York City, a group of mutated turtle warriors must emerge from the shadows to protect their home.',
    poster_path: '/azL2ThbJMIkts3ZMt3j1YgBUeDB.jpg',
    title: 'Teenage Mutant Ninja Turtles',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 92.133,
      },
    ],
    release_date: '2014-08-07',
  },
  {
    adult: false,
    backdrop_path: '/gqyTUMNrMjyIVNVIgGMdurrNPWb.jpg',
    genre_ids: [16, 12, 35, 10751],
    id: 260514,
    original_language: 'en',
    original_title: 'Cars 3',
    overview:
      "Blindsided by a new generation of blazing-fast racers, the legendary Lightning McQueen is suddenly pushed out of the sport he loves. To get back in the game, he will need the help of an eager young race technician with her own plan to win, inspiration from the late Fabulous Hudson Hornet, and a few unexpected turns. Proving that #95 isn't through yet will test the heart of a champion on Piston Cup Racing’s biggest stage!",
    poster_path: '/jJ8TnHvWHaVadW5JJjGYsM07j9i.jpg',
    title: 'Cars 3',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 92.108,
      },
    ],
    release_date: '2017-06-15',
  },
  {
    adult: false,
    backdrop_path: '/pmZiChyJs5Y0tz7sMAiZNNIo9z4.jpg',
    genre_ids: [14, 16, 10751],
    id: 408,
    original_language: 'en',
    original_title: 'Snow White and the Seven Dwarfs',
    overview:
      'A beautiful girl, Snow White, takes refuge in the forest in the house of seven dwarfs to hide from her stepmother, the wicked Queen. The Queen is jealous because she wants to be known as "the fairest in the land," and Snow White\'s beauty surpasses her own.',
    poster_path: '/bOtgcOIFBCUFdY2a737Na6gWQ0X.jpg',
    title: 'Snow White and the Seven Dwarfs',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 92.042,
      },
    ],
    release_date: '1937-12-21',
  },
  {
    adult: false,
    backdrop_path: '/tav8VVa6H6KooK5rFhAG2jT5ZNx.jpg',
    genre_ids: [12, 18, 53],
    id: 390062,
    original_language: 'en',
    original_title: 'Jungle',
    overview:
      'In 1981, an enthusiastic young adventurer follows his dreams into the Bolivian Amazon jungle with two friends and a guide with a mysterious past. Their journey quickly turns into a terrifying ordeal as the darkest elements of human nature and the deadliest threats of the wilderness lead to an all-out fight for survival.',
    poster_path: '/tDgxknTVwrScxpCYyGUjXSn5NRk.jpg',
    title: 'Jungle',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 91.92,
      },
    ],
    release_date: '2017-06-27',
  },
  {
    adult: false,
    backdrop_path: '/ekP6EVxL81lZ4ivcqPsoZ72rY0h.jpg',
    genre_ids: [28, 18, 36],
    id: 449924,
    original_language: 'cn',
    original_title: '葉問4',
    overview:
      'Following the death of his wife, Ip Man travels to San Francisco to ease tensions between the local kung fu masters and his star student, Bruce Lee, while searching for a better future for his son.',
    poster_path: '/b5cz6BoyHrgBnhfDHOW5hXRWbln.jpg',
    title: 'Ip Man 4: The Finale',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 91.727,
      },
    ],
    release_date: '2019-12-19',
  },
  {
    adult: false,
    backdrop_path: '/1bjoIR8Yb3qDrflszNWlz9uo2JF.jpg',
    genre_ids: [28, 18, 27, 53],
    id: 433945,
    original_language: 'ja',
    original_title: '東京喰種 トーキョーグール',
    overview:
      'A Tokyo college student is attacked by a ghoul, a super-powered human who feeds on human flesh. He survives, but has become part ghoul and becomes a fugitive on the run.',
    poster_path: '/tMs8ZJ2dNJ0fExF7ISXJvOov4Y6.jpg',
    title: 'Tokyo Ghoul',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 91.632,
      },
    ],
    release_date: '2017-07-16',
  },
  {
    adult: false,
    backdrop_path: '/mvxR0mbDVQkQp3K1OhEU9iDbGcA.jpg',
    genre_ids: [35],
    id: 595813,
    original_language: 'en',
    original_title: 'Barb & Star Go to Vista Del Mar',
    overview:
      'The story of best friends Barb and Star, who leave their small midwestern town for the first time to go on vacation in Vista Del Mar, Florida, where they soon find themselves tangled up in adventure, love, and a villain’s evil plot to kill everyone in town.',
    poster_path: '/8oiV8GtBG7GDJa3ejvxZzJnBgff.jpg',
    title: 'Barb & Star Go to Vista Del Mar',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 91.527,
      },
    ],
    release_date: '2021-03-29',
  },
  {
    adult: false,
    backdrop_path: '/lIE7kfdLBRd0KENNtOaIqPPWNqh.jpg',
    genre_ids: [27, 18, 14],
    id: 590995,
    original_language: 'en',
    original_title: 'The Craft: Legacy',
    overview:
      'An eclectic foursome of aspiring teenage witches get more than they bargained for as they lean into their newfound powers.',
    poster_path: '/lhMIra0pqWNuD6CIXoTmGwZ0EBS.jpg',
    title: 'The Craft: Legacy',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 91.481,
      },
    ],
    release_date: '2020-10-28',
  },
  {
    adult: false,
    backdrop_path: '/tJRbPH8Q0divR3UkdpVxmNcd1YE.jpg',
    genre_ids: [12, 16, 35, 10751],
    id: 9948,
    original_language: 'en',
    original_title: 'The Fox and the Hound 2',
    overview:
      'Best friends Tod, a fox kit, and Copper, a hound puppy, visit a country fair when they see a band of dogs called "The Singin\' Strays". The band has five members: Dixie, Cash, Granny Rose, and twin brothers Waylon and Floyd. It is important that they perform well because a talent scout is visiting.',
    poster_path: '/o3b8nenAzu5OJk7sbPJURwmeHSV.jpg',
    title: 'The Fox and the Hound 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 91.424,
      },
    ],
    release_date: '2006-11-09',
  },
  {
    adult: false,
    backdrop_path: '/itiz2OBK4ns6XT0ufXtusojmMt9.jpg',
    genre_ids: [10749, 35],
    id: 454983,
    original_language: 'en',
    original_title: 'The Kissing Booth',
    overview:
      "When teenager Elle's first kiss leads to a forbidden romance with the hottest boy in high school, she risks her relationship with her best friend.",
    poster_path: '/7Dktk2ST6aL8h9Oe5rpk903VLhx.jpg',
    title: 'The Kissing Booth',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 91.142,
      },
    ],
    release_date: '2018-05-11',
  },
  {
    adult: false,
    backdrop_path: '/q3jiq1PRpOGnRScbj3cur7RkZYv.jpg',
    genre_ids: [28, 12, 18, 14],
    id: 221731,
    original_language: 'ja',
    original_title: 'るろうに剣心 京都大火編',
    overview:
      "Kenshin has settled into his new life with Kaoru and his other friends when he is approached with a request from the Meiji government. Makoto Shishio, a former assassin like Kenshin, was betrayed, set on fire and left for dead. He survived, and is now in Kyoto, plotting with his gathered warriors to overthrow the new government. Against Kaoru's wishes, Kenshin reluctantly agrees to go to Kyoto and help keep his country from falling back into civil war.",
    poster_path: '/gI2xYpJPQOsmFblvowkW2IgEHkC.jpg',
    title: 'Rurouni Kenshin Part II: Kyoto Inferno',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 91.062,
      },
    ],
    release_date: '2014-08-01',
  },
  {
    adult: false,
    backdrop_path: '/hph1RMsL4223xyqxfEx3OXodf5E.jpg',
    genre_ids: [28, 16, 878],
    id: 24752,
    original_language: 'ja',
    original_title: 'Doragon bôru Z 5: Tobikkiri no saikyô tai saikyô',
    overview:
      "After defeating Frieza, Goku returns to Earth and goes on a camping trip with Gohan and Krillin. Everything is normal until Cooler - Frieza's brother - sends three henchmen after Goku. A long fight ensues between our heroes and Cooler, in which he transforms into the fourth stage of his evolution and has the edge in the fight... until Goku transforms into a Super Saiyan.",
    poster_path: '/ywZWtNVTO7rGSFvOAPWpdmZlO6k.jpg',
    title: "Dragon Ball Z: Cooler's Revenge",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 90.922,
      },
    ],
    release_date: '1991-07-20',
  },
  {
    adult: false,
    backdrop_path: '/lVSMgZUBE4XTVaPBEBAczre4f1W.jpg',
    genre_ids: [9648, 878, 53],
    id: 565743,
    original_language: 'en',
    original_title: 'The Vast of Night',
    overview:
      'At the dawn of the space-race, two radio-obsessed teens discover a strange frequency over the airwaves in what becomes the most important night of their lives and in the history of their small town.',
    poster_path: '/suORidtGKPO6tWwNqiwGvNo85z3.jpg',
    title: 'The Vast of Night',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 90.877,
      },
    ],
    release_date: '2020-05-15',
  },
  {
    adult: false,
    backdrop_path: '/xVV8JrQKuHVjBS4CfwIMNktf70G.jpg',
    genre_ids: [53, 27, 878],
    id: 347548,
    original_language: 'en',
    original_title: 'Containment',
    overview:
      'Neighbors in a block wake one morning to find they have been sealed inside their apartments. Can they work together to find out why? Or will they destroy each other in their fight to escape?',
    poster_path: '/jMyudM6LM9VfIsR8ZRghlSpAdfv.jpg',
    title: 'Containment',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 90.633,
      },
    ],
    release_date: '2015-07-09',
  },
  {
    adult: false,
    backdrop_path: '/5KmhjlR5CEarB8mKtpjcjHRYIu9.jpg',
    genre_ids: [80, 28, 18],
    id: 535292,
    original_language: 'en',
    original_title: '21 Bridges',
    overview:
      'An embattled NYPD detective, is thrust into a citywide manhunt for a pair of cop killers after uncovering a massive and unexpected conspiracy. As the night unfolds, lines become blurred on who he is pursuing, and who is in pursuit of him.',
    poster_path: '/bSN9SysoRBMwJKNkfOlQlCw2YQO.jpg',
    title: '21 Bridges',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 90.577,
      },
    ],
    release_date: '2019-10-24',
  },
  {
    adult: false,
    backdrop_path: '/uzIGtyS6bbnJzGsPL93WCF1FWm8.jpg',
    genre_ids: [12, 28, 14],
    id: 1865,
    original_language: 'en',
    original_title: 'Pirates of the Caribbean: On Stranger Tides',
    overview:
      "Captain Jack Sparrow crosses paths with a woman from his past, and he's not sure if it's love -- or if she's a ruthless con artist who's using him to find the fabled Fountain of Youth. When she forces him aboard the Queen Anne's Revenge, the ship of the formidable pirate Blackbeard, Jack finds himself on an unexpected adventure in which he doesn't know who to fear more: Blackbeard or the woman from his past.",
    poster_path: '/6WMmcLzVg1ud5xS4yY5ZtarGIZy.jpg',
    title: 'Pirates of the Caribbean: On Stranger Tides',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 90.535,
      },
    ],
    release_date: '2011-05-14',
  },
  {
    adult: false,
    backdrop_path: '/msg5qdBIOceHaNNQfwF4Esa0UVD.jpg',
    genre_ids: [12, 28, 16],
    id: 50723,
    original_language: 'ja',
    original_title: '劇場版 NARUTO -ナルト- 疾風伝 ザ・ロストタワー',
    overview:
      'Assigned on a mission to capture Mukade, a missing-nin, Naruto Uzumaki sets out for the once glorious historic ruins of "Ouran", where he pursues and corners the rouge ninja. Mukade\'s goal is revealed to be a dormant leyline within the ruins; he unleashes the power of the leyline, causing a light to envelop Naruto, sending him into the past, 20 years before the series began. When Naruto awakens, he comes into contact with the Fourth Hokage, Minato Namikaze.',
    poster_path: '/6e2YvN1tQK4xQHlmy7GJTuXOt2u.jpg',
    title: 'Naruto Shippuden the Movie: The Lost Tower',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 90.434,
      },
    ],
    release_date: '2010-07-31',
  },
  {
    adult: false,
    backdrop_path: '/8tqVlaXwF2vbMWMDa909IhdrTRc.jpg',
    genre_ids: [878, 53],
    id: 505948,
    original_language: 'en',
    original_title: 'I Am Mother',
    overview:
      'A teenage girl is raised underground by a robot "Mother", designed to repopulate the earth following an extinction event. But their unique bond is threatened when an inexplicable stranger arrives with alarming news.',
    poster_path: '/b3jWxwWRFqvNDJTvBcmKJVHnzKK.jpg',
    title: 'I Am Mother',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 89.85,
      },
    ],
    release_date: '2019-06-07',
  },
  {
    adult: false,
    backdrop_path: '/9KuWUHLVYRrfC1Cm8gw89hgx9fA.jpg',
    genre_ids: [14, 27],
    id: 405882,
    original_language: 'en',
    original_title: "Don't Kill It",
    overview:
      'Demon hunter, Jebediah Huntley teams up with an FBI agent to battle a supernatural force in the southern state of Mississippi.',
    poster_path: '/iQey3UeqU4uQzr82GQJ1pZMwe40.jpg',
    title: "Don't Kill It",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 56.416,
      },
    ],
    release_date: '2016-08-27',
  },
  {
    adult: false,
    backdrop_path: '/o33acwn7KliNpJRbjy4FrMSpiQ9.jpg',
    genre_ids: [35, 18, 10402],
    id: 654299,
    original_language: 'es',
    original_title: 'Como caído del cielo',
    overview:
      'Returning to Earth as an imitator, the legendary Mexican artist Pedro Infante must prove that he is no longer a womanizer to enter paradise.',
    poster_path: '/xg6QZdlHrq2dtSK8cfnQQMnmpeY.jpg',
    title: 'Out Of The Clear Blue Sky',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.2,
      },
      {
        id: 'popularity',
        rating: 56.388,
      },
    ],
    release_date: '2019-12-24',
  },
  {
    adult: false,
    backdrop_path: '/ii8QGacT3MXESqBckQlyrATY0lT.jpg',
    genre_ids: [28, 878, 12],
    id: 27205,
    original_language: 'en',
    original_title: 'Inception',
    overview:
      'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of another person\'s idea into a target\'s subconscious.',
    poster_path: '/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    title: 'Inception',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.3,
      },
      {
        id: 'popularity',
        rating: 56.376,
      },
    ],
    release_date: '2010-07-15',
  },
  {
    adult: false,
    backdrop_path: '/kxklJL1v8MYEU5xdU6W5VvmBwVz.jpg',
    genre_ids: [14, 12, 16, 10751],
    id: 10191,
    original_language: 'en',
    original_title: 'How to Train Your Dragon',
    overview:
      'As the son of a Viking leader on the cusp of manhood, shy Hiccup Horrendous Haddock III faces a rite of passage: he must kill a dragon to prove his warrior mettle. But after downing a feared dragon, he realizes that he no longer wants to destroy it, and instead befriends the beast – which he names Toothless – much to the chagrin of his warrior father',
    poster_path: '/ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg',
    title: 'How to Train Your Dragon',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 56.327,
      },
    ],
    release_date: '2010-03-10',
  },
  {
    adult: false,
    backdrop_path: '/rNwWgOyZApaZy9IUKJ4C3tSu8yD.jpg',
    genre_ids: [878, 28],
    id: 315837,
    original_language: 'en',
    original_title: 'Ghost in the Shell',
    overview:
      "In the near future, Major is the first of her kind: a human saved from a terrible crash, then cyber-enhanced to be a perfect soldier devoted to stopping the world's most dangerous criminals.",
    poster_path: '/myRzRzCxdfUWjkJWgpHHZ1oGkJd.jpg',
    title: 'Ghost in the Shell',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 56.317,
      },
    ],
    release_date: '2017-03-29',
  },
  {
    adult: false,
    backdrop_path: '/7KAXYsemH14agl4ohhNeIxwWXhj.jpg',
    genre_ids: [28, 12, 80],
    id: 47971,
    original_language: 'en',
    original_title: 'xXx: Return of Xander Cage',
    overview:
      "Extreme athlete turned government operative Xander Cage comes out of self-imposed exile, thought to be long dead, and is set on a collision course with deadly alpha warrior Xiang and his team in a race to recover a sinister and seemingly unstoppable weapon known as Pandora's Box. Recruiting an all-new group of thrill-seeking cohorts, Xander finds himself enmeshed in a deadly conspiracy that points to collusion at the highest levels of world governments.",
    poster_path: '/hba8zREJpP1AYhaXgb2oJLQeO0K.jpg',
    title: 'xXx: Return of Xander Cage',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 56.27,
      },
    ],
    release_date: '2017-01-13',
  },
  {
    adult: false,
    backdrop_path: '/eWAmfnP2DGIS2sEZ8tSua6yfwLA.jpg',
    genre_ids: [12, 14, 18, 10749],
    id: 18239,
    original_language: 'en',
    original_title: 'The Twilight Saga: New Moon',
    overview:
      "Forks, Washington resident Bella Swan is reeling from the departure of her vampire love, Edward Cullen, and finds comfort in her friendship with Jacob Black, a werewolf. But before she knows it, she's thrust into a centuries-old conflict, and her desire to be with Edward at any cost leads her to take greater and greater risks.",
    poster_path: '/j5jM5pq78ObAXX1WhTsb115EkLl.jpg',
    title: 'The Twilight Saga: New Moon',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 56.115,
      },
    ],
    release_date: '2009-11-18',
  },
  {
    adult: false,
    backdrop_path: '/azTsf28VYj0rw6ql67fB8WnxbZX.jpg',
    genre_ids: [53, 27],
    id: 554585,
    original_language: 'es',
    original_title: 'Sin origen',
    overview: 'A group of arcanes enjoy fighting vampires.',
    poster_path: '/77lI0btz8qkExY13MKXaPrf4cA6.jpg',
    title: 'Originless',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.6,
      },
      {
        id: 'popularity',
        rating: 56.05,
      },
    ],
    release_date: '2020-10-25',
  },
  {
    adult: false,
    backdrop_path: '/y2Cl2LBYaabgtSLlOa4VqnOiNin.jpg',
    genre_ids: [28, 12, 18, 10751],
    id: 38575,
    original_language: 'en',
    original_title: 'The Karate Kid',
    overview:
      "Twelve-year-old Dre Parker could have been the most popular kid in Detroit, but his mother's latest career move has landed him in China. Dre immediately falls for his classmate Mei Ying but the cultural differences make such a friendship impossible. Even worse, Dre's feelings make him an enemy of the class bully, Cheng. With no friends in a strange land, Dre has nowhere to turn but maintenance man Mr. Han, who is a kung fu master. As Han teaches Dre that kung fu is not about punches and parries, but maturity and calm, Dre realizes that facing down the bullies will be the fight of his life.",
    poster_path: '/tAMQREOoztvluqrfHiGHFVfB04B.jpg',
    title: 'The Karate Kid',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 56.025,
      },
    ],
    release_date: '2010-06-10',
  },
  {
    adult: false,
    backdrop_path: '/leQrhcnNj62csRrZarQoeJ5krpK.jpg',
    genre_ids: [10751],
    id: 467988,
    original_language: 'en',
    original_title: 'Camp Cool Kids',
    overview:
      'Encouraged by his quirky grandfather, a young boy faces his fears at summer camp.',
    poster_path: '/e5AG8ESF1JpG3A8AFKoUC1WztsD.jpg',
    title: 'Camp Cool Kids',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.5,
      },
      {
        id: 'popularity',
        rating: 55.965,
      },
    ],
    release_date: '2017-07-11',
  },
  {
    adult: false,
    backdrop_path: '/2JGYpteleFedXVJYKMR6Za7oBU9.jpg',
    genre_ids: [878, 12, 9648],
    id: 70981,
    original_language: 'en',
    original_title: 'Prometheus',
    overview:
      'A team of explorers discover a clue to the origins of mankind on Earth, leading them on a journey to the darkest corners of the universe. There, they must fight a terrifying battle to save the future of the human race.',
    poster_path: '/qsYQflQhOuhDpQ0W2aOcwqgDAeI.jpg',
    title: 'Prometheus',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 55.942,
      },
    ],
    release_date: '2012-05-30',
  },
  {
    adult: false,
    backdrop_path: '/fXFQnOSbybaU9h2kJ3jtRUU4OpA.jpg',
    genre_ids: [28, 27, 878, 10770],
    id: 523931,
    original_language: 'en',
    original_title: 'Megalodon',
    overview:
      'A military vessel on the search for an unidentified submersible finds themselves face to face with a giant shark, forced to use only what they have on board to defend themselves from the monstrous beast.',
    poster_path: '/hES2eVAbVt08JJTqgu3jmI34Yxx.jpg',
    title: 'Megalodon',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.7,
      },
      {
        id: 'popularity',
        rating: 55.844,
      },
    ],
    release_date: '2018-08-13',
  },
  {
    adult: false,
    backdrop_path: '/bylGn5OC2h3BWfGLYFtIcxlYxLy.jpg',
    genre_ids: [27, 53],
    id: 49018,
    original_language: 'en',
    original_title: 'Insidious',
    overview:
      'A family discovers that dark spirits have invaded their home after their son inexplicably falls into an endless sleep. When they reach out to a professional for help, they learn things are a lot more personal than they thought.',
    poster_path: '/tmlDFIUpGRKiuWm9Ixc6CYDk4y0.jpg',
    title: 'Insidious',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 55.842,
      },
    ],
    release_date: '2010-09-13',
  },
  {
    adult: false,
    backdrop_path: '/anSPPInN5tY6Bk1sOwLLTJAFzTq.jpg',
    genre_ids: [16, 35, 10751, 37, 12],
    id: 44896,
    original_language: 'en',
    original_title: 'Rango',
    overview:
      'When Rango, a lost family pet, accidentally winds up in the gritty, gun-slinging town of Dirt, the less-than-courageous lizard suddenly finds he stands out. Welcomed as the last hope the town has been waiting for, new Sheriff Rango is forced to play his new role to the hilt.',
    poster_path: '/h9GJiKuuJ650dte0gyzLD3ILcIh.jpg',
    title: 'Rango',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 55.809,
      },
    ],
    release_date: '2011-03-02',
  },
  {
    adult: false,
    backdrop_path: '/zlU8BIkgY7E6SMfD3USTWC6bchL.jpg',
    genre_ids: [878, 28, 18, 53],
    id: 119450,
    original_language: 'en',
    original_title: 'Dawn of the Planet of the Apes',
    overview:
      'A group of scientists in San Francisco struggle to stay alive in the aftermath of a plague that is wiping out humanity, while Caesar tries to maintain dominance over his community of intelligent apes.',
    poster_path: '/bkbCszeGN1qnXabfkL3kcOunQLG.jpg',
    title: 'Dawn of the Planet of the Apes',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 55.804,
      },
    ],
    release_date: '2014-06-26',
  },
  {
    adult: false,
    backdrop_path: '/3ZQRLuXNTbewOHDfxF51fy74gh4.jpg',
    genre_ids: [28, 80, 53],
    id: 430040,
    original_language: 'en',
    original_title: 'The Hurricane Heist',
    overview:
      'Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities.',
    poster_path: '/rAmcj5IZcx59dhev3UnVDEGlImK.jpg',
    title: 'The Hurricane Heist',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.7,
      },
      {
        id: 'popularity',
        rating: 55.722,
      },
    ],
    release_date: '2018-02-28',
  },
  {
    adult: false,
    backdrop_path: '/doNIj6jX27hhfcbD6GEb22ydLSF.jpg',
    genre_ids: [16, 35, 10751],
    id: 22794,
    original_language: 'en',
    original_title: 'Cloudy with a Chance of Meatballs',
    overview:
      'Inventor Flint Lockwood creates a machine that makes clouds rain food, enabling the down-and-out citizens of Chewandswallow to feed themselves. But when the falling food reaches gargantuan proportions, Flint must scramble to avert disaster. Can he regain control of the machine and put an end to the wild weather before the town is destroyed?',
    poster_path: '/qhOhIKf7QEyQ5dMrRUqs5eTX1Oq.jpg',
    title: 'Cloudy with a Chance of Meatballs',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 55.709,
      },
    ],
    release_date: '2009-09-17',
  },
  {
    adult: false,
    backdrop_path: '/1Gf5YdhlJ1G7Tf7WkSRrs6ssZ3G.jpg',
    genre_ids: [99],
    id: 24593,
    original_language: 'en',
    original_title: 'Thinking XXX',
    overview:
      'For a book project, photographer Timothy Greenfield-Sanders took photographs of 30 stars of adult movies, each pair of photographs in the same pose, clothed and nude. This film records the photo shoots and includes interviews with the performers and commentary from eight writers (and John Waters). The actors and writers discuss economics, nudity and exhibitionism, careers, and private lives.',
    poster_path: '/kqB0fF7VlODmw1exH4iDZHGUiVI.jpg',
    title: 'Thinking XXX',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.8,
      },
      {
        id: 'popularity',
        rating: 55.691,
      },
    ],
    release_date: '2004-10-27',
  },
  {
    adult: false,
    backdrop_path: '/aYuYAAE7Va8zQxeM0A2X4FmGQsU.jpg',
    genre_ids: [28, 12, 14],
    id: 311324,
    original_language: 'en',
    original_title: 'The Great Wall',
    overview:
      'European mercenaries searching for black powder become embroiled in the defense of the Great Wall of China against a horde of monstrous creatures.',
    poster_path: '/p70dq1YxabemdZDm5K6Q8G10wSn.jpg',
    title: 'The Great Wall',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 55.659,
      },
    ],
    release_date: '2016-12-16',
  },
  {
    adult: false,
    backdrop_path: '/3rIocL2KDm8d2sCVmqDI0IEK2vF.jpg',
    genre_ids: [27, 28, 878, 10770],
    id: 520466,
    original_language: 'en',
    original_title: 'Lake Placid: Legacy',
    overview:
      'A group of young explorers discover a secret area hidden from all maps and GPS devices. When they reach the center of the lake, they discover an abandoned facility that houses one of the largest, and deadliest apex-predators known to man.',
    poster_path: '/eBZXrR5zlGdRAXuugtUQo9D4dCp.jpg',
    title: 'Lake Placid: Legacy',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.1,
      },
      {
        id: 'popularity',
        rating: 55.583,
      },
    ],
    release_date: '2018-05-28',
  },
  {
    adult: false,
    backdrop_path: '/8TiIC1MZ0I6MASoZPS0qmB0YnAA.jpg',
    genre_ids: [10402, 99],
    id: 774372,
    original_language: 'en',
    original_title: 'ariana grande: excuse me, i love you',
    overview:
      'Ariana Grande takes the stage in London for her Sweetener World Tour and shares a behind-the-scenes look at her life in rehearsal and on the road.',
    poster_path: '/nm10ajNVkKwwyf8VFPkZnr93GbC.jpg',
    title: 'ariana grande: excuse me, i love you',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.4,
      },
      {
        id: 'popularity',
        rating: 48.95,
      },
    ],
    release_date: '2020-12-21',
  },
  {
    adult: false,
    backdrop_path: '/hUPgIibqZlwbhs4N08cPzzc4f5K.jpg',
    genre_ids: [28, 12, 14, 878],
    id: 127585,
    original_language: 'en',
    original_title: 'X-Men: Days of Future Past',
    overview:
      'The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past – to save our future.',
    poster_path: '/bvN8iUpHyBIvniUk4e52SUZMA7Z.jpg',
    title: 'X-Men: Days of Future Past',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 48.877,
      },
    ],
    release_date: '2014-05-15',
  },
  {
    adult: false,
    backdrop_path: '/2hHkKgw9DW0pX0NLO4l8ds41p5M.jpg',
    genre_ids: [53, 80, 27],
    id: 43947,
    original_language: 'en',
    original_title: 'I Spit on Your Grave',
    overview:
      'Jennifer is a writer working on a new novel and, needing to get out of the city to finish it, hires a riverside apartment in upstate New York to finish her book—attracting the attention of a number of rowdy male locals.',
    poster_path: '/7hUHtWT0I0ex84megfNKdTPTRWK.jpg',
    title: 'I Spit on Your Grave',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 48.801,
      },
    ],
    release_date: '2010-06-17',
  },
  {
    adult: false,
    backdrop_path: '/3d20u9US1OcJaRcCsGonWJK4drZ.jpg',
    genre_ids: [12, 16, 10751, 28],
    id: 552095,
    original_language: 'en',
    original_title: 'PAW Patrol: Mighty Pups',
    overview:
      "When their latest scheme goes awry, Mayor Humdinger and his nephew Harold accidentally divert a meteor towards Adventure Bay. The meteor's golden energy grants the PAW Patrol superpowers. The heroic Mighty Pups are on a roll to super-save the day.",
    poster_path: '/h09VT8gNfRBlr7S8l1lm27m4rus.jpg',
    title: 'PAW Patrol: Mighty Pups',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 48.737,
      },
    ],
    release_date: '2019-05-17',
  },
  {
    adult: false,
    backdrop_path: '/nl18gyzai02Tu99VkURu7kCFrR8.jpg',
    genre_ids: [28, 12],
    id: 184315,
    original_language: 'en',
    original_title: 'Hercules',
    overview:
      'Fourteen hundred years ago, a tormented soul walked the earth that was neither man nor god. Hercules was the powerful son of the god king Zeus, for this he received nothing but suffering his entire life. After twelve arduous labors and the loss of his family, this dark, world-weary soul turned his back on the gods finding his only solace in bloody battle. Over the years he warmed to the company of six similar souls, their only bond being their love of fighting and presence of death. These men and woman never question where they go to fight or why or whom, just how much they will be paid. Now the King of Thrace has hired these mercenaries to train his men to become the greatest army of all time. It is time for this bunch of lost souls to finally have their eyes opened to how far they have fallen when they must train an army to become as ruthless and blood thirsty as their reputation has become.',
    poster_path: '/5X3VOy9lD44VclKsWTi8gHZGjhL.jpg',
    title: 'Hercules',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.7,
      },
      {
        id: 'popularity',
        rating: 48.715,
      },
    ],
    release_date: '2014-07-23',
  },
  {
    adult: false,
    backdrop_path: '/shC9fVKXakC73oCNKQ6bBru9O4t.jpg',
    genre_ids: [28, 12, 53, 10752],
    id: 1369,
    original_language: 'en',
    original_title: 'Rambo: First Blood Part II',
    overview:
      "John Rambo is released from prison by the government for a top-secret covert mission to the last place on Earth he'd want to return - the jungles of Vietnam.",
    poster_path: '/lIyUiHted0eWUceCx2ZHLnQGmgy.jpg',
    title: 'Rambo: First Blood Part II',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 48.682,
      },
    ],
    release_date: '1985-05-21',
  },
  {
    adult: false,
    backdrop_path: '/mwHnJBehQaMnH2XjEeitBfoGB0L.jpg',
    genre_ids: [28, 12, 878],
    id: 131634,
    original_language: 'en',
    original_title: 'The Hunger Games: Mockingjay - Part 2',
    overview:
      'With the nation of Panem in a full scale war, Katniss confronts President Snow in the final showdown. Teamed with a group of her closest friends – including Gale, Finnick, and Peeta – Katniss goes off on a mission with the unit from District 13 as they risk their lives to stage an assassination attempt on President Snow who has become increasingly obsessed with destroying her. The mortal traps, enemies, and moral choices that await Katniss will challenge her more than any arena she faced in The Hunger Games.',
    poster_path: '/lImKHDfExAulp16grYm8zD5eONE.jpg',
    title: 'The Hunger Games: Mockingjay - Part 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 48.619,
      },
    ],
    release_date: '2015-11-18',
  },
  {
    adult: false,
    backdrop_path: '/i9ypo2EPubwkD5XLiAHqPG7OMHg.jpg',
    genre_ids: [27, 53],
    id: 9792,
    original_language: 'en',
    original_title: 'The Hills Have Eyes',
    overview:
      "Based on Wes Craven's 1977 suspenseful cult classic, The Hills Have Eyes is the story of a family road trip that goes terrifyingly awry when the travelers become stranded in a government atomic zone. Miles from nowhere, the Carter family soon realizes the seemingly uninhabited wasteland is actually the breeding ground of a blood-thirsty mutant family...and they are the prey.",
    poster_path: '/qj4C2c96T1n3YnYxFG5l5bSTKbM.jpg',
    title: 'The Hills Have Eyes',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 48.596,
      },
    ],
    release_date: '2006-03-10',
  },
  {
    adult: false,
    backdrop_path: '/5rYnygKCkmqWuMv1O5yAnzGF8gV.jpg',
    genre_ids: [12, 878, 28],
    id: 339964,
    original_language: 'en',
    original_title: 'Valerian and the City of a Thousand Planets',
    overview:
      'In the 28th century, Valerian and Laureline are special operatives charged with keeping order throughout the human territories. On assignment from the Minister of Defense, the two undertake a mission to Alpha, an ever-expanding metropolis where species from across the universe have converged over centuries to share knowledge, intelligence, and cultures. At the center of Alpha is a mysterious dark force which threatens the peaceful existence of the City of a Thousand Planets, and Valerian and Laureline must race to identify the menace and safeguard not just Alpha, but the future of the universe.',
    poster_path: '/jfIpMh79fGRqYJ6PwZLCntzgxlF.jpg',
    title: 'Valerian and the City of a Thousand Planets',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 48.566,
      },
    ],
    release_date: '2017-07-20',
  },
  {
    adult: false,
    backdrop_path: '/lkCDvf3QjXpAycm896oH1LRTK5X.jpg',
    genre_ids: [16, 35, 10751],
    id: 462883,
    original_language: 'en',
    original_title: 'Woody Woodpecker',
    overview:
      'Woody Woodpecker enters a turf war with a big city lawyer wanting to tear down his home in an effort to build a house to flip.',
    poster_path: '/vFGUsJTa8z0OfDTbjdyppAireeB.jpg',
    title: 'Woody Woodpecker',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 48.556,
      },
    ],
    release_date: '2017-10-05',
  },
  {
    adult: false,
    backdrop_path: '/sHNC8hjAu4ZKXYhG3cp8ghRZ02B.jpg',
    genre_ids: [27, 10752, 878],
    id: 438799,
    original_language: 'en',
    original_title: 'Overlord',
    overview:
      'France, June 1944. On the eve of D-Day, some American paratroopers fall behind enemy lines after their aircraft crashes while on a mission to destroy a radio tower in a small village near the beaches of Normandy. After reaching their target, the surviving paratroopers realise that, in addition to fighting the Nazi troops that patrol the village, they also must fight against something else.',
    poster_path: '/l76Rgp32z2UxjULApxGXAPpYdAP.jpg',
    title: 'Overlord',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 48.497,
      },
    ],
    release_date: '2018-11-01',
  },
  {
    adult: false,
    backdrop_path: '/g6E3007axIAMfVvMP5gJhsttZ5X.jpg',
    genre_ids: [28, 12, 878, 53],
    id: 262500,
    original_language: 'en',
    original_title: 'Insurgent',
    overview:
      'Beatrice Prior must confront her inner demons and continue her fight against a powerful alliance which threatens to tear her society apart.',
    poster_path: '/dP5Fb6YRfzmCQtRbHOr2kO7tJW9.jpg',
    title: 'Insurgent',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 48.457,
      },
    ],
    release_date: '2015-03-18',
  },
  {
    adult: false,
    backdrop_path: '/quxidIBA4BNKRbk03JBRzu586Ep.jpg',
    genre_ids: [10749, 35],
    id: 351819,
    original_language: 'en',
    original_title: 'Fifty Shades of Black',
    overview:
      'An inexperienced college student meets a wealthy businessman whose sexual practices put a strain on their relationship.',
    poster_path: '/fYRiZ3vJuuCYb9H7HXfpjKO9Jd6.jpg',
    title: 'Fifty Shades of Black',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.9,
      },
      {
        id: 'popularity',
        rating: 48.443,
      },
    ],
    release_date: '2016-01-28',
  },
  {
    adult: false,
    backdrop_path: '/vwBa7djy1oxfxUjc7YtVgGNsjrT.jpg',
    genre_ids: [14, 16, 12],
    id: 4935,
    original_language: 'ja',
    original_title: 'ハウルの動く城',
    overview:
      'When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.',
    poster_path: '/TkTPELv4kC3u1lkloush8skOjE.jpg',
    title: "Howl's Moving Castle",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.4,
      },
      {
        id: 'popularity',
        rating: 48.437,
      },
    ],
    release_date: '2004-11-19',
  },
  {
    adult: false,
    backdrop_path: '/h3ir8VfpSEtoEBJjEarEludkjKL.jpg',
    genre_ids: [28, 878, 53],
    id: 460648,
    original_language: 'zh',
    original_title: '机器之血',
    overview:
      'Jackie Chan stars as a hardened special forces agent who fights to protect a young woman from a sinister criminal gang. At the same time, he feels a special connection to the young woman, like they met in a different life.',
    poster_path: '/8qqPmQr0s2bZHPBMASpBXOKUZoi.jpg',
    title: 'Bleeding Steel',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 48.425,
      },
    ],
    release_date: '2017-12-18',
  },
  {
    adult: false,
    backdrop_path: '/rsLsIr01JJN2IBnTThIXEg1fDAV.jpg',
    genre_ids: [53, 80, 28],
    id: 265208,
    original_language: 'en',
    original_title: 'Wild Card',
    overview:
      "When a Las Vegas bodyguard with lethal skills and a gambling problem gets in trouble with the mob, he has one last play… and it's all or nothing.",
    poster_path: '/zN80Tlly8oMpKbVJv2TfRIj8dHG.jpg',
    title: 'Wild Card',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.6,
      },
      {
        id: 'popularity',
        rating: 48.375,
      },
    ],
    release_date: '2015-01-14',
  },
  {
    adult: false,
    backdrop_path: '/aKIrKbszS7Kq0aTGTCRTYMp1EDX.jpg',
    genre_ids: [35, 18, 10402],
    id: 583689,
    original_language: 'en',
    original_title: 'Moxie',
    overview:
      "Inspired by her mom's rebellious past and a confident new friend, a shy 16-year-old publishes an anonymous zine calling out sexism at her school.",
    poster_path: '/aLBo1Ca9PggcWY98ItW5ZkdxTuA.jpg',
    title: 'Moxie',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 48.284,
      },
    ],
    release_date: '2021-03-03',
  },
  {
    adult: false,
    backdrop_path: '/8GXri7UnwE7dVNfUAZVDn7Z8UBZ.jpg',
    genre_ids: [12, 28, 37],
    id: 333484,
    original_language: 'en',
    original_title: 'The Magnificent Seven',
    overview:
      'Looking to mine for gold, greedy industrialist Bartholomew Bogue seizes control of the Old West town of Rose Creek. With their lives in jeopardy, Emma Cullen and other desperate residents turn to bounty hunter Sam Chisolm for help. Chisolm recruits an eclectic group of gunslingers to take on Bogue and his ruthless henchmen. With a deadly showdown on the horizon, the seven mercenaries soon find themselves fighting for more than just money once the bullets start to fly.',
    poster_path: '/ezcS78TIjgr85pVdaPDd2rSPVNs.jpg',
    title: 'The Magnificent Seven',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 48.273,
      },
    ],
    release_date: '2016-09-14',
  },
  {
    adult: false,
    backdrop_path: '/oTXIEUqVqGTtdpaNEaC8cJwDtfs.jpg',
    genre_ids: [18, 28, 53],
    id: 459910,
    original_language: 'en',
    original_title: 'Braven',
    overview:
      'A logger defends his family from a group of dangerous drug runners.',
    poster_path: '/253Bw5I3Zj3e2thCThjO7byEUCL.jpg',
    title: 'Braven',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 48.263,
      },
    ],
    release_date: '2018-02-01',
  },
  {
    adult: false,
    backdrop_path: '/kODNw6GJNdgldUMEhKPlCw8wQCr.jpg',
    genre_ids: [18],
    id: 312221,
    original_language: 'en',
    original_title: 'Creed',
    overview:
      'The former World Heavyweight Champion Rocky Balboa serves as a trainer and mentor to Adonis Johnson, the son of his late friend and former rival Apollo Creed.',
    poster_path: '/iBq4od6j1ZAvDVO7hwmHT2Xf2Bt.jpg',
    title: 'Creed',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 48.18,
      },
    ],
    release_date: '2015-11-25',
  },
  {
    adult: false,
    backdrop_path: '/g9FXX01Us3rW8jhOAPWpgO6KnX9.jpg',
    genre_ids: [10751, 9648, 35, 14],
    id: 550440,
    original_language: 'en',
    original_title: 'Timmy Failure: Mistakes Were Made',
    overview:
      'An 11-year old boy believes that he is the best detective in town and runs the agency Total Failures with his best friend, an imaginary 1,200 pound polar bear.',
    poster_path: '/9Ic99kyJewgPHwl4JftJSwzUmtD.jpg',
    title: 'Timmy Failure: Mistakes Were Made',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 74.589,
      },
    ],
    release_date: '2020-01-25',
  },
  {
    adult: false,
    backdrop_path: '/78Gr5IXlVc7vGbWFQZAvRB9HKSv.jpg',
    genre_ids: [27],
    id: 733491,
    original_language: 'en',
    original_title: 'They Live Inside Us',
    overview:
      'Seeking inspiration for a new writing project, a man spends Halloween night in a notoriously haunted house. He soon realizes he is living in his own horror story.',
    poster_path: '/hVGBsF3MvHuBxLsAaBVjNoU58X.jpg',
    title: 'They Live Inside Us',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 74.536,
      },
    ],
    release_date: '2020-10-06',
  },
  {
    adult: false,
    backdrop_path: '/aw4FOsWr2FY373nKSxbpNi3fz4F.jpg',
    genre_ids: [28, 12],
    id: 353081,
    original_language: 'en',
    original_title: 'Mission: Impossible - Fallout',
    overview:
      'When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfill his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.',
    poster_path: '/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg',
    title: 'Mission: Impossible - Fallout',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 74.484,
      },
    ],
    release_date: '2018-07-13',
  },
  {
    adult: false,
    backdrop_path: '/qjhcTGnjxYJqwBGlDzZkYWmne6e.jpg',
    genre_ids: [10749, 35, 18],
    id: 614409,
    original_language: 'en',
    original_title: 'To All the Boys: Always and Forever',
    overview:
      'Senior year of high school takes center stage as Lara Jean returns from a family trip to Korea and considers her college plans — with and without Peter.',
    poster_path: '/zdkJs9j6yKo9di0kjtctM01fSMv.jpg',
    title: 'To All the Boys: Always and Forever',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 74.473,
      },
    ],
    release_date: '2021-02-12',
  },
  {
    adult: false,
    backdrop_path: '/kWYfW2Re0rUDE6IHhy4CRuKWeFr.jpg',
    genre_ids: [12, 14, 28],
    id: 121,
    original_language: 'en',
    original_title: 'The Lord of the Rings: The Two Towers',
    overview:
      'Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.',
    poster_path: '/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg',
    title: 'The Lord of the Rings: The Two Towers',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.3,
      },
      {
        id: 'popularity',
        rating: 74.452,
      },
    ],
    release_date: '2002-12-18',
  },
  {
    adult: false,
    backdrop_path: '/6jajFcaY2YsfGQstJ5HaqZNVseX.jpg',
    genre_ids: [27, 878, 9648],
    id: 126889,
    original_language: 'en',
    original_title: 'Alien: Covenant',
    overview:
      "Bound for a remote planet on the far side of the galaxy, the crew of the colony ship 'Covenant' discovers what is thought to be an uncharted paradise, but is actually a dark, dangerous world—which has a sole inhabitant: the 'synthetic', David, survivor of the doomed Prometheus expedition.",
    poster_path: '/zecMELPbU5YMQpC81Z8ImaaXuf9.jpg',
    title: 'Alien: Covenant',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 74.364,
      },
    ],
    release_date: '2017-05-09',
  },
  {
    adult: false,
    backdrop_path: '/9LsJP9OuIBmBUxZpmVKtUUjF0PA.jpg',
    genre_ids: [10749, 35],
    id: 565426,
    original_language: 'en',
    original_title: 'To All the Boys: P.S. I Still Love You',
    overview:
      'Lara Jean and Peter have just taken their romance from pretend to officially real when another recipient of one of her love letters enters the picture.',
    poster_path: '/maib5VlmEqp5xlN8lptnBSftp2o.jpg',
    title: 'To All the Boys: P.S. I Still Love You',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 74.325,
      },
    ],
    release_date: '2020-02-12',
  },
  {
    adult: false,
    backdrop_path: '/1ZIeGwD2lMlLMr4u6IIR302jqhD.jpg',
    genre_ids: [80, 35, 28, 12],
    id: 207703,
    original_language: 'en',
    original_title: 'Kingsman: The Secret Service',
    overview:
      "The story of a super-secret spy organization that recruits an unrefined but promising street kid into the agency's ultra-competitive training program just as a global threat emerges from a twisted tech genius.",
    poster_path: '/ay7xwXn1G9fzX9TUBlkGA584rGi.jpg',
    title: 'Kingsman: The Secret Service',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 74.188,
      },
    ],
    release_date: '2014-12-13',
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [28, 80, 53],
    id: 603692,
    original_language: 'en',
    original_title: 'John Wick: Chapter 4',
    overview: '',
    poster_path: '/kPsRQfoyYgcpbI6hvDQvUSCo0q3.jpg',
    title: 'John Wick: Chapter 4',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 73.999,
      },
    ],
    release_date: '2022-05-25',
  },
  {
    adult: false,
    backdrop_path: '/h1BoDAepuEmEMC2qhjBONAYhre7.jpg',
    genre_ids: [10749],
    id: 698009,
    original_language: 'en',
    original_title: '어린 처제 3',
    overview:
      'Yoo-jin and Myeong-seok get a call from Hye-jin in the middle of the night. She finally escapes from domestic violence and comes to live with her sister. However, Myeong-seok is nice to her and Hye-jin starts to feel fond of him...',
    poster_path: '/swEYylf53k2aGZHjv9PuIxalWQE.jpg',
    title: 'Young Sister-in-law 3 - 2019',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5,
      },
      {
        id: 'popularity',
        rating: 73.667,
      },
    ],
    release_date: '2019-05-24',
  },
  {
    adult: false,
    backdrop_path: '/3RWsSQlqzRjsuqSRmoyggy74UA7.jpg',
    genre_ids: [28, 14, 35],
    id: 43074,
    original_language: 'en',
    original_title: 'Ghostbusters',
    overview:
      'Following a ghost invasion of Manhattan, paranormal enthusiasts Erin Gilbert and Abby Yates, nuclear engineer Jillian Holtzmann, and subway worker Patty Tolan band together to stop the otherworldly threat.',
    poster_path: '/wJmWliwXIgZOCCVOcGRBhce7xPS.jpg',
    title: 'Ghostbusters',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.4,
      },
      {
        id: 'popularity',
        rating: 73.645,
      },
    ],
    release_date: '2016-07-14',
  },
  {
    adult: false,
    backdrop_path: '/gFWvMJNVITKrSmtj42BtjLCB48C.jpg',
    genre_ids: [28, 10752],
    id: 546230,
    original_language: 'ms',
    original_title: 'Paskal',
    overview:
      "The true events of Lieutenant Commander Arman Anwar of PASKAL, an elite unit in the Royal Malaysian Navy, and his team's mission to rescue the MV Bunga Laurel, a tanker which was hijacked by Somalian Pirates in 2011.",
    poster_path: '/oAPqB8wIKFXJAs8hJJbYaLHcngt.jpg',
    title: 'Paskal',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 73.486,
      },
    ],
    release_date: '2018-09-27',
  },
  {
    adult: false,
    backdrop_path: '/2gBMBfmQvHeOQQ5PiKiuxVdGs77.jpg',
    genre_ids: [27, 53, 18],
    id: 587496,
    original_language: 'en',
    original_title: 'The Rental',
    overview:
      'Two couples on an oceanside getaway grow suspicious that the host of their seemingly perfect rental house may be spying on them. Before long, what should have been a celebratory weekend trip turns into something far more sinister.',
    poster_path: '/3ynPnBXQVT2Y0s19fDIPlWKUlxH.jpg',
    title: 'The Rental',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.6,
      },
      {
        id: 'popularity',
        rating: 73.483,
      },
    ],
    release_date: '2020-07-23',
  },
  {
    adult: false,
    backdrop_path: '/yBxq43FaskaXDGKWNJQmM75WoGS.jpg',
    genre_ids: [12, 18, 10749],
    id: 514921,
    original_language: 'en',
    original_title: 'The Aeronauts',
    overview:
      'In 1862, daredevil balloon pilot Amelia Wren teams up with pioneering meteorologist James Glaisher to advance human knowledge of the weather and fly higher than anyone in history. While breaking records and advancing scientific discovery, their voyage to the very edge of existence helps the unlikely pair find their place in the world they have left far below them. But they face physical and emotional challenges in the thin air, as the ascent becomes a fight for survival.',
    poster_path: '/kZHnblqmTBUBgzYBIxWIz9txsEi.jpg',
    title: 'The Aeronauts',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 73.39,
      },
    ],
    release_date: '2019-11-04',
  },
  {
    adult: false,
    backdrop_path: '/2kLxuulkqHJHzTLveWGHYjVSHDo.jpg',
    genre_ids: [28, 35, 80],
    id: 591237,
    original_language: 'en',
    original_title: 'Bulletproof 2',
    overview:
      'Special Agent Jack Carter reluctantly assumes the identity of criminal Archie Moses to take down a powerful South African crime family. But when the real Moses is put in danger, he and Carter must work together to foil the scheme for good.',
    poster_path: '/uGILkFnRrpdiNtDaHeekGZSn5o5.jpg',
    title: 'Bulletproof 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 73.352,
      },
    ],
    release_date: '2020-01-07',
  },
  {
    adult: false,
    backdrop_path: '/ljICzKBgObRGllDuGiYsL5GdyiD.jpg',
    genre_ids: [10751, 12, 16, 18],
    id: 37135,
    original_language: 'en',
    original_title: 'Tarzan',
    overview:
      "Tarzan was a small orphan who was raised by an ape named Kala since he was a child. He believed that this was his family, but on an expedition Jane Porter is rescued by Tarzan. He then finds out that he's human. Now Tarzan must make the decision as to which family he should belong to...",
    poster_path: '/urlu2XhSCA8gQypBJmc1nsRQz1Y.jpg',
    title: 'Tarzan',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 73.047,
      },
    ],
    release_date: '1999-06-18',
  },
  {
    adult: false,
    backdrop_path: '/wfStsmeSW7MtvYhD9Ac6ETXdbmx.jpg',
    genre_ids: [28, 35, 10751, 12],
    id: 10054,
    original_language: 'en',
    original_title: 'Spy Kids',
    overview:
      'Carmen and Juni think their parents are boring. Little do they know that in their day, Gregorio and Ingrid Cortez were the top secret agents from their respective countries. They gave up that life to raise their children. Now, the disappearances of several of their old colleagues forces the Cortez\' return from retirement. What they didn\'t count on was Carmen and Juni joining the "family business."',
    poster_path: '/urb5Wf4yffJQ2KwAuSPxCbOM8HA.jpg',
    title: 'Spy Kids',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 73.027,
      },
    ],
    release_date: '2001-03-18',
  },
  {
    adult: false,
    backdrop_path: '/iueb8P2aSE2JL21kgoyhnmmeFb5.jpg',
    genre_ids: [28, 878, 53, 9648],
    id: 513310,
    original_language: 'en',
    original_title: 'Boss Level',
    overview:
      'A retired special forces officer is trapped in a never-ending time loop on the day of his death.',
    poster_path: '/i6QFXv4lZyxRMknH0EDkCIz02XP.jpg',
    title: 'Boss Level',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 72.984,
      },
    ],
    release_date: '2021-02-19',
  },
  {
    adult: false,
    backdrop_path: '/lOqIxt0XUv4T9yV2EbDqnW6cTFM.jpg',
    genre_ids: [35, 16, 28, 12],
    id: 453071,
    original_language: 'ja',
    original_title: 'ナルトが火影になった日',
    overview:
      'Depicts the day that Naruto Uzumaki became the 7th Hokage. Packaged with Boruto the Movie.',
    poster_path: '/xPu5camdNW7ga5QeHGJhiMbQ62B.jpg',
    title: 'The Day Naruto Became Hokage',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 72.984,
      },
    ],
    release_date: '2016-07-06',
  },
  {
    adult: false,
    backdrop_path: '/8NEvnVKeGMLEXG45MMNqxJLcM4y.jpg',
    genre_ids: [28, 16, 14],
    id: 820232,
    original_language: 'ja',
    original_title: '鬼滅の刃 兄妹の絆',
    overview:
      "Tanjiro finds his family slaughtered and the lone survivor, his sister Nezuko Kamado, turned into a Demon. To his surprise, however, Nezuko still shows signs of human emotion and thought. Thus begins Tanjiro's journey to seek out the Demon who killed their family and turn his sister human again. A recap film of Kimetsu no Yaiba, covering episodes 1-5 with extra footage.",
    poster_path: '/vIwQ2PAnrLQtYJBtqnXHpjikMXa.jpg',
    title: "Demon Slayer: Kimetsu no Yaiba Sibling's Bond",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 9.2,
      },
      {
        id: 'popularity',
        rating: 72.968,
      },
    ],
    release_date: '2019-03-29',
  },
  {
    adult: false,
    backdrop_path: '/vX5JtEcumMQvMCLVcIqfetc7hdg.jpg',
    genre_ids: [35, 80, 53],
    id: 601666,
    original_language: 'en',
    original_title: 'I Care a Lot',
    overview:
      'A court-appointed legal guardian defrauds her older clients and traps them under her care. But her latest mark comes with some unexpected baggage.',
    poster_path: '/gKnhEsjNefpKnUdAkn7INzIFLSu.jpg',
    title: 'I Care a Lot',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 80.697,
      },
    ],
    release_date: '2021-02-19',
  },
  {
    adult: false,
    backdrop_path: '/jncviKGvFlxdeh6vYWe9g4LmG3j.jpg',
    genre_ids: [27, 53],
    id: 23823,
    original_language: 'en',
    original_title: 'Wrong Turn 3: Left for Dead',
    overview:
      'A group of people find themselves trapped in the backwoods of West Virginia, fighting for their lives against a group of vicious and horribly disfigured inbred cannibals.',
    poster_path: '/84s4LMWuGbm4xPWW5PSbHyQhh33.jpg',
    title: 'Wrong Turn 3: Left for Dead',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.5,
      },
      {
        id: 'popularity',
        rating: 80.666,
      },
    ],
    release_date: '2009-10-20',
  },
  {
    adult: false,
    backdrop_path: '/oMaj75G2WFw66xI1TREg1hrToSg.jpg',
    genre_ids: [28, 14, 878, 12],
    id: 268896,
    original_language: 'en',
    original_title: 'Pacific Rim: Uprising',
    overview:
      'It has been ten years since The Battle of the Breach and the oceans are still, but restless. Vindicated by the victory at the Breach, the Jaeger program has evolved into the most powerful global defense force in human history. The PPDC now calls upon the best and brightest to rise up and become the next generation of heroes when the Kaiju threat returns.',
    poster_path: '/v5HlmJK9bdeHxN2QhaFP1ivjX3U.jpg',
    title: 'Pacific Rim: Uprising',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 80.59,
      },
    ],
    release_date: '2018-03-21',
  },
  {
    adult: false,
    backdrop_path: '/yOI0pECyaTFViMlzdYYpi3nqjLc.jpg',
    genre_ids: [35],
    id: 45243,
    original_language: 'en',
    original_title: 'The Hangover Part II',
    overview:
      "The Hangover crew heads to Thailand for Stu's wedding. After the disaster of a bachelor party in Las Vegas last year, Stu is playing it safe with a mellow pre-wedding brunch. However, nothing goes as planned and Bangkok is the perfect setting for another adventure with the rowdy group.",
    poster_path: '/7sGkjqorTHkaHTz8Q4WWHj8JL9t.jpg',
    title: 'The Hangover Part II',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 80.555,
      },
    ],
    release_date: '2011-05-25',
  },
  {
    adult: false,
    backdrop_path: '/v648cPRS5xPCiaSqgTlMiVzDm6o.jpg',
    genre_ids: [10749, 18],
    id: 570503,
    original_language: 'ko',
    original_title: '유열의 음악앨범',
    overview:
      "In 1994, on the first day that Yoo Yeul went on air as the new DJ of the popular radio show ‘Music Album,' a college girl Mi-su meets Hyun-woo who happens to drop by the bakery she works at. Like the music streaming from the radio, their frequencies slowly come in sync; even when they're apart, the show brings them together through ebbs and flows of events arising from both pure coincidence and inevitability, until the bitter reality sets in and drives them apart...",
    poster_path: '/9xuCJOMstWXjk0PuD6JflERt8Tc.jpg',
    title: 'Tune in for Love',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 80.488,
      },
    ],
    release_date: '2019-08-28',
  },
  {
    adult: false,
    backdrop_path: '/7eK8FJr4fqq3J5W2xvlr2GVaep2.jpg',
    genre_ids: [14, 18, 10749],
    id: 8966,
    original_language: 'en',
    original_title: 'Twilight',
    overview:
      "When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire. Despite Edward's repeated cautions, Bella can't stay away from him, a fatal move that endangers her own life.",
    poster_path: '/60IEwC4FaHSRpVEAM6iNpXZ5oSA.jpg',
    title: 'Twilight',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 80.48,
      },
    ],
    release_date: '2008-11-20',
  },
  {
    adult: false,
    backdrop_path: '/eVjSkCEhxhIwHKiqhNiFF9iceAx.jpg',
    genre_ids: [28, 27, 53, 878],
    id: 573560,
    original_language: 'en',
    original_title: 'The Car: Road to Revenge',
    overview:
      'In a dilapidated cyberpunk city plagued by crime and corruption, an unscrupulous District Attorney is savagely murdered and tossed out of a building onto his brand new car. Mysteriously, the District Attorney and his car come back to life as a single being with a thirst for vengeance. The eerie driver-less car embarks on a vicious rampage exacting revenge on the criminals who murdered him. The Car: Road to Revenge is the stylized sequel to the unconventional horror cult classic The Car (1977), and features an homage to the original with the return of Ronny Cox as the Mechanic.',
    poster_path: '/czynIdEiHjpGhUWMnoax7Q3lMAE.jpg',
    title: 'The Car: Road to Revenge',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 80.473,
      },
    ],
    release_date: '2019-01-08',
  },
  {
    adult: false,
    backdrop_path: '/vRQnzOn4HjIMX4LBq9nHhFXbsSu.jpg',
    genre_ids: [12, 14, 28],
    id: 120,
    original_language: 'en',
    original_title: 'The Lord of the Rings: The Fellowship of the Ring',
    overview:
      'Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.',
    poster_path: '/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.4,
      },
      {
        id: 'popularity',
        rating: 80.295,
      },
    ],
    release_date: '2001-12-18',
  },
  {
    adult: false,
    backdrop_path: '/79X8JkGxzc1tJMi0KxUSaPLooVg.jpg',
    genre_ids: [28, 878, 53],
    id: 274855,
    original_language: 'en',
    original_title: 'Geostorm',
    overview:
      "After an unprecedented series of natural disasters threatened the planet, the world's leaders came together to create an intricate network of satellites to control the global climate and keep everyone safe. But now, something has gone wrong: the system built to protect Earth is attacking it, and it becomes a race against the clock to uncover the real threat before a worldwide geostorm wipes out everything and everyone along with it.",
    poster_path: '/nrsx0jEaBgXq4PWo7SooSnYJTv.jpg',
    title: 'Geostorm',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 80.277,
      },
    ],
    release_date: '2017-10-13',
  },
  {
    adult: false,
    backdrop_path: '/6SSEa1OfqrHGg7XTLNTxbyyioRB.jpg',
    genre_ids: [16, 35, 10751],
    id: 8920,
    original_language: 'en',
    original_title: 'Garfield',
    overview:
      "Garfield, the fat, lazy, lasagna lover, has everything a cat could want. But when Jon, in an effort to impress the Liz - the vet and an old high-school crush - adopts a dog named Odie and brings him home, Garfield gets the one thing he doesn't want. Competition.",
    poster_path: '/5hKlKh62yIR03XHZxwFs3EaIFfD.jpg',
    title: 'Garfield',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.6,
      },
      {
        id: 'popularity',
        rating: 80.253,
      },
    ],
    release_date: '2004-06-10',
  },
  {
    adult: false,
    backdrop_path: '/13VjjUeJ6mcDUB36XRu4YFpYNSm.jpg',
    genre_ids: [28, 80, 18, 53],
    id: 400535,
    original_language: 'en',
    original_title: 'Sicario: Day of the Soldado',
    overview:
      'Agent Matt Graver teams up with operative Alejandro Gillick to prevent Mexican drug cartels from smuggling terrorists across the United States border.',
    poster_path: '/msqWSQkU403cQKjQHnWLnugv7EY.jpg',
    title: 'Sicario: Day of the Soldado',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 80.101,
      },
    ],
    release_date: '2018-06-27',
  },
  {
    adult: false,
    backdrop_path: '/se5Hxz7PArQZOG3Nx2bpfOhLhtV.jpg',
    genre_ids: [28, 12, 16, 10751],
    id: 9806,
    original_language: 'en',
    original_title: 'The Incredibles',
    overview:
      "Bob Parr has given up his superhero days to log in time as an insurance adjuster and raise his three children with his formerly heroic wife in suburbia. But when he receives a mysterious assignment, it's time to get back into costume.",
    poster_path: '/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg',
    title: 'The Incredibles',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 80.09,
      },
    ],
    release_date: '2004-10-27',
  },
  {
    adult: false,
    backdrop_path: '/26U4h1sYcZy9FOsmxkLmrQu6lBq.jpg',
    genre_ids: [878, 10752],
    id: 559957,
    original_language: 'zh',
    original_title: '上海堡垒',
    overview:
      "Set in the future, the city of Shanghai battle to defend itself against an ongoing attack by an alien force that has attacked and laid siege to numerous cities around the globe in it's quest to harvest a hidden energy only found on earth.",
    poster_path: '/cODqUZ3XzDz4lkhxw0OnaUSfz8R.jpg',
    title: 'Shanghai Fortress',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.5,
      },
      {
        id: 'popularity',
        rating: 79.95,
      },
    ],
    release_date: '2019-08-09',
  },
  {
    adult: false,
    backdrop_path: '/tk8Q8yhhOg0A5cm8wRDsTwiK6I4.jpg',
    genre_ids: [53],
    id: 734818,
    original_language: 'es',
    original_title: 'Un efecto óptico',
    overview:
      'A couple from Burgos, Alfredo and Teresa, travel to New York where they intend to “switch off” and do all of the things listed in the guidebook. But the moment they land, they start to notice signs, some subtle and others rather less so, that in fact they’re not in the city sold to them by the travel agency. So where are they?',
    poster_path: '/sRNN7QnHDydxAMwqjJXFetrr0XB.jpg',
    title: 'An Optical Illusion - Interval',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.8,
      },
      {
        id: 'popularity',
        rating: 79.73,
      },
    ],
    release_date: '2021-03-26',
  },
  {
    adult: false,
    backdrop_path: '/vooRKLGVvFRFmx9swcMh26uYZSf.jpg',
    genre_ids: [16, 10749, 35, 18, 14],
    id: 530079,
    original_language: 'ja',
    original_title: 'きみと、波にのれたら',
    overview:
      'Hinako is a surf-loving college student who has just moved to a small seaside town. When a sudden fire breaks out at her apartment building, she is rescued by Minato, a handsome firefighter, and the two soon fall in love. Just as they become inseparable, Minato loses his life in an accident at sea. Hinako is so distraught that she can no longer even look at the ocean, but one day she sings a song that reminds her of their time together, and Minato appears in the water. From then on, she can summon him in any watery surface as soon as she sings their song, but can the two really remain together forever? And what is the real reason for Minato’s sudden reappearance?',
    poster_path: '/byoY2stdullEcVjlaWs1ENXyrDm.jpg',
    title: 'Ride Your Wave',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 79.421,
      },
    ],
    release_date: '2019-06-21',
  },
  {
    adult: false,
    backdrop_path: '/xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg',
    genre_ids: [10751, 16, 12, 35, 14],
    id: 508439,
    original_language: 'en',
    original_title: 'Onward',
    overview:
      'In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.',
    poster_path: '/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg',
    title: 'Onward',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 79.412,
      },
    ],
    release_date: '2020-02-29',
  },
  {
    adult: false,
    backdrop_path: '/ygIHxA8EB246fwnNlHn6gN1QCf4.jpg',
    genre_ids: [53, 28, 80],
    id: 346709,
    original_language: 'en',
    original_title: 'Line of Duty',
    overview:
      "Frank Penny is a disgraced cop looking for a shot at redemption. When the police chief's 11-year-old daughter is abducted, Frank goes rogue to try and save her. But to find the girl, Frank will need the help of Ava Brooks, whose live-streaming news channel is broadcasting Frank's every move.",
    poster_path: '/wMszdTo0UuGcAEEDHsQL9dmwLIG.jpg',
    title: 'Line of Duty',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 79.208,
      },
    ],
    release_date: '2019-12-25',
  },
  {
    adult: false,
    backdrop_path: '/mLY3oqwFkNZ65ZMtI5CTKFFz60i.jpg',
    genre_ids: [28, 12, 878, 14, 18],
    id: 298618,
    original_language: 'en',
    original_title: 'The Flash',
    overview:
      'The Flash travels back in time to prevent the murder of his mother, an act which disrupts time significantly.',
    poster_path: '/oduJooXJya3u6wuA6FgljAFCEQp.jpg',
    title: 'The Flash',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 79.199,
      },
    ],
    release_date: '2022-11-03',
  },
  {
    adult: false,
    backdrop_path: '/edCKQA7LnN1R7fOPPj2nBIi6xeE.jpg',
    genre_ids: [53, 27],
    id: 621151,
    original_language: 'en',
    original_title: 'Spell',
    overview:
      'A father survives a plane crash in rural Appalachia, but becomes suspicious of the elderly couple who take him in to nurse him back to health with the ancient remedies.',
    poster_path: '/4rjHhj1BAREc9zNFU8FheLJQdFf.jpg',
    title: 'Spell',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 79.198,
      },
    ],
    release_date: '2020-10-30',
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [],
    id: 478121,
    original_language: 'en',
    original_title: 'Tiempo al tiempo',
    overview:
      "Sometimes you have to tell a lie to realize the truth. And so it goes for Jesus, an aging immigrant cook living and working in New York. As the years have passed he now longs to return home and retire. However, he has become close friends with his co-worker and roommate, Cisco, a young, energetic Guatemalan kid ready to take on America. This inspires Jesus' lost enthusiasm and he becomes wrapped up in the prospects of opening their own restaurant together. As time passes, however, he begins to realize his mistake and must confront the commitment he made to return home. While Cisco is dependent on Jesus' partnership in the business, he is unaware of the extent of his friend's struggle. Now caught between personal success and family obligation, Jesus must choose: will he lead the life he's always imagined or return to his awaiting family?",
    poster_path: null,
    title: 'Tiempo al tiempo',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 79.198,
      },
    ],
    release_date: '2010-01-01',
  },
  {
    adult: false,
    backdrop_path: '/oMKFQmoVgB69fyXfSMu0lGlHJP2.jpg',
    genre_ids: [28],
    id: 447200,
    original_language: 'en',
    original_title: 'Skyscraper',
    overview:
      "Framed and on the run, a former FBI agent must save his family from a blazing fire in the world's tallest building.",
    poster_path: '/3NL1FiTEhU4SWOuWk8lkVCbmnYm.jpg',
    title: 'Skyscraper',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 61.83,
      },
    ],
    release_date: '2018-07-11',
  },
  {
    adult: false,
    backdrop_path: '/yh4bHufp7Z7n2SR9aia9KEicodx.jpg',
    genre_ids: [18, 10749],
    id: 271954,
    original_language: 'tr',
    original_title: 'Su ve Ateş',
    overview:
      'A pretty young girl falls for an enigmatic, shy man who sweeps her off her feet. She becomes pregnant but is not allowed to tell him. His advisers are adamant. Back home, they have set up a wedding with the daughter of an antagonistic family and marriage will put an end to the blood feud between them.',
    poster_path: '/fYaLA6hmXPRnJqk4XHS2O82Rzph.jpg',
    title: 'Water and Fire',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 61.709,
      },
    ],
    release_date: '2013-11-15',
  },
  {
    adult: false,
    backdrop_path: '/heMC3jAjQPNSlr1n9mZKUQ58EOE.jpg',
    genre_ids: [28, 18, 12],
    id: 672322,
    original_language: 'ja',
    original_title: 'るろうに剣心 最終章 The Beginning',
    overview:
      'Before Himura Kenshin met Kaoru, he was a fearsome assassin known as Hitokiri Battousai. "Rurouni Kenshin: The Beginning" tells the story of a young Kenshin who became the number one assassin for the Ishin Shishi (which later became the "Meiji era") who fought against the Shogunate during the last days of the Tokugawa era, and how he got his famous "X" mark on his left cheek.  In the early days of Himura Kenshin as Hitokiri Battousai, he one day met Yukishiro Tomoe, a beautiful young woman who looks serene but always carry a sad face. Battousai and Tomoe fell in love with each other but little did he know, Tomoe carries a huge burden in her heart which would change the life of Himura Kenshin forever.',
    poster_path: '/rODS466qSdrwMlGdbUwPENhDN2c.jpg',
    title: 'Rurouni Kenshin: The Beginning',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 61.697,
      },
    ],
    release_date: '2021-06-04',
  },
  {
    adult: false,
    backdrop_path: '/poKtpiQ0akacXzXohWmtb0Z7nFD.jpg',
    genre_ids: [16, 12, 10751, 35],
    id: 586954,
    original_language: 'de',
    original_title: 'Latte Igel und der magische Wasserstein',
    overview:
      'When a greedy bear steals a magic stone to keep the forest’s water for himself, a brave hedgehog and a timid squirrel must work together to retrieve it.',
    poster_path: '/saxPKOrN6rNScTicLpBDZw58Cw.jpg',
    title: 'Latte and the Magic Waterstone',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 61.695,
      },
    ],
    release_date: '2019-12-11',
  },
  {
    adult: false,
    backdrop_path: '/xOe8nHr5bpPvq4JbGy4vpttDwg2.jpg',
    genre_ids: [28, 12, 878],
    id: 100402,
    original_language: 'en',
    original_title: 'Captain America: The Winter Soldier',
    overview:
      'After the cataclysmic events in New York with The Avengers, Steve Rogers, aka Captain America is living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy—the Winter Soldier.',
    poster_path: '/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg',
    title: 'Captain America: The Winter Soldier',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 61.685,
      },
    ],
    release_date: '2014-03-20',
  },
  {
    adult: false,
    backdrop_path: '/wsqeMBw7ISNLvAD6EK0xwarJsrH.jpg',
    genre_ids: [35, 18, 10751],
    id: 765169,
    original_language: 'es',
    original_title: 'BIA: Un Mundo al Revés',
    overview:
      'In this alternate world, Bia and Manuel will have a tempestuous relationship. Pixie, the hateful and stunning owner of Laix, decides to buy the Fundom. The great conflict erupts when Pixie announces a concert. This will have Bia and Helena, who in this upside down universe are divas and rivals, fighting to be the headliner in the final show.',
    poster_path: '/eIxLHFMAsdbZGZws0duowTa4N6k.jpg',
    title: 'BIA: An Upside Down World',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 61.639,
      },
    ],
    release_date: '2021-02-19',
  },
  {
    adult: false,
    backdrop_path: '/A3wcKlQVMH7jvhdrvKiuuuVBF2h.jpg',
    genre_ids: [28, 16, 12, 35],
    id: 374205,
    original_language: 'ja',
    original_title: 'ワンピース　フィルム GOLD',
    overview:
      'The Straw Hat Pirates are taking on Gild Tesoro, one of the richest men in the world.',
    poster_path: '/OAXCENRg0smntp0uPhTQMPxs0O.jpg',
    title: 'One Piece Film: GOLD',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 61.634,
      },
    ],
    release_date: '2016-07-23',
  },
  {
    adult: false,
    backdrop_path: '/sss5fMPn3XOQUWdOpO1bspHesho.jpg',
    genre_ids: [18, 35, 10749],
    id: 583903,
    original_language: 'en',
    original_title: 'Our Friend',
    overview:
      'After learning that his terminally ill wife has six months to live, a man welcomes the support of his best friend who moves into their home to help out.',
    poster_path: '/vg9C5LttsKBqoLuqeQvOXaeBGiD.jpg',
    title: 'Our Friend',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 61.569,
      },
    ],
    release_date: '2021-01-22',
  },
  {
    adult: false,
    backdrop_path: '/yFZG86Zvdy6JuIlMW9eHxlVkct5.jpg',
    genre_ids: [28, 12, 14, 10749, 16, 878],
    id: 413594,
    original_language: 'ja',
    original_title: '劇場版 ソードアート・オンライン -オーディナル・スケール-',
    overview:
      "In 2026, four years after the infamous Sword Art Online incident, a revolutionary new form of technology has emerged: the Augma, a device that utilizes an Augmented Reality system. Unlike the Virtual Reality of the NerveGear and the Amusphere, it is perfectly safe and allows players to use it while they are conscious, creating an instant hit on the market. The most popular application for the Augma is the game Ordinal Scale, which immerses players in a fantasy role-playing game with player rankings and rewards.  Following the new craze, Kirito's friends dive into the game, and despite his reservations about the system, Kirito eventually joins them. While at first it appears to be just fun and games, they soon find out that the game is not all that it seems...",
    poster_path: '/2szdEK0Mr0RG0nWGFVTseNQHbnP.jpg',
    title: 'Sword Art Online: The Movie - Ordinal Scale',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 61.561,
      },
    ],
    release_date: '2017-02-18',
  },
  {
    adult: false,
    backdrop_path: '/8rLQnFUh8R3glHBRuZ2j0dXJX9o.jpg',
    genre_ids: [27, 53],
    id: 71672,
    original_language: 'en',
    original_title: 'Wrong Turn 4: Bloody Beginnings',
    overview:
      'Follows a group of friends that decide to go snowmobiling during their winter break. They make a "wrong turn", getting lost in a storm.',
    poster_path: '/lwGgaJ6DikLj7wgGB4PPNMs2piK.jpg',
    title: 'Wrong Turn 4: Bloody Beginnings',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.6,
      },
      {
        id: 'popularity',
        rating: 61.538,
      },
    ],
    release_date: '2011-10-17',
  },
  {
    adult: false,
    backdrop_path: '/y7b78soqvJq4aQ8G0Zt72inSQoE.jpg',
    genre_ids: [35, 10749],
    id: 778730,
    original_language: 'es',
    original_title: 'Loco por ella',
    overview:
      'After a magical night together, Adri voluntarily turns himself into the psychiatric institution where Carla lives.',
    poster_path: '/hPBJckYsL1UOsz44InZ2wYJyJTy.jpg',
    title: 'Crazy About Her',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 61.536,
      },
    ],
    release_date: '2021-02-26',
  },
  {
    adult: false,
    backdrop_path: '/jrudoaXcoLyHRPdolyOGemXgPEs.jpg',
    genre_ids: [36, 18],
    id: 369972,
    original_language: 'en',
    original_title: 'First Man',
    overview:
      'A look at the life of the astronaut, Neil Armstrong, and the legendary space mission that led him to become the first man to walk on the Moon on July 20, 1969.',
    poster_path: '/i91mfvFcPPlaegcbOyjGgiWfZzh.jpg',
    title: 'First Man',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 61.443,
      },
    ],
    release_date: '2018-10-11',
  },
  {
    adult: false,
    backdrop_path: '/pHSydMm4thC7C6Va3LGa1BbQJev.jpg',
    genre_ids: [28, 12, 18, 53],
    id: 1579,
    original_language: 'en',
    original_title: 'Apocalypto',
    overview:
      "Set in the Mayan civilization, when a man's idyllic presence is brutally disrupted by a violent invading force, he is taken on a perilous journey to a world ruled by fear and oppression where a harrowing end awaits him. Through a twist of fate and spurred by the power of his love for his woman and his family he will make a desperate break to return home and to ultimately save his way of life.",
    poster_path: '/cBFQsU1LDBEOl0Ik0cygeB6wCLE.jpg',
    title: 'Apocalypto',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 61.381,
      },
    ],
    release_date: '2006-12-07',
  },
  {
    adult: false,
    backdrop_path: '/kif8aF9qNN88Z0ehuP14YM789nH.jpg',
    genre_ids: [27, 35],
    id: 10012,
    original_language: 'en',
    original_title: 'Cursed',
    overview:
      'A werewolf loose in Los Angeles changes the lives of three young adults, who, after being mauled by the beast, learn they must kill their attacker if they hope to change their fate to avoid becoming werewolves too.',
    poster_path: '/em45jL4CfTMyj5V83kj7rhdorJu.jpg',
    title: 'Cursed',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.3,
      },
      {
        id: 'popularity',
        rating: 61.354,
      },
    ],
    release_date: '2005-02-25',
  },
  {
    adult: false,
    backdrop_path: '/e74H6yfw9qh8uEJP3yVUfWlMvxe.jpg',
    genre_ids: [18, 10749],
    id: 109689,
    original_language: 'es',
    original_title: 'Tengo ganas de ti',
    overview:
      'Sequel to "Three Steps Above Heaven". The sexy Gin is the new love of Hache, but this can not forget his former girlfriend, so the love triangle is inevitable.',
    poster_path: '/z13I3sWzOoKBDAEpJ7iK9bSznQn.jpg',
    title: 'I Want You',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 61.305,
      },
    ],
    release_date: '2012-06-22',
  },
  {
    adult: false,
    backdrop_path: '/qx9ts2hBYJrkIQxhryitxnLlm2u.jpg',
    genre_ids: [16, 12, 35, 10751, 28, 14],
    id: 62177,
    original_language: 'en',
    original_title: 'Brave',
    overview:
      'Brave is set in the mystical Scottish Highlands, where Mérida is the princess of a kingdom ruled by King Fergus and Queen Elinor. An unruly daughter and an accomplished archer, Mérida one day defies a sacred custom of the land and inadvertently brings turmoil to the kingdom. In an attempt to set things right, Mérida seeks out an eccentric old Wise Woman and is granted an ill-fated wish. Also figuring into Mérida’s quest — and serving as comic relief — are the kingdom’s three lords: the enormous Lord MacGuffin, the surly Lord Macintosh, and the disagreeable Lord Dingwall.',
    poster_path: '/L6qqU6Q3k4MmPojncNbT43FSTL.jpg',
    title: 'Brave',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 61.271,
      },
    ],
    release_date: '2012-06-21',
  },
  {
    adult: false,
    backdrop_path: '/1am1E69hz5UbbnQaXl7KTD50dzW.jpg',
    genre_ids: [18, 28, 12, 878],
    id: 438631,
    original_language: 'en',
    original_title: 'Dune',
    overview:
      "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
    poster_path: '/cDbNAY0KM84cxXhmj8f0dLWza3t.jpg',
    title: 'Dune',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 61.256,
      },
    ],
    release_date: '2021-09-15',
  },
  {
    adult: false,
    backdrop_path: '/pgBXz60Rf4zUaXleeIfR0ukIDhS.jpg',
    genre_ids: [18, 27, 53],
    id: 692969,
    original_language: 'no',
    original_title: 'Kadaver',
    overview:
      "In the aftermath of a nuclear disaster, a starving family find hope in a charismatic hotel owner. Lured by the prospect of a free dinner, they discover that the evening's entertainment blurs the lines between performance and reality. Will they wind up the spectators or the spectacle?",
    poster_path: '/bo94ZQ0SlFRHL3fGPHNBYQDlnhl.jpg',
    title: 'Cadaver',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.6,
      },
      {
        id: 'popularity',
        rating: 61.216,
      },
    ],
    release_date: '2020-10-22',
  },
  {
    adult: false,
    backdrop_path: '/m3tdSyl11fhgXPDSEt3aBctTqGP.jpg',
    genre_ids: [10751, 14, 10749],
    id: 321612,
    original_language: 'en',
    original_title: 'Beauty and the Beast',
    overview:
      "A live-action adaptation of Disney's version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.",
    poster_path: '/tWqifoYuwLETmmasnGHO7xBjEtt.jpg',
    title: 'Beauty and the Beast',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 61.152,
      },
    ],
    release_date: '2017-03-16',
  },
  {
    adult: false,
    backdrop_path: '/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg',
    genre_ids: [18, 80],
    id: 278,
    original_language: 'en',
    original_title: 'The Shawshank Redemption',
    overview:
      'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
    poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    title: 'The Shawshank Redemption',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.7,
      },
      {
        id: 'popularity',
        rating: 61.152,
      },
    ],
    release_date: '1994-09-23',
  },
  {
    adult: false,
    backdrop_path: '/5OeY4U2rzePxWq2rkqMajUx2gz7.jpg',
    genre_ids: [16, 10751, 12, 14, 10749],
    id: 812,
    original_language: 'en',
    original_title: 'Aladdin',
    overview:
      'Princess Jasmine grows tired of being forced to remain in the palace, so she sneaks out into the marketplace, in disguise, where she meets street-urchin Aladdin.  The couple falls in love, although Jasmine may only marry a prince.  After being thrown in jail, Aladdin becomes embroiled in a plot to find a mysterious lamp, with which the evil Jafar hopes to rule the land.',
    poster_path: '/eLFfl7vS8dkeG1hKp5mwbm37V83.jpg',
    title: 'Aladdin',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 59.531,
      },
    ],
    release_date: '1992-11-25',
  },
  {
    adult: false,
    backdrop_path: '/1ZNLJkYSfRcPconjUYa5pReoLH9.jpg',
    genre_ids: [99, 10402],
    id: 62717,
    original_language: 'pt',
    original_title: 'Loki - Arnaldo Baptista',
    overview:
      "Loki brings the trajectory of Arnaldo Baptista from childhood, passing through the most successful phase as leader of the Mutantes, marriage to singer Rita Lee and then separation. He also goes through the depression that devastated his life after the group ended and that led him to attempt suicide, his solo career, rapprochement with his brother and member of the Mutantes, Sérgio Dias, culminating in the band's return in 2006.",
    poster_path: '/cYl39kCMjP37e39CbJqxWHvf1ez.jpg',
    title: 'Loki - Arnaldo Baptista',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 59.484,
      },
    ],
    release_date: '2008-10-17',
  },
  {
    adult: false,
    backdrop_path: '/kNy0TtipXFQtxmCYAfFcIiyFUjz.jpg',
    genre_ids: [16, 28, 14],
    id: 461083,
    original_language: 'ja',
    original_title: '劇場版 Fate/kaleid liner プリズマ☆イリヤ 雪下の誓い',
    overview:
      'After succumbing to an unenviable fate, Kiritsugu Emiya has left Shirou Emiya the duty to save mankind in his place. The world is dying and time is ticking, but when the salvation Shirou seeks is at the cost of his only family left—his younger sister—will he still have the heart to pursue this duty?  Shirou is now pressed with the choice to continue being a hero of justice—or become the very evil his ideal has vowed to vanquish. The orphan is alone once again, yet his body is still made of swords. The Fifth Holy Grail War now begins with his oath under snow.',
    poster_path: '/kVhFABQ6FGjwJfDDZol6B8GT3UN.jpg',
    title: 'Fate/Kaleid Liner Prisma☆Illya Movie: Vow in the Snow',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 59.426,
      },
    ],
    release_date: '2017-08-26',
  },
  {
    adult: false,
    backdrop_path: '/v8pnPQwU2a1B9s2VQVP8BhIpCd8.jpg',
    genre_ids: [12, 10751, 14],
    id: 11359,
    original_language: 'en',
    original_title: 'The Indian in the Cupboard',
    overview:
      'A nine-year-old boy gets a plastic Indian and a cupboard for his birthday and finds himself involved in adventure when the Indian comes to life and befriends him.',
    poster_path: '/ozQAmW85tTJu2dhRe3evzyY03Nb.jpg',
    title: 'The Indian in the Cupboard',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 59.349,
      },
    ],
    release_date: '1995-07-14',
  },
  {
    adult: false,
    backdrop_path: '/at9UA6p81CHBHNPbnIBgXzKQycl.jpg',
    genre_ids: [878, 27],
    id: 282069,
    original_language: 'ja',
    original_title: '寄生獣',
    overview:
      "Alien pods come to Earth and, naturally, start taking over Human Hosts. One such pod only manages to take over one human's, Shin Izumi, right arm. Together they grow and co-exist, all the while the other aliens are making meals of other humans; Shin feels he must put a stop to it all, but his alien, Migi, doesn't see why.",
    poster_path: '/lNzCFguC8wEyJWP89ewQYK8d2nJ.jpg',
    title: 'Parasyte: Part 1',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 59.345,
      },
    ],
    release_date: '2014-11-29',
  },
  {
    adult: false,
    backdrop_path: '/1dFKtwFarEj47JRJHe9dPpMLyQF.jpg',
    genre_ids: [27, 53],
    id: 125509,
    original_language: 'en',
    original_title: 'Wrong Turn 5: Bloodlines',
    overview:
      'A small West Virginia town is hosting the legendary Mountain Man Festival on Halloween, where throngs of costumed party goers gather for a wild night of music and mischief. But an inbred family of hillbilly cannibals kill the fun when they trick and treat themselves to a group of visiting college students.',
    poster_path: '/i9prGtsGbWzaH30bp8TXPEs6QGm.jpg',
    title: 'Wrong Turn 5: Bloodlines',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.2,
      },
      {
        id: 'popularity',
        rating: 59.308,
      },
    ],
    release_date: '2012-10-23',
  },
  {
    adult: false,
    backdrop_path: '/f1sMxvlhn93lh6I8DrCW819XrM0.jpg',
    genre_ids: [10751, 16, 35],
    id: 11430,
    original_language: 'en',
    original_title: 'The Lion King 1½',
    overview:
      "Timon the meerkat and Pumbaa the warthog are best pals and the unsung heroes of the African savanna. This prequel to the smash Disney animated adventure takes you back -- way back -- before Simba's adventure began. You'll find out all about Timon and Pumbaa and tag along as they search for the perfect home and attempt to raise a rambunctious lion cub.",
    poster_path: '/sVJME5R1NmTXtbdnAxYPx7Xa7kr.jpg',
    title: 'The Lion King 1½',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 59.303,
      },
    ],
    release_date: '2004-02-06',
  },
  {
    adult: false,
    backdrop_path: '/vwsr9XcUgnzuMkrvVBTfyTRmfDw.jpg',
    genre_ids: [18, 9648],
    id: 534338,
    original_language: 'en',
    original_title: 'An Interview with God',
    overview:
      "An up-and-coming journalist finds his world and faith increasingly challenged when he's granted the interview of a lifetime – with someone who claims to be God.",
    poster_path: '/d9TeB8VLCgwSph2OSYK3lcHGf1f.jpg',
    title: 'An Interview with God',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 59.301,
      },
    ],
    release_date: '2018-08-20',
  },
  {
    adult: false,
    backdrop_path: '/nFCUBRDF4C6RWopNo0nAfvMA6mm.jpg',
    genre_ids: [35],
    id: 225886,
    original_language: 'en',
    original_title: 'Sex Tape',
    overview:
      "When Jay and Annie first got together, their romantic connection was intense – but ten years and two kids later, the flame of their love needs a spark.  To kick things up a notch, they decide – why not? – to make a video of themselves trying out every position in The Joy of Sex in one marathon three-hour session.  It seems like a great idea – until they discover that their most private video is no longer private.  With their reputations on the line, they know they’re just one click away from being laid bare to the world... but as their race to reclaim their video leads to a night they'll never forget, they'll find that their video will expose even more than they bargained for.",
    poster_path: '/An0sAEBH7BuXlnGPIISnqLBvjNh.jpg',
    title: 'Sex Tape',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.4,
      },
      {
        id: 'popularity',
        rating: 59.3,
      },
    ],
    release_date: '2014-07-17',
  },
  {
    adult: false,
    backdrop_path: '/j7ij93mtHXAF8D3PjRSEaKPHpIE.jpg',
    genre_ids: [878, 53, 18, 9648],
    id: 406990,
    original_language: 'en',
    original_title: 'What Happened to Monday',
    overview:
      'In a world where families are limited to one child due to overpopulation, a set of identical septuplets must avoid being put to a long sleep by the government and dangerous infighting while investigating the disappearance of one of their own.',
    poster_path: '/o6EsOqITcSzcdwD1zxBM9imdxjr.jpg',
    title: 'What Happened to Monday',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 59.223,
      },
    ],
    release_date: '2017-08-18',
  },
  {
    adult: false,
    backdrop_path: '/eSl9MRMvWJ0Hm5yePHgsRhFtPTw.jpg',
    genre_ids: [878, 10749, 18],
    id: 613911,
    original_language: 'en',
    original_title: 'Bliss',
    overview:
      'A mind-bending love story following Greg who, after recently being divorced and then fired, meets the mysterious Isabel, a woman living on the streets and convinced that the polluted, broken world around them is just a computer simulation. Doubtful at first, Greg eventually discovers there may be some truth to Isabel’s wild conspiracy.',
    poster_path: '/tbTiSr0v9g8Q34MIeIcT0o2vGus.jpg',
    title: 'Bliss',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.4,
      },
      {
        id: 'popularity',
        rating: 59.132,
      },
    ],
    release_date: '2021-02-05',
  },
  {
    adult: false,
    backdrop_path: '/uu4L7SR5xpGyZZPIUlxKRTW1CUi.jpg',
    genre_ids: [27, 53],
    id: 728791,
    original_language: 'en',
    original_title: 'Playhouse',
    overview:
      'Reckless Jack Travis is an irreverent horror writer notorious for scaring audiences. But as he obsesses over creating a new theatre show set in a haunted Scottish castle, demonic disturbances from deep within the walls begin to prey on his troubled daughter. When the alarming supernatural forces start to close in on him too, Jack is forced to reckon with the terrifying consequences of creating such a dark and macabre play. But will he realise the danger of unearthing a historic curse and stop writing before he damns himself, his personal sanity and those he loves forever?',
    poster_path: '/cF4tZH8VQ6Lic3bi4WKwWDJODQf.jpg',
    title: 'Playhouse',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 59.06,
      },
    ],
    release_date: '2020-11-17',
  },
  {
    adult: false,
    backdrop_path: '/lW4khyV5muPSs2BblMVnutnIjdw.jpg',
    genre_ids: [12, 18, 28],
    id: 147441,
    original_language: 'en',
    original_title: 'Exodus: Gods and Kings',
    overview:
      'The defiant leader Moses rises up against the Egyptian Pharaoh Ramses, setting 400,000 slaves on a monumental journey of escape from Egypt and its terrifying cycle of deadly plagues.',
    poster_path: '/uaDj37JtvLan9tihxZ18e6qL33b.jpg',
    title: 'Exodus: Gods and Kings',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 59.047,
      },
    ],
    release_date: '2014-12-03',
  },
  {
    adult: false,
    backdrop_path: '/eAISoFMi29BVBKH1VRpne4mJ26K.jpg',
    genre_ids: [27, 53],
    id: 227348,
    original_language: 'en',
    original_title: 'Paranormal Activity: The Marked Ones',
    overview:
      'Seventeen-year-old Jesse has been hearing terrifying sounds coming from his neighbor’s apartment, but when he turns on his camera and sets out to uncover their source, he encounters an ancient evil that won’t rest until it’s claimed his very soul.',
    poster_path: '/4srdg5SoxREXha5kibwZBvsqNtV.jpg',
    title: 'Paranormal Activity: The Marked Ones',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.4,
      },
      {
        id: 'popularity',
        rating: 58.99,
      },
    ],
    release_date: '2014-01-01',
  },
  {
    adult: false,
    backdrop_path: '/dfBiALov0mYoqKCHaOHka2x0U26.jpg',
    genre_ids: [28, 18, 878],
    id: 263115,
    original_language: 'en',
    original_title: 'Logan',
    overview:
      "In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.",
    poster_path: '/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg',
    title: 'Logan',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 58.987,
      },
    ],
    release_date: '2017-02-28',
  },
  {
    adult: false,
    backdrop_path: '/qHHlBPTpKyh9iTjx1cNMU8sXBnj.jpg',
    genre_ids: [27, 53],
    id: 9902,
    original_language: 'en',
    original_title: 'Wrong Turn',
    overview:
      "Chris crashes into a carload of other young people, and the group of stranded motorists is soon lost in the woods of West Virginia, where they're hunted by three cannibalistic mountain men who are grossly disfigured by generations of inbreeding.",
    poster_path: '/ixBGcbQKvl2N4VZmJfmQkyKBJCX.jpg',
    title: 'Wrong Turn',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 58.79,
      },
    ],
    release_date: '2003-05-30',
  },
  {
    adult: false,
    backdrop_path: '/flTnaBaW1UnQtzGEIoHR7C3OYfy.jpg',
    genre_ids: [12, 28, 878, 53],
    id: 507086,
    original_language: 'en',
    original_title: 'Jurassic World: Dominion',
    overview: 'Plot unknown.',
    poster_path: '/lz4PYhhcDvOcLu293dwRuHRvxoT.jpg',
    title: 'Jurassic World: Dominion',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 58.748,
      },
    ],
    release_date: '2022-06-09',
  },
  {
    adult: false,
    backdrop_path: '/nlCHUWjY9XWbuEUQauCBgnY8ymF.jpg',
    genre_ids: [28, 12, 878],
    id: 76341,
    original_language: 'en',
    original_title: 'Mad Max: Fury Road',
    overview:
      'An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.',
    poster_path: '/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg',
    title: 'Mad Max: Fury Road',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 58.674,
      },
    ],
    release_date: '2015-05-13',
  },
  {
    adult: false,
    backdrop_path: '/voDQCOKcbkV1Xn5rqdfoNbu77dU.jpg',
    genre_ids: [28, 12, 878, 14, 35, 27],
    id: 496704,
    original_language: 'en',
    original_title: 'Tremors: A Cold Day in Hell',
    overview:
      'Burt Gummer (Michael Gross) and his son Travis Welker (Jamie Kennedy) find themselves up to their ears in Graboids and Ass-Blasters when they head to Canada to investigate a series of deadly giant-worm attacks. Arriving at a remote research facility in the artic tundra, Burt begins to suspect that Graboids are secretly being weaponized, but before he can prove his theory, he is sidelined by Graboid venom. With just 48 hours to live, the only hope is to create an antidote from fresh venom — but to do that, someone will have to figure out how to milk a Graboid!',
    poster_path: '/aFOdiHaRjeTmHG67e5B7md2Q1cq.jpg',
    title: 'Tremors: A Cold Day in Hell',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 58.646,
      },
    ],
    release_date: '2018-05-01',
  },
  {
    adult: false,
    backdrop_path: '/4HWAQu28e2yaWrtupFPGFkdNU7V.jpg',
    genre_ids: [35, 80, 18, 9648],
    id: 546554,
    original_language: 'en',
    original_title: 'Knives Out',
    overview:
      "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate. From Harlan's dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death.",
    poster_path: '/pThyQovXQrw2m0s9x82twj48Jq4.jpg',
    title: 'Knives Out',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 58.597,
      },
    ],
    release_date: '2019-11-27',
  },
  {
    adult: false,
    backdrop_path: '/ziC23LkMYj8gToQQYQGWSGJCLNF.jpg',
    genre_ids: [10751, 16, 35, 12],
    id: 82690,
    original_language: 'en',
    original_title: 'Wreck-It Ralph',
    overview:
      "Wreck-It Ralph is the 9-foot-tall, 643-pound villain of an arcade video game named Fix-It Felix Jr., in which the game's titular hero fixes buildings that Ralph destroys. Wanting to prove he can be a good guy and not just a villain, Ralph escapes his game and lands in Hero's Duty, a first-person shooter where he helps the game's hero battle against alien invaders. He later enters Sugar Rush, a kart racing game set on tracks made of candies, cookies and other sweets. There, Ralph meets Vanellope von Schweetz who has learned that her game is faced with a dire threat that could affect the entire arcade, and one that Ralph may have inadvertently started.",
    poster_path: '/zWoIgZ7mgmPkaZjG0102BSKFIqQ.jpg',
    title: 'Wreck-It Ralph',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 85.709,
      },
    ],
    release_date: '2012-01-01',
  },
  {
    adult: false,
    backdrop_path: '/s0XaJEApAfgMgKUBy6UfOnNTtwR.jpg',
    genre_ids: [28, 16, 878],
    id: 39101,
    original_language: 'ja',
    original_title: 'ドラゴンボールZ 地球まるごと超決戦',
    overview:
      "Goku and friends must stop a band of space pirates from consuming fruit from the Tree of Might before it's destructive powers drain Earth's energy.",
    poster_path: '/fDX4Dp8IKvjBAaEb5MOJrGkxWX0.jpg',
    title: 'Dragon Ball Z: The Tree of Might',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 85.54,
      },
    ],
    release_date: '1990-06-07',
  },
  {
    adult: false,
    backdrop_path: '/qrtRKRzoNkf5vemO9tJ2Y4DrHxQ.jpg',
    genre_ids: [12, 14, 18],
    id: 338952,
    original_language: 'en',
    original_title: 'Fantastic Beasts: The Crimes of Grindelwald',
    overview:
      'Gellert Grindelwald has escaped imprisonment and has begun gathering followers to his cause—elevating wizards above all non-magical beings. The only one capable of putting a stop to him is the wizard he once called his closest friend, Albus Dumbledore. However, Dumbledore will need to seek help from the wizard who had thwarted Grindelwald once before, his former student Newt Scamander, who agrees to help, unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.',
    poster_path: '/fMMrl8fD9gRCFJvsx0SuFwkEOop.jpg',
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 85.422,
      },
    ],
    release_date: '2018-11-14',
  },
  {
    adult: false,
    backdrop_path: '/nKMeTdm72LQ756Eq20uTjF1zDXu.jpg',
    genre_ids: [12, 18],
    id: 399360,
    original_language: 'en',
    original_title: 'Alpha',
    overview:
      'In the prehistoric past, Keda, a young and inexperienced hunter, struggles to return home after being separated from his tribe when bison hunting goes awry. On his way back he will find an unexpected ally.',
    poster_path: '/afdZAIcAQscziqVtsEoh2PwsYTW.jpg',
    title: 'Alpha',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 85.241,
      },
    ],
    release_date: '2018-08-17',
  },
  {
    adult: false,
    backdrop_path: '/4qu4kO5HVTKMK2hvmCXeviZ233l.jpg',
    genre_ids: [35, 80, 18],
    id: 741228,
    original_language: 'en',
    original_title: 'Locked Down',
    overview:
      "During a COVID-19 lockdown, sparring couple Linda and Paxton call a truce to attempt a high-risk jewellery heist at one of the world's most exclusive department stores, Harrods.",
    poster_path: '/svHelD0Hb3TXPAQoPsoBwdDMTvf.jpg',
    title: 'Locked Down',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.7,
      },
      {
        id: 'popularity',
        rating: 84.913,
      },
    ],
    release_date: '2021-02-25',
  },
  {
    adult: false,
    backdrop_path: '/k5ypSoY4Ze0Gfi8zkijhr6lV3yx.jpg',
    genre_ids: [28, 16, 878],
    id: 39105,
    original_language: 'ja',
    original_title: 'ドラゴンボールZ 銀河ギリギリ!! ぶっちぎりの凄い奴',
    overview:
      'Mr. Money is holding another World Martial Arts Tournament and Mr. Satan invites everyone in the world to join in. Little does he know that Bojack, an ancient villain who has escaped his prison, is competing. Since Goku is currently dead, it is up to Gohan, Vegeta, and Trunks to defeat Bojack and his henchman.',
    poster_path: '/iihTK9Af8G1ZzBjkIIAV4qQMkzF.jpg',
    title: 'Dragon Ball Z: Bojack Unbound',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 84.805,
      },
    ],
    release_date: '1993-07-10',
  },
  {
    adult: false,
    backdrop_path: '/kSu2HaqBJSaIN6sUd0RciwNzTSe.jpg',
    genre_ids: [18],
    id: 676691,
    original_language: 'en',
    original_title: 'The Crossroads of Hunter Wilde',
    overview:
      'Hunter Wilde is the leader of a group of Christian survivalists who are trying to live as normal as possible two years after an EMP attack and knocking all the power down. In a world of chaos living day to day has become more treacherous. But that is nothing compared to when the gates of hell are opened up and demons are commissioned to seek and destroy the remaining believers on earth. Their targets are set on Hunter. If they can break him the whole town of Crossroads will follow.',
    poster_path: '/ykwUc1b7bkKcpxT7MTxrv5s4JOv.jpg',
    title: 'The Crossroads of Hunter Wilde',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8,
      },
      {
        id: 'popularity',
        rating: 84.803,
      },
    ],
    release_date: '2019-09-30',
  },
  {
    adult: false,
    backdrop_path: '/qDQEQbgP3v7B9IYLAUcYexNrVYP.jpg',
    genre_ids: [10751, 16, 35, 12],
    id: 404368,
    original_language: 'en',
    original_title: 'Ralph Breaks the Internet',
    overview:
      "Video game bad guy Ralph and fellow misfit Vanellope von Schweetz must risk it all by traveling to the World Wide Web in search of a replacement part to save Vanellope's video game, Sugar Rush. In way over their heads, Ralph and Vanellope rely on the citizens of the internet — the netizens — to help navigate their way, including an entrepreneur named Yesss, who is the head algorithm and the heart and soul of trend-making site BuzzzTube.",
    poster_path: '/qEnH5meR381iMpmCumAIMswcQw2.jpg',
    title: 'Ralph Breaks the Internet',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 84.786,
      },
    ],
    release_date: '2018-11-20',
  },
  {
    adult: false,
    backdrop_path: '/prNSFGKGjtc2lYEr8zjDastCeEg.jpg',
    genre_ids: [35, 10749],
    id: 552687,
    original_language: 'ja',
    original_title: 'ヲタクに恋は難しい',
    overview:
      'An effervescent musical about one of the most unlikely couples seen on screen: two Otaku intent on hiding their nerdiness from their colleagues!',
    poster_path: '/9JV0LOcazudqEcz2NNOMqEIzACz.jpg',
    title: 'Wotakoi: Love is Hard for Otaku',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 84.691,
      },
    ],
    release_date: '2020-02-07',
  },
  {
    adult: false,
    backdrop_path: '/vFm4pF0BgaWPj0i2zEiZO6TqEQ0.jpg',
    genre_ids: [53, 28],
    id: 260346,
    original_language: 'en',
    original_title: 'Taken 3',
    overview:
      "Ex-government operative Bryan Mills finds his life is shattered when he's falsely accused of a murder that hits close to home. As he's pursued by a savvy police inspector, Mills employs his particular set of skills to track the real killer and exact his unique brand of justice.",
    poster_path: '/vzvMXMypMq7ieDofKThsxjHj9hn.jpg',
    title: 'Taken 3',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 84.672,
      },
    ],
    release_date: '2014-12-16',
  },
  {
    adult: false,
    backdrop_path: '/zJDMuXQDraHjtF53wikmyBQIcYe.jpg',
    genre_ids: [28, 12, 35, 14],
    id: 353486,
    original_language: 'en',
    original_title: 'Jumanji: Welcome to the Jungle',
    overview:
      "The tables are turned as four teenagers are sucked into Jumanji's world - pitted against rhinos, black mambas and an endless variety of jungle traps and puzzles. To survive, they'll play as characters from the game.",
    poster_path: '/pSgXKPU5h6U89ipF7HBYajvYt7j.jpg',
    title: 'Jumanji: Welcome to the Jungle',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 84.5,
      },
    ],
    release_date: '2017-12-09',
  },
  {
    adult: false,
    backdrop_path: '/5bo8PEYnYibOLwEOv5u2Grd0u4R.jpg',
    genre_ids: [10752],
    id: 635744,
    original_language: 'en',
    original_title: 'Jarhead: Law of Return',
    overview:
      "Major Ronan Jackson (Devon Sawa), an accomplished fighter pilot for the Israel Defense Forces and son of a U.S. Senator (Robert Patrick), is shot down while flying through Syrian airspace. After miraculously surviving the crash, Jackson is taken captive by a group of Hezbollah militiamen. A gripping and powerful story packed with hard-hitting action, Jarhead: Law of Return follows a squad of elite soldiers, led by Gunnery Sergeant Dave Torres (Amaury Nolasco), as they risk their own lives in the hopes of saving an ally they've never met.",
    poster_path: '/6LlqyjAik3Kh68QQ9AchSJEF0Z5.jpg',
    title: 'Jarhead: Law of Return',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 84.389,
      },
    ],
    release_date: '2019-10-01',
  },
  {
    adult: false,
    backdrop_path: '/vlLW4BPPS6XL8mxAvoJSppJV3Sv.jpg',
    genre_ids: [12, 16, 35, 10751],
    id: 12230,
    original_language: 'en',
    original_title: 'One Hundred and One Dalmatians',
    overview:
      "When a litter of dalmatian puppies are abducted by the minions of Cruella De Vil, the parents must find them before she uses them for a diabolical fashion statement.\r In a Disney animation classic, Dalmatian Pongo is tired of his bachelor-dog life. He spies lovely Perdita and maneuvers his master, Roger, into meeting Perdita's owner, Anita. The owners fall in love and marry, keeping Pongo and Perdita together too. After Perdita gives birth to a litter of 15 puppies, Anita's old school friend Cruella De Vil wants to buy them all. Roger declines her offer, so Cruella hires the criminal Badun brothers to steal them -- so she can have a fur coat.",
    poster_path: '/9klDisS1sVb5LljRhpYJ0TUbPzt.jpg',
    title: 'One Hundred and One Dalmatians',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 84.348,
      },
    ],
    release_date: '1961-01-25',
  },
  {
    adult: false,
    backdrop_path: '/2OQYAP64ybQZBiOcjthMVFcQRE.jpg',
    genre_ids: [10751, 16, 35, 14],
    id: 159824,
    original_language: 'en',
    original_title: 'Hotel Transylvania 2',
    overview:
      'When the old-old-old-fashioned vampire Vlad arrives at the hotel for an impromptu family get-together, Hotel Transylvania is in for a collision of supernatural old-school and modern day cool.',
    poster_path: '/kKFgwQnR5q08UFsAvtoYyTIiHyj.jpg',
    title: 'Hotel Transylvania 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 84.339,
      },
    ],
    release_date: '2015-09-21',
  },
  {
    adult: false,
    backdrop_path: '/r4VumNLSafeGhlieKNhGv0BQ4UD.jpg',
    genre_ids: [10749, 14, 16],
    id: 3933,
    original_language: 'en',
    original_title: 'Corpse Bride',
    overview:
      'Set in a 19th-century european village, this stop-motion animation feature follows the story of Victor, a young man whisked away to the underworld and wed to a mysterious corpse bride, while his real bride Victoria waits bereft in the land of the living.',
    poster_path: '/isb2Qow76GpqYmsSyfdMfsYAjts.jpg',
    title: 'Corpse Bride',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 84.324,
      },
    ],
    release_date: '2005-09-12',
  },
  {
    adult: false,
    backdrop_path: '/1q6l2XuWIVqPR07q8FdznxeLTNr.jpg',
    genre_ids: [10749, 18],
    id: 61979,
    original_language: 'es',
    original_title: 'Tres metros sobre el cielo',
    overview:
      'Story of two young people who belong to different worlds. It is the chronicle of a love improbable, almost impossible but inevitable dragging in a frantic journey they discover the first great love. Babi is a girl from upper-middle class that is educated in goodness and innocence . Hache is a rebellious boy, impulsive, unconscious, has a appetite for risk and danger embodied in endless fights and illegal motorbike races, the limit of common sense',
    poster_path: '/fcFz2xEZodKOxHDn9DazxPYHDSc.jpg',
    title: 'Three Steps Above Heaven',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 84.252,
      },
    ],
    release_date: '2010-12-03',
  },
  {
    adult: false,
    backdrop_path: '/mEDMV7gA36wJYYx2VcywF2DWCg1.jpg',
    genre_ids: [35],
    id: 57214,
    original_language: 'en',
    original_title: 'Project X',
    overview:
      'Three high school seniors throw a party to make a name for themselves. As the night progresses, things spiral out of control as word of the party spreads.',
    poster_path: '/lUPDGT3lyRrq8SvWuNWG2DP64bR.jpg',
    title: 'Project X',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 84.235,
      },
    ],
    release_date: '2012-03-01',
  },
  {
    adult: false,
    backdrop_path: '/2F6zpkkMianLO9JRRvnujpW4bzp.jpg',
    genre_ids: [14, 27, 10770],
    id: 794960,
    original_language: 'en',
    original_title: 'Blood Moon',
    overview:
      'When Esme and her ten-year-old son, Luna move to a small desert town looking for a fresh start, they attract all the wrong kinds of attention. Esme must battle to protect her son and a terrifying secret before the next full moon reveals all.',
    poster_path: '/9umVH1R5Z2I1Fqzg7qwMIR2gpKG.jpg',
    title: 'Blood Moon',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 84.057,
      },
    ],
    release_date: '2021-03-26',
  },
  {
    adult: false,
    backdrop_path: '/xVHgLL32VHlPMl1syvVMuZFSVLM.jpg',
    genre_ids: [28, 16, 878],
    id: 39100,
    original_language: 'ja',
    original_title: 'ドラゴンボールZ この世で一番強いヤツ',
    overview:
      "The evil Dr. Kochin uses the dragon balls to resurrect his mentor, Dr. Wheelo, in an effort to take over the world. Dr. Wheelo, his body having been destroyed by the avalanche that killed him fifty years before, desires the body of the strongest fighter in the world as his new vessel. Believing Roshi to be the world's strongest warrior, Dr. Kochin abducts Bulma and forces Roshi to surrender himself to save her. When Goku hears of their abduction, he goes to their rescue.",
    poster_path: '/5elbm3iLgGQ6nA5vqUmi9vIojbF.jpg',
    title: "Dragon Ball Z: The World's Strongest",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 84.043,
      },
    ],
    release_date: '1990-03-10',
  },
  {
    adult: false,
    backdrop_path: '/uOqKkR1gk1oPimEAH9KvRv40Sug.jpg',
    genre_ids: [12, 10751, 14],
    id: 411,
    original_language: 'en',
    original_title:
      'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    overview:
      "Siblings Lucy, Edmund, Susan and Peter step through a magical wardrobe and find the land of Narnia. There, they discover a charming, once peaceful kingdom that has been plunged into eternal winter by the evil White Witch, Jadis. Aided by the wise and magnificent lion, Aslan, the children lead Narnia into a spectacular, climactic battle to be free of the Witch's glacial powers forever.",
    poster_path: '/kzJip9vndXYSKQHCgekrgqbnUrA.jpg',
    title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 83.992,
      },
    ],
    release_date: '2005-12-07',
  },
  {
    adult: false,
    backdrop_path: '/h00iFXMpGuls2GEnXIGFzQUeaFr.jpg',
    genre_ids: [18, 27, 53],
    id: 726208,
    original_language: 'es',
    original_title: 'Voces',
    overview:
      'After the strange death of his young son at their new home, Daniel hears a ghostly plea for help, spurring him to seek out a renowned paranormal expert.',
    poster_path: '/ibIDoxxWKkm7WRoKK61in7try3G.jpg',
    title: "Don't Listen",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 71.729,
      },
    ],
    release_date: '2020-07-24',
  },
  {
    adult: false,
    backdrop_path: '/4UXfZjqt0C5kHTROotrsnfDYCh.jpg',
    genre_ids: [28, 12, 18, 14],
    id: 221732,
    original_language: 'ja',
    original_title: 'るろうに剣心　伝説の最期編',
    overview:
      'Shishio has set sail in his ironclad ship to bring down the Meiji government and return Japan to chaos, carrying Kaoru with him. In order to stop him in time, Kenshin trains with his old master to learn his final technique.',
    poster_path: '/3Xq7xmYZwNJfSODpec6OzYaxaA3.jpg',
    title: 'Rurouni Kenshin Part III: The Legend Ends',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 71.726,
      },
    ],
    release_date: '2014-09-13',
  },
  {
    adult: false,
    backdrop_path: '/jorgjEk6a0bed6jdR5wu4S6ZvRm.jpg',
    genre_ids: [28, 12, 14, 878],
    id: 141052,
    original_language: 'en',
    original_title: 'Justice League',
    overview:
      "Fuelled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne and Diana Prince assemble a team of metahumans consisting of Barry Allen, Arthur Curry and Victor Stone to face the catastrophic threat of Steppenwolf and the Parademons who are on the hunt for three Mother Boxes on Earth.",
    poster_path: '/eifGNCSDuxJeS1loAXil5bIGgvC.jpg',
    title: 'Justice League',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 71.683,
      },
    ],
    release_date: '2017-11-15',
  },
  {
    adult: false,
    backdrop_path: '/erpYg6h8MnoT2BZqdlT0zABbbqK.jpg',
    genre_ids: [28, 35, 80],
    id: 799497,
    original_language: 'pt',
    original_title: 'Cabras da Peste',
    overview:
      'Bruceuilis, a policeman from the countryside, is assigned to rescue Celestina, a goat considered heritage of his small city, and travels to São Paulo. There, he meets police clerk Trindade, who decides to venture out into the field, even though it is not his specialty.',
    poster_path: '/rzcdLb0BhPaUJjD2jEcfRMiwOgh.jpg',
    title: 'Get the Goat',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 71.681,
      },
    ],
    release_date: '2021-03-18',
  },
  {
    adult: false,
    backdrop_path: '/kkmTDENld0SASZVzqn25mbRYBzU.jpg',
    genre_ids: [53, 9648, 27, 80],
    id: 524251,
    original_language: 'en',
    original_title: 'I See You',
    overview:
      "When a 12-year-old boy goes missing, lead investigator Greg Harper struggles to balance the pressure of the investigation and troubles with his wife, Jackie. Facing a recent affair, great strain is put on the family that slowly gnaws away at Jackie's grip on reality. But after a malicious presence manifests itself in their home and puts their son, Connor, in mortal danger, the cold, hard truth about evil in the Harper household is finally uncovered.",
    poster_path: '/2LwamrHAmxqEHsT9JViFJxT08Ek.jpg',
    title: 'I See You',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 71.606,
      },
    ],
    release_date: '2019-09-11',
  },
  {
    adult: false,
    backdrop_path: '/2l8Mcy6MD8MoqYmQIuGcKz63Sra.jpg',
    genre_ids: [18],
    id: 660943,
    original_language: 'es',
    original_title: 'El olvido que seremos',
    overview:
      "Portrays the life of Héctor Abad Gómez, a prominent doctor and human rights activist in the polarized, violent Medellin of the 70s. A family man worried not only for his own children but those of the underprivileged classes as well, his home was imbued with vitality and creativity, the result of an education based on tolerance and love. Nothing could foretell that a terrible cancer would take the life of one of his beloved daughters. Driven by sadness and rage, Héctor devoted himself to the social and political causes of the time. But Medellin's intolerant society would harass him until he was finally silenced.",
    poster_path: '/AnFd9DkA3UGhqmEVtPN9rIIJoH7.jpg',
    title: 'Forgotten We’ll Be',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8,
      },
      {
        id: 'popularity',
        rating: 71.522,
      },
    ],
    release_date: '2020-08-22',
  },
  {
    adult: false,
    backdrop_path: '/ppehJ5HlIcqFpH9erwjwFGKdIoe.jpg',
    genre_ids: [16, 28, 878, 35, 12],
    id: 569094,
    original_language: 'en',
    original_title: 'Spider-Man: Into the Spider-Verse 2',
    overview:
      'The continuing story of Miles Morales and the many other Spider-People from different realities.',
    poster_path: '/8ycplQbTU6DRRwiG95lQEpYkOVg.jpg',
    title: 'Spider-Man: Into the Spider-Verse 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 71.444,
      },
    ],
    release_date: '2022-10-06',
  },
  {
    adult: false,
    backdrop_path: '/yB32nYB9WfXye681xtx3t3aQ6AD.jpg',
    genre_ids: [16, 35, 10751, 9648, 10770],
    id: 37211,
    original_language: 'en',
    original_title: 'Scooby-Doo! and the Reluctant Werewolf',
    overview:
      "Shaggy is turned into a werewolf, and it's up to Scooby, Scrappy and Shaggy's girlfriend to help him win a race against other monsters, and become human again.",
    poster_path: '/cXUQuHnNBxFSZAmYfogMfrcvMk7.jpg',
    title: 'Scooby-Doo! and the Reluctant Werewolf',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 71.271,
      },
    ],
    release_date: '1988-11-13',
  },
  {
    adult: false,
    backdrop_path: '/v0bFTXnLNh9cjvpIckJpIM2t9nf.jpg',
    genre_ids: [27],
    id: 631583,
    original_language: 'en',
    original_title: 'Sacrifice',
    overview:
      'Isaac and his pregnant wife visit a remote Norwegian village to claim an unexpected inheritance. The couple finds themselves caught in a nightmare when they encounter a sinister cult that worships a sea-dwelling deity.',
    poster_path: '/xXI5Lg6mJLEesTggRJBrq50vrqU.jpg',
    title: 'Sacrifice',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.1,
      },
      {
        id: 'popularity',
        rating: 70.899,
      },
    ],
    release_date: '2021-02-09',
  },
  {
    adult: false,
    backdrop_path: '/5nkKy7eEDsXqsxFLJy3GxZhE90J.jpg',
    genre_ids: [16, 14, 10749, 18],
    id: 476292,
    original_language: 'ja',
    original_title: 'さよならの朝に約束の花をかざろう',
    overview:
      "Maquia is a member of a special race called the Iorph who can live for hundreds of years. However, Maquia has always felt lonely despite being surrounded by her people, as she was orphaned from a young age. She daydreams about the outside world, but dares not travel from her home due to the warnings of the clan's chief.  One day the kingdom of Mezarte invades her homeland. They already have what is left of the giant dragons, the Renato, under their control, and now their king wishes to add the immortality to his bloodline.  They ravage the Iorph homeland and kill most of its inhabitants. Caught in the midst of the attack, Maquia is carried off by one of the Renato. It soon dies, and she is left deserted in a forest, now truly alone save for the cries of a single baby off in the distance. Maquia finds the baby in a destroyed village and decides to raise him as her own, naming him Ariel. Although she knows nothing of the human world, how to raise a child that ages much faster than her.",
    poster_path: '/hL3NqRE2ccR4Y2sYSJTrmalRjrz.jpg',
    title: 'Maquia: When the Promised Flower Blooms',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.4,
      },
      {
        id: 'popularity',
        rating: 70.801,
      },
    ],
    release_date: '2018-02-24',
  },
  {
    adult: false,
    backdrop_path: '/eP07auW0baxhbflms6obNfRB0NG.jpg',
    genre_ids: [18, 14, 12],
    id: 559907,
    original_language: 'en',
    original_title: 'The Green Knight',
    overview:
      "An epic fantasy adventure based on the timeless Arthurian legend, The Green Knight tells the story of Sir Gawain, King Arthur's reckless and headstrong nephew, who embarks on a daring quest to confront the eponymous Green Knight, a gigantic emerald-skinned stranger and tester of men.",
    poster_path: '/if4hw3Ou5Sav9Em7WWHj66mnywp.jpg',
    title: 'The Green Knight',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 70.787,
      },
    ],
    release_date: '2021-07-29',
  },
  {
    adult: false,
    backdrop_path: '/8JWfh0F9PE7nvg2S3HNnrxbKjuc.jpg',
    genre_ids: [27],
    id: 738542,
    original_language: 'en',
    original_title: 'The Haunting of Margam Castle',
    overview:
      "A team of American parapsychologists travel to Wales to conduct a study of Margam Castle, one of the UK's most haunted buildings.",
    poster_path: '/r2BlIxjAaj0WERGrIehnczNE0On.jpg',
    title: 'The Haunting of Margam Castle',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 70.76,
      },
    ],
    release_date: '2020-09-01',
  },
  {
    adult: false,
    backdrop_path: '/7TC0Me75kIHNhB8O7O6quSI207p.jpg',
    genre_ids: [10751, 14, 12, 35],
    id: 654028,
    original_language: 'en',
    original_title: 'The Christmas Chronicles: Part Two',
    overview:
      'Kate Pierce is reluctantly spending Christmas with her mom’s new boyfriend and his son Jack. But when the North Pole and Christmas are threatened to be destroyed, Kate and Jack are unexpectedly pulled into a new adventure with Santa Claus.',
    poster_path: '/6sG0kbEvAi3RRLcGGU5h8l3qAPa.jpg',
    title: 'The Christmas Chronicles: Part Two',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 70.633,
      },
    ],
    release_date: '2020-11-18',
  },
  {
    adult: false,
    backdrop_path: '/7dzngS8pLkGJpyeskCFcjPO9qLF.jpg',
    genre_ids: [28, 53],
    id: 245891,
    original_language: 'en',
    original_title: 'John Wick',
    overview:
      'Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.',
    poster_path: '/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg',
    title: 'John Wick',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 70.592,
      },
    ],
    release_date: '2014-10-22',
  },
  {
    adult: false,
    backdrop_path: '/AmTfxc3S22z7WWC7KAR3SPs70Bl.jpg',
    genre_ids: [878, 28, 12, 35, 10770],
    id: 523849,
    original_language: 'en',
    original_title: "The Last Sharknado: It's About Time",
    overview:
      'With much of America lying in ruins, the rest of the world braces for a global sharknado, Fin and his family must travel around the world to stop them.',
    poster_path: '/uvMjNLot0dG7CX4HZPme2WDkMmE.jpg',
    title: "The Last Sharknado: It's About Time",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.4,
      },
      {
        id: 'popularity',
        rating: 70.497,
      },
    ],
    release_date: '2018-08-19',
  },
  {
    adult: false,
    backdrop_path: '/o2SeAw8ARPB1D8oudCRJcxW3w60.jpg',
    genre_ids: [27, 53],
    id: 13186,
    original_language: 'en',
    original_title: 'Wrong Turn 2: Dead End',
    overview:
      'Retired military commander Colonel Dale Murphy hosts the simulated post-apocalyptic reality show where participants are challenged to survive a remote West Virginia wasteland. But the show turns into a nightmarish showdown when each realizes they are being hunted by an inbred family of cannibals determined to make them all dinner!',
    poster_path: '/n5Re2ywnpqwAXTin8W5j3lqSwc7.jpg',
    title: 'Wrong Turn 2: Dead End',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 70.427,
      },
    ],
    release_date: '2007-08-25',
  },
  {
    adult: false,
    backdrop_path: '/flNp7NdzBC1UGctzuubQveuVSF5.jpg',
    genre_ids: [27, 53, 9648],
    id: 748224,
    original_language: 'en',
    original_title: 'Reaptown',
    overview:
      "In this supernatural horror film, Carrie Baldwin is freed from prison under the conditions of a work-release program in Reaptown, Nevada. As she struggles to find her missing sister while working the night shift as a security guard for the Reaptown Railway Museum, Carrie soon finds herself in the presence of evil. Could the Railway hold the clues to her sister's mysterious disappearance?",
    poster_path: '/wyN1R51euy3c2YHsyiSnc5ovF5t.jpg',
    title: 'Reaptown',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.7,
      },
      {
        id: 'popularity',
        rating: 70.421,
      },
    ],
    release_date: '2020-09-28',
  },
  {
    adult: false,
    backdrop_path: '/wfClZdRb1x4LZ8B73Y9RSn8XAPa.jpg',
    genre_ids: [10751, 16, 12, 878, 35],
    id: 10386,
    original_language: 'en',
    original_title: 'The Iron Giant',
    overview:
      'In the small town of Rockwell, Maine in October 1957, a giant metal machine befriends a nine-year-old boy and ultimately finds its humanity by unselfishly saving people from their own fears and prejudices.',
    poster_path: '/bMr9Ir2hCFu2R72pjCA43uRMT4r.jpg',
    title: 'The Iron Giant',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 70.327,
      },
    ],
    release_date: '1999-08-06',
  },
  {
    adult: false,
    backdrop_path: '/4WbSBntySbZadKLWKHxNsf7sD14.jpg',
    genre_ids: [16, 28, 18, 878],
    id: 609202,
    original_language: 'ja',
    original_title: 'Blackfox',
    overview:
      "Rikka is a ninja descendant. Her grandfather Hyoe is the last chief of their ninja clan and her father is a cyborg researcher. Both are killed when a weapons' company raids his lab to use his research. Rikka sets out to avenge their deaths.",
    poster_path: '/7ypOmAQ3TowBa4iBILBboOEQqYh.jpg',
    title: 'Black Fox',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 70.272,
      },
    ],
    release_date: '2019-10-05',
  },
  {
    adult: false,
    backdrop_path: '/w22CTHxmdAsUrXRbCQt4gOSOD6E.jpg',
    genre_ids: [18, 878, 10752],
    id: 281338,
    original_language: 'en',
    original_title: 'War for the Planet of the Apes',
    overview:
      'Caesar and his apes are forced into a deadly conflict with an army of humans led by a ruthless Colonel. After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind. As the journey finally brings them face to face, Caesar and the Colonel are pitted against each other in an epic battle that will determine the fate of both their species and the future of the planet.',
    poster_path: '/ijQHiImv16vNSeZQsmih04kwn0C.jpg',
    title: 'War for the Planet of the Apes',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 70.27,
      },
    ],
    release_date: '2017-07-11',
  },
  {
    adult: false,
    backdrop_path: '/fssCO59bqU5f0zngeYKex0g1vyb.jpg',
    genre_ids: [35, 28],
    id: 457335,
    original_language: 'en',
    original_title: 'Guns Akimbo',
    overview:
      'An ordinary guy suddenly finds himself forced to fight a gladiator-like battle for a dark website that streams the violence for viewers. Miles must fight heavily armed Nix and also save his kidnapped ex-girlfriend.',
    poster_path: '/2kNnf7BwRCEm4bcFkdiE0T4U25s.jpg',
    title: 'Guns Akimbo',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 87.641,
      },
    ],
    release_date: '2020-02-27',
  },
  {
    adult: false,
    backdrop_path: '/k7sE3loFwuU2mqf7FbZBeE3rjBa.jpg',
    genre_ids: [16, 35, 12, 10751],
    id: 454640,
    original_language: 'en',
    original_title: 'The Angry Birds Movie 2',
    overview:
      'Red, Chuck, Bomb and the rest of their feathered friends are surprised when a green pig suggests that they put aside their differences and unite to fight a common threat. Aggressive birds from an island covered in ice are planning to use an elaborate weapon to destroy the fowl and swine.',
    poster_path: '/ebe8hJRCwdflNQbUjRrfmqtUiNi.jpg',
    title: 'The Angry Birds Movie 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 87.551,
      },
    ],
    release_date: '2019-08-02',
  },
  {
    adult: false,
    backdrop_path: '/bAup7FGUlmNVOuhZFlLgmDPo0Eg.jpg',
    genre_ids: [18, 14],
    id: 345938,
    original_language: 'en',
    original_title: 'The Shack',
    overview:
      'After suffering a family tragedy, Mack Phillips spirals into a deep depression causing him to question his innermost beliefs. Facing a crisis of faith, he receives a mysterious letter urging him to an abandoned shack deep in the Oregon wilderness. Despite his doubts, Mack journeys to the shack and encounters an enigmatic trio of strangers led by a woman named Papa. Through this meeting, Mack finds important truths that will transform his understanding of his tragedy and change his life forever.',
    poster_path: '/doAzav9kfdtsoSdw1MDFvjKq3J4.jpg',
    title: 'The Shack',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 87.485,
      },
    ],
    release_date: '2017-03-03',
  },
  {
    adult: false,
    backdrop_path: '/edXuLjxjYu1SkyMHd55hRasME8b.jpg',
    genre_ids: [27],
    id: 636879,
    original_language: 'en',
    original_title: "A Nun's Curse",
    overview:
      'A group of travelers are forced to seek shelter inside an abandoned jail where a notorious nun named Sister Monday had once been assigned and was suspected of murdering prisoners.',
    poster_path: '/eutNRwSguV0NCx7BNAXOibWzjP6.jpg',
    title: "A Nun's Curse",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 87.483,
      },
    ],
    release_date: '2020-05-12',
  },
  {
    adult: false,
    backdrop_path: '/16aJtXO6lObbBUr11IvkjB1QD1f.jpg',
    genre_ids: [18, 10749],
    id: 341174,
    original_language: 'en',
    original_title: 'Fifty Shades Darker',
    overview:
      'When a wounded Christian Grey tries to entice a cautious Ana Steele back into his life, she demands a new arrangement before she will give him another chance. As the two begin to build trust and find stability, shadowy figures from Christian’s past start to circle the couple, determined to destroy their hopes for a future together.',
    poster_path: '/y8SDjMI2uejj2e2NaAmiI9dnPki.jpg',
    title: 'Fifty Shades Darker',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 87.447,
      },
    ],
    release_date: '2017-02-08',
  },
  {
    adult: false,
    backdrop_path: '/cmZVWuXM1hpP2GKFABCUkoscKu4.jpg',
    genre_ids: [16, 10402],
    id: 738215,
    original_language: 'en',
    original_title: 'Barbie: Princess Adventure',
    overview:
      'With new friends in a new kingdom, Barbie learns what it means to be herself when she trades places with a royal lookalike in this musical adventure.',
    poster_path: '/AwkmMTKJBAatbeAVhTwhcU3Pyp4.jpg',
    title: 'Barbie: Princess Adventure',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 87.29,
      },
    ],
    release_date: '2020-09-01',
  },
  {
    adult: false,
    backdrop_path: '/9QusGjxcYvfPD1THg6oW3RLeNn7.jpg',
    genre_ids: [28, 12, 14],
    id: 297802,
    original_language: 'en',
    original_title: 'Aquaman',
    overview:
      "Once home to the most advanced civilization on Earth, Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people and then the surface world. Standing in his way is Arthur Curry, Orm's half-human, half-Atlantean brother and true heir to the throne.",
    poster_path: '/xLPffWMhMj1l50ND3KchMjYoKmE.jpg',
    title: 'Aquaman',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 87.285,
      },
    ],
    release_date: '2018-07-06',
  },
  {
    adult: false,
    backdrop_path: '/o8ZS811VjYbBi4pRYwILLdWCVey.jpg',
    genre_ids: [35],
    id: 109439,
    original_language: 'en',
    original_title: 'The Hangover Part III',
    overview:
      "This time, there's no wedding. No bachelor party. What could go wrong, right? But when the Wolfpack hits the road, all bets are off.",
    poster_path: '/vtxuPWkdllLNLVyGjKYa267ntuH.jpg',
    title: 'The Hangover Part III',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 87.093,
      },
    ],
    release_date: '2013-05-23',
  },
  {
    adult: false,
    backdrop_path: '/lxbKrBo1wZ2U9BS1jiZyNe3qI4J.jpg',
    genre_ids: [14, 12, 16, 35, 10751],
    id: 810,
    original_language: 'en',
    original_title: 'Shrek the Third',
    overview:
      'The King of Far Far Away has died and Shrek and Fiona are to become King & Queen. However, Shrek wants to return to his cozy swamp and live in peace and quiet, so when he finds out there is another heir to the throne, they set off to bring him back to rule the kingdom.',
    poster_path: '/jaNe16gE9zdAYyVwRqmlmRKshHm.jpg',
    title: 'Shrek the Third',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 87.009,
      },
    ],
    release_date: '2007-05-17',
  },
  {
    adult: false,
    backdrop_path: '/u7SeO6Y42P7VCTWLhpnL96cyOqd.jpg',
    genre_ids: [28, 12, 14],
    id: 102382,
    original_language: 'en',
    original_title: 'The Amazing Spider-Man 2',
    overview:
      'For Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has not forgotten about the promise he made to Gwen’s father to protect her by staying away, but that is a promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend, Harry Osborn, returns, and Peter uncovers new clues about his past.',
    poster_path: '/c3e9e18SSlvFd1cQaGmUj5tqL5P.jpg',
    title: 'The Amazing Spider-Man 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 86.843,
      },
    ],
    release_date: '2014-04-16',
  },
  {
    adult: false,
    backdrop_path: '/gMRBMlcgp5yQeqJ0OAff0uyZfnw.jpg',
    genre_ids: [18, 12, 10751],
    id: 657811,
    original_language: 'de',
    original_title: 'Lassie - Eine abenteuerliche Reise',
    overview:
      "12-year-old Florian and his beloved dog Lassie live in an idyllic village in the German countryside. When Florian's father loses his job, the family have to move into a small apartment where there are no dogs allowed. Lassie is given away to another family, but Florian and Lassie yearn to be reunited again so Florian sets out on an adventure to find his best friend.",
    poster_path: '/3rUc7jHNvWIPMkjRcl6Tr8GtwwO.jpg',
    title: 'Lassie Comes Home',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 86.62,
      },
    ],
    release_date: '2020-02-20',
  },
  {
    adult: false,
    backdrop_path: '/vKCiYKgTYVlsDaecEKFOYG7ZM15.jpg',
    genre_ids: [12, 35, 10751, 10749],
    id: 14405,
    original_language: 'en',
    original_title: 'Beverly Hills Chihuahua',
    overview:
      "A pampered Beverly Hills chihuahua named Chloe who, while on vacation in Mexico with her owner Viv's niece, Rachel, gets lost and must rely on her friends to help her get back home before she is caught by a dognapper who wants to ransom her.",
    poster_path: '/2aRvqtLoE06hTjG93lASvO7r1as.jpg',
    title: 'Beverly Hills Chihuahua',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.3,
      },
      {
        id: 'popularity',
        rating: 86.384,
      },
    ],
    release_date: '2008-10-03',
  },
  {
    adult: false,
    backdrop_path: '/tsGSTBl5H8DBLnHc24Teny0Ppc5.jpg',
    genre_ids: [14, 27],
    id: 524216,
    original_language: 'en',
    original_title: 'The Mortuary Collection',
    overview:
      "In the phantasmagorical town of Raven's End, a misguided young girl takes refuge in a decrepit old mortuary. The eccentric undertaker chronicles the strange history of the town through a series of twisted tales, each more terrifying than the last, but the young girl's world is unhinged when she discovers that the final story... is her own.",
    poster_path: '/5WXeYnezavNI6hXH74aQYv6yFzj.jpg',
    title: 'The Mortuary Collection',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 86.325,
      },
    ],
    release_date: '2019-09-21',
  },
  {
    adult: false,
    backdrop_path: '/slh9qCbyDcMN2rC9FiueZ6pR2fj.jpg',
    genre_ids: [99],
    id: 381749,
    original_language: 'it',
    original_title: 'Porno & Libertà',
    overview:
      'Italy, 1970. An increasing legion of harmless warriors begins a peaceful struggle for sexual freedom through pornography, shaking and shocking religious authorities and conservative political institutions. They are ironic, happy, crazy. They are dreamers, defenders of definitive communion between body and soul. But they were censored and humiliated. They were mistreated and arrested for demanding loud a new cultural renaissance.',
    poster_path: '/xhB2hGJBSvK69ZDOZJvNnoGh9vL.jpg',
    title: 'Porn to Be Free',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.3,
      },
      {
        id: 'popularity',
        rating: 86.213,
      },
    ],
    release_date: '2016-06-24',
  },
  {
    adult: false,
    backdrop_path: '/cJwkku3SPprS0Splfgh8VFRd0xn.jpg',
    genre_ids: [35, 10751],
    id: 638597,
    original_language: 'en',
    original_title: 'Yes Day',
    overview:
      "A mom and dad who usually say no decide to say yes to their kids' wildest requests — with a few ground rules — on a whirlwind day of fun and adventure.",
    poster_path: '/rejrD9ovTHJbfmpLM0mbEliEPV6.jpg',
    title: 'Yes Day',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 86.176,
      },
    ],
    release_date: '2021-03-12',
  },
  {
    adult: false,
    backdrop_path: '/zcqdZcJJQjmL5cP2g5m7Akyu1Oh.jpg',
    genre_ids: [16, 18, 12, 14],
    id: 597398,
    original_language: 'en',
    original_title: 'Away',
    overview:
      'After suffering a plane crash on a mysterious island, a young man embarks on an epic journey through forests, deserts and mountains trying to escape the shadow of a huge dark spirit.',
    poster_path: '/c59eplVELdwrUfGBUAZVin3HfaL.jpg',
    title: 'Away',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 86.131,
      },
    ],
    release_date: '2019-11-15',
  },
  {
    adult: false,
    backdrop_path: '/dyvN0x7kjfadYGDszWi18llr1ZY.jpg',
    genre_ids: [35, 10749],
    id: 623926,
    original_language: 'es',
    original_title: 'Hasta que la boda nos separe',
    overview:
      'Marina is a woman in her thirties who works organizing weddings. Not because she is an inveterate romantic just because, as she says, "when people are in love, they don\'t care about money". Unlike her customers, she enjoys a life without ties or commitments, until the moment when she falls in love with Carlos. The problem is not only he is about to get married, but also his fiancee is Marina\'s childhood friend and they have hired her as their Wedding Planner.',
    poster_path: '/bkz7ZoqJMFziqF8yQzkmfMRUEG.jpg',
    title: 'The Wedding Unplanner',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 86.121,
      },
    ],
    release_date: '2020-02-14',
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [27, 18],
    id: 718022,
    original_language: 'en',
    original_title: 'Heks',
    overview:
      "A grieving British girl unravels her murdered mother's secrets connected to a South African witch doctor's curse. She wants to put an end to this haunting hex by traveling to South Africa, but instead it casts her deeper into sinister depths.",
    poster_path: '/xPS25WUeanHcG4ubc7ZAm2Sg4M3.jpg',
    title: 'Heks',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 85.984,
      },
    ],
    release_date: '2020-12-15',
  },
  {
    adult: false,
    backdrop_path: '/dFYguAfeVt19qAbzJ5mArn7DEJw.jpg',
    genre_ids: [16, 10751],
    id: 12,
    original_language: 'en',
    original_title: 'Finding Nemo',
    overview:
      "Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist's office aquarium. It's up to his worrisome father Marlin and a friendly but forgetful fish Dory to bring Nemo home -- meeting vegetarian sharks, surfer dude turtles, hypnotic jellyfish, hungry seagulls, and more along the way.",
    poster_path: '/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg',
    title: 'Finding Nemo',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 85.797,
      },
    ],
    release_date: '2003-05-30',
  },
  {
    adult: false,
    backdrop_path: '/jOh79POQu4hyVIseUxdQxTW7vOf.jpg',
    genre_ids: [12, 14, 28],
    id: 22,
    original_language: 'en',
    original_title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
    overview:
      "Jack Sparrow, a freewheeling 18th-century pirate, quarrels with a rival pirate bent on pillaging Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her.",
    poster_path: '/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg',
    title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 85.774,
      },
    ],
    release_date: '2003-07-09',
  },
  {
    adult: false,
    backdrop_path: '/1Lhc32P0a62BgMFgd20wXR1osR3.jpg',
    genre_ids: [16, 12, 35, 10751, 878],
    id: 732670,
    original_language: 'en',
    original_title: 'The Lego Star Wars Holiday Special',
    overview:
      'As her friends prep for a Life Day holiday celebration, Rey journeys with BB-8 on a quest to gain a deeper knowledge of the Force at a mysterious Jedi Temple. There, she embarks on a cross-timeline adventure through beloved moments in Star Wars history, coming into contact with iconic heroes and villains from all eras of the saga. But will she make it back in time for the Life Day feast?',
    poster_path: '/zyzJSI7UZZzz5Toj10rYGF5689z.jpg',
    title: 'The Lego Star Wars Holiday Special',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 51.765,
      },
    ],
    release_date: '2020-11-17',
  },
  {
    adult: false,
    backdrop_path: '/ou70x2658dVnbycIRaC37sEeafS.jpg',
    genre_ids: [28, 12, 878],
    id: 47933,
    original_language: 'en',
    original_title: 'Independence Day: Resurgence',
    overview:
      'We always knew they were coming back. Using recovered alien technology, the nations of Earth have collaborated on an immense defense program to protect the planet. But nothing can prepare us for the aliens’ advanced and unprecedented force. Only the ingenuity of a few brave men and women can bring our world back from the brink of extinction.',
    poster_path: '/jzpvh0Ic7jL9GX4NLE1Tx2GUCrN.jpg',
    title: 'Independence Day: Resurgence',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.2,
      },
      {
        id: 'popularity',
        rating: 51.764,
      },
    ],
    release_date: '2016-06-22',
  },
  {
    adult: false,
    backdrop_path: '/iIQNTqVh64PDcxkakBnA6jHyfCJ.jpg',
    genre_ids: [28, 53],
    id: 467938,
    original_language: 'fr',
    original_title: 'Revenge',
    overview:
      "Jen's romantic getaway with her wealthy (married) boyfriend is disrupted when his friends arrive for an impromptu hunting trip. Tension mounts at the house until the situation culminates in an unexpected way.",
    poster_path: '/8SzcCFHiEkw8IhWS4KPAsznzkkD.jpg',
    title: 'Revenge',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 51.723,
      },
    ],
    release_date: '2017-09-23',
  },
  {
    adult: false,
    backdrop_path: '/ljaOTj4HqM5XEPoNVEmrJzJ60Ux.jpg',
    genre_ids: [28],
    id: 571650,
    original_language: 'fr',
    original_title: 'Paradise Beach',
    overview:
      'A team of former robbers arrived at Paradise: Phuket, southern Thailand. Now traders, they are happy days. Until the day when the devil arrives: Mehdi, sentenced to 15 years in prison during the robbery, comes to recover his share of the cake.',
    poster_path: '/oFidx1CYA0mHERbnY26B8l42aBa.jpg',
    title: 'Paradise Beach',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.2,
      },
      {
        id: 'popularity',
        rating: 51.65,
      },
    ],
    release_date: '2019-02-20',
  },
  {
    adult: false,
    backdrop_path: '/Apw8bdXicVaWztBkwdgv8qmq3UT.jpg',
    genre_ids: [28, 35, 53],
    id: 600301,
    original_language: 'es',
    original_title: 'Los hipócritas',
    overview:
      'The hypocrites tells the story of Nicolás, a young cameraman who works filming social events, but doesn’t feel fulfilled with his profession. In the middle of a high profile wedding, he accidentally records a compromising situation between the bride, Martina, and her brother, Esteban. Realising about what is in the tape, he sees the opportunity of leaving his tedious life behind through blackmailing the people involved. However, he does not know this secret could endanger his own life.',
    poster_path: '/mUELlV4u3m50eN5pRnhzqLjEvFc.jpg',
    title: 'The Hypocrites',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.5,
      },
      {
        id: 'popularity',
        rating: 51.616,
      },
    ],
    release_date: '2019-10-17',
  },
  {
    adult: false,
    backdrop_path: '/tcvPFdANexMxEsIUZnzjxBJbgkb.jpg',
    genre_ids: [35],
    id: 4248,
    original_language: 'en',
    original_title: 'Scary Movie 2',
    overview:
      'While the original parodied slasher flicks like Scream, Keenen Ivory Wayans\'s sequel to Scary Movie takes comedic aim at haunted house movies. A group of students visit a mansion called "Hell House," and murderous high jinks ensue.',
    poster_path: '/7Eb1JWK0Cb0rbfsYjwfc9g0PbQH.jpg',
    title: 'Scary Movie 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 51.609,
      },
    ],
    release_date: '2001-07-04',
  },
  {
    adult: false,
    backdrop_path: '/epVPiaRsLhJMinNRWUFWMudZ9ba.jpg',
    genre_ids: [35],
    id: 109418,
    original_language: 'en',
    original_title: 'Grown Ups 2',
    overview:
      'Lenny has relocated his family back to the small town where he and his friends grew up. This time around, the grown ups are the ones learning lessons from their kids on a day notoriously full of surprises—the last day of school.',
    poster_path: '/5vLeJchL3zosBj10CJP1h54xyBs.jpg',
    title: 'Grown Ups 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 51.571,
      },
    ],
    release_date: '2013-07-11',
  },
  {
    adult: false,
    backdrop_path: '/anOL7qSqbxv9G6xmAsYr3UR10Ds.jpg',
    genre_ids: [18, 10749],
    id: 10229,
    original_language: 'en',
    original_title: 'A Walk to Remember',
    overview:
      'When the popular, restless Landon Carter is forced to participate in the school drama production he falls in love with Jamie Sullivan, the daughter of the town\'s minister. Jamie has a "to-do" list for her life and also a very big secret she must keep from Landon.',
    poster_path: '/8lUYMvWdHA0Q0k5F76RQCeCBUkA.jpg',
    title: 'A Walk to Remember',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 51.55,
      },
    ],
    release_date: '2002-01-25',
  },
  {
    adult: false,
    backdrop_path: '/4DUoPZOHdPuROP4nyEIsPaMIiQl.jpg',
    genre_ids: [27, 9648, 53],
    id: 493922,
    original_language: 'en',
    original_title: 'Hereditary',
    overview:
      "When Ellen, the matriarch of the Graham family, passes away, her daughter's family begins to unravel cryptic and increasingly terrifying secrets about their ancestry.",
    poster_path: '/lHV8HHlhwNup2VbpiACtlKzaGIQ.jpg',
    title: 'Hereditary',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 51.549,
      },
    ],
    release_date: '2018-06-07',
  },
  {
    adult: false,
    backdrop_path: '/rnMwOM8gMqo6Gf6XXMpaJEayUwk.jpg',
    genre_ids: [16, 35, 10751, 12],
    id: 10112,
    original_language: 'en',
    original_title: 'The Aristocats',
    overview:
      'When Madame Adelaide Bonfamille leaves her fortune to Duchess and her children—Bonfamille’s beloved family of cats—the butler plots to steal the money and kidnaps the legatees, leaving them out on a country road. All seems lost until the wily Thomas O’Malley Cat and his jazz-playing alley cats come to the aristocats’ rescue.',
    poster_path: '/pXHpNfsZXX50vCb7Z39coEJCIka.jpg',
    title: 'The Aristocats',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 51.461,
      },
    ],
    release_date: '1970-12-23',
  },
  {
    adult: false,
    backdrop_path: '/b0dP4lPgK8Dg0tQEPx6z73jRURA.jpg',
    genre_ids: [16, 28, 18],
    id: 445030,
    original_language: 'ja',
    original_title: 'ノーゲーム・ノーライフ ゼロ',
    overview:
      'In ancient Disboard, Riku is an angry, young warrior intent on saving humanity from the warring Exceed, the sixteen sentient species, fighting to establish the "One True God" amongst the Old Deus. In a lawless land, humanity\'s lack of magic and weak bodies have made them easy targets, leaving them on the brink of extinction. One day, hope returns to humanity when Riku finds a powerful female Ex-machina, whom he names Schwi. Exiled from her Cluster because of her research into human emotions, Schwi is convinced that humanity has only survived due to the power of these feelings. Forming an unlikely partnership in the midst of the overwhelming chaos, Riku and Schwi must now find the answers to their individual shortcomings in each other, and discover for themselves what it truly means to be human as they fight for their lives against all odds. Each with a powerful new ally in tow, it is now up to them to prevent the extinction of the human race and establish peace throughout Disboard!',
    poster_path: '/cCBB6BGRj5nCTaEgogDtkHfjOLK.jpg',
    title: 'No Game No Life: Zero',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 51.455,
      },
    ],
    release_date: '2017-07-15',
  },
  {
    adult: false,
    backdrop_path: '/jXk3ZMq7n4ugOqKYq0CtMn3gia8.jpg',
    genre_ids: [10751, 16, 12, 35],
    id: 431580,
    original_language: 'en',
    original_title: 'Abominable',
    overview:
      'A group of misfits encounter a young Yeti named Everest, and they set off to reunite the magical creature with his family on the mountain of his namesake.',
    poster_path: '/20djTLqppfBx5WYA67Y300S6aPD.jpg',
    title: 'Abominable',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 51.442,
      },
    ],
    release_date: '2019-09-19',
  },
  {
    adult: false,
    backdrop_path: '/lwSOhnpwrzjtKi2RD3e5RAcGzvt.jpg',
    genre_ids: [16, 28, 12, 35, 10751],
    id: 431693,
    original_language: 'en',
    original_title: 'Spies in Disguise',
    overview:
      'Super spy Lance Sterling and scientist Walter Beckett are almost exact opposites. Lance is smooth, suave and debonair. Walter is… not. But what Walter lacks in social skills he makes up for in smarts and invention, creating the awesome gadgets Lance uses on his epic missions. But when events take an unexpected turn, Walter and Lance suddenly have to rely on each other in a whole new way.',
    poster_path: '/30YacPAcxpNemhhwX0PVUl9pVA3.jpg',
    title: 'Spies in Disguise',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 51.301,
      },
    ],
    release_date: '2019-12-04',
  },
  {
    adult: false,
    backdrop_path: '/lA5fOBqTOQBQ1s9lEYYPmNXoYLi.jpg',
    genre_ids: [35, 28, 12, 14],
    id: 590223,
    original_language: 'en',
    original_title: 'Love and Monsters',
    overview:
      'Seven years since the Monsterpocalypse began, Joel Dawson has been living underground in order to survive. But after reconnecting over radio with his high school girlfriend Aimee, Joel decides to venture out to reunite with her, despite all the dangerous monsters that stand in his way.',
    poster_path: '/r4Lm1XKP0VsTgHX4LG4syAwYA2I.jpg',
    title: 'Love and Monsters',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 51.222,
      },
    ],
    release_date: '2020-10-16',
  },
  {
    adult: false,
    backdrop_path: '/7vDOtDCVuwp84lvdLp7IxheNWWr.jpg',
    genre_ids: [28, 53],
    id: 38234,
    original_language: 'en',
    original_title: 'Undisputed III: Redemption',
    overview:
      'Russian inmate Boyka, now severely hobbled by the knee injury suffered at the end of Undisputed 2. No longer the feared prison fighter he was, he has declined so far that he is now good only for cleaning toilets. But when a new prison fight tournament begins - an international affair, matching the best fighters from prisons around the globe, enticing them with the promise of freedom for the winner - Boyka must reclaim his dignity and fight for his position in the tournament.',
    poster_path: '/g8KB77SPA7SyU8eid6TAEpt9skU.jpg',
    title: 'Undisputed III: Redemption',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 51.222,
      },
    ],
    release_date: '2010-05-22',
  },
  {
    adult: false,
    backdrop_path: '/iKJNE3QV0wEc9VMFuHYSZVhmSN9.jpg',
    genre_ids: [16, 10751],
    id: 49444,
    original_language: 'en',
    original_title: 'Kung Fu Panda 2',
    overview:
      'Po is now living his dream as The Dragon Warrior, protecting the Valley of Peace alongside his friends and fellow kung fu masters, The Furious Five - Tigress, Crane, Mantis, Viper and Monkey. But Po’s new life of awesomeness is threatened by the emergence of a formidable villain, who plans to use a secret, unstoppable weapon to conquer China and destroy kung fu. It is up to Po and The Furious Five to journey across China to face this threat and vanquish it. But how can Po stop a weapon that can stop kung fu? He must look to his past and uncover the secrets of his mysterious origins; only then will he be able to unlock the strength he needs to succeed.',
    poster_path: '/mtqqD00vB4PGRt20gWtGqFhrkd0.jpg',
    title: 'Kung Fu Panda 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 51.211,
      },
    ],
    release_date: '2011-05-25',
  },
  {
    adult: false,
    backdrop_path: '/deZYjgLWPHStzvk7hCgf8pBqFdC.jpg',
    genre_ids: [10751, 16, 10749],
    id: 10340,
    original_language: 'en',
    original_title: 'Lady and the Tramp',
    overview:
      "Lady, a golden cocker spaniel, meets up with a mongrel dog who calls himself the Tramp. He is obviously from the wrong side of town, but happenings at Lady's home make her decide to travel with him for a while.",
    poster_path: '/wXKeGea4htM7Yz3yo7hYXbs3FhV.jpg',
    title: 'Lady and the Tramp',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 51.173,
      },
    ],
    release_date: '1955-06-22',
  },
  {
    adult: false,
    backdrop_path: '/bQObbnj0TY2Q1c55w78m1AN6VNX.jpg',
    genre_ids: [18, 80, 35],
    id: 52629,
    original_language: 'es',
    original_title: 'El Infierno',
    overview:
      'Benjamin Garcia, Benny is deported from the United States. Back home and against a bleak picture, Benny gets involved in the drug business, in which he has for the first time in his life, a spectacular rise surrounded by money, women, violence and fun. But very soon he will discover that criminal life does not always keep its promises.',
    poster_path: '/ar8BpJ5xAzTIw9bqD9Sra6TjBvw.jpg',
    title: 'El Infierno',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 51.15,
      },
    ],
    release_date: '2010-09-03',
  },
  {
    adult: false,
    backdrop_path: '/tVUNBHChrtSBpbKTtOlxlFjTAdM.jpg',
    genre_ids: [10749, 18],
    id: 784393,
    original_language: 'en',
    original_title: 'High Flying Romance',
    overview: 'A woman finds romance during a kite festival.',
    poster_path: '/xIDO7A8C93WNAcr9moLHvvPqRJp.jpg',
    title: 'High Flying Romance',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 51.121,
      },
    ],
    release_date: '2021-05-17',
  },
  {
    adult: false,
    backdrop_path: '/ltt9yiCGmCQZunmxtkhtPxzmDzx.jpg',
    genre_ids: [12, 35, 10751],
    id: 499701,
    original_language: 'en',
    original_title: 'Dora and the Lost City of Gold',
    overview:
      'Dora, a girl who has spent most of her life exploring the jungle with her parents, now must navigate her most dangerous adventure yet: high school. Always the explorer, Dora quickly finds herself leading Boots (her best friend, a monkey), Diego, and a rag tag group of teens on an adventure to save her parents and solve the impossible mystery behind a lost Inca civilization.',
    poster_path: '/xvYCZ740XvngXK0FNeSNVTJJJ5v.jpg',
    title: 'Dora and the Lost City of Gold',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 51.121,
      },
    ],
    release_date: '2019-08-08',
  },
  {
    adult: false,
    backdrop_path: '/sXuVkmxG9qNL40rXrOuu9IS0TxW.jpg',
    genre_ids: [18],
    id: 575803,
    original_language: 'nl',
    original_title: 'Mijn bijzonder rare week met Tess',
    overview:
      'As the youngest of the family, Sam is haunted by the notion that someday he could become the last remaining survivor, all alone. On a family vacation at the beach, he meets the unconventional Tess, who carries her own secrets around with her and shows him how the present moment can win out over memories and anxiety about what’s yet to come.',
    poster_path: '/pjeM7XdPnTuA7DszfSEA0ANsSmn.jpg',
    title: 'My Extraordinary Summer With Tess',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 61.134,
      },
    ],
    release_date: '2019-07-03',
  },
  {
    adult: false,
    backdrop_path: '/2NsQRnSEVrQHeqiLXQx5QrQ9iXv.jpg',
    genre_ids: [18, 10749],
    id: 506281,
    original_language: 'en',
    original_title: 'The World to Come',
    overview:
      'In 1856, two women forge a close connection despite their isolation on the American frontier.',
    poster_path: '/j64CnpmbaKB90Cpprk5hM9kHyJI.jpg',
    title: 'The World to Come',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 60.888,
      },
    ],
    release_date: '2020-02-12',
  },
  {
    adult: false,
    backdrop_path: '/kEpK8oY9UfzOrKXPyfZ6NMea2EH.jpg',
    genre_ids: [35],
    id: 38365,
    original_language: 'en',
    original_title: 'Grown Ups',
    overview:
      'After their high school basketball coach passes away, five good friends and former teammates reunite for a Fourth of July holiday weekend.',
    poster_path: '/cQGM5k1NtU85n4TUlrOrwijSCcm.jpg',
    title: 'Grown Ups',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 60.416,
      },
    ],
    release_date: '2010-06-24',
  },
  {
    adult: false,
    backdrop_path: '/3C14xx4RteMksSUwgYfI52B8Iu6.jpg',
    genre_ids: [53],
    id: 508138,
    original_language: 'en',
    original_title: 'Burn',
    overview:
      'Lonely, unstable gas station attendant Melinda is tired of being overshadowed by her more confident, outgoing co-worker Sheila. When the gas station is held up at gunpoint by Billy, a desperate man in need of quick cash, Melinda finds an opportunity to make a connection with the robber, regardless of who gets hurt.',
    poster_path: '/ifSMo5x7SDXpettRt8TWY9EOquM.jpg',
    title: 'Burn',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 60.385,
      },
    ],
    release_date: '2019-08-23',
  },
  {
    adult: false,
    backdrop_path: '/2ex2beZ4ssMeOduLD0ILzXKCiep.jpg',
    genre_ids: [28, 12, 878, 14],
    id: 246655,
    original_language: 'en',
    original_title: 'X-Men: Apocalypse',
    overview:
      "After the re-emergence of the world's first mutant, world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan.",
    poster_path: '/2mtQwJKVKQrZgTz49Dizb25eOQQ.jpg',
    title: 'X-Men: Apocalypse',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 60.305,
      },
    ],
    release_date: '2016-05-18',
  },
  {
    adult: false,
    backdrop_path: '/ai2FicMUxLCurVkjtYdSvVDWRmS.jpg',
    genre_ids: [16, 10751, 878],
    id: 10681,
    original_language: 'en',
    original_title: 'WALL·E',
    overview:
      "WALL·E is the last robot left on an Earth that has been overrun with garbage and all humans have fled to outer space. For 700 years he has continued to try and clean up the mess, but has developed some rather interesting human-like qualities. When a ship arrives with a sleek new type of robot, WALL·E thinks he's finally found a friend and stows away on the ship when it leaves.",
    poster_path: '/Agc6lw8pb6BIGVeguvdjDT0p9Mb.jpg',
    title: 'WALL·E',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8,
      },
      {
        id: 'popularity',
        rating: 60.254,
      },
    ],
    release_date: '2008-06-22',
  },
  {
    adult: false,
    backdrop_path: '/50gUUeIQZXHI1vXtuyiFAYa499u.jpg',
    genre_ids: [28, 16],
    id: 76589,
    original_language: 'en',
    original_title: 'Justice League: Doom',
    overview:
      'An adaptation of Mark Waid\'s "Tower of Babel" story from the JLA comic. Vandal Savage steals confidential files Batman has compiled on the members of the Justice League, and learns all their weaknesses.',
    poster_path: '/seCbcjdZYUl8SRKjeWfyi2ngzFj.jpg',
    title: 'Justice League: Doom',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 60.21,
      },
    ],
    release_date: '2012-02-28',
  },
  {
    adult: false,
    backdrop_path: '/jIqCR6l4IFLRDRjbv3Ynf9F9e5c.jpg',
    genre_ids: [27, 53],
    id: 532638,
    original_language: 'en',
    original_title: 'Open 24 Hours',
    overview:
      'After setting her serial killer boyfriend on fire, a paranoid delusional woman gets a job at an all-night gas station. The isolation triggers her anxiety and hallucinations, with devastatingly gory results.',
    poster_path: '/1C97mky8yEy4q7dfcrDzFZoNx8r.jpg',
    title: 'Open 24 Hours',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.5,
      },
      {
        id: 'popularity',
        rating: 60.166,
      },
    ],
    release_date: '2018-08-27',
  },
  {
    adult: false,
    backdrop_path: '/tKyaXRcVAxYCqU9edDgjRmEKkMX.jpg',
    genre_ids: [28, 36, 18],
    id: 565179,
    original_language: 'la',
    original_title: 'Il primo re',
    overview:
      'Romulus and Remus, two shepherds and loyal brothers, end up taking part to a journey that will lead one of them to be the founder of the greatest nation ever seen. However, the fate of the chosen one will pass from killing his own brother.',
    poster_path: '/dqBU63M3cKy7pfVsmhrbgY5X8iv.jpg',
    title: 'The First King',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 59.953,
      },
    ],
    release_date: '2019-01-31',
  },
  {
    adult: false,
    backdrop_path: '/9nm3eQY0FiPL391vlQrr4Q5WC9w.jpg',
    genre_ids: [27, 9648, 53],
    id: 516632,
    original_language: 'en',
    original_title: 'The Empty Man',
    overview:
      'Retired cop James Lasombra is asked by a friend to investigate the disappearance of her daughter, who seemingly packed in the night and left an ominous message on the bathroom mirror - "The Empty Man Made Me Do It." As he investigates this mysterious figure further, James begins to see and hear strange things, and is forced to come to terms with his past and what it means for his future.',
    poster_path: '/8apzu9JFTUMtOpYkHk6LNPOs3pY.jpg',
    title: 'The Empty Man',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 59.903,
      },
    ],
    release_date: '2020-10-22',
  },
  {
    adult: false,
    backdrop_path: '/rxMnmklIpunsNsRkQ7hw61ZJa84.jpg',
    genre_ids: [80, 28, 53],
    id: 189,
    original_language: 'en',
    original_title: 'Sin City: A Dame to Kill For',
    overview:
      "Some of Sin City's most hard-boiled citizens cross paths with a few of its more reviled inhabitants.",
    poster_path: '/50kALxDX4mmzIRljbNbPY0u4cie.jpg',
    title: 'Sin City: A Dame to Kill For',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 59.833,
      },
    ],
    release_date: '2014-08-20',
  },
  {
    adult: false,
    backdrop_path: '/8a8DKdrcBBWg5mYPObiRWDmx17x.jpg',
    genre_ids: [14, 28, 80],
    id: 397852,
    original_language: 'fi',
    original_title: 'Rendel',
    overview:
      'A Finnish superhero, a masked vigilante Rendel seeks for revenge and fights against VALA, the huge criminal organization.',
    poster_path: '/orhhpigXfMUf0zkVFJkfGf2hxEF.jpg',
    title: 'Rendel',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.4,
      },
      {
        id: 'popularity',
        rating: 59.792,
      },
    ],
    release_date: '2017-09-22',
  },
  {
    adult: false,
    backdrop_path: '/1hzH1Wu2xhXBNOWzw3RMwNTJX5q.jpg',
    genre_ids: [28, 878],
    id: 240832,
    original_language: 'en',
    original_title: 'Lucy',
    overview:
      'A woman, accidentally caught in a dark deal, turns the tables on her captors and transforms into a merciless warrior evolved beyond human logic.',
    poster_path: '/kRbpUTRNm6QbLQFPFWUcNC4czEm.jpg',
    title: 'Lucy',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 59.777,
      },
    ],
    release_date: '2014-07-25',
  },
  {
    adult: false,
    backdrop_path: '/iWdOL0JQN53mQA5wQajKjqSBDij.jpg',
    genre_ids: [28, 27, 9648],
    id: 722780,
    original_language: 'en',
    original_title: 'For the Sake of Vicious',
    overview:
      'An overworked nurse returns home to find a maniac hiding out with a bruised and beaten hostage. When an unexpected wave of violent intruders descend upon her home, it becomes a fight for survival.',
    poster_path: '/iqO2sTFqm6XwEXmlLxKDX75RPjY.jpg',
    title: 'For the Sake of Vicious',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 59.746,
      },
    ],
    release_date: '2021-04-16',
  },
  {
    adult: false,
    backdrop_path: '/4f0Kj0QwPui5ydu1UavsnvP1m1o.jpg',
    genre_ids: [28, 878, 18],
    id: 39254,
    original_language: 'en',
    original_title: 'Real Steel',
    overview:
      'Charlie Kenton is a washed-up fighter who retired from the ring when robots took over the sport. After his robot is trashed, he reluctantly teams up with his estranged son to rebuild and train an unlikely contender.',
    poster_path: '/4GIeI5K5YdDUkR3mNQBoScpSFEf.jpg',
    title: 'Real Steel',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 59.736,
      },
    ],
    release_date: '2011-09-28',
  },
  {
    adult: false,
    backdrop_path: '/xMHeU84wLQ9uH9acJ0oPgdii9wO.jpg',
    genre_ids: [18, 53],
    id: 504562,
    original_language: 'en',
    original_title: 'Motherless Brooklyn',
    overview:
      'New York City, 1957. Lionel Essrog, a private detective living with Tourette syndrome, tries to solve the murder of his mentor and best friend, armed only with vague clues and the strength of his obsessive mind.',
    poster_path: '/jjMJy5OxJHpFIaboCklDIYdcfpD.jpg',
    title: 'Motherless Brooklyn',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 59.715,
      },
    ],
    release_date: '2019-10-31',
  },
  {
    adult: false,
    backdrop_path: '/hfdds27YL5nTAhiOtjfNNxD3bJe.jpg',
    genre_ids: [16, 10751, 35, 12],
    id: 80321,
    original_language: 'en',
    original_title: "Madagascar 3: Europe's Most Wanted",
    overview:
      "Animal pals Alex, Marty, Melman, and Gloria are still trying to make it back to New York's Central Park Zoo. They are forced to take a detour to Europe to find the penguins and chimps who broke the bank at a Monte Carlo casino. When French animal-control officer Capitaine Chantel DuBois picks up their scent, Alex and company are forced to hide out in a traveling circus.",
    poster_path: '/ekraj4ksvIKeuvQVEevEJkuybZd.jpg',
    title: "Madagascar 3: Europe's Most Wanted",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 59.674,
      },
    ],
    release_date: '2012-06-06',
  },
  {
    adult: false,
    backdrop_path: '/wB8skcJHPTxU3gcgabgDuXF7vTY.jpg',
    genre_ids: [28],
    id: 585213,
    original_language: 'en',
    original_title: 'Viking Blood',
    overview:
      'When a viking mercenary finds himself in the middle of a battle between the old gods and the new, he decides that neither side deserves to win. And so begins an epic battle between good and evil that will decide the fate of a nation.',
    poster_path: '/dkUxVISgn7eSX19JWoe5d35HW7u.jpg',
    title: 'Viking Blood',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 59.667,
      },
    ],
    release_date: '2019-02-01',
  },
  {
    adult: false,
    backdrop_path: '/9s30XbfHZB9gcoQpm1P3i1hcGgH.jpg',
    genre_ids: [16, 35, 12, 14, 10751],
    id: 523536,
    original_language: 'da',
    original_title: 'Ternet Ninja',
    overview:
      'A possessed Ninja doll teams up with a teenage boy to avenge the murder of a poor child factory worker.',
    poster_path: '/dzN5xbp73TI7pjEqZ66ECNxdWJl.jpg',
    title: 'Checkered Ninja',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 59.631,
      },
    ],
    release_date: '2018-12-25',
  },
  {
    adult: false,
    backdrop_path: '/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg',
    genre_ids: [878, 28, 12],
    id: 181808,
    original_language: 'en',
    original_title: 'Star Wars: The Last Jedi',
    overview:
      'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
    poster_path: '/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
    title: 'Star Wars: The Last Jedi',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 59.554,
      },
    ],
    release_date: '2017-12-13',
  },
  {
    adult: false,
    backdrop_path: '/bwYhIvGPh81gLRTx3gWnU0Ho6nc.jpg',
    genre_ids: [35],
    id: 8363,
    original_language: 'en',
    original_title: 'Superbad',
    overview:
      'Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.',
    poster_path: '/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg',
    title: 'Superbad',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 50.463,
      },
    ],
    release_date: '2007-03-20',
  },
  {
    adult: false,
    backdrop_path: '/vHse4QK31Vc3X7BKKU5GOQhYxv6.jpg',
    genre_ids: [27],
    id: 533642,
    original_language: 'en',
    original_title: "Child's Play",
    overview:
      'Karen, a single mother, gifts her son Andy a Buddi doll for his birthday, unaware of its more sinister nature. A contemporary re-imagining of the 1988 horror classic.',
    poster_path: '/rpS7ROczWulqfaXG2klYapULXKm.jpg',
    title: "Child's Play",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 50.459,
      },
    ],
    release_date: '2019-06-19',
  },
  {
    adult: false,
    backdrop_path: '/cvtUPueAyalnWIDmSrGfNuIc2y7.jpg',
    genre_ids: [28, 12, 16, 878, 10751],
    id: 14011,
    original_language: 'en',
    original_title: 'Justice League: The New Frontier',
    overview:
      'The human race is threatened by a powerful creature, and only the combined power of Superman, Batman, Wonder Woman, Green Lantern, Martian Manhunter and The Flash can stop it. But can they overcome their differences to thwart this enemy using the combined strength of their newly formed Justice League?',
    poster_path: '/sG0jasV67KIq2KRmF0BjfyFHE8z.jpg',
    title: 'Justice League: The New Frontier',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 50.43,
      },
    ],
    release_date: '2008-02-26',
  },
  {
    adult: false,
    backdrop_path: '/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
    genre_ids: [53, 80],
    id: 680,
    original_language: 'en',
    original_title: 'Pulp Fiction',
    overview:
      "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    poster_path: '/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    title: 'Pulp Fiction',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.5,
      },
      {
        id: 'popularity',
        rating: 50.428,
      },
    ],
    release_date: '1994-09-10',
  },
  {
    adult: false,
    backdrop_path: '/xHWB9SdYRFV3nw1O0iL6GTedQQY.jpg',
    genre_ids: [18, 878, 53],
    id: 6479,
    original_language: 'en',
    original_title: 'I Am Legend',
    overview:
      'Robert Neville is a scientist who was unable to stop the spread of the terrible virus that was incurable and man-made. Immune, Neville is now the last human survivor in what is left of New York City and perhaps the world. For three years, Neville has faithfully sent out daily radio messages, desperate to find any other survivors who might be out there. But he is not alone.',
    poster_path: '/iPDkaSdKk2jRLTM65UOEoKtsIZ8.jpg',
    title: 'I Am Legend',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 50.383,
      },
    ],
    release_date: '2007-12-12',
  },
  {
    adult: false,
    backdrop_path: '/yLUbwjAZnBCizuAGGeZV6Jlba9q.jpg',
    genre_ids: [12, 16, 10751, 14],
    id: 587065,
    original_language: 'en',
    original_title: 'Bayala and the Last Dragon',
    overview:
      'As the dragons have almost disappeared from the kingdom of Bayala, the magic powers of the fairies are weakening. The fairy princesses Sera and Surah are thrilled when they discover they have the key to save the world in their hands: a dragon egg! Now the sisters must reach the dragon mountains and they embark on an adventurous journey into the unknown...',
    poster_path: '/ouKUXkQSLyC4ADXbC8ft7vxiIJF.jpg',
    title: 'Bayala: A Magical Adventure',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 50.368,
      },
    ],
    release_date: '2019-10-24',
  },
  {
    adult: false,
    backdrop_path: '/lqxxwTRk0l7CubY6JkJdhnwJEkn.jpg',
    genre_ids: [18, 10749],
    id: 331482,
    original_language: 'en',
    original_title: 'Little Women',
    overview:
      'Four sisters come of age in America in the aftermath of the Civil War.',
    poster_path: '/yn5ihODtZ7ofn8pDYfxCmxh8AXI.jpg',
    title: 'Little Women',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 50.355,
      },
    ],
    release_date: '2019-12-25',
  },
  {
    adult: false,
    backdrop_path: '/AjtQdUX41skfo8tthtrnJZI9bXV.jpg',
    genre_ids: [10402, 18],
    id: 470878,
    original_language: 'en',
    original_title: 'I Can Only Imagine',
    overview:
      'Growing up in Texas, Bart Millard suffers physical and emotional abuse at the hands of his father. His childhood and relationship with his dad inspires him to write the hit song "I Can Only Imagine" as singer of the Christian band MercyMe.',
    poster_path: '/veZszwMZu8d3WMU6TJX9sV5w1Y4.jpg',
    title: 'I Can Only Imagine',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 50.352,
      },
    ],
    release_date: '2018-02-14',
  },
  {
    adult: false,
    backdrop_path: '/ob4XnKBqAh1rg381hayebJx6EkE.jpg',
    genre_ids: [10751, 16, 35, 12, 14],
    id: 458253,
    original_language: 'en',
    original_title: 'Missing Link',
    overview:
      "The charismatic Sir Lionel Frost considers himself to be the world's foremost investigator of myths and monsters. Trouble is, none of his small-minded, high-society peers seems to recognize this. Hoping to finally gain acceptance from these fellow adventurers, Sir Lionel travels to the Pacific Northwest to prove the existence of a legendary creature known as the missing link.",
    poster_path: '/gEkKHiiQRVUSX15Iwo8VFydXrtu.jpg',
    title: 'Missing Link',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 50.326,
      },
    ],
    release_date: '2019-04-04',
  },
  {
    adult: false,
    backdrop_path: '/clmYuR1t4TtKcakIOvYIPrjyxDc.jpg',
    genre_ids: [28, 53],
    id: 399035,
    original_language: 'en',
    original_title: 'The Commuter',
    overview:
      'A businessman, on his daily commute home, gets unwittingly caught up in a criminal conspiracy that threatens not only his life but the lives of those around him.',
    poster_path: '/rDeGK6FIUfVcXmuBdEORPAGPMNg.jpg',
    title: 'The Commuter',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 50.314,
      },
    ],
    release_date: '2018-01-11',
  },
  {
    adult: false,
    backdrop_path: '/AeDS2MKGFy6QcjgWbJBde0Ga6Hd.jpg',
    genre_ids: [878, 18],
    id: 419704,
    original_language: 'en',
    original_title: 'Ad Astra',
    overview:
      'The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.',
    poster_path: '/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
    title: 'Ad Astra',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 50.312,
      },
    ],
    release_date: '2019-09-17',
  },
  {
    adult: false,
    backdrop_path: '/fzAnRGmaKJtm8sZuZ8a1nwSNTd3.jpg',
    genre_ids: [10751, 12, 16, 10749],
    id: 13761,
    original_language: 'en',
    original_title: 'Pocahontas II: Journey to a New World',
    overview:
      "When news of John Smith's death reaches America, Pocahontas is devastated. She sets off to London with John Rolfe, to meet with the King of England on a diplomatic mission: to create peace and respect between the two great lands. However, Governor Ratcliffe is still around; he wants to return to Jamestown and take over. He will stop at nothing to discredit the young princess.",
    poster_path: '/gAnmNjw1TCTzS702mj1OwwmXBpM.jpg',
    title: 'Pocahontas II: Journey to a New World',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.4,
      },
      {
        id: 'popularity',
        rating: 50.307,
      },
    ],
    release_date: '1998-08-04',
  },
  {
    adult: false,
    backdrop_path: '/2uAyKQf5nej3TiWUqbanr6Zb9YU.jpg',
    genre_ids: [878],
    id: 520788,
    original_language: 'en',
    original_title: 'Mad World',
    overview:
      "It is the year 2037. Our world is dying, slowly, from a virus that has rendered mankind infertile. Not a single child has been born in 25 years. Governments are now powerless puppets for the biggest corporations and Biocorp, the world's biggest, keeps promising a cure that never comes",
    poster_path: '/8luuxpom0e0u8q3x4MtvKR0tozA.jpg',
    title: 'Mad World',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.5,
      },
      {
        id: 'popularity',
        rating: 50.306,
      },
    ],
    release_date: '2018-01-02',
  },
  {
    adult: false,
    backdrop_path: '/sd4xN5xi8tKRPrJOWwNiZEile7f.jpg',
    genre_ids: [16, 12, 35, 10751],
    id: 920,
    original_language: 'en',
    original_title: 'Cars',
    overview:
      "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
    poster_path: '/qa6HCwP4Z15l3hpsASz3auugEW6.jpg',
    title: 'Cars',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 50.266,
      },
    ],
    release_date: '2006-06-08',
  },
  {
    adult: false,
    backdrop_path: '/va43BmYS0miJ18ttl2kBowftCjb.jpg',
    genre_ids: [10402],
    id: 831979,
    original_language: 'es',
    original_title: 'Juan Luis Guerra 4.40: Entre Mar y Palmeras',
    overview:
      'The renowned Dominican composer, musician, producer, and singer Juan Luis Guerra offers a historic concert from the beautiful and lush beaches of Miches, located in the eastern region of the Dominican Republic.',
    poster_path: '/gNxZRjdT9scyeSmTuzGL6vUPSU5.jpg',
    title: 'Juan Luis Guerra 4.40: Entre Mar y Palmeras',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.3,
      },
      {
        id: 'popularity',
        rating: 50.244,
      },
    ],
    release_date: '2021-06-03',
  },
  {
    adult: false,
    backdrop_path: '/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg',
    genre_ids: [12, 28, 878],
    id: 11,
    original_language: 'en',
    original_title: 'Star Wars',
    overview:
      'Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.',
    poster_path: '/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
    title: 'Star Wars',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.2,
      },
      {
        id: 'popularity',
        rating: 50.242,
      },
    ],
    release_date: '1977-05-25',
  },
  {
    adult: false,
    backdrop_path: '/2Zv86BI4QqztR19fwFErXyr59h.jpg',
    genre_ids: [16, 35, 10751, 28],
    id: 12242,
    original_language: 'en',
    original_title: 'Mulan II',
    overview:
      "Fa Mulan gets the surprise of her young life when her love, Captain Li Shang asks for her hand in marriage. Before the two can have their happily ever after, the Emperor assigns them a secret mission, to escort three princesses to Chang'an, China. Mushu is determined to drive a wedge between the couple after he learns that he will lose his guardian job if Mulan marries into the Li family.",
    poster_path: '/8cUIHYXpDFYX6r5ZviQuRKCVLJ2.jpg',
    title: 'Mulan II',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 50.063,
      },
    ],
    release_date: '2004-11-03',
  },
  {
    adult: false,
    backdrop_path: '/qPzj0k7YJ5609iof30etTXliXoA.jpg',
    genre_ids: [14, 35, 10751],
    id: 8839,
    original_language: 'en',
    original_title: 'Casper',
    overview:
      'Casper is a kind young ghost who peacefully haunts a mansion in Maine. When specialist James Harvey arrives to communicate with Casper and his fellow spirits, he brings along his teenage daughter, Kat. Casper quickly falls in love with Kat, but their budding relationship is complicated not only by his transparent state, but also by his troublemaking apparition uncles and their mischievous antics.',
    poster_path: '/2ah8fNJFZVU3vcXhU5xfAYi2eym.jpg',
    title: 'Casper',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 50.047,
      },
    ],
    release_date: '1995-05-26',
  },
  {
    adult: false,
    backdrop_path: '/ld7V9BjMk2xtiBNcR8savyyk5ca.jpg',
    genre_ids: [18, 14, 12, 10751],
    id: 283366,
    original_language: 'en',
    original_title: "Miss Peregrine's Home for Peculiar Children",
    overview:
      'A teenager finds himself transported to an island where he must help protect a group of orphans with special powers from creatures intent on destroying them.',
    poster_path: '/6lSkpu2SDj71KTBy2DllM6CaFYA.jpg',
    title: "Miss Peregrine's Home for Peculiar Children",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 50.031,
      },
    ],
    release_date: '2016-09-27',
  },
  {
    adult: false,
    backdrop_path: '/q5uZqd324Tug2xWxL72j18ZzK2Z.jpg',
    genre_ids: [35, 16, 12],
    id: 315064,
    original_language: 'en',
    original_title: 'Animal Crackers',
    overview:
      'A family must use a magical box of Animal Crackers to save a rundown circus from being taken over by their evil uncle Horatio P. Huntington.',
    poster_path: '/dxFqZiO5MqqVoFZuWOjTdjmDh6d.jpg',
    title: 'Animal Crackers',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 50.025,
      },
    ],
    release_date: '2020-07-24',
  },
  {
    adult: false,
    backdrop_path: '/l1P5JbizBI1XxzeNCrwOCQUHAI5.jpg',
    genre_ids: [18],
    id: 575813,
    original_language: 'zh',
    original_title: '少年的你',
    overview:
      'A bullied teenage girl forms an unlikely friendship with a mysterious young man who protects her from her assailants, while she copes with the pressures of her final examinations.',
    poster_path: '/csVZ2ZQCj98XdZoCuW1aixMYJ0W.jpg',
    title: 'Better Days',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.2,
      },
      {
        id: 'popularity',
        rating: 51.097,
      },
    ],
    release_date: '2019-10-25',
  },
  {
    adult: false,
    backdrop_path: '/lxhlZID5mspgUL6cirofkretS7k.jpg',
    genre_ids: [12, 10751, 878],
    id: 14199,
    original_language: 'en',
    original_title: 'The Adventures of Sharkboy and Lavagirl',
    overview:
      'Everyone always knew that Max had a wild imagination, but no one believed that his wildest creations -- a boy raised by watchful great white sharks and a girl with the force of a volcano -- were real. Now, these two pint-sized action masters will show Max that even an ordinary kid has what it takes to be extraordinary.',
    poster_path: '/wyXPANZMYYbKh8Ic8qFLqMkolyV.jpg',
    title: 'The Adventures of Sharkboy and Lavagirl',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.1,
      },
      {
        id: 'popularity',
        rating: 51.058,
      },
    ],
    release_date: '2005-06-10',
  },
  {
    adult: false,
    backdrop_path: '/rsGmofDRBai2ML91mjQHGGkidQY.jpg',
    genre_ids: [10751, 16, 35],
    id: 20352,
    original_language: 'en',
    original_title: 'Despicable Me',
    overview:
      'Villainous Gru lives up to his reputation as a despicable, deplorable and downright unlikable guy when he hatches a plan to steal the moon from the sky. But he has a tough time staying on task after three orphans land in his care.',
    poster_path: '/7OHiP1MLaPaEE0P2DOFKbsBI9EH.jpg',
    title: 'Despicable Me',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 51.029,
      },
    ],
    release_date: '2010-07-08',
  },
  {
    adult: false,
    backdrop_path: '/lNuqKdJmvXwpKM8OsOMQ3UYW135.jpg',
    genre_ids: [28, 80],
    id: 588073,
    original_language: 'cn',
    original_title: 'P風暴',
    overview:
      'Liu Yue Ping reports to the ICAC about a rich 2G Cao Yuen Yuen who bribed officers of the Hong Kong Correctional Services (HKCS) from inside the prison. William Luk decides to infiltrate the prison as an inmate to conduct his investigation, while his partner Ching Tak Ming and Chief Inspector Lau Po-keung back him up from the outside.',
    poster_path: '/wz7Zvc1zoDGc5cZfzXl469kBe6T.jpg',
    title: 'P Storm',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 51.022,
      },
    ],
    release_date: '2019-04-04',
  },
  {
    adult: false,
    backdrop_path: '/1zgugDjeC24ip242hEETR9CaUar.jpg',
    genre_ids: [35, 27],
    id: 576004,
    original_language: 'en',
    original_title: 'Porno',
    overview:
      'When a group of naive teens working at a movie theater in a small Christian town discover a mysterious film hidden in its basement, they unleash an alluring succubus who gives them a sex education…written in blood.',
    poster_path: '/1X6BxBlHqA8VdFrLwmeSiNSEpEB.jpg',
    title: 'Porno',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.7,
      },
      {
        id: 'popularity',
        rating: 50.996,
      },
    ],
    release_date: '2019-06-28',
  },
  {
    adult: false,
    backdrop_path: '/fuSYapxTCfkH2wKDmUjRso8UEdz.jpg',
    genre_ids: [10751, 16],
    id: 44874,
    original_language: 'en',
    original_title: 'Barbie: A Fashion Fairytale',
    overview:
      "Join Barbie in a colourful, modern-day fairytale filled with fashion, friends and fun! Barbie and her dog Sequin jet off to visit her Aunt's amazing fashion house in Paris, and much to her surprise it's about to be shut down forever. After she discovers three enchanting Flairies with sparkle-magic powers, Barbie comes up with a brilliant idea to save the business. She even inspires Alice, a shy fashion designer, and together they create a dazzling runway fashion show. Barbie shows that magic happens when you believe in yourself.",
    poster_path: '/bFnf8f8DXdCANQ7Y62djgubhh4P.jpg',
    title: 'Barbie: A Fashion Fairytale',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 50.949,
      },
    ],
    release_date: '2010-09-14',
  },
  {
    adult: false,
    backdrop_path: '/8BLPHjQnPhvKtKJFfAVo8bPfWFZ.jpg',
    genre_ids: [10751, 16, 14],
    id: 73456,
    original_language: 'en',
    original_title: 'Barbie: Princess Charm School',
    overview:
      'Barbie stars as Blair Willows, a kind-hearted girl who is chosen to attend Princess Charm School: a magical, modern place that teaches dancing, how to have tea parties, and proper princess manners. Blair loves her classes -- as well as the helpful magical sprites and her new friends, Princesses Hadley and Isla. But when royal teacher Dame Devin discovers that Blair looks a lot like the kingdom’s missing princess, she turns Blair’s world upside down to stop her from claiming the throne. Now Blair, Hadley and Delancy must find an enchanted crown to prove Blair’s true identity in this charming and magical princess story!',
    poster_path: '/lI2jPbssax6XX5vDqB9mTJHGzfH.jpg',
    title: 'Barbie: Princess Charm School',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 50.899,
      },
    ],
    release_date: '2011-08-11',
  },
  {
    adult: false,
    backdrop_path: '/per8xKUsoXn15nPNFwkqUdTk7SY.jpg',
    genre_ids: [27],
    id: 6466,
    original_language: 'en',
    original_title: 'Freddy vs. Jason',
    overview:
      'In an attempt to free himself from a state of forgotten limbo, evil dream-demon Freddy Krueger devises a plan to manipulate un-dead mass murderer Jason Voorhees  into slicing-and-dicing his way through the teenage population of Springwood.  But when the master of dreams loses control of his monster, a brutal fight to the death is the only way out.',
    poster_path: '/fhnWQDd05qEqtvZFwCwzmnVZYQy.jpg',
    title: 'Freddy vs. Jason',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 50.899,
      },
    ],
    release_date: '2003-08-15',
  },
  {
    adult: false,
    backdrop_path: '/3sTjAagABWM68nitUlrNNjI5gYW.jpg',
    genre_ids: [10751, 14, 35],
    id: 252,
    original_language: 'en',
    original_title: 'Willy Wonka & the Chocolate Factory',
    overview:
      'When eccentric candy man Willy Wonka promises a lifetime supply of sweets and a tour of his chocolate factory to five lucky kids, penniless Charlie Bucket seeks the golden ticket that will make him a winner.',
    poster_path: '/avEUV2YWABEVqvpSjif0NKmTykS.jpg',
    title: 'Willy Wonka & the Chocolate Factory',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 50.858,
      },
    ],
    release_date: '1971-06-29',
  },
  {
    adult: false,
    backdrop_path: '/vNEC0xWeIOStnPeTPIBDGUGMzKT.jpg',
    genre_ids: [878, 28, 12, 53],
    id: 106,
    original_language: 'en',
    original_title: 'Predator',
    overview:
      'A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.',
    poster_path: '/qBvKSCBnGhqCHhRUMXcJE4qz7vc.jpg',
    title: 'Predator',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 50.856,
      },
    ],
    release_date: '1987-06-12',
  },
  {
    adult: false,
    backdrop_path: '/Bj6qGqB5jAvrsrTJHuObUtpRYm.jpg',
    genre_ids: [27],
    id: 19185,
    original_language: 'en',
    original_title: 'Night of the Living Dead',
    overview:
      'In this remake of the original classic film, a group of people are trapped inside a farmhouse as legions of the walking dead try to get inside and use them for food.',
    poster_path: '/isp4lCv08asTPNvv8Xe8oQK293n.jpg',
    title: 'Night of the Living Dead',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 50.84,
      },
    ],
    release_date: '1990-10-19',
  },
  {
    adult: false,
    backdrop_path: '/qLYtITl4Yrl9G9yYcFA2D6b61gh.jpg',
    genre_ids: [53, 36, 18, 28],
    id: 416144,
    original_language: 'en',
    original_title: 'Hotel Mumbai',
    overview:
      'Mumbai, India, November 26, 2008. While several terrorists spread hatred and death through the city, others attack the Taj Mahal Palace Hotel. Both hotel staff and guests risk their lives, making unthinkable sacrifices to protect themselves and keep everyone safe while help arrives.',
    poster_path: '/v32SC4HFZtlDRWXMaR2V2dWqAXJ.jpg',
    title: 'Hotel Mumbai',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 50.768,
      },
    ],
    release_date: '2019-03-14',
  },
  {
    adult: false,
    backdrop_path: '/gKDuRB6Uj3gzF8Dd85DOtkxi7KC.jpg',
    genre_ids: [12, 35, 14],
    id: 497984,
    original_language: 'en',
    original_title: '捉妖记2',
    overview:
      'The sequel to Monster Hunt. Set in a world where monsters and humans co-exist, the franchise tells the story of Wuba, a baby monster born to be king. Wuba becomes the central figure in stopping an all-out monster civil war.',
    poster_path: '/9wOkj2VXLvqUPQ77MUzgzuz6Cv5.jpg',
    title: 'Monster Hunt 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 50.766,
      },
    ],
    release_date: '2018-02-16',
  },
  {
    adult: false,
    backdrop_path: '/o9SXE8dWTqfaHLzbdygdH6M3uOR.jpg',
    genre_ids: [16, 12, 10751],
    id: 381719,
    original_language: 'en',
    original_title: 'Peter Rabbit',
    overview:
      "Peter Rabbit's feud with Mr. McGregor escalates to greater heights than ever before as they rival for the affections of the warm-hearted animal lover who lives next door.",
    poster_path: '/lugOvdaNpbVGQK9TyMRDiUbLtY6.jpg',
    title: 'Peter Rabbit',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 50.747,
      },
    ],
    release_date: '2018-02-07',
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [99],
    id: 111332,
    original_language: 'en',
    original_title: 'Avatar: Creating the World of Pandora',
    overview:
      "The Making-of James Cameron's Avatar. It shows interesting parts of the work on the set.",
    poster_path: '/d9oqcfeCyc3zmMal6eJbfj3gatc.jpg',
    title: 'Avatar: Creating the World of Pandora',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 50.695,
      },
    ],
    release_date: '2010-02-07',
  },
  {
    adult: false,
    backdrop_path: '/bazlsLkNuhy3IuhviepqvlMm2hV.jpg',
    genre_ids: [16, 28, 878],
    id: 618354,
    original_language: 'en',
    original_title: 'Superman: Man of Tomorrow',
    overview:
      'It’s the dawn of a new age of heroes, and Metropolis has just met its first. But as Daily Planet intern Clark Kent – working alongside reporter Lois Lane – secretly wields his alien powers of flight, super-strength and x-ray vision in the battle for good, there’s even greater trouble on the horizon.',
    poster_path: '/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg',
    title: 'Superman: Man of Tomorrow',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 50.69,
      },
    ],
    release_date: '2020-08-23',
  },
  {
    adult: false,
    backdrop_path: '/zSJT1sKGRKcmP4I9b8dIOuepw6I.jpg',
    genre_ids: [12, 28, 53],
    id: 375588,
    original_language: 'en',
    original_title: 'Robin Hood',
    overview:
      'A war-hardened Crusader and his Moorish commander mount an audacious revolt against the corrupt English crown.',
    poster_path: '/AiRfixFcfTkNbn2A73qVJPlpkUo.jpg',
    title: 'Robin Hood',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 50.638,
      },
    ],
    release_date: '2018-11-21',
  },
  {
    adult: false,
    backdrop_path: '/bnuBhHLzsRapDWheh9kwNn6qZnp.jpg',
    genre_ids: [27, 878, 28, 14],
    id: 340382,
    original_language: 'ja',
    original_title: '進撃の巨人 ATTACK ON TITAN エンド オブ ザ ワールド',
    overview:
      'Eren leaves to restore a break in the wall destroyed by a Titan. He comes under attack by the Titans and is cornered. Shikishima comes to his aid. The titans never stops attacking.  Eren is now injured and tries to protect Armin, but is swallowed by a titan. A Titan with black hair appears and begins to expel the other titans.',
    poster_path: '/dwsoUEJvDpN00rJJ1bR6DrJ5JjF.jpg',
    title: 'Attack on Titan II: End of the World',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.7,
      },
      {
        id: 'popularity',
        rating: 50.636,
      },
    ],
    release_date: '2015-09-01',
  },
  {
    adult: false,
    backdrop_path: '/jZ2o6ltHNEDCWwe4CQotow8l5YP.jpg',
    genre_ids: [16, 10751, 35],
    id: 15165,
    original_language: 'en',
    original_title: 'Barbie as The Princess & the Pauper',
    overview:
      'In her first animated musical featuring seven original songs, Barbie comes to life in this modern re-telling of a classic tale of mistaken identity and the power of friendship. Based on the story by Mark Twain,',
    poster_path: '/xHYsUwUe4MaNc6mbNBGTkqZSnPk.jpg',
    title: 'Barbie as The Princess & the Pauper',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 50.616,
      },
    ],
    release_date: '2004-09-28',
  },
  {
    adult: false,
    backdrop_path: '/eg2jxQ1FFi6ENDfyMIMC5odpcU0.jpg',
    genre_ids: [10751, 12, 35, 16],
    id: 172385,
    original_language: 'en',
    original_title: 'Rio 2',
    overview:
      "It's a jungle out there for Blu, Jewel and their three kids after they're hurtled from Rio de Janeiro to the wilds of the Amazon. As Blu tries to fit in, he goes beak-to-beak with the vengeful Nigel, and meets the most fearsome adversary of all: his father-in-law.",
    poster_path: '/tpCqpv8y0cDb7mgIPeTv70W9vmF.jpg',
    title: 'Rio 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 50.475,
      },
    ],
    release_date: '2014-03-19',
  },
  {
    adult: false,
    backdrop_path: '/eShw0LB5CkoEfYtpUcXPD85oz5Q.jpg',
    genre_ids: [27, 53, 35, 14],
    id: 551804,
    original_language: 'en',
    original_title: 'Freaky',
    overview:
      'A mystical, ancient dagger causes a notorious serial killer to magically switch bodies with a 17-year-old girl.',
    poster_path: '/8xC6QSyxrpm0D5A6iyHNemEWBVe.jpg',
    title: 'Freaky',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 54.55,
      },
    ],
    release_date: '2020-11-12',
  },
  {
    adult: false,
    backdrop_path: '/7piVB6weeJdWB6xL0wzJJeHNo6O.jpg',
    genre_ids: [12, 18, 10751],
    id: 671295,
    original_language: 'en',
    original_title: 'Blue Miracle',
    overview:
      'To save their cash-strapped orphanage, a guardian and his kids partner with a washed-up boat captain for a chance to win a lucrative fishing competition.',
    poster_path: '/xBdP9Z0oVAx25tM2gUOtq298jxR.jpg',
    title: 'Blue Miracle',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 54.525,
      },
    ],
    release_date: '2021-05-27',
  },
  {
    adult: false,
    backdrop_path: '/3jKynKnUtRERxBFAcvZ8AvkTo4c.jpg',
    genre_ids: [878, 28, 18],
    id: 535167,
    original_language: 'zh',
    original_title: '流浪地球',
    overview:
      'When the Sun begins to expand in such a way that it will inevitably engulf and destroy the Earth in a hundred years, united mankind finds a way to avoid extinction by propelling the planet out of the Solar System using gigantic engines, moving it to a new home located four light years away, an epic journey that will last thousands of years.',
    poster_path: '/woo56L6LYYoM89DYBCU2C6LO1at.jpg',
    title: 'The Wandering Earth',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 54.523,
      },
    ],
    release_date: '2019-02-05',
  },
  {
    adult: false,
    backdrop_path: '/2VnghbG2qWChcE6CdZBMDtDQKCF.jpg',
    genre_ids: [18, 10751, 10402, 10749],
    id: 699102,
    original_language: 'en',
    original_title: 'A Week Away',
    overview:
      'Troubled teen Will Hawkins has a run-in with the law that puts him at an important crossroad: go to juvenile detention or attend a Christian summer camp. At first a fish-out-of-water, Will opens his heart, discovers love with a camp regular, and sense of belonging in the last place he expected to find it.',
    poster_path: '/htTS07IvYv3rv57ftzNEprefwSq.jpg',
    title: 'A Week Away',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 54.369,
      },
    ],
    release_date: '2021-03-26',
  },
  {
    adult: false,
    backdrop_path: '/8VFea9nnOcHEYzBtfTDDKdPe7xj.jpg',
    genre_ids: [18, 10751, 14, 12],
    id: 34584,
    original_language: 'en',
    original_title: 'Die unendliche Geschichte',
    overview:
      "While hiding from bullies in his school's attic, a young boy discovers the extraordinary land of Fantasia, through a magical book called The Neverending Story. The book tells the tale of Atreyu, a young warrior who, with the help of a luck dragon named Falkor, must save Fantasia from the destruction of The Nothing.",
    poster_path: '/ddYCa91iDXfJCxaqSYzwi2fjfnl.jpg',
    title: 'The NeverEnding Story',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 54.327,
      },
    ],
    release_date: '1984-04-05',
  },
  {
    adult: false,
    backdrop_path: '/6aVB2B2GDc4EuNinHgoBgtkuHQz.jpg',
    genre_ids: [18, 27, 53],
    id: 575774,
    original_language: 'en',
    original_title: 'His House',
    overview:
      'After making a harrowing escape from war-torn South Sudan, a young refugee couple struggle to adjust to their new life in a small English town that has an unspeakable evil lurking beneath the surface.',
    poster_path: '/s6XxJEe4ovVTMgmGmKeO87OFANU.jpg',
    title: 'His House',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 54.306,
      },
    ],
    release_date: '2020-01-27',
  },
  {
    adult: false,
    backdrop_path: '/gGBE24xD5NdMqvkJJEzP04jtFG9.jpg',
    genre_ids: [18],
    id: 454286,
    original_language: 'en',
    original_title: "God's Not Dead: A Light in Darkness",
    overview:
      'Pastor Dave  responds to the unimaginable tragedy of having his church, located on the grounds of the local university, burned down.',
    poster_path: '/1MwoZ4U8SGm7yIzfPFcTTbiiOYY.jpg',
    title: "God's Not Dead: A Light in Darkness",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 54.282,
      },
    ],
    release_date: '2018-03-30',
  },
  {
    adult: false,
    backdrop_path: '/AdqOBPw4PdtzOcfEuQuZ8MNeTKb.jpg',
    genre_ids: [14, 12, 18],
    id: 413518,
    original_language: 'it',
    original_title: 'Pinocchio',
    overview:
      'In this live-action adaptation of the beloved fairytale, old woodcarver Geppetto fashions a wooden puppet, Pinocchio, who magically comes to life. Pinocchio longs for adventure and is easily led astray, encountering magical beasts, fantastical spectacles, while making friends and foes along his journey. However, his dream is to become a real boy, which can only come true if he finally changes his ways.',
    poster_path: '/lzqJcPaZA9G8C6eS4Hch475Ng3A.jpg',
    title: 'Pinocchio',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 54.257,
      },
    ],
    release_date: '2019-12-19',
  },
  {
    adult: false,
    backdrop_path: '/gJgaleXnuJX6trB0U0x1hYbPJY1.jpg',
    genre_ids: [12, 35],
    id: 577242,
    original_language: 'fr',
    original_title: 'Kaamelott : Premier volet',
    overview:
      "Following the end of the acclaimed tv series, King Arthur will oppose Lancelot's army to get the throne back after his flee to Rome.",
    poster_path: '/negQj3ch5bfvSdqoWz9eZMHyQ4b.jpg',
    title: 'Kaamelott - The First Chapter',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 54.136,
      },
    ],
    release_date: '2021-07-21',
  },
  {
    adult: false,
    backdrop_path: '/h5BvesqaxL7V3vl1CmaR8waGyiM.jpg',
    genre_ids: [12, 35, 14, 10751, 27],
    id: 442062,
    original_language: 'en',
    original_title: 'Goosebumps 2: Haunted Halloween',
    overview:
      'Two boys face an onslaught from witches, monsters, ghouls and a talking dummy after they discover a mysterious book by author R. L. Stine.',
    poster_path: '/t2wy38iiMpB8WsgJi3lYeDnGh2H.jpg',
    title: 'Goosebumps 2: Haunted Halloween',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 54.123,
      },
    ],
    release_date: '2018-10-11',
  },
  {
    adult: false,
    backdrop_path: '/4PS3QS70Jt1WHhgYXGeogTUjl1G.jpg',
    genre_ids: [80, 28, 18],
    id: 497370,
    original_language: 'ko',
    original_title: '마약왕',
    overview:
      'Busan, South Korea, 1970s. Lee Doo-sam is a small-time smuggler. After helping a drug gang to smuggle meth, he falls into the dark crime world. Quick-witted and full of ambition, he eventually takes over the drug underworld and starts to lead a double life: a good community leader during the day but an infamous drug lord during the night.',
    poster_path: '/d3n0mUGIqISBjke1hrGVkF7P6CZ.jpg',
    title: 'The Drug King',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 54.044,
      },
    ],
    release_date: '2018-12-19',
  },
  {
    adult: false,
    backdrop_path: '/97n7h7r41t9ReX8a46k9Ap2zr3O.jpg',
    genre_ids: [16, 14, 9648],
    id: 362585,
    original_language: 'ja',
    original_title: '傷物語〈Ⅲ冷血篇〉',
    overview:
      'With help from Meme Oshino, the apparition specialist, Koyomi defeats the three powerful vampire hunters: Dramaturgy, Episode and Guillotinecutter. Koyomi takes back all the limbs of Kiss-shot Acerola-orion Heart-under-blade in order to become a human again.',
    poster_path: '/rfKHhHvSwyCv59Ow6wuGX67RkXR.jpg',
    title: 'Kizumonogatari Part 3: Reiketsu',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8,
      },
      {
        id: 'popularity',
        rating: 54.039,
      },
    ],
    release_date: '2017-01-06',
  },
  {
    adult: false,
    backdrop_path: '/jPu8yiadqgzwFPGKJmGo637ASVP.jpg',
    genre_ids: [878, 28, 12],
    id: 1724,
    original_language: 'en',
    original_title: 'The Incredible Hulk',
    overview:
      'Scientist Bruce Banner scours the planet for an antidote to the unbridled force of rage within him: the Hulk. But when the military masterminds who dream of exploiting his powers force him back to civilization, he finds himself coming face to face with a new, deadly foe.',
    poster_path: '/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg',
    title: 'The Incredible Hulk',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 54.006,
      },
    ],
    release_date: '2008-06-12',
  },
  {
    adult: false,
    backdrop_path: '/sQkRiQo3nLrQYMXZodDjNUJKHZV.jpg',
    genre_ids: [16, 28, 12, 14, 878],
    id: 618344,
    original_language: 'en',
    original_title: 'Justice League Dark: Apokolips War',
    overview:
      'Earth is decimated after intergalactic tyrant Darkseid has devastated the Justice League in a poorly executed war by the DC Super Heroes. Now the remaining bastions of good – the Justice League, Teen Titans, Suicide Squad and assorted others – must regroup, strategize and take the war to Darkseid in order to save the planet and its surviving inhabitants.',
    poster_path: '/c01Y4suApJ1Wic2xLmaq1QYcfoZ.jpg',
    title: 'Justice League Dark: Apokolips War',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.4,
      },
      {
        id: 'popularity',
        rating: 53.941,
      },
    ],
    release_date: '2020-05-05',
  },
  {
    adult: false,
    backdrop_path: '/wnUsZKxtS8gSl7xIEif97zIwi3b.jpg',
    genre_ids: [10751, 878, 35, 28],
    id: 675353,
    original_language: 'en',
    original_title: 'Sonic the Hedgehog 2',
    overview:
      'After settling in Green Hills, Sonic is ready for more freedom, and Tom and Maddie agree to leave him home while they go on vacation. But, no sooner are they gone, when Dr. Robotnik comes back, this time with a new partner, Knuckles, in search for an emerald that has the power to both build and destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a journey to find the emerald before it falls into the wrong hands.',
    poster_path: '/tvOU2SSdIdf3aJ1y27EGJfRGA0U.jpg',
    title: 'Sonic the Hedgehog 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 53.94,
      },
    ],
    release_date: '2022-04-06',
  },
  {
    adult: false,
    backdrop_path: '/wsjcWHezujlzhBpED3KXq3JkxmB.jpg',
    genre_ids: [878, 12, 28, 35],
    id: 531306,
    original_language: 'en',
    original_title: 'Rim of the World',
    overview:
      'Stranded at a summer camp when aliens attack the planet, four teens with nothing in common embark on a perilous mission to save the world.',
    poster_path: '/yhzTeZU5OULn3ePGF58Rc5oIocZ.jpg',
    title: 'Rim of the World',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 53.905,
      },
    ],
    release_date: '2019-05-24',
  },
  {
    adult: false,
    backdrop_path: '/x2lPPe2aH76uyYVhkVCtzTMYawC.jpg',
    genre_ids: [16, 10751, 14],
    id: 656561,
    original_language: 'en',
    original_title: 'Alien Xmas',
    overview:
      "A young elf mistakes a tiny alien for a Christmas gift, not knowing her new plaything has plans to destroy Earth's gravity — and steal all the presents.",
    poster_path: '/3UGrAX6D1AMVra80jmUMUOLq8Qr.jpg',
    title: 'Alien Xmas',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 53.86,
      },
    ],
    release_date: '2020-11-20',
  },
  {
    adult: false,
    backdrop_path: '/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg',
    genre_ids: [28, 878],
    id: 603,
    original_language: 'en',
    original_title: 'The Matrix',
    overview:
      'Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.',
    poster_path: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    title: 'The Matrix',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.2,
      },
      {
        id: 'popularity',
        rating: 53.782,
      },
    ],
    release_date: '1999-03-30',
  },
  {
    adult: false,
    backdrop_path: '/eHO1vDVAU1kxyp8oXvG1ty52REM.jpg',
    genre_ids: [10751, 14],
    id: 10588,
    original_language: 'en',
    original_title: 'The Cat in the Hat',
    overview:
      "Conrad and Sally Walden are home alone with their pet fish. It is raining outside, and there is nothing to do. Until The Cat in the Hat walks in the front door. He introduces them to their imagination, and at first it's all fun and games, until things get out of hand, and The Cat must go, go, go, before their parents get back.",
    poster_path: '/vyaJdKBxnLXZOmcB3Tqd5FiB9wA.jpg',
    title: 'The Cat in the Hat',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.3,
      },
      {
        id: 'popularity',
        rating: 53.781,
      },
    ],
    release_date: '2003-11-21',
  },
  {
    adult: false,
    backdrop_path: '/u4huTFYxr1hgrtmRq1Jj7wDicgi.jpg',
    genre_ids: [878, 53],
    id: 548066,
    original_language: 'en',
    original_title: 'Level 16',
    overview:
      'The teenage girls of Vestalis Academy are meticulously trained in the art of being “clean girls,” practicing the virtues of perfect femininity. But what exactly are they being trained for? Vivien intends to find out.',
    poster_path: '/kILAL9kJdW3f6wk9Ai0tavgi6mp.jpg',
    title: 'Level 16',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 53.773,
      },
    ],
    release_date: '2018-02-20',
  },
  {
    adult: false,
    backdrop_path: '/sVWUcBHwq2LQtDeqwXzI1uMpA3h.jpg',
    genre_ids: [18],
    id: 471707,
    original_language: 'pl',
    original_title: 'Boże Ciało',
    overview:
      'A pious 20-year-old juvenile delinquent is sent to work at a sawmill in a small town; on arrival, he dresses up as a priest and accidentally takes over the local parish. The arrival of this young, charismatic preacher is an opportunity for the local community to begin the healing process after a tragedy that happened a year prior.',
    poster_path: '/6VZlm8sEwxkE3L5nXxz17QLj1sF.jpg',
    title: 'Corpus Christi',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 72.921,
      },
    ],
    release_date: '2019-09-10',
  },
  {
    adult: false,
    backdrop_path: '/mjsifKZI5gFXFp3v8RQTMAZdefP.jpg',
    genre_ids: [878],
    id: 599399,
    original_language: 'en',
    original_title: 'After We Leave',
    overview:
      'A sci-fi drama about a man struggling to find his wife, who he abandoned six years ago, before their visa to emmigrate to an off-world colony expires.',
    poster_path: '/mE2WdHdIwPdnOpfrswpvm6ZyKJu.jpg',
    title: 'After We Leave',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.3,
      },
      {
        id: 'popularity',
        rating: 72.92,
      },
    ],
    release_date: '2019-05-20',
  },
  {
    adult: false,
    backdrop_path: '/dMcaQp4XfPK11bDeUyj2JOqEY8I.jpg',
    genre_ids: [16, 28, 10752, 14],
    id: 553839,
    original_language: 'ja',
    original_title: '劇場版 幼女戦記',
    overview:
      "With its armies sweeping across the continent, the Empire seems unstoppable. After securing victory over the remnants of the Republic's army, the Empire's ultimate victory is finally within reach. However, dark clouds are gathering in the East. The communist-led Russy Federation is mustering troops on its western border, preparing to enter the war. Supported by a detachment of Allied volunteer magicians—among whom is Mary Sioux, the daughter of a soldier killed by Tanya—the Federation is determined to spread the communist creed and bring the Empire to its knees.\r Meanwhile, Tanya and her battalion return to the imperial capital from the southern front. Upon their arrival, they are tasked with investigating troop movements on the border with the Federation. Any escalation of violence at this point may lead to new conflicts, plunging the world into a global war.\r Will the Empire eventually emerge victorious from its struggle, or will it crumble in the face radically different ideologies?",
    poster_path: '/omEd5EwOo3LJlGtiiYwEZeCqM3E.jpg',
    title: 'Saga of Tanya the Evil: The Movie',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.1,
      },
      {
        id: 'popularity',
        rating: 72.863,
      },
    ],
    release_date: '2019-02-08',
  },
  {
    adult: false,
    backdrop_path: '/yQidDr2joxjNQGl1ZBN1zrKJgrk.jpg',
    genre_ids: [12, 16, 35, 10751],
    id: 412117,
    original_language: 'en',
    original_title: 'The Secret Life of Pets 2',
    overview:
      'Max the terrier must cope with some major life changes when his owner gets married and has a baby. When the family takes a trip to the countryside, nervous Max has numerous run-ins with canine-intolerant cows, hostile foxes and a scary turkey. Luckily for Max, he soon catches a break when he meets Rooster, a gruff farm dog who tries to cure the lovable pooch of his neuroses.',
    poster_path: '/q3mKnSkzp1doIsCye6ap4KIUAbu.jpg',
    title: 'The Secret Life of Pets 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 72.858,
      },
    ],
    release_date: '2019-05-24',
  },
  {
    adult: false,
    backdrop_path: '/jIND6Q2Jc6Kfp4fLzgzf5an1C3s.jpg',
    genre_ids: [35, 80],
    id: 812592,
    original_language: 'pt',
    original_title: 'Os Salafrários',
    overview:
      'After a botched scam, Clóvis bumps into Lohane, his estranged foster sister. In a bind, they soon realize the only way out is to band together.',
    poster_path: '/gd9PcIgzV3YWa0c7iCECG1TuXX5.jpg',
    title: 'Get the Grift',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 72.728,
      },
    ],
    release_date: '2021-04-28',
  },
  {
    adult: false,
    backdrop_path: '/1NQkxP7oe5iJHNb4ApqhlDFJ9dI.jpg',
    genre_ids: [16, 10751],
    id: 10895,
    original_language: 'en',
    original_title: 'Pinocchio',
    overview:
      "Lonely toymaker Geppetto has his wishes answered when the Blue Fairy arrives to bring his wooden puppet Pinocchio to life. Before becoming a real boy, however, Pinocchio must prove he's worthy as he sets off on an adventure with his whistling sidekick and conscience, Jiminy Cricket.",
    poster_path: '/eGtNJvZXGl1iglpyzH5RPgWhQ85.jpg',
    title: 'Pinocchio',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 72.647,
      },
    ],
    release_date: '1940-02-23',
  },
  {
    adult: false,
    backdrop_path: '/r00r7FPrBRdDU1mRAAJ0Ds30yM6.jpg',
    genre_ids: [28, 80, 18],
    id: 587808,
    original_language: 'en',
    original_title: 'Backdraft 2',
    overview:
      'Years after the original Backdraft, Sean, son of the late Steve "Bull" McCaffrey, is assigned to investigate a deadly fire only to realize it is something much more sinister.',
    poster_path: '/d5QfKjWG5UcEbbo7btAmXnJpaOn.jpg',
    title: 'Backdraft 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 72.641,
      },
    ],
    release_date: '2019-05-14',
  },
  {
    adult: false,
    backdrop_path: '/1fOwb62XudDlevVyu1rqUlHUrES.jpg',
    genre_ids: [27, 878, 53],
    id: 716258,
    original_language: 'en',
    original_title: 'Black Box',
    overview:
      'After losing his wife and his memory in a car accident, a single father undergoes an experimental treatment that causes him to question who he really is.',
    poster_path: '/9Z1zkb4Z9hUlEuC0oMagVJaPUeS.jpg',
    title: 'Black Box',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 72.523,
      },
    ],
    release_date: '2020-10-06',
  },
  {
    adult: false,
    backdrop_path: '/5FUwk37dQDRKs6Xxcw5Vcr5FtZZ.jpg',
    genre_ids: [18],
    id: 527776,
    original_language: 'en',
    original_title: 'Overcomer',
    overview:
      'After reluctantly agreeing to coach cross-country, high school basketball Coach John Harrison helps the least likely runner attempt the impossible in the biggest race of the year.',
    poster_path: '/rVR3uN1yPRqYBBtNFSrEKCpRhaK.jpg',
    title: 'Overcomer',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 72.485,
      },
    ],
    release_date: '2019-08-22',
  },
  {
    adult: false,
    backdrop_path: '/uOjk9Yq8tD7eqTmsaJPLpWPDFOQ.jpg',
    genre_ids: [],
    id: 516052,
    original_language: 'ja',
    original_title: '銀河英雄伝説 Die Neue These 星乱 第一章',
    overview:
      "In humanity's distant future, two interstellar states-the monarchic Galactic Empire and the democratic Free Planets Alliance-are embroiled in a never-ending war. The story focuses on the exploits of rivals Reinhard von Müsel and Yang Wen Li as they rise to power and fame in the Galactic Empire and the Free Planets Alliance.",
    poster_path: '/zymHlQqgvqWdav52sbxJHo4MpYx.jpg',
    title: 'The Legend of the Galactic Heroes: Die Neue These Seiran 1',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.4,
      },
      {
        id: 'popularity',
        rating: 72.405,
      },
    ],
    release_date: '2019-09-27',
  },
  {
    adult: false,
    backdrop_path: '/3sbmRuIpYEH5dMvec4z4JxKQHoj.jpg',
    genre_ids: [10751, 16, 12],
    id: 9325,
    original_language: 'en',
    original_title: 'The Jungle Book',
    overview:
      'The boy Mowgli makes his way to the man-village with Bagheera, the wise panther. Along the way he meets jazzy King Louie, the hypnotic snake Kaa and the lovable, happy-go-lucky bear Baloo, who teaches Mowgli "The Bare Necessities" of life and the true meaning of friendship.',
    poster_path: '/fyKUxjaOP8KINir6MPFprsGtiT0.jpg',
    title: 'The Jungle Book',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 72.318,
      },
    ],
    release_date: '1967-10-18',
  },
  {
    adult: false,
    backdrop_path: '/2it7SlRcp5UE0G38nL6oLMuqcAx.jpg',
    genre_ids: [27],
    id: 681429,
    original_language: 'es',
    original_title: 'Cuidado con lo que deseas',
    overview:
      'Pamela is an eight-year-old girl who loves horror movies and fairy tales. When his uncle gives her away a doll named "Hellequin" as a birthday gift, a tale of betrayal begins to unfold before her eyes.',
    poster_path: '/lG6Wx5tWOEHkOuexEvNYha3ofvM.jpg',
    title: 'Be Careful What You Wish For',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 72.161,
      },
    ],
    release_date: '2020-04-24',
  },
  {
    adult: false,
    backdrop_path: '/rp6aXM2EWkaUdq6zbSlhUOY2869.jpg',
    genre_ids: [80, 10749, 53],
    id: 438689,
    original_language: 'en',
    original_title: 'Siberia',
    overview:
      'Lucas, a diamond trader who travels to Saint Petersburg to arrange a sale, discovers that his Russian business partner has left his hotel and gone to a small Siberian village, so Lucas also heads there to try find him.',
    poster_path: '/eGfIsvdrUhTlQOkxQIELU7obDYj.jpg',
    title: 'Siberia',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.8,
      },
      {
        id: 'popularity',
        rating: 72.044,
      },
    ],
    release_date: '2018-07-13',
  },
  {
    adult: false,
    backdrop_path: '/paxjgQ7I2oALdi85F5qw8PBiO2q.jpg',
    genre_ids: [28, 27],
    id: 648043,
    original_language: 'en',
    original_title: 'The Driver',
    overview:
      'In a zombie apocalypse, one man desperately tries to keep his family alive.',
    poster_path: '/qT5YjDsz5Ud7OHXyDvqtrMZXsdE.jpg',
    title: 'The Driver',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 71.907,
      },
    ],
    release_date: '2019-11-25',
  },
  {
    adult: false,
    backdrop_path: '/xOukYlFEuiY9FZXd5kjWiigjBJA.jpg',
    genre_ids: [99, 10402],
    id: 736604,
    original_language: 'en',
    original_title: 'The Boy from Medellín',
    overview:
      'Colombian reggaeton singer J Balvin prepares for his 2019 homecoming concert amid intense political turmoil.',
    poster_path: '/ffJX00pcQDGvzhz6RSngeYuSb6U.jpg',
    title: 'The Boy from Medellín',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 71.887,
      },
    ],
    release_date: '2020-09-11',
  },
  {
    adult: false,
    backdrop_path: '/eVFfdrBbDX1B3y1yIxoRjrGM24i.jpg',
    genre_ids: [35, 10749],
    id: 656563,
    original_language: 'pt',
    original_title: 'Ricos de Amor',
    overview:
      "Working incognito at his rich dad's company to test his own merits, Teto falls for Paula and tells her he grew up poor, a lie that spins out of control.",
    poster_path: '/wdgPgnPv6n7VaHXza54sWfWlQMU.jpg',
    title: 'Rich in Love',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 71.861,
      },
    ],
    release_date: '2020-04-30',
  },
  {
    adult: false,
    backdrop_path: '/vKuwZeAwJZ9NoZJ9pWTcBRbnUYe.jpg',
    genre_ids: [27],
    id: 615982,
    original_language: 'tr',
    original_title: 'Siccîn 6',
    overview:
      'Turkish villagers (mostly) being under the spell of BLACK MAGIC which is put up on them by a hater in the close or far families that makes them being suffered and trified by the Djins (very Bad Kind of Wicked Devil Among Muslims Coming from Their Holly Book Quran) They have to now look for clues and exorcists to help them run away from it or defeat it.',
    poster_path: '/ufgenUJfKPQSLFu2meMycctRR7M.jpg',
    title: 'Sijjin 6',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.2,
      },
      {
        id: 'popularity',
        rating: 71.823,
      },
    ],
    release_date: '2019-08-09',
  },
  {
    adult: false,
    backdrop_path: '/fq5r99Uwr0TEG1yc903LgPNNA9k.jpg',
    genre_ids: [28, 12, 35, 18, 14, 16],
    id: 36728,
    original_language: 'ja',
    original_title: '劇場版 NARUTO -ナルト- 疾風伝 火の意志を継ぐ者',
    overview:
      "Ninjas with bloodline limits begin disappearing in all the countries and blame points toward the fire nation. By Tsunade's order, Kakashi is sacrificed to prevent an all out war. After inheriting charms left by Kakashi, Naruto fights through friends and foes to prevent his death while changing the minds of those who've inherited the will of fire.",
    poster_path: '/csSsO9oXTIpOVxA3xXYbEzd6IKy.jpg',
    title: 'Naruto Shippuden the Movie: The Will of Fire',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 71.819,
      },
    ],
    release_date: '2009-08-01',
  },
  {
    adult: false,
    backdrop_path: '/mX3WOJPBzzl4kj4xU5lL7qfD6C3.jpg',
    genre_ids: [28, 12, 14],
    id: 209112,
    original_language: 'en',
    original_title: 'Batman v Superman: Dawn of Justice',
    overview:
      'Fearing the actions of a god-like Super Hero left unchecked, Gotham City’s own formidable, forceful vigilante takes on Metropolis’s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it’s ever known before.',
    poster_path: '/5UsK3grJvtQrtzEgqNlDljJW96w.jpg',
    title: 'Batman v Superman: Dawn of Justice',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 71.804,
      },
    ],
    release_date: '2016-03-23',
  },
  {
    adult: false,
    backdrop_path: '/uFwnUQ3ZwE5EbBEDBzs1bRPlOx8.jpg',
    genre_ids: [28, 18],
    id: 200085,
    original_language: 'ko',
    original_title: '감기',
    overview:
      'A case of the flu quickly morphs into a pandemic. As the death toll mounts and the living panic, the government plans extreme measures to contain it.',
    poster_path: '/mvTXhTddHIZbOU9pmrcPODI1kRx.jpg',
    title: 'The Flu',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 71.782,
      },
    ],
    release_date: '2013-08-14',
  },
  {
    adult: false,
    backdrop_path: '/ikIQVTPOBUIEpOZAA3IU6LI94E2.jpg',
    genre_ids: [878, 27],
    id: 282070,
    original_language: 'ja',
    original_title: '寄生獣 完結編',
    overview:
      "Alien pods come to Earth and, naturally, start taking over Human Hosts. One such pod only manages to take over one human's, Shin Izumi, right arm. Together they grow and co-exist, all the while the other aliens are making meals of other humans; Shin feels he must put a stop to it all, but his alien, Migi, doesn't see why.",
    poster_path: '/qO8zQ9dSADWiwRnR7oCOsPDuOom.jpg',
    title: 'Parasyte: Part 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 55.399,
      },
    ],
    release_date: '2015-04-25',
  },
  {
    adult: false,
    backdrop_path: '/nlG452icactoT6hbqECbSEVfGII.jpg',
    genre_ids: [16, 12, 35, 10751, 14],
    id: 228326,
    original_language: 'en',
    original_title: 'The Book of Life',
    overview:
      'The journey of Manolo, a young man who is torn between fulfilling the expectations of his family and following his heart. Before choosing which path to follow, he embarks on an incredible adventure that spans three fantastical worlds where he must face his greatest fears.',
    poster_path: '/puTDvsUADxCA5NjJuwgEWqQ3xGA.jpg',
    title: 'The Book of Life',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 55.371,
      },
    ],
    release_date: '2014-10-01',
  },
  {
    adult: false,
    backdrop_path: '/qEIbecsWGdcdVtk06pqsWt32y56.jpg',
    genre_ids: [878, 28, 12],
    id: 540247,
    original_language: 'en',
    original_title: 'Jurassic Galaxy',
    overview:
      "In the near future, a ship of space explorers crash land on an unknown planet. They're soon met with some of their worst fears as they discover the planet is inhabited by monstrous dinosaurs.",
    poster_path: '/l2F4yWfLs21lrUyEh4bNOzjTEsb.jpg',
    title: 'Jurassic Galaxy',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.2,
      },
      {
        id: 'popularity',
        rating: 55.338,
      },
    ],
    release_date: '2018-08-20',
  },
  {
    adult: false,
    backdrop_path: '/kHgWFKSa0NUItppt6uW2JT1ezuQ.jpg',
    genre_ids: [28, 12, 16, 35, 10751],
    id: 140300,
    original_language: 'en',
    original_title: 'Kung Fu Panda 3',
    overview:
      'Continuing his "legendary adventures of awesomeness", Po must face two hugely epic, but different threats: one supernatural and the other a little closer to his home.',
    poster_path: '/nlr2oxuYsHXt0wdtmzaOuVBoNC0.jpg',
    title: 'Kung Fu Panda 3',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 55.228,
      },
    ],
    release_date: '2016-01-23',
  },
  {
    adult: false,
    backdrop_path: '/8xcm94SLAxvNmJYuGh42ziydu70.jpg',
    genre_ids: [10751, 12, 16, 35],
    id: 10527,
    original_language: 'en',
    original_title: 'Madagascar: Escape 2 Africa',
    overview:
      'Alex, Marty, and other zoo animals find a way to escape from Madagascar when the penguins reassemble a wrecked airplane. The precariously repaired craft stays airborne just long enough to make it to the African continent. There the New Yorkers encounter members of their own species for the first time. Africa proves to be a wild place, but Alex and company wonder if it is better than their Central Park home.',
    poster_path: '/agRbLOHgN46TQO4YdKR462iR7To.jpg',
    title: 'Madagascar: Escape 2 Africa',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 55.059,
      },
    ],
    release_date: '2008-10-30',
  },
  {
    adult: false,
    backdrop_path: '/bpV8wn48s82au37QyUJ51S7X2Vf.jpg',
    genre_ids: [18],
    id: 489,
    original_language: 'en',
    original_title: 'Good Will Hunting',
    overview:
      'Will Hunting has a genius-level IQ but chooses to work as a janitor at MIT. When he solves a difficult graduate-level math problem, his talents are discovered by Professor Gerald Lambeau, who decides to help the misguided youth reach his potential. When Will is arrested for attacking a police officer, Professor Lambeau makes a deal to get leniency for him if he will get treatment from therapist Sean Maguire.',
    poster_path: '/bABCBKYBK7A5G1x0FzoeoNfuj2.jpg',
    title: 'Good Will Hunting',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.1,
      },
      {
        id: 'popularity',
        rating: 55.055,
      },
    ],
    release_date: '1997-12-05',
  },
  {
    adult: false,
    backdrop_path: '/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg',
    genre_ids: [27],
    id: 346364,
    original_language: 'en',
    original_title: 'It',
    overview:
      'In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.',
    poster_path: '/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg',
    title: 'It',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 55.014,
      },
    ],
    release_date: '2017-09-06',
  },
  {
    adult: false,
    backdrop_path: '/z0d353vPcrRIzcDePKOndyz9sWs.jpg',
    genre_ids: [28, 12, 16, 878, 18],
    id: 65291,
    original_language: 'en',
    original_title: 'Green Lantern: Emerald Knights',
    overview:
      "As the home planet of the Green Lantern Corps faces a battle with an ancient enemy, Hal Jordan prepares new recruit Arisia for the coming conflict by relating stories of the first Green Lantern and several of Hal's comrades.",
    poster_path: '/zk3mqtoNzyiiXiotufJ3pwShoGc.jpg',
    title: 'Green Lantern: Emerald Knights',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 54.999,
      },
    ],
    release_date: '2011-04-09',
  },
  {
    adult: false,
    backdrop_path: '/5Nz25DPXfQaSpDgce42Y3kFg9G4.jpg',
    genre_ids: [14, 18, 80],
    id: 497,
    original_language: 'en',
    original_title: 'The Green Mile',
    overview:
      "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
    poster_path: '/velWPhVMQeQKcxggNEU8YmIo52R.jpg',
    title: 'The Green Mile',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.5,
      },
      {
        id: 'popularity',
        rating: 54.94,
      },
    ],
    release_date: '1999-12-10',
  },
  {
    adult: false,
    backdrop_path: '/w1lCa89i9fLmoujCxH3jUP0gvSj.jpg',
    genre_ids: [28, 12, 80],
    id: 531380,
    original_language: 'cn',
    original_title: '黃金兄弟',
    overview:
      'A group of former mercenaries reunite to plan an epic heist: boosting a truck full of medicine held by a foreign intelligence agency to supply a refugee camp in need. But when they find the truck is actually filled with stolen gold, the band of brothers realize they’ve been double-crossed by one of their own - and putting the situation right will be all out war.',
    poster_path: '/qMwpsjpAHvD9ZtfW88xvwlak5Pv.jpg',
    title: 'Golden Job',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 54.888,
      },
    ],
    release_date: '2018-09-20',
  },
  {
    adult: false,
    backdrop_path: '/4ykVKcO90nMvMYSu1AD4LGWaNDt.jpg',
    genre_ids: [35],
    id: 660982,
    original_language: 'en',
    original_title: "American Pie Presents: Girls' Rules",
    overview:
      "It's Senior year at East Great Falls. Annie, Kayla, Michelle, and Stephanie decide to harness their girl power and band together to get what they want their last year of high school.",
    poster_path: '/xqvX5A24dbIWaeYsMTxxKX5qOfz.jpg',
    title: "American Pie Presents: Girls' Rules",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 54.838,
      },
    ],
    release_date: '2020-10-06',
  },
  {
    adult: false,
    backdrop_path: '/kc0ufvlfl7H9G6BRhnBf8EbTpF5.jpg',
    genre_ids: [28, 16, 14],
    id: 323027,
    original_language: 'en',
    original_title: 'Justice League: Gods and Monsters',
    overview:
      "In an alternate universe, very different versions of DC's Trinity fight against the government after they are framed for an embassy bombing.",
    poster_path: '/9EoqQuEZKmQIYjexoUbkxMcMCVr.jpg',
    title: 'Justice League: Gods and Monsters',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 54.779,
      },
    ],
    release_date: '2015-07-14',
  },
  {
    adult: false,
    backdrop_path: '/xmLLkEhqIw0Me0wgO9ZhtP0MW7U.jpg',
    genre_ids: [53, 18],
    id: 561362,
    original_language: 'en',
    original_title: 'Rust Creek',
    overview:
      'When an overachieving college senior makes a wrong turn, her road trip becomes a life-changing fight for survival in rural Kentucky.',
    poster_path: '/lrsPIRkKZWTKbd3C0sSj7a3lMES.jpg',
    title: 'Rust Creek',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 54.688,
      },
    ],
    release_date: '2019-01-04',
  },
  {
    adult: false,
    backdrop_path: '/3tTG8eHmOY9Ic6F5tLYRmDXCLOc.jpg',
    genre_ids: [18, 53, 27],
    id: 263472,
    original_language: 'en',
    original_title: 'Knock Knock',
    overview:
      'When a devoted husband and father is left home alone for the weekend, two stranded young women unexpectedly knock on his door for help. What starts out as a kind gesture results in a dangerous seduction and a deadly game of cat and mouse.',
    poster_path: '/cUC4rUb1Cs2KMaZ6RD4uYUEEwls.jpg',
    title: 'Knock Knock',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.2,
      },
      {
        id: 'popularity',
        rating: 54.683,
      },
    ],
    release_date: '2015-06-26',
  },
  {
    adult: false,
    backdrop_path: '/uyusXmEyS7QI1BMxAlvbXSLxJxI.jpg',
    genre_ids: [28, 53],
    id: 8681,
    original_language: 'en',
    original_title: 'Taken',
    overview:
      'While vacationing with a friend in Paris, an American girl is kidnapped by a gang of human traffickers intent on selling her into forced prostitution. Working against the clock, her ex-spy father must pull out all the stops to save her. But with his best years possibly behind him, the job may be more than he can handle.',
    poster_path: '/wrJjDB8SSJJKcpXVf4KAxZIHvBZ.jpg',
    title: 'Taken',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 54.669,
      },
    ],
    release_date: '2008-02-18',
  },
  {
    adult: false,
    backdrop_path: '/mHycxckdvxVpWxNrVnEVdrE5FqN.jpg',
    genre_ids: [35, 18, 10751, 14, 878],
    id: 13688,
    original_language: 'cn',
    original_title: '長江七號',
    overview:
      'Ti, a really poor construction worker that struggles to keep his son, Dicky, in private school, mistakes an orb he finds in a junkjard for a toy which proves to be much, much more once the young boy starts to play with it.',
    poster_path: '/sRzSfpSb3wYYshbaiMRIuFCJJGU.jpg',
    title: 'CJ7',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 54.667,
      },
    ],
    release_date: '2008-01-30',
  },
  {
    adult: false,
    backdrop_path: '/z62CBlBBBOoNUuuxZ1jMAcq5ARE.jpg',
    genre_ids: [10749, 10751, 16],
    id: 10198,
    original_language: 'en',
    original_title: 'The Princess and the Frog',
    overview:
      'A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being, but she has to face the same problem after she kisses him.',
    poster_path: '/yprv5PbnEksoVj2v6XEnDBg9joR.jpg',
    title: 'The Princess and the Frog',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 54.667,
      },
    ],
    release_date: '2009-12-08',
  },
  {
    adult: false,
    backdrop_path: '/6SP1bFfoXhW7Ni7fPw5GjY7ACBS.jpg',
    genre_ids: [18],
    id: 600354,
    original_language: 'en',
    original_title: 'The Father',
    overview:
      'A man refuses all assistance from his daughter as he ages and, as he tries to make sense of his changing circumstances, he begins to doubt his loved ones, his own mind and even the fabric of his reality.',
    poster_path: '/pr3bEQ517uMb5loLvjFQi8uLAsp.jpg',
    title: 'The Father',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.3,
      },
      {
        id: 'popularity',
        rating: 54.655,
      },
    ],
    release_date: '2020-12-23',
  },
  {
    adult: false,
    backdrop_path: '/59M1aPwmaVvzZ5KR6dagkC3pUb7.jpg',
    genre_ids: [28, 12, 16],
    id: 176983,
    original_language: 'ja',
    original_title: 'ワンピース フィルム ゼット',
    overview:
      "Zephyr, now known as Z, rides the seas with only one goal: Destroy all pirates and their dreams at becoming King of Pirates. When Luffy and his crew encounter him at sea, not only are they utterly defeated by the man with an arm made of Seastone, Nami, Robin, and Chopper are turned 10 years younger due to Z's minion Ain. Luffy is so determined to win against him that he does not even notice Z's master plan that could sacrifice thousands of lives.",
    poster_path: '/gLyelbsRYljP2iWiD5iubA02kBA.jpg',
    title: 'One Piece Film: Z',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 54.612,
      },
    ],
    release_date: '2012-12-15',
  },
  {
    adult: false,
    backdrop_path: '/vnRSXsNHMlBoP0MVw8MTAxHlSsU.jpg',
    genre_ids: [27, 28],
    id: 512936,
    original_language: 'en',
    original_title: '4/20 Massacre',
    overview:
      "A group of five women go camping in the woods to celebrate a friend's birthday over 4/20 weekend. But when they cross the turf of an illegal marijuana grow operation they must struggle to survive the living nightmare.",
    poster_path: '/iCxcpHW6suXvpB6oHejSMk7bK3m.jpg',
    title: '4/20 Massacre',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 54.557,
      },
    ],
    release_date: '2018-04-03',
  },
  {
    adult: false,
    backdrop_path: '/6C7ZGYeR8QpT3X6C2RFEu6yiSKK.jpg',
    genre_ids: [10751, 14, 10402],
    id: 622855,
    original_language: 'en',
    original_title: 'Jingle Jangle: A Christmas Journey',
    overview:
      'An imaginary world comes to life in a holiday tale of an eccentric toymaker, his adventurous granddaughter, and a magical invention that has the power to change their lives forever.',
    poster_path: '/5RbyHIVydD3Krmec1LlUV7rRjet.jpg',
    title: 'Jingle Jangle: A Christmas Journey',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 70.253,
      },
    ],
    release_date: '2020-11-06',
  },
  {
    adult: false,
    backdrop_path: '/hwwFyowfcbLRVmRBOkvnABBNIOs.jpg',
    genre_ids: [12, 16, 35, 10751],
    id: 9487,
    original_language: 'en',
    original_title: "A Bug's Life",
    overview:
      'On behalf of "oppressed bugs everywhere," an inventive ant named Flik hires a troupe of warrior bugs to defend his bustling colony from a horde of freeloading grasshoppers led by the evil-minded Hopper.',
    poster_path: '/Ah3J9OJVc2CNCuH2zMydXy9fmIC.jpg',
    title: "A Bug's Life",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 70.248,
      },
    ],
    release_date: '1998-11-25',
  },
  {
    adult: false,
    backdrop_path: '/vQ9YlITvVFdbFXYX6qwTNgIP85u.jpg',
    genre_ids: [],
    id: 843241,
    original_language: 'ja',
    original_title: '劇場版 七つの大罪 光に呪われし者たち',
    overview:
      'With the help of the "Dragon Sin of Wrath" Meliodas and the worst rebels in history, the Seven Deadly Sins, the "Holy War", in which four races, including Humans, Goddesses, Fairies and Giants fought against the Demons, is finally over. At the cost of the "Lion Sin of Pride" Escanor\'s life, the Demon King was defeated and the world regained peace. After that, each of the Sins take their own path.',
    poster_path: '/gtiNyP9BoQmPzjeDhvofUtUxpJV.jpg',
    title: 'The Seven Deadly Sins the Movie: Cursed by Light',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5,
      },
      {
        id: 'popularity',
        rating: 69.983,
      },
    ],
    release_date: '2021-07-02',
  },
  {
    adult: false,
    backdrop_path: '/uEJuqp08dH6IQwZJGASlPZOXqKu.jpg',
    genre_ids: [18, 10402, 10749],
    id: 467909,
    original_language: 'en',
    original_title: 'In the Heights',
    overview:
      'The story of Usnavi, a bodega owner who has mixed feelings about closing his store and retiring to the Dominican Republic or staying in Washington Heights.',
    poster_path: '/RO4KoJyoQMQzh9z76d4v4FJMmJ.jpg',
    title: 'In the Heights',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 69.929,
      },
    ],
    release_date: '2021-06-10',
  },
  {
    adult: false,
    backdrop_path: '/CLThrvZR4DuuslyW6ECuwebwkm.jpg',
    genre_ids: [10749, 18, 53],
    id: 471335,
    original_language: 'ko',
    original_title: '치즈인더트랩',
    overview:
      'Movie is based on the popular webcomic “Cheese in the Trap” by Soonkki which was previously adapted in the 2016 television drama series “Cheese in the Trap.”',
    poster_path: '/jG1nfIvkSpwlEt2EeAG6oGFKyqY.jpg',
    title: 'Cheese in the Trap',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 69.801,
      },
    ],
    release_date: '2018-03-14',
  },
  {
    adult: false,
    backdrop_path: '/aA8fTyMr7Ogobl5Ty1zoMJKEa4h.jpg',
    genre_ids: [53, 10770],
    id: 451156,
    original_language: 'en',
    original_title: 'Infidelity in Suburbia',
    overview:
      'With her husband away at work, and her son at school, Laura dreams of a home-renovation project to supplant her restless days. Elliott, her irresistibly hot private contractor, soon fulfills her more forbidden dreams.',
    poster_path: '/gKyvJ8u2US61pHR56C2DoVbwnu.jpg',
    title: 'Infidelity in Suburbia',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 69.758,
      },
    ],
    release_date: '2017-02-25',
  },
  {
    adult: false,
    backdrop_path: '/4OTYefcAlaShn6TGVK33UxLW9R7.jpg',
    genre_ids: [28, 12, 35],
    id: 476669,
    original_language: 'en',
    original_title: "The King's Man",
    overview:
      "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them.",
    poster_path: '/nj5HmHRZsrYQEYYXyAusFv35erP.jpg',
    title: "The King's Man",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 69.708,
      },
    ],
    release_date: '2021-12-22',
  },
  {
    adult: false,
    backdrop_path: '/sZ5qDlUT2PbMGrspLFvJ68jlje8.jpg',
    genre_ids: [28],
    id: 557968,
    original_language: 'ko',
    original_title: '리벤져',
    overview:
      'Hell-bent on avenging the murder of his family, a former detective infiltrates a remote island that serves as a prison for vicious death row criminals.',
    poster_path: '/7zUTOTCi5PfvboAOYFgDf6vejmr.jpg',
    title: 'Revenger',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.3,
      },
      {
        id: 'popularity',
        rating: 69.643,
      },
    ],
    release_date: '2018-12-06',
  },
  {
    adult: false,
    backdrop_path: '/s4wRC37TUwxtghhFBaze0qO1278.jpg',
    genre_ids: [12, 16, 10751],
    id: 105864,
    original_language: 'en',
    original_title: 'The Good Dinosaur',
    overview:
      'An epic journey into the world of dinosaurs where an Apatosaurus named Arlo makes an unlikely human friend.',
    poster_path: '/dM50iVbcnzQUIoc9TmUUk0SP4P4.jpg',
    title: 'The Good Dinosaur',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 69.588,
      },
    ],
    release_date: '2015-11-14',
  },
  {
    adult: false,
    backdrop_path: '/cNHXm0Bv5GpatBOliHt9UdsyVFW.jpg',
    genre_ids: [16, 18, 10751],
    id: 3170,
    original_language: 'en',
    original_title: 'Bambi',
    overview:
      "Bambi's tale unfolds from season to season as the young prince of the forest learns about life, love, and friends.",
    poster_path: '/wV9e2y4myJ4KMFsyFfWYcUOawyK.jpg',
    title: 'Bambi',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 69.46,
      },
    ],
    release_date: '1942-08-14',
  },
  {
    adult: false,
    backdrop_path: '/yiWfT2Bl1Nul3Xie39Ahs3FqSjA.jpg',
    genre_ids: [12, 14, 18, 10749],
    id: 24021,
    original_language: 'en',
    original_title: 'The Twilight Saga: Eclipse',
    overview:
      'Bella once again finds herself surrounded by danger as Seattle is ravaged by a string of mysterious killings and a malicious vampire continues her quest for revenge. In the midst of it all, she is forced to choose between her love for Edward and her friendship with Jacob, knowing that her decision has the potential to ignite the ageless struggle between vampire and werewolf. With her graduation quickly approaching, Bella is confronted with the most important decision of her life.',
    poster_path: '/4IIFFKd9vxrlicNbAPS8ONEgIFp.jpg',
    title: 'The Twilight Saga: Eclipse',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 69.45,
      },
    ],
    release_date: '2010-06-23',
  },
  {
    adult: false,
    backdrop_path: '/2ddVTlMyATZdvUHE7DPExA2X6xF.jpg',
    genre_ids: [35, 18, 10751, 14, 12],
    id: 381289,
    original_language: 'en',
    original_title: "A Dog's Purpose",
    overview:
      'A dog goes on quest to discover his purpose in life over the course of several lifetimes with multiple owners.',
    poster_path: '/3jcNvhtVQe5Neoffdic39fRactM.jpg',
    title: "A Dog's Purpose",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 69.417,
      },
    ],
    release_date: '2017-01-19',
  },
  {
    adult: false,
    backdrop_path: '/Ktn3lkVHlaLpymvp7cCIPdb65g.jpg',
    genre_ids: [16, 28, 878],
    id: 39108,
    original_language: 'ja',
    original_title: 'ドラゴンボールZ 龍拳爆発!!悟空がやらねば誰がやる',
    overview:
      'The Z Warriors discover an unopenable music box and are told to open it with the Dragon Balls. The contents turn out to be a warrior named Tapion who had sealed himself inside along with a monster called Hildegarn. Goku must now perfect a new technique to defeat the evil monster.',
    poster_path: '/gd3argrGcs6mEHYPmnVHrP11sCG.jpg',
    title: 'Dragon Ball Z: Wrath of the Dragon',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 69.405,
      },
    ],
    release_date: '1995-07-15',
  },
  {
    adult: false,
    backdrop_path: '/pm0RiwNpSja8gR0BTWpxo5a9Bbl.jpg',
    genre_ids: [12, 14, 28],
    id: 122,
    original_language: 'en',
    original_title: 'The Lord of the Rings: The Return of the King',
    overview:
      "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
    poster_path: '/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
    title: 'The Lord of the Rings: The Return of the King',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.5,
      },
      {
        id: 'popularity',
        rating: 69.351,
      },
    ],
    release_date: '2003-12-01',
  },
  {
    adult: false,
    backdrop_path: '/f6c5htQ9AD13kSVymusdLfP7p6A.jpg',
    genre_ids: [18, 10751],
    id: 716799,
    original_language: 'ja',
    original_title: '461個のおべんとう',
    overview:
      "Kazuki Suzumoto is divorced and he lives with his 15-year-old son Kouki. Kouki is in a susceptible time. The father feels guilty about his son. Kouki then fails his high school entrance exam. In the spring of the following year, Kouki barely passes his high school entrance exam. Kouki mentions to Kazuki that he likes his father's lunch box. The father and son make a promise to each other. Kazuki promises that he will make a lunch box everyday for Kouki. Kouki promises that he will never skip school.",
    poster_path: '/8msQPxuA6fLpdSgbqIGCdP5VAS0.jpg',
    title: '461 Days of Bento: A Promise Between Father and Son',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 2,
      },
      {
        id: 'popularity',
        rating: 69.135,
      },
    ],
    release_date: '2020-11-06',
  },
  {
    adult: false,
    backdrop_path: '/rPBeEi1tU8IhQ9rbdnlLU0d0NR.jpg',
    genre_ids: [878, 28, 18, 10749, 12, 53],
    id: 445651,
    original_language: 'en',
    original_title: 'The Darkest Minds',
    overview:
      "After a disease kills 98% of America's children, the surviving 2% develop superpowers and are placed in internment camps. A 16-year-old girl escapes her camp and joins a group of other teens on the run from the government.",
    poster_path: '/94RaS52zmsqaiAe1TG20pdbJCZr.jpg',
    title: 'The Darkest Minds',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 69.101,
      },
    ],
    release_date: '2018-07-25',
  },
  {
    adult: false,
    backdrop_path: '/qEo36RiT8w4hMFlf9KohOSuX3HZ.jpg',
    genre_ids: [10751, 35, 18],
    id: 513584,
    original_language: 'en',
    original_title: 'Think Like a Dog',
    overview:
      'A 12-year-old tech prodigy, whose science experiment goes awry, forges a telepathic connection with his best friend, Henry-his dog! The duo join forces and use their unique perspectives on life to comically overcome complications of family and school.',
    poster_path: '/cDbOrc2RtIA37nLm0CzVpFLrdaG.jpg',
    title: 'Think Like a Dog',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 69.063,
      },
    ],
    release_date: '2020-08-06',
  },
  {
    adult: false,
    backdrop_path: '/nS0MqsEucHusa77hEdsXB8RsqMo.jpg',
    genre_ids: [37],
    id: 589885,
    original_language: 'en',
    original_title: 'Eminence Hill',
    overview:
      'A trail of revenge leads a notorious killer and a lawman to a town of fanatics.',
    poster_path: '/bQ6VHfXvBvlhqCXCm1GezQe1YUX.jpg',
    title: 'Eminence Hill',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.9,
      },
      {
        id: 'popularity',
        rating: 68.975,
      },
    ],
    release_date: '2019-11-01',
  },
  {
    adult: false,
    backdrop_path: '/j6Er72CMHKiZgFr0HBMbuyj7Ssa.jpg',
    genre_ids: [27],
    id: 753926,
    original_language: 'en',
    original_title: 'Toys of Terror',
    overview:
      'A big family moves into a dusty old house in the snowy woods of Washington with hopes of it being a nice holiday escape. But the kids soon discover a stash of old toys that just so happen to belong to a creepy ghost boy. As stranger and stranger things start to happen, some of the kids begin to sense that something in the house is not quite right…',
    poster_path: '/c6hmAgPVXxZHwMHfS9z3W2n9Gz9.jpg',
    title: 'Toys of Terror',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 68.918,
      },
    ],
    release_date: '2020-10-18',
  },
  {
    adult: false,
    backdrop_path: '/cyQK5IzMXDUS8o84HYbSIFQt1Vy.jpg',
    genre_ids: [28, 16, 878],
    id: 39102,
    original_language: 'ja',
    original_title:
      'ドラゴンボールゼット 超スーパーサイヤ人じんだ孫そん悟ご空くう',
    overview:
      'A Super Namekian named Slug comes to invade Earth. But the Z Warriors do their best to stop Slug and his gang.',
    poster_path: '/1lmwZTsqwTtvd3m60pyQfhGM2Ut.jpg',
    title: 'Dragon Ball Z: Lord Slug',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 68.905,
      },
    ],
    release_date: '1991-03-19',
  },
  {
    adult: false,
    backdrop_path: '/2yR4VkzqOtnaj5AOCN8i2HBBzLY.jpg',
    genre_ids: [18, 9648, 53, 27],
    id: 471506,
    original_language: 'en',
    original_title: 'Greta',
    overview:
      'A young woman returns an elderly widow’s lost purse, leading to an unlikely relationship between the two — until the young woman discovers her elder might not be all that she seems.',
    poster_path: '/6Lgk1OGexD0fU8QqDBQHcvEwd1Z.jpg',
    title: 'Greta',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 57.506,
      },
    ],
    release_date: '2019-02-28',
  },
  {
    adult: false,
    backdrop_path: '/dv8klY3zWIa1TONnAFwVJjfXdEe.jpg',
    genre_ids: [12, 14],
    id: 388427,
    original_language: 'es',
    original_title: 'La Leyenda del Diamante',
    overview:
      'When a gun-toting rebel tries to rescue her kidnapped sister, she finds herself up against a widely feared desperado and a cursed guardian of treasure.',
    poster_path: '/uyxUcPJzV4wqiTNhKrZzs9F1C8o.jpg',
    title: 'La Leyenda del Diamante',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.3,
      },
      {
        id: 'popularity',
        rating: 57.506,
      },
    ],
    release_date: '2018-08-25',
  },
  {
    adult: false,
    backdrop_path: '/q7vmCCmyiHnuKGMzHZlr0fD44b9.jpg',
    genre_ids: [10749, 14, 10751, 18],
    id: 150689,
    original_language: 'en',
    original_title: 'Cinderella',
    overview:
      "When her father unexpectedly passes away, young Ella finds herself at the mercy of her cruel stepmother and her daughters. Never one to give up hope, Ella's fortunes begin to change after meeting a dashing stranger in the woods.",
    poster_path: '/ryKwNlAfDXu0do6SX9h4G9Si1kG.jpg',
    title: 'Cinderella',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 57.46,
      },
    ],
    release_date: '2015-03-12',
  },
  {
    adult: false,
    backdrop_path: '/dFVr0z7PIGwQk5M2kYWykIYFFel.jpg',
    genre_ids: [35],
    id: 375794,
    original_language: 'es',
    original_title: 'No Manches Frida',
    overview:
      "After his release from prison, bank robber Zequi sets off to recover the stolen money that was buried by his dizzy accomplice. He's horrified to learn that a high school gymnasium is now standing over the site where the loot is stashed. Needing to infiltrate the building, Zequi lands a job as a substitute teacher for a group of wild and unruly students. As the ex-con tries to lay down the law, he starts to realize that life in jail may have been easier than trying to deal with rebellious teens.",
    poster_path: '/6HfyXfIEywLa2HvcswKi44dDKxL.jpg',
    title: 'No Manches Frida',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 57.455,
      },
    ],
    release_date: '2016-09-02',
  },
  {
    adult: false,
    backdrop_path: '/sTOhZruocNubL0HxjvdouwCEL9I.jpg',
    genre_ids: [16, 10751, 12, 35],
    id: 364689,
    original_language: 'en',
    original_title: 'Ferdinand',
    overview:
      'Ferdinand, a little bull, prefers sitting quietly under a cork tree just smelling the flowers versus jumping around, snorting, and butting heads with other bulls. As Ferdinand grows big and strong, his temperament remains mellow, but one day five men come to choose the "biggest, fastest, roughest bull" for the bullfights in Madrid and Ferdinand is mistakenly chosen.  Based on the classic 1936 children\'s book by Munro Leaf.',
    poster_path: '/rMm94JsRfcOPiPVsTRcBiiVBOhz.jpg',
    title: 'Ferdinand',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 57.441,
      },
    ],
    release_date: '2017-12-09',
  },
  {
    adult: false,
    backdrop_path: '/2WiaeLMnyuuz3Hr71qJO8jOoAbv.jpg',
    genre_ids: [28, 14],
    id: 512901,
    original_language: 'zh',
    original_title: '神探蒲松齡',
    overview:
      'Pu Songling (Jackie Chan), a legendary demon hunter, is asked to investigate the mysterious disappearances of young girls from a small village. When he discovers evil forces are kidnapping the girls to feast on their souls, he sets out to save humanity from the inhuman invasion journeying through hidden worlds and colorful dimensions.',
    poster_path: '/eKB9IDeSdyvHWb4iwve7mgyvZmb.jpg',
    title: 'The Knight of Shadows: Between Yin and Yang',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.4,
      },
      {
        id: 'popularity',
        rating: 57.391,
      },
    ],
    release_date: '2019-02-05',
  },
  {
    adult: false,
    backdrop_path: '/9gDzYmuy4Gait4GgeGiKdh68XvF.jpg',
    genre_ids: [35, 27, 53],
    id: 11932,
    original_language: 'en',
    original_title: 'Bride of Chucky',
    overview:
      'Chucky hooks up with another murderous doll, the bridal gown-clad Tiffany, for a Route 66 murder spree with their unwitting hosts.',
    poster_path: '/mAGviFp1ufYM3EaZBSrjPiKPBt6.jpg',
    title: 'Bride of Chucky',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 57.344,
      },
    ],
    release_date: '1998-10-16',
  },
  {
    adult: false,
    backdrop_path: '/eE7rwqTOAfzCvdXlYXXTc0yY4C.jpg',
    genre_ids: [53],
    id: 796989,
    original_language: 'en',
    original_title: 'Death Saved My Life',
    overview:
      'On the surface it seems Jade has it all, including a successful marketing career, a husband admired and respected in the community, and a young daughter they both dote on. However, behind closed doors, her life is far from perfect.',
    poster_path: '/n2S4AMsZG7PZmSLgDhPCKk5VakT.jpg',
    title: 'Death Saved My Life',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 57.305,
      },
    ],
    release_date: '2021-02-13',
  },
  {
    adult: false,
    backdrop_path: '/pwqfrqNkE4UJQqGdBc5qFUC6w9V.jpg',
    genre_ids: [28, 35],
    id: 325358,
    original_language: 'en',
    original_title: 'Superfast!',
    overview:
      "Undercover cop Lucas White joins Vin Serento's LA gang of illegal street racers. They are fast and they are furious and they plan to double cross LA crime kingpin Juan Carlos de la Sol who hides his cash in a downtown Taco Bell. The gang's outrageous plan is as daring as it is ridiculous and will see them towing the whole damn restaurant, at crazy speeds.",
    poster_path: '/iuIWl90qCpoxv6g775JB6Kg0m86.jpg',
    title: 'Superfast!',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5,
      },
      {
        id: 'popularity',
        rating: 57.298,
      },
    ],
    release_date: '2015-03-05',
  },
  {
    adult: false,
    backdrop_path: '/z1oPj03g6b9F5VyUTyQMp7IJ7Y9.jpg',
    genre_ids: [16, 28, 35, 10751],
    id: 10555,
    original_language: 'en',
    original_title: 'Shark Tale',
    overview:
      "Oscar is a small fish whose big aspirations often get him into trouble. Meanwhile, Lenny is a great white shark with a surprising secret that no sea creature would guess: He's a vegetarian. When a lie turns Oscar into an improbable hero and Lenny becomes an outcast, the two form an unlikely friendship.",
    poster_path: '/r08DpyPyhXcJTfNZAICNGMzcQ8l.jpg',
    title: 'Shark Tale',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 57.264,
      },
    ],
    release_date: '2004-09-20',
  },
  {
    adult: false,
    backdrop_path: '/5rKa5UKXnTdLsgY0mJbjAEQX3gB.jpg',
    genre_ids: [28, 12, 10751, 35],
    id: 9488,
    original_language: 'en',
    original_title: 'Spy Kids 2: The Island of Lost Dreams',
    overview:
      "Exploring the further adventures of Carmen and Juni Cortez, who have now joined the family spy business as Level 2 OSS agents. Their new mission is to save the world from a mad scientist living on a volcanic island populated by an imaginative menagerie of creatures. On this bizarre island, none of the Cortez's gadgets work and they must rely on their wits--and each other--to survive and save the day.",
    poster_path: '/A6gkSQVkbUiSCq7C9kexlJF8GdI.jpg',
    title: 'Spy Kids 2: The Island of Lost Dreams',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.6,
      },
      {
        id: 'popularity',
        rating: 57.17,
      },
    ],
    release_date: '2002-08-07',
  },
  {
    adult: false,
    backdrop_path: '/tyaVwOLIpAzZFP0qmXm2VZhYkxZ.jpg',
    genre_ids: [18, 28, 80],
    id: 448776,
    original_language: 'en',
    original_title: 'A Prayer Before Dawn',
    overview:
      "The true story of Billy Moore, an English boxer incarcerated in Thailand's most notorious prison. Thrown into a world of drugs and violence, he finds his best chance to escape is to fight his way out in Muay Thai tournaments.",
    poster_path: '/qgdOZEnEqnbroqHoslGJSFSKl9R.jpg',
    title: 'A Prayer Before Dawn',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 57.14,
      },
    ],
    release_date: '2018-05-24',
  },
  {
    adult: false,
    backdrop_path: '/gYtXT7fJNBRZBbBulO11DoRveLT.jpg',
    genre_ids: [10751, 18, 35],
    id: 400928,
    original_language: 'en',
    original_title: 'Gifted',
    overview:
      'Frank, a single man raising his child prodigy niece Mary, is drawn into a custody battle with his mother.',
    poster_path: '/9Ts7Vc4wLlpI9oox9mkVUE1tBHy.jpg',
    title: 'Gifted',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.1,
      },
      {
        id: 'popularity',
        rating: 57.013,
      },
    ],
    release_date: '2017-04-12',
  },
  {
    adult: false,
    backdrop_path: '/69EFgWWPFWbRNHmQgYdSnyJ94Ge.jpg',
    genre_ids: [28, 12, 14, 878],
    id: 49521,
    original_language: 'en',
    original_title: 'Man of Steel',
    overview:
      'A young boy learns that he has extraordinary powers and is not of this earth. As a young man, he journeys to discover where he came from and what he was sent here to do. But the hero in him must emerge if he is to save the world from annihilation and become the symbol of hope for all mankind.',
    poster_path: '/4qgXzVAYNihFeudrys6WU4I01Q7.jpg',
    title: 'Man of Steel',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 56.949,
      },
    ],
    release_date: '2013-06-12',
  },
  {
    adult: false,
    backdrop_path: '/2gKX53lskaCYk9ycXmaDJKqWiy.jpg',
    genre_ids: [27],
    id: 250546,
    original_language: 'en',
    original_title: 'Annabelle',
    overview:
      "John Form has found the perfect gift for his expectant wife, Mia - a beautiful, rare vintage doll in a pure white wedding dress. But Mia's delight with Annabelle doesn't last long. On one horrific night, their home is invaded by members of a satanic cult, who violently attack the couple. Spilled blood and terror are not all they leave behind. The cultists have conjured an entity so malevolent that nothing they did will compare to the sinister conduit to the damned that is now... Annabelle.",
    poster_path: '/yLsuU2P2SpDYFwtZQ7dtfVAf6TE.jpg',
    title: 'Annabelle',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.7,
      },
      {
        id: 'popularity',
        rating: 56.733,
      },
    ],
    release_date: '2014-10-02',
  },
  {
    adult: false,
    backdrop_path: '/jXb12SLEr9GvPFxiDNlIfZuGIHO.jpg',
    genre_ids: [35],
    id: 232672,
    original_language: 'en',
    original_title: 'Blended',
    overview:
      'After a bad blind date, a man and woman find themselves stuck together at a resort for families, where their attractions grows as their respective kids benefit from the burgeoning relationship.',
    poster_path: '/o2YrH9jS7CAfWjETHFeL0tth79E.jpg',
    title: 'Blended',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 56.659,
      },
    ],
    release_date: '2014-05-21',
  },
  {
    adult: false,
    backdrop_path: '/8fPqAhG3xvH0yllHvNwd8H0rAmx.jpg',
    genre_ids: [35],
    id: 822562,
    original_language: 'es',
    original_title: 'Soy Rada: Serendipia',
    overview:
      'The delightful Argentine comic Agustín Aristarán (aka Soy Rada) is back, this time putting the spotlight on family and parenting, magic and music.',
    poster_path: '/z85TeZmJYQjfviJmVNdLXQt8uEe.jpg',
    title: 'Soy Rada: Serendipity',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.5,
      },
      {
        id: 'popularity',
        rating: 56.613,
      },
    ],
    release_date: '2021-05-27',
  },
  {
    adult: false,
    backdrop_path: '/ctckqAvz9aTZDtfXLmDUdMflesU.jpg',
    genre_ids: [18],
    id: 785534,
    original_language: 'tr',
    original_title: 'Kağıttan Hayatlar',
    overview:
      'In the streets of Istanbul, ailing waste warehouse worker Mehmet takes a small boy under his wing and must soon confront his own traumatic childhood.',
    poster_path: '/cmru6N6Hnw2pJwuo1ctH1CxKqKZ.jpg',
    title: 'Paper Lives',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.3,
      },
      {
        id: 'popularity',
        rating: 56.581,
      },
    ],
    release_date: '2021-03-12',
  },
  {
    adult: false,
    backdrop_path: '/v0dXDmenDx5ElQZvI5VhzdGamRP.jpg',
    genre_ids: [28],
    id: 611562,
    original_language: 'en',
    original_title: 'Hollow Point',
    overview:
      'When his wife and daughter are senselessly murdered, a grieving man finds himself caught up in a war between a group of charismatic vigilantes and the crime that infests their city.',
    poster_path: '/lLbcqa8YnO2Qz4ggflhwglwXI8R.jpg',
    title: 'Hollow Point',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 56.539,
      },
    ],
    release_date: '2019-06-13',
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [],
    id: 118365,
    original_language: 'en',
    original_title: 'Moses, Prince of Egypt',
    overview:
      'At birth, Moses, a Hebrew baby is abandoned on the Nile by his mother. The wife of Pharaoh finds the small and decides to raise him as his own son. Moses grows Egyptian with his brother, Ramses, between games and pranks. When Moses became a man discovers the truth about his birth and, confused, flees into the wilderness. There he joins a group of nomadic Hebrews and is pastor. One day, God appears as a burning bush and entrusted with the mission to free the Hebrew slaves that holds the Pharaoh. Moses returns to Egypt to demand the release of his people and found that Rameses has become the new Pharaoh.',
    poster_path: null,
    title: 'Moses, Prince of Egypt',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.5,
      },
      {
        id: 'popularity',
        rating: 56.45,
      },
    ],
    release_date: '2000-01-01',
  },
  {
    adult: false,
    backdrop_path: '/nEcEy7iVOh04dzZWP2e6AcwpLvI.jpg',
    genre_ids: [35, 14],
    id: 72105,
    original_language: 'en',
    original_title: 'Ted',
    overview:
      'John Bennett, a man whose childhood wish of bringing his teddy bear to life came true, now must decide between keeping the relationship with the bear or his girlfriend, Lori.',
    poster_path: '/osJNr64CNyGhCzdlg6oHt3a6vNA.jpg',
    title: 'Ted',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 53.732,
      },
    ],
    release_date: '2012-06-29',
  },
  {
    adult: false,
    backdrop_path: '/mAaKxURFBRkLVfpqKOFVND78F13.jpg',
    genre_ids: [16, 18],
    id: 589082,
    original_language: 'ja',
    original_title: '薄暮',
    overview:
      'Hakubo tells the story of two young people who live in rural Fukushima: Sachi Koyama, a girl who excels at playing the violin, and Yuusuke Kijinami, a boy who loves to paint. After an awkward, chance encounter, the two meet and begin to fall in love, but Yuusuke is still living in the shadow of the 2011 Tohoku earthquake and tsunami.',
    poster_path: '/7iUoLTDTk5IgUJTboct2RHuuTMG.jpg',
    title: 'Twilight',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 53.717,
      },
    ],
    release_date: '2019-06-21',
  },
  {
    adult: false,
    backdrop_path: '/xGJ0tfRJL2vd4cyLZMHWjKdzcw1.jpg',
    genre_ids: [53, 28],
    id: 605368,
    original_language: 'en',
    original_title: 'Hard Night Falling',
    overview:
      "Goro, a criminal mastermind, plot to steal a massive cache of gold from the Rossini family. Unbeknownst to Goro and his soldiers of fortune, one of Rossini's guest is a highly trained foreign operative who fights to not only save the hostages and the gold, but his imperiled family.",
    poster_path: '/shi9Fdv2noZXOkGZLjqMBSfbGVW.jpg',
    title: 'Hard Night Falling',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 53.596,
      },
    ],
    release_date: '2019-12-10',
  },
  {
    adult: false,
    backdrop_path: '/qAvou7F5P4VcIR72JzzrnKEQSN3.jpg',
    genre_ids: [12, 14, 10751],
    id: 630,
    original_language: 'en',
    original_title: 'The Wizard of Oz',
    overview:
      'Young Dorothy finds herself in a magical world where she makes friends with a lion, a scarecrow and a tin man as they make their way along the yellow brick road to talk with the Wizard and ask for the things they miss most in their lives. The Wicked Witch of the West is the only thing that could stop them.',
    poster_path: '/bSA6DbAC5gdkaooU164lQUX6rVs.jpg',
    title: 'The Wizard of Oz',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 53.545,
      },
    ],
    release_date: '1939-08-15',
  },
  {
    adult: false,
    backdrop_path: '/X82UUddpYPJ1WVYFF2q0hGkGEo.jpg',
    genre_ids: [27, 35],
    id: 9431,
    original_language: 'en',
    original_title: 'Bordello of Blood',
    overview:
      "Private eye Rafe Guttman is hired by repressed, born-again Katherine to find her missing bad-boy brother. The trail leads him to a whorehouse run by a thousand-year-old vampire and secretly backed by Katherine's boss, televangelist Jimmy Current.",
    poster_path: '/aKkUQ0Zd9TFlqfcMMHFKQBB15wZ.jpg',
    title: 'Bordello of Blood',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 53.539,
      },
    ],
    release_date: '1996-08-16',
  },
  {
    adult: false,
    backdrop_path: '/54chAMdvhmK1Fh7twaYxbB4ojQB.jpg',
    genre_ids: [878],
    id: 484886,
    original_language: 'en',
    original_title: 'Singularity',
    overview:
      "When Elias van Dorne, CEO of the world's largest robotics company, introduces his most powerful invention, Kronos-a super-computer designed to end all wars-it determines that humans are the biggest threat and launches a worldwide attack on mankind. A small band of survivors must form an unlikely alliance to survive the greatest artificial intelligence threat man will ever know.",
    poster_path: '/qmAq1fsprWHhFARdpPz0A46ylUS.jpg',
    title: 'Singularity',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 3.6,
      },
      {
        id: 'popularity',
        rating: 53.526,
      },
    ],
    release_date: '2017-11-24',
  },
  {
    adult: false,
    backdrop_path: '/a3ay4lYVIbgXY9QdWveWqtS1lVx.jpg',
    genre_ids: [53, 9648, 18],
    id: 489999,
    original_language: 'en',
    original_title: 'Searching',
    overview:
      "After David Kim's 16-year-old daughter goes missing, a local investigation is opened and a detective is assigned to the case. But 37 hours later and without a single lead, David decides to search the one place no one has looked yet, where all secrets are kept today: his daughter's laptop.",
    poster_path: '/pk9R56ZFlofbBzfwBnHlDyg5DMs.jpg',
    title: 'Searching',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 53.515,
      },
    ],
    release_date: '2018-08-24',
  },
  {
    adult: false,
    backdrop_path: '/lp0dFHiuj0neI0C2F9DU4SHFVXB.jpg',
    genre_ids: [28, 53],
    id: 7555,
    original_language: 'en',
    original_title: 'Rambo',
    overview:
      "When governments fail to act on behalf of captive missionaries, ex-Green Beret John James Rambo sets aside his peaceful existence along the Salween River in a war-torn region of Thailand to take action.  Although he's still haunted by violent memories of his time as a U.S. soldier during the Vietnam War, Rambo can hardly turn his back on the aid workers who so desperately need his help.",
    poster_path: '/bFjt1JwDRn98j03UQgQ005bNrti.jpg',
    title: 'Rambo',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 53.502,
      },
    ],
    release_date: '2008-01-24',
  },
  {
    adult: false,
    backdrop_path: '/lvmv1kDswTljpS1ojAmVOW1ZoTn.jpg',
    genre_ids: [16, 12, 14],
    id: 532321,
    original_language: 'ja',
    original_title: 'Re:ゼロから始める異世界生活 Memory Snow',
    overview:
      'Subaru and friends finally get a moment of peace, and Subaru goes on a certain secret mission that he must not let anyone find out about! However, even though Subaru is wearing a disguise, Petra and other children of the village immediately figure out who he is. Now that his mission was exposed within five seconds of it starting, what will happen with Subaru\'s "date course" with Emilia?',
    poster_path: '/y7XwmyE5ue9hjk65fEWpO2hGU2B.jpg',
    title: 'Re:ZERO -Starting Life in Another World- Memory Snow',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 53.493,
      },
    ],
    release_date: '2018-10-06',
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [12, 18, 27, 878],
    id: 616851,
    original_language: 'en',
    original_title: "Untitled 'The Walking Dead' Film",
    overview:
      'Follows Rick Grimes from the departure of his final season in the TV series.',
    poster_path: '/djHNpqX9lmsWhMmSBfwwxEPmlpP.jpg',
    title: "Untitled 'The Walking Dead' Film",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 53.417,
      },
    ],
    release_date: '',
  },
  {
    adult: false,
    backdrop_path: '/j2oX7UeZJJD6tUczrVECcJCdLaG.jpg',
    genre_ids: [12, 16, 28],
    id: 18861,
    original_language: 'ja',
    original_title:
      '劇場版 NARUTO -ナルト- 大興奮!みかづき島のアニマル騒動だってばよ',
    overview:
      'Naruto Uzumaki, Kakashi Hatake, Sakura Haruno, and Rock Lee are assigned to protect the prince of the Land of the Moon, Michiru, during his world trip; other escorts had been hired, but quit due to being treated poorly. The Land of the Moon is a very wealthy nation, so Michiru tends to buy whatever he wants, and has a very materialistic worldview. His Hikaru, also acts in much the same manner.',
    poster_path: '/uHOlbIt1s90TL3JHI3JXwBBQOP6.jpg',
    title: 'Naruto the Movie: Guardians of the Crescent Moon Kingdom',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 53.315,
      },
    ],
    release_date: '2006-08-05',
  },
  {
    adult: false,
    backdrop_path: '/iXqWc2SoIg3mRLIPCdKdhtFSLiU.jpg',
    genre_ids: [16, 10751],
    id: 768076,
    original_language: 'en',
    original_title: 'Dragons: Rescue Riders: Huttsgalor Holiday',
    overview:
      'Snowfall marks the start of Odinyule — the Viking holiday of giving! But crazy weather might cancel the tradition unless the Rescue Riders can swoop in.',
    poster_path: '/3JZ3I9BDzVkDWRIGBl75MIig8Xg.jpg',
    title: 'Dragons: Rescue Riders: Huttsgalor Holiday',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.5,
      },
      {
        id: 'popularity',
        rating: 53.277,
      },
    ],
    release_date: '2020-11-24',
  },
  {
    adult: false,
    backdrop_path: '/pv9nZAYeiZ3jB7SCUvBxs4iEAb0.jpg',
    genre_ids: [16, 28, 12, 14, 35],
    id: 648964,
    original_language: 'ja',
    original_title:
      'Ninja Escapades: Creation of Akatsuki, The Two Uchiha, The Far Reaches of Hope',
    overview: '',
    poster_path: '/dORZD6Z2RKNEs9VdHHwAQGB5W5a.jpg',
    title:
      'Ninja Escapades: Creation of Akatsuki, The Two Uchiha, The Far Reaches of Hope',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 53.231,
      },
    ],
    release_date: '2014-09-11',
  },
  {
    adult: false,
    backdrop_path: '/ic16B2KUfEFicIB3eiBUAYqrwz7.jpg',
    genre_ids: [16, 10751, 12, 35],
    id: 326359,
    original_language: 'en',
    original_title: 'Frozen Fever',
    overview:
      "On Anna's birthday, Elsa and Kristoff are determined to give her the best celebration ever, but Elsa's icy powers may put more than just the party at risk.",
    poster_path: '/mPrDJ7puYzPLG5kPM96iNszF2sM.jpg',
    title: 'Frozen Fever',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 53.229,
      },
    ],
    release_date: '2015-03-09',
  },
  {
    adult: false,
    backdrop_path: '/zimK2fAfYXmhBcRy36edikqEZfq.jpg',
    genre_ids: [27, 53],
    id: 59429,
    original_language: 'ja',
    original_title: 'パラノーマル・アクティビティ 第2章 TOKYO NIGHT',
    overview:
      "This Japan production spins-off the story of the first Paranormal Activity film by having the ghost from the first film follow a student back to her homeland after a visit to San Diego where she is tragically injured during a car accident. Back home in Japan, she is cared for by her brother, Koichi, who begins to suspect that something is amiss when his sister's wheelchair begins to move on its own. From there, the picture takes on the usual candid cam shocks of the series. Tokyo Night is notable for being an official part of the franchise (it was released in Japan two days before Paranormal Activity 2's release in the States), even though the U.S. has yet to see an official release.",
    poster_path: '/mh7j7XlYWo82UnQGhsxcuyolzp.jpg',
    title: 'Paranormal Activity: Tokyo Night',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 53.189,
      },
    ],
    release_date: '2010-11-20',
  },
  {
    adult: false,
    backdrop_path: '/yir5430WblZSZuIMd9C6pIZerfA.jpg',
    genre_ids: [28, 80],
    id: 339403,
    original_language: 'en',
    original_title: 'Baby Driver',
    overview:
      'After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.',
    poster_path: '/rmnQ9jKW72bHu8uKlMjPIb2VLMI.jpg',
    title: 'Baby Driver',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 53.114,
      },
    ],
    release_date: '2017-06-28',
  },
  {
    adult: false,
    backdrop_path: '/ck7S9WpBOMLPIeZwqFZhLap8ySF.jpg',
    genre_ids: [35],
    id: 613096,
    original_language: 'es',
    original_title: 'Te quiero, imbécil',
    overview:
      "Marcos' life turns upside down after he loses the same day his girlfriend and his job. Marcos' life turns wild after to meet Raquel.",
    poster_path: '/ceKh9Qd00EZg5uT2OnLOskL94kr.jpg',
    title: 'I Love You, Stupid',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 53.1,
      },
    ],
    release_date: '2020-01-24',
  },
  {
    adult: false,
    backdrop_path: '/ust0K60AYegrKkE34ONo66r7Hfx.jpg',
    genre_ids: [12, 10751, 14],
    id: 2454,
    original_language: 'en',
    original_title: 'The Chronicles of Narnia: Prince Caspian',
    overview:
      'One year after their incredible adventures in the Lion, the Witch and the Wardrobe, Peter, Edmund, Lucy and Susan Pevensie return to Narnia to aid a young prince whose life has been threatened by the evil King Miraz. Now, with the help of a colorful cast of new characters, including Trufflehunter the badger and Nikabrik the dwarf, the Pevensie clan embarks on an incredible quest to ensure that Narnia is returned to its rightful heir.',
    poster_path: '/qxz3WIyjZiSKUhaTIEJ3c1GcC9z.jpg',
    title: 'The Chronicles of Narnia: Prince Caspian',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 53.067,
      },
    ],
    release_date: '2008-05-15',
  },
  {
    adult: false,
    backdrop_path: '/sKTFNMsuSgyAcwbD0xXVUXvvbY.jpg',
    genre_ids: [14, 28, 12, 16, 35, 10751],
    id: 82702,
    original_language: 'en',
    original_title: 'How to Train Your Dragon 2',
    overview:
      "The thrilling second chapter of the epic How To Train Your Dragon trilogy brings back the fantastical world of Hiccup and Toothless five years later. While Astrid, Snotlout and the rest of the gang are challenging each other to dragon races (the island's new favorite contact sport), the now inseparable pair journey through the skies, charting unmapped territories and exploring new worlds. When one of their adventures leads to the discovery of a secret ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.",
    poster_path: '/d13Uj86LdbDLrfDoHR5aDOFYyJC.jpg',
    title: 'How to Train Your Dragon 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 53.047,
      },
    ],
    release_date: '2014-06-09',
  },
  {
    adult: false,
    backdrop_path: '/6nh02WC31a5Sg3HqK21JY1nHqFo.jpg',
    genre_ids: [18],
    id: 506680,
    original_language: 'en',
    original_title: 'Unbroken: Path to Redemption',
    overview:
      'Zamperini returns to California where he wound up marrying Cynthia Applewhite while wrestling with untreated PTSD, suffering constant nightmares, angry, bitter and deeply depressed, his wife convinces Zamperini to attend the 1949 Billy Graham Crusade.',
    poster_path: '/x0anYeapUCJFjYmTaDHP00CaYEB.jpg',
    title: 'Unbroken: Path to Redemption',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 52.992,
      },
    ],
    release_date: '2018-09-14',
  },
  {
    adult: false,
    backdrop_path: '/vT2rEtt3kK2Vo6v5yXYd2y3dk14.jpg',
    genre_ids: [28],
    id: 481203,
    original_language: 'en',
    original_title: "All the Devil's Men",
    overview:
      'A battle-scarred War on Terror bounty hunter is forced to go to London on a manhunt for a disavowed CIA operative, which leads him into a deadly running battle with a former military comrade and his private army.',
    poster_path: '/pnlwh6CBBq5jB7G7OVxDsfz1b9v.jpg',
    title: "All the Devil's Men",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 47.629,
      },
    ],
    release_date: '2018-05-12',
  },
  {
    adult: false,
    backdrop_path: '/wiHwmNKPA7J9GgqCKY2z243HE3S.jpg',
    genre_ids: [28, 80, 53],
    id: 82675,
    original_language: 'en',
    original_title: 'Taken 2',
    overview:
      'In Istanbul, retired CIA operative Bryan Mills and his wife are taken hostage by the father of a kidnapper Mills killed while rescuing his daughter.',
    poster_path: '/yzAlcuJhpnxRPjaj7AHBRbNPQCJ.jpg',
    title: 'Taken 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 47.626,
      },
    ],
    release_date: '2012-09-27',
  },
  {
    adult: false,
    backdrop_path: '/bE6SwIJrDuDchsXXoE2njVFu795.jpg',
    genre_ids: [16, 35, 10751],
    id: 10715,
    original_language: 'en',
    original_title: 'Looney Tunes: Back in Action',
    overview:
      "Fed up with all the attention going to Bugs Bunny, Daffy Duck quits Hollywood, teams up with recently-fired stuntman Damien Drake Jr. and embarks on a round-the-world adventure, along with Bugs and The VP of Warner Bros. Their mission? Find Damien's father, and the missing blue diamond... and stay one step ahead of The Acme Corp., who wants the diamond for their own purposes.",
    poster_path: '/pNrQaH0ATrz9wFrNpwfB1aU4MpK.jpg',
    title: 'Looney Tunes: Back in Action',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 47.624,
      },
    ],
    release_date: '2003-11-14',
  },
  {
    adult: false,
    backdrop_path: '/7LZ0K4FsALrt7OeNIGOVLNuKQRU.jpg',
    genre_ids: [878, 12, 28, 80],
    id: 348350,
    original_language: 'en',
    original_title: 'Solo: A Star Wars Story',
    overview:
      'Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.',
    poster_path: '/4oD6VEccFkorEBTEDXtpLAaz0Rl.jpg',
    title: 'Solo: A Star Wars Story',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 47.582,
      },
    ],
    release_date: '2018-05-15',
  },
  {
    adult: false,
    backdrop_path: '/qKTIpGVuYeuXIrokxxxedgELtdv.jpg',
    genre_ids: [16],
    id: 439157,
    original_language: 'ja',
    original_title: 'ドラゴンボールZ 復活の「F」 “未来”トランクス特別編',
    overview:
      'Extra scenes of the movie Resurrection F, where future Trunks remembers the battle of Goku againts Freezer.',
    poster_path: '/fElTXRuElUkG7f4HtTfBWwsKkEQ.jpg',
    title: 'Dragon Ball Z Special 9 - Future Trunks Special',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 47.527,
      },
    ],
    release_date: '2016-08-10',
  },
  {
    adult: false,
    backdrop_path: '/sQhpJhGj5gsQ8IeiVg0ZlCw9EPp.jpg',
    genre_ids: [35, 80],
    id: 12153,
    original_language: 'en',
    original_title: 'White Chicks',
    overview:
      "Two FBI agent brothers, Marcus and Kevin Copeland, accidentally foil a drug bust. As punishment, they are forced to escort a pair of socialites to the Hamptons, where they're going to be used as bait for a kidnapper. But when the girls realize the FBI's plan, they refuse to go. Left without options, Marcus and Kevin decide to pose as the sisters, transforming themselves from African-American men into a pair of blonde, white women.",
    poster_path: '/vZoe1YoM8QDn1OwB7OrKHqrz3NT.jpg',
    title: 'White Chicks',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 47.501,
      },
    ],
    release_date: '2004-06-23',
  },
  {
    adult: false,
    backdrop_path: '/oG1NY1hU6hhC7TWdQBURUtAjvGv.jpg',
    genre_ids: [27, 53],
    id: 8922,
    original_language: 'en',
    original_title: 'Jeepers Creepers',
    overview:
      'A college-age brother and sister get more than they bargained for on their road trip home from spring break. When the bickering siblings witness a creepy truck driver tossing body bags into a sewer near an abandoned church, they investigate. Bad move! Opening a Pandora\'s Box of unspeakable evil, the pair must flee for their lives -- with a monstrous "shape" in hot pursuit.',
    poster_path: '/g410Y1U1ELbmJG14Zru3UAimm1G.jpg',
    title: 'Jeepers Creepers',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 47.473,
      },
    ],
    release_date: '2001-07-01',
  },
  {
    adult: false,
    backdrop_path: '/hxt1WzpSqMMDVtjafAXAnMIb0o9.jpg',
    genre_ids: [9648, 14, 12, 35],
    id: 11024,
    original_language: 'en',
    original_title: 'Scooby-Doo 2: Monsters Unleashed',
    overview:
      "When Mystery, Inc. are guests of honor at the grand opening of the Coolsville Museum of Criminology, a masked villain shows up and creates havoc before stealing the costumes of the gang's most notorious villains...Could it be that their nemesis, mad scientist Jonathan Jacobo has returned and is trying to recreate their deadliest foes?",
    poster_path: '/5BrXCJrs22bR5KR6mLHluYo6y4m.jpg',
    title: 'Scooby-Doo 2: Monsters Unleashed',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 47.437,
      },
    ],
    release_date: '2004-03-24',
  },
  {
    adult: false,
    backdrop_path: '/97aoG9EsExPflrUO8eEbnARaeZH.jpg',
    genre_ids: [10749, 18],
    id: 710356,
    original_language: 'en',
    original_title: '2 Hearts',
    overview:
      'When illness strikes two people who are polar opposites, life and death bring them together in surprising ways.',
    poster_path: '/a7bW3uKOMPBnmHs8gnlpfhTD8YQ.jpg',
    title: '2 Hearts',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 47.431,
      },
    ],
    release_date: '2020-10-16',
  },
  {
    adult: false,
    backdrop_path: '/dXQLVJxvScwtUtORAiaAxgikmtC.jpg',
    genre_ids: [18, 53],
    id: 644583,
    original_language: 'en',
    original_title: 'The Mauritanian',
    overview:
      "A detainee at the U.S military's Guantanamo Bay detention center is held without charges for over a decade and seeks help from a defense attorney for his release.",
    poster_path: '/lIADEa6oH74uUapjsPbNRzxus8M.jpg',
    title: 'The Mauritanian',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 47.42,
      },
    ],
    release_date: '2021-02-10',
  },
  {
    adult: false,
    backdrop_path: '/6mPe4rBHzDMal2oL6hVgOBkaHz9.jpg',
    genre_ids: [12, 27, 35],
    id: 257445,
    original_language: 'en',
    original_title: 'Goosebumps',
    overview:
      'After moving to a small town, Zach Cooper finds a silver lining when he meets next door neighbor Hannah, the daughter of bestselling Goosebumps series author R.L. Stine. When Zach unintentionally unleashes real monsters from their manuscripts and they begin to terrorize the town, it’s suddenly up to Stine, Zach and Hannah to get all of them back in the books where they belong.',
    poster_path: '/aeZT9pqEgrmXOGdESFkAuVjX6kw.jpg',
    title: 'Goosebumps',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 47.412,
      },
    ],
    release_date: '2015-08-05',
  },
  {
    adult: false,
    backdrop_path: '/xXhta1NIKn09IXy0mfp68cabdWS.jpg',
    genre_ids: [35, 10749],
    id: 466282,
    original_language: 'en',
    original_title: "To All the Boys I've Loved Before",
    overview:
      "Lara Jean's love life goes from imaginary to out of control when her secret letters to every boy she's ever fallen for are mysteriously mailed out.",
    poster_path: '/hKHZhUbIyUAjcSrqJThFGYIR6kI.jpg',
    title: "To All the Boys I've Loved Before",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 47.359,
      },
    ],
    release_date: '2018-08-16',
  },
  {
    adult: false,
    backdrop_path: '/j3R1mUTaBogjU97be4eABlvZWhH.jpg',
    genre_ids: [28],
    id: 586347,
    original_language: 'en',
    original_title: 'The Hard Way',
    overview:
      "After learning of his brother's death during a mission in Romania, a former soldier joins two allies to hunt down a mysterious enemy and take his revenge.",
    poster_path: '/kwtLphVv3ZbIblc79YNYbZuzbzb.jpg',
    title: 'The Hard Way',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.4,
      },
      {
        id: 'popularity',
        rating: 47.288,
      },
    ],
    release_date: '2019-03-05',
  },
  {
    adult: false,
    backdrop_path: '/8g6DICChiyJUHGc5ufn5kDaC6fd.jpg',
    genre_ids: [16, 10751],
    id: 13002,
    original_language: 'en',
    original_title: 'Barbie in the 12 Dancing Princesses',
    overview:
      'King Randolph sends for his cousin Duchess Rowena to help turn his daughters, Princess Genevieve and her 11 sisters, into better ladies. But the Duchess takes away all the sisters fun, including the sisters favorite pastime: dancing.Thinking all hope is lost they find a secret passageway to a magical land were they can dance the night away.',
    poster_path: '/opxyzBkB44ubRRyhdrvkoUFWuIj.jpg',
    title: 'Barbie in The 12 Dancing Princesses',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 47.283,
      },
    ],
    release_date: '2006-09-19',
  },
  {
    adult: false,
    backdrop_path: '/kfGUVDM03SGHIV1e3oS7R68j8Ek.jpg',
    genre_ids: [16, 18, 10402, 10749],
    id: 364111,
    original_language: 'ja',
    original_title: '心が叫びたがってるんだ。',
    overview:
      'A young girl had her voice magically taken away so that she would never hurt people with it, but her outlook changes when she encounters music and friendship. Will Naruse be able to convey the anthem of her heart?',
    poster_path: '/7bJHM6t6j3YLjDNTwe4hyghKqSr.jpg',
    title: 'The Anthem of the Heart',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 47.279,
      },
    ],
    release_date: '2015-09-19',
  },
  {
    adult: false,
    backdrop_path: '/ziZ5obHxXaJnu4QHXIBrVtNO1nO.jpg',
    genre_ids: [16, 10751],
    id: 15015,
    original_language: 'en',
    original_title: 'Barbie as Rapunzel',
    overview:
      "Long, long ago, in a time of magic and dragons, there lived a girl named Rapunzel who had the most beautiful radiant hair the world had ever seen. But Rapunzel's life was far from wonderful. She lived as a servant to Gothel, a jealous, scheming witch who kept her hidden deep in a forbidding forest, guarded by the enormous dragon Hugo and surrounded by an enchanted glass wall. However, in a twist of fate, Rapunzel's discovery of a magic paintbrush leads her on a journey that will unravel a web of deception, bring peace to two feuding kingdoms, and ultimately lead her to love with the help of Penelope(TM), the least intimidating of dragons!",
    poster_path: '/62G7Mbw1jtRX0Ad7fKpOf9Otmgt.jpg',
    title: 'Barbie as Rapunzel',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 47.254,
      },
    ],
    release_date: '2002-10-01',
  },
  {
    adult: false,
    backdrop_path: '/sFHKmVxJYoNK08yz0WbJrxeK4iI.jpg',
    genre_ids: [18, 80, 53],
    id: 616651,
    original_language: 'en',
    original_title: 'Stillwater',
    overview:
      'Bill Baker, an American oil-rig roughneck from Oklahoma, travels to Marseille to visit his estranged daughter, Allison, who is in prison for a murder she claims she did not commit. Confronted with language barriers, cultural differences, and a complicated legal system, Bill builds a new life for himself in France as he makes it his personal mission to exonerate his daughter.',
    poster_path: '/4pucZUgXNqBn2G4XLV4Q7JGz6iM.jpg',
    title: 'Stillwater',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.6,
      },
      {
        id: 'popularity',
        rating: 47.249,
      },
    ],
    release_date: '2021-07-30',
  },
  {
    adult: false,
    backdrop_path: '/uQqQvmptJLPTcWDrZXn22p7j7s3.jpg',
    genre_ids: [28, 80, 18, 53],
    id: 395990,
    original_language: 'en',
    original_title: 'Death Wish',
    overview:
      'A mild-mannered father is transformed into a killing machine after his family is torn apart by a violent act.',
    poster_path: '/g0eEEZAqMf98ULQnoiORuazjOpn.jpg',
    title: 'Death Wish',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 47.244,
      },
    ],
    release_date: '2018-03-02',
  },
  {
    adult: false,
    backdrop_path: '/daOd8KBGDdsOhVdzXB3KU5fgBd2.jpg',
    genre_ids: [18],
    id: 453354,
    original_language: 'fr',
    original_title: 'Ava',
    overview:
      'Ava, 13, is spending the summer on the Atlantic coast when she learns that she will lose her sight sooner than expected. Her mother decides to act as if everything were normal so as to spend their best summer ever. Ava confronts the problem in her own way. She steals a big black dog that belongs to a young man on the run...',
    poster_path: '/cUI1PFsrQVJR3IZOpkfsOOOUhTO.jpg',
    title: 'Ava',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 47.232,
      },
    ],
    release_date: '2017-06-21',
  },
  {
    adult: false,
    backdrop_path: '/8wfPjfUgmGpqCIW6gS0pS0pixnA.jpg',
    genre_ids: [35, 18, 10749],
    id: 625450,
    original_language: 'en',
    original_title: 'Tall Girl',
    overview:
      'Jodi, the tallest girl in her high school, has always felt uncomfortable in her own skin. But after years of slouching, being made fun of, and avoiding attention at all costs, Jodi finally decides to find the confidence to stand tall.',
    poster_path: '/m0clsFEXidLVJ0TueqWOvvImOMh.jpg',
    title: 'Tall Girl',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 47.224,
      },
    ],
    release_date: '2019-09-13',
  },
  {
    adult: false,
    backdrop_path: '/h8C7KZwCJO5DN7jPifc7AoIjx7k.jpg',
    genre_ids: [16, 35, 10751, 12],
    id: 14160,
    original_language: 'en',
    original_title: 'Up',
    overview:
      'Carl Fredricksen spent his entire life dreaming of exploring the globe and experiencing life to its fullest. But at age 78, life seems to have passed him by, until a twist of fate (and a persistent 8-year old Wilderness Explorer named Russell) gives him a new lease on life.',
    poster_path: '/eAdO0qa9m0NFSVLZ26PvCwmPlsr.jpg',
    title: 'Up',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 83.747,
      },
    ],
    release_date: '2009-05-28',
  },
  {
    adult: false,
    backdrop_path: '/xcjJ5khg2yzOa282mza39Lbrm7j.jpg',
    genre_ids: [27],
    id: 9552,
    original_language: 'en',
    original_title: 'The Exorcist',
    overview:
      '12-year-old Regan MacNeil begins to adapt an explicit new personality as strange events befall the local area of Georgetown. Her mother becomes torn between science and superstition in a desperate bid to save her daughter, and ultimately turns to her last hope: Father Damien Karras, a troubled priest who is struggling with his own faith.',
    poster_path: '/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg',
    title: 'The Exorcist',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 83.594,
      },
    ],
    release_date: '1973-05-31',
  },
  {
    adult: false,
    backdrop_path: '/7lmBufEG7P7Y1HClYK3gCxYrkgS.jpg',
    genre_ids: [12, 28, 878],
    id: 10138,
    original_language: 'en',
    original_title: 'Iron Man 2',
    overview:
      "With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony Stark faces pressure from the government, the press and the public to share his technology with the military. Unwilling to let go of his invention, Stark, with Pepper Potts and James 'Rhodey' Rhodes at his side, must forge new alliances – and confront powerful enemies.",
    poster_path: '/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg',
    title: 'Iron Man 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 83.149,
      },
    ],
    release_date: '2010-04-28',
  },
  {
    adult: false,
    backdrop_path: '/m8dzPu2ijeu1aQBoHhb14hzjCly.jpg',
    genre_ids: [16, 28, 14, 12],
    id: 567006,
    original_language: 'ja',
    original_title: '甲鉄城のカバネリ～海門決戦～',
    overview:
      'Half a year after the events of the series "Kabaneri of the Iron Fortress", the team attempt to take back Unato castle.',
    poster_path: '/6t1esuYHkOFO5SejAVFlu6alChr.jpg',
    title: 'Kabaneri of the Iron Fortress: The Battle of Unato',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 83.055,
      },
    ],
    release_date: '2019-05-10',
  },
  {
    adult: false,
    backdrop_path: '/BjLgTDAcZc94KomcQAxMVye0yI.jpg',
    genre_ids: [18, 10749],
    id: 642208,
    original_language: 'en',
    original_title: 'Supernova',
    overview:
      'Sam and Tusker, partners of 20 years, are traveling across England in their old RV visiting friends, family and places from their past. Since Tusker was diagnosed with early-onset dementia two years ago, their time together is the most important thing they have.  As the trip progresses, however, their ideas for the future clash, secrets come out, and their love for each other is tested as never before. Ultimately, they must confront the question of what it means to love one another in the face of Tusker’s illness.',
    poster_path: '/c21Vwt4shqVxCQziFz0Hf91wSow.jpg',
    title: 'Supernova',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 83.004,
      },
    ],
    release_date: '2021-01-29',
  },
  {
    adult: false,
    backdrop_path: '/5gPPx16QWx071VAI1M0RAVKJ6tc.jpg',
    genre_ids: [12, 14, 28],
    id: 58,
    original_language: 'en',
    original_title: "Pirates of the Caribbean: Dead Man's Chest",
    overview:
      'Captain Jack Sparrow works his way out of a blood debt with the ghostly Davy Jones to avoid eternal damnation.',
    poster_path: '/l3peI54mf6Z9EBSvS3hnRmOBbFT.jpg',
    title: "Pirates of the Caribbean: Dead Man's Chest",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 82.783,
      },
    ],
    release_date: '2006-07-06',
  },
  {
    adult: false,
    backdrop_path: '/qsxhnirlp7y4Ae9bd11oYJSX59j.jpg',
    genre_ids: [10751, 16, 35, 14, 12, 10402],
    id: 446893,
    original_language: 'en',
    original_title: 'Trolls World Tour',
    overview:
      'Queen Poppy and Branch make a surprising discovery — there are other Troll worlds beyond their own, and their distinct differences create big clashes between these various tribes. When a mysterious threat puts all of the Trolls across the land in danger, Poppy, Branch, and their band of friends must embark on an epic quest to create harmony among the feuding Trolls to unite them against certain doom.',
    poster_path: '/7W0G3YECgDAfnuiHG91r8WqgIOe.jpg',
    title: 'Trolls World Tour',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 82.466,
      },
    ],
    release_date: '2020-03-11',
  },
  {
    adult: false,
    backdrop_path: '/uFbWXErtWVfcxeFhuat4hO5GSYC.jpg',
    genre_ids: [35],
    id: 613098,
    original_language: 'es',
    original_title: 'Operación Camarón',
    overview:
      'Sebas, a newly appointed policeman with a talent for classical music, goes undercover.',
    poster_path: '/daZdqTxFj3lZjKPbouG9vbqVfkf.jpg',
    title: 'Operación Camarón',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.3,
      },
      {
        id: 'popularity',
        rating: 82.388,
      },
    ],
    release_date: '2021-06-24',
  },
  {
    adult: false,
    backdrop_path: '/9dBSwftCzkC4K4zgMZTwcm58VUR.jpg',
    genre_ids: [878, 53],
    id: 597890,
    original_language: 'en',
    original_title: 'Voyagers',
    overview:
      'With the future of the human race at stake, a group of young men and women -- bred for intelligence and obedience -- embark on an expedition to colonize a distant planet. When they uncover disturbing secrets about the mission, they defy their training and begin to explore their most primitive natures. As life on the ship descends into chaos, they soon become consumed by fear, lust and an insatiable hunger for power.',
    poster_path: '/gn2vCmWO7jQBBto9SYuBHYZARaU.jpg',
    title: 'Voyagers',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 82.151,
      },
    ],
    release_date: '2021-04-08',
  },
  {
    adult: false,
    backdrop_path: '/6IZ84KFhNpy6htsJmwFVuK30pyp.jpg',
    genre_ids: [878],
    id: 429471,
    original_language: 'en',
    original_title: 'Captive State',
    overview:
      'Nearly a decade after occupation by an extraterrestrial force, the lives of a Chicago neighborhood on both sides of the conflict are explored. In a working-class Chicago neighborhood occupied by an alien force for nine years, increased surveillance and the restriction of civil rights have given rise to an authoritarian system -- and dissent among the populace.',
    poster_path: '/szblGtb7wSuKiRDc2Yso0cB4TzR.jpg',
    title: 'Captive State',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.6,
      },
      {
        id: 'popularity',
        rating: 81.656,
      },
    ],
    release_date: '2019-03-15',
  },
  {
    adult: false,
    backdrop_path: '/rfkIeCaIHhN3K5wjJJqKmfUjYp8.jpg',
    genre_ids: [18, 36],
    id: 381284,
    original_language: 'en',
    original_title: 'Hidden Figures',
    overview:
      'The untold story of Katherine G. Johnson, Dorothy Vaughan and Mary Jackson – brilliant African-American women working at NASA and serving as the brains behind one of the greatest operations in history – the launch of astronaut John Glenn into orbit. The visionary trio crossed all gender and race lines to inspire generations to dream big.',
    poster_path: '/9lfz2W2uGjyow3am00rsPJ8iOyq.jpg',
    title: 'Hidden Figures',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8,
      },
      {
        id: 'popularity',
        rating: 81.531,
      },
    ],
    release_date: '2016-12-10',
  },
  {
    adult: false,
    backdrop_path: '/xYz4u1jWCKyXGzddMJeOL845DTr.jpg',
    genre_ids: [28, 12, 14],
    id: 1930,
    original_language: 'en',
    original_title: 'The Amazing Spider-Man',
    overview:
      "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents' disappearance – leading him directly to Oscorp and the lab of Dr. Curt Connors, his father's former partner. As Spider-Man is set on a collision course with Connors' alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.",
    poster_path: '/dQ8TOCYgP9pzQvSb1cmaalYqdb5.jpg',
    title: 'The Amazing Spider-Man',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 81.404,
      },
    ],
    release_date: '2012-06-23',
  },
  {
    adult: false,
    backdrop_path: '/tw4iYlxu0FIX4kmlFlprScdSfeA.jpg',
    genre_ids: [12, 28, 14],
    id: 522417,
    original_language: 'en',
    original_title: 'The Scorpion King: Book of Souls',
    overview:
      'The Scorpion King teams up with a female warrior named Tala, who is the sister of The Nubian King. Together they search for a legendary relic known as The Book of Souls, which will allow them to put an end to an evil warlord.',
    poster_path: '/mSviUMejPmerwoQxdj7wR4Ky1Fd.jpg',
    title: 'The Scorpion King: Book of Souls',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 81.387,
      },
    ],
    release_date: '2018-10-23',
  },
  {
    adult: false,
    backdrop_path: '/e7Z0DROMA9KLW5LfLXgYGv48qk4.jpg',
    genre_ids: [35],
    id: 610461,
    original_language: 'es',
    original_title: 'Veinteañera, divorciada y fantástica',
    overview:
      'Regina, our young protagonist, always dreamed of getting married. And she did it - but the dream lasted much less than she thought and now she has to face life in a very funny way as a divorcee.',
    poster_path: '/wpC0bIYYfAY0wLa8sjlzIspMQr4.jpg',
    title: 'Veinteañera, divorciada y fantástica',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.2,
      },
      {
        id: 'popularity',
        rating: 81.284,
      },
    ],
    release_date: '2020-02-14',
  },
  {
    adult: false,
    backdrop_path: '/cpTjuXuNTEDJc7qJEiUbUGcn85F.jpg',
    genre_ids: [27, 35],
    id: 664168,
    original_language: 'en',
    original_title: 'Fat Ass Zombies',
    overview:
      'In a sleepy town, one man, a wannabe horror film director is about to have his life and the world he knows change forever. Finally, he gets the big break he has been waiting a lifetime for, but its not Hollywood knocking on his door.',
    poster_path: '/btrers8SNujMJhxjLvjh7AJpN3T.jpg',
    title: 'Fat Ass Zombies',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.8,
      },
      {
        id: 'popularity',
        rating: 81.174,
      },
    ],
    release_date: '2020-02-18',
  },
  {
    adult: false,
    backdrop_path: '/AaABt75ZzfMGrscUR2seabz4PEX.jpg',
    genre_ids: [28, 12, 14],
    id: 297762,
    original_language: 'en',
    original_title: 'Wonder Woman',
    overview:
      'An Amazon princess comes to the world of Man in the grips of the First World War to confront the forces of evil and bring an end to human conflict.',
    poster_path: '/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg',
    title: 'Wonder Woman',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 81.078,
      },
    ],
    release_date: '2017-05-30',
  },
  {
    adult: false,
    backdrop_path: '/enlicWSFU0H2JNe3TgHNe4RIGWT.jpg',
    genre_ids: [35, 18, 9648, 10749, 53],
    id: 823461,
    original_language: 'en',
    original_title: 'Good on Paper',
    overview:
      'After years of putting her career ahead of love, stand-up comic Andrea Singer has stumbled upon the perfect guy. On paper, he checks all the boxes but is he everything he appears to be?',
    poster_path: '/y9G21Iu3yHYB0CnJ1BJlpPKgLMl.jpg',
    title: 'Good on Paper',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 81.046,
      },
    ],
    release_date: '2021-06-23',
  },
  {
    adult: false,
    backdrop_path: '/fVpFOcQyHJM2di9upgSIwWD5wac.jpg',
    genre_ids: [28, 27, 53],
    id: 396535,
    original_language: 'ko',
    original_title: '부산행',
    overview:
      'Martial law is declared when a mysterious viral outbreak pushes Korea into a state of emergency. Those on an express train to Busan, a city that has successfully fended off the viral outbreak, must fight for their own survival…',
    poster_path: '/3H1WFCuxyNRP35oiL2qqwhAXxc0.jpg',
    title: 'Train to Busan',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 80.924,
      },
    ],
    release_date: '2016-07-20',
  },
  {
    adult: false,
    backdrop_path: '/tFlSDoWQsAZ2qjICKzfP5Yw6zM5.jpg',
    genre_ids: [878, 12, 53],
    id: 131631,
    original_language: 'en',
    original_title: 'The Hunger Games: Mockingjay - Part 1',
    overview:
      'Katniss Everdeen reluctantly becomes the symbol of a mass rebellion against the autocratic Capitol.',
    poster_path: '/4FAA18ZIja70d1Tu5hr5cj2q1sB.jpg',
    title: 'The Hunger Games: Mockingjay - Part 1',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 80.788,
      },
    ],
    release_date: '2014-11-19',
  },
  {
    adult: false,
    backdrop_path: '/xZ2we4gdiwQmg6D1w9qHlAm5yIf.jpg',
    genre_ids: [35, 12, 14, 16, 10751],
    id: 10192,
    original_language: 'en',
    original_title: 'Shrek Forever After',
    overview:
      "A bored and domesticated Shrek pacts with deal-maker Rumpelstiltskin to get back to feeling like a real ogre again, but when he's duped and sent to a twisted version of Far Far Away—where Rumpelstiltskin is king, ogres are hunted, and he and Fiona have never met—he sets out to restore his world and reclaim his true love.",
    poster_path: '/6HrfPZtKcGmX2tUWW3cnciZTaSD.jpg',
    title: 'Shrek Forever After',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 80.77,
      },
    ],
    release_date: '2010-05-16',
  },
  {
    adult: false,
    backdrop_path: '/imtHhH4NuKMMaSityrxhuSmtyd3.jpg',
    genre_ids: [12, 35, 10751],
    id: 9340,
    original_language: 'en',
    original_title: 'The Goonies',
    overview:
      "A young teenager named Mikey Walsh finds an old treasure map in his father's attic. Hoping to save their homes from demolition, Mikey and his friends Data Wang, Chunk Cohen, and Mouth Devereaux run off on a big quest to find the secret stash of Pirate One-Eyed Willie.",
    poster_path: '/eBU7gCjTCj9n2LTxvCSIXXOvHkD.jpg',
    title: 'The Goonies',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 46.456,
      },
    ],
    release_date: '1985-06-07',
  },
  {
    adult: false,
    backdrop_path: '/k9bPnQX2dL2m7fRnPmNQxYsrHub.jpg',
    genre_ids: [14, 28, 53],
    id: 346672,
    original_language: 'en',
    original_title: 'Underworld: Blood Wars',
    overview:
      'Vampire death dealer Selene fends off brutal attacks from both the Lycan clan and the Vampire faction that betrayed her. With her only allies, David and his father Thomas, she must stop the eternal war between Lycans and Vampires, even if it means she has to make the ultimate sacrifice.',
    poster_path: '/sDupSRbqxJhSrjKQI33w7Fd8Owz.jpg',
    title: 'Underworld: Blood Wars',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.8,
      },
      {
        id: 'popularity',
        rating: 46.382,
      },
    ],
    release_date: '2016-11-24',
  },
  {
    adult: false,
    backdrop_path: '/joTtQICm7vrGrVitC1bobgBmxUh.jpg',
    genre_ids: [27, 35, 53],
    id: 11249,
    original_language: 'en',
    original_title: 'Seed of Chucky',
    overview:
      "Chucky and Tiffany are resurrected by their innocent son, Glen, and hit Hollywood, where a movie depicting the killer dolls' murder spree is underway.",
    poster_path: '/bIUXr9UXu9s06l7GWxdV0DDSwRp.jpg',
    title: 'Seed of Chucky',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.4,
      },
      {
        id: 'popularity',
        rating: 46.328,
      },
    ],
    release_date: '2004-11-11',
  },
  {
    adult: false,
    backdrop_path: '/4lQQVRLc7OCEFH6OUaMztwiFPbQ.jpg',
    genre_ids: [35, 18],
    id: 440472,
    original_language: 'en',
    original_title: 'The Upside',
    overview:
      "Phillip is a wealthy quadriplegic who needs a caretaker to help him with his day-to-day routine in his New York penthouse. He decides to hire Dell, a struggling parolee who's trying to reconnect with his ex and his young son. Despite coming from two different worlds, an unlikely friendship starts to blossom.",
    poster_path: '/hPZ2caow1PCND6qnerfgn6RTXdm.jpg',
    title: 'The Upside',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 46.32,
      },
    ],
    release_date: '2019-01-10',
  },
  {
    adult: false,
    backdrop_path: '/zCjZfevPFBbOh2SAx2syIBHSqEI.jpg',
    genre_ids: [28, 18, 878],
    id: 124905,
    original_language: 'en',
    original_title: 'Godzilla',
    overview:
      'Ford Brody, a Navy bomb expert, has just reunited with his family in San Francisco when he is forced to go to Japan to help his estranged father, Joe. Soon, both men are swept up in an escalating crisis when an ancient alpha predator arises from the sea to combat malevolent adversaries that threaten the survival of humanity. The creatures leave colossal destruction in their wake, as they make their way toward their final battleground: San Francisco.',
    poster_path: '/iBZhbCVhLpyxAfW1B8ePUxjScrx.jpg',
    title: 'Godzilla',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 46.318,
      },
    ],
    release_date: '2014-05-14',
  },
  {
    adult: false,
    backdrop_path: '/8UW9G9mlFj4ofVPIlATKv3aofHn.jpg',
    genre_ids: [16, 878],
    id: 16306,
    original_language: 'fr',
    original_title: 'La Planète sauvage',
    overview:
      "On the planet Ygam, the Draags, extremely technologically and spiritually advanced blue humanoids, consider the tiny Oms, human beings descendants of Terra's inhabitants, as ignorant animals. Those who live in slavery are treated as simple pets and used to entertain Draag children; those who live hidden in the hostile wilderness of the planet are periodically hunted and ruthlessly slaughtered as if they were vermin.",
    poster_path: '/prq0j1S0K07UjwLZLF6oMGflRUI.jpg',
    title: 'Fantastic Planet',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 46.272,
      },
    ],
    release_date: '1973-12-01',
  },
  {
    adult: false,
    backdrop_path: '/wbk9VvJ8lkUF0ElpfRm3dFIzMJf.jpg',
    genre_ids: [27, 53],
    id: 473149,
    original_language: 'en',
    original_title: 'Traffik',
    overview:
      'A couple off for a romantic weekend in the mountains are accosted by a biker gang. Alone in the mountains, Brea and John must defend themselves against the gang, who will stop at nothing to protect their secrets.',
    poster_path: '/jwsmeU8mYEP6GpxJ2sbCzc2MQmi.jpg',
    title: 'Traffik',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 46.249,
      },
    ],
    release_date: '2018-04-20',
  },
  {
    adult: false,
    backdrop_path: '/zR7PO9bkCEH2NG7gmudLcJVPKA8.jpg',
    genre_ids: [18, 9648, 53],
    id: 564251,
    original_language: 'ja',
    original_title: '映画 賭ケグルイ',
    overview:
      "Hyakkaou Private Academy. An institution for the privileged with a very peculiar curriculum. You see, when you're the sons and daughters of the wealthiest of the wealthy, it's not athletic prowess or book smarts that keep you ahead. It's reading your opponent, the art of the deal. What better way to hone those skills than with a rigorous curriculum of gambling? At Hyakkaou Private Academy, the winners live like kings, and the losers are put through the wringer. But when Yumeko Jabami enrolls, she's gonna teach these kids what a high roller really looks like!",
    poster_path: '/sKrCqhBXs6I9RPMjmaOMR67ahTe.jpg',
    title: 'Eiga: Kakegurui',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 46.201,
      },
    ],
    release_date: '2019-05-03',
  },
  {
    adult: false,
    backdrop_path: '/hjb0PCPKaRQ7fMy9Uf0iyNf7BRE.jpg',
    genre_ids: [28, 12, 16, 878, 53],
    id: 12244,
    original_language: 'en',
    original_title: '9',
    overview:
      'When 9 first comes to life, he finds himself in a post-apocalyptic world. All humans are gone, and it is only by chance that he discovers a small community of others like him taking refuge from fearsome machines that roam the earth intent on their extinction. Despite being the neophyte of the group, 9 convinces the others that hiding will do them no good.',
    poster_path: '/usfcQZRqdXTSSQ55esiPHJZKkIU.jpg',
    title: '9',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 46.155,
      },
    ],
    release_date: '2009-08-19',
  },
  {
    adult: false,
    backdrop_path: '/quWg9dTnqhIwxSwd0HHVXkZ1g8w.jpg',
    genre_ids: [16, 9648, 27, 878],
    id: 342588,
    original_language: 'ja',
    original_title: '屍者の帝国',
    overview:
      'The story of The Empire of Corpses takes place in 19th century Europe, and revolves around John Watson. He is scouted by the government to become a secret agent- However, Watson lives in a world where "Frankensteins"- human corpses that are re-purposed with a false soul in order to use them as laborers- are used to improve industrial development.',
    poster_path: '/gtfQzn3lRnJ2P3CcE8yxOtXPHTC.jpg',
    title: 'The Empire of Corpses',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 46.152,
      },
    ],
    release_date: '2015-10-02',
  },
  {
    adult: false,
    backdrop_path: '/swpjSgGmBCx6QgfO4rgv5vBzqHL.jpg',
    genre_ids: [28, 18, 12],
    id: 98,
    original_language: 'en',
    original_title: 'Gladiator',
    overview:
      "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos.  Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor.  As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed.  He escapes, but is captured by slave traders.  Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences.",
    poster_path: '/ehGpN04mLJIrSnxcZBMvHeG0eDc.jpg',
    title: 'Gladiator',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.2,
      },
      {
        id: 'popularity',
        rating: 46.136,
      },
    ],
    release_date: '2000-05-01',
  },
  {
    adult: false,
    backdrop_path: '/nHaJ4BYjNhdAjpdzeJcR2LGk4wD.jpg',
    genre_ids: [35],
    id: 646711,
    original_language: 'es',
    original_title: 'Doblemente embarazada',
    overview:
      'A woman gets pregnant with fraternal twins, one from her fiancé and the other from a former lover.',
    poster_path: '/xcTppRqJBs6gUFgg010tZGQLxyr.jpg',
    title: 'A Twofold Pregnancy',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 46.114,
      },
    ],
    release_date: '2019-12-19',
  },
  {
    adult: false,
    backdrop_path: '/tlEFuIlaxRPXIYVHXbOSAMCfWqk.jpg',
    genre_ids: [35, 18, 10749],
    id: 13,
    original_language: 'en',
    original_title: 'Forrest Gump',
    overview:
      'A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.',
    poster_path: '/h5J4W4veyxMXDMjeNxZI46TsHOb.jpg',
    title: 'Forrest Gump',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.5,
      },
      {
        id: 'popularity',
        rating: 46.067,
      },
    ],
    release_date: '1994-07-06',
  },
  {
    adult: false,
    backdrop_path: '/wNAfVj1ObGNye5fQM4tJXJGtU0.jpg',
    genre_ids: [53, 28, 80],
    id: 156022,
    original_language: 'en',
    original_title: 'The Equalizer',
    overview:
      'McCall believes he has put his mysterious past behind him and dedicated himself to beginning a new, quiet life. But when he meets Teri, a young girl under the control of ultra-violent Russian gangsters, he can’t stand idly by – he has to help her. Armed with hidden skills that allow him to serve vengeance against anyone who would brutalize the helpless, McCall comes out of his self-imposed retirement and finds his desire for justice reawakened. If someone has a problem, if the odds are stacked against them, if they have nowhere else to turn, McCall will help. He is The Equalizer.',
    poster_path: '/9u4yW7yPA0BQ2pv9XwiNzItwvp8.jpg',
    title: 'The Equalizer',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 46.044,
      },
    ],
    release_date: '2014-09-24',
  },
  {
    adult: false,
    backdrop_path: '/2lBOQK06tltt8SQaswgb8d657Mv.jpg',
    genre_ids: [10752, 18, 28, 53],
    id: 530915,
    original_language: 'en',
    original_title: '1917',
    overview:
      'At the height of the First World War, two young British soldiers must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers.',
    poster_path: '/iZf0KyrE25z1sage4SYFLCCrMi9.jpg',
    title: '1917',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8,
      },
      {
        id: 'popularity',
        rating: 46.034,
      },
    ],
    release_date: '2019-12-25',
  },
  {
    adult: false,
    backdrop_path: '/3lbTiIN8cVonMUQwaeh5nvn61lr.jpg',
    genre_ids: [12, 35, 878, 10751],
    id: 105,
    original_language: 'en',
    original_title: 'Back to the Future',
    overview:
      "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
    poster_path: '/7lyBcpYB0Qt8gYhXYaEZUNlNQAv.jpg',
    title: 'Back to the Future',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.3,
      },
      {
        id: 'popularity',
        rating: 45.933,
      },
    ],
    release_date: '1985-07-03',
  },
  {
    adult: false,
    backdrop_path: '/gYQ30Jer6qMZSKxeDmcibueeq0T.jpg',
    genre_ids: [28, 53],
    id: 267860,
    original_language: 'en',
    original_title: 'London Has Fallen',
    overview:
      "In London for the Prime Minister's funeral, Mike Banning discovers a plot to assassinate all the attending world leaders.",
    poster_path: '/wah9TViZDE4zfVsnIgwLB4zSxzH.jpg',
    title: 'London Has Fallen',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 45.879,
      },
    ],
    release_date: '2016-03-02',
  },
  {
    adult: false,
    backdrop_path: '/6pRNDb0yStxlwhavn2ZqYRVFOJ5.jpg',
    genre_ids: [16, 27, 28],
    id: 133121,
    original_language: 'en',
    original_title: 'Biohazard: Damnation',
    overview:
      'U.S. federal agent Leon S. Kennedy sneaks into the "East Slavic Republic" to verify rumors that Bio-Organic Weapons (BOWs) are being used in the country\'s civil war, which the U.S. and Russia are making preparations to jointly intervene in. Right after his infiltration, the U.S. government orders him to leave immediately. Determined to uncover the truth, Leon ignores the order and enters the battlefield to end the chain of tragedies caused by the BOWs.',
    poster_path: '/9T3u6laO3TRgJk4SFntt4UK1oXW.jpg',
    title: 'Resident Evil: Damnation',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 45.867,
      },
    ],
    release_date: '2012-09-25',
  },
  {
    adult: false,
    backdrop_path: '/z2oqTYqFZys9YkAseiUd18Gqqto.jpg',
    genre_ids: [10751, 12, 18],
    id: 1634,
    original_language: 'en',
    original_title: 'Free Willy',
    overview:
      'When maladjusted orphan Jesse vandalizes a theme park, he is placed with foster parents and must work at the park to make amends. There he meets Willy, a young Orca whale who has been separated from his family. Sensing kinship, they form a bond and, with the help of kindly whale trainer Rae Lindley, develop a routine of tricks. However, greedy park owner Dial soon catches wind of the duo and makes plans to profit from them.',
    poster_path: '/9iBgd9gi9ztWiVcYSG6zl8wDFBN.jpg',
    title: 'Free Willy',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 45.858,
      },
    ],
    release_date: '1993-07-16',
  },
  {
    adult: false,
    backdrop_path: '/dENLz9Np9EV5Ro8UIBhbKC8BmSS.jpg',
    genre_ids: [53, 28, 18, 878],
    id: 61791,
    original_language: 'en',
    original_title: 'Rise of the Planet of the Apes',
    overview:
      'A highly intelligent chimpanzee named Caeser has been living a peaceful suburban life ever since he was born. But when he gets taken to a cruel primate facility, Caeser decides to revolt against those who have harmed him.',
    poster_path: '/cjLsuP75UDlRdJVMXzXg3TJ4umX.jpg',
    title: 'Rise of the Planet of the Apes',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 45.854,
      },
    ],
    release_date: '2011-08-03',
  },
  {
    adult: false,
    backdrop_path: '/b1EKIjZWYAoC3WUk14012DX46Cb.jpg',
    genre_ids: [16, 10751, 12, 14],
    id: 494407,
    original_language: 'ja',
    original_title: '劇場版ポケットモンスター みんなの物語',
    overview:
      'A young athlete whose running days might be behind her, a compulsive liar, a shy researcher, a bitter old woman, and a little girl with a big secret—the only thing they have in common is the annual Wind Festival in Fula City.  The festival celebrates the Legendary Pokémon Lugia, who brings the wind that powers this seaside city. When a series of threats endangers not just the festival, but all the people and Pokémon of Fula City, it’ll take more than just Satoshi and Pikachu to save the day! Can everyone put aside their differences and work together—or will it all end in destruction?',
    poster_path: '/eakBFzG1dZn0uouBgv6kYtPXLkT.jpg',
    title: 'Pokémon the Movie: The Power of Us',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 48.107,
      },
    ],
    release_date: '2018-07-13',
  },
  {
    adult: false,
    backdrop_path: '/wRrhiUWQSrmCzuVRTUfrei6p3VY.jpg',
    genre_ids: [28, 35, 80],
    id: 650783,
    original_language: 'en',
    original_title: 'The Comeback Trail',
    overview:
      'Two movie producers who owe money to the mob set up their aging movie star for an insurance scam to try and save themselves. But they wind up getting more than they ever imagined.',
    poster_path: '/ublJIJbc2NZ30ptXj4O2d2apo1t.jpg',
    title: 'The Comeback Trail',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 48.097,
      },
    ],
    release_date: '2020-11-12',
  },
  {
    adult: false,
    backdrop_path: '/s3tGKy9ZD6KLTRLBsx9ekpvlYd9.jpg',
    genre_ids: [16, 10751],
    id: 619918,
    original_language: 'no',
    original_title: 'Elleville Elfrid',
    overview:
      'Ella Bella Bingo and Henry are best friends, but one day a new boy moves into the neighbourhood and everything changes.',
    poster_path: '/vdK86hDn31gjtVJhMDB7ZMEAH8Z.jpg',
    title: 'Ella Bella Bingo',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 48.078,
      },
    ],
    release_date: '2020-01-24',
  },
  {
    adult: false,
    backdrop_path: '/gHz4ZQytRs8YGrqFMwB3Vrr8pig.jpg',
    genre_ids: [18, 10749, 878],
    id: 274870,
    original_language: 'en',
    original_title: 'Passengers',
    overview:
      'A spacecraft traveling to a distant colony planet and transporting thousands of people has a malfunction in its sleep chambers. As a result, two passengers are awakened 90 years early.',
    poster_path: '/8NT7Tnq9s0Z4CRbz3WQR15wHCiQ.jpg',
    title: 'Passengers',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 48.059,
      },
    ],
    release_date: '2016-12-21',
  },
  {
    adult: false,
    backdrop_path: '/b4yiLlIFuiULuuLTxT0Pt1QyT6J.jpg',
    genre_ids: [16, 10751, 14, 12],
    id: 12092,
    original_language: 'en',
    original_title: 'Alice in Wonderland',
    overview:
      "On a golden afternoon, young Alice follows a White Rabbit, who disappears down a nearby rabbit hole. Quickly following him, she tumbles into the burrow - and enters the merry, topsy-turvy world of Wonderland! Memorable songs and whimsical escapades highlight Alice's journey, which culminates in a madcap encounter with the Queen of Hearts - and her army of playing cards!",
    poster_path: '/AdwfqyNiH8UqeYKFYoiKhwTtjAb.jpg',
    title: 'Alice in Wonderland',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 48.034,
      },
    ],
    release_date: '1951-07-28',
  },
  {
    adult: false,
    backdrop_path: '/uwivrZ7vIeP0HNkE5gKavzhZNpG.jpg',
    genre_ids: [27, 53],
    id: 91586,
    original_language: 'en',
    original_title: 'Insidious: Chapter 2',
    overview:
      'The haunted Lambert family seeks to uncover the mysterious childhood secret that has left them dangerously connected to the spirit world.',
    poster_path: '/chnxUtTmTRZh5FE7Ha4aUOZ9ahs.jpg',
    title: 'Insidious: Chapter 2',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 48.018,
      },
    ],
    release_date: '2013-09-12',
  },
  {
    adult: false,
    backdrop_path: '/8kpqu1JyFErn1v5wJoNTZ1hRx1R.jpg',
    genre_ids: [27, 9648],
    id: 55779,
    original_language: 'en',
    original_title: 'Final Destination 5',
    overview:
      'In this fifth installment, Death is just as omnipresent as ever, and is unleashed after one man’s premonition saves a group of coworkers from a terrifying suspension bridge collapse. But this group of unsuspecting souls was never supposed to survive, and, in a terrifying race against time, the ill-fated group frantically tries to discover a way to escape Death’s sinister agenda.',
    poster_path: '/5uRF7zATPr0hIMfDcMEfnhMGw6a.jpg',
    title: 'Final Destination 5',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 48.005,
      },
    ],
    release_date: '2011-08-12',
  },
  {
    adult: false,
    backdrop_path: '/lh5lbisD4oDbEKgUxoRaZU8HVrk.jpg',
    genre_ids: [28, 80, 18],
    id: 272,
    original_language: 'en',
    original_title: 'Batman Begins',
    overview:
      'Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.',
    poster_path: '/1P3ZyEq02wcTMd3iE4ebtLvncvH.jpg',
    title: 'Batman Begins',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 47.999,
      },
    ],
    release_date: '2005-06-10',
  },
  {
    adult: false,
    backdrop_path: '/2CjY7TiNDKhuI0rk8K0Vq0UvIHZ.jpg',
    genre_ids: [28, 12, 27],
    id: 409582,
    original_language: 'en',
    original_title: '7 Guardians of the Tomb',
    overview:
      'An innocent discovery of a well-preserved mummified Emperor from 200 BC China unearths a 2000 year old nightmare - a secret that should have remained buried.',
    poster_path: '/lBW7Aq7RzsFbrnmn9RCkpd6GbXf.jpg',
    title: '7 Guardians of the Tomb',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.4,
      },
      {
        id: 'popularity',
        rating: 47.932,
      },
    ],
    release_date: '2018-01-19',
  },
  {
    adult: false,
    backdrop_path: '/aQe3xmqiO4seehWyhkKA0uVWCax.jpg',
    genre_ids: [14, 16, 18, 10749, 10751],
    id: 18937,
    original_language: 'en',
    original_title: 'Quest for Camelot',
    overview:
      'During the times of King Arthur, Kayley is a brave girl who dreams of following her late father as a Knight of the Round Table. The evil Ruber wants to invade Camelot and take the throne of King Arthur, and Kayley has to stop him.',
    poster_path: '/xBmKXg0phTpWaJVN0OP6yfGUJur.jpg',
    title: 'Quest for Camelot',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 47.904,
      },
    ],
    release_date: '1998-05-15',
  },
  {
    adult: false,
    backdrop_path: '/103d4ObBCWbB6PtOOjZ7C1FSpVl.jpg',
    genre_ids: [28, 80],
    id: 486131,
    original_language: 'en',
    original_title: 'Shaft',
    overview:
      'JJ, aka John Shaft Jr., may be a cyber security expert with a degree from MIT, but to uncover the truth behind his best friend’s untimely death, he needs an education only his dad can provide. Absent throughout JJ’s youth, the legendary locked-and-loaded John Shaft agrees to help his progeny navigate Harlem’s heroin-infested underbelly.',
    poster_path: '/kfZqwGuvEBAysAbCsa0QLKoSYR.jpg',
    title: 'Shaft',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 47.876,
      },
    ],
    release_date: '2019-06-14',
  },
  {
    adult: false,
    backdrop_path: '/eQEcL2KKUYCXlChtqH1vHGcWVh.jpg',
    genre_ids: [35, 12],
    id: 441316,
    original_language: 'en',
    original_title: 'Gold Dust',
    overview:
      'Along the Mexico border, two friends search for a ghost ship rumored to be buried in the desert sand. In the same area, drug lords employ children; the duo must decide between going after the ship or saving a young girl held captive.',
    poster_path: '/gUHehzemVYTd4mByJJVMnyvhqy8.jpg',
    title: 'Gold Dust',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.1,
      },
      {
        id: 'popularity',
        rating: 47.858,
      },
    ],
    release_date: '2020-04-07',
  },
  {
    adult: false,
    backdrop_path: '/s3FDBLH4qc1IcjexB05Qvbn3wxO.jpg',
    genre_ids: [28, 53, 80],
    id: 449443,
    original_language: 'en',
    original_title: 'Den of Thieves',
    overview:
      "A gritty crime saga which follows the lives of an elite unit of the LA County Sheriff's Dept. and the state's most successful bank robbery crew as the outlaws plan a seemingly impossible heist on the Federal Reserve Bank.",
    poster_path: '/AfybH6GbGFw1F9bcETe2yu25mIE.jpg',
    title: 'Den of Thieves',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 47.78,
      },
    ],
    release_date: '2018-01-18',
  },
  {
    adult: false,
    backdrop_path: '/7BkkPaXnYo82T2pLSJP7GRyhD2S.jpg',
    genre_ids: [35, 10749],
    id: 727745,
    original_language: 'en',
    original_title: 'The Kissing Booth 3',
    overview:
      'It’s the summer before Elle heads to college, and she has a secret decision to make. Elle has been accepted into Harvard, where boyfriend Noah is matriculating, and also Berkeley, where her BFF Lee is headed. Which path should she choose?',
    poster_path: '/r9J7GNiQgPTEIushf6XuO9iwIIv.jpg',
    title: 'The Kissing Booth 3',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 47.739,
      },
    ],
    release_date: '2021-08-11',
  },
  {
    adult: false,
    backdrop_path: '/uL2s9Snfjb9AvImGGQLDnMpfzge.jpg',
    genre_ids: [12, 14, 878, 10751, 28],
    id: 475430,
    original_language: 'en',
    original_title: 'Artemis Fowl',
    overview:
      "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
    poster_path: '/tI8ocADh22GtQFV28vGHaBZVb0U.jpg',
    title: 'Artemis Fowl',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.7,
      },
      {
        id: 'popularity',
        rating: 47.719,
      },
    ],
    release_date: '2020-06-12',
  },
  {
    adult: false,
    backdrop_path: '/bwZY9cTdiw00Uk3mA4bJz8HXoyB.jpg',
    genre_ids: [14, 16, 10749, 10751],
    id: 10882,
    original_language: 'en',
    original_title: 'Sleeping Beauty',
    overview:
      "A beautiful princess born in a faraway kingdom is destined by a terrible curse to prick her finger on the spindle of a spinning wheel and fall into a deep sleep that can only be awakened by true love's first kiss. Determined to protect her, her parents ask three fairies to raise her in hiding. But the evil Maleficent is just as determined to seal the princess's fate.",
    poster_path: '/hsQD3U3P8wkU63jgKg9TlK5oxK3.jpg',
    title: 'Sleeping Beauty',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 47.709,
      },
    ],
    release_date: '1959-02-17',
  },
  {
    adult: false,
    backdrop_path: '/hjQp148VjWF4KjzhsD90OCMr11h.jpg',
    genre_ids: [18, 36, 10752],
    id: 857,
    original_language: 'en',
    original_title: 'Saving Private Ryan',
    overview:
      'As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the boy home.',
    poster_path: '/1wY4psJ5NVEhCuOYROwLH2XExM2.jpg',
    title: 'Saving Private Ryan',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.2,
      },
      {
        id: 'popularity',
        rating: 47.7,
      },
    ],
    release_date: '1998-07-24',
  },
  {
    adult: false,
    backdrop_path: '/oQaVV7p916HO5MDI820zzs1pin9.jpg',
    genre_ids: [10749, 18],
    id: 222935,
    original_language: 'en',
    original_title: 'The Fault in Our Stars',
    overview:
      "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a patient named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten.",
    poster_path: '/2lxIkCVAKpq9sHMDmlR4VYPKcek.jpg',
    title: 'The Fault in Our Stars',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 47.69,
      },
    ],
    release_date: '2014-05-16',
  },
  {
    adult: false,
    backdrop_path: '/jLOLUeYS13E7yUUJehytdQirw3b.jpg',
    genre_ids: [14, 35, 18],
    id: 536869,
    original_language: 'en',
    original_title: 'Cats',
    overview:
      'A tribe of cats called the Jellicles must decide yearly which one will ascend to the Heaviside Layer and come back to a new Jellicle life.',
    poster_path: '/tzOewp4kNstgqQLg1Sz61qx9GaG.jpg',
    title: 'Cats',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.3,
      },
      {
        id: 'popularity',
        rating: 47.648,
      },
    ],
    release_date: '2019-12-19',
  },
  {
    adult: false,
    backdrop_path: '/qYAciwxYpMnzcDZIKOoAjzxXYGo.jpg',
    genre_ids: [27],
    id: 218454,
    original_language: 'es',
    original_title: 'Cementerio General',
    overview:
      'Set in Iquitos, the story follows Andrea (Airam Galliani), a 15-years-ago teenage girl, who suffers the death of his father. With the help of his friends from school, encourage her to contact him using the ouija. However, this triggers a series of terrifying events.',
    poster_path: '/ahYTelGWA8zIgJFnUaNBQSDkHaK.jpg',
    title: 'General Cemetery',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 47.631,
      },
    ],
    release_date: '2013-07-25',
  },
  {
    adult: false,
    backdrop_path: '/bcWjiU1TywC8fYlkDK4MpQ9iEMF.jpg',
    genre_ids: [27, 12, 9648, 16, 28, 878],
    id: 400136,
    original_language: 'ja',
    original_title: 'バイオハザード ヴェンデッタ',
    overview:
      'BSAA Chris Redfield enlists the help of government agent Leon S. Kennedy and Professor Rebecca Chambers from Alexander Institute of Biotechnology to stop a death merchant with a vengeance from spreading a deadly virus in New York.',
    poster_path: '/88qfHWhlOBYXp69277QFhdPYnWf.jpg',
    title: 'Resident Evil: Vendetta',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 47.176,
      },
    ],
    release_date: '2017-05-27',
  },
  {
    adult: false,
    backdrop_path: '/k5I1aYLPfQSY7vC9hZOM97yPTgQ.jpg',
    genre_ids: [16, 10751],
    id: 15167,
    original_language: 'en',
    original_title: 'Barbie in the Nutcracker',
    overview:
      '"Barbie" stars as Clara in this animated retelling of the classic Christmas ballet, complete with Tchaikovsky soundtrack and ballet choreography.',
    poster_path: '/5NZwPWy5mFFRbeh3s0IDFnbXN70.jpg',
    title: 'Barbie in the Nutcracker',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 47.161,
      },
    ],
    release_date: '2001-09-30',
  },
  {
    adult: false,
    backdrop_path: '/nGJpQCAn2NKeDoEflLI5DIvsqoQ.jpg',
    genre_ids: [35, 18, 53],
    id: 466272,
    original_language: 'en',
    original_title: 'Once Upon a Time… in Hollywood',
    overview:
      'Los Angeles, 1969. TV star Rick Dalton, a struggling actor specializing in westerns, and stuntman Cliff Booth, his best friend, try to survive in a constantly changing movie industry. Dalton is the neighbor of the young and promising actress and model Sharon Tate, who has just married the prestigious Polish director Roman Polanski…',
    poster_path: '/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg',
    title: 'Once Upon a Time… in Hollywood',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 47.077,
      },
    ],
    release_date: '2019-07-24',
  },
  {
    adult: false,
    backdrop_path: '/bQl46uhGPTu9jnIRE9Ip2xOMc9M.jpg',
    genre_ids: [10751, 12, 16, 14, 878],
    id: 382190,
    original_language: 'ja',
    original_title: 'ポケモン・ザ・ムービーXY&Z ボルケニオンと機巧のマギアナ',
    overview:
      'Ash meets the Mythical Pokémon Volcanion when it crashes down from the sky, creating a cloud of dust—and a mysterious force binds the two of them together! Volcanion despises humans and tries to get away, but it’s forced to drag Ash along as it continues its rescue mission. They arrive in a city of cogs and gears, where a corrupt official has stolen the ultimate invention: the Artificial Pokémon Magearna, created 500 years ago. He plans to use its mysterious power to take control of this mechanical kingdom! Can Ash and Volcanion work together to rescue Magearna? One of the greatest battles in Pokémon history is about to unfold!',
    poster_path: '/j9TIzeMxNknVrBvgxzLqhIhxml4.jpg',
    title: 'Pokémon the Movie: Volcanion and the Mechanical Marvel',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 47.049,
      },
    ],
    release_date: '2016-07-16',
  },
  {
    adult: false,
    backdrop_path: '/pAAtboNfkzPkvKnMqHC9jvj19ol.jpg',
    genre_ids: [80],
    id: 512412,
    original_language: 'en',
    original_title: 'Backtrace',
    overview:
      'The lone surviving thief of a violent armored car robbery is sprung from a high security facility and administered an experimental drug.',
    poster_path: '/gM14jePY6dxg3ORWJCJN3YpQOWh.jpg',
    title: 'Backtrace',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.5,
      },
      {
        id: 'popularity',
        rating: 46.967,
      },
    ],
    release_date: '2018-12-14',
  },
  {
    adult: false,
    backdrop_path: '/wijltj1toRcicHlCn8Cpsp4yPXe.jpg',
    genre_ids: [12, 16, 35, 10751],
    id: 127380,
    original_language: 'en',
    original_title: 'Finding Dory',
    overview:
      'Dory is reunited with her friends Nemo and Marlin in the search for answers about her past. What can she remember? Who are her parents? And where did she learn to speak Whale?',
    poster_path: '/3UVe8NL1E2ZdUZ9EDlKGJY5UzE.jpg',
    title: 'Finding Dory',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.1,
      },
      {
        id: 'popularity',
        rating: 46.942,
      },
    ],
    release_date: '2016-06-16',
  },
  {
    adult: false,
    backdrop_path: '/ayDMYGUNVvXS76wQgFwTiUIDNb5.jpg',
    genre_ids: [10752, 28, 36, 53, 18],
    id: 300671,
    original_language: 'en',
    original_title: '13 Hours: The Secret Soldiers of Benghazi',
    overview:
      'An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.',
    poster_path: '/4qnEeVPM8Yn5dIVC4k4yyjrUXeR.jpg',
    title: '13 Hours: The Secret Soldiers of Benghazi',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 46.898,
      },
    ],
    release_date: '2016-01-13',
  },
  {
    adult: false,
    backdrop_path: '/4xzUhKxWHxPjJ6h1faVMTUBDquQ.jpg',
    genre_ids: [16, 878],
    id: 192577,
    original_language: 'ja',
    original_title: 'キャプテンハーロック',
    overview:
      'Space Pirate Captain Harlock and his fearless crew face off against the space invaders who seek to conquer the planet Earth.',
    poster_path: '/fnoZJlitIOBo2fSCyzAsv0lHtYL.jpg',
    title: 'Space Pirate Captain Harlock',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 46.837,
      },
    ],
    release_date: '2013-09-07',
  },
  {
    adult: false,
    backdrop_path: '/gtZ90H2gTDaXc8j2NCNWXYP9e6l.jpg',
    genre_ids: [12, 35, 14, 10751],
    id: 181533,
    original_language: 'en',
    original_title: 'Night at the Museum: Secret of the Tomb',
    overview:
      'When the magic powers of The Tablet of Ahkmenrah begin to die out, Larry Daley spans the globe, uniting favorite and new characters while embarking on an epic quest to save the magic before it is gone forever.',
    poster_path: '/xwgy305K6qDs3D20xUO4OZu1HPY.jpg',
    title: 'Night at the Museum: Secret of the Tomb',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 46.778,
      },
    ],
    release_date: '2014-12-17',
  },
  {
    adult: false,
    backdrop_path: '/lI2AHx0QQrNnEkUqUG01QHUdLDW.jpg',
    genre_ids: [16, 14, 12, 28, 10751],
    id: 638507,
    original_language: 'en',
    original_title: 'How to Train Your Dragon: Homecoming',
    overview:
      "It's been ten years since the dragons moved to the Hidden World, and even though Toothless doesn't live in New Berk anymore, Hiccup continues the holiday traditions he once shared with his best friend. But the Vikings of New Berk were beginning to forget about their friendship with dragons. Hiccup, Astrid, and Gobber know just what to do to keep the dragons in the villagers' hearts. And across the sea, the dragons have a plan of their own...",
    poster_path: '/kXj2Qrfm994yLeuADqbOieU1mUH.jpg',
    title: 'How to Train Your Dragon: Homecoming',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.2,
      },
      {
        id: 'popularity',
        rating: 46.774,
      },
    ],
    release_date: '2019-10-25',
  },
  {
    adult: false,
    backdrop_path: '/oihWVx3imvRKujnGmSDYhfG1gI5.jpg',
    genre_ids: [35, 27],
    id: 19908,
    original_language: 'en',
    original_title: 'Zombieland',
    overview:
      "Columbus has made a habit of running from what scares him. Tallahassee doesn't have fears. If he did, he'd kick their ever-living ass. In a world overrun by zombies, these two are perfectly evolved survivors. But now, they're about to stare down the most terrifying prospect of all: each other.",
    poster_path: '/dUkAmAyPVqubSBNRjRqCgHggZcK.jpg',
    title: 'Zombieland',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 46.772,
      },
    ],
    release_date: '2009-10-07',
  },
  {
    adult: false,
    backdrop_path: '/s661ZCXwC3cVIPlrrvo4bKOL7k3.jpg',
    genre_ids: [18],
    id: 619594,
    original_language: 'en',
    original_title: 'My Salinger Year',
    overview:
      'A college grad takes a clerical job working for the literary agent of the renowned, reclusive writer J.D. Salinger.',
    poster_path: '/dC4IBKaCLFwnQlGmsYT8mr0Sp4n.jpg',
    title: 'My Salinger Year',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.2,
      },
      {
        id: 'popularity',
        rating: 46.752,
      },
    ],
    release_date: '2021-01-14',
  },
  {
    adult: false,
    backdrop_path: '/2DwSRqFuqZoGqbJVkuAFsulYVQA.jpg',
    genre_ids: [35],
    id: 539617,
    original_language: 'en',
    original_title: 'Big Time Adolescence',
    overview:
      'A seemingly bright and mostly innocent 16-year-old named Mo attempts to navigate high school under the guidance of his best friend Zeke, an unmotivated-yet-charismatic college dropout. Although Zeke genuinely cares about Mo, things start to go awry as he teaches Mo nontraditional life lessons in drug dealing, partying, and dating. Meanwhile, Mo’s well-meaning dad tries to step in and take back the reins of his son’s upbringing.',
    poster_path: '/bFjhHlHjiWouLmJWxGMHGn1MQKX.jpg',
    title: 'Big Time Adolescence',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 46.742,
      },
    ],
    release_date: '2020-03-13',
  },
  {
    adult: false,
    backdrop_path: '/cKPfiu9IcCW0fMdKdQBXe3PRtTZ.jpg',
    genre_ids: [28, 80, 18, 53],
    id: 49026,
    original_language: 'en',
    original_title: 'The Dark Knight Rises',
    overview:
      "Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent's crimes to protect the late attorney's reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.",
    poster_path: '/vzvKcPQ4o7TjWeGIn0aGC9FeVNu.jpg',
    title: 'The Dark Knight Rises',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 46.7,
      },
    ],
    release_date: '2012-07-16',
  },
  {
    adult: false,
    backdrop_path: '/cMnI7rrQj7MZQLV4DRjVZagKi2x.jpg',
    genre_ids: [28, 27, 878, 14],
    id: 549787,
    original_language: 'ja',
    original_title: '東京喰種 トーキョーグール【S】',
    overview:
      "Now a member of Anteiku, Ken Kaneki grows closer to the ghouls around him. Determined to protect his new home against anti-ghoul forces, he trains his powers in secret. But when the infamous gourmet, Shū Tsukiyama, wishes to savour some half-ghoul flavour, Kaneki's training is put to test of a lifetime.",
    poster_path: '/nMTiDEye1BwnQP8J1hM3G16EEmX.jpg',
    title: "Tokyo Ghoul 'S'",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 46.688,
      },
    ],
    release_date: '2019-07-19',
  },
  {
    adult: false,
    backdrop_path: '/l1uHJL0XhFdxbsLyTPVRCDMkPik.jpg',
    genre_ids: [53, 9648, 27],
    id: 711715,
    original_language: 'en',
    original_title: 'The Current Occupant',
    overview:
      'Trapped in a mysterious psychiatric ward, a man with no memory comes to believe that he’s the President of the United States and the subject of a diabolical political conspiracy. As the asylum’s soul-crushing forces bear down on him, he fights to preserve his sanity and escape so that he can return to power.',
    poster_path: '/zl2oCYmEB0iKWZIVQWOH5Ao5Mo4.jpg',
    title: 'The Current Occupant',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.7,
      },
      {
        id: 'popularity',
        rating: 46.659,
      },
    ],
    release_date: '2020-07-17',
  },
  {
    adult: false,
    backdrop_path: '/ea55IXGO736WBEkC8FG3OC0TYjQ.jpg',
    genre_ids: [28, 878, 53],
    id: 522964,
    original_language: 'en',
    original_title: 'Incoming',
    overview:
      "The International Space Station is now a prison - the ultimate black site. No one's getting out. And no one knows it's there. But when the imprisoned terrorists take over the Station and turn it into a missile aimed at Moscow, only a shuttle pilot and a rookie doctor can stop them. Their task is complicated by a rogue CIA agent (Scott Adkins) who has his own plans for the station and the terrorists within.",
    poster_path: '/gYculW0aA6iIp4cu03dMRbYYs8C.jpg',
    title: 'Incoming',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 4.7,
      },
      {
        id: 'popularity',
        rating: 46.522,
      },
    ],
    release_date: '2018-05-04',
  },
  {
    adult: false,
    backdrop_path: '/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg',
    genre_ids: [18],
    id: 550,
    original_language: 'en',
    original_title: 'Fight Club',
    overview:
      'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
    poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    title: 'Fight Club',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.4,
      },
      {
        id: 'popularity',
        rating: 46.52,
      },
    ],
    release_date: '1999-10-15',
  },
  {
    adult: false,
    backdrop_path: '/iBJCHz6wWgyxbDmUD2Wk5huxbwS.jpg',
    genre_ids: [10751, 10770, 10402, 12, 14],
    id: 506574,
    original_language: 'en',
    original_title: 'Descendants 3',
    overview:
      "The teenagers of Disney's most infamous villains return to the Isle of the Lost to recruit a new batch of villainous offspring to join them at Auradon Prep.",
    poster_path: '/7IRy0iHdaS0JI3ng4ZYlk5gLSFn.jpg',
    title: 'Descendants 3',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 46.507,
      },
    ],
    release_date: '2019-08-02',
  },
  {
    adult: false,
    backdrop_path: '/ur4NTeFGZmQ6Hz5uEkAMgPI3WRg.jpg',
    genre_ids: [10751, 16, 35, 14],
    id: 481084,
    original_language: 'en',
    original_title: 'The Addams Family',
    overview:
      "The Addams family's lives begin to unravel when they face-off against a treacherous, greedy crafty reality-TV host while also preparing for their extended family to arrive for a major celebration.",
    poster_path: '/q1epO0eO8DWu8Vo8tPfvVlzW48T.jpg',
    title: 'The Addams Family',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 46.459,
      },
    ],
    release_date: '2019-10-10',
  },
  {
    adult: false,
    backdrop_path: '/h9cKOZs5z0fVmM9cZ4RPBvcojK5.jpg',
    genre_ids: [35],
    id: 582570,
    original_language: 'en',
    original_title: 'Sextuplets',
    overview:
      'Father-to-be Alan is shocked to learn that he was born a sextuplet. With his newfound brother Russell riding shotgun, the duo sets out on a hilarious journey to reunite with their remaining long-lost siblings.',
    poster_path: '/ztGSEcowBoHyRwcK0s5kIKVVXwy.jpg',
    title: 'Sextuplets',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 50.024,
      },
    ],
    release_date: '2019-08-16',
  },
  {
    adult: false,
    backdrop_path: '/tkxYmE3HzHy7E39zY3VvQ0k0VLU.jpg',
    genre_ids: [28, 35],
    id: 11770,
    original_language: 'cn',
    original_title: '少林足球',
    overview:
      'A young Shaolin follower reunites with his discouraged brothers to form a soccer team using their martial art skills to their advantage.',
    poster_path: '/kVpq68NxChzynK7otaymRSaWR8p.jpg',
    title: 'Shaolin Soccer',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7,
      },
      {
        id: 'popularity',
        rating: 49.912,
      },
    ],
    release_date: '2001-07-05',
  },
  {
    adult: false,
    backdrop_path: '/mYfHSHIQdH02s9cvVFhcLzRpEZI.jpg',
    genre_ids: [14, 18],
    id: 227859,
    original_language: 'en',
    original_title: 'The Book of Daniel',
    overview:
      "Taken into slavery after the fall of Jerusalem in 605 B.C., Daniel is forced to serve the most powerful king in the world, King Nebuchadnezzar. Faced with imminent death, Daniel proves himself a trusted Advisor and is placed among the king's wise men. Threatened by death at every turn Daniel never ceases to serve the king until he is forced to choose between serving the king or honoring God. With his life at stake, Daniel has nothing but his faith to stand between him and the lions den.",
    poster_path: '/yk8xDUbvnJIElgnkW3YZ3eAwiLO.jpg',
    title: 'The Book of Daniel',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.2,
      },
      {
        id: 'popularity',
        rating: 49.894,
      },
    ],
    release_date: '2013-10-01',
  },
  {
    adult: false,
    backdrop_path: '/xWPMb2aOdkT2jTUOp6ZRjnwia6i.jpg',
    genre_ids: [53, 10770],
    id: 375846,
    original_language: 'en',
    original_title: 'Bad Sister',
    overview:
      "As a top student at St. Adeline's Catholic Boarding School, Zoe senses that something is not quite right about the school's new nun-- a sense proven to be true when it is revealed the \"good' nun is an imposter with a fatal attraction to Zoe's brother.",
    poster_path: '/jKrIlgfJPIWNeowaOZPBZuOPmq0.jpg',
    title: 'Bad Sister',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 49.857,
      },
    ],
    release_date: '2016-01-03',
  },
  {
    adult: false,
    backdrop_path: '/3tWw50B1xXlCnJ9A7NX4nNzZF4j.jpg',
    genre_ids: [35, 18, 10749],
    id: 350,
    original_language: 'en',
    original_title: 'The Devil Wears Prada',
    overview:
      "Andy moves to New York to work in the fashion industry. Her boss is extremely demanding, cruel and won't let her succeed if she doesn't fit into the high class elegant look of their magazine.",
    poster_path: '/8912AsVuS7Sj915apArUFbv6F9L.jpg',
    title: 'The Devil Wears Prada',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 49.806,
      },
    ],
    release_date: '2006-06-30',
  },
  {
    adult: false,
    backdrop_path: '/gavyCu1UaTaTNPsVaGXT6pe5u24.jpg',
    genre_ids: [35, 18],
    id: 637,
    original_language: 'it',
    original_title: 'La vita è bella',
    overview:
      'A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.',
    poster_path: '/74hLDKjD5aGYOotO6esUVaeISa2.jpg',
    title: 'Life Is Beautiful',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.5,
      },
      {
        id: 'popularity',
        rating: 49.776,
      },
    ],
    release_date: '1997-12-20',
  },
  {
    adult: false,
    backdrop_path: '/cmjxiHqQL3cwkhb8A1HQBIaLc39.jpg',
    genre_ids: [28, 878, 35],
    id: 533535,
    original_language: 'en',
    original_title: 'Deadpool 3',
    overview: '',
    poster_path: '/1SlhjVF0QYYd3c8fJehGDrFfrQI.jpg',
    title: 'Deadpool 3',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 49.771,
      },
    ],
  },
  {
    adult: false,
    backdrop_path: '/aG9mPbhU6xR4EcSuaukcp3KEILJ.jpg',
    genre_ids: [35, 10402, 10749, 14],
    id: 606117,
    original_language: 'en',
    original_title: 'A Cinderella Story: Christmas Wish',
    overview:
      'Kat is an aspiring singer-songwriter who dreams of making it big. However, her dreams are stalled by her reality: a conniving and cruel stepfamily  and a demoralizing job working as a singing elf at billionaire Terrence Wintergarden’s Santa Land.',
    poster_path: '/ozBX0u5caaJFli9AssqJmARb5R.jpg',
    title: 'A Cinderella Story: Christmas Wish',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 49.7,
      },
    ],
    release_date: '2019-10-15',
  },
  {
    adult: false,
    backdrop_path: '/2oZklIzUbvZXXzIFzv7Hi68d6xf.jpg',
    genre_ids: [18, 37],
    id: 68718,
    original_language: 'en',
    original_title: 'Django Unchained',
    overview:
      'With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.',
    poster_path: '/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg',
    title: 'Django Unchained',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.1,
      },
      {
        id: 'popularity',
        rating: 49.652,
      },
    ],
    release_date: '2012-12-25',
  },
  {
    adult: false,
    backdrop_path: '/h6dJsYSm8x06bRxkF01sknpD9Iu.jpg',
    genre_ids: [16],
    id: 428707,
    original_language: 'ja',
    original_title: '劇場版 黒子のバスケ LAST GAME',
    overview:
      "Shortly after the Inter-High of Kagami and Kuroko's second-year, a street basketball team from the USA called Team Jabberwock came to Japan to play a friendly match against a Japanese college-level street basketball team, Team Strky. Despite their best efforts, Strky is brutally crushed by Jabberwock. After the match, the Jabberwock players insult the players from Strky and all of Japanese basketball, claiming Strky's basketball was at the same level as monkeys and telling the players and crowds to quit playing basketball and kill themselves.  As a revenge match, Kagetora assembles a dream team of all members of Generation of Miracles plus Kuroko Tetsuya and Kagami Taiga, along with bench players Hyūga Junpei, Takao Kazunari, and Wakamatsu Kōsuke, forming Team Vorpal Swords, with the hopes of reclaiming the pride of Japanese basketball.",
    poster_path: '/c4qDRYVcqMKl6fdiCwfb3icHrUM.jpg',
    title: "Kuroko's Basketball the Movie: Last Game",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.1,
      },
      {
        id: 'popularity',
        rating: 49.574,
      },
    ],
    release_date: '2017-03-18',
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [80],
    id: 360789,
    original_language: 'pt',
    original_title: 'Sexo, Sexo e Sexo',
    overview: '',
    poster_path: '/whuQjGVlqeHyggFAyDg3x9fd5Ay.jpg',
    title: 'Sexo, Sexo e Sexo',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 49.555,
      },
    ],
    release_date: '1984-09-21',
  },
  {
    adult: false,
    backdrop_path: '/80uHK2xWwjlOxmfJ1wQB09omAht.jpg',
    genre_ids: [10749, 35, 80, 14],
    id: 854,
    original_language: 'en',
    original_title: 'The Mask',
    overview:
      "When timid bank clerk Stanley Ipkiss discovers a magical mask containing the spirit of the Norse god Loki, his entire life changes. While wearing the mask, Ipkiss becomes a supernatural playboy exuding charm and confidence which allows him to catch the eye of local nightclub singer Tina Carlyle. Unfortunately, under the mask's influence, Ipkiss also robs a bank, which angers junior crime lord Dorian Tyrell, whose goons get blamed for the heist.",
    poster_path: '/zJUvFtaGPQkcQYE8nmhU66ESpWe.jpg',
    title: 'The Mask',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 49.538,
      },
    ],
    release_date: '1994-07-29',
  },
  {
    adult: false,
    backdrop_path: '/q6AzfDqhbmukD50R46lRMpelGRL.jpg',
    genre_ids: [27, 53],
    id: 256274,
    original_language: 'en',
    original_title: 'As Above, So Below',
    overview:
      'When a team of explorers ventures into the catacombs that lie beneath the streets of Paris, they uncover the dark secret that lies within this city of the dead.',
    poster_path: '/oJZSajKLJkoTOzSZQN2ZwRnPwHZ.jpg',
    title: 'As Above, So Below',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 49.489,
      },
    ],
    release_date: '2014-08-14',
  },
  {
    adult: false,
    backdrop_path: '/cvH1gNIMRITdLzoWv1HNAbRyH3n.jpg',
    genre_ids: [35, 10749],
    id: 2105,
    original_language: 'en',
    original_title: 'American Pie',
    overview:
      'At a high-school party, four friends find that losing their collective virginity isn\'t as easy as they had thought. But they still believe that they need to do so before college. To motivate themselves, they enter a pact to all "score" by their senior prom.',
    poster_path: '/5P68by2Thn8wHAziyWGEw2O7hco.jpg',
    title: 'American Pie',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 49.462,
      },
    ],
    release_date: '1999-07-09',
  },
  {
    adult: false,
    backdrop_path: '/4SO6pbGJTpM9YYovYxFLY3MXqZn.jpg',
    genre_ids: [80, 18, 9648, 53],
    id: 346685,
    original_language: 'en',
    original_title: 'The Girl on the Train',
    overview:
      'Rachel Watson, devastated by her recent divorce, spends her daily commute fantasizing about the seemingly perfect couple who live in a house that her train passes every day, until one morning she sees something shocking happen there and becomes entangled in the mystery that unfolds.',
    poster_path: '/AhTO2QWG0tug7yDoh0XoaMhPt3J.jpg',
    title: 'The Girl on the Train',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 49.414,
      },
    ],
    release_date: '2016-10-05',
  },
  {
    adult: false,
    backdrop_path: '/8ki3UBFOn0ghCa8oUDHaKhmAMO3.jpg',
    genre_ids: [10751, 16, 12, 28],
    id: 657561,
    original_language: 'en',
    original_title: 'The Wishmas Tree',
    overview:
      "A young possum's misguided wish for a white Wishmas not only freezes her entire hometown of Sanctuary City, but also threatens the lives of all who live there. Before the magical Wishmas Tree dies, she must undertake a perilous journey into the WILD; battling self-doubt, ghostly predators and ultimately, Extinction itself, to reverse the damage she has caused and save her city.",
    poster_path: '/90eStEGcL7tb65UU6ptMaG2PtIp.jpg',
    title: 'The Wishmas Tree',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 49.392,
      },
    ],
    release_date: '2020-02-27',
  },
  {
    adult: false,
    backdrop_path: '/vEGTi4Hp0zGZnBfZ0gZcf7KvdQd.jpg',
    genre_ids: [28, 12, 14],
    id: 68735,
    original_language: 'en',
    original_title: 'Warcraft',
    overview:
      'The peaceful realm of Azeroth stands on the brink of war as its civilization faces a fearsome race of invaders: orc warriors fleeing their dying home to colonize another. As a portal opens to connect the two worlds, one army faces destruction and the other faces extinction. From opposing sides, two heroes are set on a collision course that will decide the fate of their family, their people, and their home.',
    poster_path: '/k3a41SS1q5xmbvzPvzTIfG7GDlp.jpg',
    title: 'Warcraft',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 49.344,
      },
    ],
    release_date: '2016-05-25',
  },
  {
    adult: false,
    backdrop_path: '/ftRkFtAGuHngHnLiOxktq0aCVMF.jpg',
    genre_ids: [28, 16, 35, 10751, 12],
    id: 324852,
    original_language: 'en',
    original_title: 'Despicable Me 3',
    overview:
      "Gru and his wife Lucy must stop former '80s child star Balthazar Bratt from achieving world domination.",
    poster_path: '/6t3YWl7hrr88lCEFlGVqW5yV99R.jpg',
    title: 'Despicable Me 3',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 48.991,
      },
    ],
    release_date: '2017-06-15',
  },
  {
    adult: false,
    backdrop_path: '/k6EOrckWFuz7I4z4wiRwz8zsj4H.jpg',
    genre_ids: [28, 12, 878, 14],
    id: 140607,
    original_language: 'en',
    original_title: 'Star Wars: The Force Awakens',
    overview:
      'Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.',
    poster_path: '/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg',
    title: 'Star Wars: The Force Awakens',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 48.97,
      },
    ],
    release_date: '2015-12-15',
  },
  {
    adult: false,
    backdrop_path: '/rZ820qc7Ixc8Th2ocNzcocFmUgk.jpg',
    genre_ids: [10751, 14, 35],
    id: 14442,
    original_language: 'en',
    original_title: 'Ella Enchanted',
    overview:
      "Ella lives in a magical world in which each child, at the moment of their birth, is given a virtuous \"gift\" from a fairy godmother. Ella's so-called gift, however, is obedience. This birthright proves itself to be quite the curse once Ella finds herself in the hands of several unscrupulous characters whom she quite literally cannot disobey. Determined to gain control of her life and decisions, Ella sets off on a journey to find her fairy godmother who she hopes will lift the curse. The path, however, isn't easy -- Ella must outwit a slew of unpleasant obstacles including ogres, giants, wicked stepsisters, elves and Prince Charmont's evil uncle, who wants to take over the crown and rule the kingdom.",
    poster_path: '/dH8yHmqUra0gqzMJJKXiyfKkB57.jpg',
    title: 'Ella Enchanted',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 48.955,
      },
    ],
    release_date: '2004-04-09',
  },
  {
    adult: false,
    backdrop_path: '/mWLljCmpqlcYQh7uh51BBMwCZwN.jpg',
    genre_ids: [53, 28, 9648, 27],
    id: 522681,
    original_language: 'en',
    original_title: 'Escape Room',
    overview:
      'Six strangers find themselves in circumstances beyond their control, and must use their wits to survive.',
    poster_path: '/8Ls1tZ6qjGzfGHjBB7ihOnf7f0b.jpg',
    title: 'Escape Room',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 52.969,
      },
    ],
    release_date: '2019-01-03',
  },
  {
    adult: false,
    backdrop_path: '/kFZAu1g0f7bpunIumUY8Gb3Y9WU.jpg',
    genre_ids: [18],
    id: 785522,
    original_language: 'en',
    original_title: 'Skater Girl',
    overview:
      'Prerna, a teenager growing up in rural India, comes of age when she’s introduced to the sport of skateboarding. As a result, she has to fight the odds to follow her dreams and compete in the national championship.',
    poster_path: '/e8yxFPOvNmhlfUXBqiNvvpMI4t5.jpg',
    title: 'Skater Girl',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.7,
      },
      {
        id: 'popularity',
        rating: 52.92,
      },
    ],
    release_date: '2021-06-11',
  },
  {
    adult: false,
    backdrop_path: '/e0TNO1ZqAhKFFZfwpLeWzIS9597.jpg',
    genre_ids: [53],
    id: 611468,
    original_language: 'de',
    original_title: 'Kidnapping Stella',
    overview:
      "Snatched off the street and held for ransom, a bound and gagged woman uses her limited powers to derail her two masked abductors' carefully laid plans.",
    poster_path: '/c66emcavlUODl3aZjM7v0yAlR9P.jpg',
    title: 'Kidnapping Stella',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.3,
      },
      {
        id: 'popularity',
        rating: 52.911,
      },
    ],
    release_date: '2019-06-29',
  },
  {
    adult: false,
    backdrop_path: '/aTmh5w201d86lt3juFk8tbK297Y.jpg',
    genre_ids: [35, 27],
    id: 19994,
    original_language: 'en',
    original_title: "Jennifer's Body",
    overview:
      "Jennifer, a gorgeous, seductive cheerleader who takes evil to a whole new level after she's possessed by a sinister demon. Now it's up to her best friend to stop Jennifer's reign of terror before it's too late.",
    poster_path: '/48G2U0zmBh8mQ7gv8scC9xYIZSk.jpg',
    title: "Jennifer's Body",
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.7,
      },
      {
        id: 'popularity',
        rating: 52.91,
      },
    ],
    release_date: '2009-09-18',
  },
  {
    adult: false,
    backdrop_path: '/6g3qX16yQPj4FVk9WrOVYN5rAil.jpg',
    genre_ids: [35],
    id: 766680,
    original_language: 'en',
    original_title: 'Sexo',
    overview:
      "This film skewers the audience's prejudices when the subtitles abandon their usual chore of translating what is said and start talking directly to the audience.",
    poster_path: '/thzaTeq3H68VrDUgEO9SKpDEQX2.jpg',
    title: 'Sexo',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 3.4,
      },
      {
        id: 'popularity',
        rating: 52.868,
      },
    ],
    release_date: '2001-08-21',
  },
  {
    adult: false,
    backdrop_path: '/AmR3JG1VQVxU8TfAvljUhfSFUOx.jpg',
    genre_ids: [27, 878],
    id: 348,
    original_language: 'en',
    original_title: 'Alien',
    overview:
      'During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.',
    poster_path: '/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg',
    title: 'Alien',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.1,
      },
      {
        id: 'popularity',
        rating: 52.845,
      },
    ],
    release_date: '1979-05-25',
  },
  {
    adult: false,
    backdrop_path: '/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg',
    genre_ids: [28, 18],
    id: 361743,
    original_language: 'en',
    original_title: 'Top Gun: Maverick',
    overview:
      "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
    poster_path: '/i0FHyNF9VvQTXOi4yKnZJ1zql1.jpg',
    title: 'Top Gun: Maverick',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 0,
      },
      {
        id: 'popularity',
        rating: 52.844,
      },
    ],
    release_date: '2021-11-17',
  },
  {
    adult: false,
    backdrop_path: '/4gb03JbbXYJopDJRTxN5wJOJuX.jpg',
    genre_ids: [35],
    id: 503929,
    original_language: 'en',
    original_title: 'Fixed',
    overview:
      'Allan is a married father of three whose sex life takes another hit when his wife can no longer take the pill. He soon finds himself with an appointment for a vasectomy and a nagging identity crisis. Although he is by all reasonable accounts a good, responsible man, the thought of getting "fixed" drives him to lose himself to an action-packed midlife crisis along with his best friends. Allan will refuse to grow up anymore.',
    poster_path: '/zDETzyiUH9r3OMDioeCs8LZpY50.jpg',
    title: 'Fixed',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 3.4,
      },
      {
        id: 'popularity',
        rating: 52.834,
      },
    ],
    release_date: '2020-09-25',
  },
  {
    adult: false,
    backdrop_path: '/2E2bGNMDOEmTpgiwdI4w7G6mxli.jpg',
    genre_ids: [18, 80, 53],
    id: 478820,
    original_language: 'fr',
    original_title: "L'Empereur de Paris",
    overview:
      'Paris, France, early 19th century. The legendary convict François Vidocq lives in disguise trying to escape from a tragic past that torments him. When, after an unfortunate event, he crosses paths with the police chief, he makes a bold decision that will turn the ruthless mastermind of the Parisian underworld against him.',
    poster_path: '/6uCmrmGVVBlKCice9WeuTsZgWOH.jpg',
    title: 'The Emperor of Paris',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 52.772,
      },
    ],
    release_date: '2018-12-19',
  },
  {
    adult: false,
    backdrop_path: '/6esNUoXh4xQvucB7o7e3TCfjI65.jpg',
    genre_ids: [35, 18, 10749],
    id: 522924,
    original_language: 'en',
    original_title: 'The Art of Racing in the Rain',
    overview:
      "A family dog—with a near-human soul and a philosopher's mind—evaluates his life through the lessons learned by his human owner, a race-car driver.",
    poster_path: '/mi5VN4ww0JZgRFJIaPxxTGKjUg7.jpg',
    title: 'The Art of Racing in the Rain',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.4,
      },
      {
        id: 'popularity',
        rating: 52.7,
      },
    ],
    release_date: '2019-08-08',
  },
  {
    adult: false,
    backdrop_path: '/pVoPfIJCVusuELtfpZzadXsKxhs.jpg',
    genre_ids: [10751, 16, 14, 12, 35, 10402],
    id: 136799,
    original_language: 'en',
    original_title: 'Trolls',
    overview:
      'Lovable and friendly, the trolls love to play around. But one day, a mysterious giant shows up to end the party. Poppy, the optimistic leader of the Trolls, and her polar opposite, Branch, must embark on an adventure that takes them far beyond the only world they’ve ever known.',
    poster_path: '/zKu5MNy9QW1a5ZHgv7iAp3kRZpE.jpg',
    title: 'Trolls',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 52.698,
      },
    ],
    release_date: '2016-10-13',
  },
  {
    adult: false,
    backdrop_path: '/gGwA6YErMjiROavfGyxdciQnlTA.jpg',
    genre_ids: [18, 53],
    id: 596247,
    original_language: 'es',
    original_title: 'Pacto de fuga',
    overview:
      'During the last years of Pinochet\'s military regime,  a group of militants from the "Manuel Rodríguez Patriotic Front" plan a prison break of political prisoners, through a tunnel that will take them 18 months to dig.',
    poster_path: '/qDFfu73R8uO94ydFtdxEdSfTlg6.jpg',
    title: 'Pacto de Fuga',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.8,
      },
      {
        id: 'popularity',
        rating: 52.678,
      },
    ],
    release_date: '2020-01-23',
  },
  {
    adult: false,
    backdrop_path: '/7Q5pmJR2g3sUTRiHSTMPdiiFL3z.jpg',
    genre_ids: [18, 53],
    id: 575769,
    original_language: 'es',
    original_title: '4x4',
    overview:
      'Buenos Aires, Argentina. A luxurious van is parked on the sidewalk. A man enters with the purpose of stealing whatever he can find, but when he wants to leave, he cannot. The doors do not open, the control panel does not respond: the van has become an armored box and he is trapped like a mouse.',
    poster_path: '/qSXCBFySGSymwr0pt0gs0Jv4pOY.jpg',
    title: '4x4',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 52.638,
      },
    ],
    release_date: '2019-04-04',
  },
  {
    adult: false,
    backdrop_path: '/iSLXnEeZpkZQnxeCzp9ZjdhvAKK.jpg',
    genre_ids: [14, 878, 16, 28, 12, 9648],
    id: 183011,
    original_language: 'en',
    original_title: 'Justice League: The Flashpoint Paradox',
    overview:
      'The Flash finds himself in a war-torn alternate timeline and teams up with alternate versions of his fellow heroes to restore the timeline.',
    poster_path: '/zmpE3mfhv0NOnI872q66kuuGeZW.jpg',
    title: 'Justice League: The Flashpoint Paradox',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.9,
      },
      {
        id: 'popularity',
        rating: 52.637,
      },
    ],
    release_date: '2013-07-30',
  },
  {
    adult: false,
    backdrop_path: '/sRJXffIo0tY2acAUlIThoopsxia.jpg',
    genre_ids: [35, 10749],
    id: 50546,
    original_language: 'en',
    original_title: 'Just Go with It',
    overview:
      "A plastic surgeon, romancing a much younger schoolteacher, enlists his loyal assistant to pretend to be his soon to be ex-wife, in order to cover up a careless lie. When more lies backfire, the assistant's kids become involved, and everyone heads off for a weekend in Hawaii that will change all their lives.",
    poster_path: '/ez1EDULOCUUCySHOZU6tz97qbtM.jpg',
    title: 'Just Go with It',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.6,
      },
      {
        id: 'popularity',
        rating: 52.591,
      },
    ],
    release_date: '2011-02-10',
  },
  {
    adult: false,
    backdrop_path: '/6scIG1WRoUwwOOqJnuNFLmy5bui.jpg',
    genre_ids: [12, 16, 10751, 37],
    id: 10380,
    original_language: 'en',
    original_title: 'An American Tail: Fievel Goes West',
    overview:
      "Some time after the Mousekewitz's have settled in America, they find that they are still having problems with the threat of cats. That makes them eager to try another home out in the west, where they are promised that mice and cats live in peace. Unfortunately, the one making this claim is an oily con artist named Cat R. Waul who is intent on his own sinister plan.",
    poster_path: '/cImuS7FE9MHT5vnwIHGx1Ryh0K1.jpg',
    title: 'An American Tail: Fievel Goes West',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.4,
      },
      {
        id: 'popularity',
        rating: 52.578,
      },
    ],
    release_date: '1991-11-21',
  },
  {
    adult: false,
    backdrop_path: '/qFPSiVDvhuL7E30r83R2ZxGQjWe.jpg',
    genre_ids: [878, 53, 9648, 28, 12],
    id: 475210,
    original_language: 'en',
    original_title: 'How It Ends',
    overview:
      'A desperate father tries to return home to his pregnant wife after a mysterious apocalyptic event turns everything to chaos.',
    poster_path: '/prdFM08mGvVDA6uQxKJh8n8Vek1.jpg',
    title: 'How It Ends',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.2,
      },
      {
        id: 'popularity',
        rating: 52.557,
      },
    ],
    release_date: '2018-07-13',
  },
  {
    adult: false,
    backdrop_path: '/juc9wt7Eh2IarLL5S1yQ1a21O1A.jpg',
    genre_ids: [16, 10751, 35, 14],
    id: 360920,
    original_language: 'en',
    original_title: 'The Grinch',
    overview:
      'The Grinch hatches a scheme to ruin Christmas when the residents of Whoville plan their annual holiday celebration.',
    poster_path: '/stAu0oF6dYDhV5ssbmFUYkQPtCP.jpg',
    title: 'The Grinch',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 52.503,
      },
    ],
    release_date: '2018-11-08',
  },
  {
    adult: false,
    backdrop_path: '/hxFjtYQ1YuAAGeK13yHE2ylu5gM.jpg',
    genre_ids: [27, 9648],
    id: 23827,
    original_language: 'en',
    original_title: 'Paranormal Activity',
    overview:
      'After a young, middle-class couple moves into what seems like a typical suburban house, they become increasingly disturbed by a presence that may or may not be demonic but is certainly the most active in the middle of the night.  Followed by five terrifying installments in the franchise, this is the original found-footage shocker that started it all.',
    poster_path: '/1bjA7de4O0NhMsaOqwvrecophUs.jpg',
    title: 'Paranormal Activity',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 52.489,
      },
    ],
    release_date: '2009-09-25',
  },
  {
    adult: false,
    backdrop_path: '/yFRpUmsreYO5Bc0HVBTsJsHIIox.jpg',
    genre_ids: [12, 10751, 18],
    id: 481848,
    original_language: 'en',
    original_title: 'The Call of the Wild',
    overview:
      'Buck is a big-hearted dog whose blissful domestic life is turned upside down when he is suddenly uprooted from his California home and transplanted to the exotic wilds of the Yukon during the Gold Rush of the 1890s. As the newest rookie on a mail delivery dog sled team—and later its leader—Buck experiences the adventure of a lifetime, ultimately finding his true place in the world and becoming his own master.',
    poster_path: '/33VdppGbeNxICrFUtW2WpGHvfYc.jpg',
    title: 'The Call of the Wild',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 52.474,
      },
    ],
    release_date: '2020-02-19',
  },
  {
    adult: false,
    backdrop_path: '/lDxGguxqFy1ch8XElYaNXqw0CuN.jpg',
    genre_ids: [27, 53, 12],
    id: 578,
    original_language: 'en',
    original_title: 'Jaws',
    overview:
      'When an insatiable great white shark terrorizes the townspeople of Amity Island, the police chief, an oceanographer and a grizzled shark hunter seek to destroy the blood-thirsty beast.',
    poster_path: '/s2xcqSFfT6F7ZXHxowjxfG0yisT.jpg',
    title: 'Jaws',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 45.828,
      },
    ],
    release_date: '1975-06-18',
  },
  {
    adult: false,
    backdrop_path: '/4ml6eXieYnW6qv9qHwUUfDi0ntm.jpg',
    genre_ids: [35],
    id: 4256,
    original_language: 'en',
    original_title: 'Scary Movie 3',
    overview:
      'In the third installment of the Scary Movie franchise, news anchorwoman Cindy Campbell has to investigate mysterious crop circles and killing video tapes, and help the President stop an alien invasion in the process.',
    poster_path: '/gLTVGCtUfD80sMDkbxAiWNso7Ne.jpg',
    title: 'Scary Movie 3',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6,
      },
      {
        id: 'popularity',
        rating: 45.745,
      },
    ],
    release_date: '2003-10-24',
  },
  {
    adult: false,
    backdrop_path: '/yCRYYGldFGVa4cmZVpTVCRQMfjA.jpg',
    genre_ids: [28, 12, 18],
    id: 350312,
    original_language: 'te',
    original_title: 'బాహుబలి 2: ది కన్ క్లూజన్',
    overview:
      'When Mahendra, the son of Bāhubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.',
    poster_path: '/sXf30F2HFpsFPXlNz7jpOySSV9I.jpg',
    title: 'Bāhubali 2: The Conclusion',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.3,
      },
      {
        id: 'popularity',
        rating: 45.71,
      },
    ],
    release_date: '2017-04-27',
  },
  {
    adult: false,
    backdrop_path: '/yUrJTqCUKvfu0FWXm4xFJyZwGMG.jpg',
    genre_ids: [28, 14, 27],
    id: 72331,
    original_language: 'en',
    original_title: 'Abraham Lincoln: Vampire Hunter',
    overview:
      "President Lincoln's mother is killed by a supernatural creature, which fuels his passion to crush vampires and their slave-owning helpers.",
    poster_path: '/qv8deK0ZmutAuEpejruQKApIy6r.jpg',
    title: 'Abraham Lincoln: Vampire Hunter',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.7,
      },
      {
        id: 'popularity',
        rating: 45.696,
      },
    ],
    release_date: '2012-06-20',
  },
  {
    adult: false,
    backdrop_path: '/ummzpRlgm6iSP4wIsTmEZHHlkrG.jpg',
    genre_ids: [35],
    id: 566927,
    original_language: 'en',
    original_title: 'Impractical Jokers: The Movie',
    overview:
      'The story of a humiliating high school mishap from 1992 that sends the Impractical Jokers on the road competing in hidden-camera challenges for the chance to turn back the clock and redeem three of the four Jokers.',
    poster_path: '/kTHzM6pPIjs4LHX33thyZpnKiOP.jpg',
    title: 'Impractical Jokers: The Movie',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 45.678,
      },
    ],
    release_date: '2020-02-21',
  },
  {
    adult: false,
    backdrop_path: '/4YbHir4Ka4kG7WOdh0anXv1iT8s.jpg',
    genre_ids: [18, 35, 10751],
    id: 637920,
    original_language: 'tr',
    original_title: '7. Koğuştaki Mucize',
    overview:
      "Separated from his daughter, a father with an intellectual disability must prove his innocence when he is jailed for the death of a commander's child.",
    poster_path: '/bOth4QmNyEkalwahfPCfiXjNh1r.jpg',
    title: 'Miracle in Cell No. 7',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 8.3,
      },
      {
        id: 'popularity',
        rating: 45.674,
      },
    ],
    release_date: '2019-10-10',
  },
  {
    adult: false,
    backdrop_path: '/ix9WYBqQ2xSZCgyeQ1vVdrbaFa4.jpg',
    genre_ids: [28, 53],
    id: 107846,
    original_language: 'en',
    original_title: 'Escape Plan',
    overview:
      "Ray Breslin is the world's foremost authority on structural security. After analyzing every high security prison and learning a vast array of survival skills so he can design escape-proof prisons, his skills are put to the test. He's framed and incarcerated in a master prison he designed himself. He needs to escape and find the person who put him behind bars.",
    poster_path: '/zdnChkdppJjXl8lvwRz8vn6cs2s.jpg',
    title: 'Escape Plan',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 45.668,
      },
    ],
    release_date: '2013-10-09',
  },
  {
    adult: false,
    backdrop_path: '/qSx994cBgJ2jgc5Gx4hc3QjtJP0.jpg',
    genre_ids: [35],
    id: 8277,
    original_language: 'en',
    original_title: 'American Pie Presents: Beta House',
    overview:
      'Erik, Ryan, and Cooze start college and pledge the Beta House fraternity, presided over by none other than legendary Dwight Stifler. But chaos ensues when a fraternity of geeks threatens to stop the debauchery and the Betas have to make a stand for their right to party.',
    poster_path: '/cEJMqmCGdKJkmjWwi3Iv6l4kMIK.jpg',
    title: 'American Pie Presents: Beta House',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.6,
      },
      {
        id: 'popularity',
        rating: 45.654,
      },
    ],
    release_date: '2007-12-10',
  },
  {
    adult: false,
    backdrop_path: '/8JOPmJtSMUz5ljas4T6kSCTfMgd.jpg',
    genre_ids: [28, 36, 18],
    id: 520552,
    original_language: 'ru',
    original_title: 'Тобол',
    overview:
      'Ivan Demarin, a young officer of Peter the First’s new guards, follows the Tsar’s order and goes to the frontier town of Tobolsk, deep in the Siberian forest. There Ivan falls in love for the first time and he and his regiment happen to be involved in conspiracy of local princes who hunt for gold in the town of Yarkand. His fort is surrounded by hordes of wild Dzungars and there is no one to call for help…',
    poster_path: '/hH6uE66FA1UNbHkTgqFf20gBmI8.jpg',
    title: 'The Conquest Of Siberia',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.3,
      },
      {
        id: 'popularity',
        rating: 45.651,
      },
    ],
    release_date: '2019-02-21',
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [28, 16, 35],
    id: 371370,
    original_language: 'ja',
    original_title: 'Dragon Ball Z: Zenbu Misemasu Toshi Wasure Dragon Ball Z!',
    overview:
      'This movie is very different from the previous TV specials (Dragon Ball Z: Bardock - The Father of Goku and Dragon Ball Z: The History of Trunks), as it is a look back at what had happened in Dragon Ball Z in 1993.  In this film, which is believed to take place some time around the 25th World Martial Arts Tournament, Gohan and Goten are having a hot bath outside in the middle of winter. Goku (who is still dead) suddenly appears in front of his sons with the help of his Instant Transmission, and joins them in the tub. While there, the three Saiyans reflect back on the events that occurred during the Cell Games. Inside the house after Chi-Chi appeared, Goku tells his sons about Pikkon and the Other World Tournament.  Later, the four members of the Son family appear dressed nicely. Gohan says that the adult division of the Tournament will begin this next year (in 1994), and the special comes to an end.',
    poster_path: '/sOtvIOc65gmDdrAk3Eg01oH4gZY.jpg',
    title: 'Looking Back at it All: The Dragon Ball Z Year-End Show!',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.8,
      },
      {
        id: 'popularity',
        rating: 45.629,
      },
    ],
    release_date: '1993-12-31',
  },
  {
    adult: false,
    backdrop_path: '/4CCvDWKtmFms4tSTXeawA19sheU.jpg',
    genre_ids: [28, 80, 53],
    id: 278924,
    original_language: 'en',
    original_title: 'Mechanic: Resurrection',
    overview:
      'Arthur Bishop thought he had put his murderous past behind him when his most formidable foe kidnaps the love of his life. Now he is forced to travel the globe to complete three impossible assassinations, and do what he does best, make them look like accidents.',
    poster_path: '/3FUJT82YKY1EJ1dmunQhW5PUZAT.jpg',
    title: 'Mechanic: Resurrection',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 45.604,
      },
    ],
    release_date: '2016-08-25',
  },
  {
    adult: false,
    backdrop_path: '/auZIuHEUec5tBTns3tCRXfayxZq.jpg',
    genre_ids: [28, 878],
    id: 137113,
    original_language: 'en',
    original_title: 'Edge of Tomorrow',
    overview:
      'Major Bill Cage is an officer who has never seen a day of combat when he is unceremoniously demoted and dropped into combat. Cage is killed within minutes, managing to take an alpha alien down with him. He awakens back at the beginning of the same day and is forced to fight and die again... and again - as physical contact with the alien has thrown him into a time loop.',
    poster_path: '/uUHvlkLavotfGsNtosDy8ShsIYF.jpg',
    title: 'Edge of Tomorrow',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.6,
      },
      {
        id: 'popularity',
        rating: 45.562,
      },
    ],
    release_date: '2014-05-27',
  },
  {
    adult: false,
    backdrop_path: '/51O1TIrH4JYjfjZEn4Cb42SYEGy.jpg',
    genre_ids: [35, 27],
    id: 628446,
    original_language: 'en',
    original_title: 'Killer Sofa',
    overview:
      'Francesca always attracted weirdos. When one of her stalkers is found dead, she looks for comfort from her best friend, Maxi. Meanwhile, Maxi’s grandfather, Jack, a disgraced Rabbi, comes across a reclining chair containing a Dybbuk inside. Jack and his voodoo sorceress partner try to find out where the recliner has been delivered while exploring Jack’s newfound gift for communicating with the other world. Meanwhile the reclining chair becomes enchanted by Francesca and starts committing crimes of passion.',
    poster_path: '/zRA71SDccp0VJicyeOdC070LSxA.jpg',
    title: 'Killer Sofa',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.6,
      },
      {
        id: 'popularity',
        rating: 45.53,
      },
    ],
    release_date: '2019-10-28',
  },
  {
    adult: false,
    backdrop_path: '/3lf6YCItKcF3Wrrs7tp1PL0eyOT.jpg',
    genre_ids: [35, 10751, 16, 14, 10402],
    id: 23398,
    original_language: 'en',
    original_title: 'Alvin and the Chipmunks: The Squeakquel',
    overview:
      "Pop sensations Alvin, Simon and Theodore end up in the care of Dave Seville's twenty-something nephew Toby. The boys must put aside music super stardom to return to school, and are tasked with saving the school's music program by winning the $25,000 prize in a battle of the bands. But the Chipmunks unexpectedly meet their match in three singing chipmunks known as The Chipettes - Brittany, Eleanor and Jeanette. Romantic and musical sparks are ignited when the Chipmunks and Chipettes square off.",
    poster_path: '/8mdPqOga5fty15nXmaNcK1fsNMa.jpg',
    title: 'Alvin and the Chipmunks: The Squeakquel',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.7,
      },
      {
        id: 'popularity',
        rating: 45.441,
      },
    ],
    release_date: '2009-12-21',
  },
  {
    adult: false,
    backdrop_path: '/gpFBYlNHCaxiqArTI2TysgVy4l0.jpg',
    genre_ids: [18, 36],
    id: 583406,
    original_language: 'en',
    original_title: 'Judas and the Black Messiah',
    overview:
      "Bill O'Neal infiltrates the Black Panthers on the orders of FBI Agent Mitchell and J. Edgar Hoover. As Black Panther Chairman Fred Hampton ascends—falling for a fellow revolutionary en route—a battle wages for O’Neal’s soul.",
    poster_path: '/gPRy77DNDeLrvGyfloFqnZ7HA7o.jpg',
    title: 'Judas and the Black Messiah',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.5,
      },
      {
        id: 'popularity',
        rating: 45.435,
      },
    ],
    release_date: '2021-02-12',
  },
  {
    adult: false,
    backdrop_path: '/3tuWpnCTe14zZZPt6sI1W9ByOXx.jpg',
    genre_ids: [10749, 35],
    id: 114,
    original_language: 'en',
    original_title: 'Pretty Woman',
    overview:
      'When a millionaire wheeler-dealer enters a business contract with a Hollywood hooker Vivian Ward, he loses his heart in the bargain.',
    poster_path: '/hMVMMy1yDUvdufpTl8J8KKNYaZX.jpg',
    title: 'Pretty Woman',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 7.4,
      },
      {
        id: 'popularity',
        rating: 45.379,
      },
    ],
    release_date: '1990-03-23',
  },
  {
    adult: false,
    backdrop_path: '/b0iq262UxAQ3NWDLhBKEZAanBnZ.jpg',
    genre_ids: [99],
    id: 821969,
    original_language: 'en',
    original_title: 'The Legend of the Underground',
    overview:
      'A searing and timely look at the struggle against rampant discrimination in Nigeria today, as seen through the lens of several bold and charismatic, non-conformist youth who fight to live life out loud. Through social media, celebrity and creative expression, they spark a cultural debate that challenges the ideals of gender conformity and human rights in Nigeria.',
    poster_path: '/i388tln63NS5rI7e60cr8MWp6Ht.jpg',
    title: 'The Legend of the Underground',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.4,
      },
      {
        id: 'popularity',
        rating: 45.347,
      },
    ],
    release_date: '2021-06-10',
  },
  {
    adult: false,
    backdrop_path: '/doZDR89j4qSiVmkOioVvAXvLu91.jpg',
    genre_ids: [16, 14, 12, 18],
    id: 514710,
    original_language: 'ja',
    original_title: 'ちいさな英雄－カニとタマゴと透明人間－',
    overview:
      'Two tiny, aquatic humanoids search for their missing father, a boy battles a lethal allergy to eggs, and an invisible salaryman tries to become a hero.',
    poster_path: '/5jURYLaG6BX0klRHsiHc3pzOlOm.jpg',
    title: 'Modest Heroes',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.7,
      },
      {
        id: 'popularity',
        rating: 45.315,
      },
    ],
    release_date: '2018-08-24',
  },
  {
    adult: false,
    backdrop_path: '/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg',
    genre_ids: [28, 12, 878],
    id: 299537,
    original_language: 'en',
    original_title: 'Captain Marvel',
    overview:
      'The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.',
    poster_path: '/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
    title: 'Captain Marvel',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.9,
      },
      {
        id: 'popularity',
        rating: 186.648,
      },
    ],
    release_date: '2019-03-06',
  },
  {
    adult: false,
    backdrop_path: '/qwtgsc5pWRdWOgD6OCFIVkqSDPn.jpg',
    genre_ids: [27],
    id: 9532,
    original_language: 'en',
    original_title: 'Final Destination',
    overview:
      'After a teenager has a terrifying vision of him and his friends dying in a plane crash, he prevents the accident only to have Death hunt them down, one by one.',
    poster_path: '/418vOdcfd268Fs0Zk9Jdaokn8l2.jpg',
    title: 'Final Destination',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 6.5,
      },
      {
        id: 'popularity',
        rating: 45.3,
      },
    ],
    release_date: '2000-03-17',
  },
  {
    adult: false,
    backdrop_path: '/qtb0cimYnAhkKEuV4nvHgJV747q.jpg',
    genre_ids: [27, 35],
    id: 24831,
    original_language: 'en',
    original_title: 'Piranha',
    overview:
      "When flesh-eating piranhas are accidently released into a summer resort's rivers, the guests become their next meal.",
    poster_path: '/52d13jkFw7hpunU8WK6AmJy9jTF.jpg',
    title: 'Piranha',
    video: false,
    ratings: [
      {
        id: 'imdb',
        rating: 5.9,
      },
      {
        id: 'popularity',
        rating: 45.286,
      },
    ],
    release_date: '1978-08-03',
  },
];
let movies = orderBy(response, [
  (movie) => {
    return movie.ratings.find((rating) => rating.id === 'imdb')?.rating || 0;
  },
]);

movies = uniqBy(movies, 'id');

export { movies };
