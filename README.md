# brodie969/complex-weather

A more complex weather app, building on from [brodie969/weather](https://github.com/brodie969/weather).

## In Progress

I'm still trying to figure out how to deploy a live demo without exposing my API Key, so see [`How To Run Locally`](#how-to-run-locally) to try for now.

Feel free to star this repo and come back when I put the live demo up.

## To Do:

- Figure Out How To Store API Key Securely For Live Demo

## How To Run Locally:

1. Get your free API Key from [WeatherAPI](https://www.weatherapi.com)

2. Clone this repo

[Download the latest release](https://github.com/brodie969/complex-weather/releases/latest), as I have modified the Javscript for it to work with Github Action and Github Secrets.

3. Create a file called `secrets.js`.

4. Place your key in `secrets.js` as follows:

```javascript
export const API_KEY = "1234567890";
```

5. Start a local development server with your preferred method

(Mine is with Python's http server: `python -m http.server 8000`)

6. Visit `localhost:8000` in your browser, and now you can view the weather around the world!

