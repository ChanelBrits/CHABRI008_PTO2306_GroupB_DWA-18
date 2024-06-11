import { Box, Button } from "@mui/material";
import  SouthIcon  from '@mui/icons-material/South';
import  NorthIcon  from '@mui/icons-material/North';
import styled from "@emotion/styled";
import { NavBar } from "../NavBar/NavBar";
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
import { Show } from "../Home/Show";

const Wrapper = styled(Box)({
  backgroundColor: "#0e1515",
  width: "75%",
  height: "100vh",
  marginTop: "7rem",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "right",
  alignItems: "center",
  marginLeft: "auto"
});

const FilterNav = styled(Box)({
  display: "flex",
  alignContent: "center",
  gap: "1rem",
  paddingTop: "6rem",
  paddingLeft: "1rem", 
});

const FilterButton = styled(Button)({
  color: "#52f4ff",
  borderRadius: "2rem",
  padding: "0.5rem 1rem",
  '&:hover': {
    backgroundColor: "#52f4ff",
    color: "#2b3232",
  },
});

const UpArrow = styled(NorthIcon)({
  fontSize: "1.1rem",
  paddingRight: "0.2rem"
})

const DownArrow = styled(SouthIcon)({
  fontSize: "1.1rem",
  paddingRight: "0.2rem"
})

export const ListView = ({phase, list}) => {
  
  const [nameOrder, setNameOrder] = useState<"ascending" | "descending">("ascending");
  const [dateOrder, setDateOrder] = useState<"ascending" | "descending">("ascending");
  const [filteredShows, setFilteredShows] = useState(list);

  const location = useLocation();
  const searchInput = location.state?.search || "";
  console.log(searchInput)

  const toggleNameOrder = () => {
    setNameOrder((prevOrder) => (prevOrder === "ascending" ? "descending" : "ascending"));
  };

  const toggleDateOrder = () => {
    setDateOrder((prevOrder) => (prevOrder === "ascending" ? "descending" : "ascending"));
  };

  return (
    <Wrapper>
      <FilterNav>
        <FilterButton onClick={toggleNameOrder}>{nameOrder === "ascending" ? "A - Z" : "Z - A"}</FilterButton>
        <FilterButton onClick={toggleDateOrder}>
          {dateOrder === "ascending" ? <UpArrow/> : <DownArrow/>}
          Date Updated</FilterButton>
        <FilterButton>Genre</FilterButton>
      </FilterNav>
      <Box>
      {/* {filteredShows.map(show => (
          <Show
            key={show.id}
            list={list}
            phase={phase}
          />
        ))} */}
      </Box>
    </Wrapper>
  );
};
