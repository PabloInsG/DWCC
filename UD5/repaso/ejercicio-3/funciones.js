function celsius(a){
    let p = document.createElement('p');
    let convertir = (a- 32) * (5/9)
    p.textContent = "Celsius: " + convertir
    return p
}

function fahrenheit(a){
    let p = document.createElement('p');    
    let convertir = (a * (9/5)) + 32
    p.textContent = "Fahrenheit: " + convertir
    return p
}

function metros(a){
    let p = document.createElement('p');
    let convertir = a * 0.3048
    p.textContent = "Metros: " + convertir
    return p
}

function pies(a){
    let p = document.createElement('p');
    let convertir = a / 0.3048
    p.textContent = "Pies: " + convertir
    return p
}

function kilos(a){
    let p = document.createElement('p');
    let convertir = a / 2.20462
    p.textContent = "Kilos: " + convertir
    return p
}

function libras(a){
    let p = document.createElement('p');
    let convertir = a * 2.20462
    p.textContent = "Libras: " + convertir
    return p
}

export {
    celsius,
    fahrenheit,
    metros,
    pies,
    kilos,
    libras
}