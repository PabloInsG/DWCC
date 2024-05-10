import * as operaciones from "./calculadora.js";

var boton = document.querySelector("#operar");
var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var contenedor = document.querySelector("#contenedor")
var contador = 1;


boton.addEventListener("click", ()=>{
    let h3 = document.createElement('h3');
    let div = document.createElement('div');
    h3.textContent = 'Operacion ' + contador + ":"
    div.append(h3)
    div.append(operaciones.suma(num1.value, num2.value));
    div.append(operaciones.resta(num1.value, num2.value));
    div.append(operaciones.multiplicacion(num1.value, num2.value))
    div.append(operaciones.division(num1.value, num2.value));
    contenedor.append(div)
    contador++
})

