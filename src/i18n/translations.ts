export type Lang = 'en' | 'fr' | 'bhs';

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
      process: 'How I work',
      cta: 'Start a project',
    },
    hero: {
      eyebrow: 'Sabrina Caber — Certified translator FR ↔ EN',
      phrases: { en: 'Words are my craft.', fr: 'Les mots sont mon métier.', bhs: 'Riječi su moj zanat.' },
      subtitle:
        'Skilled translator fluent in both French and English, and an experienced content writer. I craft clear, compelling language that connects your brand with the right audience.',
      cta1: 'Start a project',
      cta2: 'See services',
    },
    about: {
      titleAlt: 'À propos',
      tag: 'About Me',
      titleLine1: 'Where language',
      titleLine2: 'meets precision',
      body1:
        'I am a skilled translator fluent in both French and English, and an experienced content writer. I work as a professional translator, content writer, proofreader and editor, and copywriter — and I am also a certified court interpreter.',
      body2:
        'I have worked as a copywriter and SEO content writer for companies such as DDC MLS, and bring together linguistic expertise with a sharp eye for detail. I am passionate about language and enjoy crafting engaging content that resonates.',
      note: 'Please note that the confidentiality of my clients is of high importance to me.',
      facts: [
        { value: 'Since 2015', label: 'Professional translator and interpreter' },
        { value: '3 languages', label: 'French · English · Bosnian' },
        { value: 'Certified', label: 'Court interpreter FR ↔ EN' },
        { value: 'MA', label: 'French Language & Literature, University of Sarajevo' },
      ],
      skills: [
        'Translation', 'Content Writing', 'SEO', 'Copywriting',
        'Proofreading', 'Editing', 'French · English',
        'Canva', 'Adobe Illustrator', 'Research',
      ],
      cta: 'Work With Me',
    },
    services: {
      titleAlt: 'Prestations',
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
    process: {
      tag: 'How I work',
      titleLine1: 'From brief',
      titleLine2: 'to delivery',
      titleAlt: 'Ma méthode',
      steps: [
        { title: 'Brief', body: 'You share the text, the audience and the deadline. I confirm the scope and send a clear quote.' },
        { title: 'Translate & write', body: 'A first draft that keeps your tone, terminology and intent intact.' },
        { title: 'Review', body: 'A careful proofreading pass, then your feedback is worked in.' },
        { title: 'Deliver', body: 'Final files in the format you need, on time and in full confidence.' },
      ],
    },
    work: {
      titleAlt: 'Parcours',
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
          type: 'experience',
        },
        {
          id: '02',
          title: 'DDC MLS / UPS',
          category: 'Copywriter & Translator',
          description:
            'Copywriting and translation work for DDC Multilingual Solutions, supporting UPS operations across France and Luxembourg. Translating documents, marketing materials, and internal communications.',
          year: '2019 – 2021',
          type: 'experience',
        },
        {
          id: '03',
          title: 'Certified Court Interpreter',
          category: 'French ↔ English',
          description:
            'Certified court interpreter providing accurate and impartial interpretation services in legal proceedings. Maintaining the highest standards of confidentiality and professional ethics.',
          year: '2018 – 2019',
          type: 'experience',
        },
        {
          id: '04',
          title: 'Energoinvest',
          category: 'Translator & Interpreter',
          description:
            'Translation and interpretation services for Energoinvest, working across Algeria and Sarajevo. Facilitating communication between French-speaking and local teams on infrastructure and engineering projects.',
          year: '2015 – 2018',
          type: 'experience',
        },
        {
          id: '05',
          title: 'MA French Language & Literature',
          category: 'University of Sarajevo',
          description:
            "Master's degree in French Language and Literature, building deep expertise in linguistics, literary analysis, and translation theory.",
          year: '2013 – 2015',
          type: 'education',
        },
        {
          id: '06',
          title: 'SEO & Digital Marketing Certifications',
          category: 'Google · SEO Bootcamp',
          description:
            'Google Digital Marketing Certificate and SEO Bootcamp certification — combining technical SEO knowledge with digital marketing strategy to deliver content that performs.',
          year: '2020 – 2021',
          type: 'education',
        },
      ],
    },
    contact: {
      titleAlt: 'Écrivez-moi',
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
        url: 'https://calendly.com/sabrinacaber/30min',
        label: 'Book a Discovery Call',
        note: 'Free 30-minute intro call',
        points: [
          'Talk through your text, audience and deadline',
          'Get a clear scope and quote',
          'No obligation, no cost',
        ],
        emailPrompt: 'Prefer email?',
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
        successMsg: 'Thank you. Your message has been sent.',
        sending: 'Sending…',
        errors: {
          name: 'Please enter your name.',
          email: 'Enter a valid email address, like name@company.com.',
          message: 'Tell me a little about your project.',
          network: 'Your message could not be sent. Please try again, or email me directly at sabrinacaber@gmail.com.',
        },
      },
    },
    footer: {
      tagline: 'Translator · Content Writer · Copywriter',
      links: { about: 'About', services: 'Services', process: 'How I work', experience: 'Experience', contact: 'Contact' },
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
      process: 'Méthode',
      cta: 'Démarrer un projet',
    },
    hero: {
      eyebrow: 'Sabrina Caber — Traductrice certifiée FR ↔ AN',
      phrases: { en: 'Words are my craft.', fr: 'Les mots sont mon métier.', bhs: 'Riječi su moj zanat.' },
      subtitle:
        'Traductrice qualifiée, parfaitement bilingue français-anglais, et rédactrice de contenu expérimentée. Je crée des textes clairs et percutants qui connectent votre marque avec le bon public.',
      cta1: 'Démarrer un projet',
      cta2: 'Voir les services',
    },
    about: {
      titleAlt: 'About',
      tag: 'À propos',
      titleLine1: 'Là où la langue',
      titleLine2: 'rencontre la précision',
      body1:
        "Je suis une traductrice qualifiée, parfaitement bilingue français-anglais, et une rédactrice de contenu expérimentée. Je travaille comme traductrice professionnelle, rédactrice, correctrice-réviseure et rédactrice publicitaire — et je suis également interprète judiciaire certifiée.",
      body2:
        "J'ai travaillé comme rédactrice SEO et copywriter pour des entreprises telles que DDC MLS, alliant expertise linguistique et sens aigu du détail. Passionnée par les langues, je prends plaisir à créer des contenus engageants qui résonnent.",
      note: 'Veuillez noter que la confidentialité de mes clients est de la plus haute importance pour moi.',
      facts: [
        { value: 'Depuis 2015', label: 'Traductrice et interprète professionnelle' },
        { value: '3 langues', label: 'Français · Anglais · Bosnien' },
        { value: 'Certifiée', label: 'Interprète judiciaire FR ↔ AN' },
        { value: 'Master', label: 'Langue et littérature françaises, Université de Sarajevo' },
      ],
      skills: [
        'Traduction', 'Rédaction', 'SEO', 'Copywriting',
        'Relecture', 'Révision', 'Français · Anglais',
        'Canva', 'Adobe Illustrator', 'Recherche',
      ],
      cta: 'Travaillons ensemble',
    },
    services: {
      titleAlt: 'Services',
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
    process: {
      tag: 'Ma méthode',
      titleLine1: 'Du brief',
      titleLine2: 'à la livraison',
      titleAlt: 'How I work',
      steps: [
        { title: 'Brief', body: 'Vous me transmettez le texte, le public visé et l\'échéance. Je confirme le périmètre et vous envoie un devis clair.' },
        { title: 'Traduction & rédaction', body: 'Une première version qui respecte votre ton, votre terminologie et votre intention.' },
        { title: 'Relecture', body: 'Une relecture attentive, puis j\'intègre vos retours.' },
        { title: 'Livraison', body: 'Les fichiers finaux dans le format souhaité, dans les délais et en toute confidentialité.' },
      ],
    },
    work: {
      titleAlt: 'Journey',
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
          type: 'experience',
        },
        {
          id: '02',
          title: 'DDC MLS / UPS',
          category: 'Copywriter & Traductrice',
          description:
            "Rédaction et traduction pour DDC Multilingual Solutions, en soutien aux opérations UPS en France et au Luxembourg. Traduction de documents, supports marketing et communications internes.",
          year: '2019 – 2021',
          type: 'experience',
        },
        {
          id: '03',
          title: 'Interprète judiciaire certifiée',
          category: 'Français ↔ Anglais',
          description:
            "Prestation d'interprétation précise et impartiale dans le cadre de procédures judiciaires. Respect des normes les plus élevées en matière de confidentialité et d'éthique professionnelle.",
          year: '2018 – 2019',
          type: 'experience',
        },
        {
          id: '04',
          title: 'Energoinvest',
          category: 'Traductrice & Interprète',
          description:
            "Services de traduction et d'interprétation pour Energoinvest, en Algérie et à Sarajevo. Facilitation de la communication entre équipes francophones et locales sur des projets d'infrastructure.",
          year: '2015 – 2018',
          type: 'experience',
        },
        {
          id: '05',
          title: 'Master Langue & Littérature françaises',
          category: 'Université de Sarajevo',
          description:
            "Master en langue et littérature françaises, développant une expertise approfondie en linguistique, analyse littéraire et théorie de la traduction.",
          year: '2013 – 2015',
          type: 'education',
        },
        {
          id: '06',
          title: 'Certifications SEO & Marketing digital',
          category: 'Google · SEO Bootcamp',
          description:
            'Certificat Google Digital Marketing et certification SEO Bootcamp — alliant connaissances techniques en SEO et stratégie de marketing digital pour produire des contenus performants.',
          year: '2020 – 2021',
          type: 'education',
        },
      ],
    },
    contact: {
      titleAlt: 'Get in touch',
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
        url: 'https://calendly.com/sabrinacaber/30min',
        label: 'Réserver un appel découverte',
        note: 'Appel intro gratuit de 30 minutes',
        points: [
          'Échangeons sur votre texte, votre public et vos délais',
          'Recevez un périmètre et un devis clairs',
          'Sans engagement, sans frais',
        ],
        emailPrompt: 'Vous préférez l’e-mail ?',
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
        successMsg: 'Merci. Votre message a bien été envoyé.',
        sending: 'Envoi…',
        errors: {
          name: 'Veuillez indiquer votre nom.',
          email: 'Saisissez une adresse e-mail valide, par exemple nom@entreprise.com.',
          message: 'Décrivez brièvement votre projet.',
          network: 'Votre message n\'a pas pu être envoyé. Réessayez ou écrivez-moi directement à sabrinacaber@gmail.com.',
        },
      },
    },
    footer: {
      tagline: 'Traductrice · Rédactrice · Copywriter',
      links: { about: 'À propos', services: 'Services', process: 'Méthode', experience: 'Expérience', contact: 'Contact' },
      copyright: 'Tous droits réservés.',
      developedBy: 'Développé par',
    },
  },

  bhs: {
    meta: {
      title: 'Sabrina Caber — Prevoditeljica & Kreatorica sadržaja',
      description:
        'Certificirana prevoditeljica (FR/EN) i iskusna kreatorica sadržaja. SEO sadržaj, copywriting, lektura i korektura za brendove širom svijeta.',
    },
    nav: {
      about: 'O meni',
      services: 'Usluge',
      experience: 'Iskustvo',
      contact: 'Kontakt',
      process: 'Kako radim',
      cta: 'Započnimo projekat',
    },
    hero: {
      eyebrow: 'Sabrina Caber — Certificirana prevoditeljica FR ↔ EN',
      phrases: { en: 'Words are my craft.', fr: 'Les mots sont mon métier.', bhs: 'Riječi su moj zanat.' },
      subtitle:
        'Kvalificirana prevoditeljica tečna u francuskom i engleskom jeziku, te iskusna kreatorica sadržaja. Kreiram jasan, uvjerljiv tekst koji povezuje vaš brend s pravom publikom.',
      cta1: 'Započnimo projekat',
      cta2: 'Pogledajte usluge',
    },
    about: {
      titleAlt: 'À propos',
      tag: 'O meni',
      titleLine1: 'Gdje se jezik',
      titleLine2: 'susreće s preciznošću',
      body1:
        'Kvalificirana sam prevoditeljica tečna u francuskom i engleskom jeziku, te iskusna kreatorica sadržaja. Radim kao profesionalna prevoditeljica, kreatorica sadržaja, lektorica i korektorica, te copywriterica — a također sam i certificirana sudska prevoditeljica.',
      body2:
        'Radila sam kao copywriterica i SEO kreatorica sadržaja za kompanije kao što je DDC MLS, spajajući lingvističku stručnost s izoštrenim okom za detalje. Strastvena sam prema jeziku i uživam u kreiranju privlačnog sadržaja koji ostavlja utisak.',
      note: 'Napominjem da je povjerljivost mojih klijenata za mene od izuzetne važnosti.',
      facts: [
        { value: 'Od 2015.', label: 'Profesionalna prevoditeljica i tumač' },
        { value: '3 jezika', label: 'Francuski · Engleski · Bosanski' },
        { value: 'Certificirana', label: 'Sudska prevoditeljica FR ↔ EN' },
        { value: 'MA', label: 'Francuski jezik i književnost, Univerzitet u Sarajevu' },
      ],
      skills: [
        'Prevođenje', 'Kreiranje sadržaja', 'SEO', 'Copywriting',
        'Lektura', 'Korektura', 'Francuski · Engleski',
        'Canva', 'Adobe Illustrator', 'Istraživanje',
      ],
      cta: 'Radite sa mnom',
    },
    services: {
      titleAlt: 'Prestations',
      tag: 'Usluge',
      titleLine1: 'Šta',
      titleLine2: 'nudim',
      subtitle: 'Fokusiran raspon jezičkih usluga\nza brendove, kompanije i pojedince.',
      ctaQuestion: 'Imate projekat na umu?',
      ctaBtn: 'Razgovarajmo',
      items: [
        {
          number: '01',
          title: 'Prevođenje FR ↔ EN',
          description:
            'Precizno, tečno prevođenje između francuskog i engleskog jezika — uz očuvanje tona, nijansi i namjere. Od dokumenata i ugovora do web stranica i marketinških materijala, svaka riječ je bitna.',
          tags: ['FR → EN', 'EN → FR', 'Dokumenti', 'Marketing'],
        },
        {
          number: '02',
          title: 'Kreiranje sadržaja',
          description:
            'Privlačan, dobro istražen sadržaj koji govori vašoj publici. Blog objave, članci, web tekstovi, newsletteri — sadržaj koji informiše, povezuje i konvertuje.',
          tags: ['Blog objave', 'Web tekstovi', 'Članci', 'Newsletteri'],
        },
        {
          number: '03',
          title: 'SEO kreiranje sadržaja',
          description:
            'Sadržaj optimiziran za pretraživače bez žrtvovanja čitljivosti. Pisanje zasnovano na ključnim riječima koje se dobro pozicionira i zadržava pažnju čitaoca od prvog do posljednjeg reda.',
          tags: ['SEO strategija', 'Ključne riječi', 'On-Page SEO', 'Dugi format'],
        },
        {
          number: '04',
          title: 'Lektura i korektura',
          description:
            'Pažljiv, detaljan pogled na vaš tekst — gramatika, jasnoća, dosljednost i tok. Bilo da se radi o brzoj lekturi ili potpunoj strukturalnoj korekturi, vaš sadržaj će ostaviti uglađen utisak.',
          tags: ['Lektura', 'Korektura', 'Stil i jasnoća', 'Dosljednost'],
        },
        {
          number: '05',
          title: 'Copywriting',
          description:
            'Ubjedljiv tekst koji pokreće ljude na akciju — od slogana i landing stranica do opisa proizvoda i email kampanja. Jezik koji prodaje, a da se tako ne osjeća.',
          tags: ['Landing stranice', 'Reklamni tekst', 'Email kampanje', 'Glas brenda'],
        },
      ],
    },
    process: {
      tag: 'Kako radim',
      titleLine1: 'Od upita',
      titleLine2: 'do isporuke',
      titleAlt: 'Ma méthode',
      steps: [
        { title: 'Upit', body: 'Pošaljete mi tekst, ciljnu publiku i rok. Potvrđujem obim posla i šaljem jasnu ponudu.' },
        { title: 'Prevod i pisanje', body: 'Prva verzija koja čuva vaš ton, terminologiju i namjeru.' },
        { title: 'Lektura', body: 'Pažljiva lektura, a zatim unosim vaše povratne informacije.' },
        { title: 'Isporuka', body: 'Konačni fajlovi u formatu koji vam treba, na vrijeme i uz punu povjerljivost.' },
      ],
    },
    work: {
      titleAlt: 'Parcours',
      tag: 'Iskustvo i obrazovanje',
      titleLine1: 'Moj',
      titleLine2: 'put',
      subtitle: 'Pozadina u prevođenju,\nkreiranju sadržaja i jezičkim uslugama.',
      cta: 'Sarađujmo',
      badgeExp: 'Iskustvo',
      badgeEdu: 'Obrazovanje',
      items: [
        {
          id: '01',
          title: 'SEO kreatorica sadržaja',
          category: 'Freelance',
          description:
            'Pisanje SEO-optimiziranog sadržaja za raznolike klijente u višestrukim industrijama. Istraživanje ključnih riječi, dugački članci i strategije sadržaja koje se rangiraju i angažuju.',
          year: '2021 – Danas',
          type: 'experience',
        },
        {
          id: '02',
          title: 'DDC MLS / UPS',
          category: 'Copywriterica i prevoditeljica',
          description:
            'Copywriting i prevoditeljski rad za DDC Multilingual Solutions, podrška UPS operacijama u Francuskoj i Luksemburgu. Prevođenje dokumenata, marketinških materijala i internih komunikacija.',
          year: '2019 – 2021',
          type: 'experience',
        },
        {
          id: '03',
          title: 'Certificirana sudska prevoditeljica',
          category: 'Francuski ↔ Engleski',
          description:
            'Certificirana sudska prevoditeljica koja pruža precizne i nepristrasne usluge prevođenja u pravnim postupcima. Održavanje najviših standarda povjerljivosti i profesionalne etike.',
          year: '2018 – 2019',
          type: 'experience',
        },
        {
          id: '04',
          title: 'Energoinvest',
          category: 'Prevoditeljica i tumač',
          description:
            'Usluge prevođenja i tumačenja za Energoinvest, rad u Alžiru i Sarajevu. Olakšavanje komunikacije između frankofonih i lokalnih timova na infrastrukturnim i inženjerskim projektima.',
          year: '2015 – 2018',
          type: 'experience',
        },
        {
          id: '05',
          title: 'MA Francuski jezik i književnost',
          category: 'Univerzitet u Sarajevu',
          description:
            'Magistarski studij francuskog jezika i književnosti, izgradnja duboke stručnosti u lingvistici, književnoj analizi i teoriji prevođenja.',
          year: '2013 – 2015',
          type: 'education',
        },
        {
          id: '06',
          title: 'SEO i digitalni marketing certifikati',
          category: 'Google · SEO Bootcamp',
          description:
            'Google Digital Marketing certifikat i SEO Bootcamp certifikacija — spajanje tehničkog SEO znanja sa strategijom digitalnog marketinga za isporuku sadržaja koji ostvaruje rezultate.',
          year: '2020 – 2021',
          type: 'education',
        },
      ],
    },
    contact: {
      titleAlt: 'Écrivez-moi',
      tag: 'Kontaktirajte me',
      titleLine1: 'Spremni da započnete',
      titleLine2: 'nešto veliko?',
      body: 'Bilo da vam treba prevod, uglađen sadržaj ili svjež pogled na vaš tekst — rado bih čula o vašem projektu. Svaka odlična saradnja počinje razgovorom.',
      note: 'Napominjem da je povjerljivost mojih klijenata za mene od izuzetne važnosti.',
      labels: {
        email: 'Email',
        phone: 'Telefon',
        languages: 'Jezici',
        availability: 'Dostupnost',
      },
      languagesValue: 'Francuski · Engleski · Bosanski',
      availableText: 'Dostupna za nove projekte',
      social: [
        { label: 'LinkedIn', url: 'https://linkedin.com/in/sabrinacaber' },
      ],
      calendly: {
        url: 'https://calendly.com/sabrinacaber/30min',
        label: 'Zakažite upoznavajući poziv',
        note: 'Besplatan 30-minutni uvodni poziv',
        points: [
          'Razgovaramo o vašem tekstu, publici i roku',
          'Dobijate jasan obim posla i ponudu',
          'Bez obaveze i bez troškova',
        ],
        emailPrompt: 'Više volite email?',
      },
      form: {
        nameLabel: 'Vaše ime',
        namePlaceholder: 'Amina Hodžić',
        emailLabel: 'Email adresa',
        emailPlaceholder: 'amina@firma.ba',
        serviceLabel: 'Potrebna usluga',
        servicePlaceholder: 'Odaberite uslugu…',
        serviceOptions: [
          { value: 'translation', label: 'Prevođenje (FR ↔ EN)' },
          { value: 'content', label: 'Kreiranje sadržaja' },
          { value: 'seo', label: 'SEO kreiranje sadržaja' },
          { value: 'proofreading', label: 'Lektura i korektura' },
          { value: 'copywriting', label: 'Copywriting' },
          { value: 'other', label: 'Ostalo' },
        ],
        messageLabel: 'Recite mi o svom projektu',
        messagePlaceholder: 'Radim na…',
        submitBtn: 'Pošaljite poruku',
        successMsg: 'Hvala. Vaša poruka je poslana.',
        sending: 'Slanje…',
        errors: {
          name: 'Unesite svoje ime.',
          email: 'Unesite ispravnu email adresu, npr. ime@firma.ba.',
          message: 'Ukratko opišite svoj projekat.',
          network: 'Poruka nije poslana. Pokušajte ponovo ili mi pišite direktno na sabrinacaber@gmail.com.',
        },
      },
    },
    footer: {
      tagline: 'Prevoditeljica · Kreatorica sadržaja · Copywriterica',
      links: { about: 'O meni', services: 'Usluge', process: 'Kako radim', experience: 'Iskustvo', contact: 'Kontakt' },
      copyright: 'Sva prava zadržana.',
      developedBy: 'Razvio',
    },
  },
} as const;
