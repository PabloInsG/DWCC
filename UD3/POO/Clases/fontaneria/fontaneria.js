class Traballos{
    desc = "";
    nHoras = 0;
    precioHoras = 0;
    iva = 0;
    constructor(desc, nHoras, precioHoras, iva){
        this.desc = desc;
        this.nHoras = nHoras;
        this.precioHoras = precioHoras;
        this.iva = iva;
    }
    precioFinal(){
        var resultado = (this.nHoras * this.precioHoras) * this.iva / 100;
        document.write("Precio final: ", resultado, "<br>")
    }
    observador(){
        document.write("Descripcion: ", this.desc, "<br> Horas: ", this.nHoras, "<br> Precio por hora: ", this.precioHoras, "<br> IVA: ", this.iva, "<br>")
    }
}

var fontaneria = new Traballos("Cambio de tuberia", 10, 50, 21);

fontaneria.precioFinal();
fontaneria.observador();

Traballos.prototype.fechaPago = new Date().toLocaleDateString()
Traballos.prototype.observadorFecha = function(){
    document.write("Fecha: ", this.fechaPago);
};

fontaneria.observadorFecha();

