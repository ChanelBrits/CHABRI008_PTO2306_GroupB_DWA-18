import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { Carousel } from "./Carousel";
import { Show } from "./Show";
import { Store } from "../../data/store/store";

const StyledBox = styled(Box)({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "auto",
});

export const HomeView = ({ phase, list, handleShowClick }: any) => {
  const showCards = list.map((show) => (
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
  ));

  return (
    <StyledBox>
      <Carousel title="Recommended Shows" cardsData={showCards}></Carousel>
      {/* <Carousel></Carousel>
            <Carousel></Carousel> */}
    </StyledBox>
  );
};
