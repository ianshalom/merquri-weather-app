import styled from "styled-components";
import type { WeatherDataProps } from "types";
import { MdDelete } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import formatTime from "utils/getTimeOfDay";
import { useMediaQuery } from "usehooks-ts";
import Text from "components/UI/Text";

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

const IconWrapper = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const DeleteIcon = styled(MdDelete)`
  font-size: 1.2em;
`;

const SearchIcon = styled(IoSearchSharp)`
  font-size: 1.2em;
`;

type ListDataProps = Pick<WeatherDataProps, "timestamp" | "name" | "country">;

type HandleClickProps = {
  handleRemoveSearchResultClick: React.MouseEventHandler<HTMLDivElement>;
  handleSearchClick: React.MouseEventHandler<HTMLDivElement>;
};

type ListItemProps = ListDataProps & HandleClickProps;
export default function ListItem({
  timestamp,
  name,
  country,
  handleRemoveSearchResultClick,
  handleSearchClick,
}: ListItemProps) {
  const isMobile = useMediaQuery("(max-width: 600px");

  return (
    <ListContainer>
      {isMobile ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Text fontSize={isMobile ? "body" : "title"}>
            {name}, {country}
          </Text>
          <Text fontSize={isMobile ? "caption" : "title"}>
            {formatTime(timestamp)}
          </Text>
        </div>
      ) : (
        <Text fontSize={isMobile ? "body" : "title"}>
          {name}, {country}
        </Text>
      )}

      <IconContainer>
        {isMobile ? null : (
          <Text fontSize={isMobile ? "body" : "title"}>
            {formatTime(timestamp)}
          </Text>
        )}
        <IconWrapper onClick={handleSearchClick}>
          <SearchIcon />
        </IconWrapper>
        <IconWrapper onClick={handleRemoveSearchResultClick}>
          <DeleteIcon />
        </IconWrapper>
      </IconContainer>
    </ListContainer>
  );
}
