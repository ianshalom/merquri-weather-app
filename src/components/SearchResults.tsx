import styled from "styled-components";
import type { RootState } from "store";
import { useSelector } from "react-redux";

const WeatherData = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function SearchResults() {
  const weatherData = useSelector(
    (state: RootState) =>
      state.searchHistory.weatherData[
        state.searchHistory.weatherData.length - 1
      ]
  );
  console.log(weatherData);

  const { temp, maxTemp, minTemp, name, country } = weatherData;

  return (
    <WeatherData>
      <p>Today's Weather</p>
      <h1>{temp}</h1>
      <p>
        H:{maxTemp} L:{minTemp}
      </p>
      <p>
        {name}, {country}
      </p>
    </WeatherData>
  );
}
