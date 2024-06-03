import { Box } from "@mui/material"
import styled from "@emotion/styled"
import { Carousel } from "./Carousel"
import { Show } from "./Show"
import { Store } from "../../data/store/store"

const StyledBox = styled(Box)({
    backgroundColor: "#0e1515",
    height: '100vh',
    width: '75%',
    marginTop: "6.5rem",
    overflow: 'hidden', 
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
    marginLeft: 'auto'
})


export const MainContent= ({phase, list}: Store) => {
    const showCards = list.map((show) => (
        <Show
            key={show.id}
            image={show.image}
            title={show.title}
            seasons={show.seasons}
            dateAdded={new Date(show.updated)}
        />
    ));

    return (
        <StyledBox>
            <Carousel
                title="Recommended Shows"
                cardsData={showCards}
            >
            </Carousel>
            {/* <Carousel></Carousel>
            <Carousel></Carousel> */}
        </StyledBox>
    )
}