import styled from "styled-components";
import type { RootState } from "store";
import { useSelector } from "react-redux";

const WeatherData = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function SearchResults() {
  const weatherData = useSelector(
    (state: RootState) => state?.searchHistory.weatherData
  );
  console.log(weatherData);
  return (
    <WeatherData>
      <p>Today's Weather</p>
      <p>Temperature</p>
      <p>H:29deg L:26deg</p>
      <p>City, Code</p>
    </WeatherData>
  );
}
