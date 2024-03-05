import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResults from "./SearchResults";
import { useSelector, useDispatch } from "react-redux";
import {
  removeSearchResult,
  saveSearchResult,
} from "store/slices/searchHistorySlice";
import ListItem from "./UI/ListItem";
import type { RootState } from "store";
import useGetLocationData from "hooks/useGetLocationData";
import { WeatherDataProps } from "types";

const Wrapper = styled.div`
  width: 100%;
  border-radius: 40px;
  border: 1px solid #ffffff80;
  background: #ffffff33;
  margin-top: 100px;
  padding: 30px 40px;
  height: 800px;
`;

const SearchHistoryWrapper = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 24px;
  background: #ffffff33;
  margin-top: 30px;
`;

export default function SearchHistory() {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();

  const weatherData = useSelector(
    (state: RootState) => state.searchHistory.weatherData
  );

  const { data, refetch } = useGetLocationData(location);

  // Remove search result from store
  const handleRemoveSearchResultClick = (id: string) =>
    dispatch(removeSearchResult(id));

  // Hook to fetch location's weather data
  const handleSearchClick = (location: string) => {
    setLocation(location);
  };

  useEffect(() => {
    if (location) refetch();
  }, [location, refetch]);

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
    setLocation("");
  }, [data, dispatch]);

  return (
    <Wrapper>
      <SearchResults />
      {!weatherData?.length ? (
        <h1 style={{ textAlign: "center" }}>No Data Found</h1>
      ) : (
        <SearchHistoryWrapper>
          <p style={{ marginLeft: "4px" }}>Search History</p>
          {weatherData.map((w) => (
            <ListItem
              key={w.id}
              timestamp={w.timestamp}
              name={w.name}
              country={w.country}
              handleSearchClick={() => handleSearchClick(w.name)}
              handleRemoveSearchResultClick={() =>
                handleRemoveSearchResultClick(w.countryId)
              }
            />
          ))}
        </SearchHistoryWrapper>
      )}
    </Wrapper>
  );
}
