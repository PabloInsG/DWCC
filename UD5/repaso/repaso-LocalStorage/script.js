let nome = prompt("Introduzca el nombre del barco")
let portoBase = prompt("Introduzca el puerto base")
let anoConstruccion = prompt("Introduzca el año de construccion")
let eslora = prompt("")

var barco = {
    nombre: nome,
    puerto: portoBase,
    anoConstruccion: anoConstruccion,
    eslora: eslora
}

localStorage.setItem(barco);


localStorage.getItem(barco)