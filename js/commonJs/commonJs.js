var body = document.querySelector("body");
var iAmScroll;                             // переменная iAmScroll для хранения значения вертикального скролла страницы
window.addEventListener("scroll", ()=> {   // получаем высоту вертикального скролла страницы
    iAmScroll = window.scrollY;            // в переменную iAmScroll, которая используется
});                                        // в файлах: js/sitesJs/commonSitesJs/commonSitesBurger.js js/mainPageJs/mainPageBurger.js js/commonJs/buttonsToTop.js
function removeClass (obj = [], className = []) {     // удаление (remove) классов сss
    obj.forEach ((item, index) => {                   // удаляет классы CSS для обьектов DOM в соответствии с порядком задания их в    
        if (className[index] != undefined) {          // аргументах функции
            item.classList.remove(className[index]);
        }
    });
}
function addClass (obj = [], className = []) {     // добавление (add) сss
    obj.forEach ((item, index) => {                   // добавляет классы CSS для обьектов DOM в соответствии с порядком задания их в    
        if (className[index] != undefined) {          // аргументах функции
            item.classList.add(className[index]);
        }
    });
}
function toggleClass (obj = [], className = []) {     // переключения (toogle) сss
    obj.forEach ((item, index) => {                   // переключает классы CSS для обьектов DOM в соответствии с порядком задания их в    
        if (className[index] != undefined) {          // аргументах функции
            item.classList.toggle(className[index]);
        }
    });
}