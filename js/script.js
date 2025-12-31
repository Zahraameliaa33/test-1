// ==============================
// Loading screen for "Get Started"
// ==============================
const startBtn = document.getElementById('start-btn');
const loadingScreen = document.getElementById('loading-screen');

if (startBtn && loadingScreen) {
    startBtn.addEventListener('click', function(e) {
        e.preventDefault(); // prevent immediate navigation

        // Show loading screen
        loadingScreen.classList.add('active');

        // Navigate to the next page after 1 second
        setTimeout(() => {
            window.location.href = this.href;
        }, 1000);
    });
}

// ==============================
// Hamburger toggle + sidebar
// ==============================
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const mainContent = document.getElementById('main-content'); // may be null

if (hamburger && sidebar && overlay) {
    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        if (mainContent) mainContent.classList.toggle('blur'); // only if exists
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        if (mainContent) mainContent.classList.remove('blur'); // only if exists
    });
}

// ==============================
// Cards animation
// ==============================
(function () {
    const cards = document.querySelectorAll('.card');

    if (!cards.length) return;

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        cards.forEach(c => c.classList.add('is-visible'));
        return;
    }

    cards.forEach((card, i) => {
        card.style.setProperty('--i', i);
        card.classList.add(i % 2 === 0 ? 'from-left' : 'from-right');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    cards.forEach(c => observer.observe(c));
})();
