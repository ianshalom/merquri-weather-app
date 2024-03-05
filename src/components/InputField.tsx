import styled from "styled-components";

const StyledInputField = styled.input`
  background: ${({ theme }) => theme.background.primary};
  border-radius: 20px;
  padding: 15px 20px;
  font-size: inherit;
  border: none;
  width: 100%;
  margin-right: 20px;
  height: 60px;
`;
export interface OnChangeHandlerProps {
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export function InputField({ onChangeHandler, value }: OnChangeHandlerProps) {
  return (
    <StyledInputField
      placeholder="City"
      onChange={onChangeHandler}
      value={value}
    />
  );
}
