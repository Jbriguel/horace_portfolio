// Portfolio Data - Centralisé et facilement modifiable
const portfolioData = [
    {
        id: 1,
        title: "E-commerce Platform",
        category: "web",
        categoryLabel: "Développement Web",
        image: "images/projets/52445.jpg",
        alt: "E-commerce Platform"
    },
    {
        id: 2,
        title: "Banking App",
        category: "mobile",
        categoryLabel: "Application Mobile",
        image: "images/projets/52445.jpg",
        alt: "Banking App"
    },
    {
        id: 3,
        title: "Brand Identity",
        category: "design",
        categoryLabel: "Design & UI/UX",
        image: "images/projets/52445.jpg",
        alt: "Brand Identity"
    },
    {
        id: 4,
        title: "Analytics Dashboard",
        category: "web",
        categoryLabel: "Développement Web",
        image: "images/projets/52445.jpg",
        alt: "Analytics Dashboard"
    },
    {
        id: 5,
        title: "SaaS Platform",
        category: "web",
        categoryLabel: "Développement Web",
        image: "images/projets/52445.jpg",
        alt: "SaaS Platform"
    },
    {
        id: 6,
        title: "AI Chatbot",
        category: "web",
        categoryLabel: "Développement Web",
        image: "images/projets/52445.jpg",
        alt: "AI Chatbot"
    },
    {
        id: 7,
        title: "UI Kit Design",
        category: "design",
        categoryLabel: "Design & UI/UX",
        image: "images/projets/52445.jpg",
        alt: "UI Kit Design"
    },
    {
        id: 8,
        title: "Fitness App",
        category: "mobile",
        categoryLabel: "Application Mobile",
        image: "images/projets/52445.jpg",
        alt: "Fitness App"
    }
];

// Fonction pour créer une carte de projet
function createProjectCard(project) {
    return `
        <div class="col-lg-6 col-md-6">
            <div class="project-card" data-category="${project.category}">
                <div class="project-image-container">
                    <img src="${project.image}" alt="${project.alt}" class="project-image">
                    <div class="project-overlay">
                        <div class="project-info">
                            <h4>${project.title}</h4>
                            <div class="project-spacer"></div>
                            <p>${project.categoryLabel}</p>
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

    // Générer le HTML
    const projectsHTML = filteredProjects.map(project => createProjectCard(project)).join('');
    
    // Injecter dans le DOM
    container.innerHTML = projectsHTML;
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Générer tous les projets pour chaque onglet
    displayProjects('all');
    displayProjects('web');
    displayProjects('design');
    displayProjects('mobile');

    // Gérer les clics sur les onglets (optionnel - Bootstrap le fait déjà)
    const tabButtons = document.querySelectorAll('#portfolioTabs .nav-link');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-bs-target').replace('#', '');
            // Les projets sont déjà générés, pas besoin de les regénérer
        });
    });

    // Animation d'entrée pour les cartes
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observer toutes les cartes de projet
    setTimeout(() => {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
    }, 100);
});

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

// Export pour utilisation externe si nécessaire
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { portfolioData, addProject, displayProjects };
}
