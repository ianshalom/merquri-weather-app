import styled from "styled-components";
import type { RootState } from "store";
import { useSelector } from "react-redux";
import sunImage from "assets/sun.png";
import formatTime from "utils/getTimeOfDay";

const WeatherContainer = styled.div`
  display: flex;
  position: relative;
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

const Image = styled.img`
  height: 350px;
  width: 350px;
  position: absolute;
  top: -150px;
  left: 280px;
`;

const GreyText = styled.p<{ $bold?: boolean }>`
  color: #666666;
  font-weight: ${(props) => (props.$bold ? "bold" : "none")};
`;

export default function SearchResults() {
  const weatherData = useSelector(
    (state: RootState) => state.searchHistory.weatherData[0]
  );

  return (
    <WeatherContainer>
      <WeatherTempContainer>
        <p style={{ fontWeight: "bold" }}>Today's Weather</p>
        <p style={{ fontSize: "80px", fontWeight: "bold", color: "#6C40B5" }}>
          {!weatherData ? 0 : weatherData.temp}°
        </p>
        <p>
          H:{!weatherData ? 0 : weatherData.maxTemp}° L:
          {!weatherData ? 0 : weatherData.minTemp}°
        </p>
        <GreyText $bold>
          {!weatherData ? "" : `${weatherData.name}, ${weatherData.country}`}
        </GreyText>
      </WeatherTempContainer>
      <AdditionalInfoContainer>
        <Image src={sunImage} alt="sun" />
        <GreyText>
          {!weatherData ? "" : formatTime(weatherData.timestamp)}
        </GreyText>
        <GreyText>
          Humidity: {!weatherData ? "" : weatherData.humidity}%
        </GreyText>
        <GreyText>Clouds</GreyText>
      </AdditionalInfoContainer>
    </WeatherContainer>
  );
}
