import { InputField } from "./UI/InputField";
import styled from "styled-components";
import { SearchIcon } from "./Icons/Search";
import { OnChangeHandlerProps } from "./UI/InputField";

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
      <span onClick={handleClick}>
        <SearchIcon />
      </span>
    </InputFieldWrapper>
  );
}
