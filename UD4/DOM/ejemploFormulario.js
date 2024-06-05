function ejem(event){
    let usuario = document.querySelector("#usuario")
    console.log(usuario.value)
}

let formulario = document.querySelector('#formulario')
formulario.addEventListener("change", ejem)