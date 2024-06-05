//Creamos la clase producto
class Producto {
    //Definimos los atributos que va a tener el producto
    codigo = 0;
    nome = "";
    proveedor = "";
    existencias = 0;
    fechaCompra = "";
    fechaVenta = "";
    //Creamos el constructor que nos permite crear el producto con los atributos que queremos
    constructor(codigo, nome, proveedor, existencias, fechaCompra, fechaVenta){
        if(proveedor == ""){
            this.codigo = codigo;
            this.nome = nome;
            this.proveedor = "";
            this.existencias = existencias;
            this.fechaCompra = fechaCompra;
            this.fechaVenta = fechaVenta;
        } else if(existencias == ""){
            this.codigo = codigo;
            this.nome = nome;
            this.proveedor = proveedor;
            this.existencias = "";
            this.fechaCompra = fechaCompra;
            this.fechaVenta = fechaVenta;
        } else{
            this.codigo = codigo;
            this.nome = nome;
            this.proveedor = proveedor;
            this.existencias = existencias;
            this.fechaCompra = fechaCompra;
            this.fechaVenta = fechaVenta;
        }
    }

    //Creamos el metodo de compras que nos tendran que pasar la cantidad que se ha comprado y las existencias actuales se actualizan realizando una suma de la cantidad actual mas la cantidad que se ha comprado
    compras(cantidad){
        this.existencias += cantidad;
        this.fechaCompra = "04/12/2023";
    }
    
    //Creamos el metodo de ventas que nos tendran que pasar la cantidad que se ha vendido y las existencias actuales se actualizan realizando una resta de la cantidad actual menos la cantidad que se ha vendido
    ventas(cantidadVentas){
        this.existencias -= cantidadVentas;
        this.fechaVenta = "04/12/2023";
    }

    //Creamos el metodo observador que nos permite ver los atributos por pantalla
    observador(){
        document.write("<hr>")
        document.write(`Nome: ${this.nome} <br> Proveedor: ${this.proveedor} <br> Existencias Actuales: ${this.existencias} <br> Fecha Ultima Compra: ${this.fechaCompra} <br>`)
    }
}

//Creamos un objeto Producto
var producto = new Producto(1, "Lapiz", "Milan", 200, "04/12/2023", "04/12/2023");

//Comprobamos que funcionan los tres metodos
producto.compras(200);
producto.ventas(250);
producto.observador();

//Definimos las variables para posterior uso
var arr = [];
var codigo = "";
var nome = "";
var proveedor = "";
var existencias = "";
var fechaCompra = "";
var fechaVenta = "";

//Realizamos un for para crear un array de 3 objetos Producto
for(let i = 0; i < 3; i++){
    //Pedimos por pantalla todos los atributos
    codigo = prompt("Introduce el codigo del producto");
    nome = prompt("Introduce el nombre del producto");
    proveedor = prompt("Introduce el proveedor");
    existencias = prompt("Introduce las existencias del producto");
    fechaCompra = prompt("Introduce la ultima fecha de compra");
    fechaVenta = prompt("Introduce la ultima fecha de venta");
    //Añadimos al array lo que nos han pasado por pantalla creando un objeto Producto con esos atributos
    arr.push(new Producto(codigo, nome, proveedor, existencias, fechaCompra, fechaVenta));
}

//Recorremos el array
for(let i = 0; i < arr.length; i++){
    //Utilizamos el metodo observador para ver los valores que tienen los objetos dentro del array
    arr[i].observador();
}