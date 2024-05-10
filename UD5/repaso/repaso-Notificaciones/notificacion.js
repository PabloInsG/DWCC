// Comprobamos se o navegador soporta a API de notificacións
if (!("Notification" in window)) {
    console.log("Este navegador no soporta notificaciones.");
  } else {
    // Pedimos permiso ó usuario para amosar notificacións
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        // Creamos e amosamos a notificación
        var notification = new Notification("Notificación en galego", {
          body: "Esta é unha notificación en galego.",
          icon: "icono.jpg" // Icona a amosar
        });
  
        // Podemos engadir un evento para cando o usuario faga clic na notificación
        notification.onclick = function () {
            window.location.href = "http://edu.xunta.gal";
        };
      } else {
        console.log("O usuario non aceptou a petición de notificación.");
      }
    });
  }