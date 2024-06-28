const dataContainer = document.querySelector('.api-data');

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

