import SearchField from "containers/SearchField";
import MainWrapper from "components/Layout/MainWrapper";
import { useState, useEffect } from "react";
import SearchHistory from "containers/SearchHistory";
import { useDispatch } from "react-redux";
import { saveSearchResult } from "store/slices/searchHistorySlice";
import useGetLocationData from "hooks/useGetLocationData";
import { WeatherDataProps } from "types";
import Text from "components/UI/Text";
import Spinner from "components/Spinner";
import ToggleButton from "components/ToggleButton.js";

function Home({
  onClick,
  isDarkMode,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isDarkMode: boolean;
}) {
  const [input, setInput] = useState("");
  const [submitStatus, setSubmitStatus] = useState(false);

  const dispatch = useDispatch();
  // Set input as location keyed in
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Add click event handler and submit request to fetch data
  const handleClick = () => {
    refetch();
    setSubmitStatus(true);
  };

  const { data, isError, refetch, isFetching } = useGetLocationData(input);

  useEffect(() => {
    // Add handler to prevent react query from serving cached data
    if (!submitStatus) return;
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
      id: crypto.randomUUID(),
      countryId: id,
      temp,
      maxTemp: temp_max,
      minTemp: temp_min,
      name,
      humidity,
      timestamp: new Date().toLocaleString(),
      country,
    } as WeatherDataProps;
    dispatch(saveSearchResult(weatherData));
    setInput("");
    setSubmitStatus(false);
  }, [data, dispatch, submitStatus]);

  return (
    <MainWrapper>
      <ToggleButton onClick={onClick} isDarkMode={isDarkMode}>
        Toggle theme
      </ToggleButton>
      <SearchField
        onChangeHandler={onChangeHandler}
        handleClick={handleClick}
        value={input}
      />
      {isFetching && <Spinner />}
      {isError && (
        <Text color="danger">No weather data found for {input}....</Text>
      )}
      <SearchHistory />
    </MainWrapper>
  );
}

export default Home;
