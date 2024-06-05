function manej_boton01(event) {
    let tabla = document.querySelector("#tabla");
    var fila = document.createElement('tr');
    var columna = document.createElement('td');
    tabla.append(fila);
    let fecha = new Date();
    columna.textContent = fecha;
    fila.append(columna);
}
let boton01 = document.querySelector("#boton01");
boton01.addEventListener("click", manej_boton01);