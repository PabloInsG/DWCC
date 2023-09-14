let num1 = 2;
let num2 = 3;

let suma = num1 + num2;

console.log(suma, num1);
//document.write(suma, num2);

let nombre = prompt( "Introduce un nombre");
let apellido = prompt( "Introduce tu apellido");
let edad = prompt( "Introduce tu edad");

document.write("<h1>", "Datos Recollidos:", "</h1>")

document.write(`<strong>Nombre: \"${nombre}" <br> Apellido:  \"${apellido}" <br> Edad: \"${edad}" <br></strong>`);

document.write("C:\\\\usuario\\ tarda 1\'23\", algo considerado \"lento\" en la actualidad.")


var numeroBinario = 0b1111;
var numeroHexadecimal = 0x2ba;
var numeroOctal = 0o111;
var potencia= 2e+2;

var divisionPorCero = 23/0;
var sumaMasDivision = divisionPorCero + 12;

console.log(numeroBinario);
console.log(numeroHexadecimal);
console.log(numeroOctal);
console.log(potencia);
console.log(sumaMasDivision);

var numero = Number.MAX_SAFE_INTEGER;

document.write("<br>", numero);

var ano = 2023;

document.write(`<br>Año de nacimiento: ${ano-Number(edad)}`);

var nomeVariable = "Hola";

function ola(){
    var nomeVariable = "Hola 2";
    console.log(nomeVariable);
}
console.log(nomeVariable);

let mensaxe ="Estas seguro de querer eliminar?";
let respues= confirm(mensaxe);

console.log(`Respuesta ${respues}`)

const PI = 3.14159;

alert(`Lembra usar esta aproximación nos teus cálculos: ${PI}`);

var a  = 0b111;
var b = 0b010;
console.log( a);

a^=b;

console.log( a);

