import styled from "styled-components";
import SearchResults from "./SearchResults";

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 40px;
  border: 1px solid #ffffff80;
  background: #ffffff33;
  margin-top: 100px;
  padding: 30px 40px;
`;

export default function SearchHistory() {
  return (
    <Wrapper>
      <SearchResults />
    </Wrapper>
  );
}
