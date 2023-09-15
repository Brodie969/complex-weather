import { API_KEY } from './secrets.js';

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultsContainer = document.getElementById("results");

searchButton.addEventListener("click", () => {
    const query = searchInput.value;
    const apiUrl = `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${query}`;

    // Clear previous results
    resultsContainer.innerHTML = "";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(location => {
                const resultItem = document.createElement("div");
                resultItem.classList.add("result-item");
                resultItem.innerHTML = `<h2><a href="/current?city=${location.name.toLowerCase()}">${location.name}, ${location.region}, ${location.country}</a></h2>
                                        <p>Latitude: ${location.lat}, Longitude: ${location.lon}</p>`;
                resultsContainer.appendChild(resultItem);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});
