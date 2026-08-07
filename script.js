                <!-- Single Page Front-End Controller Script Engine -->
    <script>
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
            
            // SAVE ACTIVE VIEW SLOT TO BROWSER MEMORY
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
        
        window.addEventListener('DOMContentLoaded', () => {
            // Read the last visited tab name from browser memory drawers
            const lastSavedTab = localStorage.getItem('portfolio_activeTab');
            
            // If a saved state exists, snap right back to it instantly!
            if (lastSavedTab) {
                navigateTo(lastSavedTab);
            } else {
                // Fallback default navigation onto your clean home view landing screen
                navigateTo('home-view');
            }
        });
    </script>
