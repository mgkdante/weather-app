import {getTime, getRoundedValue, getWeatherDescription} from "./current.js";

const getWeatherSummary = (summary) => {
    return summary;
}


const dailyWeather = async (dailyData) => {
    return dailyData.map((data) => {
        const time = getTime(data.dt);
        const weatherDescription = getWeatherDescription(data.weather);
        const weatherSummary = getWeatherSummary(data.summary);
        const weatherIcon = data.weather[0].icon;
        const minTemp = getRoundedValue(data.temp.min);
        const maxTemp = getRoundedValue(data.temp.max);
        const dayFeelsLike = getRoundedValue(data.feels_like.day);
        const nightFeelsLike = getRoundedValue(data.feels_like.night);
        const humidity = data.humidity;
        const windSpeed = data.wind_speed;
        const windDeg = data.wind_deg;

        return {
            time: time,
            weatherDescription: weatherDescription,
            weatherSummary: weatherSummary,
            weatherIcon: weatherIcon,
            minTemp: minTemp,
            maxTemp: maxTemp,
            dayFeelsLike: dayFeelsLike,
            nightFeelsLike: nightFeelsLike,
            humidity: humidity,
            windSpeed: windSpeed,
            windDeg: windDeg
        }
    });
}

export {dailyWeather}