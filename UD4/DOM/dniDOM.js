let dni = /(^[0-9]{8}[A-Z]{1})$/;
let validDate = /(^([0-9]{2}\/){2}[0-9]{4})$/;
let container = document.querySelector('#div');
let valido = document.createElement('p');
container.appendChild(valido);

function validarCampo(event){
    var campoDniValue = document.querySelector('#dni').value
    if(dni.test(campoDniValue) == true){
        campoApellido.disabled = false;
        var campoApellidoValue = document.querySelector('#apellido').value
        container.style.background = "lightgreen";
        valido.textContent = "DNI Valido. Introduce el siguiente campo"
    }
    if(campoApellidoValue.length > 1){
        var campoFechaValue = document.querySelector('#fecha').value
        campoFecha.disabled = false;
        valido.textContent = "Apellido Valido. Introduce el siguiente campo";
    }
    if(validDate.test(campoFechaValue) == true){
        let boton = document.querySelector('#submit');
        boton.disabled = false;
        valido.textContent = "Todos los campos son validos";
    }
}

let campoDNI = document.querySelector('#dni');
campoDNI.addEventListener('change', validarCampo)
let campoApellido = document.querySelector('#apellido');
campoApellido.addEventListener('change', validarCampo)
let campoFecha = document.querySelector('#fecha');
campoFecha.addEventListener('change', validarCampo)