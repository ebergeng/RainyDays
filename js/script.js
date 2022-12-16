import { price } from "./chart.js";
import { updeted_chart } from "./chart.js";
var a = new Date();

console.log(localStorage)


const product = document.querySelectorAll(".product");
const cta = document.querySelectorAll(".cta");

for(let i = 0; i < product.length; i++) {
    product[i].addEventListener("click", function() {

    })
}

for(let i = 0; i < cta.length; i++) {
    cta[i].addEventListener("click", function() {
        updeted_chart(jackets[1].price)
        chart.innerHTML = `<img src="images/icons/shopping_cart.png" alt="shopping_cart icon"><br>${price()},-`
        localStorage.a = price();
    })
    cta[i].addEventListener("mouseover", function() {
        product.forEach(function(t) {
            t.href = "#"
        })
    })

    cta[i].addEventListener("mouseout", function() {
        product.forEach(function(t) {
            t.href = "products/selected-product.html"
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



const chart = document.querySelector(".chart");
chart.innerHTML = `<img src="images/icons/shopping_cart.png" alt="shopping_cart icon"><br>${price()},-`
let chartPrice = 0





