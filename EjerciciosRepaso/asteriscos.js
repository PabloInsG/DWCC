let array = [];

for(let i = 0; i < 9; i++){
    array.push(Math.floor(Math.random() * 50) + 1);
    for(let j = 0; j < array[i]; j++){
        document.write(`*`);
    }
    document.write(`<br>`)
}

console.log(array);