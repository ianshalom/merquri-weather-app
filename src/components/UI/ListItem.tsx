import styled from "styled-components";
import type { WeatherDataProps } from "types";
import { MdDelete } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
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

const IconWrapper = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
`;

const DeleteIcon = styled(MdDelete)`
  font-size: 1.2em;
`;

const SearchIcon = styled(IoSearchSharp)`
  font-size: 1.2em;
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
        <IconWrapper>
          <SearchIcon />
        </IconWrapper>
        <IconWrapper>
          <DeleteIcon />
        </IconWrapper>
      </IconContainer>
    </ListContainer>
  );
}
