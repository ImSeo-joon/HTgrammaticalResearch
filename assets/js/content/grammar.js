window.GTL_CONTENT = window.GTL_CONTENT || {};

window.GTL_CONTENT.grammar = {
  meta: {
    zh: {
      title: "文法 — 文字的骨骼与文学的传统 | 高桌文法研究中心",
      description: "从汉字、拉丁字母与假名出发，细读中国、日本与西方的文学传统，练习一种更慢、更准的读法。"
    },
    en: {
      title: "Grammar — the bones of writing | High Table Grammatical Research Center",
      description: "Chinese characters, the Latin alphabet and kana; close reading across Chinese, Japanese and Western literature."
    },
    fr: {
      title: "Grammaire — l'ossature de l'écriture | Centre de recherche grammaticale de la Haute Table",
      description: "Caractères chinois, alphabet latin et kana ; une lecture lente et précise des lettres chinoises, japonaises et occidentales."
    }
  },

  page: {
    zh: {
      hero: {
        eyebrow: "模块一 · 文法",
        title: "文法",
        latin: "GRAMMAR & LETTERS",
        lede: "文字是文明的指纹。我们从汉字、拉丁字母与假名出发，穿过中国、日本与西方的文学传统，练习一种更慢、更准的读法。",
        tags: ["中西文字研究", "西方文学", "日本文学", "中国文学"]
      },
      sections: [
        {
          id: "writing-systems",
          kicker: "文字的骨骼",
          title: "三种文字，三种看世界的方式",
          lede: "文字不只是记录语言的声音，它也悄悄规定了我们如何切分世界、如何记忆时间。",
          blocks: [
            {
              type: "p",
              text: "汉字以形、音、义三者交织。一个“安”字，是屋顶之下有人；一个“间”字，是门缝里透进月光。字形本身携带着生活史，读古文时，我们其实在同时读语法与图像。"
            },
            {
              type: "p",
              text: "拉丁字母把语言拆成有限的音素，再用空格与标点把意义排成一条向前的线。它擅长分析、分类与推论，也塑造了西方哲学对“定义”的迷恋。"
            },
            {
              type: "p",
              text: "日文把汉字、平假名与片假名混写在同一个句子里：汉字承担意义，平假名承担语法，片假名迎接外来语。读日文时，你能看见句子在社会关系中的层次。"
            },
            {
              type: "cards",
              items: [
                {
                  title: "汉字 · 表意与形声",
                  text: "字是意义的容器，也是历史的沉积层。"
                },
                {
                  title: "拉丁字母 · 音素与线性",
                  text: "把声音拆开，再按逻辑重新排列。"
                },
                {
                  title: "假名 · 语法可见",
                  text: "助词与词尾在纸面上显形，关系的礼貌也随之可见。"
                }
              ]
            },
            {
              type: "quote",
              text: "文字不是语言的影子，而是语言的家。",
              cite: "本站札记"
            },
            {
              type: "practice",
              title: "练习 · 三种颜色",
              items: [
                "抄写一段你熟悉的文字，用三种颜色标出：承载意义的字、承担语法功能的字、只负责声音的字。"
              ]
            }
          ]
        },
        {
          id: "close-reading",
          kicker: "细读",
          title: "从一句话进入一个世界",
          lede: "细读不是把每个字都解释一遍，而是找出这句话为何非这样说不可。",
          blocks: [
            {
              type: "p",
              text: "第一遍，只管声音。读出节奏、停顿和气口，先别急着理解。第二遍，画结构：谁在说，对谁说，什么被省略，什么被重复。第三遍，只追一个词，看它在句中如何变形。"
            },
            {
              type: "p",
              text: "《古诗十九首》里写“行行重行行，与君生别离”。两个“行”叠在一起，路被拉长；“重”又叠上去，脚步变得沉重。没有一句直接说“我很痛苦”，但距离已经在声音里。"
            },
            {
              type: "p",
              text: "西方小说常把自我放在意识的暗室里。读《追忆似水年华》，要注意的不是情节推进，而是叙述者如何在一块玛德莱娜蛋糕里，把整个过去召回。"
            },
            {
              type: "p",
              text: "日本文学善于写“间”——没有说出的部分。《枕草子》一句“春，曙为最”，季节、光线与心情同时出现，余下的交给读者。"
            },
            {
              type: "practice",
              title: "练习 · 抽掉形容词",
              items: [
                "选一句你喜欢的话，删去所有形容词，再读一遍。看看剩下的是骨头，还是伤口。"
              ]
            }
          ]
        },
        {
          id: "traditions",
          kicker: "三条传统",
          title: "中国、日本与西方：三种“自我”的写法",
          lede: "比较文学不是给传统排名，而是借别人的镜子看清自己的轮廓。",
          blocks: [
            {
              type: "table",
              caption: "一张并不完整的比较表",
              head: ["传统", "自我", "常用手法", "一个入口"],
              rows: [
                ["中国 · 抒情与史传", "在关系与时代中安放自我", "比兴、留白、白描", "《诗经》《史记》"],
                ["日本 · 物哀与随笔", "在季节与无常中感受自我", "间、季语、日记体", "《枕草子》《源氏物语》"],
                ["西方 · 史诗与小说", "在冲突与内省中塑造自我", "视角、反讽、意识流", "《奥德赛》《包法利夫人》"]
              ]
            },
            {
              type: "p",
              text: "这些只是入口，不是边界。中国也有庞大的叙事传统，日本也有冷峻的社会小说，西方也有极简的抒情诗。传统像河流，越到下游，交汇越多。"
            },
            {
              type: "note",
              title: "读法提示",
              text: "读比较文学时，先问“它如何处理时间”，再问“它让谁拥有说话的权利”。这两个问题往往比“它属于哪个流派”更有用。"
            }
          ]
        },
        {
          id: "translation",
          kicker: "翻译",
          title: "翻译是最慢的细读",
          lede: "译者必须替作者做决定：哪个词可以失去，哪个语气必须留下。",
          blocks: [
            {
              type: "p",
              text: "“月色很好”几乎是一句喃喃自语，轻、近、带一点不好意思。译成“The moonlight is lovely”，它变成了一句判断；译成“Le clair de lune est beau”，它又获得了一种古典的清晰。翻译总是在得失之间，为另一种语言重新安排呼吸。"
            },
            {
              type: "p",
              text: "不可译的往往不是词，而是词与词之间的距离。翻译训练我们承认损失，并在损失中寻找新的准确。"
            },
            {
              type: "practice",
              title: "练习 · 两版短诗",
              items: [
                "找一首短诗，先逐字直译，再改写成你母语里自然的三行。比较两版：你为了“好听”放弃了什么？"
              ]
            }
          ]
        },
        {
          id: "reading-table",
          kicker: "书桌",
          title: "一张入门书单",
          lede: "不必一次读完。把它们放在手边，像放几把不同的钥匙。",
          blocks: [
            {
              type: "cards",
              items: [
                {
                  title: "中国 · 《诗经》",
                  text: "先读《蒹葭》与《氓》，看比兴如何把情感放进风景。"
                },
                {
                  title: "中国 · 《史记·项羽本纪》",
                  text: "看司马迁如何用细节判断一个人。"
                },
                {
                  title: "日本 · 《枕草子》",
                  text: "读清少纳言的“可憎之物”，学会用清单写性情。"
                },
                {
                  title: "日本 · 《雪国》",
                  text: "注意川端康成如何让空白承担叙事。"
                },
                {
                  title: "西方 · 《奥德赛》",
                  text: "看归乡如何被拖延成故事。"
                },
                {
                  title: "西方 · 《包法利夫人》",
                  text: "看福楼拜如何用自由间接引语让讽刺变得温柔。"
                }
              ]
            },
            {
              type: "practice",
              title: "练习 · 三个问题",
              items: [
                "从书单里选一本，只读十页，然后写下三个问题。问题比结论更值得保存。"
              ]
            }
          ]
        }
      ],
      next: {
        title: "情绪",
        href: "mind.html"
      }
    },

    en: {
      hero: {
        eyebrow: "Module one · Grammar",
        title: "Grammar",
        latin: "GRAMMAR & LETTERS",
        lede: "Writing is a civilisation's fingerprint. Starting from Chinese characters, the Latin alphabet and kana, we cross the literary traditions of China, Japan and the West, practising a slower and more exact way of reading.",
        tags: ["Writing systems", "Western literature", "Japanese literature", "Chinese literature"]
      },
      sections: [
        {
          id: "writing-systems",
          kicker: "The bones of writing",
          title: "Three writing systems, three ways of seeing the world",
          lede: "Writing does more than record the sound of speech. It quietly decides how we divide the world and how we remember time.",
          blocks: [
            {
              type: "p",
              text: "Chinese characters braid form, sound and meaning. In 安, “peace”, a person sits beneath a roof; in 間, “interval”, moonlight enters through a gap in a door. The graph carries a history of living: reading classical Chinese, we read grammar and image at once."
            },
            {
              type: "p",
              text: "The Latin alphabet breaks language into a finite set of phonemes, then spaces and punctuation arrange meaning into a forward line. It is good at analysis, classification and inference; it also shaped Western philosophy's love of definition."
            },
            {
              type: "p",
              text: "Japanese writes kanji, hiragana and katakana in one sentence: kanji carry meaning, hiragana carry grammar, katakana welcome foreign words. Reading Japanese, you see the layers of a sentence's social relations."
            },
            {
              type: "cards",
              items: [
                {
                  title: "Chinese characters · meaning and sound",
                  text: "The graph is a vessel of meaning and a sediment of history."
                },
                {
                  title: "Latin alphabet · phoneme and line",
                  text: "Sound is broken apart, then rearranged by logic."
                },
                {
                  title: "Kana · grammar made visible",
                  text: "Particles and endings appear on the page; politeness becomes visible too."
                }
              ]
            },
            {
              type: "quote",
              text: "Writing is not the shadow of speech; it is the house speech lives in.",
              cite: "Notes from the table"
            },
            {
              type: "practice",
              title: "Exercise · three colours",
              items: [
                "Copy a passage you know well. Mark three things in three colours: characters that carry meaning, characters that carry grammar, and signs that carry only sound."
              ]
            }
          ]
        },
        {
          id: "close-reading",
          kicker: "Close reading",
          title: "From one sentence into a world",
          lede: "Close reading is not explaining every word. It is discovering why this sentence had to be said in this way.",
          blocks: [
            {
              type: "p",
              text: "On the first pass, listen only to sound: rhythm, pause, breath. Do not hurry to understand. On the second, draw the structure: who speaks, to whom, what is omitted, what returns. On the third, follow a single word and watch how it changes inside the sentence."
            },
            {
              type: "p",
              text: "In the Han poem “Nineteen Old Poems”, the line “On and on, again and on” repeats the journey until the road stretches; “again” adds weight to every step. The poem never says “I am in pain”, yet the distance is already in the sound."
            },
            {
              type: "p",
              text: "The Western novel often places the self in a dark room of consciousness. Reading Proust, follow less the plot than the way the narrator recovers an entire past from a madeleine."
            },
            {
              type: "p",
              text: "Japanese literature is expert in ma — the part left unsaid. “In spring, dawn is best” from The Pillow Book gives season, light and mood at once, and hands the rest to the reader."
            },
            {
              type: "practice",
              title: "Exercise · remove the adjectives",
              items: [
                "Choose a sentence you love. Delete every adjective and read it again. Ask what remains: bone, or wound?"
              ]
            }
          ]
        },
        {
          id: "traditions",
          kicker: "Three traditions",
          title: "China, Japan and the West: three ways of writing the self",
          lede: "Comparative literature is not a ranking of traditions. It is the use of another mirror to see one's own outline.",
          blocks: [
            {
              type: "table",
              caption: "A deliberately incomplete comparison",
              head: ["Tradition", "The self", "Common devices", "An entry point"],
              rows: [
                ["China · lyric and history", "placed within relationship and era", "allusion, restraint, plain description", "Book of Songs; Records of the Grand Historian"],
                ["Japan · mono no aware and the essay", "felt through season and impermanence", "ma, seasonal words, diary form", "The Pillow Book; The Tale of Genji"],
                ["The West · epic and novel", "formed through conflict and introspection", "point of view, irony, stream of consciousness", "The Odyssey; Madame Bovary"]
              ]
            },
            {
              type: "p",
              text: "These are entrances, not borders. China has vast narrative traditions; Japan has severe social fiction; the West has spare lyric poetry. Traditions are rivers: the further downstream, the more they meet."
            },
            {
              type: "note",
              title: "A note on method",
              text: "When reading across traditions, first ask how the work handles time; then ask who is given the right to speak. These questions are usually more useful than asking which school it belongs to."
            }
          ]
        },
        {
          id: "translation",
          kicker: "Translation",
          title: "Translation is the slowest close reading",
          lede: "The translator must decide, on the author's behalf, which word may be lost and which tone must survive.",
          blocks: [
            {
              type: "p",
              text: "The Chinese 月色很好 is almost a murmur: light, close, slightly shy. “The moonlight is lovely” turns it into a verdict; “Le clair de lune est beau” gives it a classical clarity. Translation always rearranges breath between gain and loss."
            },
            {
              type: "p",
              text: "What cannot be translated is often not the word but the distance between words. Translation trains us to admit loss and to look for a new exactness inside it."
            },
            {
              type: "practice",
              title: "Exercise · two versions",
              items: [
                "Take a short poem. Translate it literally, word by word; then rewrite it as three natural lines in your own language. Compare the versions: what did you give up in order to make it sound good?"
              ]
            }
          ]
        },
        {
          id: "reading-table",
          kicker: "The desk",
          title: "A small reading table",
          lede: "You do not need to finish them at once. Keep them within reach, like several different keys.",
          blocks: [
            {
              type: "cards",
              items: [
                {
                  title: "China · Book of Songs",
                  text: "Begin with “Reeds” and “A Faithless Man”; watch how feeling is placed inside landscape."
                },
                {
                  title: "China · Records of the Grand Historian: Xiang Yu",
                  text: "See how Sima Qian judges a person through detail."
                },
                {
                  title: "Japan · The Pillow Book",
                  text: "Read Sei Shōnagon's “hateful things”; learn to write character as a list."
                },
                {
                  title: "Japan · Snow Country",
                  text: "Notice how Kawabata lets blank space carry the story."
                },
                {
                  title: "The West · The Odyssey",
                  text: "See how homecoming is delayed into a story."
                },
                {
                  title: "The West · Madame Bovary",
                  text: "See how Flaubert makes irony tender through free indirect speech."
                }
              ]
            },
            {
              type: "practice",
              title: "Exercise · three questions",
              items: [
                "Choose one book from the table. Read ten pages only, then write down three questions. Questions are worth keeping longer than conclusions."
              ]
            }
          ]
        }
      ],
      next: {
        title: "Emotion",
        href: "mind.html"
      }
    },

    fr: {
      hero: {
        eyebrow: "Module un · Grammaire",
        title: "Grammaire",
        latin: "GRAMMAIRE & LETTRES",
        lede: "L'écriture est l'empreinte d'une civilisation. Des caractères chinois à l'alphabet latin et aux kana, nous traversons les traditions littéraires de Chine, du Japon et d'Occident, pour exercer une lecture plus lente et plus exacte.",
        tags: ["Écritures comparées", "Littérature occidentale", "Littérature japonaise", "Littérature chinoise"]
      },
      sections: [
        {
          id: "writing-systems",
          kicker: "L'ossature de l'écriture",
          title: "Trois écritures, trois façons de voir le monde",
          lede: "L'écriture ne se contente pas de noter les sons. Elle décide aussi, sans bruit, de notre manière de découper le monde et de nous souvenir du temps.",
          blocks: [
            {
              type: "p",
              text: "Les caractères chinois tissent forme, son et sens. Dans 安, « paix », une personne repose sous un toit ; dans 間, « intervalle », la lumière entre par une fente de porte. Le graphème porte une histoire de la vie : lire le chinois classique, c'est lire grammaire et image ensemble."
            },
            {
              type: "p",
              text: "L'alphabet latin décompose la langue en un nombre fini de phonèmes, puis les espaces et la ponctuation disposent le sens en une ligne qui avance. Il excelle à analyser, classer, déduire ; il a aussi façonné le goût occidental pour la définition."
            },
            {
              type: "p",
              text: "Le japonais mêle kanji, hiragana et katakana dans une même phrase : les kanji portent le sens, les hiragana la grammaire, les katakana accueillent les mots étrangers. Lire le japonais, c'est voir les couches sociales d'une phrase."
            },
            {
              type: "cards",
              items: [
                {
                  title: "Caractères chinois · sens et son",
                  text: "Le signe est un réceptacle de sens et un sédiment d'histoire."
                },
                {
                  title: "Alphabet latin · phonème et ligne",
                  text: "Le son est divisé, puis réorganisé par la logique."
                },
                {
                  title: "Kana · la grammaire visible",
                  text: "Particules et terminaisons affleurent ; la politesse aussi."
                }
              ]
            },
            {
              type: "quote",
              text: "L'écriture n'est pas l'ombre de la parole ; elle est la maison où la parole habite.",
              cite: "Notes de la table"
            },
            {
              type: "practice",
              title: "Exercice · trois couleurs",
              items: [
                "Recopiez un passage que vous connaissez. Marquez en trois couleurs les signes qui portent le sens, ceux qui portent la grammaire et ceux qui ne portent que le son."
              ]
            }
          ]
        },
        {
          id: "close-reading",
          kicker: "Lecture attentive",
          title: "Entrer dans un monde par une phrase",
          lede: "Lire attentivement, ce n'est pas expliquer chaque mot. C'est découvrir pourquoi cette phrase devait être dite ainsi.",
          blocks: [
            {
              type: "p",
              text: "Première lecture : le son seul. Le rythme, la pause, le souffle. Ne cherchez pas encore à comprendre. Deuxième lecture : dessinez la structure. Qui parle, à qui, que tait-on, que répète-t-on ? Troisième lecture : suivez un seul mot et regardez-le se transformer dans la phrase."
            },
            {
              type: "p",
              text: "Dans les « Dix-neuf poèmes anciens », le vers « On marche, on marche, encore on marche » allonge la route par la répétition ; « encore » alourdit le pas. Le poème ne dit jamais « j'ai mal » : la distance est déjà dans le son."
            },
            {
              type: "p",
              text: "Le roman occidental place souvent le moi dans une chambre noire de la conscience. Chez Proust, suivez moins l'intrigue que la manière dont le narrateur rappelle tout un passé depuis une madeleine."
            },
            {
              type: "p",
              text: "La littérature japonaise excelle dans le ma — ce qui n'est pas dit. « Au printemps, l'aube est ce qu'il y a de plus beau », dans Notes de chevet, donne à la fois saison, lumière et humeur, et confie le reste au lecteur."
            },
            {
              type: "practice",
              title: "Exercice · retirer les adjectifs",
              items: [
                "Choisissez une phrase que vous aimez. Supprimez tous les adjectifs et relisez-la. Que reste-t-il : un os, ou une blessure ?"
              ]
            }
          ]
        },
        {
          id: "traditions",
          kicker: "Trois traditions",
          title: "Chine, Japon, Occident : trois manières d'écrire le moi",
          lede: "La littérature comparée n'est pas un classement des traditions. C'est l'usage d'un autre miroir pour apercevoir son propre contour.",
          blocks: [
            {
              type: "table",
              caption: "Une comparaison volontairement incomplète",
              head: ["Tradition", "Le moi", "Procédés", "Une entrée"],
              rows: [
                ["Chine · lyrisme et histoire", "situé dans la relation et l'époque", "allusion, réserve, trait simple", "Livre des Odes ; Mémoires historiques"],
                ["Japon · mono no aware et essai", "éprouvé dans la saison et l'impermanence", "ma, mot de saison, journal", "Notes de chevet ; Genji"],
                ["Occident · épopée et roman", "formé par le conflit et l'introspection", "point de vue, ironie, flux de conscience", "L'Odyssée ; Madame Bovary"]
              ]
            },
            {
              type: "p",
              text: "Ce sont des entrées, non des frontières. La Chine possède de vastes traditions narratives ; le Japon, des romans sociaux très durs ; l'Occident, une poésie lyrique dépouillée. Les traditions sont des fleuves : plus on descend, plus ils se rencontrent."
            },
            {
              type: "note",
              title: "Note de méthode",
              text: "Pour lire entre les traditions, demandez d'abord comment l'œuvre traite le temps ; demandez ensuite à qui l'on donne le droit de parler. Ces questions sont souvent plus utiles que celle de l'école littéraire."
            }
          ]
        },
        {
          id: "translation",
          kicker: "Traduction",
          title: "Traduire est la plus lente des lectures",
          lede: "Le traducteur doit décider, à la place de l'auteur, quel mot peut se perdre et quel ton doit demeurer.",
          blocks: [
            {
              type: "p",
              text: "Le chinois 月色很好 est presque un murmure : léger, proche, un peu timide. « Le clair de lune est beau » en fait un constat ; « The moonlight is lovely » y ajoute une politesse anglaise. La traduction réorganise toujours le souffle entre perte et gain."
            },
            {
              type: "p",
              text: "L'intraduisible n'est souvent pas le mot, mais la distance entre les mots. Traduire nous apprend à admettre la perte et à chercher une autre justesse à l'intérieur d'elle."
            },
            {
              type: "practice",
              title: "Exercice · deux versions",
              items: [
                "Prenez un poème court. Traduisez-le d'abord mot à mot, puis réécrivez-le en trois vers naturels dans votre langue. Comparez : qu'avez-vous sacrifié pour que cela sonne juste ?"
              ]
            }
          ]
        },
        {
          id: "reading-table",
          kicker: "Le bureau",
          title: "Une petite table de lecture",
          lede: "Nul besoin de tout finir d'un coup. Gardez-les à portée de main, comme plusieurs clés différentes.",
          blocks: [
            {
              type: "cards",
              items: [
                {
                  title: "Chine · Livre des Odes",
                  text: "Commencez par « Les Roseaux » et « L'Homme sans foi » ; voyez comment le sentiment se loge dans le paysage."
                },
                {
                  title: "Chine · Mémoires historiques : Xiang Yu",
                  text: "Voyez comment Sima Qian juge un homme par le détail."
                },
                {
                  title: "Japon · Notes de chevet",
                  text: "Lisez les « choses détestables » de Sei Shōnagon ; apprenez à écrire un caractère sous forme de liste."
                },
                {
                  title: "Japon · Pays de neige",
                  text: "Remarquez comment Kawabata laisse le blanc porter le récit."
                },
                {
                  title: "Occident · L'Odyssée",
                  text: "Voyez comment le retour est différé jusqu'à devenir une histoire."
                },
                {
                  title: "Occident · Madame Bovary",
                  text: "Voyez comment Flaubert rend l'ironie tendre par le discours indirect libre."
                }
              ]
            },
            {
              type: "practice",
              title: "Exercice · trois questions",
              items: [
                "Choisissez un livre de la table. Lisez seulement dix pages, puis notez trois questions. Les questions se gardent plus longtemps que les conclusions."
              ]
            }
          ]
        }
      ],
      next: {
        title: "Émotion",
        href: "mind.html"
      }
    }
  }
};
