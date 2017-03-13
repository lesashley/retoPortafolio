function pestana(tab_id) {//funcion tab que recibe el parametro del id
	var tab_contenido = document.getElementsByName("pestana");//definimos el elemento que sera devuelto
		for(var x=0; x<tab_contenido.length; x++) {//almacenamos los elementos divs
				if (tab_contenido[x].id == tab_id) {//comparamos el numero de contenido
				tab_contenido[x].style.display = 'block';//mostramos el contenido correspondiente
			}else {
				tab_contenido[x].style.display = 'none';//ocultamos los otros contenidos.
			}
		}
	}
function popup(){
  window.open("popup.html","","width=300,height=150,status=no,directories=no,toolbar=no,menubar=no,scrollbars=no,location=0,resizable=no,titlebar=no");
}

//datoNuevo = document.getElementById("nuevo").value;
//datoNuevo.split(",");


function Dashboard(){
  this.contenido =[];
  this.agregarContenido = function(contenido) {
    this.contenido.push(contenido);};
  }
  // this.creandoElementos=function (text,i) {
  //
  // }
