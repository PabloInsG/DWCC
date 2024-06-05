//Creamos el mapa con los valores de las frutas y sus precios
var mapa = new Map([
    ["pera", 1.25],
    ["manzana", 1.70],
    ["kiwi", 2.90],
    ["mandarina", 1.19],
    ["fresa", 3.75],
]);

//Creamos la funcion para mostrar la tabla
function mostrarTabla(){
    //Creamos la tabla
    document.write("<table border='1'><tr><th>Fruta</th><th>Precio</th>");
    //Recorremos el mapa
    for(let [fruta, precio] of mapa){
        //Añadimos a la tabla el nombre de las frutas y sus precios
        document.write(`<tr><td>${fruta}</td><td>${precio}</td></tr>`)
    }
    document.write("</table>")
}

mostrarTabla();

//Creamos la funcion que compruebe si existe la fruta que nos pasa el usuario mas los kilos que desea comprar
function existeFruta(usuario, kilos){
    //Si la fruta que nos pasa el usuario existe en nuestro mapa entra en este if
    if(mapa.has(usuario)){
        //Recorremos el mapa otra vez para sacar el precio de la fruta exacta que quiere el usuario
        for(let [fruta, precio] of mapa){
            //Si coincide entramos en ese if
            if(fruta == usuario){
                //Sacamos por pantalla el precio x kg de la fruta que nos pasan
                document.write(`Precio x kg de ${fruta}: ${precio}€ <br>`);
                //Hacemos la multiplicacion del precio por kilo mas los kilos que desea comprar el usuario
                let precioFinal = precio * kilos;
                //Sacamos por pantalla el precio final
                document.write(`Precio final de la compra: ${parseFloat(precioFinal)}€`);
            }
        }
    } else{
        existeFruta(prompt("Esa fruta no existe, prueba con otra fruta: ").toLowerCase(), prompt("Introduce cuantos kilos desea comprar:"));
    }
}       

var usuario = prompt("Introduce una fruta que quiera consultar si esta o no en nuestra lista: ");
var kilos = parseFloat(prompt("Introduce cuantos kilos desea comprar:"));
//Llamamos a la funcion existeFruta pasando a minusculas cualquier nombre de fruta que quiera el usuario ya que en el mapa los nombres estan en minusculas
existeFruta(usuario.toLowerCase(), kilos);