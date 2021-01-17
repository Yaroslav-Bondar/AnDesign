let barItem = document.querySelectorAll(".progress__bar-item");
let progressColumn = document.querySelectorAll(".progress__column");
const nextImageDelay = 2000;
let currentImageCounter = 0;

barItem[currentImageCounter].classList.toggle("active");
progressColumn[currentImageCounter].classList.toggle("active");

setInterval(nextImage, nextImageDelay);

function nextImage() {
  progressColumn[currentImageCounter].classList.toggle("active");
    if (currentImageCounter==barItem.length-1) {
        for (let i = 0; i < barItem.length; i++) {
            barItem[i].classList.remove("active");
        }
    }  
    currentImageCounter = (currentImageCounter+1) % barItem.length;
    barItem[currentImageCounter].classList.toggle("active");
    progressColumn[currentImageCounter].classList.toggle("active");
}