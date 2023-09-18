import { API_KEY } from "../secrets.js";

const parameters = new URLSearchParams(window.location.search);
const cityParameter = parameters.get("city");

function currentWeatherData(city) {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
        .then(response => response.json())
        .then(data => {
            const favicon = data.current.condition.icon;
            const location = data.location.name;
            const temperature = data.current.temp_c;
            const windDir = data.current.wind_degree;
            const windDir2 = data.current.wind_dir;
            const windSpeed = data.current.wind_kph;
            const windGust = data.current.gust_kph;
            const description = data.current.condition.text;
            const precip = data.current.precip_mm;
            const humid = data.current.humidity;
            const vis = data.current.vis_km;

            // Create HTML elements to display the data
            const locationElement = document.createElement("p");
            locationElement.textContent = `Location: ${location}.`;

            const temperatureElement = document.createElement("p");
            temperatureElement.textContent = `Temperature: ${temperature}°C.`;

            const windElement = document.createElement("p");
            windElement.textContent = `Wind: ${windDir}°${windDir2} at ${windSpeed}kph. Gusts: ${windGust}kph.`;

            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = `Description: ${description}.`;

            const precipElement = document.createElement("p");
            precipElement.textContent = `Precipitation: ${precip}mm.`;

            const humidityElement = document.createElement("p");
            humidityElement.textContent = `Humidity: ${humid}%.`;

            const visibilityElement = document.createElement("p");
            visibilityElement.textContent = `Visibility: ${vis}km.`;

            const faviconLink = document.getElementById("favicon");
            faviconLink.href = favicon;

            // Append the data to the "weather-info" div
            const weatherInfo = document.getElementById("weather-info");
            weatherInfo.appendChild(locationElement);
            weatherInfo.appendChild(temperatureElement);
            weatherInfo.appendChild(windElement);
            weatherInfo.appendChild(descriptionElement);
            weatherInfo.appendChild(precipElement);
            weatherInfo.appendChild(humidityElement);
            weatherInfo.appendChild(visibilityElement);

            const heading = document.getElementById("heading");
            heading.innerHTML = `Weather Data For ${location}:`
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}

// Call the currentWeatherData function when the page loads
currentWeatherData(cityParameter);
