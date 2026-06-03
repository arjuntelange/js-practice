const cityInput = document.getElementById("input-city");
const searchBtn = document.getElementById("search-btn");

const temperature = document.getElementById("temperature");
const cityName = document.getElementById("city-name");
const weatherCondition = document.getElementById("weather-condition");
const humidity = document.getElementById("humidity");

async function getWeather() {
  const city = cityInput.value;
  console.log(city);
}

searchBtn.addEventListener("click", getWeather);
