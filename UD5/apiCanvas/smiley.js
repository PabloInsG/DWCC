var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle="yellow";
ctx.beginPath();
ctx.arc(340,240,200,0,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.fillStyle="cyan";
ctx.beginPath();
ctx.arc(250,180,30,0,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.arc(425,180,30,0,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.strokeStyle="black"
ctx.beginPath();
ctx.arc(340,300,100,0,-1*Math.PI);
ctx.stroke();
ctx.closePath();