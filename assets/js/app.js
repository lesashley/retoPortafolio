var nuevoArray;
var arrayAgentes = [];
function Agent() {
  this.id = 0;
  this.addAgentes = function(url,type,ip,ruta,resources) {
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

var idTooltip = 0;
var idRes = 0;
var sp = 0;
var mostrar = document.getElementById("zlash3");
function createElements() {
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
    a.setAttribute("href","javascript:showTooltip("+sp+");");
		a.setAttribute("class","tooltip");
    sp++;
    a.innerHTML="+"+"Specify Resources";
		//Tooltip
		var tooltip = document.createElement("div");
		tooltip.setAttribute("class","tooltiptext");
		tooltip.setAttribute("id","span"+idTooltip);
		var input = document.createElement("input");
		input.setAttribute("type","text");
		input.setAttribute("id","txt"+idTooltip);
		var addButton = document.createElement("button");
		addButton.setAttribute("class","rounded");
		addButton.setAttribute("id","agregar"+idTooltip);
		addButton.setAttribute("onclick","addResource("+idTooltip+")");
		addButton.innerHTML="Add resources";
		var closeButton = document.createElement("button");
		closeButton.setAttribute("class","rounded");
		closeButton.setAttribute("id","cerrar"+idTooltip);
		closeButton.innerHTML = "Close";
    closeButton.addEventListener("click",function () {
      //var tooltipText = document.getElementById('span');
      tooltip.classList.remove("tooltipText.nuevo");
    })
		idTooltip++;
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
		a.appendChild(tooltip);
		tooltip.appendChild(input);
		tooltip.appendChild(addButton);
		tooltip.appendChild(closeButton);
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
createElements();

function createResources(contenido,id) {
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
  return resource;
}
//Abre el tooltip
function showTooltip(id){
	var input = document.getElementById("txt"+id);
	var span = document.getElementById('span'+id);
	span.classList.toggle("nuevo");
  input.focus();
}

function addResource(id) {
	var idEnlace = document.getElementById("sr"+id);
	var span = document.getElementById('span'+id);
	var resultado = document.getElementById("resultado" + id);
	var text = document.getElementById("txt"+id).value;
	if (text == "") {
		alert("Debe ingresar mínimo un recurso");
	} else {
		var data = text.split(",");
		data.forEach(function (e) {
			agentes.addResource(id,e);
			resultado.appendChild(createResources(e,id));
		});
	}
	var input = document.getElementById("txt"+id);
  input.value="";
	span.classList.remove("tooltipText.nuevo");
}

if(typeof exports !== 'undefined') {
    exports.createResources = createResources;
}
