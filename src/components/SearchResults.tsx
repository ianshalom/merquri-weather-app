import styled from "styled-components";

const WeatherData = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function SearchResults() {
  return (
    <WeatherData>
      <p>Today's Weather</p>
      <p>Temperature</p>
      <p>H:29deg L:26deg</p>
      <p>City, Code</p>
    </WeatherData>
  );
}
