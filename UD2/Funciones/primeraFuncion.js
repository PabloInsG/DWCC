
function raizCuadrada(numero){
    return(Math.sqrt(numero));
}

function calcularMayor(vector){
    let mayor = raizCuadrada(vector[0]);
    for(let i = 0; i < vector.length; i++){
        if(raizCuadrada(vector[i] > mayor)){
            mayor = raizCuadrada(vector[i]);
            console.log(vector[i]);
        }
    }
    return mayor;
}

function esPrimo(numero){
    for(let i = 2; i < numero; i++){
        if(numero % i == 0){
            return false;
        } else{
            return true;
        }
    }
}

let usuarioo = Number(prompt(`Introduce un numero para comprobar si es primo o no:`));

if(!esPrimo(usuarioo)){
    document.write("El numero no es primo");
} else{
    document.write("El numero es primo");
}


var mensaje = "Fuera de la funcion";
function mostarAnuncio(){
    console.log(mensaje);
}

mostarAnuncio();
console.log(mensaje);

var numero1 = 5;
var numero2 = 7;

function menor(n1, n2){
    var elmenor = n1;
    if(n2 < n1){
        elmenor = n2;
    }
    return elmenor;
}

console.log(menor(numero1, numero2));


var vector = [14, 2, 4, 9, 6];

function menorVector(vec){
    var la06 = vec[0];
    var posicion = 0;
    for(let i = 0; i < vec.length; i++){
        if(vec[i] < la06){
            la06 = vec[i];
            posicion = i;
        }
    }
    return la06;

}

console.log(menorVector(vector));


function dividir(numero, divisor=1){
    return (numero/divisor);
}

console.log(dividir(2));
console.log(dividir(6,2));
console.log(dividir());


const bienvenido = () =>{
    return "Bienvenido";
}


console.log(bienvenido());




let userr = parseInt(prompt(`Introduzca su edad:`));

function puedeVotar(edad){
    if(!Number(edad)){
        return edad;
    } else{
        if(edad >= 18){
            return "Puede votar";
        } else{
            return "No puede votar";
        }
    }
}

document.write(puedeVotar(userr));


let us = parseInt(prompt("Introduce los grados:"));

function fahrenheitToCelsius(fahrenheit){
    return (fahrenheit - 32) * 5/9;
}

function celsiusToFahrenheit(celsius){
    var resultado = (celsius * 9/5) + 32;
    if (resultado > 113){
        document.getElementById("body").style.backgroundColor = "red";
    }
    if (resultado < 0){
        document.getElementById("body").style.backgroundColor = "blue";
    }
    return resultado;
}

document.write(celsiusToFahrenheit(us));

//Crea una funcion que reciba por parametro un array previamente cargado en el exterior, no interior da funcion que busque el menor y guarde la posicion con la letra M en el exterior imprimimos el contenido del array

var array = [20, 12, 4, 40, 33];

function buscarMenor(arr){
    var menor = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < menor){
            menor = arr[i];
            posicion = i;
        }
    }
    arr[posicion] = "M";
    return menor
}

document.write(buscarMenor(array));
document.write("<br>Array: " + array);


function unaLetra(cadena){
    var cad = cadena;
    if(cad.length == 1){
        return true;
    } else{
        return false;
    }
}

do{
    var user = prompt("Introduce una letra");
} while(!unaLetra(user));

function buscarVocal(letra){
        if(unaLetra(letra) && isNaN(letra)){
            var caracter = letra.toLowerCase();
            if(caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u"){
                return "Es vocal";
            } else{
                return "No es vocal";
            }
        } else{
            return "Debe de ser una letra";
        }
    }
    document.write(buscarVocal(user));


    //Crear una funcion que reciba un precio y un porcentaje y devuelva el precio con el descuento

    function descuento(precio, porcentaje){
        return precio - (precio * porcentaje / 100);
    }

    document.write(descuento(20, 50));


var secreta = "secta";

var usuario = prompt("Introduce una letra:");
function coincidencias(usuario, secreta){
    var cad = "";
}

console.log(coincidencias(usuario, secreta));