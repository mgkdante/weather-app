import {getTime, getWeatherDescription, getRoundedValue} from "./current.js";

const hourlyWeather = async (hourlyData) => {
    return hourlyData.slice(0, 24).map((data) => {
        const time = getTime(data.dt);
        const weatherDescription = getWeatherDescription(data.weather);
        const weatherIcon = data.weather[0].icon;
        const temp = getRoundedValue(data.temp);
        const feelsLike = getRoundedValue(data.feels_like);
        const humidity = data.humidity;
        const windSpeed = data.wind_speed;
        const windDeg = data.wind_deg;

        return {
            time: time,
            weatherDescription: weatherDescription,
            weatherIcon: weatherIcon,
            temp: temp,
            feelsLike: feelsLike,
            humidity: humidity,
            windSpeed: windSpeed,
            windDeg: windDeg
        }
    });
}

export {hourlyWeather}