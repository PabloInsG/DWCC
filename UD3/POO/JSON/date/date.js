function calcularDias() {
    var dia = prompt('Introduce tu dia')
    var mes = prompt('Introduce tu mes de nacimiento')
    var ano = prompt('Introduce tu año de nacimiento')
    var fechaActual = new Date();
    var fecha = new Date(ano, mes - 1, dia);
    //Restamos las dos fechas que nos lo dara en milisegundos y pasamos a dias
    var calculoDias = Math.floor((fechaActual - fecha) / (24 * 60 * 60 * 1000)) + 1;
    return calculoDias;
}

console.log(calcularDias());