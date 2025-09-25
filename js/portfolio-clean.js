// Portfolio Data - Centralisé et facilement modifiable
const portfolioData = [
    {
        id: 1,
        title: "Plateforme E-commerce Moderne",
        category: "web",
        categoryLabel: "Développement Web",
        image: "images/projets/52418.png",
        alt: "Plateforme E-commerce Moderne",
        description: "Développement d'une plateforme e-commerce complète avec interface moderne et fonctionnalités avancées"
    },
    {
        id: 2,
        title: "Application Bancaire Mobile",
        category: "mobile",
        categoryLabel: "Application Mobile",
        image: "images/projets/52422.jpg",
        alt: "Application Bancaire Mobile",
        description: "Interface mobile intuitive pour services bancaires avec sécurité renforcée"
    },
    {
        id: 3,
        title: "Identité Visuelle Créative",
        category: "design",
        categoryLabel: "Design & UI/UX",
        image: "images/projets/52425.png",
        alt: "Identité Visuelle Créative",
        description: "Création d'une identité visuelle complète pour startup technologique"
    },
    {
        id: 4,
        title: "Dashboard Analytics",
        category: "web",
        categoryLabel: "Développement Web",
        image: "images/projets/52426.png",
        alt: "Dashboard Analytics",
        description: "Interface de visualisation de données avec graphiques interactifs"
    },
    {
        id: 5,
        title: "Plateforme SaaS Innovante",
        category: "web",
        categoryLabel: "Développement Web",
        image: "images/projets/52427.jpg",
        alt: "Plateforme SaaS Innovante",
        description: "Solution SaaS complète avec architecture microservices"
    },
    {
        id: 6,
        title: "Chatbot IA Conversationnel",
        category: "web",
        categoryLabel: "Développement Web",
        image: "images/projets/52432.png",
        alt: "Chatbot IA Conversationnel",
        description: "Assistant virtuel intelligent avec traitement du langage naturel"
    },
    {
        id: 7,
        title: "Kit UI/UX Professionnel",
        category: "design",
        categoryLabel: "Design & UI/UX",
        image: "images/projets/52434.png",
        alt: "Kit UI/UX Professionnel",
        description: "Système de design complet avec composants réutilisables"
    },
    {
        id: 8,
        title: "App Fitness & Wellness",
        category: "mobile",
        categoryLabel: "Application Mobile",
        image: "images/projets/52435.jpg",
        alt: "App Fitness & Wellness",
        description: "Application de suivi fitness avec programmes personnalisés"
    },
    {
        id: 9,
        title: "Site Web Corporate",
        category: "web",
        categoryLabel: "Développement Web",
        image: "images/projets/52437.jpg",
        alt: "Site Web Corporate",
        description: "Site vitrine professionnel avec CMS personnalisé"
    },
    {
        id: 10,
        title: "Interface de Gestion",
        category: "web",
        categoryLabel: "Développement Web",
        image: "images/projets/52438.png",
        alt: "Interface de Gestion",
        description: "Panel d'administration avec gestion avancée des utilisateurs"
    },
    {
        id: 11,
        title: "Design System Mobile",
        category: "design",
        categoryLabel: "Design & UI/UX",
        image: "images/projets/52439.png",
        alt: "Design System Mobile",
        description: "Système de design cohérent pour applications mobiles"
    },
    {
        id: 12,
        title: "Portfolio Créatif",
        category: "design",
        categoryLabel: "Design & UI/UX",
        image: "images/projets/52440.png",
        alt: "Portfolio Créatif",
        description: "Portfolio interactif pour artiste avec galerie dynamique"
    },
    {
        id: 13,
        title: "App de Productivité",
        category: "mobile",
        categoryLabel: "Application Mobile",
        image: "images/projets/52441.png",
        alt: "App de Productivité",
        description: "Application de gestion de tâches avec synchronisation cloud"
    },
    {
        id: 14,
        title: "Plateforme Éducative",
        category: "web",
        categoryLabel: "Développement Web",
        image: "images/projets/52442.png",
        alt: "Plateforme Éducative",
        description: "LMS moderne avec outils d'apprentissage interactifs"
    },
    {
        id: 15,
        title: "Branding Restaurant",
        category: "design",
        categoryLabel: "Design & UI/UX",
        image: "images/projets/52445.jpg",
        alt: "Branding Restaurant",
        description: "Identité visuelle complète pour chaîne de restaurants"
    },
    {
        id: 16,
        title: "Application IoT",
        category: "mobile",
        categoryLabel: "Application Mobile",
        image: "images/projets/52446.jpg",
        alt: "Application IoT",
        description: "Interface de contrôle pour objets connectés domestiques"
    },
    {
        id: 17,
        title: "Site E-learning",
        category: "web",
        categoryLabel: "Développement Web",
        image: "images/projets/52447.png",
        alt: "Site E-learning",
        description: "Plateforme d'apprentissage en ligne avec vidéos interactives"
    },
    {
        id: 18,
        title: "Interface Fintech",
        category: "design",
        categoryLabel: "Design & UI/UX",
        image: "images/projets/52450.png",
        alt: "Interface Fintech",
        description: "Design d'interface pour application de trading"
    },
    {
        id: 19,
        title: "Maquette TV Interactive",
        category: "design",
        categoryLabel: "Design & UI/UX",
        image: "images/projets/maquettes/TV Maquette.png",
        alt: "Maquette TV Interactive",
        description: "Concept d'interface pour télévision connectée"
    },
    {
        id: 20,
        title: "App Gestion Carburant",
        category: "mobile",
        categoryLabel: "Application Mobile",
        image: "images/projets/maquettes/carburant_Maquette.png",
        alt: "App Gestion Carburant",
        description: "Application de suivi et gestion de consommation carburant"
    },
    {
        id: 21,
        title: "Plateforme Collaborative",
        category: "web",
        categoryLabel: "Développement Web",
        image: "images/projets/maquettes/deme_Maquette.png",
        alt: "Plateforme Collaborative",
        description: "Outil de collaboration d'équipe avec gestion de projets"
    },
    {
        id: 22,
        title: "Interface Admin Moderne",
        category: "design",
        categoryLabel: "Design & UI/UX",
        image: "images/projets/52457.png",
        alt: "Interface Admin Moderne",
        description: "Dashboard administrateur avec analytics avancés"
    }
];

// Fonction pour créer une carte de projet
function createProjectCard(project, index = 0) {
    return `
        <div class="col-lg-6 col-md-6 col-sm-12 mb-4">
            <div class="project-card scroll-animate micro-interaction" 
                 data-category="${project.category}" 
                 data-animate="fade-up" 
                 data-delay="${index * 100}"
                 data-project-id="${project.id}">
                <div class="project-image-container image-zoom">
                    <img src="${project.image}" alt="${project.alt}" class="project-image">
                    <div class="project-overlay">
                        <div class="project-info">
                            <h4 class="animate-fade-up delay-100">${project.title}</h4>
                            <p class="project-description animate-fade-up delay-200">${project.description}</p>
                            <div class="project-spacer"></div>
                            <span class="project-category animate-fade-up delay-300">${project.categoryLabel}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Fonction pour filtrer et afficher les projets
function displayProjects(category = 'all') {
    const container = document.querySelector(`#${category} .row`);
    if (!container) return;

    let filteredProjects = portfolioData;
    
    // Filtrer par catégorie si ce n'est pas "all"
    if (category !== 'all') {
        filteredProjects = portfolioData.filter(project => project.category === category);
    }

    // Générer le HTML avec index pour les animations
    const projectsHTML = filteredProjects.map((project, index) => createProjectCard(project, index)).join('');
    
    // Injecter dans le DOM
    container.innerHTML = projectsHTML;
    
    // Réinitialiser les animations pour les nouvelles cartes
    setTimeout(() => {
        const newCards = container.querySelectorAll('.project-card');
        newCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 50);
}

// Fonction utilitaire pour ajouter un nouveau projet (pour l'administration)
function addProject(projectData) {
    portfolioData.push({
        id: portfolioData.length + 1,
        ...projectData
    });
    
    // Regénérer les projets
    displayProjects('all');
    displayProjects(projectData.category);
}

// Initialisation du portfolio
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfolio initialisé');
    
    // Afficher tous les projets par défaut
    displayProjects('all');
    
    // Gestion des filtres
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-filter');
            displayProjects(category);
            
            // Mise à jour du bouton actif
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    console.log('✅ Portfolio prêt à l\'emploi');
});

// Export pour utilisation externe si nécessaire
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { portfolioData, addProject, displayProjects };
}
