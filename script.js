 <!-- Single Page Front-End Controller Script Engine -->
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
