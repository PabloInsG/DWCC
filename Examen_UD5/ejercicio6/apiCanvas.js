var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(200, 200, 150, 0, Math.PI * 2);
ctx.fillStyle = 'yellow';
ctx.fill();


ctx.beginPath();
ctx.arc(140, 150, 20, 0, Math.PI * 2);
//Creamos el 3 ojo que sera el central
ctx.arc(200, 150, 20, 0, Math.PI * 2);
ctx.arc(260, 150, 20, 0, Math.PI * 2);
ctx.fillStyle = 'white';
ctx.fill();


ctx.beginPath();
ctx.arc(140, 150, 10, 0, Math.PI * 2);
//Creamos la 3 pupila que sera la central
ctx.arc(200, 150, 10, 0, Math.PI * 2);
ctx.arc(260, 150, 10, 0, Math.PI * 2);
ctx.fillStyle = 'black';
ctx.fill();

//Le añadimos la nariz
ctx.beginPath();
ctx.fillStyle="black";
//La colocamos en la posicion y=200 que es mas menos el centro
ctx.arc(200, 200, 10, 0, Math.PI*2);
ctx.fill();
ctx.stroke();

ctx.beginPath();
//Le quitamos el true que habia el final que hace que el arco este cara abajo
ctx.arc(200, 230, 100, 0, Math.PI);
ctx.lineWidth = 10;
ctx.strokeStyle = 'black';
ctx.stroke();