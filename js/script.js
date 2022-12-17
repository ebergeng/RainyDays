import { price } from "./functions.js";
import { updeted_chart } from "./functions.js";



const product = document.querySelectorAll(".product");
const cta = document.querySelectorAll(".cta");
const overlay = document.querySelector(".overlay");
const checkout = document.querySelector("#checkout")

for(let i = 0; i < product.length; i++) {
    product[i].addEventListener("click", function() {

    })
}

for(let i = 0; i < cta.length; i++) {
    cta[i].addEventListener("click", function() {
        updeted_chart(jackets[1].price)
        chart.innerHTML = `<img src="images/icons/shopping_cart.png" alt="shopping_cart icon"><br>${price()},-`
        overlay.style.display = "flex"

        
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

let jackets = {
    1: {
        name: "Explorer",
        price: 999
    },
    2: {
        name: "Extreme",
        price: 2499
    },
    3: {
        name: "Bubble",
        price: 1999
    }
};


overlay.addEventListener("click", function() {
    overlay.style.display = "none"
})

checkout.addEventListener("click", function() {
    location.replace("shopping-cart.html")
})


const chart = document.querySelector(".chart");
chart.innerHTML = `<img src="images/icons/shopping_cart.png" alt="shopping_cart icon"><br>${price()},-`
let chartPrice = 0





