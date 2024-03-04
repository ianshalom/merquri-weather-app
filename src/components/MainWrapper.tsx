import styled from "styled-components";

const MainWrapper = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 20px 0;
`;

export default function Wrapper({ children }) {
  return <MainWrapper>{children}</MainWrapper>;
}
