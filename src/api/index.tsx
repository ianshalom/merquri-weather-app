import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
});

export const getWeatherData = async () => {
  return await axiosInstance.get(
    `?q=london,uk&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
  );
};
