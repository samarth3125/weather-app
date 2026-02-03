const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const error = document.getElementById("error");

const apiKey = "22b73bb1907e3a1f42b024f07cd951ee";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

searchBtn.addEventListener("click", getWeather);

async function getWeather() {
  const city = cityInput.value;

  if (city === "") {
    error.innerText = "Please enter a city name";
    return;
  }

  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    error.innerText = "";
    cityName.innerText = data.name;
    temperature.innerText = `🌡️ Temp: ${data.main.temp}°C`;
    description.innerText = `☁️ Weather: ${data.weather[0].description}`;
    humidity.innerText = `💧 Humidity: ${data.main.humidity}%`;
    wind.innerText = `🌬️ Wind: ${data.wind.speed} km/h`;

  } catch (err) {
    error.innerText = err.message;
    cityName.innerText = "";
    temperature.innerText = "";
    description.innerText = "";
    humidity.innerText = "";
    wind.innerText = "";
  }
}

