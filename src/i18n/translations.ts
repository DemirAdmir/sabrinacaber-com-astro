export type Lang = 'en' | 'fr';

export const translations = {
  en: {
    meta: {
      title: 'Sabrina Caber — Translator & Content Writer',
      description:
        'Certified translator (FR/EN) and experienced content writer. SEO content, copywriting, proofreading and editing for brands worldwide.',
    },
    nav: {
      about: 'About',
      services: 'Services',
      experience: 'Experience',
      contact: 'Contact',
      cta: 'Hire Me',
    },
    hero: {
      tag1: 'Certified Translator FR/EN',
      tag2: 'Content Writer',
      titleLine1: "Hi, I'm Sabrina —",
      titleLine2: 'words are my craft.',
      subtitle:
        'Skilled translator fluent in both French and English, and an experienced content writer. I craft clear, compelling language that connects your brand with the right audience.',
      cta1: 'My Services',
      cta2: 'About Me',
      scroll: 'Scroll',
      marquee: [
        'Translation', 'Content Writing', 'SEO Content',
        'Proofreading', 'Copywriting', 'Editing', 'French ↔ English',
      ],
    },
    about: {
      tag: 'About Me',
      titleLine1: 'Where language',
      titleLine2: 'meets precision',
      body1:
        'I am a skilled translator fluent in both French and English, and an experienced content writer. I work as a professional translator, content writer, proofreader and editor, and copywriter — and I am also a certified court interpreter.',
      body2:
        'I have worked as a copywriter and SEO content writer for companies such as DDC MLS, and bring together linguistic expertise with a sharp eye for detail. I am passionate about language and enjoy crafting engaging content that resonates.',
      note: 'Please note that the confidentiality of my clients is of high importance to me.',
      stats: [
        { num: '15+', label: 'Happy Clients' },
        { num: '20+', label: 'Projects Done' },
        { num: '3+', label: 'Years of Experience' },
      ],
      skills: [
        'Translation', 'Content Writing', 'SEO', 'Copywriting',
        'Proofreading', 'Editing', 'French · English',
        'Canva', 'Adobe Illustrator', 'Research',
      ],
      cta: 'Work With Me',
    },
    services: {
      tag: 'Services',
      titleLine1: 'What I',
      titleLine2: 'bring to the table',
      subtitle: 'A focused range of language services\nfor brands, businesses, and individuals.',
      ctaQuestion: 'Have a project in mind?',
      ctaBtn: "Let's talk",
      items: [
        {
          number: '01',
          title: 'Translation FR ↔ EN',
          description:
            'Accurate, fluent translation between French and English — preserving tone, nuance, and intent. From documents and contracts to websites and marketing materials, every word counts.',
          tags: ['FR → EN', 'EN → FR', 'Documents', 'Marketing'],
        },
        {
          number: '02',
          title: 'Content Writing',
          description:
            'Engaging, well-researched content that speaks to your audience. Blog posts, articles, web copy, newsletters — content that informs, connects, and converts.',
          tags: ['Blog Posts', 'Web Copy', 'Articles', 'Newsletters'],
        },
        {
          number: '03',
          title: 'SEO Content Writing',
          description:
            'Content optimised for search engines without sacrificing readability. Keyword-informed writing that ranks well and keeps readers engaged from the first line to the last.',
          tags: ['SEO Strategy', 'Keyword Research', 'On-Page SEO', 'Long-Form'],
        },
        {
          number: '04',
          title: 'Proofreading & Editing',
          description:
            'A careful, meticulous eye over your text — grammar, clarity, consistency, and flow. Whether a quick proofread or a full structural edit, your content will leave a polished impression.',
          tags: ['Proofreading', 'Copy Editing', 'Style & Clarity', 'Consistency'],
        },
        {
          number: '05',
          title: 'Copywriting',
          description:
            'Persuasive copy that moves people to act — from taglines and landing pages to product descriptions and email campaigns. Language that sells, without feeling like it.',
          tags: ['Landing Pages', 'Ad Copy', 'Email Campaigns', 'Brand Voice'],
        },
      ],
    },
    work: {
      tag: 'Experience & Education',
      titleLine1: 'My',
      titleLine2: 'journey',
      subtitle: 'A background in translation,\ncontent writing, and language services.',
      cta: "Let's work together",
      badgeExp: 'Experience',
      badgeEdu: 'Education',
      items: [
        {
          id: '01',
          title: 'SEO Content Writer',
          category: 'Freelance',
          description:
            'Writing SEO-optimised content for diverse clients across multiple industries. Keyword research, long-form articles, and content strategies that rank and engage.',
          year: '2021 – Present',
          color: '#6b3fa8',
          type: 'experience',
        },
        {
          id: '02',
          title: 'DDC MLS / UPS',
          category: 'Copywriter & Translator',
          description:
            'Copywriting and translation work for DDC Multilingual Solutions, supporting UPS operations across France and Luxembourg. Translating documents, marketing materials, and internal communications.',
          year: '2019 – 2021',
          color: '#4a2d8c',
          type: 'experience',
        },
        {
          id: '03',
          title: 'Certified Court Interpreter',
          category: 'French ↔ English',
          description:
            'Certified court interpreter providing accurate and impartial interpretation services in legal proceedings. Maintaining the highest standards of confidentiality and professional ethics.',
          year: '2018 – 2019',
          color: '#9b4dff',
          type: 'experience',
        },
        {
          id: '04',
          title: 'Energoinvest',
          category: 'Translator & Interpreter',
          description:
            'Translation and interpretation services for Energoinvest, working across Algeria and Sarajevo. Facilitating communication between French-speaking and local teams on infrastructure and engineering projects.',
          year: '2015 – 2018',
          color: '#3a6b4a',
          type: 'experience',
        },
        {
          id: '05',
          title: 'MA French Language & Literature',
          category: 'University of Sarajevo',
          description:
            "Master's degree in French Language and Literature, building deep expertise in linguistics, literary analysis, and translation theory.",
          year: '2013 – 2015',
          color: '#1d4a6b',
          type: 'education',
        },
        {
          id: '06',
          title: 'SEO & Digital Marketing Certifications',
          category: 'Google · SEO Bootcamp',
          description:
            'Google Digital Marketing Certificate and SEO Bootcamp certification — combining technical SEO knowledge with digital marketing strategy to deliver content that performs.',
          year: '2020 – 2021',
          color: '#8c4a2d',
          type: 'education',
        },
      ],
    },
    contact: {
      tag: 'Get in Touch',
      titleLine1: 'Ready to start',
      titleLine2: 'something great?',
      body: "Whether you need a translation, polished content, or a fresh perspective on your copy — I'd love to hear about your project. Every great collaboration starts with a conversation.",
      note: 'Please note that the confidentiality of my clients is of high importance to me.',
      labels: {
        email: 'Email',
        phone: 'Phone',
        languages: 'Languages',
        availability: 'Availability',
      },
      languagesValue: 'French · English · Bosnian',
      availableText: 'Available for new projects',
      social: [
        { label: 'LinkedIn', url: 'https://linkedin.com/in/sabrinacaber' },
      ],
      calendly: {
        url: 'https://calendly.com/sabrinacaber',
        label: 'Book a Discovery Call',
        note: 'Free 30-minute intro call',
      },
      form: {
        nameLabel: 'Your Name',
        namePlaceholder: 'Jane Smith',
        emailLabel: 'Email Address',
        emailPlaceholder: 'jane@company.com',
        serviceLabel: 'Service Needed',
        servicePlaceholder: 'Select a service…',
        serviceOptions: [
          { value: 'translation', label: 'Translation (FR ↔ EN)' },
          { value: 'content', label: 'Content Writing' },
          { value: 'seo', label: 'SEO Content Writing' },
          { value: 'proofreading', label: 'Proofreading & Editing' },
          { value: 'copywriting', label: 'Copywriting' },
          { value: 'other', label: 'Other' },
        ],
        messageLabel: 'Tell me about your project',
        messagePlaceholder: "I'm working on…",
        submitBtn: 'Send Message',
        successMsg: 'Message Sent ✓',
      },
    },
    footer: {
      tagline: 'Translator · Content Writer · Copywriter',
      links: { about: 'About', services: 'Services', experience: 'Experience', contact: 'Contact' },
      copyright: 'All rights reserved.',
      developedBy: 'Developed by',
    },
  },

  fr: {
    meta: {
      title: 'Sabrina Caber — Traductrice & Rédactrice de Contenu',
      description:
        'Traductrice certifiée (FR/AN) et rédactrice de contenu expérimentée. Rédaction SEO, copywriting, relecture et révision.',
    },
    nav: {
      about: 'À propos',
      services: 'Services',
      experience: 'Expérience',
      contact: 'Contact',
      cta: 'Me contacter',
    },
    hero: {
      tag1: 'Traductrice Certifiée FR/AN',
      tag2: 'Rédactrice de Contenu',
      titleLine1: 'Bonjour, je suis Sabrina —',
      titleLine2: 'les mots sont mon métier.',
      subtitle:
        'Traductrice qualifiée, parfaitement bilingue français-anglais, et rédactrice de contenu expérimentée. Je crée des textes clairs et percutants qui connectent votre marque avec le bon public.',
      cta1: 'Mes services',
      cta2: 'À propos',
      scroll: 'Défiler',
      marquee: [
        'Traduction', 'Rédaction', 'SEO',
        'Relecture', 'Copywriting', 'Révision', 'Français ↔ Anglais',
      ],
    },
    about: {
      tag: 'À propos',
      titleLine1: 'Là où la langue',
      titleLine2: 'rencontre la précision',
      body1:
        "Je suis une traductrice qualifiée, parfaitement bilingue français-anglais, et une rédactrice de contenu expérimentée. Je travaille comme traductrice professionnelle, rédactrice, correctrice-réviseure et rédactrice publicitaire — et je suis également interprète judiciaire certifiée.",
      body2:
        "J'ai travaillé comme rédactrice SEO et copywriter pour des entreprises telles que DDC MLS, alliant expertise linguistique et sens aigu du détail. Passionnée par les langues, je prends plaisir à créer des contenus engageants qui résonnent.",
      note: 'Veuillez noter que la confidentialité de mes clients est de la plus haute importance pour moi.',
      stats: [
        { num: '15+', label: 'Clients satisfaits' },
        { num: '20+', label: 'Projets réalisés' },
        { num: '3+', label: "Années d'expérience" },
      ],
      skills: [
        'Traduction', 'Rédaction', 'SEO', 'Copywriting',
        'Relecture', 'Révision', 'Français · Anglais',
        'Canva', 'Adobe Illustrator', 'Recherche',
      ],
      cta: 'Travaillons ensemble',
    },
    services: {
      tag: 'Services',
      titleLine1: 'Ce que je',
      titleLine2: 'mets sur la table',
      subtitle: 'Une gamme ciblée de services linguistiques\npour les marques, entreprises et particuliers.',
      ctaQuestion: 'Un projet en tête ?',
      ctaBtn: 'Discutons-en',
      items: [
        {
          number: '01',
          title: 'Traduction FR ↔ AN',
          description:
            "Traduction précise et fluide entre le français et l'anglais — préservant le ton, les nuances et l'intention. Des documents et contrats aux sites web et supports marketing, chaque mot compte.",
          tags: ['FR → AN', 'AN → FR', 'Documents', 'Marketing'],
        },
        {
          number: '02',
          title: 'Rédaction de contenu',
          description:
            'Un contenu engageant et bien documenté qui parle à votre audience. Articles de blog, textes web, newsletters — un contenu qui informe, connecte et convertit.',
          tags: ['Articles de blog', 'Textes web', 'Articles', 'Newsletters'],
        },
        {
          number: '03',
          title: 'Rédaction SEO',
          description:
            "Un contenu optimisé pour les moteurs de recherche sans sacrifier la lisibilité. Une rédaction orientée mots-clés qui se positionne bien et maintient l'engagement du lecteur.",
          tags: ['Stratégie SEO', 'Mots-clés', 'SEO On-Page', 'Longue portée'],
        },
        {
          number: '04',
          title: 'Relecture & Révision',
          description:
            "Un regard minutieux sur votre texte — grammaire, clarté, cohérence et fluidité. Qu'il s'agisse d'une simple relecture ou d'une révision complète, votre contenu aura un rendu impeccable.",
          tags: ['Relecture', 'Révision', 'Style & Clarté', 'Cohérence'],
        },
        {
          number: '05',
          title: 'Copywriting',
          description:
            "Un texte persuasif qui incite à l'action — des slogans et pages d'atterrissage aux descriptions de produits et campagnes e-mail. Un langage qui vend, sans en avoir l'air.",
          tags: ["Pages d'atterrissage", 'Annonces', 'E-mail', 'Voix de marque'],
        },
      ],
    },
    work: {
      tag: 'Expérience & Formation',
      titleLine1: 'Mon',
      titleLine2: 'parcours',
      subtitle: 'Un bagage en traduction,\nrédaction de contenu et services linguistiques.',
      cta: 'Travaillons ensemble',
      badgeExp: 'Expérience',
      badgeEdu: 'Formation',
      items: [
        {
          id: '01',
          title: 'Rédactrice SEO',
          category: 'Indépendante',
          description:
            'Rédaction de contenus optimisés SEO pour divers clients dans de multiples secteurs. Recherche de mots-clés, articles de longue portée et stratégies de contenu performantes.',
          year: '2021 – Présent',
          color: '#6b3fa8',
          type: 'experience',
        },
        {
          id: '02',
          title: 'DDC MLS / UPS',
          category: 'Copywriter & Traductrice',
          description:
            "Rédaction et traduction pour DDC Multilingual Solutions, en soutien aux opérations UPS en France et au Luxembourg. Traduction de documents, supports marketing et communications internes.",
          year: '2019 – 2021',
          color: '#4a2d8c',
          type: 'experience',
        },
        {
          id: '03',
          title: 'Interprète judiciaire certifiée',
          category: 'Français ↔ Anglais',
          description:
            "Prestation d'interprétation précise et impartiale dans le cadre de procédures judiciaires. Respect des normes les plus élevées en matière de confidentialité et d'éthique professionnelle.",
          year: '2018 – 2019',
          color: '#9b4dff',
          type: 'experience',
        },
        {
          id: '04',
          title: 'Energoinvest',
          category: 'Traductrice & Interprète',
          description:
            "Services de traduction et d'interprétation pour Energoinvest, en Algérie et à Sarajevo. Facilitation de la communication entre équipes francophones et locales sur des projets d'infrastructure.",
          year: '2015 – 2018',
          color: '#3a6b4a',
          type: 'experience',
        },
        {
          id: '05',
          title: 'Master Langue & Littérature françaises',
          category: 'Université de Sarajevo',
          description:
            "Master en langue et littérature françaises, développant une expertise approfondie en linguistique, analyse littéraire et théorie de la traduction.",
          year: '2013 – 2015',
          color: '#1d4a6b',
          type: 'education',
        },
        {
          id: '06',
          title: 'Certifications SEO & Marketing digital',
          category: 'Google · SEO Bootcamp',
          description:
            'Certificat Google Digital Marketing et certification SEO Bootcamp — alliant connaissances techniques en SEO et stratégie de marketing digital pour produire des contenus performants.',
          year: '2020 – 2021',
          color: '#8c4a2d',
          type: 'education',
        },
      ],
    },
    contact: {
      tag: 'Me contacter',
      titleLine1: 'Prêt·e à démarrer',
      titleLine2: 'quelque chose de remarquable ?',
      body: "Que vous ayez besoin d'une traduction, d'un contenu soigné ou d'un regard neuf sur votre texte — je serais ravie d'entendre parler de votre projet. Toute belle collaboration commence par une conversation.",
      note: 'Veuillez noter que la confidentialité de mes clients est de la plus haute importance pour moi.',
      labels: {
        email: 'E-mail',
        phone: 'Téléphone',
        languages: 'Langues',
        availability: 'Disponibilité',
      },
      languagesValue: 'Français · Anglais · Bosnien',
      availableText: 'Disponible pour de nouveaux projets',
      social: [
        { label: 'LinkedIn', url: 'https://linkedin.com/in/sabrinacaber' },
      ],
      calendly: {
        url: 'https://calendly.com/sabrinacaber',
        label: 'Réserver un appel découverte',
        note: 'Appel intro gratuit de 30 minutes',
      },
      form: {
        nameLabel: 'Votre nom',
        namePlaceholder: 'Marie Dupont',
        emailLabel: 'Adresse e-mail',
        emailPlaceholder: 'marie@entreprise.com',
        serviceLabel: 'Service souhaité',
        servicePlaceholder: 'Choisir un service…',
        serviceOptions: [
          { value: 'translation', label: 'Traduction (FR ↔ AN)' },
          { value: 'content', label: 'Rédaction de contenu' },
          { value: 'seo', label: 'Rédaction SEO' },
          { value: 'proofreading', label: 'Relecture & Révision' },
          { value: 'copywriting', label: 'Copywriting' },
          { value: 'other', label: 'Autre' },
        ],
        messageLabel: 'Parlez-moi de votre projet',
        messagePlaceholder: 'Je travaille sur…',
        submitBtn: 'Envoyer le message',
        successMsg: 'Message envoyé ✓',
      },
    },
    footer: {
      tagline: 'Traductrice · Rédactrice · Copywriter',
      links: { about: 'À propos', services: 'Services', experience: 'Expérience', contact: 'Contact' },
      copyright: 'Tous droits réservés.',
      developedBy: 'Développé par',
    },
  },
} as const;
