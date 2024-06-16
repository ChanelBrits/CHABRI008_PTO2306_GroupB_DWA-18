import { Menu, MenuItem } from "@mui/material"
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

interface Props {
    anchorEl: null | HTMLElement;
    setAnchorEl: (element: HTMLElement | null) => void;
    open: boolean;
  }

const StyledMenu = styled(Menu)({
    '& .MuiList-root': {
        backgroundColor: "#2b3232",
        color: "#dde4e4"
    }
})

export const SettingsModal:React.FC<Props> = ({ anchorEl, setAnchorEl, open }) => {
      const navigate = useNavigate();

      const handleClose = () => {
        setAnchorEl(null);
      };

      const handleFavouritesClick = () => {
        handleClose();
        navigate("/home/favourites");
      };

    return (
        <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'user-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleFavouritesClick}>Favourites</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </StyledMenu>
    )
}