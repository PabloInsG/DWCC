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
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

const pieza = {
    position: {x: 5, y: 5},
    shape: [
        [1, 1],
        [1, 1]
    ],
    color: "yellow"
}

const piezas = [
    [
        [1, 1],
        [1, 1] 
    ], [
        [1,1,1,1]
    ], [
        [1,0],
        [1,0],
        [1, 1],
    ], [
        [0, 1],
        [0, 1],
        [1, 1]
    ], [
        [1,1, 0],
        [0,1,1]
    ], [
        [0,1,1],
        [1,1,0]
    ], [
        [0, 1, 0],
        [1, 1, 1],
    ],

]

const pause = document.querySelector(".cosas");
var resume = document.querySelector("#resume");
resume.addEventListener("click", ()=>{
    pause.style.display = "none";
})

var restart = document.querySelector("#restart");
restart.addEventListener("click", ()=>{
    location.reload();
})

var texto = document.querySelector("p");
let drop = 0;
let lastTime = 0;
let puntuacion = 0;

function update(time = 0){
    const tiempo = time - lastTime;
    lastTime = time;
    drop += tiempo;

    
    if(pause.style.display != "flex"){
        if(puntuacion < 2000){
            if(drop >  1000){
                pieza.position.y++;
                if(checkCollision()){
                    pieza.position.y--;
                    solidificarPieza();
                }
                drop = 0;
            }
        } else if(puntuacion < 4000) {
            if(drop >  500){
                pieza.position.y++;
                if(checkCollision()){
                    pieza.position.y--;
                    solidificarPieza();
                }
                drop = 0;
            }
        } else {
            if(drop > 350){
                pieza.position.y++;
                if(checkCollision()){
                    pieza.position.y--;
                    solidificarPieza();
                }
                drop = 0;
            }
        }
    }
    draw();
    window.requestAnimationFrame(update);
}

function draw(){
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height)

    tabla.forEach((row, y) =>{
        row.forEach((value, x)=>{
            if(value == 1){
                if(puntuacion < 2000){
                    context.fillStyle = "#a2c8cc";
                } else if(puntuacion < 4000){
                    context.fillStyle = "pink";
                } else if(puntuacion >= 4000){
                    context.fillStyle = "#c5c6c8";
                }
                context.fillRect(x, y, 1, 1);
            }
        })
    })
        pieza.shape.forEach((row, y) =>{
            row.forEach((value, x) =>{
                if(value){
                    if(pieza){
                        context.fillStyle = pieza.color
                    }
                    if(pieza.shape == piezas[0]){
                        pieza.color = "yellow"
                        context.fillStyle = pieza.color
                    } else if(pieza.shape == piezas[1]){
                        pieza.color = "cyan"
                        context.fillStyle = pieza.color;
                    } else if(pieza.shape == piezas[2]){
                        pieza.color = "orange"
                        context.fillStyle = pieza.color
                    } else if(pieza.shape == piezas[3]){
                        pieza.color = "blue"
                        context.fillStyle = pieza.color;
                    } else if(pieza.shape == piezas[4]){
                        pieza.color = "red"
                        context.fillStyle = pieza.color;
                    } else if(pieza.shape == piezas[5]){
                        pieza.color = "greenyellow";
                        context.fillStyle = pieza.color;
                    } else if(pieza.shape == piezas[6]){
                        pieza.color = "darkviolet";
                        context.fillStyle = pieza.color;
                    }
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
    pieza.shape.find((row, y) => {
        row.forEach((value, x) =>{
            if(value == 1){
                tabla[y + pieza.position.y][x + pieza.position.x] = 1
            }
        })
    })

    pieza.shape = piezas[Math.floor(Math.random() * piezas.length)]
    pieza.position.x = 5;
    pieza.position.y = 1;
    puntuacion += 100;
    texto.textContent = puntuacion;
    borrarRow()
}

function borrarRow(){
    const rowBorrar = []
    tabla.find((row, y) => {
        if(row.every(value => value ==  1)){
            rowBorrar.push(y)
        }
    })

    rowBorrar.forEach(y => {
        tabla.splice(y, 1)
        const nuevaRow = Array(block_width).fill(0)
        tabla.unshift(nuevaRow)
    })
}

var contadorRotaciones = 0;
document.addEventListener('keydown', event =>{
    if(event.key == "Escape"){
        pause.style.display = "flex"
        pause.style.flexDirection = "column";
        pause.style.animation = "fadeInAnimation ease 1s";
        pause.style.opacity = "1";
    }
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
            solidificarPieza()
            borrarRow()
        }
    }
    if(event.key == "ArrowUp"){
        const rotado = [];

        for(let i = 0; i < pieza.shape[0].length; i++){
            const row = []
            for(let j = pieza.shape.length - 1; j >= 0; j--){
                row.push(pieza.shape[j][i]);
            }
            rotado.push(row);
        }
        if(((pieza.position.x == 0)) || (pieza.position.x == 12   || pieza.position.x == 13)){
        } else {
                pieza.shape = rotado;
                context.fillStyle = pieza.color
        }
    }
})
update()

