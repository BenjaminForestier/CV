var button = document.querySelector('.burger-menu');
var nav = document.querySelector('nav');
var navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    navLinks.classList.toggle('show');
}

function handleDocumentClick(event) {
    if (navLinks.contains(event.target) && button.contains(event.target)) {
        navLinks.classList.remove('show');
    }
}

button.addEventListener('click', toggleMenu);
nav.addEventListener('click', toggleMenu);