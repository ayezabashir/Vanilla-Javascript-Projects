const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-side');
const slideLeft = document.querySelector('.left-side');
const downButton = document.querySelector('.down-button');
const upButton = document.querySelector('.up-button');
const slidesLength = slideRight.querySelectorAll('div').length;

console.log(slidesLength);

let activeSliderIndex = 0;
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

function changeSlide(direction) {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
        activeSliderIndex++;
        if (activeSliderIndex > slidesLength - 1) {
            activeSliderIndex = 0;
        }
    } else if (direction === 'down') {
        activeSliderIndex--;
        if (activeSliderIndex < 0) {
            activeSliderIndex = slidesLength - 1;
        }
    }
    slideRight.style.transform = `translateY(-${activeSliderIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSliderIndex * sliderHeight}px)`;

}