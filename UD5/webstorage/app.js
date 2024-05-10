//window.localStorage.setItem();
window.sessionStorage.setItem("pablo", "43231673E");

objetoJSON = sessionStorage.getItem("pablo");

document.write(objetoJSON);

/*
navigator.geolocation.getCurrentPosition(posicion=>{
    console.log(`Longitud: ${posicion.coords.longitude}`)
    console.log(`Latitude: ${posicion.coords.latitude}`)
})

*/

