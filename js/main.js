const destinos = document.querySelectorAll('.destinos .destino');
let current = 0;

function showDestinos(index) {
    destinos.forEach((destino) => {
        destino.classList.remove('active');
    });
    for (let i = 0; i < 3; i++) {
        destinos[(index + i) % destinos.length].classList.add('active');
    }
}

showDestinos(current);

setInterval(() => {
    current = (current + 1) % destinos.length;
    showDestinos(current);
}, 3000);