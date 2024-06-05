class NaveEspacial{
    actual = "";
    destino = "";
    kmrecorridos = 0;
    constructor(actual, destino, kmrecorridos){
        this.actual = actual;
        this.destino = destino;
        this.kmrecorridos = kmrecorridos;
    }
    arranque(distancia){
        this.kmrecorridos =(this.kmrecorridos + distancia) + "km";
    }
}


//Creamos el objeto
var naveEspacial = new NaveEspacial("Laxe", "Corme", 15);
naveEspacial.arranque(20);


//Definimos las variables para coger el nombre del atributo y el valor
let indice = Object.getOwnPropertyNames(naveEspacial);
let valor = Object.values(naveEspacial);

//Recorremos la variable indice que es un array del objeto Object que recorre los nombres de los atributos
for(let i = 0; i < indice.length; i++){
    //Si naveEspacial es un mapa no lo podremos imprimir
    if(naveEspacial instanceof Map){
        document.write("El objeto es un Mapa por lo tanto no puedo imprimirlo")
    }else{
        //Ya que no es un mapa imprimimos por pantalla el nombre y el valor de los atributos de naveEspacial
        document.write(`${indice[i]}: ${valor[i]} <br>`);
    }
}