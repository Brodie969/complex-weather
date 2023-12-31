# brodie969/complex-weather

A more complex weather app, building on from [brodie969/weather](https://github.com/brodie969/weather).

## Completed

This code is fairly stable, so see [How To Run Locally](#how-to-run-locally) to try.

## Screenshots

![Screenshot Of Search Page](/screenshots/search.png)
![Screenshot Of Weather Page](/screenshots/current.png)
![Screenshot Of Astronomy Page](/screenshots/astro.png)
![Screenshot Of Forecast Page](/screenshots/forecast.png)

## How To Run Locally

1. Get your free API Key from [WeatherAPI](https://www.weatherapi.com)

2. Clone this repo

[Download the .zip](https://github.com/brodie969/complex-weather/archive/refs/heads/main.zip)

Or Use Git:
```bash
git clone https://github.com/brodie969/complex-weather/
```

3. Create a file called `secrets.js`.

4. Place your key in `secrets.js` as follows:

```javascript
export const API_KEY = "1234567890";
```

5. Start a local development server with your preferred method

(Mine is with Python's http server: `python -m http.server 8000`)

6. Visit `localhost:8000` in your browser, and now you can view the weather around the world!

