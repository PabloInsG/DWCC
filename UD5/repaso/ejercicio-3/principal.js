import * as x from './funciones.js';

var btn = document.querySelector('#btn')
var opcion = document.querySelector('#opciones')
var numero = document.querySelector('#numero')
var contenedor = document.querySelector('.contenedor')


btn.addEventListener("click", ()=>{
    if(opcion.value == "celsius"){
        contenedor.append(x.celsius(numero.value))
    }
    if(opcion.value == "fahrenheit"){
        contenedor.append(x.fahrenheit(numero.value))
    }
    if(opcion.value == "metros"){
        contenedor.append(x.metros(numero.value))
    }
    if(opcion.value == "pies"){
        contenedor.append(x.pies(numero.value))
    }
    if(opcion.value == "kilos"){
        contenedor.append(x.kilos(numero.value))
    }
    if(opcion.value == "libras"){
        contenedor.append(x.libras(numero.value))
    }
})