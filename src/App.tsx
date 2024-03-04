import { getWeatherData } from "api";
import SearchField from "components/SearchField";
import MainWrapper from "components/MainWrapper";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  // Set input as location keyed in
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Add click event handler and submit request to fetch data
  const handleClick = () => refetch();

  const { data, isError, error, refetch } = useQuery({
    queryKey: ["weatherData", input],
    queryFn: () => getWeatherData(input),
    retry: 1,
    enabled: false,
  });

  console.log("DATA: ", data, isError, error);

  return (
    <MainWrapper>
      <SearchField
        onChangeHandler={onChangeHandler}
        handleClick={handleClick}
      />
      {isError && <p>No weather data found for {input}....</p>}
    </MainWrapper>
  );
}

export default App;
