const baseURL = "https://platzi-avo.vercel.app";
const urlApi = "https://platzi-avo.vercel.app/api/avo";
const myAppNode = document.querySelector("#app");
myAppNode.className = "grid grid-cols-4 gap-8 max-w-7xl px-4 py-8 mx-auto min-w-fit rounded-2xl";

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
            image.className = "w-5/6 mx-auto rounded-full"

            const title = document.createElement("h2");
            title.textContent = item.name;
            title.className = "text-xl lg:text-2xl w-1/2 text-center mx-auto font-medium"

            const price = document.createElement("div");
            price.textContent = formatPrice(item.price);

            const container = document.createElement("div");
            container.className = "border-dotted border-2 border-yellow-600 py-4 hover:bg-lime-600 item rounded-xl cursor-pointer"
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