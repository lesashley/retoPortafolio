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

function Resources(){
  this.contenido =[];
  this.agregarContenido = function(contenido) {
    this.contenido.push(contenido);};
	this.quitarContenido = function(indiceContenido) {
		this.contenido.splice(indiceContenido,1);};
}

// function Agent(tipo) {
// 	this.div = [];
// 	this.addIdle = function(url,ip,ruta) {
// 		this.div.push({
// 			url :url,
// 			type : tipo,
// 			ip : ip,
// 			ruta : ruta,
// 			resources : []
// 		})
// 	};
// }

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
			var indice = n-1;
			postParent.removeChild(span);
			postParent.removeChild(eliminar);
			postParent.parentNode.removeChild(postParent);//elimina el nodo padre
			resources.quitarContenido(indice);
		})
		texto.appendChild(span);
		texto.appendChild(eliminar);
	  return texto;
	}

var resources = new Resources();
var resultado = document.getElementById("resultado");
//datoNuevo = document.getElementById("nuevo");
var bot = document.getElementById("enviar");

function click(){
	var t = prompt("Ingrese un dato").toString();
	var dato = t.split(",");
	console.log(dato[0]);
	dato.forEach(function(e) {
		resources.agregarContenido(e);
		resultado.appendChild(crearContenido(e,"n01"));
	})
}

var building = document.getElementById("building");
var idle = document.getElementById("idle");
building.innerHTML=document.getElementsByClassName("n1").length;
idle.innerHTML=document.getElementsByClassName("n2").length;
