import { Box, ButtonBase } from "@mui/material";
import styled from "@emotion/styled";

const FilterNav = styled(Box)({});

export const ListView = () => {
  return (
    <Box>
      <FilterNav>
        <ButtonBase>A-Z</ButtonBase>
        <ButtonBase>Date Updated</ButtonBase>
        <ButtonBase>Genre</ButtonBase>
      </FilterNav>
      <Box></Box>
    </Box>
  );
};
