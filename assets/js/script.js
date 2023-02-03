// JavaScript Code For Passwod Eye Icon

const eyeIcon = document.querySelector("#eye");
const passInput = document.querySelector("#pass-input");
const eyeOn = document.querySelector("#eye-on");
const eyeOff = document.querySelector("#eye-off");

eyeIcon.addEventListener("click", function () {
  if (passInput.type === "password") {
    passInput.type = "text";
    eyeOn.style.display = "block";
    eyeOff.style.display = "none";
  } else {
    passInput.type = "password";
    eyeOn.style.display = "none";
    eyeOff.style.display = "block";
  }
});
