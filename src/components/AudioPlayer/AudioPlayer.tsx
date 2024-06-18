import  { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
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

type props = {
    selectedAudio: string
    selectedEpisode: Episode
}

export const Player: React.FC<props> = ({ selectedAudio, selectedEpisode}) => {
    // eslint-disable-next-line
    const [isPlaying, setIsPlaying] = useState(false);
    const [playerKey, setPlayerKey] = useState(Date.now());
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
          if (isPlaying) {
            e.preventDefault();
            e.returnValue = '';
          }
        };
    
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, [isPlaying]);
    
      useEffect(() => {
        const savedEpisode = localStorage.getItem('lastPlayedEpisode');
        const savedTime = localStorage.getItem('lastPlayedTime');
        console.log('Loading saved data:', { savedEpisode, savedTime });

        if (savedEpisode && savedTime) {
            try {
                const parsedEpisode: Episode = JSON.parse(savedEpisode);
                if (parsedEpisode.id === selectedEpisode.id) {
                    console.log(`Loaded saved episode: ${parsedEpisode.id} at time: ${savedTime}`);
                    setCurrentTime(Number(savedTime));
                    setIsPlaying(true);
                } else {
                    setCurrentTime(0);
                    setIsPlaying(false);
                }
            } catch (error) {
                console.error('Error parsing saved episode:', error);
                setCurrentTime(0);
                setIsPlaying(false);
            }
        } else {
            setCurrentTime(0);
            setIsPlaying(false);
        }
    }, []);

      useEffect(() => {
        const saveProgress = () => {
          try {
            console.log(`Saving episode: ${JSON.stringify(selectedEpisode)} at time: ${currentTime}`);
            localStorage.setItem('lastPlayedEpisode', JSON.stringify(selectedEpisode));
            localStorage.setItem('lastPlayedTime', currentTime.toString());
          } catch (error) {
            console.error('Error saving progress:', error);
          }
        };
    
        window.addEventListener('beforeunload', saveProgress);
        window.addEventListener('unload', saveProgress);
    
        return () => {
          window.removeEventListener('beforeunload', saveProgress);
          window.removeEventListener('unload', saveProgress);
        };
      }, [selectedEpisode, currentTime]);

      const handleResetHistory = () => {
        localStorage.removeItem('lastPlayedEpisode');
        localStorage.removeItem('lastPlayedTime');
        setCurrentTime(0);
      };

    return (
        <Wrapper>
            <TitleContainer>
                <StyledTitle variant='subtitle1' sx={{ fontWeight: "600"}}>{selectedEpisode.title}</StyledTitle>
                <StyledTitle variant='subtitle2'>{selectedEpisode.showTitle}</StyledTitle>
            </TitleContainer>
            <AudioPlayer
                key={playerKey}
                autoPlay={isPlaying}
                src={selectedAudio}
                currentTime={currentTime}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onListen={(e) => setCurrentTime(e.target.currentTime)}
            ></AudioPlayer>
        </Wrapper>
    );
};


