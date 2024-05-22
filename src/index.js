import "./style.css";
import { getAllData } from "./data";

const searchCity = document.getElementById("search-city");

searchCity.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    console.log(getAllData(searchCity.value));
  }
});
