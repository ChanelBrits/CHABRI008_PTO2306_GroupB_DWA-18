import { Card, Typography, Box } from '@mui/material/'
import {faker} from "@faker-js/faker"
import styled from "@emotion/styled";

export type Show = {
    title: string;
    seasons: number;
    dateAdded: Date;
  }

  const StyledContainer= styled(Box)`
    width: 12rem;
    height: 18.75rem;
    border-radius: 1rem;
  `;

const StyledCard = styled(Card)`
    margin-top: 1rem;
    width: 10rem;
    height: 10rem;
    border-radius: 1rem;
`

const StyledCardContainer = styled(Box)`
    display: flex;
    justify-content: center;
`

const StyledImg = styled('img')`
    width: 100%;
    height: 100%;
`

const StyledShowInfo = styled(Box)`
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
`
const StyledShowContent = styled(Typography)`
  color: #BAC9CA;
`



export const Show = (props) => {
    const imageUrl = faker.image.url();
    const songName = faker.music.songName();
    const releaseDate = faker.date.recent()
    const formattedDate = releaseDate.toLocaleString('en-US', {month: 'short', year: 'numeric'})

    return (
        <StyledContainer>
            <StyledCardContainer>
                <StyledCard>
                    <StyledImg src={imageUrl}/>
                </StyledCard>
            </StyledCardContainer>
            <StyledShowInfo>
                <StyledShowTitle>{songName}</StyledShowTitle>
                <StyledShowContent>Seasons: {Math.trunc(Math.random() * 15)}</StyledShowContent>
                <StyledShowContent>{formattedDate}</StyledShowContent>
            </StyledShowInfo>
        </StyledContainer>
    )
}