const carrosselContainer = document.querySelector('.carrossel-container');
const carrosselItems = document.querySelectorAll('.carrossel-item');
const carrosselPrev = document.querySelector('.carrossel-prev');
const carrosselNext = document.querySelector('.carrossel-next');

let currentSlide = 0;

carrosselItems[currentSlide].classList.add('active');

carrosselPrev.addEventListener('click', () => {
    carrosselItems[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + carrosselItems.length) % carrosselItems.length;
    carrosselItems[currentSlide].classList.add('active');
});

carrosselNext.addEventListener('click', () => {
    carrosselItems[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % carrosselItems.length;
    carrosselItems[currentSlide].classList.add('active');
}); const homeButton = document.querySelector('.nav li:first-child a');
const luaButton = document.querySelector('.nav li:nth-child(2) a');
const documentacaoButton = document.querySelector('.nav li:nth-child(3) a');
const comunidadeButton = document.querySelector('.nav li:nth-child(4) a');

homeButton.addEventListener('click', () => {
    window.location.href = '#home';
});

luaButton.addEventListener('click', () => {
    window.location.href = '#lua';
});

documentacaoButton.addEventListener('click', () => {
    window.location.href = '#documentacao';
});

comunidadeButton.addEventListener('click', () => {
    window.location.href = '#comunidade';
});