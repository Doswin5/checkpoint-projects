const apiKey = "YOUR_API_KEY"; // Replace with your API key from OpenWeatherMap
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");

searchBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  try {
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const weatherData = await response.json();
    displayWeather(weatherData);
  } catch (error) {
    alert(error.message);
  }
});

function displayWeather(data) {
  cityName.textContent = `City: ${data.name}`;
  temperature.textContent = `Temperature: ${data.main.temp} °C`;
  description.textContent = `Weather: ${data.weather[0].description}`;
}
