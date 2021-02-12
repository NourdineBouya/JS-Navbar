const menu = document.getElementById('menu');
const navlinks = document.getElementById('navlinks');

menu.addEventListener('click', ()=> {
    navlinks.classList.toggle("change");
});