import styled from "styled-components";
import type { WeatherDataProps } from "types";
import { SearchIcon } from "components/Icons/SearchIcon";
import { DeleteIcon } from "components/Icons/DeleteIcon";

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  background: #ffffff66;
  padding: 10px 15px;
  margin: 10px 0;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  font-size: 0.875em;
`;

type ListDataProps = Pick<WeatherDataProps, "timestamp" | "name" | "country">;

export default function ListItem({ timestamp, name, country }: ListDataProps) {
  return (
    <ListContainer>
      <Text>
        {name}, {country}
      </Text>
      <IconContainer>
        <Text>{timestamp}am</Text>
        <SearchIcon />
        <DeleteIcon />
      </IconContainer>
    </ListContainer>
  );
}
