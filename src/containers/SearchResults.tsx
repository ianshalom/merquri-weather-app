import styled from "styled-components";
import type { RootState } from "store";
import { useSelector } from "react-redux";
import sunImage from "assets/sun.png";
import formatTime from "utils/getTimeOfDay";
import Text from "components/UI/Text";

const WeatherContainer = styled.div`
  display: flex;
  position: relative;
`;

const WeatherTempContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const AdditionalInfoContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Image = styled.img`
  height: 350px;
  width: 350px;
  position: absolute;
  top: -150px;
  left: 280px;

  @media (max-width: 600px) {
    top: -90px;
    left: 150px;
    height: 180px;
    width: 180px;
  }
`;

export default function SearchResults() {
  const weatherData = useSelector(
    (state: RootState) => state.searchHistory.weatherData[0]
  );

  return (
    <WeatherContainer>
      <WeatherTempContainer>
        <Text>Today's Weather</Text>
        <Text fontSize="h1" color="purple">
          {!weatherData ? 0 : weatherData.temp}°
        </Text>
        <Text>
          H:{!weatherData ? 0 : weatherData.maxTemp}° L:
          {!weatherData ? 0 : weatherData.minTemp}°
        </Text>
        <Text color="grey">
          {!weatherData ? "" : `${weatherData.name}, ${weatherData.country}`}
        </Text>
      </WeatherTempContainer>
      <AdditionalInfoContainer>
        <Image src={sunImage} alt="sun" />
        <Text color="grey">
          {!weatherData ? "" : formatTime(weatherData.timestamp)}
        </Text>
        <Text color="grey">
          Humidity: {!weatherData ? "" : weatherData.humidity}%
        </Text>
        <Text color="grey">Clouds</Text>
      </AdditionalInfoContainer>
    </WeatherContainer>
  );
}
