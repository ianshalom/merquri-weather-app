import styled from "styled-components";
import { ChildrenProps } from "types";

const MainWrapper = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 20px 0;
`;

export default function Wrapper({ children }: ChildrenProps) {
  return <MainWrapper>{children}</MainWrapper>;
}
