var texto = "GOL GOL GOL GOL GOL GOL";

//Ejercicio 2
var estudiantes = new Map([
    ["Pablo", 20],
    ["Sam", 22]
]);

for(let nombre of estudiantes){
    document.write(`${nombre}<br>`)
}

document.write(`${estudiantes.get("Pablo")}<br>`)


//Ejercicio 3

var productos = new Map([
    ["Rueda", 20],
    ["Tornillos", 25],
])

let eleccion;
console.log("1. Insertar un producto");
console.log("2. Actualizar un producto");
console.log("3. Eliminar un producto");
console.log("4. Salir");
while(eleccion != 4){
    eleccion = prompt("Elija una opción (1-4):");
    switch(eleccion){
        case "1":
            let insertarProducto = prompt(`Que producto desea insertar?`);
            if(insertarProducto == "" || productos.has(insertarProducto)){
                insertarProducto = prompt(`Valor vacio o existente en el mapa, inserte otro:`);
            } else{
                let stockProducto = parseInt(prompt(`Cantidad de stock del producto:`));
                productos.set(insertarProducto, stockProducto);
            }
        case "2":
            console.log(productos);
            let actualizarProducto = prompt(`Que producto desea actualizar?`);
            if(actualizarProducto == "" || !productos.has(actualizarProducto)){
                actualizarProducto = prompt(`Valor vacio o inexistente en el mapa, pon uno que exista:`);
                console.log(productos);
            } else{
                let actualizarStock = prompt(`Cantidad nueva de stock?:`);
                productos.set(actualizarProducto, actualizarStock);
            }
    }
}