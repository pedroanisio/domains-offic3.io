function switchLanguage(lang) {
    const elements = document.querySelectorAll('[lang]');
    elements.forEach(el => {
        el.style.display = el.getAttribute('lang') === lang ? '' : 'none';
    });
}

// Initial language setup
window.onload = () => {
    switchLanguage('en'); // Default language
};
