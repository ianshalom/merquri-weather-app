import React from "react";
import { SearchIcon } from "components/Icons/Search";

export default function ButtonPrimary({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <span onClick={onClick}>
      <SearchIcon />
    </span>
  );
}
