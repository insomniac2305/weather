import "./styles.css";

const locationNode = document.querySelector(".location");
const temperatureNode = document.querySelector(".temperature");
const weatherDescNode = document.querySelector(".weather-desc");

async function fetchWeatherData(searchLoc) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?appid=610c66bbb97cde2f3b16c870a3f539df&q=${searchLoc}&units=metric`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  return {
    location: weatherData.name,
    temperature: weatherData.main.temp,
    description: weatherData.weather[0].main,
  };
}

fetchWeatherData("Dortmund").then((weatherObj) => {
  locationNode.innerText = `Location: ${weatherObj.location}`;
  temperatureNode.innerText = `Temperature: ${weatherObj.temperature}°`;
  weatherDescNode.innerText = `Weather: ${weatherObj.description}`;
});
