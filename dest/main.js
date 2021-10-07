// Change header color and size on scroll
const header = document.getElementById("header");

const updateHeader = () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};
window.addEventListener("scroll", updateHeader);

// TOGGLE NAV
const openNavBtn = document.querySelector(".header__toggle");
const closeNavBtn = document.querySelector(".nav__close");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");
const body = document.body;

openNavBtn.addEventListener("click", () => {
  nav.classList.add("active");
  overlay.classList.add("active");
  body.classList.add("overlay-open");
});

closeNavBtn.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");
  body.classList.remove("overlay-open");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");
  body.classList.remove("overlay-open");
});

// if (nav.classList.contains("active")) {
//   overlay.classList.add("active");
// } else {
//   overlay.classList.remove("active");
// }

// NAVIGATION LINE
const naviSections = document.querySelectorAll(".home__navigation-text a");
const naviLine = document.querySelector(".home__navigation-line .current");

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
  reset: true,
});

sr.reveal(`.home__textbox, .footer`, {
  origin: "top",
  interval: 100,
});

sr.reveal(
  `.home__social, .section-1 .section__textbox, .section-2 .section__img-overlay, .section-3 .section__textbox`,
  {
    origin: "left",
    interval: 100,
  }
);

sr.reveal(
  `.home__navigation, .section-1 .section__img-overlay, .section-2 .section__textbox, .section-3 .section__img-overlay`,
  {
    origin: "right",
    interval: 100,
  }
);
