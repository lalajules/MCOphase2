
function validate() {
  var password = document.getElementById("pass");
  var length = document.getElementById("length");

  if(password.value.length >= 8) {
    window.location.replace("home.html");
    return false;
  }
  else{
    alert("Invalid input: Password must at least have 8 characters! :<");
  }
}

function Register() {

    window.location.replace("register.html");

  }

function Loginh() {

    window.location.replace("index.html");
  
  }

function logout() {

    window.location.replace("index.html");
  
  }

function report() {

    window.location.replace("home.html");
    alert("Your concern has been successfully submitted! ");
  
  }
