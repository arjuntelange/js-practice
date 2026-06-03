const cityInput = document.getElementById("input-city");
const searchBtn = document.getElementById("search-btn");

const temperature = document.getElementById("temperature");
const cityName = document.getElementById("city-name");
const weatherCondition = document.getElementById("weather-condition");
const humidity = document.getElementById("humidity");

async function getWeather() {
  const city = cityInput.value.trim();
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  try {
    temperature.textContent = "Loading...";
    cityName.textContent = "";
    weatherCondition.textContent = "";
    humidity.textContent = "";

    const response = await fetch(`https://wttr.in/${city}?format=j1`);
    const data = await response.json();

    temperature.textContent = `🌤️ ${data.current_condition[0].temp_C}°C`;
    cityName.textContent = `📍${city}`;
    weatherCondition.textContent =
      data.current_condition[0].weatherDesc[0].value;
    humidity.textContent = `Humidity: ${data.current_condition[0].humidity}%`;
  } 
  catch (error) {
    temperature.textContent = "❌ Error";

    cityName.textContent = "";

    weatherCondition.textContent = "Could not fetch weather";

    humidity.textContent = "";

    console.error(error);
  }
  finally {
    cityInput.value = "";
  }
}

searchBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getWeather();
  }
});
