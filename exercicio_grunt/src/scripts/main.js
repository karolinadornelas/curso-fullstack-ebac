document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-raffle').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let maxNumber = document.getElementById('max-number').value;
        maxNumber = parseInt(maxNumber);

        let randomNumber = Math.random() * maxNumber;
        randomNumber = Math.floor(randomNumber + 1);

        document.getElementById('result-value').innerText = randomNumber;
        document.querySelector('.result').style.display = 'block';
    });
});