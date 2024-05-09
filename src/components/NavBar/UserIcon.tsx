import { Avatar, Button } from "@mui/material";
import styled from "@emotion/styled";


const StyledAvatar = styled(Avatar)`
  background-color: #474747;
  color: #343434;
  border-radius: 1rem;
  width: 3.125rem;
  height: 3.125rem;
`

const StyledButton = styled(Button)`
  border-radius: 1rem;
  border: none;
  width: 3.125rem;
  height: 3.125rem;
`



export const UserIcon = () => {
    return (
      <div>
        <StyledButton>
            <StyledAvatar src="/static/images/default" />
        </StyledButton>
      </div>
    );
  };
  