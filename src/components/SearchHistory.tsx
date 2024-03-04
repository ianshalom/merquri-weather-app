import styled from "styled-components";
import { ChildrenProps } from "types";

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 40px;
  border: 1px solid #ffffff80;
  background: #ffffff33;
  margin-top: 100px;
  padding: 20px;
`;

export default function SearchHistory({ children }: ChildrenProps) {
  return <Wrapper>{children}</Wrapper>;
}
