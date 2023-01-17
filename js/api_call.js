const baseUrl = "http://myflashcard.org/wp-json/wc/store/products";

async function apiCall() {
    const respons = await fetch(baseUrl);
    const data = await respons.json()
    console.log(data)
}

apiCall()