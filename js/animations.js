/**
 * ANIMATIONS AVANCÉES ET INTERACTIONS
 * Gestionnaire d'animations spectaculaires pour le portfolio
 */

class AdvancedAnimations {
    constructor() {
        this.init();
        this.setupScrollAnimations();
        this.setupParallaxEffects();
        this.setupMicroInteractions();
        this.setupPreloader();
        this.setupScrollToTop();
        this.setupNavbarEffects();
        this.setupParticleSystem();
    }

    init() {
        // Initialisation des éléments avec des classes d'animation
        this.animateElements = document.querySelectorAll('[data-animate]');
        this.parallaxElements = document.querySelectorAll('[data-parallax]');
        
        // Configuration de l'Intersection Observer
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.observer = new IntersectionObserver(this.handleIntersection.bind(this), this.observerOptions);
        
        // Observer tous les éléments animés
        this.animateElements.forEach(el => this.observer.observe(el));
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationType = element.dataset.animate;
                const delay = element.dataset.delay || 0;
                
                setTimeout(() => {
                    element.classList.add(`animate-${animationType}`);
                    element.classList.add('in-view');
                }, delay);
                
                this.observer.unobserve(element);
            }
        });
    }

    setupScrollAnimations() {
        // Animation des éléments au scroll
        const scrollElements = document.querySelectorAll('.scroll-animate');
        
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.1 });
        
        scrollElements.forEach(el => scrollObserver.observe(el));
    }

    setupParallaxEffects() {
        // Effets de parallax au scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelectorAll('.parallax-element');
            
            parallax.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    setupMicroInteractions() {
        // Micro-interactions pour les boutons et cartes
        const interactiveElements = document.querySelectorAll('.btn, .service-card, .testimonial-card, .project-card');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                e.target.style.transform = 'translateY(-2px) scale(1.02)';
            });
            
            element.addEventListener('mouseleave', (e) => {
                e.target.style.transform = '';
            });
        });

        // Effet de ripple pour les boutons
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('click', this.createRipple.bind(this));
        });
    }

    createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        
        const rect = button.getBoundingClientRect();
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - rect.left - radius}px`;
        circle.style.top = `${event.clientY - rect.top - radius}px`;
        circle.classList.add('ripple');
        
        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }
        
        button.appendChild(circle);
        
        setTimeout(() => {
            circle.remove();
        }, 600);
    }

    setupPreloader() {
        const preloader = document.querySelector('.preloader');
        if (!preloader) return;
        
        // Animation du preloader
        const loader = preloader.querySelector('.loader');
        const loaderText = preloader.querySelector('.loader-text');
        
        // Textes de chargement animés
        const loadingTexts = [
            'Chargement...',
            'Préparation...',
            'Presque prêt...',
            'C\'est parti !'
        ];
        
        let textIndex = 0;
        const textInterval = setInterval(() => {
            if (loaderText && textIndex < loadingTexts.length - 1) {
                loaderText.textContent = loadingTexts[textIndex];
                textIndex++;
            }
        }, 800);
        
        // Masquer le preloader après le chargement
        window.addEventListener('load', () => {
            clearInterval(textInterval);
            setTimeout(() => {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 1000);
        });
    }

    setupScrollToTop() {
        const scrollTopBtn = document.querySelector('.scroll-top');
        if (!scrollTopBtn) return;
        
        // Afficher/masquer le bouton selon la position de scroll
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });
        
        // Action de scroll vers le haut
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    setupNavbarEffects() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;
        
        // Effet de transparence de la navbar au scroll
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Animation des liens de navigation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    }

    setupParticleSystem() {
        // Système de particules flottantes
        const heroSection = document.querySelector('#hero');
        if (!heroSection) return;
        
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-bg';
        heroSection.appendChild(particlesContainer);
        
        // Créer des particules
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                this.createParticle(particlesContainer);
            }, i * 200);
        }
        
        // Créer de nouvelles particules périodiquement
        setInterval(() => {
            if (window.innerWidth > 768) { // Seulement sur desktop
                this.createParticle(particlesContainer);
            }
        }, 3000);
    }

    createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Propriétés aléatoires
        const size = Math.random() * 4 + 2;
        const startX = Math.random() * window.innerWidth;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 2;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${startX}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        container.appendChild(particle);
        
        // Supprimer la particule après l'animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, (duration + delay) * 1000);
    }

    // Animations spécifiques pour le portfolio
    animatePortfolioCards() {
        const portfolioCards = document.querySelectorAll('.project-card');
        
        portfolioCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Animations pour les statistiques
    animateCounters() {
        const counters = document.querySelectorAll('[data-count]');
        
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.count);
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            // Démarrer l'animation quand l'élément est visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(counter);
        });
    }

    // Effet de machine à écrire pour les titres
    typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        const type = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };
        
        type();
    }

    // Animations au survol des images
    setupImageHoverEffects() {
        const images = document.querySelectorAll('.image-zoom img');
        
        images.forEach(img => {
            img.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1) rotate(2deg)';
                this.style.filter = 'brightness(1.1) contrast(1.1)';
            });
            
            img.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.filter = '';
            });
        });
    }

    // Initialiser toutes les animations
    initializeAll() {
        this.animatePortfolioCards();
        this.animateCounters();
        this.setupImageHoverEffects();
        
        // Animations d'entrée pour la page
        const heroTitle = document.querySelector('#hero .banner-size');
        if (heroTitle) {
            const originalText = heroTitle.textContent;
            setTimeout(() => {
                this.typeWriter(heroTitle, originalText, 80);
            }, 1500);
        }
    }
}

// Styles CSS pour les animations (à ajouter dynamiquement)
const animationStyles = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .animate-on-scroll.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;

// Ajouter les styles au document
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);

// Initialiser les animations quand le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    const animations = new AdvancedAnimations();
    
    // Délai pour laisser le temps aux autres scripts de se charger
    setTimeout(() => {
        animations.initializeAll();
    }, 100);
});

// Export pour utilisation externe
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdvancedAnimations;
}
