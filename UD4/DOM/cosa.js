let united = document.querySelector("#united")
let city = document.querySelector("#city")
let foto = document.querySelector("#foto")

function cambiar(equipo){
    if(equipo == city){
        console.log(equipo)
        foto.src = "manchester-cityc.png";
    } else{
        foto.src = "manchester-united-logo-512x512.png";
    }
}

unitedId = united.getAttribute("id")
cityId = city.getAttribute("id")

united.addEventListener("click", cambiar(unitedId))
city.addEventListener("click", cambiar(cityId))