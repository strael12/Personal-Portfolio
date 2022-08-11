// efect canvas menu
const openCanvas = document.querySelector(".canvas");
const menuCanvas = document.querySelector(".off-canvas-menu");
const closeCanvas = document.querySelector(".close");
const backdrop = document.querySelector(".backdrop");

function toogleCanvas() {
  menuCanvas.classList.toggle("is-active");
  backdrop.classList.toggle("hidden");
}

closeCanvas.addEventListener("click", toogleCanvas);
openCanvas.addEventListener("click", toogleCanvas);
