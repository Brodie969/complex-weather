import { API_KEY } from "../secrets.js";

const parameters = new URLSearchParams(window.location.search);
const cityParameter = parameters.get("city");

function currentForecast(city) {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`)
        .then(response => response.json())
        .then(data => {
            const location = data.location.name;
            const time = data.location.localtime;
            const day1Date = data.forecast.forecastday[1].date;
            const day1MaxTemp = data.forecast.forecastday[1].day.maxtemp_c;

            // Create HTML elements to display the data
            const locationElement = document.createElement("p");
            locationElement.textContent = `Location: ${location}.`;

            const timeElement = document.createElement("p");
            timeElement.textContent = `Local Time: ${time}.`;

            const day1DateElement = document.createElement("p");
            day1DateElement.textContent = `Date: ${day1Date}.`;

            const day1MaxTempElement = document.createElement("p");
            day1MaxTempElement.textContent = `Max: ${day1MaxTemp}°C.`;



            // Index Through The Divs
            const locationData = document.getElementById("data");
            locationData.appendChild(locationElement);
            locationData.appendChild(timeElement);

            // Append the data to the "day1" div
            const day1 = document.getElementById("day1");
            day1.appendChild(day1DateElement);
            day1.appendChild(day1MaxTempElement);
            
            const heading = document.getElementById("heading");
            heading.innerHTML = `Forecast For ${location}:`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}

// Call the currentAstroData function when the page loads
currentForecast(cityParameter);
