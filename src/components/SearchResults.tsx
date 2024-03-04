import styled from "styled-components";
import type { RootState } from "store";
import { useSelector } from "react-redux";

const WeatherContainer = styled.div`
  display: flex;
`;

const WeatherTempContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AdditionalInfoContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`;

const GreyText = styled.p<{ $bold?: boolean }>`
  color: #666666;
  font-weight: ${(props) => (props.$bold ? "bold" : "none")};
`;

export default function SearchResults() {
  const weatherData = useSelector(
    (state: RootState) =>
      state.searchHistory.weatherData[
        state.searchHistory.weatherData.length - 1
      ]
  );
  console.log(weatherData);

  const { temp, maxTemp, minTemp, name, country, timestamp, humidity } =
    weatherData;

  console.log(timestamp, humidity);

  return (
    <WeatherContainer>
      <WeatherTempContainer>
        <p style={{ fontWeight: "bold" }}>Today's Weather</p>
        <p style={{ fontSize: "60px", fontWeight: "bold", color: "#6C40B5" }}>
          {temp}°
        </p>
        <p>
          H:{maxTemp}° L:{minTemp}°
        </p>
        <GreyText $bold>
          {name}, {country}
        </GreyText>
      </WeatherTempContainer>
      <AdditionalInfoContainer>
        <GreyText>{timestamp}</GreyText>
        <GreyText>Humidity: {humidity}%</GreyText>
        <GreyText>Clouds</GreyText>
      </AdditionalInfoContainer>
    </WeatherContainer>
  );
}
