import { Avatar, Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledButton = styled(Button)`
  && {
    padding: 0;
    margin-left: 1rem;
    min-width: 2.75rem;
    height: 2.75rem;
    border-radius: 1rem;
    border: none;
  }
`

const StyledAvatar = styled(Avatar)`
  background-color: #2B3232;
  color: #004F54;
  border-radius: 1rem;
  width: 100%;
  height: 100%;
`

export const UserIcon = () => {
    return (
        <StyledButton>
            <StyledAvatar src="/static/images/default"/>
        </StyledButton>
    );
  };
  