const getTime = (dt) => {
    const time = new Date(0);
    time.setUTCSeconds(dt);
    return time;
}

const getWeatherDescription = (weather) => {
    return weather[0].description;
}

const getRoundedValue = (value) => {
    return Math.round(value);
}

const hourlyWeather = async (hourlyData) => {
    return hourlyData.slice(0, 24).map((data) => {
        const time = getTime(data.dt);
        const weatherDescription = getWeatherDescription(data.weather);
        const temp = getRoundedValue(data.temp);
        const feelsLike = getRoundedValue(data.feels_like);
        const humidity = data.humidity;
        const windSpeed = data.wind_speed;
        const windDeg = data.wind_deg;

        return {
            time: time,
            weatherDescription: weatherDescription,
            temp: temp,
            feelsLike: feelsLike,
            humidity: humidity,
            windSpeed: windSpeed,
            windDeg: windDeg
        }
    });
}

export {hourlyWeather}