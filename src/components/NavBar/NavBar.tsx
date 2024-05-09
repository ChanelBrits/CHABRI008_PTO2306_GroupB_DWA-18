import React from 'react';
import styled from "@emotion/styled"
import {Box, AppBar, Toolbar } from '@mui/material';

const StyledBox = styled(Box)`
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    min-height: 56px;
`

const StyledToolbar = styled(Toolbar)`
  background-color: #343434;
  
`

export const NavBar = () => {
  return (
    <nav>
      <StyledBox>
        <AppBar>
          <StyledToolbar></StyledToolbar>
        </AppBar>
      </StyledBox>
    </nav>
  )
}