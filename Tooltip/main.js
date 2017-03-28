
document.getElementById("link").addEventListener("click",function() {
  var tooltipText = document.getElementById('span');
  tooltipText.classList.toggle("nuevo");
});

var bagregar = document.getElementById("b1");
bagregar.addEventListener("click",function() {
  var tooltipText = document.getElementById('span');
  tooltipText.classList.remove("tooltipText.nuevo");
});
var bcerrar = document.getElementById("b2");
bcerrar.addEventListener("click",function() {
  var tooltipText = document.getElementById('span');
  tooltipText.classList.remove("tooltipText.nuevo");
});
