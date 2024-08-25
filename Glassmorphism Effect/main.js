const navbar = document.querySelector("nav");
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu__btn")

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle('nav-background');
    menu.classList.toggle('nav-toggle')
})