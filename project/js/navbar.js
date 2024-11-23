document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate hamburger to X
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = spans[0].style.transform === 'rotate(45deg) translate(6px, 6px)' 
            ? '' 
            : 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = spans[1].style.opacity === '0' ? '1' : '0';
        spans[2].style.transform = spans[2].style.transform === 'rotate(-45deg) translate(6px, -6px)' 
            ? '' 
            : 'rotate(-45deg) translate(6px, -6px)';
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans.forEach(span => span.style = '');
        }
    });
});