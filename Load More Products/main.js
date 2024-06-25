let productContainer = document.querySelector('.products-container');
let loadMoreBtn = document.getElementById('loadMore');
let currentProducts = [];
let skip = 0;
let totalProducts = 0;

async function fetchProducts() {
    try {
        const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${skip}`);
        const result = await response.json();
        currentProducts = [...currentProducts, ...result.products];
        totalProducts = result.total;

        if (currentProducts.length >= totalProducts) {
            loadMoreBtn.setAttribute('disabled', 'true');
            loadMoreBtn.innerText = "No more products";
        }

        updateProducts(currentProducts);

    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

function updateProducts(prdct) {
    productContainer.innerHTML = prdct.map((item) => {
        return `
        <div class="product" key=${item.id}>
            <img src=${item.thumbnail} />
            <p>${item.title}</p>
        </div>
        `
    }).join('');
}

loadMoreBtn.addEventListener("click", () => {
    if (currentProducts.length < totalProducts) {
        skip += 20;
        fetchProducts();
    }
})

fetchProducts()
