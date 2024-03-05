import styled from "styled-components";
import type { RootState } from "store";
import { useSelector } from "react-redux";
import sunImage from "assets/sun.png";
import formatTime from "utils/getTimeOfDay";
import Text from "components/UI/Text";
import { useMediaQuery } from "usehooks-ts";
import { useContext } from "react";
import { ThemeContext } from "App";

const WeatherContainer = styled.div`
  display: flex;
  position: relative;
  background: ;
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
    align-items: flex-end;
  }
`;

const Image = styled.img`
  height: 310px;
  width: 310px;
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
  const isDarkTheme = useContext(ThemeContext);
  const isMobile = useMediaQuery("(max-width: 600px");

  const weatherData = useSelector(
    (state: RootState) => state.searchHistory.weatherData[0]
  );

  const themeColor = isDarkTheme ? "default" : "grey";

  return (
    <WeatherContainer>
      <WeatherTempContainer>
        <Text fontWeight="bold">Today's Weather</Text>
        <Text
          fontSize={isMobile ? "h2" : "h1"}
          color={isDarkTheme ? "default" : "purple"}
          fontWeight="bold"
        >
          {!weatherData ? 0 : weatherData.temp}°
        </Text>
        <Text>
          H:{!weatherData ? 0 : weatherData.maxTemp}° L:
          {!weatherData ? 0 : weatherData.minTemp}°
        </Text>
        <Text color={themeColor} fontWeight="bold">
          {!weatherData ? "" : `${weatherData.name}, ${weatherData.country}`}
        </Text>
      </WeatherTempContainer>
      <AdditionalInfoContainer>
        <Image src={sunImage} alt="sun" />
        <Text color={themeColor}>
          {!weatherData ? "" : formatTime(weatherData.timestamp)}
        </Text>
        <Text color={themeColor}>
          Humidity: {!weatherData ? 0 : weatherData.humidity}%
        </Text>
        <Text color={themeColor}>Clouds</Text>
      </AdditionalInfoContainer>
    </WeatherContainer>
  );
}
