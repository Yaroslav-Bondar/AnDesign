let startCallItem = document.querySelector(".start__call-item");
let callModal = document.querySelector(".call__modal");
let modalClose = document.querySelector(".modal__close");
startCallItem.addEventListener("click", () => {
    addClass([callModal, body], ["active", "lock"]);
});
modalClose.addEventListener("click", () => {
    removeClass([callModal, body], ["active", "lock"]);
});