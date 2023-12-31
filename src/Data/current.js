const getTime = (dt) => {
    const time = new Date(0);
    time.setUTCSeconds(dt);
    return time.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
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
    const weatherIcon = currentData.weather[0].icon;
    const temp = getRoundedValue(currentData.temp);
    const feelsLike = getRoundedValue(currentData.feels_like);
    const humidity = currentData.humidity;
    const windSpeed = currentData.wind_speed;
    const windDeg = currentData.wind_deg;

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
}

export {currentWeather, getTime, getWeatherDescription, getRoundedValue}