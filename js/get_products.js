const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const queryId = params.get("site")

const productHeadline = document.querySelector(".product-headline")
if(queryId === "all-products") {
    productHeadline.innerHTML = `<h1>All products of, Rainy Days jackets:</h1>`
}
else {
    productHeadline.innerHTML = `<h1>${queryId}, Rainy Days jackets:</h1>`
}

const dropPage = document.querySelectorAll(".drop-page");

dropPage.forEach(function(page) {
    if(queryId.toLocaleLowerCase() === "all-products" && page.innerHTML.toLocaleLowerCase() === "all products") {
        page.classList.add("current")
    }

    if(page.innerHTML.toLocaleLowerCase() === queryId.toLocaleLowerCase()){
        page.classList.add("current")
    }
})

const midAd = document.querySelector(".product-wrapper");
let baseUrl = "https://myflashcard.org/wp-json/wc/store/products";

async function apiCall() {
    try {
        const respons = await fetch(baseUrl);
        const data = await respons.json()
        for(let i = 0; i < data.length; i++){
            if(queryId === data[i].categories[0].name.toLowerCase()) {
                show_product(data[i], data[i].categories[0].name.toLowerCase())
            }
            else if(queryId === "all-products"){ 
                show_product(data[i], data[i].categories[0].name.toLowerCase())
            }
        }

    }

    catch(err) {
        console.log(err)
    }
}

function show_product(data, headline) {
    let jacket = data
    let id = jacket.id
    let title = jacket.name
    let productText = jacket.description
    let img = jacket.images[0].src
    let onSale;
    let oldPrice;
    let stock;
    let stockCode;
    console.log(headline)

    if(jacket.on_sale) {
        onSale = "on-sale"
        oldPrice = jacket.prices["regular_price"]
    }
    else {
        onSale = ""
        oldPrice = ""
    }

    if(jacket.is_in_stock){
        stock = jacket.add_to_cart.maximum
        if(stock > 29) {
            stockCode = "full-on-stock"
        }
        else {
            stockCode = "low-on-stock"
        }
    }
    else {
        stock = "0"
        stockCode = "out-of-stock"
    }

    let productHTML = `
    <a href="selected-product.html?id=${id}" class="product">
        <div class="product-img">
            <img class="image" src=${img} alt="img of snow-jacket for women">
        </div>
        <div class="product-text">            
            <h3>${title}</h3>
            ${productText}
        </div>
        <div class="product-price ${onSale}">
            <h4>${oldPrice}</h4>
            <h2>${jacket.prices["price"]}</h2>
        </div>
        <div class="product-cta">
            <button class="cta" id="${id}">Add to chart</button>
        </div>
        <div class="stock-section">
            <div class="color-code ${stockCode}"></div>
            <h5 class=${onSale}>${stock} in stock</5>
        </div>
        <div class="anime"></div>
    </a>`

    midAd.innerHTML += productHTML  
}

apiCall()