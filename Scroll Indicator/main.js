const dataContainer = document.querySelector('.api-data');
const progressBar = document.querySelector('.progress-bar');

async function fetchData() {
    const response = await fetch('https://dummyjson.com/products?limit=100')
    const data = await response.json();
    console.log(data.products)
    if (data && data.products && data.products.length > 0) {
        dataContainer.innerHTML = data.products.map((item) => `
            <p>${item.title}</p>
        `).join('')
    }
}

fetchData()

function manageScroll() {
    const scrollProgress = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progressBar.style.width = `${(scrollProgress / height) * 100}%`
}

window.addEventListener('scroll', manageScroll)
window.removeEventListener('scroll', () => { })