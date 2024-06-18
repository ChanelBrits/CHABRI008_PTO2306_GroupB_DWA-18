import { Box, Button, Typography, IconButton } from "@mui/material"
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import styled from "@emotion/styled";
import { useStore } from "zustand";
import { useEffect } from "react"


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
  
  const EpisodeBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#1e272e',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '0.5rem',
    position: 'relative',
  });
  
  const EpisodeTitle = styled(Typography)({
    color: '#52f4ff',
    fontSize: '1rem',
  });
  
  const EpisodeInfo = styled(Typography)({
    color: '#ccc',
    fontSize: '0.8rem',
  });
  
  const RemoveButton = styled(IconButton)({
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
    color: '#ff4c4c',
  });
  
  const ShareButton = styled(Button)({
    color: '#52f4ff',
    borderRadius: '2rem',
    padding: '0.5rem 1rem',
    justifySelf: 'right',
    '&:hover': {
      backgroundColor: "#52f4ff",
      color: "#2b3232",
    },
  });
  

export const FavouritesView = () => {
    const favourites = useStore(state => state.favourites);
    const fetchFavourites = useStore(state => state.fetchFavourites);

    useEffect(() => {
        fetchFavourites();
      }, []);
      console.log("favourites", favourites)

    return (
        <Wrapper>
        <FilterNav>
          <FilterButton></FilterButton>
          <FilterButton></FilterButton>
          <ShareButton>
            <ShareIcon/>
          </ShareButton>
        </FilterNav>
        {/* <ShowGrid>
          {favourites.map((fav) => (
            <EpisodeBox key={fav.episode_id}>
              <EpisodeTitle>{fav.title}</EpisodeTitle>
              <EpisodeInfo>{fav.show_title} - Season {fav.season}</EpisodeInfo>
              <EpisodeInfo>Added: {new Date(fav.created_at).toLocaleString()}</EpisodeInfo>
              <RemoveButton onClick={() => removeFavourite(fav.episode_id)}>
                <DeleteIcon />
              </RemoveButton>
            </EpisodeBox>
          ))}
        </ShowGrid>
        {sharedLink && (
          <Box>
            <Typography variant="h6">Shareable Link:</Typography>
            <Typography variant="body1">{sharedLink}</Typography>
          </Box>
        )} */}
      </Wrapper>
    )
}

