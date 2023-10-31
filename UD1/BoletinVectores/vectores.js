//Imprimir os valores dun vector de 100 elementos.
var vector100 = [];
for(let i = 0; i <= 100; i++){
    vector100[i] = vector100.push(Math.random(vector100[i] * 100));
}
console.log(`Ejercicio 1:`)
console.log(vector100);

//Lee unha matriz de 5x6, e imprime a suma total da matriz.
document.write(`Ejercicio 2: <br>`);

var matriz5x6 = [];

for(let i = 0; i < 5; i++){
    matriz5x6[i] = [];
    for(let j = 0; j < 6; j++){
        matriz5x6[i][j] = i * 6 + j + 1;
    }
} 
var suma = 0;

for (var i = 0; i < matriz5x6.length; i++) {
    for (var j = 0; j < matriz5x6[i].length; j++) {
        suma+= matriz5x6[i][j];
    }
}

document.write(`<table border="1" style="text-align: center; background-color: #b0c2f2">`);
for (var i = 0; i < matriz5x6.length; i++) {
    document.write("<tr>");
    for (var j = 0; j < matriz5x6[i].length; j++) {
        document.write("<td>" + matriz5x6[i][j] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

document.write(`Total de la suma de los numeros de la matriz: ${suma} <br>`);


//Lee un vector numérico de dimensión 10 e determina cantos elementos son positivos, negativos e ceros, imprimindo por pantalla cada un deles, para finalmente imprimir os contadores por pantalla.
document.write(`<br>Ejercicio 3: <br>`);

var vectorDimernsion10 = [10, -4, 22, 0, 44, -2, 4, 55, -1, 0];
let contadorPositivos = 0;
let contadorNegativos = 0;
let contadorZeros = 0;

for(let i = 0; i < vectorDimernsion10.length; i++){
    if(vectorDimernsion10[i] == 0){
        contadorZeros++;
    } else if(vectorDimernsion10[i] > 0){
        contadorPositivos++;
    } else if(vectorDimernsion10[i] < 0){
        contadorNegativos++;
    }
}
document.write(`<br>Vector: ${vectorDimernsion10} <br>`);
document.write(`Numeros positivos: ${contadorPositivos} <br>`);
document.write(`Cantidad de Ceros: ${contadorZeros}<br>`);
document.write(`Numeros negativos: ${contadorNegativos}<br>`);

//Ordena ascendentemente unha serie de números dados.
document.write(`<br>Ejercicio 4: <br>`);
var arrayAscendente = [2, 5, 9, 8, 7, 6];
arrayAscendente.sort();
arrayAscendente.reverse();
document.write(`${arrayAscendente}<br>`);

//Dados 10 números, introducilos nun vector e amosar a media e a suma.
document.write(`<br>Ejercicio 5: <br>`);
var array10Numeros = [1, 5, 6, 2, 7, 23, 11, 9, 8, 4];
var suma10Numeros = 0;
var media10Numeros = 0;
for(let i = 0; i < array10Numeros.length; i++){
    suma10Numeros += array10Numeros[i];
    media10Numeros = suma10Numeros / 10;
}
document.write(`Suma: ${suma10Numeros}<br>`)
document.write(`Media: ${media10Numeros}<br>`)

//Encher unha matriz 3x3 e amosar a diagonal principal.
document.write(`<br>Ejercicio 6: <br>`);
var array3x3 = [];
for(let i = 0; i < 3; i++) {
    array3x3.push(Math.floor(Math.random() * 100) + 1);
    for(let j = 0; j < array3x3[i].length; j++){
        array3x3[i].push(Math.floor(Math.random() * 100) + 1);
    }
}
document.write(`La diagonal principal: ${array3x3}`);



//Solicitar os datos dunha matriz 3x4 e amosala trasposta.
document.write(`<br>Ejercicio 7: <br>`);
var matriz3x4 = [];

for(let i = 0; i < 3; i++){
    matriz3x4[i] = [];
    for(let j = 0; j < 4; j++){
        matriz3x4[i][j] = (Math.floor(Math.random() * 30) + 1) + (Math.floor(Math.random() * 30) + 1);
    }
} 

document.write(`<table border="1" style="text-align: center; background-color: #b0c2f2">`);
for (var i = 0; i < matriz3x4.length; i++) {
    document.write("<tr>");
    for (var j = 0; j < matriz3x4[i].length; j++) {
        document.write("<td>" + matriz3x4[i][j] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");


//Dado un vector de N elementos, modificar ese vector para que cada elemento conteña a suma dos anteriores.
document.write(`<br>Ejercicio 8: <br>`);

let numeroElementos = prompt(`Cuantos numeros de elementos son:`);

var vectorElemento = [];
var vectorElementoSumado = [];
for(let i = 0; i < numeroElementos; i++){
    vectorElemento[i] = vectorElemento.push(vectorElemento[i] + vectorElemento[i]);
    for(let j = 0; j < numeroElementos[i]; j++){
        vectorElementoSumado[j] = vectorElementoSumado.push(vectorElemento[i] + vectorElemento[i]);
    }
}
document.write(`${vectorElementoSumado}<br>`);


//Dado un vector de N elementos, devolver outro vector cos elementos ao revés.
document.write(`<br>Ejercicio 9: <br>`);
var arrayDerecho = [1, 3, 4, 5, 6, 7];
document.write(`Array normal: ${arrayDerecho}<br>`);
document.write(`Array del reves: ${arrayDerecho.reverse()}<br>`);

//Escribir un programa para ler 10 números por teclado e indicar cantos son maiores que a media.
document.write(`<br>Ejercicio 10: <br>`);

var arrayAA = [1, 4, 5, 7, 8, 11, 10, 12, 19];
var sumaTotalNumeros = 0;
var arrayMayoresQueLaMedia = [];

for(let i = 0; i < arrayAA.length; i++){
    sumaTotalNumeros += arrayAA[i];
}
var mediaArrayAA = sumaTotalNumeros / arrayAA.length;
for(let i = 0; i < arrayAA.length; i++){
    if(arrayAA[i] > mediaArrayAA){
        arrayMayoresQueLaMedia.push(arrayAA[i]);
    }
}
document.write(`Suma de los numeros: ${sumaTotalNumeros}`);
document.write(`<br>Media de los numeros: ${mediaArrayAA}`);
document.write(`<br>Numeros mayores a la media: ${arrayMayoresQueLaMedia}<br>`)


//Crea un vector de números dun tamaño introducido por teclado, éncheo con números aleatorios primos menores que 100 e indica cal é o maior de todos eles.
document.write(`<br>Ejercicio 11: <br>`);
let usuarioTamano = prompt(`Cuantos numeros desea introducir`);
var arrayRandom = [];

for(let i = 0; i < usuarioTamano; i++){
    arrayRandom.push(Math.floor(Math.random() * 100) + 1);
}

let esPrimo = true;
  for (let i = 2; i <= Math.sqrt(numeroAleatorio); i++) {
    if (numeroAleatorio % i === 0) {
      esPrimo = false;
      break;
    }
  }
  if (esPrimo) {
    vector.push(numeroAleatorio);
    if (numeroAleatorio > mayorPrimo) {
      mayorPrimo = numeroAleatorio;
    }
  }

document.write(`Vector: ${arrayRandom}<br`);