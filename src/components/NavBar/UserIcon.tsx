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
interface Props {
  anchorEl: null | HTMLElement;
  setAnchorEl: (element: HTMLElement | null) => void;
  open: boolean
}


export const UserIcon:Props = ({anchorEl, setAnchorEl, open}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
    return (
        <StyledButton 
        onClick={handleClick}
        id="user-button"
        aria-controls={open ? 'user-button' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        >
            <StyledAvatar src="/static/images/default"/>
        </StyledButton>
    );
  };
  