import { Button } from "@mui/material";
import styled from "@emotion/styled";

// const SearchBar = styled('div')`
//     display: flex;
//     align-items: center;
//     background-color: #474747;
//     border-radius: 0.625rem;
//     height: 2.5rem;
//     width: 92%;
// `

// const StyledInputBase = styled(InputBase)`
//     flex: 1;
//     padding-left: 0.5rem;
// `
// const SearchIconWrapper = styled('div')`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 0 0.5rem;
// `

const StyledHome = styled('img')`
    width: 4rem;
    padding-right: 0.5rem;
`


export const Home = () => {
    return (
      <Button>
        <StyledHome src="./public/NovaCast.png"/>
      </Button>
    );
  };