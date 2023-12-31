import {OWM_API_KEY} from "../api_keys.js";
import {getCityGeoCode} from "./geolocation.js";

// Fetches the geocode for a city
const getGeoCode = async (city) => {
    const geoCode = await getCityGeoCode(city)
    if (!geoCode) {
        throw new Error(`No geocode data available for the city ${city}.`)
    }
    return geoCode;
}

// Builds the weather API URL
const buildWeatherApiUrl = (latitude, longitude, units, APIKEY) => {
    return `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=${units}&appid=${APIKEY}`;
}

// Fetches the weather data for a city
const fetchWeatherData = async (url, city) => {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`Failed to fetch weather data for city ${city} with status ${response.status} ${response.statusText}`)
    }
    const data = await response.json()
    if (data) {
        return data
    } else {
        throw new Error(`No weather data available for the city ${city}.`)
    }
}

// Main function to get the weather for a city
const getWeather = async (city, units="metric") => {
    const geoCode = await getGeoCode(city)
    const latitude = geoCode.lat
    const longitude = geoCode.lng
    const url = buildWeatherApiUrl(latitude, longitude, units, OWM_API_KEY)
    return await fetchWeatherData(url, city);
}

export {getWeather}