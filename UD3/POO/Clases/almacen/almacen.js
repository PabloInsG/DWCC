class Almacen{
    nome = "";
    ubicacion = "";
    n_productos = 0;
    constructor(nome, ubicacion, n_productos){
        this.nome = nome;
        this.ubicacion = ubicacion;
        this.n_productos = n_productos;
    }
    observador() {
        document.write("Nombre: ", this.nome, "<br>Ubicacion: ", this.ubicacion, "<br>Cantidad Productos: ", this.n_productos, "<br><hr>")
    }
}

var miAlmacen = new Almacen("Xoguetes", "Laxe", 200);
miAlmacen.observador();

Almacen.prototype.facturacion = "100000€";
Almacen.prototype.observadorConFacturacion = function() {
    document.write("Nombre: ", this.nome, "<br>Ubicacion: ", this.ubicacion, "<br>Cantidad Productos: ", this.n_productos, "<br>Facturación Anual: ", this.facturacion);
}

miAlmacen.observadorConFacturacion();