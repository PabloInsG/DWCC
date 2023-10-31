//Le pedimos al usuario los dias, horas y minutos que desea
let dia = parseInt(prompt(`Introduce los dias:`));
let horas = parseInt(prompt(`Introduce los horas:`));
let minutos = parseInt(prompt(`Introduce los minutos:`));

//Comprobamos que son numeros y mayores que 0
if(Number(dia) && Number(horas) && Number(minutos)){
    //Pasamos los valores a segundos
    var calcularDias = dia * 86400;
    var calcularHoras = horas * 3600;
    var calcularMinutos = minutos * 60;
    //Sumamos esos segundos
    var totalSegundos = calcularDias + calcularHoras + calcularMinutos;
    document.write(`Total segundos de ${dia} dia/s, ${horas} hora/s y ${minutos} minuto/s: ${totalSegundos} segundos`);
} else{
    document.write("Los valores deben ser numericos y tienen que ser mayores que 0");
}