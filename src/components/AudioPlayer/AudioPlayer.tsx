import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import "./styles.css"

const Wrapper = styled(Box)({
    backgroundColor: "#1a2121"
    
})

const StyledTitle = styled(Typography)({
    color: "#dde4e4",
    marginLeft: "2rem",
})

export const Player = ({ selectedAudio }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const showName = "Sample Show";
    const episodeName = "Sample Episode";

    return (
        <Wrapper>
            <StyledTitle variant='subtitle1' sx={{paddingTop: "1rem", fontWeight: "600"}}>{episodeName}</StyledTitle>
            <StyledTitle variant='subtitle2'>{showName}</StyledTitle>
            <AudioPlayer
                autoPlay
                src={selectedAudio}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            ></AudioPlayer>
        </Wrapper>
    );
};


