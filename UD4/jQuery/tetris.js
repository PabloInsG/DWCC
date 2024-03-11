const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');

const block_size = 20;
const block_width = 14;
const block_height = 25;

canvas.width = block_size * block_width; 
canvas.height = block_size * block_height; 

context.scale(block_size, block_size);

const tabla = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,0,0,0,0,0,0,0],
];

const pieza = {
    position: {x: 5, y: 5},
    shape: [
        [1, 1],
        [1, 1]]
}

function update(){
    draw();
    window.requestAnimationFrame(update);
}

function draw(){
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height)
    
    tabla.forEach((row, y) =>{
        row.forEach((value, x)=>{
            if(value == 1){
                context.fillStyle = "blue";
                context.fillRect(x, y, 1, 1);
            }
        })
    })
    pieza.shape.forEach((row, y) =>{
        row.forEach((value, x) =>{
            if(value){
                context.fillStyle = "red";
                context.fillRect(x + pieza.position.x, y + pieza.position.y, 1 ,1)
            }
            else if(solidificarPieza()){
                context.fillStyle = "blue";
                context.fillRect(x + pieza.position.x, y + pieza.position.y, 1 ,1)
            }
        })
    })
}

function checkCollision(){
    return pieza.shape.find((row, y) =>{
        return row.find((value, x) =>{
            return (
                value != 0 &&
                tabla[y + pieza.position.y] ?. [x + pieza.position.x] != 0
            )
        })
    })
}

function solidificarPieza(){
    if(checkCollision()){
        context.fillStyle = "blue";
        context.fillRect(x + pieza.position.x, y + pieza.position.y, 1 ,1)
    }
}


document.addEventListener('keydown', event =>{
    if(event.key == "ArrowLeft"){
        pieza.position.x --
        if(checkCollision()){
            pieza.position.x ++
        }
    }   
    if(event.key == "ArrowRight"){
        pieza.position.x ++
        if(checkCollision()){
            pieza.position.x --
        }
    } 
    if(event.key == "ArrowDown") {
        pieza.position.y ++
        if(checkCollision()){
            pieza.position.y --
        }
    } 
})
update()

