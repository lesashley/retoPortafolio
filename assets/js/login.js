var inputsLogin = document.getElementsByClassName('login');
var messageErrorLogin = document.getElementById('errorMessage');
var nombre;
document.getElementById('login').addEventListener("click",function(){
  if(inputsLogin[0].value == "" ){
    messageErrorLogin.innerHTML = "Don't accept empty fields";
  }
  else if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(inputsLogin[0].value) != true){
    messageErrorLogin.innerHTML="Enter valid email";
  }
  else if(inputsLogin[1].value == "" ){
    messageErrorLogin.innerHTML = "Don't accept empty fields";
  }
  else if(inputsLogin[1].value == "password" || inputsLogin[1].value.length < 6) {
    messageErrorLogin.innerHTML="Use more than five characters";
  }
  else if(inputsLogin[0].value != "" && inputsLogin[1].value != ""){
    usersCruise.forEach(function (e) {
      if (inputsLogin[0].value == e.email && inputsLogin[1].value == e.password) {
        nombre=e.name;
        window.location = "index.html" + "?nombre=" +nombre;
      } else{
        messageErrorLogin.innerHTML="Wrong email and password";
      }
    });
  }
});
