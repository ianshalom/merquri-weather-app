import { InputField } from "./UI/InputField";
import styled from "styled-components";
import { SearchPrimaryIcon } from "./Icons/SearchPrimaryIcon";
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
}: HandleClickProps) {
  return (
    <InputFieldWrapper>
      <InputField onChangeHandler={onChangeHandler} />
      <span onClick={handleClick}>
        <SearchPrimaryIcon />
      </span>
    </InputFieldWrapper>
  );
}
