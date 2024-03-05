import React from "react";
import styled from "styled-components";
import Text from "./UI/Text";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary.purple};
  border: 2px solid white;
  color: #ffffff;
  border-radius: 30px;
  cursor: pointer;
  padding: 8px 15px;
  margin-left: 10px;
`;

interface ToggleButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isDarkMode: boolean;
}

export default function ToggleButton({
  onClick,
  children,
  isDarkMode,
}: ToggleButtonProps) {
  return (
    <ButtonContainer>
      <Text>{isDarkMode ? "Dark" : "Light"}</Text>
      {isDarkMode ? (
        <CiDark style={{ fontSize: "20px" }} />
      ) : (
        <CiLight style={{ fontSize: "20px" }} />
      )}
      <Button onClick={onClick}>{children}</Button>
    </ButtonContainer>
  );
}
