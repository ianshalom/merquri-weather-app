import { InputField } from "./UI/InputField";
import styled from "styled-components";
import { SearchIcon } from "./Icons/SearchIcon";

const InputFieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function SearchField() {
  return (
    <InputFieldWrapper>
      <InputField />
      <SearchIcon />
    </InputFieldWrapper>
  );
}
