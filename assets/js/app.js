// efect canvas menu
const openCanvas = document.querySelector(".canvas");
const menuCanvas = document.querySelector(".off-canvas-menu");
const closeCanvas = document.querySelector(".close");
const backdrop = document.querySelector(".backdrop");


// Filter constant
const nameField = document.getElementById('name'); 
const emailField = document.getElementById('email'); 
const subjectField = document.getElementById('subject'); 
const textareaField = document.getElementById('textarea'); 
const sendButton = document.getElementById('send');
const mainAdjust = document.querySelector('.ajuste');


// Button Disabled
sendButton.setAttribute('disabled','disabled');

// Listen for user input 
mainAdjust.addEventListener('input', (e) => {
  Checkform(nameField,emailField,subjectField,textareaField);
});

closeCanvas.addEventListener("click",toogleCanvas);
openCanvas.addEventListener("click",toogleCanvas);
