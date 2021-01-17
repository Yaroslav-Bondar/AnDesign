// кнопка бургера
burger.addEventListener("click", () => {   // действия при клике на кнопку меню-бургера
    if (burger.classList.contains("active")) {
        burger.classList.add("privacy__burger_active");
    }
    else {
        burger.classList.remove("privacy__burger_active");
    }
});
// ширина окна
window.addEventListener("resize", () => {  // действия при изменении ширины окна  
    if (window.innerWidth >= 950) {
        burger.classList.remove("privacy__burger_active");
    }
});