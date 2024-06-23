const prevImg = document.querySelector('.fa-arrow-left');
const nextImg = document.querySelector('.fa-arrow-right');
const imgContainer = document.querySelector('.img-container');
const imgApi = 'https://picsum.photos/v2/list?page=1&limit=5';

let currentSlide = 0;
let resultImgs = [];

async function fetchImages() {
    const response = await fetch(imgApi);
    resultImgs = await response.json();
    updateImage();
    console.log(resultImgs);
}

function updateImage() {
    imgContainer.innerHTML = `
        <img src="${resultImgs[currentSlide].download_url}" />
    `;
}

fetchImages();

prevImg.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateImage();
    }
});

nextImg.addEventListener("click", () => {
    if (currentSlide < resultImgs.length - 1) {
        currentSlide++;
        updateImage();
    }
});
