//Ejercicio 1
var a = 1;
var b = 2;

var suma = a + b;

document.write(suma);

//Ejercicio 2
var meses = 0;
var capital = 1920;
do{
    var resto = capital * 2 / 100;
    resto *= meses;
    meses++;
} while(meses <= 3)

console.log(resto);
console.log(suma);


//Ejercicio 3
var compra = 50;
var descuento = 15;

var total = compra - (compra * descuento / 100);
console.log(total);

//Ejercicio 4
var clase = 11;
var hombres = 10;
var mujeres = 1;

var porcentajeHombres = hombres / clase * 100;
var porcentajeMujeres = mujeres / clase * 100;

console.log(porcentajeHombres);
console.log(porcentajeMujeres);

//Ejercicio 5 
var euros = 5;
var dolar = 1.07;
var peseta = 166.386;

var euroToDolar = euros * dolar;
var euroToPeseta = euros *peseta;

console.log(euroToDolar);
console.log(euroToPeseta);


//Ejercicio 6
var sueldoBase = 1000;
var ventas = 1200 + 350 + 5600;
var comision = ventas * 10 / 100;

var sueldoFinal = sueldoBase + comision;

console.log(sueldoFinal);

//Ejercicio 7

let usuario = prompt("Introduce los grados en fahrenheit para calcular a celsius:");

var celsius = (Number(usuario) - 32) * 5 / 9;

console.log(celsius.toFixed(2));

//Ejercicio 8
let usuarioAltura = prompt("Introduce tu altura (en cm):");
let usuarioPeso = prompt("Introduce tu peso:");
let usuarioEdad = prompt("Introduce tu edad:");

var calorias = 10 * Number(usuarioPeso) + 6.25 * Number(usuarioAltura) - 5 * Number(usuarioEdad);
var imc = usuarioPeso / ((usuarioAltura / 100) * (usuarioAltura / 100));


document.write(`
                <table border="1" id="tabla">
                    <tr>
                        <td>Altura (cm)</td>
                        <td>Peso (kg)</td>
                        <td>Edad</td>
                        <td>IMC</td>
                        <td>Calorias a consumir</td>
                    </tr>
                    <tr>
                        <td>${usuarioAltura}</td>
                        <td>${usuarioPeso}</td>
                        <td>${usuarioEdad}</td>
                        <td>${imc}</td>
                        <td>${calorias}</td>
                    </tr>
                    
                </table>
                `)

//Ejercicio 9
var numeroDigitos = 4214;
var millares = Math.floor(numeroDigitos / 1000);
var centenas = Math.floor((numeroDigitos % 1000) / 100);
var decenas = Math.floor((numeroDigitos % 100) / 10);
var unidades = numeroDigitos % 10;

console.log(`El numero introducido tiene ${millares} millares, ${centenas} centenas, ${decenas} decenas y ${unidades} unidades`)