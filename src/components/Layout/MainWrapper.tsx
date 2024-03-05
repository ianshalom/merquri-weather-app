import styled from "styled-components";
import { ChildrenProps } from "types";

const MainWrapper = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  @media (max-width: 600px) {
    width: 400px;
    padding: 20px;
  }
`;

export default function Wrapper({ children }: ChildrenProps) {
  return <MainWrapper>{children}</MainWrapper>;
}
