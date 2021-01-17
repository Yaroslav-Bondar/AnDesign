burger.addEventListener("click", () => {   // действия при клике на кнопку меню-бургера
    setTimeout(() => {choiseForm.style.height = document.querySelector(".choise__active").clientHeight + 'px';}, 500);  // так как высота choiseForm меняется через время указанное transition на классах при добавлении бокового меню (напр.main_active, свойство сss #main = transition: margin 0.5s;) то и высота формы известна после времени указанной в transition, значит устанавлюем соответствующий setTimeout и меняем высоту формы на высоту активно слайда с классом choise__active   
});
