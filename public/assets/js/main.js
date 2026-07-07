document.addEventListener('DOMContentLoaded', () => {
    // --- LANGUAGE MANAGER ---
    const langSelect = document.getElementById('lang-select');
    
    // Set Language
    const setLanguage = (lang) => {
        // Update body class
        document.body.className = '';
        document.body.classList.add(`lang-${lang}`);
        
        // Update select value if not matching
        if (langSelect && langSelect.value !== lang) {
            langSelect.value = lang;
        }
        
        // Save in localStorage
        localStorage.setItem('tutor_aide_lang', lang);
    };

    // Auto-detect Language
    const detectLanguage = () => {
        // 1. Check local storage
        const savedLang = localStorage.getItem('tutor_aide_lang');
        if (savedLang && ['en', 'bn', 'hi'].includes(savedLang)) {
            setLanguage(savedLang);
            return;
        }
        
        // 2. Check browser locale
        const browserLocale = navigator.language || navigator.userLanguage;
        if (browserLocale) {
            const code = browserLocale.toLowerCase();
            if (code.startsWith('bn')) {
                setLanguage('bn');
                return;
            } else if (code.startsWith('hi')) {
                setLanguage('hi');
                return;
            }
        }
        
        // 3. Fallback to English
        setLanguage('en');
    };

    // Lang select change listener
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }

    // Initialize language
    detectLanguage();

    // --- DASHBOARD PANEL SWITCHER ---
    const teacherBtn = document.getElementById('panel-btn-teacher');
    const studentBtn = document.getElementById('panel-btn-student');
    const teacherPanel = document.getElementById('panel-teacher');
    const studentPanel = document.getElementById('panel-student');

    if (teacherBtn && studentBtn && teacherPanel && studentPanel) {
        teacherBtn.addEventListener('click', () => {
            teacherBtn.classList.add('active');
            studentBtn.classList.remove('active');
            teacherPanel.classList.add('active');
            studentPanel.classList.remove('active');
        });

        studentBtn.addEventListener('click', () => {
            studentBtn.classList.add('active');
            teacherBtn.classList.remove('active');
            studentPanel.classList.add('active');
            teacherPanel.classList.remove('active');
        });
    }

    // --- MOBILE MENU TOGGLE ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('open');
            // Toggle hamburger animation
            const spans = menuToggle.querySelectorAll('span');
            if (navLinks.classList.contains('open')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });

        // Close menu on click outside
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && e.target !== menuToggle) {
                navLinks.classList.remove('open');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // --- SCREENSHOT SLIDER CONTROLS ---
    const scrollContainer = document.getElementById('screenshots-scroll');
    const prevBtn = document.getElementById('btn-slide-prev');
    const nextBtn = document.getElementById('btn-slide-next');

    if (scrollContainer && prevBtn && nextBtn) {
        const slideWidth = 304; // 280px width + 24px gap
        
        nextBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: slideWidth,
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: -slideWidth,
                behavior: 'smooth'
            });
        });
        
        // Double-click scroll reset safety
        let isDown = false;
        let startX;
        let scrollLeft;

        scrollContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
        });
        scrollContainer.addEventListener('mouseleave', () => {
            isDown = false;
        });
        scrollContainer.addEventListener('mouseup', () => {
            isDown = false;
        });
        scrollContainer.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 2; // scroll-fast
            scrollContainer.scrollLeft = scrollLeft - walk;
        });
    }

    // --- SCROLL EFFECTS FOR HEADER ---
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.padding = '8px 0';
                header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
            } else {
                header.style.padding = '0';
                header.style.boxShadow = 'none';
            }
        });
    }
});
