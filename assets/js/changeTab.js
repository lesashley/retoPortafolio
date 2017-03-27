function pestana(tab_id) {//funcion tab que recibe el parametro del id
	var tab_contenido = document.getElementsByName("pestana");
		for(var i=0; i<tab_contenido.length; i++) {
				if (tab_contenido[i].id == tab_id) {
				tab_contenido[i].style.display = 'inline-block';
			}else {
				tab_contenido[i].style.display = 'none';
			}
		}
	}
