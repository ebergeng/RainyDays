const product = document.querySelectorAll(".product");
console.log(product)

for(let i = 0; i < product.length; i++) {
    product[i].addEventListener("click", function() {
        console.log("hey")
        window.location.href = "../products/selected-product.html";
    })
}


