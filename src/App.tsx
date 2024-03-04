import { useEffect } from "react";
import { getWeatherData } from "api";
import SearchField from "components/SearchField";
import MainWrapper from "components/MainWrapper";

function App() {
  useEffect(() => {
    const weatherData = getWeatherData();
    console.log(weatherData);
  }, []);
  return (
    <MainWrapper>
      <SearchField />
    </MainWrapper>
  );
}

export default App;
