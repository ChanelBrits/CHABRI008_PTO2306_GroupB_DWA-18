import { Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledHomeButton = styled(Button)`
    && {
      margin-right: 1rem;
    }
    width: 4rem;
    height: 4rem;
    padding: 0;
`

const StyledHomeIcon = styled('img')`
    width: 100%;
    height: 100%

`


export const Home = () => {
    return (
      <StyledHomeButton>
        <StyledHomeIcon src="./public/NovaCast.png"/>
      </StyledHomeButton>
    );
  };