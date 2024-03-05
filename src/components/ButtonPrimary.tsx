import React from "react";
import { SearchIcon } from "components/Icons/Search";
import { useTheme } from "styled-components";

export default function ButtonPrimary({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const theme = useTheme();
  return (
    <span onClick={onClick}>
      <SearchIcon color={theme.colors.primary.purple} />
    </span>
  );
}
