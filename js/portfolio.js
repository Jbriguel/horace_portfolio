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

// ANCIEN CODE SUPPRIMÉ - REMPLACÉ PAR LA VERSION SIMPLIFIÉE CI-DESSOUS

// VERSION FINALE - SOLUTION BRUTALE QUI MARCHE
console.log('🔥 PORTFOLIO.JS CHARGÉ !');

// Variable globale pour éviter les doublons
let modalInitialized = false;

// Attendre que tout soit prêt
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOM READY - Initialisation...');
    
    // Générer tous les projets pour chaque onglet
    displayProjects('all');
    displayProjects('web');
    displayProjects('design');
    displayProjects('mobile');
    
    // Initialiser une seule fois
    if (!modalInitialized) {
        setTimeout(() => {
            console.log('⏰ INITIALISATION UNIQUE DU MODAL...');
            initializeFinalModal();
            modalInitialized = true;
        }, 1500);
    }
});

// SOLUTION FINALE - BRUTALE MAIS EFFICACE
function initializeFinalModal() {
    console.log('🔧 INITIALISATION FINALE DU MODAL');
    
    // Supprimer tous les anciens modals
    const existingModals = document.querySelectorAll('#projectModal, .project-modal');
    existingModals.forEach(modal => modal.remove());
    
    // Créer le modal final
    createFinalModal();
    
    // Attacher les événements de manière brutale
    attachBrutalEvents();
    
    console.log('✅ MODAL FINAL INITIALISÉ');
}

function createFinalModal() {
    console.log('📝 CRÉATION DU MODAL FINAL');
    
    const modalHTML = `
        <div id="projectModal" style="
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            background: rgba(0,0,0,0.95) !important;
            z-index: 99999 !important;
            display: none !important;
            justify-content: center !important;
            align-items: center !important;
        ">
            <div style="
                background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%) !important;
                border-radius: 20px !important;
                padding: 40px !important;
                max-width: 90vw !important;
                max-height: 90vh !important;
                position: relative !important;
                border: 3px solid #FFD700 !important;
                box-shadow: 0 0 50px rgba(255,215,0,0.3) !important;
            ">
                <button id="closeModal" style="
                    position: absolute !important;
                    top: 20px !important;
                    right: 20px !important;
                    background: #FFD700 !important;
                    border: none !important;
                    border-radius: 50% !important;
                    width: 40px !important;
                    height: 40px !important;
                    cursor: pointer !important;
                    font-size: 20px !important;
                    font-weight: bold !important;
                    color: #000 !important;
                    z-index: 100000 !important;
                ">×</button>
                
                <div style="display: flex !important; gap: 40px !important; align-items: center !important;">
                    <div style="flex: 1 !important;">
                        <img id="modalImage" src="" alt="" style="
                            width: 100% !important;
                            max-width: 600px !important;
                            height: auto !important;
                            border-radius: 15px !important;
                            box-shadow: 0 10px 30px rgba(0,0,0,0.5) !important;
                        ">
                    </div>
                    <div style="flex: 1 !important; color: white !important;">
                        <h2 id="modalTitle" style="
                            color: #FFD700 !important; 
                            margin-bottom: 20px !important;
                            font-size: 2rem !important;
                            font-weight: bold !important;
                        "></h2>
                        <span id="modalCategory" style="
                            background: rgba(255,215,0,0.2) !important;
                            color: #FFD700 !important;
                            padding: 8px 20px !important;
                            border-radius: 25px !important;
                            font-size: 14px !important;
                            display: inline-block !important;
                            margin-bottom: 20px !important;
                            border: 1px solid rgba(255,215,0,0.5) !important;
                        "></span>
                        <p id="modalDescription" style="
                            line-height: 1.8 !important;
                            font-size: 18px !important;
                            color: #e0e0e0 !important;
                            margin: 0 !important;
                        "></p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    console.log('✅ MODAL FINAL CRÉÉ AVEC SUCCÈS');
}

function attachBrutalEvents() {
    console.log('🎯 ATTACHEMENT BRUTAL DES ÉVÉNEMENTS');
    
    // Supprimer TOUS les anciens événements
    const allCards = document.querySelectorAll('.project-card');
    console.log('🔍 Cartes trouvées pour attachement:', allCards.length);
    
    // Méthode brutale: onclick directement sur chaque élément
    allCards.forEach((card, index) => {
        console.log(`🔗 Attachement sur carte ${index + 1}`);
        
        // Style visuel immédiat
        card.style.cursor = 'pointer !important';
        card.style.border = '3px solid transparent';
        card.style.transition = 'all 0.3s ease';
        
        // Supprimer tous les anciens événements
        card.onclick = null;
        card.onmouseenter = null;
        card.onmouseleave = null;
        
        // Attachement BRUTAL avec onclick
        card.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('💥 CLIC BRUTAL DÉTECTÉ sur carte', index + 1);
            
            // Calculer l'index réel (diviser par 2 car il y a des doublons)
            const realIndex = Math.floor(index / 2);
            const project = portfolioData[realIndex] || portfolioData[index] || portfolioData[0];
            
            console.log('📋 Index réel:', realIndex, 'Projet:', project?.title);
            
            if (project) {
                openFinalModal(project);
            } else {
                console.error('❌ Aucun projet trouvé');
            }
        };
        
        // Effet hover brutal
        card.onmouseenter = function() {
            this.style.border = '3px solid #FFD700';
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 10px 30px rgba(255,215,0,0.3)';
            console.log('👆 HOVER BRUTAL sur carte', index + 1);
        };
        
        card.onmouseleave = function() {
            this.style.border = '3px solid transparent';
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        };
    });
    
    // Attacher les événements de fermeture du modal
    setTimeout(() => {
        const modal = document.getElementById('projectModal');
        const closeBtn = document.getElementById('closeModal');
        
        if (modal && closeBtn) {
            closeBtn.onclick = function() {
                console.log('🔒 Fermeture brutale du modal');
                modal.style.display = 'none';
                document.body.style.overflow = '';
            };
            
            modal.onclick = function(e) {
                if (e.target === modal) {
                    console.log('🔒 Fermeture via overlay');
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                }
            };
        }
    }, 100);
    
    console.log('✅ ÉVÉNEMENTS BRUTAUX ATTACHÉS');
}

function openFinalModal(project) {
    console.log('🚀 OUVERTURE FINALE DU MODAL pour:', project.title);
    
    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalDescription = document.getElementById('modalDescription');
    
    if (!modal) {
        console.error('❌ Modal non trouvé');
        return;
    }
    
    // Mettre à jour le contenu avec force
    modalImage.src = project.image;
    modalImage.alt = project.alt || project.title;
    modalTitle.textContent = project.title;
    modalCategory.textContent = project.categoryLabel;
    modalDescription.textContent = project.description;
    
    console.log('📝 Contenu mis à jour:', {
        image: project.image,
        title: project.title,
        category: project.categoryLabel,
        description: project.description.substring(0, 50) + '...'
    });
    
    // Ouvrir le modal avec force
    modal.style.display = 'flex !important';
    document.body.style.overflow = 'hidden';
    
    console.log('✅ MODAL FINAL OUVERT AVEC SUCCÈS !');
}

// FONCTION DE TEST FINALE
window.testModal = function() {
    console.log('🧪 TEST FINAL DU MODAL...');
    const firstProject = portfolioData[0];
    if (firstProject) {
        openFinalModal(firstProject);
    } else {
        console.error('❌ Aucun projet trouvé pour le test');
    }
};

// TEST AUTOMATIQUE AU CHARGEMENT
setTimeout(() => {
    console.log('🔥 TEST AUTOMATIQUE DANS 3 SECONDES...');
    const cards = document.querySelectorAll('.project-card');
    console.log('🎯 Cartes disponibles pour test:', cards.length);
    
    if (cards.length > 0) {
        console.log('✅ Cartes trouvées ! Le modal devrait fonctionner.');
        console.log('👆 Survolez une carte pour voir l\'effet hover');
        console.log('🖱️ Cliquez sur une carte pour ouvrir le modal');
    } else {
        console.error('❌ Aucune carte trouvée !');
    }
}, 3000);

// Export pour utilisation externe si nécessaire
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { portfolioData, addProject, displayProjects, ProjectModal };
}
