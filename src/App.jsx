import { useState, useEffect } from "react";
import "./App.css";
const Weather = () => {
  const apiKey = "8b83d51101cf7d02f84f8f5fab17ada4";
  const [city, setCity] = useState("lucknow");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleSearch = () => {
    fetchWeather(city);
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    fetchWeather("lucknow");
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { name } = weatherData;
  const { description, icon } = weatherData.weather[0];
  const { temp, humidity, temp_min, temp_max } = weatherData.main;
  const { speed } = weatherData.wind;

  return (
    <>
      <div className="search">
        <input
          type="text"
          className="searchbar"
          value={city}
          onChange={handleChange}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#007BFF",
            color: "white",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>
      <div className="weather">
        <h2 className="city">Weather in {name}</h2>
        <h1 className="temp">{temp}° C</h1>
        <h3 className="max_temp">Max Temp: {temp_max}° C</h3>
        <h3 className="min_temp">Min Temp: {temp_min}° C</h3>
        <img
          className="icon"
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          alt="weather icon"
        />
        <p className="description">{description}</p>
        <p className="humidity">Humidity: {humidity}%</p>
        <p className="windspeed">Wind Speed: {speed} km/h</p>
      </div>
    </>
  );
};

export default Weather;
