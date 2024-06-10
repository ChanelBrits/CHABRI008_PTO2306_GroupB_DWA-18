import { Card, Typography, Box, Skeleton } from "@mui/material/"
import { useStore } from "zustand"
import styled from "@emotion/styled";
import { Store } from "../../data/store/store"

  const StyledContainer= styled(Box)`
    flex: 1;
    max-width: 10rem;
    height: 100%;
    border-radius: 1rem;

    @media (max-width: 600px) {
        max-width: 8rem;
    }

    @media (max-width: 400px) {
        max-width: 6rem;
    }
  `;

const StyledCard = styled(Card)`
    width: 100%;
    height: auto;
    border-radius: 1rem;
    overflow: hidden;
` 

const StyledCardContainer = styled(Box)`
    display: flex;
    justify-content: center;
    min-width: 10rem;
`

const StyledImg = styled('img')`
    width: 100%;
    max-width: 10rem;
    height: 100%;
    object-fit: cover;
`

const StyledShowInfo = styled(Box)`
    width: 100%,
    margin-top: 0.7rem;
    margin-left: 1rem;
    font-family: "Quicksand", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #dde4e4;
`
const StyledShowTitle = styled(Typography)`
  font-weight: 700;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const StyledShowContent = styled(Typography)`
  color: #BAC9CA;
`

interface ShowProps {
    id: number
    image: string
    title: string
    seasons: number
    dateAdded: Date
    phase: "LISTING" | "LOADING" | "ERROR";
    handleShowClick: (id: string) => void;
}

export const Show = (props) => {
    const { list, phase, handleShowClick } = props
    const { id, image, title, seasons, dateAdded } = list

    const formattedDate = dateAdded.toLocaleString('en-US', {month: 'short', year: 'numeric'})

    if (phase === "LOADING") {
        return (
            <StyledContainer>
                <StyledCardContainer>
                    <StyledCard>
                        <Skeleton variant="rectangular" width="100%" height="100%" />
                    </StyledCard>
                </StyledCardContainer>
                <StyledShowInfo>
                    <Skeleton variant="text" width="80%" />
                    <Skeleton variant="text" width="60%" />
                    <Skeleton variant="text" width="40%" />
                </StyledShowInfo>
            </StyledContainer>
        )
    }

    return (
        <StyledContainer onClick={()=> handleShowClick(id.toString())}>
            <StyledCardContainer>
                <StyledCard>
                    <StyledImg src={image}/>
                </StyledCard>
            </StyledCardContainer>
            <StyledShowInfo>
                <StyledShowTitle>{title}</StyledShowTitle>
                <StyledShowContent>Seasons: {seasons}</StyledShowContent>
                <StyledShowContent>{formattedDate}</StyledShowContent>
            </StyledShowInfo>
        </StyledContainer>
    )
}