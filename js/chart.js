
localStorage.a = 0
let updatedPrice = localStorage.a


export function price() {
    console.log(updatedPrice)
    return updatedPrice;
}

export function updeted_chart(price) {
    updatedPrice += price;
    localStorage.a = updatedPrice;
    updatedPrice = parseInt(localStorage.a)
}
