//Cogemos el elemento imagen que actua como boton
var boton = document.querySelector("#boton");

//Creamos la funcion validarWeb para el evento que va a tener nuestro boton
function validarWeb() {
    //Cogemos el contenido que hay en el input de texto
    var contenidoInput = document.querySelector("#web").value;
    //Definimos la expresion regular para que nos ponga obligatoriamente una url bien formada con https:// o http:// 3 w un punto lo que sea otro . y que el dominio no sea mayor a 4 caracteres
    var reg = /^(http:\/\/www\.|https:\/\/www\.){1}[a-z0-9]{1,}(\.[a-z]{1,4}){1}$/;
        //Comprobamos si cumple la expresion regular
        if(reg.test(contenidoInput)){
            //Si antes de que se añada, el usuario ha introducido una mal ocultaremos el elemento error que tendria la opacidad a 1
            $(function(){
                $(".error").animate({"opacity": "0"})
            })
            //Cogemos la lista
            var lista = document.querySelector("#lista");
            //Creamos un elemento para añadir a la lista
            var elementoLista = document.createElement('li');
            //Si la url empieza por https extraeremos desde la posicion 12 ya que es despues del primer . y si empieza por http desde la posicion 11
            if(contenidoInput.startsWith("https")){
                var paginaFinal = contenidoInput.substr(12, contenidoInput.length);
            } else {
                var paginaFinal = contenidoInput.substr(11, contenidoInput.length);
            }
            //Al elemento creado anteriormente le añadimos el texto
            elementoLista.textContent = paginaFinal;
            //Lo implementamos a la lista
            lista.append(elementoLista)
        } else{
            //Si la url no es valida le cambiaremos la opacidad al error que tenemos oculto
            $(function(){
                $(".error").animate({"opacity": "1", "transition": "all 200ms"});
            })
        } 
}

//Añadimos un evento para que cuando clicke en la imagen realize la funcion validarWeb
boton.addEventListener("click", validarWeb);