let butToTop = document.querySelectorAll(".buttotop");
let widthUp = 1329;    // граница ширины при которой меняеются варианты кнопок скролла страницы вверх
let scrollUp = 773;    // значение вертикального скролла страницы при которой вкл./откл. отображение кнопок скролла вверх
// iAmScroll переменная для хранения значения вертикального скролла страницы 
// объявлена и инициализирована в js/commonJs/commonJs.js 
function smoothJumpUp () {              // скролл страницы вверх
    if (body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollBy(0,-50);
        setTimeout(smoothJumpUp, 10);
    }
}
function switchClass (scroll, obj, className) {  // вызов кнопки скролла вверх при скролле вниз )
    if (scroll > scrollUp) {
        obj.classList.add(className);
    } else {
        obj.classList.remove(className);
    }
}
function callSwitchClass (obj_0, obj_1, className_0, className_1) {  // вызов функции переключение классов в 
    if (window.innerWidth >= widthUp) {                              // зависимости от изменения ширины окна   
        obj_1.classList.remove(className_1);
        switchClass(iAmScroll, obj_0, className_0); 
    } else if (window.innerWidth < widthUp) {
        obj_0.classList.remove(className_0);
        switchClass(iAmScroll, obj_1, className_1);
    } 
};
function launchScroll (className_0, className_1) {        // вызов скролла страницы вверх
    className_0.addEventListener("click", smoothJumpUp);  
    className_1.addEventListener("click", smoothJumpUp);  
}
// действия при определенной ширине окна
callSwitchClass(butToTop[0], butToTop[1], "buttotop-v1_active", "buttotop-v2_active");
// действия при изменении ширины окна 
window.addEventListener("resize", () => {
    callSwitchClass(butToTop[0], butToTop[1], "buttotop-v1_active", "buttotop-v2_active");
});
// действия при вертикальном скролле окна 
window.addEventListener("scroll", () => {
    callSwitchClass(butToTop[0], butToTop[1], "buttotop-v1_active", "buttotop-v2_active");
});
// вызов скролла страницы вверх
launchScroll (butToTop[0], butToTop[1]);
