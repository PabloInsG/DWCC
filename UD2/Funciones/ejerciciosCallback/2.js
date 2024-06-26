/*Programa que valide dende unha funcion a outra para validar un codigo postal
e comprobe a provincia de España a que pertence ese código (dous primeiros numeros).
O programa principal lanza a funcion que desenvolverá só o nome da provincia
do código postal, pasando a función.*/

var provincias = new Map([
    ['01', 'Álava'],
    ['02', 'Albacete'],
    ['03', 'Alicante'],
    ['04', 'Almería'],
    ['05', 'Ávila'],
    ['06', 'Badajoz'],
    ['07', 'Illes Balears'],
    ['08', 'Barcelona'],
    ['09', 'Burgos'],
    ['10', 'Cáceres'],
    ['11', 'Cádiz'],
    ['12', 'Castellón'],
    ['13', 'Ciudad Real'],
    ['14', 'Córdoba'],
    ['15', 'A Coruña'],
    ['16', 'Cuenca'],
    ['17', 'Girona'],
    ['18', 'Granada'],
    ['19', 'Guadalajara'],
    ['20', 'Guipúzcoa'],
    ['21', 'Huelva'],
    ['22', 'Huesca'],
    ['23', 'Jaén'],
    ['24', 'León'],
    ['25', 'Lleida'],
    ['26', 'La Rioja'],
    ['27', 'Lugo'],
    ['28', 'Madrid'],
    ['29', 'Málaga'],
    ['30', 'Murcia'],
    ['31', 'Navarra'],
    ['32', 'Ourense'],
    ['33', 'Asturias'],
    ['34', 'Palencia'],
    ['35', 'Las Palmas'],
    ['36', 'Pontevedra'],
    ['37', 'Salamanca'],
    ['38', 'Santa Cruz de Tenerife'],
    ['39', 'Cantabria'],
    ['40', 'Segovia'],
    ['41', 'Sevilla'],
    ['42', 'Soria'],
    ['43', 'Tarragona'],
    ['44', 'Teruel'],
    ['45', 'Toledo'],
    ['46', 'Valencia'],
    ['47', 'Valladolid'],
    ['48', 'Vizcaya'],
    ['49', 'Zamora'],
    ['50', 'Zaragoza'],
    ['51', 'Ceuta'],
    ['52', 'Melilla']
]);
var codigoPostal = prompt("Introduce el código postal:");
var reglas = /\d(5)/gm;
if (codigoPostal.length == 5 && codigoPostal.match(reglas)) {
    
    function validarCodigo(codigoPostal, callback) {
        var codProvincia = codigoPostal.substring(0, 2);
        if (!provincias.has(codProvincia)) {
            callback(codProvincia, null); //Si os dous primeiros numeros do código non estan no mapa
        } else {
            callback(null, provincias.get(codProvincia)); //Si os dous primeiros numeros do código estan no mapa
        }
    }

    function nombreProvincia(codProvincia, nombre) {
        if (nombre) {
            console.log("Provincia de", nombre);
        } else {
            console.log("No pertenece a ninguna provincia");
        }
    }
} else {
    console.log("El codigo postal no es válido.")
}

validarCodigo(codigoPostal, nombreProvincia);