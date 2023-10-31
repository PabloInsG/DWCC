let cadenaUsuario = prompt(`Introduce una cadena`);

var letras = /[aeiouAEIOU]/g; 

var cadenaModificada = cadenaUsuario.replace(letras, "x");

document.write(`Cadena modificada: ${cadenaModificada}`);