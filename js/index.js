let tinyPic = document.querySelector(".intro img");

tinyPic.addEventListener("mouseover", function (event) {
  event.target.style.width = "50%";
});

tinyPic.addEventListener("mouseleave", function (event) {
  event.target.style.width = "100%";
});

let navCollection = document.querySelector("nav a");

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    navCollection.style.color = "red";
  }
});

let navBar = document.querySelector("nav");
navBar.addEventListener("click", function (event) {
  event.preventDefault();
});

let bigText = document.querySelector(".text-content h2");

bigText.addEventListener("dblclick", function (event) {
  bigText.style.fontSize = "500%";
});

window.addEventListener("resize", function (event) {
  console.log(`You changed the window size?!? ${window.width}`);
});

window.addEventListener("load", function (event) {
  alert(`Whassup Doug?!?`);
});

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button, idx) => {
  button.addEventListener("click", (event) => {
    button.style.background = "black";
    event.stopPropagation();
  });
});

const body = document.querySelector("body");

document.addEventListener("keyup", (event) => {
  body.style.backgroundColor = "grey";
});

document.addEventListener("keydown", (event) => {
  body.style.backgroundColor = "white";
});
