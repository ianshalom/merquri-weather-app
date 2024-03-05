import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResults from "./SearchResults";
import { useSelector, useDispatch } from "react-redux";
import {
  removeSearchResult,
  saveSearchResult,
} from "store/slices/searchHistorySlice";
import ListItem from "../components/ListItem";
import type { RootState } from "store";
import useGetLocationData from "hooks/useGetLocationData";
import { WeatherDataProps } from "types";
import Text from "components/UI/Text";

const Wrapper = styled.div`
  width: 100%;
  border-radius: 40px;
  border: 1px solid ${({ theme }) => theme.background.primary};
  background: ${({ theme }) => theme.background.primary};
  margin-top: 150px;
  padding: 30px 40px;

  @media (max-width: 600px) {
    padding: 25px 20px;
    margin-top: 100px;
  }
`;

const SearchHistoryWrapper = styled.div`
  width: 100%;
  padding: 20px 10px;
  border-radius: 24px;
  background: ${({ theme }) => theme.background.primary};
  margin-top: 15px;
  overflow-y: scroll;
  height: 500px;
  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
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
      <SearchHistoryWrapper>
        {!weatherData?.length ? (
          <div style={{ textAlign: "center" }}>
            <Text fontSize="h3">No Data Found</Text>
          </div>
        ) : (
          <>
            <div style={{ padding: "5px 8px" }}>
              <Text fontWeight="bold">Search History</Text>
            </div>
            {weatherData.map((w) => (
              <ListItem
                key={w.id}
                timestamp={w.timestamp}
                name={w.name}
                country={w.country}
                handleSearchClick={() => handleSearchClick(w.name)}
                handleRemoveSearchResultClick={() =>
                  handleRemoveSearchResultClick(w.id)
                }
              />
            ))}
          </>
        )}
      </SearchHistoryWrapper>
    </Wrapper>
  );
}
