/*Escribe un programa que tome unha cadea como argumento e devolva a lonxitude 
desa cadea.
*/

var cadena1 = "Hola que tal";

document.write(`Ejercicio 1: <br> La longitud de la cadena es de ${cadena1.length} caracteres<br>`);


/*Escribe un programa que tome dúas cadeas como argumentos e as concatene 
para formar unha nova.
*/
var cadena2 = " Pablo";

var cadenaJunta = cadena1 + cadena2;
document.write(`<br>Ejercicio 2: <br> Cadena juntada: ${cadenaJunta} <br>`);


/*Escribe un programa que tome unha cadea como argumento e devolva a 
mesma cadea en maiúsculas e minúsculas.
*/
document.write(`<br>Ejercicio 3: <br> Cadena en MAYUSCULA: ${cadenaJunta.toUpperCase()} <br> Cadena en minuscula: ${cadenaJunta.toLowerCase()} <br>`);


/*Escribe un programa que tome unha cadea, un carácter para buscar e un 
carácter de substitución, e substitúa todas as ocorrencias do carácter de
busca polo carácter de substitución.
*/
let cadenaUsuarioo = prompt("Introduce una cadena de texto");
let buscarUsuario = prompt("Introduce un caracter que quieres buscar:");
let substituirUsuario = prompt("Introduce un caracter que quieres substituir:");

var substituir = cadenaUsuarioo.replace(buscarUsuario, substituirUsuario);
document.write(`<br>Ejercicio 4: <br> Cadena con la substitucion: ${substituir}<br>`);

/*Escribe un programa que conte cantas veces aparece un carácter específico 
nunha cadea.
*/
var caracter = "a";
let contador = 0;

for(let i = 0; i <= cadenaJunta.length; i++){
    if(cadenaJunta.charAt(i) == caracter){
        contador++;
    }
}
document.write(`<br>Ejercicio 5: <br> Cantidad de veces que aparece el caracter "${caracter}" en la cadena "${cadenaJunta}": ${contador}<br>`);


/*Escribe un programa que tome unha cadea como argumento e devolva o número 
de palabras desa cadea.
*/

let espacios = 0;
let contadorPalabras = 0;

for(let i = 0; i <= cadenaJunta.length; i++){
    if(cadenaJunta.length != 0){
        if(cadenaJunta.charAt(i) == " "){
            espacios++;
            contadorPalabras = espacios + 1;
        }
    }
}

document.write(`<br>Ejercicio 6: <br> Cantidad de palabras que tiene la cadena "${cadenaJunta}": ${contadorPalabras}<br>`);

/*Escribe un programa que tome unha cadea e devolva esa cadea invertida 
(é dicir, "hola" pasa a ser "aloh").
*/
document.write(`<br>Ejercicio 7: <br> Cadena al reves: `);
var cadenaInversa = "Hola";

for(let i = cadenaInversa.length - 1; i >= 0; i--){
    document.write(cadenaInversa[i]);
}



//Escribe un programa que tome unha cadea e elimine todos os espazos en branco ao principio e ao final desta.
document.write(`<br>Ejercicio 8: <br> Suprimir espacios: `);
var cadenaEspacios = "        Hola que tal         ";
document.write(`${cadenaEspacios.trim()}<br>`);


//Escribe un programa que tome unha cadea e dous índices como argumentos e devolva a subcadea entre eses dous índices.
document.write(`<br>Ejercicio 9: <br> Subcadena: `);
let cadenaUsuario = prompt(`Escriba una cadena`);
let indice1Usuario = prompt(`Introduzca el primer indice`);
let indice2Usuario = prompt(`Introduzca el segundo indice`);

document.write(`${cadenaUsuario.slice(indice1Usuario, indice2Usuario)}<br>`);

//Escribe un programa que conte cantas vogais e consoantes hai nunha cadea determinada.
let contadorVocales = 0;
let contadorConsonantes = 0;

var cadenaVocalesConsonantes = "Hola como estas";
document.write(`<br>Ejercicio 10: <br> Vocales y consonantes en una cadena: ${cadenaVocalesConsonantes} <br>`);
const regexVocales = /[aeiouáéíóúü]/;
for(let i = 0; i <= cadenaVocalesConsonantes.length; i++){
    const cadenaa = cadenaVocalesConsonantes[i];
    if(regexVocales.test(cadenaa)){
        contadorVocales++;
    } else if(/[a-záéíóúü]/.test(cadenaa)){
        contadorConsonantes++;
    }
}
document.write(`Numero de vocales: ${contadorVocales} <br> Numero de consonantes: ${contadorConsonantes}`);