var nVeces = parseInt(prompt(`Cuantos articulos desea comprar:`));
var contador = 0;
var total = 0;
var totalIVA = 0;
while(contador < nVeces){
    contador++;
    var mapa = new Map([
        ["Naranjas", 10],
        ["Pera", 10],
        ["Platano", 5],
        ["Manzana", 20],
        ["Fresa", 10],
        ["Melocoton", 10],
        ["Sandia", 30],
        ["Melon", 30],
        ["Uvas", 15],
        ["Maracuya", 20],
    ]);
    var productosUsuario = prompt(`Que producto desea comprar de los siguientes: Naranjas, Pera, Platano, Manzana, Fresa, Melcoton, Sandia, Melon, Uvas, Maracuya:`);
    for(var [articulo, precio] of mapa){
        if(articulo == productosUsuario){
            total += precio;
            document.write(`<br>Producto: ${articulo};  Precio: ${precio}`);
        }
    }
}

totalIVA = Math.floor(total * 1.16) + 1;

document.write(`<br>Total con IVA: ${totalIVA}`);