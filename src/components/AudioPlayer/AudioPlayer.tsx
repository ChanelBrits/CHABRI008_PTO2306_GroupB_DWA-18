import  { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import "./styles.css"

const Wrapper = styled(Box)({
    backgroundColor: "#1a2121",
    display: "flex",
    flexDirection: "column",
})

const TitleContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: "0.5rem",
    marginTop: "0.5rem",
});

const StyledTitle = styled(Typography)({
    color: "#dde4e4",
    marginLeft: "1rem",
})

export const Player = ({ selectedAudio, selectedEpisode}) => {
    const [isPlaying, setIsPlaying] = useState(false);

    // useEffect(() => {
    //     if (selectedAudio) {
    //         setIsPlaying(true);
    //     }
    // }, [selectedAudio]);

    return (
        <Wrapper>
            {/* <TitleContainer>
                <StyledTitle variant='subtitle1' sx={{ fontWeight: "600"}}>{selectedEpisode.title}</StyledTitle>
                <StyledTitle variant='subtitle2'>{selectedEpisode.showTitle}</StyledTitle>
            </TitleContainer> */}
            <AudioPlayer
                autoPlay
                src={selectedAudio}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            ></AudioPlayer>
        </Wrapper>
    );
};


