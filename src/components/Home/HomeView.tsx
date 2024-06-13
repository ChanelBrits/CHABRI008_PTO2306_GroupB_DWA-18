import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { Carousel } from "./Carousel";
import { Show } from "./Show";
import { useNavigate } from "react-router-dom";

const StyledBox = styled(Box)({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  marginLeft: "auto",
});

export const HomeView = ({ phase, list, handleShowClick }: any) => {
  const navigate = useNavigate();
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

  const sortedShowCards = [...showCards].sort((a, b) =>
    a.props.title.localeCompare(b.props.title)
  );

  return (
    <StyledBox>
      <Carousel title="Recommended Shows" cardsData={showCards}></Carousel>
      <Carousel title="Subscriptions" cardsData={sortedShowCards}></Carousel>
    </StyledBox>
  );
};
