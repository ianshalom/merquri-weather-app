import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
});

export const getWeatherData = async (input: string) => {
  return await axiosInstance.get(
    `?q=${input}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
  );
};
