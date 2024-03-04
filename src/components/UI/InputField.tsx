import styled from "styled-components";

const StyledInputField = styled.input`
  background: #ffffff33;
  border-radius: 20px;
  padding: 15px 20px;
  font-size: inherit;
  border: none;
  width: 600px;
`;

export function InputField() {
  return <StyledInputField placeholder="City" />;
}
