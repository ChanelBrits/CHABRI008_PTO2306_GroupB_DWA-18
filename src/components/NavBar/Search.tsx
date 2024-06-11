import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import { useState } from "react";
import { Store } from "../../data/store/store";
import { useNavigate } from "react-router-dom";

const SearchBar = styled("div")`
  display: flex;
  align-items: center;
  background-color: #2b3232;
  border-radius: 0.625rem;
  height: 2.5rem;
  width: 92%;
`;

const StyledInputBase = styled(InputBase)`
  flex: 1;
  padding-left: 0.5rem;
`;
const SearchIconWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
`;

export const Search = ({ phase, list }) => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = () => {
    navigate("/home/list-view", {state: {search: searchInput}})
  };

  return (
    <SearchBar>
      <SearchIconWrapper>
        <SearchIcon fontSize="medium" />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search..."
        inputProps={{ "aria-label": "search", style: { color: "white" } }}
        value={searchInput}
        onChange={() => handleSearchChange(event)}
        onKeyDown={(e) => {
          if (e.key === "Enter")
            handleSubmit();
          }}
      ></StyledInputBase>
    </SearchBar>
  );
};
