const midAd = document.querySelector(".mid-ad");
const loader = document.querySelectorAll(".loader");
const selectedProduct = document.querySelector(".display-product")
const errorMsg = document.querySelectorAll(".error-msg");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const queryId = params.get("id")
console.log(queryId)

let baseUrl = "http://myflashcard.org/wp-json/wc/store/products";

async function apiCall() {
    let jackets;
    if (queryId){
        const newUrle = `http://myflashcard.org/wp-json/wc/store/products/${queryId}`;
        try {
            let respons = await fetch(newUrle);
            let data = await respons.json()
            loader.forEach(function(element) {
                element.style.display = "none"
            })
            selected_product_data(data)
        }
        catch(err) {
            console.log(err)
            selectedProduct.innerHTML += `<div class="error-msg">
                                            Looks like there was an error finding the jacket, please try again later :(
                                            </div>`
        } 
    }
    try {
        const respons = await fetch(baseUrl);
        const data = await respons.json()
        loader.forEach(function(elemen) {
            elemen.style.display = "none"
        })
        mid_ad_product(data)
        console.log(data)
        jackets = data
    }

    catch(err) {
        console.log(err)
        midAd.innerHTML += `<div class="error-msg">
                                Looks like there was an error finding the jacket, please try again later :(
                            </div>`
    }
    add_to_cart(jackets)
}

function mid_ad_product(data) {
    

    let productCount = 0 
    for(let i = 0; i < 25; i++) {

        let jacket = data[i]
        let id = jacket.id
        let title = jacket.name
        let productText = jacket.description
        let img = jacket.images[0].src
        let onSale;
        let oldPrice;
        let stock;
        let stockCode;

        if(id == queryId) {
            continue
        }
        
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
        productCount += 1
        if(productCount == 4) {
            break
        }
    }
}


function selected_product_data(jacket) {
    
    let title = jacket.name
    let productText = jacket.description
    let id = jacket.id
    let img = jacket.images[0].src
    let onSale;
    let oldPrice;
    let price = jacket.prices["price"]
    let stock;
    let stockCode;
    if(jacket.on_sale) {
        onSale = "on-sale"
        oldPrice = jacket.prices["regular_price"] + ",-"
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
    
    console.log(title)


    let HTML = `
            <h1>${title}</h1>
            <div class="product-image">
                <div class="main-image">
                    <img src=${img} alt="">
                </div>
                <div class="secondary-image">
                    <img src=${img}  alt="mini img of selectet product">
                    <img src=${img}  alt="mini img of selectet product">
                    <img src=${img}  alt="mini img of selectet product">
                </div>
                </div>
            <div class="display-product-text">
                <h2>Spesification</h2>
                ${productText}
            </div>
            <div class="display-product-cta">
                <div class="select-size">
                    <select>
                        <option value="0">Size</option>
                        <option value="1">Small</option>
                        <option value="2">Medium</option>
                        <option value="3">Large</option>
                        <option value="3">Extra Large</option>
                    </select>
                </div>
                <div class="select-color">
                    <select>
                        <option value="0">Color</option>
                        <option value="1">White</option>
                        <option value="2">Brawn</option>
                        <option value="3">Black</option>
                    </select>
                </div>
                <button class="cta cta-blue">Add Wishlist</button>
                <div class="price">
                    <h3>${oldPrice}</h3>
                    <h2>${price},-</h2>
                </div>
                <button class="cta" id=${id}>Add to cart</button>
            </div>`


            selectedProduct.innerHTML = HTML

}


function add_to_cart(data) {
    const product = document.querySelectorAll(".product");
    const cta = document.querySelectorAll(".cta");
    const overlay = document.querySelector(".overlay");
    const overlayContent = document.querySelector(".overlay-content")
    
    let jacket;

    for(let i = 0; i < product.length; i++) {
        product[i].addEventListener("click", function() {

        })
    }

    for(let i = 0; i < cta.length; i++) {
        cta[i].addEventListener("click", function() {
            let id = cta[i].id
            data.forEach(function(ja) {
                if(id == ja.id) {
                    jacket = ja
                }
            })

            overlay.style.display = "flex"
            overlayContent.innerHTML = `<h2>${jacket.name}</h2>
                                        <h2>Added to cart!</h2>
                                        <img src=${jacket.images[0].src} alt="img of snow-jacket for women">
                                        <p>Price: ${jacket.prices["price"]},-</p>
                                        <div class="total-price">
                                        <p>Total:${jacket.prices["price"]},-</p>
                                        </div>
                                        <div class="overlay-buttons">
                                        <button class="cta" id="checkout">Checkout</button>
                                        <button class="cta cta-blue" id="back">Back</button>
                                        </div>`
            
                                        
            let backBtn = document.querySelector("#back");    
            backBtn.addEventListener("click", function() {
                overlay.style.display = "none"
            })
            
            let checkOutBtn = document.querySelector("#checkout");
            checkOutBtn.addEventListener("click", function() {
                location.replace("shopping-cart.html")
            })
            })

            cta[i].addEventListener("mouseover", function() {
                product.forEach(function(t) {
                    t.href = "#"
                })
            })

            cta[i].addEventListener("mouseout", function() {
                product.forEach(function(t) {
                    t.href = "selected-product.html"
                })
            })
    }

    overlay.addEventListener("click", function() {
        overlay.style.display = "none"
    })
}

apiCall()

