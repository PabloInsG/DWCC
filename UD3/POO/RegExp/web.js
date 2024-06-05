var user = prompt("Introduce la pagina web que desea")

function validarWeb(user){
    var reg = /^(http:\/\/www\.|https:\/\/www\.){1}[a-z0-9]{1,}(\.[a-z]{1,4}){1}$/;
    if(reg.test(user)){
        return alert("Pagina Web Valida");
    } else{
        return alert("Pagina Web no Valida");
    } 
}

validarWeb(user);