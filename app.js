const menu = document.querySelector('#mobile-menu');             /* targets the "#mobile-menu" from the html */
const menuLinks = document.querySelector('.navbar__menu');       /* targets the "navbar__menu" from the html */

menu.addEventListener('click', function() {           /* "listens" for a click event and wants function to run when click happens */
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');           /* toggles and adds a class list */
});