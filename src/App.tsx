import { getWeatherData } from "api";
import SearchField from "components/SearchField";
import MainWrapper from "components/MainWrapper";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import SearchHistory from "components/SearchHistory";
import { useDispatch } from "react-redux";
import { saveSearchResult } from "store/slices/searchHistorySlice";

function App() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
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
      humidity: data.data.main.humidity,
      timestamp: new Date().toLocaleString(),
      country: data.data.sys.country,
    };

    console.log("weatherData: ", weatherData);

    dispatch(saveSearchResult(weatherData));
    setInput("");
  }, [data, dispatch]);

  console.log("DATA: ", data);

  return (
    <MainWrapper>
      <SearchField
        onChangeHandler={onChangeHandler}
        handleClick={handleClick}
        value={input}
      />
      {isError && <p>No weather data found for {input}....</p>}
      <SearchHistory />
    </MainWrapper>
  );
}

export default App;
