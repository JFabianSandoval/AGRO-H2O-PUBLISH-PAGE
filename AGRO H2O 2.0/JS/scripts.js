function mostrarContenido(seccion){
    var elementos=document.querySelectorAll('.Inicio, .Alianzas, .Noticias, .Servi, .Productos, .Contactanos-div');

    elementos.forEach(function(elemento){
        elemento.style.display='none';
    });
    var seccionMostrar=document.querySelector('.'+seccion);
    if(seccionMostrar){
        seccionMostrar.style.display='block';
    }
}
