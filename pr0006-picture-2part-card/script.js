const sideTwoBtn = document.querySelector(".side-two-btn");
const sideOneBtn = document.querySelector(".side-one-btn");
const twoCardsFrame = document.querySelector(".two-cards-frame");

sideTwoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    twoCardsFrame.classList.add("swap");
})

sideOneBtn.addEventListener("click", (e) => {
    e.preventDefault();
    twoCardsFrame.classList.remove("swap");
})