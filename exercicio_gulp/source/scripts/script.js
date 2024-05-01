const basePath = './build/images/';

var imagens = [
    "bird-ga5d9ed257_1920.jpg",
    "birds-g6b63afc7a_1920.jpg",
    "butterfly-g7f3546b64_1920.jpg",
    "hands-gc143a78ba_1920.png",
    "lilies-g19bcb21a4_1920.jpg",
    "street-gddeece843_1920.jpg"
];

function randomizarImagem() {
    const randomIndex = Math.floor(Math.random() * imagens.length);
    document.getElementById("randomImg").src = randomImage;
}

document.addEventListener('DOMContentLoaded', function(){
    let button = document.getElementById('randomButton');
    button.addEventListener('click', randomizarImagem);
});
