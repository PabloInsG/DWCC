class Cafetera {   
    constructor(capacidadMaxima, cantidadActual){
        if(capacidadMaxima == undefined && cantidadActual == undefined){
            this.capacidadMaxima = 1000;
            this.cantidadActual = 0;
        } else if(cantidadActual == undefined){
            this.capacidadMaxima = capacidadMaxima;
            this.cantidadActual = this.capacidadMaxima;
        } else{
            this.capacidadMaxima = capacidadMaxima;
            this.cantidadActual = cantidadActual;
            if(this.cantidadActual > this.capacidadMaxima){
                this.capacidadMaxima = this.cantidadActual;
            }
        }
    }
    
    llenarCafetera(){
        this.cantidadActual = this.capacidadMaxima;
        console.log("Se ha llenado la cafetera: ", this.cantidadActual)
    }

    servirTaza(capacidad){
        if(this.cantidadActual < capacidad){
            console.log("Sirviendo una taza con la cantidad restante que hay en la cafetera: ", this.cantidadActual, "mL");
            this.cantidadActual -= this.cantidadActual;
        } else{
            console.log("Sirviendo una taza con ", capacidad, "mL");
            this.cantidadActual -= capacidad;
        }
    }

    vaciarCafetera(){
        this.cantidadActual = 0;
        console.log("Cafetera vaciada")
    }
    
    agregarCafe(cantidad){
        if(this.cantidadActual == this.capacidadMaxima){
            console.log("Cafetera al maximo no se puede añadir mas cafe");
        } else if(this.cantidadActual < this.capacidadMaxima){
            console.log("Cafetera al maximo no se puede añadir mas cafe");
        }else{
            this.cantidadActual += cantidad;
            console.log("Cantidad añadida a la cafetera: ", cantidad);
            console.log("Cantidad en la cafetera: ", this.cantidadActual);
        }
   }
}

var miCafetera = new Cafetera(1000);

miCafetera.agregarCafe(200);
miCafetera.llenarCafetera();
miCafetera.servirTaza(150);
miCafetera.vaciarCafetera();