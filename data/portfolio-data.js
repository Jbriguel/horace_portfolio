// data/portfolio-data.js - Données complètes du portfolio

const portfolioData = {
  profile: {
    name: "Horace DOSSOU-YOVO",
    title: "Designer d'Expériences Visuelles Mémorables",
    tagline: "Créateur d'identités visuelles uniques",
    profileImage: "/author-image.jpg",
    location: "Bamako, Mali",
    email: "horace.dossou@gmail.com",
    phone: "+223 77 39 16 91",
    linkedin: "https://linkedin.com/in/horace-dossou-yovo",
    github: "https://github.com/horace-dossou",
    twitter: "https://twitter.com/horace_design",
    discord: "HoraceDesign#1234",
    youtube: "https://youtube.com/@horace-design",
    whatsapp: "https://wa.me/22377391691",
    tiktok: "https://tiktok.com/@horace_design",
    facebook: "https://facebook.com/horace.design",
    instagram: "https://instagram.com/horace_design",
  },

  hero: {
    title: "Salut, je suis Horace",
    subtitle:
      "Designer graphique et UX/UI passionné avec plus de 5 ans d'expérience dans la création d'univers visuels uniques et d'expériences utilisateur mémorables.",
    cta1: "Mes projets",
    cta2: "Discutons de votre projet",
    stats: [
      { label: "Années d'expérience", value: "5+" },
      { label: "Projets réalisés", value: "100+" },
      { label: "Marques accompagnées", value: "30+" },
      { label: "Clients satisfaits", value: "50+" },
    ],
  },

  about: {
    title: "Qui suis-je ?",
    description:
      "Designer graphique et UX/UI passionné avec plus de 5 ans d'expérience dans la création d'univers visuels uniques et d'expériences utilisateur mémorables. À travers une approche centrée sur l'utilisateur, je transforme des idées en designs percutants qui racontent une histoire et créent un impact durable.",
    skills: [
      "Design Graphique & Identité Visuelle",
      "UX/UI Design & Prototypage",
      "Direction Artistique",
      "Design d'Applications Mobiles",
    ],
    experience: [
      {
        company: "Studio Créatif Paris",
        position: "Designer Senior",
        period: "2022 - Présent",
        description:
          "Direction artistique et création d'identités visuelles pour des marques premium",
      },
      {
        company: "Agence Digitale Lyon",
        position: "UX/UI Designer",
        period: "2020 - 2022",
        description:
          "Conception d'interfaces utilisateur et d'expériences digitales pour des startups",
      },
      {
        company: "Freelance",
        position: "Designer Graphique",
        period: "2019 - 2020",
        description:
          "Création d'identités visuelles et supports de communication pour PME",
      },
    ],
  },

  projects: [
    {
      id: 1,
      title: "Identité Visuelle - Marque de Mode Éthique",
      category: "Identité Visuelle",
      description:
        "Création complète d'une identité visuelle pour une marque de mode éthique. Développement du logo, charte graphique, packaging et supports de communication. Une approche minimaliste et élégante qui reflète les valeurs durables de la marque.",
      image: "/projects/52418.png",
      technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "Figma", "After Effects"],
      features: [
        "Logo et déclinaisons",
        "Charte graphique complète",
        "Design packaging éco-responsable",
        "Supports de communication",
        "Guidelines d'utilisation",
      ],
      links: {
        youtube: "https://www.behance.net/horace-dossou",
        demo: "https://deohoracedossouyovo.netlify.app/",
        docs: "https://github.com/horace-dossou/brand-identity",
      },
      metrics: {
        duration: "3 mois",
        satisfaction: "98%",
        deliverables: "25+",
      },
    },
    {
      id: 2,
      title: "Application Mobile - Bien-être & Méditation",
      category: "UX/UI Design",
      description:
        "Conception complète de l'expérience utilisateur pour une application mobile de bien-être et méditation. Interface intuitive, parcours utilisateur optimisé et design system cohérent pour une expérience apaisante et engageante.",
      image: "/projects/52422.jpg",
      technologies: ["Figma", "Sketch", "Principle", "Adobe XD", "Zeplin"],
      features: [
        "Wireframes et prototypes",
        "Design system complet",
        "Animations micro-interactions",
        "Tests utilisateurs",
        "Responsive design",
      ],
      links: {
        youtube: "https://www.behance.net/horace-dossou",
        demo: "https://deohoracedossouyovo.netlify.app/",
        docs: "https://github.com/horace-dossou/wellness-app",
      },
      metrics: {
        screens: "50+",
        users_tested: "25",
        satisfaction: "95%",
      },
    },
    {
      id: 3,
      title: "Site Web - Portfolio Architecte",
      category: "Web Design",
      description:
        "Création d'un site web portfolio pour un cabinet d'architecture. Design épuré et moderne mettant en valeur les réalisations architecturales avec une navigation intuitive et une présentation visuelle impactante.",
      image: "/projects/52425.png",
      technologies: ["Figma", "Webflow", "HTML/CSS", "JavaScript", "GSAP"],
      features: [
        "Design responsive",
        "Galerie interactive",
        "Animations fluides",
        "Optimisation SEO",
        "Performance optimisée",
      ],
      links: {
        youtube: "https://www.behance.net/horace-dossou",
        demo: "https://deohoracedossouyovo.netlify.app/",
        docs: "https://github.com/horace-dossou/architect-portfolio",
      },
      metrics: {
        pages: "8",
        load_time: "<2s",
        mobile_score: "98/100",
      },
    },
    {
      id: 4,
      title: "Packaging - Gamme Cosmétique Bio",
      category: "Packaging",
      description:
        "Conception du packaging pour une gamme complète de cosmétiques bio. Design élégant et naturel reflétant les valeurs écologiques de la marque, avec une approche durable et des matériaux recyclables.",
      image: "/projects/52426.png",
      technologies: ["Adobe Illustrator", "Photoshop", "Dimension", "KeyShot", "InDesign"],
      features: [
        "Design éco-responsable",
        "Gamme cohérente",
        "Matériaux durables",
        "Étiquetage réglementaire",
        "Rendus 3D réalistes",
      ],
      links: {
        youtube: "https://www.behance.net/horace-dossou",
        demo: "https://deohoracedossouyovo.netlify.app/",
        docs: "https://github.com/horace-dossou/cosmetic-packaging",
      },
      metrics: {
        products: "12",
        variants: "36",
        sustainability: "100%",
      },
    },
    {
      id: 5,
      title: "Campagne Publicitaire - Startup Tech",
      category: "Communication",
      description:
        "Création d'une campagne publicitaire complète pour le lancement d'une startup tech. Développement du concept créatif, déclinaisons print et digital, avec une approche moderne et impactante pour toucher la cible jeune et connectée.",
      image: "/projects/52427.jpg",
      technologies: ["Adobe Creative Suite", "Cinema 4D", "After Effects", "Figma", "Sketch"],
      features: [
        "Concept créatif original",
        "Déclinaisons multi-supports",
        "Animations dynamiques",
        "Campagne digitale",
        "Mesure de performance",
      ],
      links: {
        youtube: "https://www.behance.net/horace-dossou",
        demo: "https://deohoracedossouyovo.netlify.app/",
        docs: "https://github.com/horace-dossou/tech-campaign",
      },
      metrics: {
        reach: "500k+",
        engagement: "8.5%",
        conversions: "12%",
      },
    },
    {
      id: 6,
      title: "Refonte UX - Plateforme E-learning",
      category: "UX/UI Design",
      description:
        "Refonte complète de l'expérience utilisateur d'une plateforme e-learning. Amélioration de l'ergonomie, simplification du parcours d'apprentissage et création d'une interface plus engageante pour les étudiants.",
      image: "/projects/52432.png",
      technologies: ["Figma", "Miro", "Hotjar", "Maze", "Principle"],
      features: [
        "Audit UX complet",
        "Recherche utilisateur",
        "Wireframes optimisés",
        "Tests d'utilisabilité",
        "Design system évolutif",
      ],
      links: {
        youtube: "https://www.behance.net/horace-dossou",
        demo: "https://deohoracedossouyovo.netlify.app/",
        docs: "https://github.com/horace-dossou/elearning-ux",
      },
      metrics: {
        improvement: "+45%",
        completion: "+60%",
        satisfaction: "92%",
      },
    },
    {
      id: 7,
      title: "Interface Mobile - Application Fitness",
      category: "UX/UI Design",
      description:
        "Conception d'une interface mobile moderne pour une application de fitness. Focus sur l'expérience utilisateur avec des interactions fluides et un design motivant pour encourager l'activité physique quotidienne.",
      image: "/projects/52434.png",
      technologies: ["Figma", "Principle", "Adobe XD", "Sketch", "InVision"],
      features: [
        "Interface intuitive",
        "Tracking d'activité",
        "Gamification",
        "Notifications smart",
        "Design responsive",
      ],
      links: {
        youtube: "https://www.behance.net/horace-dossou",
        demo: "https://deohoracedossouyovo.netlify.app/",
        docs: "https://github.com/horace-dossou/fitness-app",
      },
      metrics: {
        screens: "40+",
        engagement: "+75%",
        retention: "85%",
      },
    },
    {
      id: 8,
      title: "Branding - Restaurant Gastronomique",
      category: "Identité Visuelle",
      description:
        "Création de l'identité visuelle complète pour un restaurant gastronomique. Logo élégant, carte des menus, signalétique et supports de communication reflétant l'excellence culinaire et l'ambiance raffinée.",
      image: "/projects/52435.jpg",
      technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "After Effects"],
      features: [
        "Logo premium",
        "Carte des menus",
        "Signalétique",
        "Supports print",
        "Guidelines complètes",
      ],
      links: {
        youtube: "https://www.behance.net/horace-dossou",
        demo: "https://deohoracedossouyovo.netlify.app/",
        docs: "https://github.com/horace-dossou/restaurant-branding",
      },
      metrics: {
        elements: "50+",
        satisfaction: "96%",
        recognition: "+200%",
      },
    },
    {
      id: 9,
      title: "Dashboard Analytics - SaaS Platform",
      category: "Web Design",
      description:
        "Design d'un dashboard analytics pour une plateforme SaaS. Interface claire et fonctionnelle permettant aux utilisateurs de visualiser leurs données de performance avec des graphiques interactifs et des insights actionables.",
      image: "/projects/52437.jpg",
      technologies: ["Figma", "Chart.js", "D3.js", "HTML/CSS", "JavaScript"],
      features: [
        "Visualisation de données",
        "Graphiques interactifs",
        "Filtres avancés",
        "Export de rapports",
        "Interface responsive",
      ],
      links: {
        youtube: "https://www.behance.net/horace-dossou",
        demo: "https://deohoracedossouyovo.netlify.app/",
        docs: "https://github.com/horace-dossou/saas-dashboard",
      },
      metrics: {
        components: "120+",
        load_time: "<1.5s",
        usability: "94/100",
      },
    },
  ],

  technologies: {
    design: [
      { name: "Adobe Illustrator", icon: "SiAdobeillustrator", level: 95 },
      { name: "Photoshop", icon: "SiAdobephotoshop", level: 90 },
      { name: "InDesign", icon: "SiAdobeindesign", level: 85 },
      { name: "After Effects", icon: "SiAdobeaftereffects", level: 80 },
      { name: "Figma", icon: "SiFigma", level: 95 },
      { name: "Sketch", icon: "SiSketch", level: 85 },
    ],
    ux_ui: [
      { name: "Figma", icon: "SiFigma", level: 95 },
      { name: "Adobe XD", icon: "SiAdobexd", level: 90 },
      { name: "Sketch", icon: "SiSketch", level: 85 },
      { name: "Principle", icon: "SiPrinciple", level: 80 },
      { name: "Framer", icon: "SiFramer", level: 75 },
      { name: "InVision", icon: "SiInvision", level: 80 },
    ],
    tools: [
      { name: "Cinema 4D", icon: "SiCinema4d", level: 75 },
      { name: "Blender", icon: "SiBlender", level: 70 },
      { name: "Webflow", icon: "SiWebflow", level: 85 },
      { name: "Notion", icon: "SiNotion", level: 90 },
      { name: "Miro", icon: "SiMiro", level: 85 },
      { name: "Hotjar", icon: "SiHotjar", level: 80 },
    ],
  },

  faq: [
    {
      question: "Quels types de projets de design réalisez-vous ?",
      answer:
        "Je travaille principalement sur les identités visuelles, le design UX/UI, le packaging, les sites web et les campagnes de communication. Mon expertise couvre tous les aspects du design graphique et de l'expérience utilisateur, du concept à la réalisation finale.",
    },
    {
      question: "Comment se déroule votre processus créatif ?",
      answer:
        "Mon processus commence par une phase de découverte et de recherche, suivie de la conceptualisation et des premières esquisses. Je présente ensuite des propositions créatives, puis nous affinons ensemble jusqu'à la version finale. Je privilégie toujours la collaboration avec mes clients.",
    },
    {
      question: "Proposez-vous un suivi après livraison ?",
      answer:
        "Oui, j'offre un suivi post-livraison incluant les ajustements mineurs, la formation à l'utilisation des éléments graphiques et un support technique. Je crois aux partenariats durables et m'assure que mes clients sont autonomes avec leurs nouveaux outils visuels.",
    },
    {
      question: "Quels sont vos délais de réalisation ?",
      answer:
        "Les délais varient selon la complexité du projet. Une identité visuelle simple prend 2-3 semaines, tandis qu'un projet complet avec déclinaisons peut nécessiter 2-3 mois. Cela inclut les phases de recherche, création, révisions et finalisation.",
    },
    {
      question: "Comment adaptez-vous vos créations aux différents supports ?",
      answer:
        "Je conçois toujours mes créations en pensant à leur déclinaison multi-supports. J'utilise des systèmes modulaires et des guidelines précises pour assurer une cohérence parfaite du print au digital, en passant par les réseaux sociaux et les applications mobiles.",
    },
  ],

  contact: {
    title: "Prêt à donner vie à votre vision créative ?",
    description:
      "Discutons de votre projet et créons ensemble une identité visuelle qui vous ressemble. Contactez-moi pour une consultation gratuite et sans engagement.",
    form: {
      nameLabel: "Votre nom",
      emailLabel: "Votre email",
      subjectLabel: "Type de projet",
      messageLabel: "Parlez-moi de votre projet",
      submitText: "Envoyer le message",
      subjects: [
        "Identité Visuelle",
        "UX/UI Design",
        "Site Web",
        "Packaging",
        "Campagne Publicitaire",
        "Autre",
      ],
    },
    social: {
      discord: { label: "Discord", value: "HoraceDesign#1234" },
      behance: { label: "Behance", value: "@horace-dossou" },
      calendly: {
        label: "Planifier un appel",
        value: "https://calendly.com/horace-dossou",
      },
    },
  },

  footer: {
    copyright: "© 2025 Horace DOSSOU-YOVO. Tous droits réservés.",
    links: [
      { label: "Politique de confidentialité", url: "/privacy" },
      { label: "Conditions d'utilisation", url: "/terms" },
      { label: "Mentions légales", url: "/legal" },
    ],
  },

  logo: {
    name: "Horace DOSSOU-YOVO",
    title: "Designer d'Expériences Visuelles Mémorables",
    tagline: "Créateur d'identités visuelles uniques",
    profileImage: "/author-image.jpg",
    location: "Bamako, Mali",
    email: "horace.dossou@gmail.com",
    phone: "+223 77 39 16 91",
    linkedin: "https://linkedin.com/in/horace-dossou-yovo",
    github: "https://github.com/horace-dossou",
    twitter: "https://twitter.com/horace_design",
    discord: "HoraceDesign#1234",
    youtube: "https://youtube.com/@horace-design",
    whatsapp: "https://wa.me/22377391691",
    tiktok: "https://tiktok.com/@horace_design",
    facebook: "https://facebook.com/horace.design",
    instagram: "https://instagram.com/horace_design",
    logoImage: "/logo.png",
  },

  theme: {
    colors: {
      primary: "#04041a", // Bleu foncé du logo Horace
      secondary: "#ffb600", // Jaune/orange du logo Horace
      accent: "#ffb600", // Jaune/orange
      dark: "#04041a", // Bleu foncé
      light: "#ffffff", // Blanc
    },
    gradients: {
      primary: "linear-gradient(135deg, #04041a 0%, #ffb600 100%)",
      secondary: "linear-gradient(135deg, #ffb600 0%, #04041a 100%)",
      light: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
    },
  },
};

export default portfolioData;
