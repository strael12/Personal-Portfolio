// Toggle
function toogleCanvas() {
    menuCanvas.classList.toggle("is-active");
    backdrop.classList.toggle("hidden");
}
  
  // Checkform 
function Checkform(name,email,subject,textarea){
    if(name.value !== '' && 
       email.value !== '' &&
       subject.value !== '' &&
       textarea.value !== ''){
      sendButton.removeAttribute('disabled');
    }else {
      sendButton.setAttribute('disabled','disabled');
    }
    return true;
}
