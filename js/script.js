"use strict";
const hamburgerMenuIcon = document.querySelector(".ham-icon");
const hamburgerCloseIcon = document.querySelector(".close-icon");
const nav_header = document.querySelector(".mobile-nav-menu");
const video = document.querySelector(".video-wrapper video");
const play = document.querySelector(".play-btn");

function showMenu() {
  nav_header.classList.add("active");
}
function hideMenu() {
  nav_header.classList.remove("active");
}

hamburgerMenuIcon.addEventListener("click", () => {
  showMenu();
});
hamburgerCloseIcon.addEventListener("click", () => {
  hideMenu();
});
play.addEventListener("click", () => {
  video.play();
  play.style.display = "none";
});
video.addEventListener("click", () => {
  video.pause();
  play.style.display = "block";
});
