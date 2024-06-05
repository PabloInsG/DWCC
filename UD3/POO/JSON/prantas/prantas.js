var planta = '{"nombre": "Girasol","especie": "Helianthus Annus","origen": "Norte de Mexico y EEUU","estacion_germen": "Primavera","estacion_poda": "Otoño"}';
var planta2 = '{"nombre": "Fentanilo","especie": "Opacias","origen": "Afganistan","estacion_germen": "Primavera","estacion_poda": "Otoño"}';
var planta3 = '{"nombre": "Cactus","especie": "Crassa","origen": "Mohave","estacion_germen": "Verano","estacion_poda": ""}';

var arr = [JSON.parse(planta), JSON.parse(planta2), JSON.parse(planta3)];

for(let i = 0; i < arr.length; i++) {
    document.write("Nombre: ", arr[i].nombre, "<br>");
    document.write("Especie: ", arr[i].especie, "<br>");
    document.write("Origen: ", arr[i].origen, "<br>");
    document.write("Estacion de Germen: ", arr[i].estacion_germen, "<br>");
    document.write("Estacion de poda: ", arr[i].estacion_poda, "<br><br>");
}