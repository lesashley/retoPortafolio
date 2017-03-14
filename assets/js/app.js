
function pestana(tab_id) {//funcion tab que recibe el parametro del id
	var tab_contenido = document.getElementsByName("pestana");//definimos el elemento que sera devuelto
		for(var x=0; x<tab_contenido.length; x++) {//almacenamos los elementos divs
				if (tab_contenido[x].id == tab_id) {//comparamos el numero de contenido
				tab_contenido[x].style.display = 'inline-block';//mostramos el contenido correspondiente
			}else {
				tab_contenido[x].style.display = 'none';//ocultamos los otros contenidos.
			}
		}
	}
// function popup(){
//   window.open("popup.html","","width=300,height=150,status=no,directories=no,toolbar=no,menubar=no,scrollbars=no,location=0,resizable=no,titlebar=no");
// }

function Agents(){
  this.contenido =[];
  this.agregarContenido = function(contenido) {
    this.contenido.push(contenido);};
	this.quitarContenido = function(contenido) {
		this.contenido.splice(contenido,1);};
	}
	var cont = 1;
	function crearContenido(contenido,id) {
		var texto = document.createElement('span');
		texto.setAttribute('data-id',id);
		var span = document.createElement('span');
		span.setAttribute("id","sp"+cont);
		var n = cont
		cont++;

		span.innerHTML=contenido;
		var eliminar = document.createElement('button');
		eliminar.setAttribute("class","botones");
	  eliminar.innerHTML = "x";
		eliminar.addEventListener("click",function(e) {
			var postParent = e.target.parentNode;
			//var span1 = e.target.getAttribute("id");
			//alert(span1);
			//var postParent = e.target.parentNode.getAttribute('data-id');obtienes el id
			var indice = n-1;
			postParent.removeChild(span);
			postParent.removeChild(eliminar);
			agents.quitarContenido(indice);
		})
		texto.appendChild(span);
		texto.appendChild(eliminar);
	  return texto;
	}

var agents = new Agents();
var resultado = document.getElementById("resultado");
//datoNuevo = document.getElementById("nuevo");
var bot = document.getElementById("enviar");

function click(){
	var t = prompt("Ingrese un dato").toString();
	var dato = t.split(",");
	console.log(dato[0]);
	dato.forEach(function(e) {
		agents.agregarContenido(e);
		resultado.appendChild(crearContenido(e,"n01"));
	})
}

var building = document.getElementById("building");
var idle = document.getElementById("idle");
building.innerHTML=document.getElementsByClassName("n1").length;
idle.innerHTML=document.getElementsByClassName("n2").length;
