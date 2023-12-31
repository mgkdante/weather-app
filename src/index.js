import {getWeather} from "./API/weather.js";
import {currentWeather} from "./Data/current.js";
import {hourlyWeather} from "./Data/hourly.js";
import {dailyWeather} from "./Data/daily.js";

const categorizeData = async (city) => {
    const rawData = await getWeather(city)
    return {
        currentWeather: rawData.current,
        hourlyWeather: rawData.hourly,
        dailyWeather: rawData.daily
    }
}

const updateUI = (current, hourly, daily) => {
    // Select your HTML elements
    const currentWeatherElement = document.getElementById('current-weather');
    const hourlyWeatherElement = document.getElementById('hourly-weather');
    const dailyWeatherElement = document.getElementById('daily-weather');

    // Update the current weather
    currentWeatherElement.innerHTML = `
        <h2>Current Weather</h2>
        <img src="http://openweathermap.org/img/w/${current.weatherIcon}.png" alt="Weather icon">
        <p>Time: ${current.time}</p>
        <p>Current forecast: ${current.weatherDescription}</p>
        <p>Temperature: ${current.temp}</p>
        <p>Feels like: ${current.feelsLike}</p>
        <p>Humidity: ${current.humidity}</p>
        <p>Wind speed: ${current.windSpeed}</p>
        <p>Wind direction: ${current.windDeg}</p>
    `;

    // Update the hourly weather
    hourlyWeatherElement.innerHTML = hourly.map(hour => `
        <div>
            <h2>Hour: ${hour.time}</h2>
            <img src="http://openweathermap.org/img/w/${hour.weatherIcon}.png" alt="Weather icon">
            <p>Weather Description: ${hour.weatherDescription}</p>
            <p>Temperature: ${hour.temp}</p>
            <p>Feels like: ${hour.feelsLike}</p>
            <p>Humidity: ${hour.humidity}</p>
            <p>wind speed: ${hour.windSpeed}</p>
            <p>wind direction: ${hour.windDeg}</p>
        </div>
    `).join('');

    // Update the daily weather
    dailyWeatherElement.innerHTML = daily.map(day => `
        <div>
            <h2>Day: ${day.time}</h2>
            <img src="http://openweathermap.org/img/w/${day.weatherIcon}.png" alt="Weather icon">
            <p>Weather Description: ${day.weatherDescription}</p>
            <p>Weather Summary: ${day.weatherSummary}</p>
            <p>Min Temperature: ${day.minTemp}</p>
            <p>Max Temperature: ${day.maxTemp}</p>
            <p>Day Feels Like: ${day.dayFeelsLike}</p>
            <p>Night Feels Like: ${day.nightFeelsLike}</p>
            <p>Humidity: ${day.humidity}</p>
            <p>Wind Speed: ${day.windSpeed}</p>
            <p>Wind Direction: ${day.windDeg}</p>
        </div>
    `).join('');
}

const runWeather = async (city) => {
    const data = await categorizeData(city)
    const current = await currentWeather(data.currentWeather)
    const hourly = await hourlyWeather(data.hourlyWeather)
    const daily = await dailyWeather(data.dailyWeather)

    console.log('Current Weather:', current)
    console.log('Hourly Weather:', hourly)
    console.log('Daily Weather:', daily)
    updateUI(current, hourly, daily);
}

runWeather('Sherbrooke')