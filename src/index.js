import "./style.css";
import { getAllData } from "./data";

const searchCity = document.getElementById("search-city");
const conditionImg = document.getElementById("current-condition-img");
const currentCondition = document.getElementById("current-condition");
const currentTemperature = document.getElementById("current-temperature");
const currentHumidity = document.getElementById("current-humidity");
const currentUV = document.getElementById("current-uv");
const currentFeelsLike = document.getElementById("current-feels-like");
const currentLastUpdated = document.getElementById("current-last-updated");
const unitToggle = document.getElementById("unit-toggle");

let currentData = null;

const searchData = async (city) => {
  currentData = await getAllData(city).current;
  updateUI(currentData);
  console.log(currentData);
};

searchCity.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchData(searchCity.value);
  }
});

const updateUI = (data) => {
  conditionImg.src = data.conditionIcon;
  currentCondition.textContent = data.condition;
  currentHumidity.textContent = `Humidity: ${data.humidity}%`;
  currentUV.textContent = `UV: ${data.uv}`;
  currentLastUpdated.textContent = `Last Updated: ${data.lastUpdated}`;
  if (unitToggle.checked === false) {
    currentTemperature.textContent = `${data.tempC}°C`;
    currentFeelsLike.textContent = `Feels like ${data.feelsLikeC}°C`;
  } else {
    currentTemperature.textContent = `${data.tempF}°F`;
    currentFeelsLike.textContent = `Feels like ${data.feelsLikeF}°F`;
  }
};

// Display weather data for Montreal by default on page load
document.addEventListener("DOMContentLoaded", () => {
  searchCity.value = "Montreal";
  searchData("Montreal");
});

unitToggle.addEventListener("click", () => {
  if (currentData) {
    updateUI(currentData);
  }
});
