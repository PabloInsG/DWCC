var boton = document.querySelector('#boton');
var tabla = document.querySelector('#tabla');
var fila1 = document.querySelector('#fila1');
var fila2 = document.querySelector('#fila2');
var contador = 0;

boton.addEventListener('click', addToTable);

function addToTable(){
    var usuario = prompt('Un numero del 1-6:');
    var td = document.createElement('td');
    td.setAttribute('id', 'posi' + contador);
    var imagen = document.createElement('img');
    imagen.src = usuario + ".png";
    imagen.setAttribute('id', 'img' + contador);
    imagen.style.width = "200px";
    if(contador <= 3){
        fila1.appendChild(td);
        td.appendChild(imagen);
        contador++;
        imagen.onclick = () => {
            var getImagen = document.querySelector('#' + imagen.getAttribute('id'));
            getImagen.src = "";
        }
    } 
    if(contador > 3 && contador <= 6){
        fila2.appendChild(td);
        td.appendChild(imagen);
        contador++;
        imagen.onclick = ()=> {
            var getImagen = document.querySelector('#' + imagen.getAttribute('id'));
            getImagen.src = "";
        }
    }
}