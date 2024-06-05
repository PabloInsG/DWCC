var arr = new Array();
var arrayMulti = new Array();

arrayMulti = [
    [1, 2, 3],
    ['a', 'b', 'c']
]

arr = [1, 2, 3, 200 ,3, 'aaa', 200];

Array.prototype.duplicados = function(){
    var arrayVacio = [];
    for(let i = 0; i < this.length; i++){
        if(!arrayVacio.includes(this[i])){
            arrayVacio.push(this[i]);
        }
    }
    document.write(arrayVacio + "<br>");
}

Array.prototype.orden = function(){
    function compareNumbers(a, b) {
        return b - a;
    }
    document.write("Array Ordenado de mayor a menor: " + this.sort(compareNumbers) + "<br>")
}

Array.prototype.filtro = function(){
    arrayNumeros = this.filter((numeros) => parseInt(numeros));
    arrayWords = this.filter((word) => word.length> 1);

    document.write("Array Filtro Numeros: " + arrayNumeros + "<br>");
    document.write("Array Filtro Palabras: " +arrayWords + "<br>");
}

Array.prototype.aplanar = function(){
    var arraySimple = []
    for(let i = 0; i < this.length; i++){
        arraySimple = arraySimple.concat(this[i])
    }
    document.write("Array Aplanado: " + arraySimple);
}

arr.duplicados();
arr.orden();
arr.filtro();
arrayMulti.aplanar();