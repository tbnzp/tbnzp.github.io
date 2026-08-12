<script>
    // --- 1. PERSISTENT GLOBAL NAVIGATION LINK MODULE CONTROLLERS ---
    function toggleMenu(isOpen) {
        const overlay = document.getElementById('navMenu');
        const globalMenuBtn = document.getElementById('globalMenuBtn');
        
        if (isOpen) {
            overlay.classList.add('active');
            globalMenuBtn.classList.add('active-toggle'); 
        } else {
            overlay.classList.remove('active');
            globalMenuBtn.classList.remove('active-toggle'); 
        }
    }

    function navigateTo(targetViewId) {
        toggleMenu(false); 
        
        const views = document.querySelectorAll('.view');
        views.forEach(v => {
            v.classList.remove('active');
        });
        
        localStorage.setItem('portfolio_activeTab', targetViewId);
        
        setTimeout(() => {
            const target = document.getElementById(targetViewId);
            if (target) {
                target.classList.add('active');
            }
            
            const globalMenuBtn = document.getElementById('globalMenuBtn');
            if (targetViewId === 'home-view') {
                globalMenuBtn.style.display = 'none'; 
            } else {
                globalMenuBtn.style.display = 'flex'; 
            }
        }, 100);
    }

         // --- DYNAMIC SLIDING CARDS NAVIGATION MECHANICS ---
    let currentProjectIndex = 0;

    function initializeProjectSliderEngine() {
        const projectCards = document.querySelectorAll('.project-slide-card');
        const prevBtn = document.getElementById('prevProjectBtn');
        const nextBtn = document.getElementById('nextProjectBtn');

        // Safety fallback check to ensure buttons and elements exist
        if (!projectCards.length || !prevBtn || !nextBtn) return;

        function renderActiveProjectCard() {
            projectCards.forEach((card, index) => {
                if (index === currentProjectIndex) {
                    // Force the card open safely, overriding any other CSS styles
                    card.style.setProperty('display', 'block', 'important');
                    card.style.setProperty('visibility', 'visible', 'important');
                    card.style.setProperty('opacity', '1', 'important');
                } else {
                    // Hide the inactive card completely
                    card.style.setProperty('display', 'none', 'important');
                }
            });
        }

        // Previous Button Click event loop
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            currentProjectIndex = (currentProjectIndex === 0) ? projectCards.length - 1 : currentProjectIndex - 1;
            renderActiveProjectCard();
        });

        // Next Button Click event loop
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            currentProjectIndex = (currentProjectIndex === projectCards.length - 1) ? 0 : currentProjectIndex + 1;
            renderActiveProjectCard();
        });

        // Initialize base view layout right away on page bootup
        renderActiveProjectCard();
    }

    // --- 3. BROWSER LIFECYCLE ROUTINE SETUP ---
    window.addEventListener('DOMContentLoaded', () => {
        // Run the dynamic card slider listener hooks
        initializeProjectSliderEngine();

        const lastSavedTab = localStorage.getItem('portfolio_activeTab');
        if (lastSavedTab) {
            navigateTo(lastSavedTab);
        } else {
            navigateTo('home-view');
        }
    });
</script>
