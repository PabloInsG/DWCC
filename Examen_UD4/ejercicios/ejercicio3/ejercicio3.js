//Creamos una funcion para las variables de tipo String
String.prototype.hayNumeros = function(){
    //Creamos una expresion regular que compruebe que contenga un numero
    var regExp = /[0-9]/g;
    //Comprobamos la cadena de texto con la expresion regular
    if(regExp.test(this)){
        //Si es true imprimimos por pantalla que contiene numeros
        document.write('La cadena: "' + this + '", contiene numeros');
    } else{
        //Si es false imprimimos por pantalla que no contiene numeros
        document.write('La cadena: "' + this + '", no contiene numeros');
    }
}
//Creamos la variable de tipo String
var cadena = "Hola que tal";
//Llamamos a la funcion
cadena.hayNumeros();