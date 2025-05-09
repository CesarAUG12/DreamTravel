// MENU
let navbar = document.getElementById("header");

document.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  if (scrollTop > 0) {
    navbar.classList.add("rolar");
  } else {
    navbar.classList.remove("rolar");
  }
});

// BTN MENU MOBILE

let btnMenu = document.getElementById("btn-menu-mob");

let line1 = document.querySelector(".line-mob-1");
let line2 = document.querySelector(".line-mob-2");

let menuMob = document.getElementById("menu-mobile");
let body = document.querySelector("body");

btnMenu.addEventListener("click", () => {
  line1.classList.toggle("active1");
  line2.classList.toggle("active2");
  menuMob.classList.toggle("active");

  body.classList.toggle("no-owerflow");
});

menuMob.addEventListener("click", () => {
  line1.classList.remove("active1");
  line2.classList.remove("active2");
  menuMob.classList.remove("active");
});
