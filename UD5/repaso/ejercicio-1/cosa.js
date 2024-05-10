function suma(a, b){
    let p = document.createElement('p');
    var suma = a + b;
    console.log(suma)
    p.textContent = "Suma: " + suma;
    return p;
}
function resta(a, b){
    let p = document.createElement('p');
    var resta = a - b;
    p.textContent = "Resta: " + resta;
    return p;
}
function multiplicacion(a, b){
    var multiplicacion = a * b;
    return multiplicacion;
}

function division(a, b){
    let p = document.createElement('p');
    var division = a / b;
    p.textContent = division;
    contenedor.append(p)
}

