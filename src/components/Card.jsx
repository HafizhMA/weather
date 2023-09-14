import React, { useState, useEffect } from "react";
import { getWeather } from "../api/Api";
import clear from "../assets/clear.png";
import clouds from "../assets/clouds.png";
import drizzle from "../assets/drizzle.png";
import humidity from "../assets/humidity.png";
import mist from "../assets/mist.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";

const Card = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const weatherIcons = {
    Clear: { icon: clear, alt: "Clear Weather" },
    Clouds: { icon: clouds, alt: "Cloudy Weather" },
    Drizzle: { icon: drizzle, alt: "Drizzle Weather" },
    Humidity: { icon: humidity, alt: "Humid Weather" },
    Mist: { icon: mist, alt: "Misty Weather" },
    Rain: { icon: rain, alt: "Rainy Weather" },
    Snow: { icon: snow, alt: "Snowy Weather" },
    Wind: { icon: wind, alt: "Windy Weather" },
  };

  useEffect(() => {
    // Load data cuaca untuk London saat komponen pertama kali dimuat
    fetchWeatherData("London");
  }, []);

  const fetchWeatherData = async (cityName) => {
    const data = await getWeather(cityName);
    setWeatherData(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchWeatherData(city);
  };

  return (
    <section
      id="cardSection"
      className="h-screen flex justify-center items-center default-font-color"
    >
      <div className="boxContainer container mx-auto rounded">
        <div className="searchBox w-64 mx-auto my-5">
          <form className="flex" onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full text-black px-4 py-2 rounded-l-full focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
              placeholder="Cari..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Cari
            </button>
          </form>
        </div>
        {weatherData &&
        weatherData.weather &&
        weatherData.weather.length > 0 ? (
          <>
            <div className="city text-center my-5">
              <h3>Kota: {weatherData.name}</h3>
            </div>
            <div className="cuaca flex flex-col justify-center items-center">
              <img
                src={weatherIcons[weatherData.weather[0].main].icon}
                alt={weatherIcons[weatherData.weather[0].main].alt}
                width="200px"
              />
              <h3>{weatherData.weather[0].main}</h3>
            </div>
            <div className="wSpeedNHumidity flex justify-between my-5">
              <div className="wSpeed m-5 flex justify-center items-center">
                <img src={wind} alt="windspeed" />
                <h4 className="ms-5">
                  WindSpeed: {weatherData.wind.speed} m/s
                </h4>
              </div>
              <div className="humidity m-5 flex justify-center items-center">
                <img src={humidity} alt="humidity" />
                <h4 className="ms-5">Humidity: {weatherData.main.humidity}%</h4>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            <p className="text-3xl py-10">City not Found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Card;
