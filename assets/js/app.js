function pestana(tab_id) {//funcion tab que recibe el parametro del id
	var tab_contenido = document.getElementsByName("pestana");//definimos el elemento que sera devuelto
		for(var i=0; i<tab_contenido.length; i++) {//almacenamos los elementos divs
				if (tab_contenido[i].id == tab_id) {//comparamos el numero de contenido
				tab_contenido[i].style.display = 'inline-block';//mostramos el contenido correspondiente
			}else {
				tab_contenido[i].style.display = 'none';//ocultamos los otros contenidos.
			}
		}
	}
// function popup(){
//   window.open("popup.html","","width=300,height=150,status=no,directories=no,toolbar=no,menubar=no,scrollbars=no,location=0,resizable=no,titlebar=no");
// }

var nuevoArray;
var arrayAgentes = [];
function Agent() {
  this.id = 0;
  this.addAgentes =function(url,type,ip,ruta,resources) {
    arrayAgentes.push({
      id : this.id,
      url : url,
      type : type,
      ip : ip,
      ruta : ruta,
      resources : resources
    })
    this.id ++;
  };
  this.addResource = function(indice,recurso){
    nuevoArray[indice].resources.push(recurso);
		localStorage.setItem('Agentes',JSON.stringify(nuevoArray));
  };
  this.removeResource = function (indice,recurso) {
    var rec = nuevoArray[indice].resources.indexOf(recurso);
		alert(rec);
    nuevoArray[indice].resources.splice(rec,1);
		localStorage.setItem('Agentes',JSON.stringify(nuevoArray));
  };
}

var agentes = new Agent();
//Agregando en arrayAgentes
agentes.addAgentes("bjstdmngbgr02.thoughtworks.com","Idle","192.168.1.2","/var/lib/cruise-agent",["ubuntu","firefox3","core-duo"]);
agentes.addAgentes("bjstdmngbgr03.thoughtworks.com","Building","192.168.1.3","/var/lib/cruise-agent",["ubuntu","firefox3","mysql","core-duo"]);
agentes.addAgentes("bjstdmngbgr04.thoughtworks.com","Building","192.168.1.4","/var/lib/cruise-agent",["ubuntu","firefox3","mysql","core-duo"]);
agentes.addAgentes("bjstdmngbgr05.thoughtworks.com","Idle","192.168.1.5","/var/lib/cruise-agent",["ubuntu"]);
if (!localStorage.getItem("Agentes")) {
	nuevoArray = JSON.parse(localStorage.getItem("Agentes"));
	localStorage.setItem("Agentes",JSON.stringify(arrayAgentes));
} else {
	nuevoArray = JSON.parse(localStorage.getItem("Agentes"));
}

var idRes = 0;
var sp = 0;
var mostrar = document.getElementById("zlash3");
function crearElementos() {
    nuevoArray.forEach(function(e) {
    var panel = document.createElement('div');
    panel.setAttribute('class',e.type);
    var figure = document.createElement('span');
    figure.setAttribute("class","figura");
    var circle = document.createElement('span');
    circle.setAttribute("class","circulo");
    var conteiner = document.createElement('span');
    conteiner.setAttribute("class","texto");
    var agent = document.createElement('span');
    agent.innerHTML= e.url + " | " + e.type + " | " + e.ip + " | " + e.ruta;
    var espacio = document.createElement("br");
    var a = document.createElement('a');
    a.setAttribute("id","sr"+sp);
    a.setAttribute("href","javascript:click("+sp+");");
    sp++;
    a.innerHTML="+"+"Specify Resources";
    var conteinerRes = document.createElement('span');
    conteinerRes.setAttribute("id","resultado" + idRes);
    idRes++;
    mostrar.appendChild(panel);
    panel.appendChild(figure);
    panel.appendChild(conteiner);
    figure.appendChild(circle);
    conteiner.appendChild(agent);
    conteiner.appendChild(espacio);
    conteiner.appendChild(a);
    conteiner.appendChild(conteinerRes);
		var numAgent = e.id;
		e.resources.forEach(function(i) {
			var resource = document.createElement('span');
			resource.setAttribute('data-id',"contRecurso");
			resource.setAttribute("class","contRecurso");
			var span = document.createElement('span');
			span.setAttribute("id","sp");
			span.innerHTML= i;
			var deleteResource = document.createElement('button');
			deleteResource.setAttribute("class","botones");
			deleteResource.setAttribute("id","b");
			deleteResource.innerHTML = "x";
			deleteResource.addEventListener("click",function(e) {
				var postParent = e.target.parentNode;
				postParent.removeChild(span);
				postParent.removeChild(deleteResource);
				postParent.parentNode.removeChild(postParent);//elimina el nodo padre
				agentes.removeResource(numAgent,i);
	 		})
	 		conteinerRes.appendChild(resource);
	 	  resource.appendChild(span);
	 	  resource.appendChild(deleteResource);
		});
  })
}
crearElementos();

function crearContenido(contenido,id) {
  var resource = document.createElement('span');
  resource.setAttribute('data-id',"contRecurso");
	resource.setAttribute("class","contRecurso");
  var span = document.createElement('span');
  span.setAttribute("id","sp");
  span.innerHTML=contenido;
  var deleteResource = document.createElement('button');
  deleteResource.setAttribute("class","botones");
  deleteResource.setAttribute("id","b"+id);
  deleteResource.innerHTML = "x";
  deleteResource.addEventListener("click",function(e) {
    var postParent = e.target.parentNode;
    postParent.removeChild(span);
    postParent.removeChild(deleteResource);
    postParent.parentNode.removeChild(postParent);//elimina el nodo padre
    agentes.removeResource(id,contenido);
  })
  resource.appendChild(span);
  resource.appendChild(deleteResource);
  return recurso;
}

function click(id){
   var resultado = document.getElementById("resultado" + id);
	 var t = prompt("Ingrese un dato").toString();
   if(t == ""){
      alert("Debe ingresar un recurso válido");
   } else {
     var dato = t.split(",");
     dato.forEach(function(e) {
       agentes.addResource(id,e);
       resultado.appendChild(crearContenido(e,id));
     });
   }
}
//Muestra en sumary
var building = document.getElementById("building");
var idle = document.getElementById("idle");
building.innerHTML=document.getElementsByClassName("Building").length;
idle.innerHTML=document.getElementsByClassName("Idle").length;
