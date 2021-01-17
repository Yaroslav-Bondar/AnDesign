let burger = document.querySelector(".burger");
let menuBurger = document.querySelector(".menu-burger");
let startBurgerLine = document.querySelectorAll(".start__burgerline"); // используется в js/sitesJs/commonSitesJs/commonSitesBurger.js, js/mainPageJs/mainPageBurger.js
let main = document.querySelector(".main");
let footer = document.querySelector(".footer");
let widthFullMenu = 678; // ширина окна при кот вкл./выкл. полная ширина меню а также вкл./выкл .body_lock
let widthUpBurger = 950; // ширина вкл./выкл. бургера и его меню
// кнопка бургера
burger.addEventListener("click", () => {   // действия при клике на кнопку меню-бургера
    toggleClass([burger], ["active"]);
    if (window.innerWidth >= widthFullMenu) {
        toggleClass([menuBurger, main, footer], ["menu-burger_active", "main_active", "footer_active"]);
    } 
    else if (window.innerWidth < widthFullMenu) {
        toggleClass([body, menuBurger], ["body_lock", "menu-burger_full"]);
    }
});
// при наведении мышки на меню бургера блокировать прокрутку страницы
menuBurger.addEventListener("mouseover", () => {
    if (window.innerWidth >= widthFullMenu) {
        addClass([body], ["body_lock"]);
    }
});
menuBurger.addEventListener("mouseout", () => {
    if (window.innerWidth >= widthFullMenu) {
        removeClass([body], ["body_lock"]);
    }
});
// ширина окна
window.addEventListener("resize", () => {  // действия при изменении ширины окна  
    if (window.innerWidth >= widthUpBurger) {
        removeClass([burger, menuBurger, main, footer], ["active", "menu-burger_active", "main_active", "footer_active"]);
    }
    if ( burger.classList.contains("active") && window.innerWidth < widthFullMenu ) {
        addClass([body], ["body_lock"]);
        removeClass([menuBurger, main, footer], ["menu-burger_active", "main_active", "footer_active"]);
        addClass([menuBurger], ["menu-burger_full"]);
    }
    else if ( burger.classList.contains("active") && window.innerWidth > widthFullMenu ) {
        removeClass([menuBurger, body], ["menu-burger_full", "body_lock"]);
        addClass([menuBurger, main, footer], ["menu-burger_active", "main_active", "footer_active"]);
    }
});