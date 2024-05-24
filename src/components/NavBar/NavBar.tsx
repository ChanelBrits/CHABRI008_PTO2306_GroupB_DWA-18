import React from "react";
import styled from "@emotion/styled";
import { AppBar, Toolbar } from "@mui/material";
import { UserIcon } from "./UserIcon"
import { Search } from "./Search";
import { Home } from "./Home";
import { SettingsModal } from "./SettingsModal";

const StyledNav = styled("nav")`
  position: absolute;
  top: 1.875rem;
  right: 1.3rem;
  left: 1.25rem;
  height: 4.5rem;
`;

const StyledAppBar = styled(AppBar)`
  background-color: #1A2121;
  position: absolute;
  border-radius: 0.625rem;
  height: 100%;
`;

const StyledToolbar = styled(Toolbar)`
  && {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center; 
`;

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleUserIcon = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    }

  return (
    <StyledNav>
      <StyledAppBar >
        <StyledToolbar>
          <Home></Home>
          <Search ></Search>
          <UserIcon 
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          open={open}
          ></UserIcon>
          {open && (<SettingsModal anchorEl={anchorEl} setAnchorEl={setAnchorEl} open={open} />)}
        </StyledToolbar>
      </StyledAppBar>
    </StyledNav>
  );
};

