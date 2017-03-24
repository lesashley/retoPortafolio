var nuevoArray;

//LocalStorage
if (!localStorage.getItem("Agentes")) {
	nuevoArray = JSON.parse(localStorage.getItem("Agentes"));
	localStorage.setItem("Agentes",JSON.stringify(arrayAgentes));
} else {
	nuevoArray = JSON.parse(localStorage.getItem("Agentes"));
}
