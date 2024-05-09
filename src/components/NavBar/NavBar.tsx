import React from "react";
import styled from "@emotion/styled";
import { AppBar, Toolbar } from "@mui/material";

const StyledAppBar = styled(AppBar)`
  background-color: #343434;
  position: absolute;
  border-radius: 1.25rem;
`;

const StyledNav = styled("nav")`
  position: absolute;
  top: 1.875rem;
  right: 1.3rem;
  left: 1.25rem;
`;

export const NavBar = () => {
  return (
    <StyledNav>
      <StyledAppBar>
        <Toolbar></Toolbar>
      </StyledAppBar>
    </StyledNav>
  );
};
