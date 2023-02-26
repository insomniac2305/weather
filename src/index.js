import "./styles.css";
import Icons from "./icons";

const locationNode = document.querySelector(".location");
const temperatureNode = document.querySelector(".temperature");
const weatherDescNode = document.querySelector(".weather-desc");
const weatherIcon = document.querySelector(".weather-icon");
const locationInput = document.querySelector("#location");
const locationForm = document.querySelector("#location-form");
const searchIcon = document.querySelector(".search-icon");
const locationIcon = document.querySelector(".location-icon");

searchIcon.src = Icons.getIcon("search");
locationIcon.src = Icons.getIcon("location");

async function fetchWeatherData(searchLoc) {
  let weatherData;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=610c66bbb97cde2f3b16c870a3f539df&q=${searchLoc}&units=metric`,
      { mode: "cors" }
    );
    const responseJson = await response.json();

    weatherData = {
      location: `${responseJson.name}, ${responseJson.sys.country}`,
      temperature: Math.round(responseJson.main.temp),
      description: responseJson.weather[0].description,
      icon: responseJson.weather[0].icon,
    };
  } catch (error) {
    weatherData = {
      location: "Oops!",
      temperature: "-",
      description: "Error fetching data",
      icon: "not-found",
    };
  }
  return weatherData;
}

async function showWeatherData(searchLoc) {
  const weatherObj = await fetchWeatherData(searchLoc);
  locationNode.innerText = weatherObj.location;
  temperatureNode.innerText = `${weatherObj.temperature}°`;
  weatherDescNode.innerText = weatherObj.description;
  weatherIcon.src = Icons.getIcon(weatherObj.icon);
}

locationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchLoc = locationInput.value;
  if (searchLoc !== "") {
    showWeatherData(locationInput.value);
  }
});

async function fetchIPLocation() {
  let location;
  try {
    const response = await fetch("https://json.geoiplookup.io/", { mode: "cors" });
    const responseJson = await response.json();
    location = `${responseJson.city}, ${responseJson.country_code}`;
  } catch (error) {
    location = "Berlin, DE";
  }
  return location;
}

fetchIPLocation().then((response) => showWeatherData(response));
