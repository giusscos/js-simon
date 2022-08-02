// sorgente img
const img = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg'
];

const slideArrayElement = [];
let counter = 0;
let slideActiveElement, slideNextElement;

//Acquisizione slider e arrows
const sliderElment = document.querySelector('.slider');
const arrowLeftElement = document.querySelector('.arrow_left');
const arrowRightElement = document.querySelector('.arrow_right');

// creazione elementi: DIV e IMG e Riempimento sorgenti img
for (let i = 0; i < img.length; i++){
    const slideElement = document.createElement('div');
    slideElement.className = 'slide_wrapper';
    // alla prima img active di default 
    if (i === 0){
        slideElement.classList.add('active');
    }
    
    const slideImgElement = document.createElement('img');
    slideImgElement.src = img[i];
    
    // aggiungiamo le img al div
    slideElement.append(slideImgElement);
    
    // aggiungiamo le slide allo slider
    sliderElment.append(slideElement);
    slideArrayElement.push(slideElement);
}

// Evento freccia destra
arrowRightElement.addEventListener('click', function() {
    clearInterval(slideOn());

    slideActiveElement = slideArrayElement[counter];
    slideActiveElement.classList.remove('active');
    if(counter < img.length - 1){
        counter++;
    } else {
        counter = 0;
    }
    slideNextElement = slideArrayElement[counter];
    slideNextElement.classList.add('active');
    
});

// Evento freccia sinistra
arrowLeftElement.addEventListener('click', function() {
    clearInterval(slideOn());

    slideActiveElement = slideArrayElement[counter];
    slideActiveElement.classList.remove('active');
    if(counter > 0){
        counter--;
    } else {
        counter = img.length - 1;
    }
    slideNextElement = slideArrayElement[counter];
    slideNextElement.classList.add('active');

});

function slideOn(){
    slideActiveElement = slideArrayElement[counter];
    slideActiveElement.classList.remove('active');
    if(counter < img.length - 1){
        counter++;
    } else {
        counter = 0;
    }
    slideNextElement = slideArrayElement[counter];
    slideNextElement.classList.add('active');
}

setInterval(slideOn, 3000);