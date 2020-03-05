const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const sun = document.querySelector(".sun");
const body = document.querySelector("body");
const homeButton = document.querySelector(".home");
const bars = document.querySelectorAll(".bar");
const imageID = document.getElementById("imageID");

const initiateDarkMode = () => {
  body.classList.toggle("moon");
  homeButton.style.color = "white";
  bars.forEach(bar => (bar.style.backgroundColor = "white"));
  imageID.src = "./imgs/moon.svg";
};

const initiateLightMode = () => {
  imageID.src = "./imgs/sun.svg";
  homeButton.style.color = "black";
  bars.forEach(bar => (bar.style.backgroundColor = "black"));
};

sun.addEventListener("click", () => {
  initiateDarkMode();

  if (body.className != "moon") {
    initiateLightMode();
  }
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("change");
  navbar.classList.toggle("active");
});
