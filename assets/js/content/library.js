window.GTL_LIBRARY = {
  meta: {
    zh: {
      title: "语言文字资料库 — 文学、文字研究、语言学、社会学、心理学与经济学 | 高桌文法研究中心",
      description: "一份可检索的三语研究书目：文学、文字研究、语言学、社会学、心理学与经济学文献，附摘要、阅读视角与来源。"
    },
    en: {
      title: "Language & Text Library — literature, writing, language, society, psychology and economics | High Table Grammatical Research Center",
      description: "A searchable trilingual research bibliography with summaries, reading lenses and sources across literature, writing, language, sociology, psychology and economics."
    },
    fr: {
      title: "Bibliothèque des langues et des textes — littérature, écritures, langue, société, psychologie et économie | Centre de recherche grammaticale de la Haute Table",
      description: "Une bibliographie de recherche trilingue et consultable : littérature, écritures, linguistique, sociologie, psychologie et économie, avec résumés, angles de lecture et sources."
    }
  },

  page: {
    zh: {
      eyebrow: "模块六 · 语言文字资料库",
      title: "语言文字资料库",
      latin: "LITERATURE · WRITING · LANGUAGE · SOCIETY · PSYCHOLOGY · ECONOMICS",
      lede: "一份可以按类别、地区和关键词进入的比较阅读书目。它不是“必读书单”，而是一组互相照亮的入口：从诗歌如何安放情绪，到文字如何塑造记忆；从一句话如何行动，到社会如何进入语言。",
      tags: ["文学与文本", "文字与书写", "语言与翻译", "社会与思想", "心理学", "经济学"]
    },
    en: {
      eyebrow: "Module six · Research library",
      title: "Language & Text Library",
      latin: "LITERATURE · WRITING · LANGUAGE · SOCIETY · PSYCHOLOGY · ECONOMICS",
      lede: "A comparative reading catalogue that can be entered by category, region or keyword. Not a canon of required books, but a set of mutually illuminating doors: how poetry holds feeling, how writing shapes memory, how words act, and how society enters language.",
      tags: ["Literature", "Writing & text", "Language & translation", "Society & thought", "Psychology", "Economics"]
    },
    fr: {
      eyebrow: "Module six · Bibliothèque de recherche",
      title: "Bibliothèque des langues et des textes",
      latin: "LITTÉRATURE · ÉCRITURES · LANGUE · SOCIÉTÉ · PSYCHOLOGIE · ÉCONOMIE",
      lede: "Un catalogue de lecture comparée à parcourir par catégorie, région ou mot-clé. Non pas une liste d'ouvrages obligatoires, mais des portes qui s'éclairent mutuellement : comment la poésie accueille le sentiment, l'écriture façonne la mémoire, les mots agissent et la société entre dans la langue.",
      tags: ["Littérature", "Écritures et textes", "Langue et traduction", "Société et pensée", "Psychologie", "Économie"]
    }
  },

  ui: {
    zh: {
      catalogueLabel: "研究书目",
      filterLabel: "按类别筛选",
      searchLabel: "搜索",
      searchPlaceholder: "题名、作者或摘要…",
      regionLabel: "地区",
      allRegions: "所有地区",
      all: "全部",
      resultOne: "1 条文献",
      results: "{count} 条文献",
      noResults: "没有符合当前筛选的文献。",
      reset: "重置筛选",
      source: "来源",
      openSource: "打开来源",
      readingLens: "阅读视角",
      methodTitle: "使用说明",
      methodText: "这里的摘要是研究入口，不是对原作的替代。版权作品请通过图书馆、出版社或所在机构的数据库获取；公版文本只链接到可公开访问的档案。",
      sourceNote: "书目信息按作品原始出版信息整理；不同译本的书名、年份与页码可能不同。"
    },
    en: {
      catalogueLabel: "Research catalogue",
      filterLabel: "Filter by category",
      searchLabel: "Search",
      searchPlaceholder: "Title, author or summary…",
      regionLabel: "Region",
      allRegions: "All regions",
      all: "All",
      resultOne: "1 work",
      results: "{count} works",
      noResults: "No works match the current filters.",
      reset: "Reset filters",
      source: "Source",
      openSource: "Open source",
      readingLens: "Reading lens",
      methodTitle: "How to use this library",
      methodText: "These summaries are doors into further study, not substitutes for the works themselves. For works in copyright, use a library, publisher or institutional database; public-domain texts link only to openly accessible archives.",
      sourceNote: "Bibliographic details follow original publication data; titles, dates and pagination may differ between editions and translations."
    },
    fr: {
      catalogueLabel: "Catalogue de recherche",
      filterLabel: "Filtrer par catégorie",
      searchLabel: "Rechercher",
      searchPlaceholder: "Titre, auteur ou résumé…",
      regionLabel: "Région",
      allRegions: "Toutes les régions",
      all: "Tous",
      resultOne: "1 ouvrage",
      results: "{count} ouvrages",
      noResults: "Aucun ouvrage ne correspond aux filtres actuels.",
      reset: "Réinitialiser",
      source: "Source",
      openSource: "Ouvrir la source",
      readingLens: "Angle de lecture",
      methodTitle: "Mode d'emploi",
      methodText: "Ces résumés sont des seuils vers une étude plus approfondie, non des substituts aux œuvres. Pour les œuvres protégées, passez par une bibliothèque, un éditeur ou une base institutionnelle ; les textes du domaine public ne renvoient qu'à des archives librement accessibles.",
      sourceNote: "Les données bibliographiques suivent l'édition originale ; les titres, dates et paginations varient selon les éditions et traductions."
    }
  },

  categories: [
    {
      key: "literature",
      label: { zh: "文学", en: "Literature", fr: "Littérature" },
      intro: {
        zh: "诗歌、史诗、小说与戏剧：作品如何组织经验、记忆与共同体。",
        en: "Poetry, epic, fiction and drama: how works organise experience, memory and community.",
        fr: "Poésie, épopée, roman et théâtre : comment les œuvres organisent l'expérience, la mémoire et la communauté."
      }
    },
    {
      key: "writing",
      label: { zh: "文字研究", en: "Writing & textual research", fr: "Écritures et critique textuelle" },
      intro: {
        zh: "书写系统、古文字、文本流传与阅读技术，关注“字”如何成为制度。",
        en: "Scripts, paleography, textual transmission and reading technologies: how writing becomes an institution.",
        fr: "Écritures, paléographie, transmission des textes et techniques de lecture : comment l'écrit devient institution."
      }
    },
    {
      key: "language",
      label: { zh: "语言学", en: "Linguistics & translation", fr: "Linguistique et traduction" },
      intro: {
        zh: "意义、语法、言语行为与翻译：语言如何构造并改变我们所见的世界。",
        en: "Meaning, grammar, speech acts and translation: how language constructs and changes the world we see.",
        fr: "Sens, grammaire, actes de parole et traduction : comment la langue construit et transforme le monde perçu."
      }
    },
    {
      key: "society",
      label: { zh: "社会学", en: "Sociology & social thought", fr: "Sociologie et pensée sociale" },
      intro: {
        zh: "自我、关系、制度与权力：把个人困扰放回社会结构和历史之中。",
        en: "Self, relationship, institution and power: returning personal troubles to social structure and history.",
        fr: "Soi, relation, institution et pouvoir : replacer les difficultés personnelles dans les structures et l'histoire."
      }
    },
    {
      key: "psychology",
      label: { zh: "心理学", en: "Psychology", fr: "Psychologie" },
      intro: {
        zh: "知觉、记忆、依恋与判断：理解感受如何形成，也警惕心理学的概念被过度简化。",
        en: "Perception, memory, attachment and judgment: how feeling takes shape, and why psychological concepts need careful use.",
        fr: "Perception, mémoire, attachement et jugement : comment le sentiment prend forme, et pourquoi les concepts psychologiques exigent de la prudence."
      }
    },
    {
      key: "economics",
      label: { zh: "经济学", en: "Economics", fr: "Économie" },
      intro: {
        zh: "市场、劳动、制度与发展：比较不同理论如何解释财富、选择与公共生活。",
        en: "Markets, labour, institutions and development: competing explanations of wealth, choice and public life.",
        fr: "Marchés, travail, institutions et développement : des explications concurrentes de la richesse, du choix et de la vie publique."
      }
    }
  ],

  regions: [
    { key: "china", label: { zh: "中国", en: "China", fr: "Chine" } },
    { key: "japan", label: { zh: "日本", en: "Japan", fr: "Japon" } },
    { key: "india", label: { zh: "印度", en: "India", fr: "Inde" } },
    { key: "middle-east", label: { zh: "中东", en: "Middle East", fr: "Moyen-Orient" } },
    { key: "europe", label: { zh: "欧洲", en: "Europe", fr: "Europe" } },
    { key: "africa", label: { zh: "非洲", en: "Africa", fr: "Afrique" } },
    { key: "americas", label: { zh: "美洲", en: "Americas", fr: "Amériques" } },
    { key: "oceania", label: { zh: "大洋洲", en: "Oceania", fr: "Océanie" } },
    { key: "global", label: { zh: "跨地域", en: "Transnational", fr: "Transnational" } }
  ],

  resources: [
    {
      id: "shijing",
      category: "literature",
      region: "china",
      year: "c. 11th–6th c. BCE",
      title: { zh: "《诗经》", en: "Book of Songs (Shijing)", fr: "Livre des Odes (Shijing)" },
      author: "佚名辑录 / Anonymous compilers",
      summary: {
        zh: "中国现存最早的诗歌总集，收录风、雅、颂中的三百余首诗，涉及劳作、婚恋、宴饮、祭祀与政治讽喻。重复、起兴和草木意象让情绪落在具体的季节与生活秩序里。",
        en: "China's earliest extant poetry anthology, with more than three hundred poems in the Feng, Ya and Song sections. Work, courtship, feasting, ritual and political critique are carried through repetition, incipit imagery and the names of plants and seasons.",
        fr: "La plus ancienne anthologie poétique conservée en Chine réunit plus de trois cents poèmes des sections Feng, Ya et Song. Travail, amour, banquets, rites et critique politique passent par la répétition, l'image inaugurale et les noms des plantes et des saisons."
      },
      lens: {
        zh: "观察“兴”如何把私人情绪放进自然与公共秩序，而不是直接命名感受。",
        en: "Watch how the incipit image places private feeling inside landscape and public order instead of naming emotion directly.",
        fr: "Observez comment l'image initiale inscrit le sentiment privé dans le paysage et l'ordre public sans le nommer directement."
      },
      source: { label: "Chinese Text Project — Book of Poetry", url: "https://ctext.org/book-of-poetry" }
    },
    {
      id: "genji",
      category: "literature",
      region: "japan",
      year: "c. 1008",
      title: { zh: "《源氏物语》", en: "The Tale of Genji", fr: "Le Dit du Genji" },
      author: "紫式部 / Murasaki Shikibu",
      summary: {
        zh: "以光源氏及其后代为中心的长篇宫廷叙事，细致描写恋爱、权力、审美与无常。人物关系被季节、衣物、书信和空间层层编码，常被视为小说史的重要转折。",
        en: "A long court narrative centred on Genji and later generations, attentive to love, power, aesthetic judgment and impermanence. Relationships are coded through seasons, clothing, letters and interiors; it is often treated as a turning point in the history of fiction.",
        fr: "Un long récit de cour centré sur Genji et les générations suivantes, attentif à l'amour, au pouvoir, au jugement esthétique et à l'impermanence. Les relations passent par les saisons, les vêtements, les lettres et les espaces intérieurs ; l'œuvre est souvent considérée comme un tournant du roman."
      },
      lens: {
        zh: "比较“物哀”与心理小说：这里的情感如何通过物、季节和礼仪被看见？",
        en: "Compare mono no aware with psychological fiction: how is feeling made visible through objects, seasons and etiquette?",
        fr: "Comparez le mono no aware au roman psychologique : comment le sentiment devient-il visible par les objets, les saisons et l'étiquette ?"
      },
      source: { label: "Encyclopaedia Britannica — The Tale of Genji", url: "https://www.britannica.com/topic/The-Tale-of-Genji" }
    },
    {
      id: "shakuntala",
      category: "literature",
      region: "india",
      year: "c. 4th–5th c. CE",
      title: { zh: "《沙恭达罗》", en: "The Recognition of Shakuntala", fr: "La Reconnaissance de Shakuntala" },
      author: "迦梨陀娑 / Kālidāsa",
      summary: {
        zh: "梵语古典戏剧的代表作：沙恭达罗与国王杜虚扬塔相爱、分离，并因一枚戒指重获记忆。作品把情感、法度、自然与宫廷生活编织在一起，也是理解梵语诗学“味”的重要入口。",
        en: "A central work of classical Sanskrit drama: Shakuntala and King Dushyanta love, separate, and recover memory through a ring. Emotion, dharma, nature and courtly life are interwoven, making it an important entry into Sanskrit poetics and rasa.",
        fr: "Une œuvre majeure du théâtre sanskrit classique : Shakuntala et le roi Dushyanta s'aiment, se séparent et retrouvent la mémoire grâce à un anneau. Sentiment, dharma, nature et vie de cour s'y entrelacent, ce qui en fait une entrée importante dans la poétique du rasa."
      },
      lens: {
        zh: "把“认不出”当作戏剧结构：记忆、信物与身份如何互相证明？",
        en: "Read failed recognition as dramatic structure: how do memory, tokens and identity certify one another?",
        fr: "Lisez la non-reconnaissance comme structure dramatique : comment mémoire, signes et identité se certifient-ils mutuellement ?"
      },
      source: { label: "Kālidāsa, Abhijñānaśākuntala, classical Sanskrit drama" }
    },
    {
      id: "arabian-nights",
      category: "literature",
      region: "middle-east",
      year: "c. 9th–14th c.",
      title: { zh: "《一千零一夜》", en: "The Thousand and One Nights", fr: "Les Mille et Une Nuits" },
      author: "多语种、多时代的故事汇编 / Multiple compilers",
      summary: {
        zh: "并非单一作者写成的固定之书，而是跨越阿拉伯语、波斯语、印度故事传统与欧洲印刷史的层累文本。山鲁佐德以讲故事延续生命，框架叙事本身也成为关于叙事权力的寓言。",
        en: "Not a fixed book by one author but a layered corpus crossing Arabic, Persian and Indian storytelling traditions and later European print culture. Scheherazade survives by narrating, making the frame story an allegory of narrative power.",
        fr: "Non pas un livre fixe d'un seul auteur, mais un corpus stratifié traversant les traditions arabes, persanes et indiennes ainsi que l'imprimerie européenne. Scheherazade survit en racontant : le récit-cadre devient une allégorie du pouvoir de la narration."
      },
      lens: {
        zh: "留意“版本”而不是寻找唯一原文：翻译、删改和东方主义如何共同制造经典？",
        en: "Attend to versions rather than a single original: how did translation, adaptation and Orientalism together produce a classic?",
        fr: "Observez les versions plutôt qu'un original unique : comment traduction, adaptation et orientalisme ont-ils fabriqué un classique ?"
      },
      source: { label: "Project Gutenberg — The Arabian Nights Entertainments", url: "https://www.gutenberg.org/ebooks/2591" }
    },
    {
      id: "odyssey",
      category: "literature",
      region: "europe",
      year: "c. 8th c. BCE",
      title: { zh: "《奥德赛》", en: "The Odyssey", fr: "L'Odyssée" },
      author: "荷马 / Homer",
      summary: {
        zh: "特洛伊战争后的归乡史诗。奥德修斯以计谋、忍耐和讲述穿越海难、神意与陌生人的款待；归乡不是终点，而是重新辨认家庭、身份与秩序的过程。",
        en: "An epic of return after the Trojan War. Through cunning, endurance and storytelling, Odysseus crosses shipwreck, divine will and the obligations of hospitality. Homecoming is less an endpoint than a renewed recognition of family, identity and order.",
        fr: "Une épopée du retour après la guerre de Troie. Par la ruse, l'endurance et le récit, Ulysse traverse naufrages, volonté divine et devoirs de l'hospitalité. Le retour est moins un terme qu'une reconnaissance renouvelée de la famille, de l'identité et de l'ordre."
      },
      lens: {
        zh: "比较口头传统与书面史诗：固定修饰语在朗读中承担什么功能？",
        en: "Compare oral tradition with written epic: what work do formulaic epithets do in performance?",
        fr: "Comparez tradition orale et épopée écrite : quel travail accomplissent les épithètes formulaires dans la performance ?"
      },
      source: { label: "Perseus Digital Library — Homer, Odyssey", url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0136" }
    },
    {
      id: "things-fall-apart",
      category: "literature",
      region: "africa",
      year: "1958",
      title: { zh: "《瓦解》", en: "Things Fall Apart", fr: "Le Monde s'effondre" },
      author: "钦努阿·阿契贝 / Chinua Achebe",
      summary: {
        zh: "以伊博社会为背景，讲述奥孔克沃在殖民到来前后的命运。小说把谚语、仪式、亲族关系与男性荣誉放在具体历史中，同时拒绝把前殖民社会写成无冲突的乌托邦。",
        en: "Set in Igbo society, the novel follows Okonkwo before and after colonial arrival. Proverbs, ritual, kinship and masculine honour are embedded in a specific history, while the precolonial world is never reduced to a conflict-free utopia.",
        fr: "Situé dans la société igbo, le roman suit Okonkwo avant et après l'arrivée coloniale. Proverbes, rites, parenté et honneur masculin s'inscrivent dans une histoire précise, sans réduire le monde précolonial à une utopie sans conflits."
      },
      lens: {
        zh: "观察英语如何被改写以承载伊博经验，以及“悲剧”由谁定义。",
        en: "Observe how English is reshaped to carry Igbo experience, and who gets to define tragedy.",
        fr: "Observez comment l'anglais est transformé pour porter l'expérience igbo, et qui définit la tragédie."
      },
      source: { label: "Encyclopaedia Britannica — Things Fall Apart", url: "https://www.britannica.com/topic/Things-Fall-Apart" }
    },
    {
      id: "pedro-paramo",
      category: "literature",
      region: "americas",
      year: "1955",
      title: { zh: "《佩德罗·巴拉莫》", en: "Pedro Páramo", fr: "Pedro Páramo" },
      author: "胡安·鲁尔福 / Juan Rulfo",
      summary: {
        zh: "胡安前往科马拉寻找父亲佩德罗，却发现村庄由亡者的声音组成。短小的篇幅里，时间、人物与叙述视角不断折叠，成为拉丁美洲现代小说的重要源头。",
        en: "Juan travels to Comala in search of his father, Pedro, only to find a village composed of voices from the dead. In a very short space, time, character and point of view keep folding into one another, making it a key source for modern Latin American fiction.",
        fr: "Juan se rend à Comala chercher son père Pedro et découvre un village fait de voix de morts. En peu de pages, temps, personnages et points de vue ne cessent de se plier les uns aux autres : une source majeure du roman latino-américain moderne."
      },
      lens: {
        zh: "把沉默和断裂当作结构：叙述空白如何比解释更有力量？",
        en: "Treat silence and rupture as structure: how can narrative gaps wield more force than explanation?",
        fr: "Considérez le silence et la rupture comme structure : comment les blancs du récit peuvent-ils être plus forts que l'explication ?"
      },
      source: { label: "Juan Rulfo, Pedro Páramo, Fondo de Cultura Económica, 1955" }
    },

    {
      id: "dream-red-chamber",
      category: "literature",
      region: "china",
      year: "1791",
      title: { zh: "《红楼梦》", en: "Dream of the Red Chamber", fr: "Le Rêve dans le pavillon rouge" },
      author: "曹雪芹 / Cao Xueqin",
      summary: {
        zh: "以贾府兴衰为骨架的清代长篇小说，写爱情、亲族、性别、等级与日常礼俗。它的版本、后四十回与结局问题本身，也是一部关于文本如何流传的研究史。",
        en: "A Qing dynasty novel structured around the rise and fall of the Jia household, moving through love, kinship, gender, hierarchy and everyday ritual. Its editions and disputed later chapters are themselves a history of textual transmission.",
        fr: "Un roman des Qing construit autour de l'ascension et de la chute de la maison Jia : amour, parenté, genre, hiérarchie et rituels quotidiens. Ses éditions et la controverse sur les derniers chapitres constituent elles-mêmes une histoire de la transmission textuelle."
      },
      lens: {
        zh: "把家族当作制度来读：一个人的欲望如何被财产、礼法和叙述者的偏爱共同塑造？",
        en: "Read the family as an institution: how are desire and character shaped by property, ritual and narrative sympathy?",
        fr: "Lisez la famille comme institution : comment le désir et le caractère sont-ils façonnés par la propriété, le rite et la sympathie du narrateur ?"
      },
      source: { label: "Cao Xueqin, Hongloumeng, 1791; Penguin Classics edition" }
    },
    {
      id: "don-quixote",
      category: "literature",
      region: "europe",
      year: "1605 / 1615",
      title: { zh: "《堂吉诃德》", en: "Don Quixote", fr: "Don Quichotte" },
      author: "米格尔·德·塞万提斯 / Miguel de Cervantes",
      summary: {
        zh: "以骑士小说为靶子的双部长篇，讲述阿隆索·吉哈诺把自己读成骑士的故事。现实与虚构不断相互拆穿，人物也意识到自己正被写作和阅读。",
        en: "A two-part novel that begins as a parody of chivalric romances: Alonso Quijano reads himself into the role of a knight. Fiction and reality keep exposing one another, while characters become aware that they are being written and read.",
        fr: "Un roman en deux parties qui commence comme une parodie des romans de chevalerie : Alonso Quijano se lit lui-même en chevalier. Fiction et réalité ne cessent de se démasquer, tandis que les personnages découvrent qu'ils sont écrits et lus."
      },
      lens: {
        zh: "注意叙述者、译者与“作者”之间的层层伪装：谁在保证这个故事是真的？",
        en: "Notice the layers of narrator, translator and invented author: who guarantees that this story is true?",
        fr: "Observez les couches de narrateur, traducteur et auteur inventé : qui garantit la vérité du récit ?"
      },
      source: { label: "Miguel de Cervantes, Don Quixote, 1605/1615" }
    },
    {
      id: "beloved",
      category: "literature",
      region: "americas",
      year: "1987",
      title: { zh: "《宠儿》", en: "Beloved", fr: "Beloved" },
      author: "托妮·莫里森 / Toni Morrison",
      summary: {
        zh: "以美国重建时期为背景，让奴隶制的记忆以幽灵与复现人物的形式进入家庭生活。小说处理母性、自由、创伤与共同体记忆，拒绝把历史当作已经过去的事。",
        en: "Set during Reconstruction, the novel lets the memory of slavery enter family life through haunting and return. It explores motherhood, freedom, trauma and communal memory, refusing to treat history as safely past.",
        fr: "Situé pendant la Reconstruction américaine, le roman fait entrer la mémoire de l'esclavage dans la vie familiale par le hantise et le retour. Il explore maternité, liberté, trauma et mémoire collective, sans considérer l'histoire comme révolue."
      },
      lens: {
        zh: "留意时间如何被反复打断：记忆不是倒叙，而是仍在发生的现实。",
        en: "Watch how time is repeatedly interrupted: memory is not mere flashback but a reality still taking place.",
        fr: "Observez les interruptions du temps : la mémoire n'est pas un simple retour en arrière, mais une réalité encore en cours."
      },
      source: { label: "Toni Morrison, Beloved, Alfred A. Knopf, 1987; Nobel Prize in Literature 1993" }
    },
    {
      id: "bone-people",
      category: "literature",
      region: "oceania",
      year: "1984",
      title: { zh: "《骨人》", en: "The Bone People", fr: "The Bone People" },
      author: "凯里·胡姆 / Keri Hulme",
      summary: {
        zh: "以新西兰南岛为背景，通过一个独居女性、一个失语儿童和一个暴力男性之间的关系，触碰殖民历史、毛利与帕kehā身份、创伤和照护的困难。",
        en: "Set on New Zealand's South Island, the novel follows a solitary woman, a mute child and a violent man, tracing colonial history, Māori and Pākehā identity, trauma and the difficulty of care.",
        fr: "Situé dans l'île du Sud de la Nouvelle-Zélande, le roman suit une femme solitaire, un enfant mutique et un homme violent, entre histoire coloniale, identité māorie et pākehā, trauma et difficulté du soin."
      },
      lens: {
        zh: "不要急着把人物分成受害者与加害者：小说让照护、暴力和归属彼此纠缠。",
        en: "Resist sorting characters neatly into victims and perpetrators: care, violence and belonging remain entangled.",
        fr: "Ne rangez pas trop vite les personnages en victimes et bourreaux : soin, violence et appartenance restent enchevêtrés."
      },
      source: { label: "Keri Hulme, The Bone People, Spiral/Hodder & Stoughton, 1984" }
    },
    {
      id: "worlds-writing-systems",
      category: "writing",
      region: "global",
      year: "1996",
      title: { zh: "《世界的文字系统》", en: "The World's Writing Systems", fr: "The World's Writing Systems" },
      author: "Peter T. Daniels & William Bright (eds.)",
      summary: {
        zh: "大型比较文字学参考书，按文字所记录的语言单位组织材料，而不是按文明高低排序。适合用来校正“象形—表意—拼音”的线性进化叙事。",
        en: "A large comparative reference work that classifies scripts by the linguistic units they represent rather than by a hierarchy of civilisations. It is especially useful for correcting linear accounts that move from pictograph to ideograph to alphabet.",
        fr: "Un grand ouvrage de référence comparatif qui classe les écritures selon les unités linguistiques représentées, non selon une hiérarchie des civilisations. Il aide à corriger les récits linéaires allant du pictogramme à l'idéogramme puis à l'alphabet."
      },
      lens: {
        zh: "先问一种文字记录的是音素、音节、词还是语素，再讨论它“难不难”。",
        en: "First ask whether a script represents phonemes, syllables, words or morphemes; then discuss whether it is “difficult”.",
        fr: "Demandez d'abord si une écriture représente des phonèmes, des syllabes, des mots ou des morphèmes ; ensuite seulement, demandez si elle est « difficile »."
      },
      source: { label: "Oxford University Press", url: "https://global.oup.com/academic/product/the-worlds-writing-systems-9780195079937" }
    },
    {
      id: "chinese-language",
      category: "writing",
      region: "china",
      year: "1984",
      title: { zh: "《中国语言：事实与想象》", en: "The Chinese Language: Fact and Fantasy", fr: "The Chinese Language: Fact and Fantasy" },
      author: "John DeFrancis",
      summary: {
        zh: "系统反驳“汉字是纯粹表意文字、可以直接越过语言”的流行想象，强调汉字同样记录汉语中的词与语素。书中也讨论识字率、文字改革与语言教学。",
        en: "A systematic challenge to the popular fantasy that Chinese characters are purely ideographic and can bypass spoken language. DeFrancis argues that characters represent words and morphemes in Chinese, and links the discussion to literacy, reform and language teaching.",
        fr: "Une critique systématique du fantasme selon lequel les caractères chinois seraient purement idéographiques et pourraient contourner la langue parlée. DeFrancis montre qu'ils représentent des mots et morphèmes du chinois, puis relie cette question à l'alphabétisation, à la réforme et à l'enseignement."
      },
      lens: {
        zh: "把“看字知义”的直觉拆成具体语言单位，避免把文字神秘化。",
        en: "Break the intuition that a character simply “shows” its meaning into concrete linguistic units, resisting mystification.",
        fr: "Décomposez l'intuition qu'un caractère « montre » directement son sens en unités linguistiques concrètes, contre toute mystification."
      },
      source: { label: "University of Hawai‘i Press", url: "https://uhpress.hawaii.edu/title/the-chinese-language-fact-and-fantasy/" }
    },
    {
      id: "orality-literacy",
      category: "writing",
      region: "global",
      year: "1982",
      title: { zh: "《口头性与书面性》", en: "Orality and Literacy", fr: "Orality and Literacy" },
      author: "Walter J. Ong",
      summary: {
        zh: "讨论口头文化与书写文化在记忆、叙事、自我意识和知识组织上的差异。它提供了有用的问题框架，但不应把“口头”与“原始”、“书面”与“先进”简单等同。",
        en: "Examines how oral and literate cultures differ in memory, narrative, self-consciousness and the organisation of knowledge. It offers a useful set of questions, though orality should not be equated with primitiveness nor literacy with superiority.",
        fr: "Analyse les différences entre cultures orales et écrites dans la mémoire, le récit, la conscience de soi et l'organisation du savoir. Le cadre est utile, à condition de ne pas identifier oralité et primitif, ni écriture et supériorité."
      },
      lens: {
        zh: "把书写看作一种媒介技术：它改变了什么，又没有改变什么？",
        en: "Treat writing as a media technology: what does it change, and what does it leave unchanged?",
        fr: "Considérez l'écriture comme une technologie médiatique : que change-t-elle, et que laisse-t-elle intact ?"
      },
      source: { label: "Walter J. Ong, Orality and Literacy, Routledge, 1982/2002" }
    },
    {
      id: "sampson-writing-systems",
      category: "writing",
      region: "global",
      year: "1985",
      title: { zh: "《文字系统：语言学导论》", en: "Writing Systems: A Linguistic Introduction", fr: "Writing Systems: A Linguistic Introduction" },
      author: "Geoffrey Sampson",
      summary: {
        zh: "从语言学角度介绍世界文字的类型、结构与历史，适合与 Daniels & Bright 的参考书对照阅读。它可以作为“文字如何编码语言”的入门桥梁。",
        en: "A linguistic introduction to the types, structures and histories of writing systems, useful alongside Daniels and Bright's reference volume. It works as a bridge into the question of how scripts encode language.",
        fr: "Une introduction linguistique aux types, structures et histoires des écritures, à lire avec le volume de référence de Daniels et Bright. Elle sert de pont vers la question de l'encodage de la langue par l'écrit."
      },
      lens: {
        zh: "比较两本书的分类法，留意“混合型文字”为何常被简化掉。",
        en: "Compare the two books' typologies and notice why mixed systems are so often simplified away.",
        fr: "Comparez les typologies des deux ouvrages et observez pourquoi les systèmes mixtes sont si souvent simplifiés."
      },
      source: { label: "Geoffrey Sampson, Writing Systems, Stanford University Press, 1985" }
    },

    {
      id: "visible-language",
      category: "writing",
      region: "middle-east",
      year: "2010",
      title: { zh: "《可见的语言：古代近东及更广地区的书写发明》", en: "Visible Language: Inventions of Writing in the Ancient Middle East and Beyond", fr: "Visible Language: Inventions of Writing in the Ancient Middle East and Beyond" },
      author: "Christopher Woods (ed.)",
      summary: {
        zh: "围绕美索不达米亚、埃及及其他早期文字传统，讨论书写为何出现、如何与行政、仪式和权力结合。它把“文字起源”从单点发明改写为多种社会过程。",
        en: "Essays on Mesopotamia, Egypt and other early writing traditions ask why writing emerged and how it became entangled with administration, ritual and power. The volume replaces a single-origin story with several social processes.",
        fr: "Des essais sur la Mésopotamie, l'Égypte et d'autres traditions graphiques anciennes demandent pourquoi l'écriture apparaît et comment elle s'articule à l'administration, au rituel et au pouvoir. Le volume remplace le récit d'une origine unique par plusieurs processus sociaux."
      },
      lens: {
        zh: "区分“最早的文字”和“最早被保存下来的文字”，注意考古与档案偏差。",
        en: "Distinguish the earliest writing from the earliest surviving writing, and watch for archaeological and archival bias.",
        fr: "Distinguez les premières écritures de celles qui ont survécu, et repérez les biais archéologiques et archivistiques."
      },
      source: { label: "Oriental Institute, University of Chicago", url: "https://isac.uchicago.edu/research/publications/oip/visible-language-inventions-writing-ancient-middle-east-and-beyond" }
    },
    {
      id: "story-of-writing",
      category: "writing",
      region: "global",
      year: "1995 / 2007",
      title: { zh: "《书写的故事》", en: "The Story of Writing", fr: "The Story of Writing" },
      author: "Andrew Robinson",
      summary: {
        zh: "面向一般读者的世界文字史，涵盖楔形文字、埃及圣书体、汉字、玛雅文字及多种文字的破译。插图丰富，适合作为进入专门研究前的导览。",
        en: "An accessible history of writing across cuneiform, Egyptian hieroglyphs, Chinese, Maya script and several decipherments. Richly illustrated, it works well as a guide before more specialised study.",
        fr: "Une histoire accessible des écritures : cunéiforme, hiéroglyphes égyptiens, chinois, maya et plusieurs déchiffrements. Très illustré, l'ouvrage sert de guide avant des études plus spécialisées."
      },
      lens: {
        zh: "把“破译”当作证据推理练习：研究者如何从少数符号推进到整套系统？",
        en: "Treat decipherment as an exercise in evidence: how do scholars move from a few signs to an entire system?",
        fr: "Lisez le déchiffrement comme un raisonnement sur preuves : comment passe-t-on de quelques signes à un système entier ?"
      },
      source: { label: "Andrew Robinson, The Story of Writing, Thames & Hudson, 1995/2007" }
    },
    {
      id: "history-of-writing",
      category: "writing",
      region: "global",
      year: "2001",
      title: { zh: "《书写史》", en: "A History of Writing", fr: "A History of Writing" },
      author: "Steven Roger Fischer",
      summary: {
        zh: "从早期符号、文字系统到印刷与数字书写，提供长时段概览。适合用来建立时间线，同时需要结合具体地区的专门研究校正细节。",
        en: "A long-duration overview from early notation and scripts to print and digital writing. Useful for building a timeline, though regional detail should be checked against specialist studies.",
        fr: "Une vue de longue durée, des premières notations et écritures à l'imprimerie et à l'écrit numérique. Utile pour construire une chronologie, à compléter par des études régionales spécialisées."
      },
      lens: {
        zh: "把技术变化与权力变化并列：谁获得了书写、复制和阅读的能力？",
        en: "Place technological change beside changes in power: who gains access to writing, copying and reading?",
        fr: "Mettez les changements techniques en regard des rapports de pouvoir : qui accède à l'écriture, à la copie et à la lecture ?"
      },
      source: { label: "Steven Roger Fischer, A History of Writing, Reaktion Books, 2001" }
    },
    {
      id: "interface-written-oral",
      category: "writing",
      region: "global",
      year: "1987",
      title: { zh: "《书写与口头之间的界面》", en: "The Interface Between the Written and the Oral", fr: "The Interface Between the Written and the Oral" },
      author: "Jack Goody",
      summary: {
        zh: "研究书写如何与口头传统、记忆、宗教和官僚制度互动。它反对把书写视为自动带来“理性化”的单向技术，也保留了比较文明的问题意识。",
        en: "Examines how writing interacts with oral tradition, memory, religion and bureaucracy. It resists treating literacy as a technology that automatically produces rationalisation, while keeping a comparative civilisational frame.",
        fr: "Étudie les interactions de l'écrit avec la tradition orale, la mémoire, la religion et la bureaucratie. L'ouvrage refuse de voir l'écriture comme une technologie produisant automatiquement la rationalisation, tout en gardant une perspective comparative."
      },
      lens: {
        zh: "寻找混合状态：没有一种文化是“纯口头”或“纯书面”的。",
        en: "Look for mixtures: no culture is purely oral or purely literate.",
        fr: "Cherchez les mélanges : aucune culture n'est purement orale ou purement écrite."
      },
      source: { label: "Jack Goody, The Interface Between the Written and the Oral, Cambridge University Press, 1987" }
    },
    {
      id: "saussure",
      category: "language",
      region: "europe",
      year: "1916",
      title: { zh: "《普通语言学教程》", en: "Course in General Linguistics", fr: "Cours de linguistique générale" },
      author: "Ferdinand de Saussure",
      summary: {
        zh: "由学生据课堂笔记整理出版的现代结构语言学奠基文本。它区分语言系统与言语活动、共时与历时，并提出符号由能指与所指构成，深刻影响二十世纪人文理论。",
        en: "The foundational text of modern structural linguistics, compiled posthumously from students' lecture notes. It distinguishes langue from parole and synchrony from diachrony, and describes the sign as the relation between signifier and signified.",
        fr: "Texte fondateur du structuralisme linguistique, publié après la mort de Saussure à partir de notes d'étudiants. Il distingue langue et parole, synchronie et diachronie, et décrit le signe comme relation entre signifiant et signifié."
      },
      lens: {
        zh: "记住这不是萨绪尔本人定稿：笔记整理本身也影响了他的理论形象。",
        en: "Remember that Saussure did not finalise this text: its editorial construction also shaped his theoretical image.",
        fr: "Rappelez-vous que Saussure n'a pas achevé ce texte : sa construction éditoriale a aussi façonné son image théorique."
      },
      source: { label: "Ferdinand de Saussure, Cours de linguistique générale, Payot, 1916" }
    },
    {
      id: "how-to-do-things",
      category: "language",
      region: "europe",
      year: "1962",
      title: { zh: "《如何以言行事》", en: "How to Do Things with Words", fr: "Quand dire, c'est faire" },
      author: "J. L. Austin",
      summary: {
        zh: "从婚礼承诺、命名与打赌等例子出发，说明语言不只是描述世界，也能完成行动。言语行为理论由此展开，并影响法律、文学、性别研究与沟通研究。",
        en: "Beginning with promises, naming and bets, Austin shows that language does not merely describe the world but can perform actions. The resulting theory of speech acts has shaped law, literary study, gender theory and communication research.",
        fr: "À partir de promesses, de baptêmes et de paris, Austin montre que le langage ne décrit pas seulement le monde : il peut accomplir des actes. Cette théorie des actes de parole a marqué le droit, la littérature, les études de genre et la communication."
      },
      lens: {
        zh: "每一次说话都问：谁有资格说、在什么制度里说、说完发生了什么？",
        en: "For every utterance ask: who is authorised to speak, within which institution, and what changes once it is said?",
        fr: "Pour chaque énoncé, demandez : qui est autorisé à parler, dans quelle institution, et qu'est-ce qui change une fois dit ?"
      },
      source: { label: "J. L. Austin, How to Do Things with Words, Harvard University Press, 1962" }
    },
    {
      id: "metaphors-we-live-by",
      category: "language",
      region: "americas",
      year: "1980",
      title: { zh: "《我们赖以生存的隐喻》", en: "Metaphors We Live By", fr: "Les Métaphores dans la vie quotidienne" },
      author: "George Lakoff & Mark Johnson",
      summary: {
        zh: "提出隐喻不只是修辞装饰，而是概念系统的基本结构。我们通过身体经验、方向和容器等图式理解争论、时间、情感与道德，语言因此暴露出思维的惯性。",
        en: "Argues that metaphor is not ornamental but a basic structure of conceptual systems. Embodied experience, orientation and container schemas shape how we understand argument, time, emotion and morality, so language exposes habits of thought.",
        fr: "La métaphore n'est pas un ornement mais une structure fondamentale des systèmes conceptuels. Expérience corporelle, orientation et schémas de contenant façonnent notre compréhension de l'argumentation, du temps, de l'émotion et de la morale."
      },
      lens: {
        zh: "收集一周内反复出现的隐喻，问它把哪些可能性放大，又把哪些遮蔽。",
        en: "Collect recurring metaphors over a week and ask which possibilities each one amplifies or hides.",
        fr: "Recueillez les métaphores récurrentes d'une semaine et demandez ce que chacune amplifie ou dissimule."
      },
      source: { label: "University of Chicago Press", url: "https://press.uchicago.edu/ucp/books/book/chicago/M/bo3637992.html" }
    },
    {
      id: "language-symbolic-power",
      category: "language",
      region: "europe",
      year: "1991",
      title: { zh: "《语言与符号权力》", en: "Language and Symbolic Power", fr: "Langage et pouvoir symbolique" },
      author: "Pierre Bourdieu",
      summary: {
        zh: "把语言放回市场、制度与阶级关系之中，讨论谁的口音、句法和表达方式被听成“有权威”。语言能力不只是语法能力，也是对合法性的争夺。",
        en: "Places language inside markets, institutions and class relations, asking whose accent, syntax and manner of speaking are heard as authoritative. Linguistic competence is not only grammatical but also a struggle over legitimacy.",
        fr: "Replace le langage dans les marchés, les institutions et les rapports de classe : quel accent, quelle syntaxe et quelle manière de parler sont entendus comme autorisés ? La compétence linguistique est aussi une lutte pour la légitimité."
      },
      lens: {
        zh: "听一段公开发言，注意“说得对”与“有资格说”如何被混为一谈。",
        en: "Listen to public speech and notice how “speaking correctly” and “being entitled to speak” become confused.",
        fr: "Écoutez un discours public et observez comment « parler correctement » et « avoir le droit de parler » se confondent."
      },
      source: { label: "Pierre Bourdieu, Language and Symbolic Power, Harvard University Press, 1991" }
    },

    {
      id: "bloomfield-language",
      category: "language",
      region: "americas",
      year: "1933",
      title: { zh: "《语言论》", en: "Language", fr: "Language" },
      author: "Leonard Bloomfield",
      summary: {
        zh: "二十世纪美国结构主义语言学的代表著作，系统讨论音系、形态、句法与语言变化。它强调可观察的语言材料，也带有其时代的行为主义限制。",
        en: "A representative work of twentieth-century American structural linguistics, treating phonology, morphology, syntax and language change. It foregrounds observable linguistic data while carrying the limits of its behaviourist era.",
        fr: "Une œuvre représentative du structuralisme linguistique américain : phonologie, morphologie, syntaxe et changement linguistique. Elle privilégie les données observables tout en portant les limites de son époque behavioriste."
      },
      lens: {
        zh: "把它与萨绪尔的系统观、乔姆斯基的生成观并读，观察“语言”被如何重新定义。",
        en: "Read it beside Saussure's system and Chomsky's generative view, watching how “language” is redefined.",
        fr: "Lisez-le avec le système de Saussure et la grammaire générative de Chomsky : comment la « langue » est-elle redéfinie ?"
      },
      source: { label: "Leonard Bloomfield, Language, Henry Holt, 1933" }
    },
    {
      id: "syntactic-structures",
      category: "language",
      region: "americas",
      year: "1957",
      title: { zh: "《句法结构》", en: "Syntactic Structures", fr: "Structures syntaxiques" },
      author: "Noam Chomsky",
      summary: {
        zh: "以形式化规则展示句子的生成方式，推动语言学从行为主义描写转向生成语法。它提出有限规则如何解释无限句子的核心问题，也引发持续的争论。",
        en: "Uses formal rules to show how sentences are generated, helping move linguistics from behaviourist description toward generative grammar. Its central question is how finite rules account for an unlimited range of sentences.",
        fr: "Utilise des règles formelles pour montrer comment les phrases sont générées et déplace la linguistique de la description behavioriste vers la grammaire générative. La question centrale : comment des règles finies rendent-elles compte d'une infinité de phrases ?"
      },
      lens: {
        zh: "注意“生成”不等于“说话者随时意识到规则”：理论模型与心理过程需要区分。",
        en: "Remember that “generative” does not mean speakers consciously follow rules: theoretical models and mental processes must be distinguished.",
        fr: "« Génératif » ne signifie pas que les locuteurs appliquent consciemment des règles : il faut distinguer modèle théorique et processus mental."
      },
      source: { label: "Noam Chomsky, Syntactic Structures, Mouton, 1957" }
    },
    {
      id: "after-babel",
      category: "language",
      region: "europe",
      year: "1975",
      title: { zh: "《通天塔之后》", en: "After Babel", fr: "After Babel" },
      author: "George Steiner",
      summary: {
        zh: "从解释学角度讨论翻译为何不仅是词句替换，而是理解他者、重述意义和承认损失的过程。书中的欧洲中心视角和宏大判断也需要批判性阅读。",
        en: "A hermeneutic account of translation as more than word substitution: it is a way of understanding others, restating meaning and acknowledging loss. Its Eurocentric frame and large claims also require critical reading.",
        fr: "Une réflexion herméneutique sur la traduction comme compréhension d'autrui, reformulation du sens et reconnaissance de la perte, au-delà du remplacement de mots. Son cadre eurocentré et ses thèses amples appellent une lecture critique."
      },
      lens: {
        zh: "比较“忠实”与“可读”两种标准，问译者究竟对谁负责。",
        en: "Compare fidelity with readability and ask to whom the translator is finally responsible.",
        fr: "Comparez fidélité et lisibilité, et demandez à qui le traducteur répond en dernier lieu."
      },
      source: { label: "George Steiner, After Babel, Oxford University Press, 1975" }
    },
    {
      id: "verbal-art-performance",
      category: "language",
      region: "americas",
      year: "1977",
      title: { zh: "《作为表演的口头艺术》", en: "Verbal Art as Performance", fr: "Verbal Art as Performance" },
      author: "Richard Bauman",
      summary: {
        zh: "把民间叙事、谚语、仪式语言看作发生在具体场景中的表演，而不仅是固定文本。表演者、观众、情境与评价共同决定意义。",
        en: "Treats folktales, proverbs and ritual speech as performances unfolding in specific situations rather than fixed texts. Performer, audience, setting and evaluation jointly produce meaning.",
        fr: "Considère contes, proverbes et paroles rituelles comme des performances situées plutôt que des textes fixes. Interprète, public, contexte et évaluation produisent ensemble le sens."
      },
      lens: {
        zh: "问一段话在何时、对谁、以什么姿态说出口，以及听众如何表示认可。",
        en: "Ask when, to whom and in what posture something is spoken, and how listeners signal recognition.",
        fr: "Demandez quand, à qui et avec quelle posture une parole est prononcée, et comment le public manifeste sa reconnaissance."
      },
      source: { label: "Richard Bauman, Verbal Art as Performance, Waveland Press, 1977" }
    },
    {
      id: "sociological-imagination",
      category: "society",
      region: "americas",
      year: "1959",
      title: { zh: "《社会学的想象力》", en: "The Sociological Imagination", fr: "L'Imagination sociologique" },
      author: "C. Wright Mills",
      summary: {
        zh: "要求把“个人困扰”与“公共议题”连接起来：失业、婚姻危机或城市孤独不只是私人失败，也与制度、历史和权力分配有关。",
        en: "Calls for connecting “personal troubles” with “public issues”: unemployment, marital crisis or urban loneliness are not merely private failures but matters of institutions, history and the distribution of power.",
        fr: "Invite à relier « troubles personnels » et « enjeux publics » : chômage, crise conjugale ou solitude urbaine ne sont pas de simples échecs privés, mais des questions d'institutions, d'histoire et de distribution du pouvoir."
      },
      lens: {
        zh: "拿自己的一个烦恼，列出它背后的制度、历史与关系条件。",
        en: "Take one personal worry and map the institutional, historical and relational conditions around it.",
        fr: "Prenez une inquiétude personnelle et cartographiez les conditions institutionnelles, historiques et relationnelles qui l'entourent."
      },
      source: { label: "C. Wright Mills, The Sociological Imagination, Oxford University Press, 1959" }
    },
    {
      id: "presentation-of-self",
      category: "society",
      region: "americas",
      year: "1959",
      title: { zh: "《日常生活中的自我呈现》", en: "The Presentation of Self in Everyday Life", fr: "La Mise en scène de la vie quotidienne" },
      author: "Erving Goffman",
      summary: {
        zh: "以戏剧为隐喻分析日常互动：人们在前台管理印象，在后台准备与放松，并依靠团队共同维持“现实”。它不等于说一切关系都是虚伪的，而是揭示互动的技艺。",
        en: "Uses theatre as a metaphor for everyday interaction: people manage impressions on the front stage, prepare and relax backstage, and rely on teams to sustain a shared reality. This is not a claim that all relations are fake, but an account of interactional craft.",
        fr: "Le théâtre sert de métaphore à l'interaction quotidienne : gestion de l'impression en scène, préparation et relâchement en coulisses, coopération d'équipes pour maintenir une réalité commune. Cela ne signifie pas que toute relation est fausse, mais décrit un art de l'interaction."
      },
      lens: {
        zh: "比较线上头像、线下着装和独处时的自己：哪些是“前台”，哪些是“后台”？",
        en: "Compare an online avatar, public dress and private self: which scenes are front stage, and which are backstage?",
        fr: "Comparez un avatar en ligne, une tenue publique et le soi solitaire : quelles scènes sont l'avant-scène, lesquelles les coulisses ?"
      },
      source: { label: "Erving Goffman, The Presentation of Self in Everyday Life, Doubleday, 1959" }
    },
    {
      id: "from-the-soil",
      category: "society",
      region: "china",
      year: "1948",
      title: { zh: "《乡土中国》", en: "From the Soil", fr: "From the Soil" },
      author: "费孝通 / Fei Xiaotong",
      summary: {
        zh: "以“差序格局”等概念分析中国乡土社会的关系网络、礼治、家族与地缘。它提供了理解“关系”与公共秩序的本土框架，也需要放在成书时代中阅读。",
        en: "Through concepts such as the “differential mode of association”, Fei analyses relational networks, ritual order, kinship and locality in rural China. It offers an indigenous framework for understanding guanxi and public order, while remaining a text of its historical moment.",
        fr: "À travers la « configuration différentielle des liens », Fei analyse réseaux relationnels, ordre rituel, parenté et localité dans la Chine rurale. Il propose un cadre endogène pour penser le guanxi et l'ordre public, à replacer dans son époque."
      },
      lens: {
        zh: "不要把“熟人社会”当成固定民族性格，而要看制度如何生产关系距离。",
        en: "Do not turn “acquaintance society” into a fixed national character; examine how institutions produce relational distance.",
        fr: "Ne faites pas de la « société de connaissance » un caractère national figé ; observez comment les institutions produisent les distances relationnelles."
      },
      source: { label: "费孝通《乡土中国》，观察社，1948；北京大学出版社，2012" }
    },
    {
      id: "souls-of-black-folk",
      category: "society",
      region: "americas",
      year: "1903",
      title: { zh: "《黑人的灵魂》", en: "The Souls of Black Folk", fr: "Les Âmes du peuple noir" },
      author: "W. E. B. Du Bois",
      summary: {
        zh: "由随笔、历史、音乐与自传交织而成的经典，提出“双重意识”等概念，分析种族主义如何在心理、教育与公共生活中运作。",
        en: "A classic woven from essays, history, music and autobiography. Du Bois introduces “double consciousness” and analyses how racism operates psychologically, educationally and in public life.",
        fr: "Un classique tissé d'essais, d'histoire, de musique et d'autobiographie. Du Bois y formule la « double conscience » et analyse le fonctionnement du racisme dans la psyché, l'éducation et la vie publique."
      },
      lens: {
        zh: "注意文体混合本身如何反驳“客观中立”的社会科学叙事。",
        en: "Notice how the mixture of genres itself challenges a supposedly neutral social-scientific voice.",
        fr: "Observez comment le mélange des genres conteste à lui seul une voix socioscientifique prétendument neutre."
      },
      source: { label: "Project Gutenberg — The Souls of Black Folk", url: "https://www.gutenberg.org/ebooks/408" }
    },
    {
      id: "wretched-of-the-earth",
      category: "society",
      region: "africa",
      year: "1961",
      title: { zh: "《大地上的受苦者》", en: "The Wretched of the Earth", fr: "Les Damnés de la terre" },
      author: "弗朗茨·法农 / Frantz Fanon",
      summary: {
        zh: "从阿尔及利亚殖民经验出发，分析殖民暴力、民族意识、去殖民化与新国家形成。书中关于暴力和精神医学的论述极具争议，必须结合历史语境阅读。",
        en: "Drawing on the Algerian colonial experience, Fanon analyses colonial violence, national consciousness, decolonisation and the formation of new states. His arguments about violence and psychiatry are deeply contested and must be read in historical context.",
        fr: "À partir de l'expérience coloniale algérienne, Fanon analyse violence coloniale, conscience nationale, décolonisation et formation des nouveaux États. Ses thèses sur la violence et la psychiatrie sont très contestées et exigent un contexte historique."
      },
      lens: {
        zh: "区分描述殖民结构、提出政治诊断与给出行动方案三个层次，不要混为一谈。",
        en: "Distinguish description of colonial structure, political diagnosis and prescription for action; do not collapse them into one.",
        fr: "Distinguez description de la structure coloniale, diagnostic politique et prescription d'action ; ne les confondez pas."
      },
      source: { label: "Frantz Fanon, Les Damnés de la terre, François Maspero, 1961" }
    },
    {
      id: "division-labor",
      category: "society",
      region: "europe",
      year: "1893",
      title: { zh: "《社会分工论》", en: "The Division of Labor in Society", fr: "De la division du travail social" },
      author: "埃米尔·涂尔干 / Émile Durkheim",
      summary: {
        zh: "分析社会分工如何从“机械团结”转向“有机团结”，以及专业化为何同时制造依赖与失范。它是理解现代职业、法律与个体化的重要源头。",
        en: "Analyses the shift from “mechanical” to “organic” solidarity and why specialisation produces both interdependence and anomie. It remains a key source for thinking about modern occupations, law and individualisation.",
        fr: "Analyse le passage de la solidarité « mécanique » à la solidarité « organique » et montre pourquoi la spécialisation produit à la fois interdépendance et anomie. Une source majeure pour penser métiers, droit et individualisation modernes."
      },
      lens: {
        zh: "观察分工带来的是合作、依赖，还是新的不平等；不要只读成“效率提高”。",
        en: "Ask whether division of labour produces cooperation, dependency or new inequality, rather than reading it only as efficiency.",
        fr: "Demandez si la division du travail produit coopération, dépendance ou nouvelles inégalités, sans la réduire à l'efficacité."
      },
      source: { label: "Émile Durkheim, De la division du travail social, 1893" }
    },
    {
      id: "protestant-ethic",
      category: "society",
      region: "europe",
      year: "1905",
      title: { zh: "《新教伦理与资本主义精神》", en: "The Protestant Ethic and the Spirit of Capitalism", fr: "L'Éthique protestante et l'esprit du capitalisme" },
      author: "马克斯·韦伯 / Max Weber",
      summary: {
        zh: "讨论禁欲主义伦理、职业纪律与资本主义“精神”之间的历史关联。它不是把资本主义化约为宗教，而是提出文化与制度互相作用的比较问题。",
        en: "Explores historical links between ascetic ethics, vocational discipline and the “spirit” of capitalism. It does not reduce capitalism to religion; it asks comparative questions about culture and institutions.",
        fr: "Explore les liens historiques entre éthique ascétique, discipline professionnelle et « esprit » du capitalisme. Il ne réduit pas le capitalisme à la religion, mais pose une question comparative sur culture et institutions."
      },
      lens: {
        zh: "把“精神”与制度分开：一种观念如何被日常生活和制度固定下来？",
        en: "Separate “spirit” from institution: how does an idea become fixed in everyday life and institutions?",
        fr: "Distinguez « esprit » et institution : comment une idée se fixe-t-elle dans la vie quotidienne et les institutions ?"
      },
      source: { label: "Max Weber, Die protestantische Ethik und der Geist des Kapitalismus, 1905" }
    },
    {
      id: "distinction",
      category: "society",
      region: "europe",
      year: "1979 / 1984",
      title: { zh: "《区分》", en: "Distinction", fr: "La Distinction" },
      author: "皮埃尔·布迪厄 / Pierre Bourdieu",
      summary: {
        zh: "以法国社会调查分析趣味、教育、消费与文化资本如何再生产阶级差异。“品味”看似个人选择，实际与资源、教育和群体边界相连。",
        en: "Draws on French social surveys to analyse how taste, education, consumption and cultural capital reproduce class difference. Taste appears personal but is tied to resources, schooling and group boundaries.",
        fr: "À partir d'enquêtes françaises, analyse comment goût, éducation, consommation et capital culturel reproduisent les différences de classe. Le goût semble personnel, mais reste lié aux ressources, à l'école et aux frontières de groupe."
      },
      lens: {
        zh: "把“我喜欢什么”改写为“我如何学会喜欢、谁教我、这种喜欢带来什么资本”。",
        en: "Translate “what I like” into “how I learned to like it, who taught me, and what capital that liking yields”.",
        fr: "Transformez « ce que j'aime » en « comment j'ai appris à l'aimer, qui me l'a appris et quel capital cet amour produit »."
      },
      source: { label: "Pierre Bourdieu, La Distinction, Éditions de Minuit, 1979; Harvard University Press, 1984" }
    },
    {
      id: "principles-psychology",
      category: "psychology",
      region: "americas",
      year: "1890",
      title: { zh: "《心理学原理》", en: "The Principles of Psychology", fr: "Les Principes de la psychologie" },
      author: "威廉·詹姆斯 / William James",
      summary: {
        zh: "现代心理学早期的重要著作，讨论习惯、注意、自我与“意识流”。它保留了大量内省与哲学追问，与后来以实验和行为为中心的心理学家形成对照。",
        en: "A foundational early work of modern psychology on habit, attention, the self and the “stream of consciousness”. Its introspective and philosophical questions contrast with later experiment- and behaviour-centred psychology.",
        fr: "Une œuvre fondatrice de la psychologie moderne sur l'habitude, l'attention, le soi et le « flux de conscience ». Ses questions introspectives et philosophiques contrastent avec la psychologie expérimentale et behavioriste ultérieure."
      },
      lens: {
        zh: "区分描述经验与解释机制：詹姆斯常从“活着的感受”出发，而不是先设一个模型。",
        en: "Distinguish description of experience from explanation of mechanism: James often begins with lived feeling rather than a prior model.",
        fr: "Distinguez description de l'expérience et explication du mécanisme : James part souvent du vécu plutôt que d'un modèle préalable."
      },
      source: { label: "William James, The Principles of Psychology, Henry Holt, 1890" }
    },
    {
      id: "interpretation-dreams",
      category: "psychology",
      region: "europe",
      year: "1900",
      title: { zh: "《梦的解析》", en: "The Interpretation of Dreams", fr: "L'Interprétation du rêve" },
      author: "西格蒙德·弗洛伊德 / Sigmund Freud",
      summary: {
        zh: "把梦视为愿望、压抑与“梦的工作”共同形成的文本，提出凝缩、移置与象征等机制。它是精神分析的核心文本，但其中的临床与理论主张需要放在历史中评估。",
        en: "Treats dreams as formations produced by wish, repression and “dream-work”, including condensation, displacement and symbolism. It is a core psychoanalytic text, while its clinical and theoretical claims require historical assessment.",
        fr: "Le rêve y devient une formation produite par désir, refoulement et « travail du rêve » : condensation, déplacement, symbolisation. Texte central de la psychanalyse, dont les thèses cliniques et théoriques doivent être replacées dans leur histoire."
      },
      lens: {
        zh: "把分析当作解释竞争：同一个梦可以支持哪些不同读法，证据在哪里？",
        en: "Treat interpretation as competition among explanations: which readings does a dream support, and what counts as evidence?",
        fr: "Lisez l'interprétation comme une concurrence d'explications : quelles lectures un rêve autorise-t-il, et qu'est-ce qui fait preuve ?"
      },
      source: { label: "Sigmund Freud, Die Traumdeutung, 1900" }
    },
    {
      id: "man-symbols",
      category: "psychology",
      region: "europe",
      year: "1964",
      title: { zh: "《人与象征》", en: "Man and His Symbols", fr: "L'Homme et ses symboles" },
      author: "卡尔·荣格等 / Carl G. Jung et al.",
      summary: {
        zh: "荣格晚年的通俗导论，讨论原型、集体无意识、梦与个体化。它适合了解荣格学派，但“原型”与跨文化象征的主张不能被当作普遍科学结论。",
        en: "Jung's late popular introduction to archetypes, the collective unconscious, dreams and individuation. It is a useful entry to Jungian thought, though claims about archetypes and cross-cultural symbols are not settled science.",
        fr: "Introduction tardive et accessible aux archétypes, à l'inconscient collectif, aux rêves et à l'individuation. Utile pour entrer dans la pensée jungienne, mais les thèses sur les archétypes et les symboles transculturels ne sont pas des conclusions scientifiques établies."
      },
      lens: {
        zh: "把象征当作需要解释的材料，而不是自动生效的密码表。",
        en: "Treat symbols as material requiring interpretation, not as a universal codebook that decodes itself.",
        fr: "Traitez les symboles comme des matériaux à interpréter, non comme un code universel qui se déchiffre seul."
      },
      source: { label: "Carl G. Jung et al., Man and His Symbols, Doubleday, 1964" }
    },
    {
      id: "thought-language",
      category: "psychology",
      region: "europe",
      year: "1934",
      title: { zh: "《思维与语言》", en: "Thought and Language", fr: "Pensée et langage" },
      author: "列夫·维果茨基 / Lev Vygotsky",
      summary: {
        zh: "研究语言、思维与社会互动的发展关系，提出“最近发展区”和内部语言等概念。学习被理解为在他人协助下发生的社会过程，而非孤立的成熟。",
        en: "Examines the developmental relation between language, thought and social interaction, introducing the zone of proximal development and inner speech. Learning becomes a social process assisted by others rather than isolated maturation.",
        fr: "Étudie le développement des relations entre langage, pensée et interaction sociale, en introduisant la zone proximale de développement et la parole intérieure. L'apprentissage devient un processus social assisté, non une simple maturation isolée."
      },
      lens: {
        zh: "观察一个人如何把外部对话变成内部语言，以及协助何时变成依赖。",
        en: "Observe how external dialogue becomes inner speech, and when assistance turns into dependence.",
        fr: "Observez comment le dialogue extérieur devient parole intérieure, et quand l'aide devient dépendance."
      },
      source: { label: "Lev Vygotsky, Thought and Language, MIT Press English edition, 1962" }
    },
    {
      id: "piaget-child",
      category: "psychology",
      region: "europe",
      year: "1966",
      title: { zh: "《儿童心理学》", en: "The Psychology of the Child", fr: "La Psychologie de l'enfant" },
      author: "让·皮亚杰、巴尔贝勒·英海尔德 / Jean Piaget & Bärbel Inhelder",
      summary: {
        zh: "以认知发展阶段说明儿童如何通过同化、顺应和平衡建构对世界的理解。阶段模型影响巨大，但年龄界限和跨文化普遍性后来受到修正。",
        en: "Explains cognitive development through assimilation, accommodation and equilibration, and outlines stage-based changes in children's understanding. The stage model was highly influential but its age boundaries and cultural universality have been revised.",
        fr: "Explique le développement cognitif par assimilation, accommodation et équilibration, et décrit des étapes de compréhension chez l'enfant. Ce modèle a été majeur, mais ses âges et son universalité culturelle ont été révisés."
      },
      lens: {
        zh: "把阶段理解为倾向，不要把它当作每个孩子必须按时通过的关卡。",
        en: "Treat stages as tendencies, not checkpoints every child must pass on schedule.",
        fr: "Considérez les stades comme des tendances, non comme des étapes que chaque enfant doit franchir à date fixe."
      },
      source: { label: "Jean Piaget & Bärbel Inhelder, La Psychologie de l'enfant, PUF, 1966" }
    },
    {
      id: "attachment",
      category: "psychology",
      region: "europe",
      year: "1969",
      title: { zh: "《依恋与失落：依恋》", en: "Attachment and Loss, Vol. 1: Attachment", fr: "Attachement et perte, vol. 1 : L'attachement" },
      author: "约翰·鲍尔比 / John Bowlby",
      summary: {
        zh: "从精神分析、动物行为学与发展观察出发，提出依恋是带有进化基础的关系系统，照顾者提供“安全基地”。依恋理论影响深远，也常被大众读物过度简化。",
        en: "Drawing on psychoanalysis, ethology and developmental observation, Bowlby treats attachment as an evolved relational system in which a caregiver provides a “secure base”. The theory is influential and often oversimplified in popular use.",
        fr: "À partir de la psychanalyse, de l'éthologie et de l'observation du développement, Bowlby fait de l'attachement un système relationnel évolutif où le caregiver offre une « base de sécurité ». Théorie majeure, souvent simplifiée à l'excès."
      },
      lens: {
        zh: "区分早期依恋模式与成年关系标签，避免把“依恋类型”当成固定人格。",
        en: "Distinguish early attachment patterns from adult relationship labels; do not turn “attachment style” into a fixed personality.",
        fr: "Distinguez les schémas précoces d'attachement des étiquettes relationnelles adultes : ne faites pas du « style d'attachement » une personnalité figée."
      },
      source: { label: "John Bowlby, Attachment and Loss, Vol. 1, Basic Books, 1969" }
    },
    {
      id: "thinking-fast-slow",
      category: "psychology",
      region: "middle-east",
      year: "2011",
      title: { zh: "《思考，快与慢》", en: "Thinking, Fast and Slow", fr: "Système 1 / Système 2" },
      author: "丹尼尔·卡尼曼 / Daniel Kahneman",
      summary: {
        zh: "以“系统一/系统二”组织判断与决策研究，说明启发式、损失厌恶和过度自信如何影响选择。部分实验的可重复性后来受到争论，应连同方法学讨论一起阅读。",
        en: "Organises research on judgment and decision-making around “System 1 / System 2”, explaining heuristics, loss aversion and overconfidence. Some experiments have since been debated for replicability, so read it alongside methodological discussion.",
        fr: "Organise la recherche sur le jugement autour des « systèmes 1 et 2 » et explique heuristiques, aversion à la perte et excès de confiance. La réplicabilité de certaines expériences a été débattue : à lire avec les discussions méthodologiques."
      },
      lens: {
        zh: "把“偏差”放回具体环境：什么时候快速判断有效，什么时候代价很高？",
        en: "Return “bias” to concrete environments: when is fast judgment effective, and when is it costly?",
        fr: "Replacez les « biais » dans leur environnement : quand le jugement rapide est-il efficace, et quand coûte-t-il cher ?"
      },
      source: { label: "Daniel Kahneman, Thinking, Fast and Slow, Farrar, Straus and Giroux, 2011" }
    },
    {
      id: "managed-heart",
      category: "psychology",
      region: "americas",
      year: "1983",
      title: { zh: "《被管理的心》", en: "The Managed Heart", fr: "The Managed Heart" },
      author: "阿莉·霍克希尔德 / Arlie Russell Hochschild",
      summary: {
        zh: "通过空乘等服务业劳动研究“情绪劳动”：组织要求员工管理自己的感受表达，从而影响身份与疲惫。它连接心理学、性别、劳动与社会学。",
        en: "Through service work such as flight attendants, Hochschild develops the concept of emotional labour: organisations require workers to manage feeling and expression, affecting identity and exhaustion. The book links psychology, gender, labour and sociology.",
        fr: "À partir du travail de service, notamment des hôtesses de l'air, Hochschild forge le concept de travail émotionnel : l'organisation exige de gérer sentiments et expressions, avec des effets sur l'identité et l'épuisement. Le livre relie psychologie, genre, travail et sociologie."
      },
      lens: {
        zh: "注意“笑”何时是关系，何时是劳动；情绪规则由谁制定、由谁承担成本？",
        en: "Ask when a smile is relationship and when it is labour: who writes the feeling rules, and who bears their cost?",
        fr: "Demandez quand un sourire est relation et quand il est travail : qui écrit les règles du sentiment, et qui en paie le coût ?"
      },
      source: { label: "Arlie Russell Hochschild, The Managed Heart, University of California Press, 1983" }
    },
    {
      id: "wealth-nations",
      category: "economics",
      region: "europe",
      year: "1776",
      title: { zh: "《国富论》", en: "The Wealth of Nations", fr: "La Richesse des nations" },
      author: "亚当·斯密 / Adam Smith",
      summary: {
        zh: "现代政治经济学的经典，讨论分工、市场交换、价格、资本积累与国家职能。它常被简化为“看不见的手”，但全书同时对垄断、制度与劳动状况保持关注。",
        en: "A classic of modern political economy on division of labour, market exchange, price, capital accumulation and the state. It is often reduced to the “invisible hand”, yet the book is also attentive to monopoly, institutions and working conditions.",
        fr: "Un classique de l'économie politique moderne : division du travail, échange, prix, accumulation du capital et fonctions de l'État. On le réduit souvent à la « main invisible », mais l'ouvrage s'intéresse aussi aux monopoles, aux institutions et aux conditions de travail."
      },
      lens: {
        zh: "把市场放回制度中读：斯密设想的“自由”依赖哪些法律、道德与公共条件？",
        en: "Read markets through institutions: which legal, moral and public conditions support Smith's idea of freedom?",
        fr: "Lisez les marchés à travers les institutions : quelles conditions juridiques, morales et publiques rendent possible la liberté selon Smith ?"
      },
      source: { label: "Project Gutenberg — The Wealth of Nations", url: "https://www.gutenberg.org/ebooks/3300" }
    },
    {
      id: "general-theory",
      category: "economics",
      region: "europe",
      year: "1936",
      title: { zh: "《就业、利息和货币通论》", en: "The General Theory of Employment, Interest and Money", fr: "Théorie générale de l'emploi, de l'intérêt et de la monnaie" },
      author: "约翰·梅纳德·凯恩斯 / John Maynard Keynes",
      summary: {
        zh: "挑战古典经济学关于充分就业自动恢复的假设，强调有效需求、预期与不确定性。它奠定了宏观经济政策的重要语言，也持续受到不同学派争论。",
        en: "Challenges classical assumptions that full employment returns automatically, emphasising effective demand, expectations and uncertainty. It established a major language for macroeconomic policy and remains debated across schools.",
        fr: "Conteste l'idée classique d'un retour automatique au plein emploi et met en avant demande effective, anticipations et incertitude. Il fonde un langage majeur de la politique macroéconomique et reste disputé entre écoles."
      },
      lens: {
        zh: "区分不确定性下的预期与可计算风险，观察政策论证如何依赖这种区分。",
        en: "Distinguish expectation under uncertainty from calculable risk, and see how policy arguments depend on that distinction.",
        fr: "Distinguez l'anticipation sous incertitude du risque calculable, et observez la dépendance des arguments politiques à cette distinction."
      },
      source: { label: "John Maynard Keynes, The General Theory of Employment, Interest and Money, Macmillan, 1936" }
    },
    {
      id: "great-transformation",
      category: "economics",
      region: "europe",
      year: "1944",
      title: { zh: "《大转型》", en: "The Great Transformation", fr: "La Grande Transformation" },
      author: "卡尔·波兰尼 / Karl Polanyi",
      summary: {
        zh: "讨论市场社会如何从社会关系中“脱嵌”，以及社会如何通过保护性反应抵抗商品化。它把经济史、制度与社会理论结合起来，是理解市场自然化的重要批判资源。",
        en: "Examines how market society became “disembedded” from social relations and how society responds with protective counter-movements against commodification. It combines economic history, institutions and social theory to question the naturalisation of markets.",
        fr: "Analyse le « désencastrement » de la société de marché hors des relations sociales et les réactions protectrices contre la marchandisation. Histoire économique, institutions et théorie sociale s'y combinent pour critiquer la naturalisation du marché."
      },
      lens: {
        zh: "追问什么被当作商品：土地、劳动和货币为何不能像普通商品一样处理？",
        en: "Ask what is being treated as a commodity: why can land, labour and money not be handled like ordinary goods?",
        fr: "Demandez ce qui est traité comme marchandise : pourquoi terre, travail et monnaie ne peuvent-ils être traités comme des biens ordinaires ?"
      },
      source: { label: "Karl Polanyi, The Great Transformation, Farrar & Rinehart, 1944; Beacon Press edition" }
    },
    {
      id: "capitalism-freedom",
      category: "economics",
      region: "americas",
      year: "1962",
      title: { zh: "《资本主义与自由》", en: "Capitalism and Freedom", fr: "Capitalisme et liberté" },
      author: "米尔顿·弗里德曼 / Milton Friedman",
      summary: {
        zh: "以自由选择、竞争市场和有限政府为核心，讨论教育、货币、福利与职业许可等政策。它代表一种重要政治经济立场，应与福利国家、外部性与不平等的反论一起阅读。",
        en: "Argues from free choice, competitive markets and limited government across education, money, welfare and occupational licensing. It represents a major political-economic position and should be read alongside arguments about welfare states, externalities and inequality.",
        fr: "Défend choix libre, marchés concurrentiels et gouvernement limité dans l'éducation, la monnaie, le welfare et les licences professionnelles. Position politico-économique majeure, à lire avec les objections sur l'État social, les externalités et les inégalités."
      },
      lens: {
        zh: "把“自由”拆成形式选择与实际能力：谁拥有退出、谈判和信息？",
        en: "Split “freedom” into formal choice and practical capacity: who has exit, bargaining power and information?",
        fr: "Décomposez la « liberté » en choix formel et capacité réelle : qui dispose de sortie, de pouvoir de négociation et d'information ?"
      },
      source: { label: "Milton Friedman, Capitalism and Freedom, University of Chicago Press, 1962" }
    },
    {
      id: "affluent-society",
      category: "economics",
      region: "americas",
      year: "1958",
      title: { zh: "《丰裕社会》", en: "The Affluent Society", fr: "L'Ère de l'opulence" },
      author: "约翰·肯尼思·加尔布雷思 / John Kenneth Galbraith",
      summary: {
        zh: "批评私人消费繁荣与公共部门贫乏并存，并提出“依赖效应”等概念。它把经济问题与公共选择、广告和社会价值联系起来。",
        en: "Criticises the coexistence of private affluence and public poverty and develops ideas such as the dependence effect. It connects economic questions to public choice, advertising and social values.",
        fr: "Critique la coexistence de l'opulence privée et de la pauvreté publique et développe notamment l'« effet de dépendance ». Il relie économie, choix publics, publicité et valeurs sociales."
      },
      lens: {
        zh: "观察需求如何被制造：消费选择是偏好表达，也是制度与广告的产物。",
        en: "Observe how wants are produced: consumption expresses preference and is also shaped by institutions and advertising.",
        fr: "Observez la fabrication des besoins : la consommation exprime des préférences et se forme aussi par les institutions et la publicité."
      },
      source: { label: "John Kenneth Galbraith, The Affluent Society, Houghton Mifflin, 1958" }
    },
    {
      id: "development-freedom",
      category: "economics",
      region: "india",
      year: "1999",
      title: { zh: "《以自由看待发展》", en: "Development as Freedom", fr: "Un nouveau modèle économique" },
      author: "阿马蒂亚·森 / Amartya Sen",
      summary: {
        zh: "把发展定义为人的可行能力与实质自由的扩展，而不只看收入增长。教育、健康、政治参与和安全感因此成为经济评价的核心。",
        en: "Defines development as the expansion of capabilities and substantive freedoms rather than income growth alone. Education, health, political participation and security therefore become central to economic evaluation.",
        fr: "Définit le développement comme l'extension des capabilités et des libertés substantielles, non comme la seule croissance du revenu. Éducation, santé, participation politique et sécurité deviennent centrales dans l'évaluation économique."
      },
      lens: {
        zh: "把收入之外的“能做什么、能成为什么”写成一份可比较的清单。",
        en: "Write a comparable list of what people are actually able to do and become beyond income.",
        fr: "Dressez une liste comparable de ce que les personnes peuvent réellement faire et devenir au-delà du revenu."
      },
      source: { label: "Amartya Sen, Development as Freedom, Alfred A. Knopf, 1999" }
    },
    {
      id: "capital-21",
      category: "economics",
      region: "europe",
      year: "2013",
      title: { zh: "《二十一世纪资本论》", en: "Capital in the Twenty-First Century", fr: "Le Capital au XXIe siècle" },
      author: "托马斯·皮凯蒂 / Thomas Piketty",
      summary: {
        zh: "用长时段税收与财富数据讨论资本回报率、经济增长与财富集中，提出 r > g 等核心观察。它的数据贡献与理论解释都属于持续争论的一部分。",
        en: "Uses long-run tax and wealth data to examine returns on capital, growth and concentration, with the observation r > g at its centre. Both its data contribution and theoretical interpretation remain contested.",
        fr: "À partir de données fiscales et patrimoniales de long terme, examine rendement du capital, croissance et concentration, autour de r > g. L'apport empirique comme l'interprétation théorique restent débattus."
      },
      lens: {
        zh: "把数据趋势与因果解释分开，注意财富定义、税制差异和资本收益估计。",
        en: "Separate data trends from causal explanation, attending to definitions of wealth, tax regimes and estimates of returns.",
        fr: "Séparez tendances empiriques et explication causale : définitions de la richesse, régimes fiscaux et estimations du rendement comptent."
      },
      source: { label: "Thomas Piketty, Le Capital au XXIe siècle, Seuil, 2013; Harvard University Press, 2014" }
    },
    {
      id: "governing-commons",
      category: "economics",
      region: "americas",
      year: "1990",
      title: { zh: "《公共事物的治理之道》", en: "Governing the Commons", fr: "Governing the Commons" },
      author: "埃莉诺·奥斯特罗姆 / Elinor Ostrom",
      summary: {
        zh: "通过灌溉、渔业与森林等案例表明，公共资源并不必然导致“公地悲剧”。地方规则、边界、监督和冲突解决机制可以让群体自行治理。",
        en: "Case studies of irrigation, fisheries and forests show that common resources do not inevitably produce a “tragedy of the commons”. Local rules, boundaries, monitoring and conflict resolution can enable collective self-governance.",
        fr: "Des études de cas sur l'irrigation, la pêche et les forêts montrent que les ressources communes ne produisent pas nécessairement une « tragédie des communs ». Règles locales, frontières, surveillance et résolution des conflits permettent une auto-gouvernance collective."
      },
      lens: {
        zh: "不要只在国家与市场之间二选一：观察地方制度如何设计、监督和纠错。",
        en: "Do not choose only between state and market: observe how local institutions are designed, monitored and corrected.",
        fr: "N'opposez pas seulement État et marché : observez comment les institutions locales se conçoivent, se surveillent et se corrigent."
      },
      source: { label: "Elinor Ostrom, Governing the Commons, Cambridge University Press, 1990" }
    }
  ]
};
