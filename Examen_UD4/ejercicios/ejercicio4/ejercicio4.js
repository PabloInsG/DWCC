$(function(){
    //Creamos una variable contador ya que nuestras imagenes son numeros
    var contador = 1;
    //Creamos un intervalo de 10 segundos que realize lo siguiente
    setInterval(function(){
            //Mientras que contador no sea 11
            if(contador != 11){
                //Crearemos un elemento imagen
                var imagen = document.createElement('img');
                //Que tenga el src con la imagen correspondiente
                imagen.src = "../imagenes/" + contador + ".jpeg";
                //Establecemos la opactity a 0 para hacer la animacion de fadeIn
                imagen.style.opacity = 0;
                //Le añadimos al container .row la imagen
                $(".row").append(imagen);
                //Realizamos la animacion con 600ms de duracion
                $( "img" ).animate({"opacity": "1", "transition":"all 600ms"});
                //Aumentamos la variable contador para que la siguiente imagen sea la correspondiente
                contador++;
            }
    }, 10000)
})