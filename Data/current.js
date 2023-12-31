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

const currentWeather = async (currentData) => {
    const time = getTime(currentData.dt);
    const weatherDescription = getWeatherDescription(currentData.weather);
    const temp = getRoundedValue(currentData.temp);
    const feelsLike = getRoundedValue(currentData.feels_like);
    const humidity = currentData.humidity;
    const windSpeed = currentData.wind_speed;
    const windDeg = currentData.wind_deg;

    return {
        time: time,
        weatherDescription: weatherDescription,
        temp: temp,
        feelsLike: feelsLike,
        humidity: humidity,
        windSpeed: windSpeed,
        windDeg: windDeg
    }
}

export {currentWeather}