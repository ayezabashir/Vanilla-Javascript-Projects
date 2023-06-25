const container = document.getElementById('container');
const colors = ['#e76f51', '#2a9d8f', '#d90429', '#a3c4f3', '#8ac926', '#ffc300', '#6a040fs', '#b5179e', '#006d77'];

const SQUARES = 400;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);
}

function setColor(el) {
    const color = getMultiColor();
    el.style.background = color;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(el) {
    el.style.background = '#1d1d1d';
    el.style.boxShadow = '0 0 2px #000';

}

function getMultiColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
