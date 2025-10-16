document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.querySelector('.nav-menu');
    const nav = document.querySelector('nav');

    navMenu.addEventListener('click', () => {
        navMenu.classList.toggle('is-active');
        nav.classList.toggle('nav-open');
        
        // Toggle aria-expanded attribute for accessibility
        const isExpanded = navMenu.getAttribute('aria-expanded') === 'true';
        navMenu.setAttribute('aria-expanded', !isExpanded);
    });
});
