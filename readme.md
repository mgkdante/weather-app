# Weather App

This is a weather application that fetches weather data for a specific city.

## index.js

In `index.js`, the application imports the `getWeather` function from `API/weather.js` and the `currentWeather`, `hourlyWeather`, and `dailyWeather` functions from `Data/current.js`, `Data/hourly.js`, and `Data/daily.js` respectively. 

The `categorizeData` function fetches raw weather data for a specified city (in this case, 'Sherbrooke') using the `getWeather` function. It then categorizes this raw data into current, hourly, and daily weather data.

The `runWeather` function calls `categorizeData` to get the categorized weather data. It then formats this data using the `currentWeather`, `hourlyWeather`, and `dailyWeather` functions and logs the formatted data to the console.

## API/weather.js

The `API/weather.js` file contains functions for fetching weather data from an API. It uses the `getCityGeoCode` function from `API/geolocation.js` to get the geocode for a city, builds the API URL using this geocode, and fetches the weather data from the API.

## API/geolocation.js

The `API/geolocation.js` file contains functions for fetching geocode data from the Google Maps API. It encodes the city name, fetches the data from the API, and processes the API response to return the geocode for the city.

## Data/current.js, Data/hourly.js, and Data/daily.js

The `Data/current.js`, `Data/hourly.js`, and `Data/daily.js` files contain the `currentWeather`, `hourlyWeather`, and `dailyWeather` functions respectively. These functions format the raw weather data into a more usable format for the application.

## Important Note

Please note that the API keys for the weather API and the Google Maps API are not included in the source files yet. They need to be added to the `buildWeatherApiUrl` function in `API/weather.js` and the `getCityGeoCode` function in `API/geolocation.js` respectively for the application to function correctly.