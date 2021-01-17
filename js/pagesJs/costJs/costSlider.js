let choise = document.querySelectorAll(".choise");
let choise1 = document.querySelector(".choise1");
let arrowPrev = document.querySelector(".cost__arrow-prev");
let arrowNext = document.querySelector(".cost__arrow-next");
let count = document.querySelector(".cost__digit1");
let countSum = document.querySelector(".cost__digit2");
let button = document.querySelector(".cost__button");
let button2 = document.querySelector(".cost__button2");
let costSubmit = document.querySelector(".cost__submit");
let costNav = document.querySelector(".cost__nav");
let costCloseButton = document.querySelector(".cost__close");
let costModalWindow = document.querySelector(".cost__modal");
let choiseForm = document.getElementById("choise__form");
// let costArrow = document.querySelectorAll(".cost__arrow");
let costCallModal = document.querySelector(".cost__call-modal");
var index=0;
var previous=index;
count.innerHTML = "0" + (index+1);
countSum.innerHTML = "0" + choise.length;
// действия при изминении ширины окна begin
window.addEventListener('resize',function() {
     // высота формы в зависимости от высоты активного блока       
    choiseForm.style.height = document.querySelector(".choise__active").clientHeight + 'px';    
    // 
    // costModalWindow.style.height = 100 + 'vh';
});
// действия при изминении ширины окна end
if (index==0) {
    arrowPrev.style.display = "none"
}
choise[0].classList.add("choise__active");  // show choise to default
choiseForm.style.height = document.querySelector(".choise__active").clientHeight + 'px';

costSubmit.addEventListener ("click", () => {
    costModalWindow.classList.add("active"); 
    costModalWindow.style.top = "" + window.pageYOffset + "px";
});
costCloseButton.addEventListener("click",()=> {
    costModalWindow.classList.remove("active");
    costModalWindow.style.top = 0;
});
// события при клике по кнопкам слайдера (стрелки, кнопки)
arrowPrev.addEventListener("click", prevSlide);  
arrowNext.addEventListener("click", nextSlide);
button.addEventListener("click",nextSlide);
button2.addEventListener("click",showSubmit);
function showSubmit() {
    document.querySelector(".choise.choise__active").remove("choise__active");
    choise[choise.length-1].style.opacity = 0;
    choise1.classList.add("choise__active");
    // высота формы в зависимости от высоты активного блока       
    choiseForm.style.height = document.querySelector(".choise__active").clientHeight + 'px';
    button2.style.opacity = 0;
    costSubmit.classList.add("active"); 
    costNav.style.opacity = 0;
}
function prevSlide() {
    if(index==0){
        index=choise.length-1;
        previous=0;
    }
    else{
        previous=index;
        index--;
    }
    changeSlidePrev();
    index==0 ? arrowPrev.style.display = "none" : arrowPrev.style.display = "block";
    index==choise.length-1 ? arrowNext.style.display = "none" : arrowNext.style.display = "block";
    index==choise.length-1 ? button2.classList.add("active") : button2.classList.remove("active");
    if (index!==choise.length-1) {
        button.style.display = "flex";
        button.style.opacity = 1;
    }
    choiseForm.style.height = document.querySelector(".choise__active").clientHeight + 'px';    // высота формы в зависимости от высоты активного блока    
}
function nextSlide() {
    if(index==choise.length-1){
        index=0;
        previous=choise.length-1;
    }
    else{
        previous=index;
        index++;
    }
    changeSlide();
    index==0 ? arrowPrev.style.display = "none" : arrowPrev.style.display = "block";
    index==choise.length-1 ? arrowNext.style.display = "none" : arrowNext.style.display = "block";
    index==choise.length-1 ? button.style.display = "none" : button.style.opacity = 1;
    index==choise.length-1 ? button2.classList.add("active") : button2.classList.remove("active");
    choiseForm.style.height = document.querySelector(".choise__active").clientHeight + 'px';    // высота формы в зависимости от высоты активного блока
}
function changeSlide() {
    choise[previous].classList.remove("choise__active");
    choise[index].classList.add("choise__active");
    count.innerHTML = "0" + (index+1);
}
function changeSlidePrev() {
    choise[index].classList.add("choise__active");
    choise[previous].classList.remove("choise__active");
    count.innerHTML = "0" + (index+1);
}
