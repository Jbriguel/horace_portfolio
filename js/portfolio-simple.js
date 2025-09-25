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
    // ... autres projets ...
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
    
    console.log('✅ Portfolio prêt');
});

// Export pour utilisation externe si nécessaire
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { portfolioData, addProject, displayProjects };
}
