let slider = document.querySelector(".flex");

let currentSlide = 0;
let slidesCount = document.querySelectorAll('.d-flex').length;
function nextSlide() {
    if (currentSlide == slidesCount-1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }    
    updateSlider();
}

function prevSlide() {
    if (currentSlide == 0) {
        currentSlide = slidesCount-1;
    } else {
        currentSlide--;
    }
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(${-100*currentSlide}%)`;
}

document.querySelector('.btn1').addEventListener('click', (e) => prevSlide())
document.querySelector('.btn2').addEventListener('click', (e) => nextSlide())