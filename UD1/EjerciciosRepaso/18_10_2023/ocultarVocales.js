var cadena = "hOlaafaaf";
var cadenaMinus = cadena.toLowerCase();
var regex = /[aeiou]/g;

var cadenaEspacios = cadenaMinus.replace(regex, " ")

document.write(cadenaEspacios);