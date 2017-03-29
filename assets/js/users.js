var usersCruise;
var usersReto = [{name:"Leslie",email:"lesashley56@gmail.com",password:"123456"},
                 {name:"Cindy",email:"mendozaic@hotmail.com",password:"987654"}];

if (!localStorage.getItem("user")) {
  usersCruise = JSON.parse(localStorage.getItem("user"));
  localStorage.setItem("user",JSON.stringify(usersReto));
} else {
	usersCruise = JSON.parse(localStorage.getItem("user"));
}
