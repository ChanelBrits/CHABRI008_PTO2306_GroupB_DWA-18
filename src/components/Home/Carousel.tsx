import React, { useState, useEffect } from "react";
import { IconButton, Box, Slide, Stack, Grid, styled, Typography} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const StyledIconButton = styled(IconButton)(({ theme, disabled }) => ({
  marginRight: "1rem",
  marginLeft: "1rem",
  display: "flex",
  alignItems: "center",
  color: disabled ? theme.palette.text.disabled : "#52f4ff",
}));

interface Carousel {
  title: string;
  cardsData: React.ReactElement[];
}

export const Carousel:React.FC<Carousel> = ({ title, cardsData }) => {
  const [cards, setCards] = useState<React.ReactElement[]>(cardsData);
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState<
    "right" | "left" | undefined
  >("left");

  const cardsPerPage = 5;

  useEffect(() => {
    setCards(cardsData);
    // eslint-disable-next-line
  }, [cardsData]);

  const handleNextPage = () => {
        setSlideDirection("left");
        setCurrentPage((prevPage) => prevPage + 1);
      };
    
      const handlePrevPage = () => {
        setSlideDirection("right");
        setCurrentPage((prevPage) => prevPage - 1);
      };

      const renderCards = () => {
        const startIndex = currentPage * cardsPerPage;
        const endIndex = Math.min(startIndex + cardsPerPage, cards.length);
        const visibleCards = cards.slice(startIndex, endIndex);

        return visibleCards.map((card, index) => (
          <Grid 
            item 
            // xs={12} 
            // sm={6} 
            // md={4} 
            // lg={3} 
            key={`card-${index}`}
            sx={{
              flex: "1 1 0",
              display: "flex",
              justifyContent: "center",
              margin: "0.5rem",
              minWidth: "0",
            }}
            >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                margin: "1rem",
              }}
            >
              <Slide direction={slideDirection} in={true}>
                <Stack 
                direction="row"
                sx={{
                  width: "100%", 
                  height: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
                >
                  {card}
                </Stack>
              </Slide>
            </Box>
          </Grid>
        ));
      };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography 
        variant="h4" 
        sx={{ color: "#fff", 
        marginLeft: "2.5rem" 
      }}
        >{title}</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            height: "20rem",
            maxWidth: "80%",
            marginTop: "40px",
            margin: "1rem",
            backgroundColor: "#1a2121",
            borderRadius: "2rem",
            overflow: "hidden",
          }}
        >
          <Grid 
            container
            spacing={2}
            sx={{
              flexGrow: 1,
              
            }}
            >

          <StyledIconButton
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            sx={{ 
              marginRight: "1rem" 
            }}
          >
          <ArrowBackIosIcon fontSize="large" sx={{color: "#52f4ff"}}/>
          </StyledIconButton>

            {renderCards()}
            
          </Grid>
          <StyledIconButton
              onClick={handleNextPage}
              disabled={
                currentPage >= Math.ceil((cards.length || 0) / cardsPerPage) - 1}
          >
            <ArrowForwardIosIcon fontSize="large" />
          </StyledIconButton>
      </Box>
    </Box>
  )
}