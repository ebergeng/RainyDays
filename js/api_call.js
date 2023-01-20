const midAd = document.querySelector(".mid-ad");


const baseUrl = "http://myflashcard.org/wp-json/wc/store/products";

async function apiCall() {
    const respons = await fetch(baseUrl);
    const data = await respons.json()
    mid_ad_product(data)
}

function html_generator(img = "", productName, productText, price, onSale ="", oldPrice = "", stock, stockCode) {

    let productHTML = `
                    <a href="selected-product.html" class="product">
                        <div class="product-img">
                            <img class="image" src=${img} alt="img of snow-jacket for women">
                        </div>
                        <div class="product-text">            
                            <h3>${productName}</h3>
                            ${productText}
                        </div>
                        <div class="product-price ${onSale}">
                            <h4>${oldPrice}</h4>
                            <h2>${price}</h2>
                        </div>
                        <div class="product-cta">
                            <button class="cta">Add to chart</button>
                        </div>
                        <div class="stock-section">
                            <div class="color-code ${stockCode}"></div>
                            <h5>${stock} in stock</5>
                        </div>
                        <div class="anime"></div>
                    </a>`
                    
    return productHTML
}


function mid_ad_product(data) {
    let onSale = ""
    let oldPrice = ""
    let stock = ""
    let stockCode = ""
    let productText = ""
    for(x = 0; x < 4; x++) {
        let jacket = data[x]
        console.log(jacket)
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
            console.log(stock)
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
        midAd.innerHTML += html_generator(jacket.images[0].src, jacket.name, jacket.description
            , jacket.prices["price"] , onSale, oldPrice, stock, stockCode) 
    }
}

apiCall()