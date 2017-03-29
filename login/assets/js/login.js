var inputsLogin = document.getElementsByClassName('login');
var messageErrorLogin = document.getElementById('errorMessage');

document.getElementById('login').addEventListener("click",function(){
  if(inputsLogin[0].value == "" ){
    messageErrorLogin.innerHTML = "Don't accept empty fields";}
    else if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(inputsLogin[0].value) != true){
      messageErrorLogin.innerHTML="Enter valid email";}
      else if(inputsLogin[1].value == "" ){
        messageErrorLogin.innerHTML = "Don't accept empty fields";}
        else if(inputsLogin[1].value.length <= 6 || inputsLogin[1].value == "password" || inputsLogin[1].value == "123456") {
          messageErrorLogin.innerHTML="Use alphanumerical, more than six characters";}
          else if(inputsLogin[0].value == "mendozaic@hotmail.com" && inputsLogin[1].value == "pruebalogin" || inputsLogin[0].value == "leslie@gmail.com" && inputsLogin[1].value == "pruebaLogin1"){
            window.location="../master/index.html";
          }else{ messageErrorLogin.innerHTML="Wrong email and password";}

});
