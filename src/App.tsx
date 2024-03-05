import SearchField from "components/SearchField";
import MainWrapper from "components/MainWrapper";
import { useState, useEffect } from "react";
import SearchHistory from "components/SearchHistory";
import { useDispatch } from "react-redux";
import { saveSearchResult } from "store/slices/searchHistorySlice";
import useGetLocationData from "hooks/useGetLocationData";

function App() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  // Set input as location keyed in
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Add click event handler and submit request to fetch data
  const handleClick = () => refetch();

  const { data, isError, refetch } = useGetLocationData(input);

  useEffect(() => {
    if (!data) return;
    const {
      data: {
        id,
        name,
        sys: { country },
        main: { temp, temp_max, temp_min, humidity },
      },
    } = data;

    const weatherData = {
      id,
      temp,
      maxTemp: temp_max,
      minTemp: temp_min,
      name,
      humidity,
      timestamp: new Date().toLocaleString(),
      country,
    };

    dispatch(saveSearchResult(weatherData));
    setInput("");
  }, [data, dispatch]);

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
