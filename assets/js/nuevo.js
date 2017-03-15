


// function Resources(){
// //this.contenido =[];
//   this.agregarContenido = function(contenido) {
//     agente.add.resources.push(contenido);};
// 	//this.quitarContenido = function(indiceContenido) {
// 		//this.contenido.splice(indiceContenido,1);};
// }

var agentes = [];
function Agent(url,type,ip,ruta) {
  this.url = url,
  this.type = type,
  this.ip = ip,
  this.ruta = ruta,
  this.resources = [],
  this.addResource = function(nombre){
    this.resources.push(nombre);
  };
  this.mostrar = function () {
    return this.url + " | " + this.type + " | " + this.ip + " | " + this.ruta;
  }
}
//IMPORTANTE
// var agente = new Agent(parametros);
//   agente.addResource(recursos);
//   agentes.push(agente);

//var agente = new Agent('hola','idle','192.168.1.1','/dd/FF/');
//agente.addResource('firefox');
//agentes.push(agente);

function crearElementos(id,contenido) {
  var panel = document.createElement('div');
  panel.setAttribute('class',id);
  var figura = document.createElement('span');
  figura.setAttribute("class","figura");
  var circulo = document.createElement('span');
  circulo.setAttribute("class","circulo");
  var texto = document.createElement('span');
  var agente = document.createElement('span');
  agente.innerHTML=contenido;
  var a = document.createElement('a');
  a.setAttribute("href","javascript:click();");
  a.innerHTML="Specify Resources";
  var recursos = document.createElement('span');
  recursos.setAttribute("id","resultado");

  panel.appendChild(figura);
  panel.appendChild(texto);
  figura.appendChild(circulo);
  texto.appendChild(agente);
  texto.appendChild(a);
  texto.appendChild(recursos);

  return panel;
  //return figura;
}
var mostrar = document.getElementById("mostrar");
var agregar = document.getElementById("agregar");
agregar.addEventListener("click",function () {
  var url=prompt();
  var type = prompt();
  var ip = prompt();
  var ruta = prompt();
  var agente = new Agent(url,type,ip,ruta);
  mostrar.appendChild(crearElementos("n1",agente.mostrar()));
  agentes.push(agente);
});
var resultado = document.getElementById("resultado");
function click(){
	var t = prompt("Ingrese un dato").toString();
	var dato = t.split(",");
	//console.log(dato[0]);
	dato.forEach(function(e) {
		agente.addResource(e);
		resultado.appendChild(crearContenido(e,"n01"));
	})
}
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
