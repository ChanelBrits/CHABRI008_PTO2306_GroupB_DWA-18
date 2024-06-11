import { Box, Button } from "@mui/material";
import  SouthIcon  from '@mui/icons-material/South';
import  NorthIcon  from '@mui/icons-material/North';
import styled from "@emotion/styled";
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
import Fuse from 'fuse.js';
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

const ShowGrid = styled(Box)({
  width: "100%",
  height: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", 
  gap: "0.5rem",
  overflowY: "auto",
});

export const ListView = ({phase, list, handleShowClick}) => {
  const [nameOrder, setNameOrder] = useState<"ascending" | "descending">("ascending");
  const [dateOrder, setDateOrder] = useState<"ascending" | "descending">("ascending");
  const [filteredShows, setFilteredShows] = useState(list);

  const fuseOptions = {
    keys: ['title'], 
    threshold: 0.4, 
    includeScore: true, 
  };

  const fuse = new Fuse(list, fuseOptions);

  const location = useLocation();
  const searchInput = location.state?.search || "";
  
  useEffect(() => {
    let filteredResults = list;

    if (searchInput !== "") {
      const results = fuse.search(searchInput);
      filteredResults = results.map(({ item }) => item);
      
    } 

    setFilteredShows(filteredResults);
  },[searchInput])

  console.log(filteredShows)

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
      <ShowGrid>
      {filteredShows.map((show) => (
          <Show
            key={show.id}
            id={show.id}
            image={show.image}
            title={show.title}
            seasons={show.seasons}
            dateAdded={new Date(show.updated)}
            phase={phase}
            handleShowClick={handleShowClick}
          />
        ))}
      </ShowGrid>
    </Wrapper>
  );
};
