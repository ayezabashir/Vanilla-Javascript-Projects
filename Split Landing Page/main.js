let left = document.querySelector('.left');
let right = document.querySelector('.right');
let container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
})
left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
})

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
})

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
})