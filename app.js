const selectHTMLElement = document.querySelector("#open-data");

const baseURL = "https://avaandmed.eesti.ee/api/datasets/";

fetch(baseURL)
    .then((response) => response.json())
    .then(({ data, metadata }) => {
        console.log(metadata);
        data.forEach((category) => {
            const optionHTMLElement = new Option(category.name, category.id);
            selectHTMLElement.appendChild(optionHTMLElement);
            console.log(category);
        });
    });
