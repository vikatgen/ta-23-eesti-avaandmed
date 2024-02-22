const baseURL = "https://avaandmed.eesti.ee/api/datasets/";

fetch(baseURL)
    .then((response) => response.json())
    .then((data) => console.log(data));
