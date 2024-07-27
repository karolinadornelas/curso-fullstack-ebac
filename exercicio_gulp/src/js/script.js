// Defina o caminho base para as imagens
const basePath = '/exercicio_gulp/dist/images/';

const imagens = [
    'cat-a.jpg',
    'cat-b.jpg',
    'cat-c.jpg',
    'cat-d.jpg',
    'cat-e.jpg',
    'cat-f.jpg',
    'cat-g.jpg',
    'cat-h.jpg',
    'cat-i.jpg',
    'cat-j.jpg',
    'cat-k.jpg',
    'cat-l.jpg',
    'cat-m.jpg',
    'cat-n.jpg',
    'cat-o.jpg',
    'cat-p.jpg',
    'cat-q.jpg',
    'cat-r.jpg',
    'cat-s.jpg',
    'cat-t.jpg',
    'cat-u.jpg',
    'cat-v.jpg',
    'cat-w.jpg',
    'cat-x.jpg',
    'cat-y.jpg',
    'cat-z.jpg',
];

function randomizarImagem() {
    const randomIndex = Math.floor(Math.random() * imagens.length);
    document.getElementById("randomImg").src = basePath + imagens[randomIndex];
}

document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('randomButton');
    button.addEventListener('click', randomizarImagem);
});
