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

const runWeather = async (city) => {
    const data = await categorizeData(city)
    const current = await currentWeather(data.currentWeather)
    const hourly = await hourlyWeather(data.hourlyWeather)
    const daily = await dailyWeather(data.dailyWeather)

    console.log('Current Weather:', current)
    console.log('Hourly Weather:', hourly)
    console.log('Daily Weather:', daily)
}

runWeather('Sherbrooke')