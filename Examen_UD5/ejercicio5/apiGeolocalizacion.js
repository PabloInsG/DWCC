//Creamos el objeto date
var fechaActual = new Date();
//Si el mes de la variable es igual a 3 que hace referencia al mes de abril
if(fechaActual.getMonth() == 3){
    //Sacaremos la longitud y la latitud del cliente
    navigator.geolocation.getCurrentPosition(posicion=>{
        console.log(`Longitud: ${posicion.coords.longitude}`)
        console.log(`Latitude: ${posicion.coords.latitude}`)
    })
} else{
    //Si no indicaremos que no estamos en abril
    console.log("No estamos en abril");
}