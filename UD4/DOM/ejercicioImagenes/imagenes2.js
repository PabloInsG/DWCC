var img1 = document.querySelector('#img1');
var img2 = document.querySelector('#img2');
var img3 = document.querySelector('#img3');
var img4 = document.querySelector('#img4');
var img5 = document.querySelector('#img5');
var img6 = document.querySelector('#img6');
var texto = document.querySelector('#texto');


img1.onclick = () => {
    texto.textContent = img1.getAttribute('alt');
    texto.parentElement.style.background = "#023474";
    texto.parentElement.style.color = "#DA020E";
}
img2.onclick = () => {
    texto.textContent = img2.getAttribute('alt');
    texto.parentElement.style.background = "blue";
    texto.parentElement.style.color = "white";
}
img3.onclick = () => {
    texto.textContent = img3.getAttribute('alt');
    texto.parentElement.style.background = "red";
    texto.parentElement.style.color = "turquoise";
}
img4.onclick = () => {
    texto.textContent = img4.getAttribute('alt');
    texto.parentElement.style.background = "lightblue";
    texto.parentElement.style.color = "white";
}
img5.onclick = () => {
    texto.textContent = img5.getAttribute('alt');
    texto.parentElement.style.background = "red";
    texto.parentElement.style.color = "yellow";
}
img6.onclick = () => {
    texto.textContent = img6.getAttribute('alt');
    texto.parentElement.style.background = "lavender";
    texto.parentElement.style.color = "darkblue";
}