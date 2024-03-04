import { useEffect } from "react";
import { getWeatherData } from "./api";

function App() {
  useEffect(() => {
    const weatherData = getWeatherData();
    console.log(weatherData);
  }, []);
  return <div>Weather app</div>;
}

export default App;
