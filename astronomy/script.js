import { API_KEY } from '../secrets.js';

const parameters = new URLSearchParams(window.location.search);
const cityParameter = parameters.get('city');

function currentAstroData(city) {
    fetch(`http://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&q=${city}`)
        .then(response => response.json())
        .then(data => {
            const location = data.location.name;
            const sunrise = data.astronomy.astro.sunrise;
            const sunset = data.astronomy.astro.sunset;
            const moonrise = data.astronomy.astro.moonrise;
            const moonset = data.astronomy.astro.moonset;
            const moonPhase = data.astronomy.astro.moon_phase;
            const moonIllumination = data.astronomy.astro.moon_illumination;
            const moonState = data.astronomy.astro.is_moon_up;
            const sunState = data.astronomy.astro.is_sun_up;
            let moonStateString = "";
            let sunStateString = "";

            // Create HTML elements to display the data
            const locationElement = document.createElement('p');
            locationElement.textContent = `Location: ${location}.`;

            const sunriseElement = document.createElement('p');
            sunriseElement.textContent = `Sunrise Time: ${sunrise}.`;

            const sunsetElement = document.createElement('p');
            sunsetElement.textContent = `Sunset Time: ${sunset}.`;

            const moonriseElement = document.createElement('p');
            moonriseElement.textContent = `Moonrise Time: ${moonrise}.`;

            const moonsetElement = document.createElement('p');
            moonsetElement.textContent = `Moonset Time: ${moonset}.`;

            const moonPhaseElement = document.createElement('p');
            moonPhaseElement.textContent = `Moon Phase: ${moonPhase}.`;

            const moonIlluminationElement = document.createElement('p');
            moonIlluminationElement.textContent = `Moon Illumination: ${moonIllumination}.`;

            // Moon and Sun State Logic:
            if (moonState === 1) {
                moonStateString = "Up";
            } else {
                moonStateString = "Down";
            }

            if (sunState === 1) {
                sunStateString = "Up";
            } else {
                sunStateString = "Down";
            }

            const sunStateElement = document.createElement('p');
            sunStateElement.textContent = `Sun Is ${sunStateString}.`

            const moonStateElement = document.createElement('p');
            moonStateElement.textContent = `Moon Is ${moonStateString}.`

            // Append the data to the 'weather-info' div
            const astroInfo = document.getElementById("astro-info");
            astroInfo.appendChild(locationElement);
            astroInfo.appendChild(sunriseElement);
            astroInfo.appendChild(sunsetElement);
            astroInfo.appendChild(sunStateElement);
            astroInfo.appendChild(moonriseElement);
            astroInfo.appendChild(moonsetElement);
            astroInfo.appendChild(moonStateElement);
            astroInfo.appendChild(moonPhaseElement);
            astroInfo.appendChild(moonIlluminationElement);

            const heading = document.getElementById("heading");
            heading.innerHTML = `Astronomy Data For ${location}:`
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

// Call the currentAstroData function when the page loads
currentAstroData(cityParameter);
