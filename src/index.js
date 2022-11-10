/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const urlAvo = "https://platzi-avo.vercel.app/api/avo";

async function fetchData() {
    const response = await fetch(urlAvo);
    const data = await response.json();
    let items = [];
    data.data.forEach((item) => {
        const image = document.createElement("img");
        const title = document.createElement("h2");
        const price = document.createElement("div");
        const container = document.createElement("div");
        container.append(image, title, price);
        items.push(container);
    })
    document.body.append(...items)
    console.log(data)
}
fetchData()