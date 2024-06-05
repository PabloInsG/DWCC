//Definimos los objetos JSON
var aula = '{"nombre": "Radio","ubicacion": "1º Planta","ocupada": true,"finOcupacion": "09-03-2024"}';
var aula2 = '{"nombre": "TIC","ubicacion": "3º Planta","ocupada": true,"finOcupacion": "11-03-2024"}';
var aula3 = '{"nombre": "Musica","ubicacion": "2º Planta","ocupada": false,"finOcupacion": ""}';

//Metemos en el array los objetos JSON parseandolos a objetos JavaScript
var arr = [JSON.parse(aula), JSON.parse(aula2), JSON.parse(aula3)];

//Recorremos el array
for(let i = 0; i < arr.length; i++){
    //Imprimimos por pantalla los campos
    document.write("Nombre: ", arr[i].nombre, "<br>");
    document.write("Ubicacion: ", arr[i].ubicacion, "<br>");
    document.write("Ocupacion: ", arr[i].ocupada, "<br>");
    document.write("Fin de Ocupacion: ", arr[i].finOcupacion, "<br>");
    document.write("<hr>");
}