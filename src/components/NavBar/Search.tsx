import { InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import styled from "@emotion/styled";

const SearchBar = styled('div')`
    display: flex;
    align-items: center;
    background-color: #2B3232;
    border-radius: 0.625rem;
    height: 2.5rem;
    width: 92%;
`

const StyledInputBase = styled(InputBase)`
    flex: 1;
    padding-left: 0.5rem;
`
const SearchIconWrapper = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
`


export const Search = () => {
    return (
      <SearchBar>
        <SearchIconWrapper>
            <SearchIcon fontSize="medium" color="secondary"/>
        </SearchIconWrapper>
        <StyledInputBase placeholder="Search..." inputProps={{ 'aria-label': 'search', style: { color: 'white' }}}></StyledInputBase>
      </SearchBar>
    );
  };