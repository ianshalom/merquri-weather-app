import styled from "styled-components";

const MainWrapper = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 20px 0;
`;

interface Props {
  children: React.ReactNode;
}

export default function Wrapper({ children }: Props) {
  return <MainWrapper>{children}</MainWrapper>;
}
