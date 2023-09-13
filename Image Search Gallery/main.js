const loadBtn = document.querySelector('.load-more');
const searchInput = document.querySelector('.search-box input');
const imageWrapper = document.querySelector('.images');
const lightbox = document.querySelector('.lightbox');
const closeBtn = document.querySelector('.fa-times');
const downloadBtn = document.querySelector('.fa-download');

const api_key = '6ByAHfzlnbaWMOiOERFMqcvCurelyOlXFWrD8di7FZlGetNbI7pIFih2';
const perPage = 15;
let currPage = 1;
let searchTerm = null;

const downloadImage = (imgURL) => {
  fetch(imgURL).then(res => res.blob()).then(file => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = new Date().getTime();
    a.click();
  }).catch(() => alert("Failed to download the image!"))
}

const getImages = (apiURL) => {
  loadBtn.innerText = "Loading...";
  loadBtn.classList.add('disabled');
  fetch(apiURL, {
    headers: { Authorization: api_key }
  }).then(res => res.json()).then(data => {
    console.log(data);
    generateHTML(data.photos);
    loadBtn.innerText = "Load More";
    loadBtn.classList.remove('disabled');
  }).catch(() => alert("Failed to load Image!"))
}

const showLightBox = (owner, img) => {
  lightbox.querySelector("img").src = img;
  lightbox.querySelector("span").innerText = owner;
  downloadBtn.setAttribute("data-img", img);
  lightbox.classList.add("show");
}
const hideLightBox = () => {
  lightbox.classList.remove("show");
}

closeBtn.addEventListener('click', hideLightBox);
downloadBtn.addEventListener('click', (e) => downloadImage(e.target.dataset.img));

const generateHTML = (images) => {
  imageWrapper.innerHTML += images.map(img =>
    `
            <li class="card" onclick="showLightBox('${img.photographer}','${img.src.large2x}')">
              <img
                src=${img.src.large2x}
                alt=${img.alt}
              />
              <div class="details">
                <div class="owner">
                  <i class="fa fa-camera-retro"></i>
                  <span>${img.photographer}</span>
                </div>
                <button onclick="downloadImage('${img.src.large2x}'); event.stopPropagation();">
                  <i class="fa fa-download"></i>
                </button>
              </div>
            </li>
            `
  )
}

getImages(`https://api.pexels.com/v1/curated?page=${currPage}&per_page=${perPage}`)

const loadMoreImages = () => {
  currPage++;
  let apiURL = `https://api.pexels.com/v1/curated?page=${currPage}&per_page=${perPage}`;
  apiURL = searchTerm ? `https://api.pexels.com/v1/search?query=${searchTerm}&page=${currPage}&per_page=${perPage}` : apiURL;
  getImages(apiURL)
}

loadBtn.addEventListener('click', loadMoreImages);

const loadSearchImages = (e) => {
  if (e.target.value === '') {
    return searchTerm = null;
  }
  if (e.key === "Enter") {
    currPage = 1;
    searchTerm = e.target.value;
    imageWrapper.innerHTML = "";
    getImages(`https://api.pexels.com/v1/search?query=${searchTerm}&page=${currPage}&per_page=${perPage}`)
  }
}

searchInput.addEventListener('keyup', loadSearchImages)
