const getLastXDay = (x) => {
  const date = new Date();
  const lastXDay = date.setDate(date.getDate() - x);
  return new Date(lastXDay).toISOString().substring(0, 10);
};

const generateWeatherUrls = (city) => {
  const apiKey = "538e121b787842e0b1c155708241905";
  return {
    forecast: `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`,
    history: [
      `https://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${city}&dt=${getLastXDay(1)}`,
      `https://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${city}&dt=${getLastXDay(2)}`,
      `https://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${city}&dt=${getLastXDay(3)}`,
    ],
  };
};

const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error.message);
  }
  return response.json();
};

const getForecastJSON = async (city) => {
  const urls = generateWeatherUrls(city);
  try {
    return await fetchData(urls.forecast);
  } catch (error) {
    console.log(error);
  }
};

const getHistoryJSON = async (city) => {
  const urls = generateWeatherUrls(city);
  try {
    const historyDataPromises = urls.history.map((url) => fetchData(url));
    const historyData = await Promise.all(historyDataPromises);

    return {
      historyData: [historyData[0], historyData[1], historyData[2]],
    };
  } catch (error) {
    console.log(error);
  }
};

const getCurrent = async (city) => {
  const current = await getForecastJSON(city);
  const currentData = current.current;
  return {
    lastUpdated: currentData.last_updated,
    tempC: currentData.temp_c,
    feelsLikeC: currentData.feelslike_c,
    tempF: currentData.temp_f,
    feelsLikeF: currentData.feelslike_f,
    uv: currentData.uv,
    humidity: currentData.humidity,
    condition: currentData.condition.text,
    conditionIcon: currentData.condition.icon,
  };
};

const getForecast = async (city) => {
  const forecast = await getForecastJSON(city);
  forecast.forecast.forecastday.forEach((forecast) => {
    console.log(forecast.day);
  });
};

const logHistory = async (city) => {
  const history = await getHistoryJSON(city);
  history.historyData.forEach((history) => {
    console.log(history.forecast.forecastday);
  });
};

const logger = async (city) => {
  const current = await getCurrent(city);
  console.log(current);
};

logger("Montreal");
