import {Card, Typography} from '@mui/material/'
import {faker} from "@faker-js/faker"
import styled from "@emotion/styled";

export type Show = {
    title: string;
    seasons: number;
    dateAdded: Date;
  }

  const StyledContainer= styled('div')`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 12rem;
        height: 17rem;
        border-radius: 1rem;
        background-color: grey;
`

const StyledCard = styled(Card)`
        margin-top: 1rem;
        width: 11.25rem;
        height: 11.25rem;
        border-radius: 1rem;
`

const StyledImg = styled('img')`
    width: 100%;
    height: 100%;
`

export const Show = () => {
    const imageUrl = faker.image.url();
    const songName = faker.music.songName();
    const releaseDate = faker.date.recent().toLocaleDateString();

    return (
        <StyledContainer>
            <StyledCard>
                <StyledImg src={imageUrl}/>
            </StyledCard>
            <Typography>{songName}</Typography>
            <Typography>Seasons: {Math.trunc(Math.random() * 15)}</Typography>
            <Typography>Release Date: {releaseDate}</Typography>
        </StyledContainer>
    )
}