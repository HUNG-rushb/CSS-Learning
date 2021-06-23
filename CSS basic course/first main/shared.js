// "use strict";

let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let modalNoButton = document.querySelector(".modal__action--negative");

let selectPlanButton = document.querySelectorAll(".plan button");

let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

for (let i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", () => {
    // modal.style.display = "block";
    // backdrop.style.display = "block";

    //   modal.className = "open";

    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

const closeModal = () => {
  //   modal.style.display = "none";
  //   backdrop.style.display = "none";

  if (modal) {
    modal.classList.remove("open");
  }

  backdrop.classList.remove("open");
};

backdrop.addEventListener("click", () => {
  closeModal();

  //   mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

// --------------------------------------------------------------
toggleButton.addEventListener("click", () => {
  //   mobileNav.style.display = "block";
  //   backdrop.style.display = "block";

  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
