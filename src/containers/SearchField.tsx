import { InputField } from "../components/InputField";
import styled from "styled-components";
import { OnChangeHandlerProps } from "../components/InputField";
import ButtonPrimary from "../components/ButtonPrimary";
const InputFieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface HandleClickProps extends OnChangeHandlerProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SearchField({
  onChangeHandler,
  handleClick,
  value,
}: HandleClickProps) {
  return (
    <InputFieldWrapper>
      <InputField onChangeHandler={onChangeHandler} value={value} />
      <ButtonPrimary onClick={handleClick} />
    </InputFieldWrapper>
  );
}
