import  { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import "./styles.css"
import {Episode } from "../../types"

const Wrapper = styled(Box)({
    backgroundColor: "#1a2121",
    display: "flex",
    flexDirection: "column",
})

// const TitleContainer = styled(Box)({
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "flex-start",
//     marginBottom: "0.5rem",
//     marginTop: "0.5rem",
// });

// const StyledTitle = styled(Typography)({
//     color: "#dde4e4",
//     marginLeft: "1rem",
// })

type props = {
    selectedAudio: string
    selectedEpisode: Episode
}

export const Player: React.FC<props> = ({ selectedAudio, selectedEpisode}) => {
    const [setIsPlaying] = useState(false);
    const [playerKey, setPlayerKey] = useState(Date.now());
    
    useEffect(() => {
        setPlayerKey(Date.now());
    }, [selectedEpisode]);

    return (
        <Wrapper>
            {/* <TitleContainer>
                <StyledTitle variant='subtitle1' sx={{ fontWeight: "600"}}>{selectedEpisode.title}</StyledTitle>
                <StyledTitle variant='subtitle2'>{selectedEpisode.showTitle}</StyledTitle>
            </TitleContainer> */}
            <AudioPlayer
                key={playerKey}
                autoPlay
                src={selectedAudio}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            ></AudioPlayer>
        </Wrapper>
    );
};


