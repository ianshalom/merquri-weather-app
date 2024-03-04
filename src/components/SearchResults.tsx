import styled from "styled-components";
import type { RootState } from "store";
import { useSelector } from "react-redux";
import sunImage from "assets/sun.png";

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
    (state: RootState) =>
      state.searchHistory.weatherData[
        state.searchHistory.weatherData.length - 1
      ]
  );

  if (!weatherData) return;

  const { temp, maxTemp, minTemp, name, country, timestamp, humidity } =
    weatherData;

  return (
    <WeatherContainer>
      <WeatherTempContainer>
        <p style={{ fontWeight: "bold" }}>Today's Weather</p>
        <p style={{ fontSize: "80px", fontWeight: "bold", color: "#6C40B5" }}>
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
        <Image src={sunImage} alt="sun" />
        <GreyText>{timestamp}am</GreyText>
        <GreyText>Humidity: {humidity}%</GreyText>
        <GreyText>Clouds</GreyText>
      </AdditionalInfoContainer>
    </WeatherContainer>
  );
}
