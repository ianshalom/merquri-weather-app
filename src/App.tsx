import { getWeatherData } from "api";
import SearchField from "components/SearchField";
import MainWrapper from "components/MainWrapper";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import SearchHistory from "components/SearchHistory";
import { WeatherDataProps } from "types";

function App() {
  const [input, setInput] = useState("");
  const [searchHistory, setSearchHistory] = useState<WeatherDataProps[]>([]);

  // Set input as location keyed in
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Add click event handler and submit request to fetch data
  const handleClick = () => refetch();

  const { data, isError, refetch } = useQuery({
    queryKey: ["weatherData", input],
    queryFn: () => getWeatherData(input),
    retry: 1,
    enabled: false,
  });

  useEffect(() => {
    if (!data) return;
    const weatherData = {
      id: data.data.id,
      temp: data.data.main.temp,
      maxTemp: data.data.main.temp_max,
      minTemp: data.data.main.temp_min,
      name: data.data.name,
      country: data.data.sys.country,
    };
    setSearchHistory([...searchHistory, weatherData]);
  }, [data, setSearchHistory]);

  console.log("searchHistory: ", searchHistory);

  return (
    <MainWrapper>
      <SearchField
        onChangeHandler={onChangeHandler}
        handleClick={handleClick}
      />
      {isError && <p>No weather data found for {input}....</p>}
      <SearchHistory />
    </MainWrapper>
  );
}

export default App;
