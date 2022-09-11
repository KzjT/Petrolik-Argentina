// button.js
const button = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('#navbarNavAltMarkup');

button.addEventListener('click', function () {
    navbar.classList.toggle('show');
})