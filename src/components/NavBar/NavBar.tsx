import React from "react";
import styled from "@emotion/styled";
import { AppBar, Toolbar } from "@mui/material";
import { UserIcon } from "./UserIcon"
import { Search } from "./Search";
import { Home } from "./Home";

const StyledNav = styled("nav")`
  position: absolute;
  top: 1.875rem;
  right: 1.3rem;
  left: 1.25rem;
  height: 5rem;
`;

const StyledAppBar = styled(AppBar)`
  background-color: #343434;
  position: absolute;
  border-radius: 0.625rem;
  height: 100%;
`;

const StyledToolbar = styled(Toolbar)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  padding-left: 0;
  padding-right: 0;
`;


export const NavBar = () => {
  return (
    <StyledNav>
      <StyledAppBar>
        <StyledToolbar>
          <Home></Home>
          <Search></Search>
          <UserIcon></UserIcon>
        </StyledToolbar>
      </StyledAppBar>
    </StyledNav>
  );
};

