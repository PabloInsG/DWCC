/*
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

let mensaje = (edad>18) ? "Mayor" : "Menor";

console.log(mensaje);

*/

function randomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    var num1 = Math.floor(Math.random() * (max-min) + min); 
    var num2 = Math.floor(Math.random() * (max-min) + min); 
    var num3 = Math.floor(Math.random() * (max-min) + min); 
    if(num1 >= num2 && num1 >= num3){
        console.log(`${num1} es el numero mas grande que ${num2} y ${num3}`);
    }
    else if(num2 >=  num1 && num2 >= num3){
        console.log(`${num2} es el numero mas grande ${num1} y ${num3}`);
    }
    else{
        console.log(`${num3} es el numero mas grande ${num1} y ${num2}`);
    }
    
    if(num1 <= num2 && num1 <= num3){
        console.log(`${num1} es el numero mas pequeño ${num2} y ${num3}`);
    }
    else if(num2 <=  num1 && num2 <= num3){
        console.log(`${num2} es el numero mas pequeño ${num1} y ${num3}`);
    }
    else{
        console.log(`${num3} es el numero mas pequeño ${num1} y ${num2}`);
    }   
}

randomNumber(1,50);

/*
SWITCH

let numero = prompt("Introduce un numero:");
switch (Number(numero)){
    case 1:
            console.log("Uno");
            break;
    case 2:
            console.log("Dos");
            break;
    case 3:
            console.log("Tres");
            break;
    case 4:
            console.log("Cuatro");
            break;
    case 5:
            console.log("Cinco");
            break;
    case 6:
            console.log("Seis");
            break;
    case 7:
            console.log("Siete");
            break;
    case 8:
            console.log("Ocho");
            break;
    case 9:
            console.log("Nueve");
            break;
    case 10:
            console.log("Diez");
            break;
    default:
            console.log("Incorrecto")
} 
*/
/*
let pases = 0;
do{
    if(pases % 2 != 0)
    console.log(`Pases numero ${pases}`);
    pases++;
}
while(pases<=1000)
*/
/*
a imprime a suma de dos numeros pedidos por pantalla
b imprime o factorial del numero pedido por pantalla
c imprime el resto de la division pedidos por pantalla


let eleccion = prompt("Introduce una opcion: a) suma b) factorial c) resto de una division")
switch(eleccion){
    case "a":
        let num1 = prompt("Primer numero");
        let num2 = prompt("Segundo numero");
        var suma = Number(num1) + Number(num2);
        console.log(suma);
        break;
    case "b":
        let numero = prompt("Introduce el numero que desea ver el factorial");
        do{
            
        }while(numero >= 1)
        console.log(factorial);
        break;
    case "c":
        let numero1 = prompt("Primer numero");
        let numero2 = prompt("Segundo numero");
        var resto = numero1 % numero2;
        console.log(resto);
        break;
    default:
        console.log("Incorrecto");
}
*/

let texto3="Oso";
let texto4="Ñu";
console.log(texto3.localeCompare(texto4,"es"));
console.log(texto3.length);

let cara = "casona";
console.log(cara.charAt(5));
console.log(cara.charCodeAt(5));

let texto = "al alba, amigo mio, al alba";
console.log(texto.toUpperCase());
console.log(texto.lastIndexOf("a"));
console.log(texto.endsWith("11"));
console.log(texto.replace("alba", "hilal"));
console.log(texto.slice(3,8));

//Pedir texto, el texto a buscar, resultado de numero de veces que salga
/*
let pedirTexto  = prompt("Introduce una cadena de texto");

let pedirCaracter = prompt("Introduce el caracter que desea consultar");
var contador = 0;
var posicion = pedirTexto.indexOf(pedirCaracter);

while(posicion != -1){
    contador++;
    console.log(contador);
    posicion =pedirTexto.indexOf(pedirCaracter, posicion+1);
}
*/

//Arrays
var arrayPrueba = [
    ["Manzana", 2],
    ["Naranja", 5],
    ["Pera", 4]
];

document.write(`
        <table border="1" id="tabl" style="text-align: center; width: 400px; background-color:  #b0c2f2">
            <tr>
                <td>Fruta</td>
                <td>Precio</td>
            </tr>
            <tr>
                <td>${arrayPrueba[0][0]}</td>
                <td>${arrayPrueba[0][1]} €</td>
            </tr>
            <tr>
                <td>${arrayPrueba[1][0]}</td>
                <td>${arrayPrueba[1][1]} €</td>
            </tr>
            <tr>
                <td>${arrayPrueba[2][0]}</td>
                <td>${arrayPrueba[2][1]} €</td>
            </tr>
        </table>`);
/*
var fruta_nueva = prompt("Introduce el nombre de una nueva fruta:");
var fruta_precio = prompt(`Introduce el precio de ${fruta_nueva}:`);
arrayPrueba[3] = ["Platano", 4]
arrayPrueba.push([fruta_nueva, fruta_precio]);


document.write(`<br><table border="1" style="text-align: center; width: 400px; background-color:  #ffda9e"><tr><td>Nombre</td><td>Precio</td></tr>`);
for(var i = 0; i <= arrayPrueba.length; i++){
    for(var j = 0; j <= arrayPrueba[i].length; j++){
        document.write(`<tr>`); 
        document.write(`<td>${arrayPrueba[i][j]}</td>`);
        document.write(`<td>${arrayPrueba[i][j]}</td>`);
        document.write(`</tr>`);
    }
}
document.write(`</table>`);
*/
var edades = [15, 17, 19, 10, 20, 22];
var edades = new Array (15, 17, 19, 10, 20, 22);
var edades = Array(15, 17, 19, 10, 20, 22);

console.log(edades);

let precios = [88.21, 22, 12.24, 33];

for(let i in precios){
    console.log(`El precio ${i} es ${precios[i]}`);
}

for(let precio in precios){
    console.log(precio);
}

var empleados = [
    ["Pablo", "Insua", 1300],
    ["Carlos", "Aldariz", 1400],
    ["Jesus", "Allo", 1500]
];
/*
for(let i = 0; i <= empleados.length; i++){
    var nombre = empleados[i][0];
    var apellido = empleados[i][1];
    var salario = empleados[i][2];
    document.write(`Nombre: ${nombre} - Apellido: ${apellido} - Salario: ${salario} €<br>`);
}
*/


let sinIVA = [20,45,38,95,33,12];
let conIVA = sinIVA.slice();
conIVA[0] = 120;

document.write(`${conIVA} <br>`);
document.write(`${sinIVA} <br>`);


var array5elementos = [];

let usuarioArray = prompt(`Introduce 5 elementos:`);

for(let i = 0; i <= usuarioArray.length; i++){
    if(usuarioArray.charAt(i) != " "){
        array5elementos.push(usuarioArray.charAt(i));
    }
}
document.write(`${array5elementos}`);
let contador2 = 0;
let buscarArray = prompt(`Que elemento quieres buscar:`)
var indice = array5elementos.indexOf(buscarArray);
while(indice != -1){
    contador2++;
    indice = array5elementos.indexOf(buscarArray, indice + 1);
}
document.write(`<br>${contador2}`);