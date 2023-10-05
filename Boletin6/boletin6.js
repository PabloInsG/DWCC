





//Ejercicio 8
function generar(){
    var numero1 = Math.floor(Math.random() * 10) + 1;
    var numero2 = Math.floor(Math.random() * 10) + 1;
    return numero1, numero2;
}

function comparar(numero1, numero2){
    if(numero1 > numero2){
        document.write(`<div style="width:150px; height: 100px; border: solid 1px #000000; border-radius: 1rem; text-align: center; font-size: 50px; margin-right: 15px">${numero1}</div>`)
    } else if(numero2 > numero1){
        document.write(`<div style="width:150px; height: 100px; border: solid 1px #000000; border-radius: 1rem; text-align: center; font-size: 50px; margin-right: 15px">${numero2}</div>`)
    }
}