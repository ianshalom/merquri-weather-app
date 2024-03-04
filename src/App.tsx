import { getWeatherData } from "api";
import SearchField from "components/SearchField";
import MainWrapper from "components/MainWrapper";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { data } = useQuery({
    queryKey: ["weatherData"],
    queryFn: getWeatherData,
  });
  console.log("DATA: ", data);

  return (
    <MainWrapper>
      <SearchField />
    </MainWrapper>
  );
}

export default App;
