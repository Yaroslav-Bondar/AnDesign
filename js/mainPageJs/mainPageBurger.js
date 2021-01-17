let screen2 = document.querySelector(".screen2");
let screen2Top = screen2.offsetTop; // высота html-елемента с классом screen2
// iAmScroll переменная для хранения значения вертикального скролла страницы 
// объявлена и инициализирована в js/commonJs/commonJs.js 
window.addEventListener("resize", () => {  // высота html-елемента с классом screen2 при измине-и ширины страницы
    screen2Top = screen2.offsetTop;
});
window.addEventListener("scroll", ()=> {   // при скролле на высоту больше или равной высоте блока с классом .screen2 менять цвет линий бургера
    if ((Math.round(iAmScroll)) >= screen2Top && (burger.classList.contains("active") === false)) {
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
    if ((Math.round(iAmScroll)) > screen2Top) { 
        startBurgerLine.forEach( (item)=> {    // блока с классом .screen2: задавать линиям бургера определенный цвет
            item.classList.toggle("start__burgerline_active");
        });
    }
});
