let startMenuBlock = document.querySelector(".start__menu-block");
let startMenuBlockHeight = startMenuBlock.clientHeight; // высота html-елемента с классом start__menu-block
// iAmScroll переменная для хранения значения вертикального скролла страницы 
// объявлена и инициализирована в js/commonJs/commonJs.js
window.addEventListener("resize", () => {  // высота html-елемента с классом start__menu-block при измине-и ширины страницы
    startMenuBlockHeight = startMenuBlock.clientHeight;
});
// линии бургера 
window.addEventListener("scroll", ()=> {   // при скролле на высоту болушую чем у блока  с классом .start__menu-block менять цвет линий бургера
    if ((Math.round(iAmScroll)) > startMenuBlockHeight && !(burger.classList.contains("active"))) {
        startBurgerLine.forEach( (item)=> {
            item.classList.add("start__burgerline_active");
        });
    } else {
        startBurgerLine.forEach( (item)=> {
            item.classList.remove("start__burgerline_active");
        });
    }
}); 
// кнопка бургера
burger.addEventListener("click", () => {   // действия при клике на кнопку меню-бургера
    if ((Math.round(iAmScroll)) > startMenuBlockHeight) { 
        startBurgerLine.forEach( (item)=> {    // блока с классом .screen2: задавать линиям бургера определенный цвет
            item.classList.toggle("start__burgerline_active");
        });
    }
});
