import styled from "styled-components";

const StyledInputField = styled.input`
  background: #ffffff33;
  border-radius: 20px;
  padding: 15px 20px;
  font-size: inherit;
  border: none;
  width: 600px;
  height: 60px;
`;
export interface OnChangeHandlerProps {
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputField({ onChangeHandler }: OnChangeHandlerProps) {
  return <StyledInputField placeholder="City" onChange={onChangeHandler} />;
}
