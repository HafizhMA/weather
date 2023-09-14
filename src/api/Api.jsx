import axios from "axios";

async function getWeather(city) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.VITE_API_KEY}`
    );
    return response.data;
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export { getWeather };
