// "use strict";

let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let modalNoButton = document.querySelector(".modal__action--negative");

let selectPlanButton = document.querySelectorAll(".plan button");

let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

var ctaButton = document.querySelector(".main-nav__item--cta");

for (let i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", () => {
    // modal.style.display = "block";
    // backdrop.style.display = "block";

    //   modal.className = "open";

    modal.classList.add("open");

    backdrop.style.display = "block";

    setTimeout(() => {
      backdrop.classList.add("open");
    }, 10);
  });
}

const closeModal = () => {
  //   modal.style.display = "none";
  //   backdrop.style.display = "none";

  if (modal) {
    modal.classList.remove("open");
  }

  backdrop.classList.remove("open");

  setTimeout(() => {
    backdrop.style.display = "none";
  }, 200);
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

  mobileNav.classList.add("open");

  backdrop.style.display = "block";

  setTimeout(() => {
    backdrop.classList.add("open");
  }, 10);
});

// ctaButton.addEventListener("animationstart", (event) => {
//   console.log("Started", event);
// });
// ctaButton.addEventListener("animationend", (event) => {
//   console.log("End", event);
// });
// ctaButton.addEventListener("animationiteration", (event) => {
//   console.log("Iterating", event);
// });

ctaButton.addEventListener("animationstart", function (event) {
  console.log(1);
  console.log("Animation started", event);
});

ctaButton.addEventListener("animationend", function (event) {
  console.log("Animation ended", event);
});

ctaButton.addEventListener("animationiteration", function (event) {
  console.log("Animation iteration", event);
});
