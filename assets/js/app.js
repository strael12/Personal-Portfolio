// efect canvas menu
const btnCanvas = document.querySelector('.canvas'); 
const menuCanvas = document.querySelector('.off-canvas-menu');
const close = document.querySelector('.close');

btnCanvas.addEventListener('click', toogleCanvas);
function toogleCanvas(){
    menuCanvas.classList.toggle('is-active');
}

