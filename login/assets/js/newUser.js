var inputsRegister = document.getElementsByClassName('register');
var messageErrorRegister = document.getElementById('errorMessage');

document.getElementById('register').addEventListener("click",function(){
  if(inputsRegister[0].value == "" ){
    messageErrorRegister.innerHTML = "Don't accept empty fields";
  }
  else if(/^[a-zA-Z_áéíóúñ\s]*$/.test(inputsRegister[0].value) == false ){
    messageErrorRegister.innerHTML = "Enter text only";
  }
  else if(inputsRegister[1].value == "" ){
    messageErrorRegister.innerHTML = "Don't accept empty fields";
  }
  else if(/^[a-zA-Z_áéíóúñ\s]*$/.test(inputsRegister[1].value) == false ){
    messageErrorRegister.innerHTML = "Enter text only";
  }
  else if(inputsRegister[2].value == "" ){
    messageErrorRegister.innerHTML = "Don't accept empty fields";
  }
  else if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(inputsRegister[2].value) != true){
    messageErrorRegister.innerHTML="Enter valid email";
  }
  else if(inputsRegister[3].value == "" ){
    messageErrorRegister.innerHTML = "Don't accept empty fields";
  }
  else if(inputsRegister[1].value.length < 6 || inputsRegister[1].value == "password") {
    messageErrorRegister.innerHTML="Use more than six characters";
  }
  else {
    messageErrorRegister.innerHTML="";
    usersCruise.push({name:inputsRegister[0].value,email:inputsRegister[2].value,password:inputsRegister[3].value});
    localStorage.setItem('user',JSON.stringify(usersCruise));
    window.location="login.html";
  }
})
