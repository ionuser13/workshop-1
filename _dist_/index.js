/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseURL = "https://platzi-avo.vercel.app";
const urlApi = "https://platzi-avo.vercel.app/api/avo";
const myAppNode = document.querySelector("#app");
myAppNode.className = "grid grid-cols-3 gap-4 max-w-5xl mx-auto";

// Intl API 1.- dates formats 2.- currency formats

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price)
    return newPrice
}

async function fetchData() {
    const response = await fetch(urlApi);
    const dataRes = await response.json();
    let items = [];
    try {
        dataRes.data.forEach((item) => {
            const image = document.createElement("img");
            image.src = `${baseURL}${item.image}`;
            image.className = "w-full cursor-pointer"

            const title = document.createElement("h2");
            title.textContent = item.name;
            title.className = "text-xl text-red-600 cursor-pointer"

            const price = document.createElement("div");
            price.textContent = formatPrice(item.price);

            const container = document.createElement("div");
            container.append(image, title, price);
            items.push(container);
        })
        myAppNode.append(...items)
        console.log(dataRes)
    }
    catch (error) {
        console.error(error);
        fetchData();
    }
}
fetchData()