let nav = document.querySelector(".hamburger");
let navLinks = document.querySelector(".navbar");

function hide(x) {
  if (nav.classList.toggle("change")) {
    navLinks.style.visibility = "visible";
  } else {
    navLinks.style.visibility = "hidden";
  }
}
