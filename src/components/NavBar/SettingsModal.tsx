import { Menu, MenuItem } from "@mui/material"
import styled from "@emotion/styled";

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
      const handleClose = () => {
        setAnchorEl(null);
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
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </StyledMenu>
    )
}