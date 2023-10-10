var cadena = "Pablo";

let cadenaModificada = "";

for(let i = 0; i < cadena.length; i++){
    var letras = cadena[i].charCodeAt() +1;
    cadenaModificada += String.fromCharCode(letras);
}

document.write(cadenaModificada);