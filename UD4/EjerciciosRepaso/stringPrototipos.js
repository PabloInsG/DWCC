String.prototype.vocales = function(){
    var contadorVocales = 0;
    for(let i = 0; i <= this.length; i++){
        if(this.charAt(i) == 'a' || this.charAt(i) == 'e' || this.charAt(i) == 'i' || this.charAt(i) == 'o' || this.charAt(i) == 'u'){
            contadorVocales++;
        }
    }
    document.write("En la cadena '" + this + "' hay " + contadorVocales + " vocales<br>")
}

String.prototype.primerasUpper = function(){
    var cadenaNueva = "";
    var palabras = this.split(' ');
    for(let i = 0; i < palabras.length; i++){
        cadenaNueva += palabras[i][0].toUpperCase();
        for(let j = 1; j < palabras[i].length; j++){
            cadenaNueva += palabras[i][j];
        }
        cadenaNueva += " ";
    }
    document.write(cadenaNueva + "<br>");
}

String.prototype.inverso = function(){
    var cadenaInversa = "";
    for(let i = this.length - 1; i >= 0; i--){
        cadenaInversa += this[i];
    }

    document.write("Cadena inversa: " + cadenaInversa + "<br>")
}

String.prototype.cifradoCesar = function (){
    let cadenaModificada = "";
    for(let i = 0; i < this.length; i++){
        var letras = this[i].charCodeAt() +1;
        cadenaModificada += String.fromCharCode(letras);
    }
    document.write("Cadena cifrada: " + cadenaModificada + "<br>")
}

String.prototype.palabraLarga = function () {
    function compare(a, b) {
        return b.length - a.length;
    }
    var palabraMasLarga = "";
    var palabras = this.split(' ');
    var palabrasOrdenadas = palabras.sort(compare)
    palabraMasLarga += palabrasOrdenadas[0];
    document.write("La palabra mas larga de la frase es: " + palabraMasLarga)
}


var cadena1 = new String();
cadena1 = "holaz";
var cadena2 = new String();
cadena2 = "hola que tal";

cadena1.vocales();
cadena2.primerasUpper();
cadena1.inverso();
cadena1.cifradoCesar();
cadena2.palabraLarga();
