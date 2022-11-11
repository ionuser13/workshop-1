/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseURL = "https://platzi-avo.vercel.app";
const urlApi = "https://platzi-avo.vercel.app/api/avo";
const myAppNode = document.querySelector("#app");

// Int API

async function fetchData() {
    const response = await fetch(urlApi);
    const dataRes = await response.json();
    let items = [];
    try {
        dataRes.data.forEach((item) => {
            const image = document.createElement("img");
            image.src = `${baseURL}${item.image}`
            const title = document.createElement("h2");
            title.textContent = item.name;
            title.className = "text-2xl text-red-600"
            const price = document.createElement("div");
            price.textContent = item.price;
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