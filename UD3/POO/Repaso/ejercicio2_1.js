/*2. Crear un array de obxectos que conteña poboacións e códigos postais.
Percorrer as propiedades de cada un dos obxectos cargados previamente
por pantalla.
Pídese:
Definir o obxecto e array.
Cargar os datos.
Imprimir as propiedades usando un for, sin observadores.*/


//creamos o clase Pueblos
class Pueblos {
    //definimos as variables
    nombre;
    cp;
    //creamos o constructor da clase Pueblos
    constructor(nombre, cp) {
        this.nombre = nombre;
        this.cp = cp;
    }
}


//localidades vai ser un array de objetos da clase Pueblo
let localidades = [];
let nombre = "";
let cp = "";
//creamos o bucle para añadir os valores de cada pueblo
for (let i = 0; i < 2; i++) {
    nombre = prompt("Indica el nombre del pueblo");
    cp = prompt("Cual es su codigo postal?");
    let pueblo = new Pueblos(nombre, cp);
    localidades.push(pueblo);
}
//creamos o array atributos vacio que vai conter os os atributos da clase
let atributos = [];
let i = 0;
let x = 0;
let j=0;
//conten os valores dos atributos de cada obxecto
let valores=[];


//recorre o array localidades localidad por localidad
for (i = 0; i < localidades.length; i++) {
    j=0;
    //por cada localidad recorro os atributos de cada localidad
    for(elementos in localidades[i]){
        atributos[j]=elementos;
        j++;
    }
    //meto no array valores todos os valores do obxecto actual
    valores=Object.values(localidades[i]);
    //imprimo o nome do atributo e o contido
    for(x=0;x<atributos.length;x++){
        document.write(`${atributos[x]}: ${valores[x]} <br>`);
    }
}