// Sample JavaScript for weather forecast (front-end only)
// In a real application, you would fetch weather data from an API

const weatherData = {
    temperature: "28°C",
    description: "Sunny",
};

document.addEventListener("DOMContentLoaded", () => {
    updateWeather(weatherData);
});

function updateWeather(data) {
    document.querySelector(".temperature").textContent = data.temperature;
    document.querySelector(".description").textContent = data.description;
}
