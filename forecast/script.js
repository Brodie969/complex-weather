const API_KEY = process.env.API_KEY;

const numberOfDays = 7; // Define the number of forecast days as a constant

const parameters = new URLSearchParams(window.location.search);
const cityParameter = parameters.get("city");

function currentForecast(city) {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=${numberOfDays + 1}`)
        .then(response => response.json())
        .then(data => {
            // Extract location and time
            const location = data.location.name;
            const time = data.location.localtime;

            // Add universal data to the DOM
            updateUniversalData(location, time);

            // Extract and display weather data for each day
            for (let i = 0; i < numberOfDays; i++) {
                appendData(i, data);
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            // Display an error message to the user on the webpage
            showErrorToUser();
        });
}

function updateUniversalData(location, time) {
    const locationElement = document.createElement("p");
    locationElement.textContent = `Location: ${location}.`;
    const timeElement = document.createElement("p");
    timeElement.textContent = `Local Time: ${time}.`;
    const locationData = document.getElementById("data");
    locationData.appendChild(locationElement);
    locationData.appendChild(timeElement);
    const heading = document.getElementById("heading");
    heading.innerHTML = `Forecast For ${location}:`;
}

function appendData(index, data) {
    const dayElement = document.getElementById(`day${index + 1}`);
    const forecastDay = data.forecast.forecastday[index + 1];

    if (forecastDay) {
        const date = forecastDay.date;
        const maxTemp = forecastDay.day.maxtemp_c;
        const minTemp = forecastDay.day.mintemp_c;
        const avgTemp = forecastDay.day.avgtemp_c;
        const windSpeed = forecastDay.day.maxwind_kph;
        const visibility = forecastDay.day.avgvis_km;
        const humidity = forecastDay.day.avghumidity;

        const dateElement = document.createElement('p');
        dateElement.textContent = `Date: ${date}.`;
        const maxTempElement = document.createElement('p');
        maxTempElement.textContent = `Max Temperature: ${maxTemp}°C.`;
        const minTempElement = document.createElement('p');
        minTempElement.textContent = `Min Temperature: ${minTemp}°C.`;
        const avgTempElement = document.createElement('p');
        avgTempElement.textContent = `Average Temperature: ${avgTemp}°C.`;
        const windSpeedElement = document.createElement('p');
        windSpeedElement.textContent = `Max Wind Speed: ${windSpeed}kph.`;
        const visibilityElement = document.createElement('p');
        visibilityElement.textContent = `Average Visibility: ${visibility}km.`;
        const humidityElement = document.createElement('p');
        humidityElement.textContent = `Average Humidity: ${humidity}%.`;

        const lineBreak = document.createElement('br');

        dayElement.appendChild(dateElement);
        dayElement.appendChild(maxTempElement);
        dayElement.appendChild(minTempElement);
        dayElement.appendChild(avgTempElement);
        dayElement.appendChild(windSpeedElement);
        dayElement.appendChild(visibilityElement);
        dayElement.appendChild(humidityElement);
        dayElement.appendChild(lineBreak);
    } else {
        // Handle the case where data for this day is not available
        const notAvailableElement = document.createElement('p');
        notAvailableElement.textContent = 'Weather data not available for this day.';
        dayElement.appendChild(notAvailableElement);
    }
}

currentForecast(cityParameter);
