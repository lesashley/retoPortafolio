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
function Agent() {
  this.arrayAgentes = [];
  this.id=0;
  this.addAgentes =function(url,type,ip,ruta) {
    this.arrayAgentes.push({
      id : this.id,
      url : url,
      type : type,
      ip : ip,
      ruta : ruta,
      resources : []
    })
    this.id ++;
  };
  this.addResource = function(indice,recurso){
    this.arrayAgentes[indice].resources.push(recurso);
  };
  this.removeResource = function (indice,recurso) {
    var rec = this.arrayAgentes[indice].resources.indexOf(recurso);
    this.arrayAgentes[indice].resources.splice(rec,1);
  };
}

var agentes = new Agent();
agentes.addAgentes("bjstdmngbgr02.thoughtworks.com","Idle","192.168.1.2","/var/lib/cruise-agent",["ubuntu","firefox3","core-duo"]);
agentes.addAgentes("bjstdmngbgr03.thoughtworks.com","Building","192.168.1.3","/var/lib/cruise-agent",["ubuntu","firefox3","mysql","core-duo"]);
agentes.addAgentes("bjstdmngbgr04.thoughtworks.com","Building","192.168.1.4","/var/lib/cruise-agent",["ubuntu","firefox3","mysql","core-duo"]);
agentes.addAgentes("bjstdmngbgr05.thoughtworks.com","Idle","192.168.1.5","/var/lib/cruise-agent",["ubuntu"]);

//agregando recursos
// agentes.addResource(0,"ubuntu","firefox3","core-duo");
// agentes.addResource(1,"ubuntu,firefox3,mysql,core-duo");
// agentes.addResource(2,"ubuntu,firefox3,mysql,core-duo");
// agentes.addResource(3,"ubuntu");
var idRes = 0;
var sp = 0;
var mostrar = document.getElementById("zlash3");
function crearElementos() {
  agentes.arrayAgentes.forEach(function(e) {
    var panel = document.createElement('div');
    panel.setAttribute('class',e.type);
    var figura = document.createElement('span');
    figura.setAttribute("class","figura");
    var circulo = document.createElement('span');
    circulo.setAttribute("class","circulo");
    var texto = document.createElement('span');
    texto.setAttribute("class","texto");
    var agente = document.createElement('span');
    agente.innerHTML= e.url + " | " + e.type + " | " + e.ip + " | " + e.ruta;
    var espacio = document.createElement("br");
    var a = document.createElement('a');
    a.setAttribute("id","sr"+sp);
    a.setAttribute("href","javascript:click("+sp+");");
    sp++;
    a.innerHTML="Specify Resources";
    var recursos = document.createElement('span');
    recursos.setAttribute("id","resultado" + idRes);
    idRes++;
    mostrar.appendChild(panel);
    panel.appendChild(figura);
    panel.appendChild(texto);
    figura.appendChild(circulo);
    texto.appendChild(agente);
    texto.appendChild(espacio);
    texto.appendChild(a);
    texto.appendChild(recursos);
  })
}
crearElementos();

function crearContenido(contenido,id) {
  var texto = document.createElement('span');
  texto.setAttribute('data-id',"contRecurso");
	texto.setAttribute("class","contRecurso");
  var span = document.createElement('span');
  span.setAttribute("id","sp");
  span.innerHTML=contenido;
  var eliminar = document.createElement('button');
  eliminar.setAttribute("class","botones");
  eliminar.setAttribute("id","b"+id);
  eliminar.innerHTML = "x";
  eliminar.addEventListener("click",function(e) {
    var postParent = e.target.parentNode;
    postParent.removeChild(span);
    postParent.removeChild(eliminar);
    postParent.parentNode.removeChild(postParent);//elimina el nodo padre
    agentes.removeResource(id,contenido);
  })
  texto.appendChild(span);
  texto.appendChild(eliminar);
  return texto;
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

var building = document.getElementById("building");
var idle = document.getElementById("idle");
building.innerHTML=document.getElementsByClassName("n1").length;
idle.innerHTML=document.getElementsByClassName("n2").length;
