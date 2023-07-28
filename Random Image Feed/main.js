const container = document.getElementById('container');
const unsplashUrl = 'https://source.unsplash.com/random/';

const row = 6;
for (let i = 0; i < row * 3; i++) {
    const img = document.createElement('img');
    img.src = `${unsplashUrl}${getRandomSize()}`;
    container.appendChild(img);
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 300;
}

function getRandomSize() {
    return `${getRandomNumber()}x${getRandomNumber()}`;
}