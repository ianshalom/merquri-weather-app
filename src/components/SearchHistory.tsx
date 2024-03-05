import styled from "styled-components";
import SearchResults from "./SearchResults";
import { useSelector } from "react-redux";
import ListItem from "./UI/ListItem";
import type { RootState } from "store";

const Wrapper = styled.div`
  width: 100%;
  border-radius: 40px;
  border: 1px solid #ffffff80;
  background: #ffffff33;
  margin-top: 100px;
  padding: 30px 40px;
`;

const SearchHistoryWrapper = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 24px;
  background: #ffffff33;
  margin-top: 30px;
`;

export default function SearchHistory() {
  const weatherData = useSelector(
    (state: RootState) => state.searchHistory.weatherData
  );

  console.log("WEATHER DATA; ", weatherData);

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
            />
          ))}
        </SearchHistoryWrapper>
      )}
    </Wrapper>
  );
}
