var inputsRegister = document.getElementsByClassName('register');
var messageErrorRegister = document.getElementById('errorMessage');
var users = {
  name:[],
  lastName:[],
  email:[],
  password:[]
}

document.getElementById('register').addEventListener("click",function(){
  if(inputsRegister[0].value == "" ){
    messageErrorRegister.innerHTML = "Don't accept empty fields";}
    else if(/^[a-zA-Z_áéíóúñ\s]*$/.test(inputsRegister[0].value) == false ){
      messageErrorRegister.innerHTML = "Enter text only";}
      else if(inputsRegister[1].value == "" ){
          messageErrorRegister.innerHTML = "Don't accept empty fields";}
          else if(/^[a-zA-Z_áéíóúñ\s]*$/.test(inputsRegister[1].value) == false ){
            messageErrorRegister.innerHTML = "Enter text only";}
            else if(inputsRegister[2].value == "" ){
              messageErrorRegister.innerHTML = "Don't accept empty fields";}
              else if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(inputsRegister[2].value) != true){
                messageErrorRegister.innerHTML="Enter valid email";}
                else if(inputsRegister[3].value == "" ){
                messageErrorRegister.innerHTML = "Don't accept empty fields";}
                else if(inputsRegister[1].value.length <= 6 || inputsRegister[1].value == "password" || inputsRegister[1].value == "123456") {
                  messageErrorRegister.innerHTML="Use alphanumerical, more than six characters";}
                  else {
                    messageErrorRegister.innerHTML="";
                    users.name.push(inputsRegister[0].value);
                    users.lastName.push(inputsRegister[1].value);
                    users.email.push(inputsRegister[2].value);
                    users.password.push(inputsRegister[3].value);
                    window.location="login.html";
                  }

})
