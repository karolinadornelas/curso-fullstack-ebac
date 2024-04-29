var imagens = [
    "./build/images/bird-ga5d9ed257_1920.jpg",
    "./build/images/birds-g6b63afc7a_1920.jpg",
    "./build/images/butterfly-g7f3546b64_1920.jpg",
    "./build/images/hands-gc143a78ba_1920.png",
    "./build/images/lilies-g19bcb21a4_1920.jpg",
    "./build/images/street-gddeece843_1920.jpg"
];

function randomizarImagem() {
    var randomIndex = Math.floor(Math.random() * imagens.length);
    var randomImageUrl = imagens[randomIndex];
    
    document.getElementById("randomImg").src = randomImageUrl;
}
