//Importamos todas las funciones que se puedan importar del archivo funciones.js
import * as x from './funciones.js';

var a = 2;
var b = 4;
var c = 6;

//Llamamos a las funciones que hemos importado pasando los 3 elementos
x.cargar(a,b,c);
x.mostrar(a, b, c);