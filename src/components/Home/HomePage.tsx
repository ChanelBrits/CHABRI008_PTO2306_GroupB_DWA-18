import { useState } from "react"
import { MainContent } from "./MainContent"
import { NavBar } from "../NavBar/NavBar"
import { Store } from "../../data/store/store.tsx"
import { Player } from "../AudioPlayer/AudioPlayer.tsx"
import { Box } from "@mui/material"
import styled from "@emotion/styled"


const Container = styled(Box)({
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  });

  const ContentWrapper = styled(Box)({
    display: "flex",
    flexDirection: "row",
    flex: 1,
  });

  const MainContentWrapper = styled(Box)({
    width: "75%",
    marginLeft: "auto",
    height: "calc(100vh - 7rem - 64px)",
    overflow: "auto",
  });

  const StyledBox = styled(Box)({
    position: "fixed",
    bottom: "0",
    width: "100%"
})

export const HomePage = ({phase, list, setSelectedAudio, selectedAudio, setSelectedEpisode, selectedEpisode}) => {
    

    return (
        <Container>
          <NavBar
            phase={phase}
            list={list}
          />
          <ContentWrapper>
            <MainContentWrapper>
                <MainContent
                    phase={phase}
                    list={list}
                    setSelectedAudio={setSelectedAudio}
                    selectedAudio={selectedAudio}
                    setSelectedEpisode={setSelectedEpisode}
                    selectedEpisode={selectedEpisode}
                ></MainContent>
            </MainContentWrapper>
            <StyledBox>
                <Player 
                selectedAudio={selectedAudio}
                setSelectedAudio={setSelectedAudio}
                setSelectedEpisode={setSelectedEpisode}
                selectedEpisode={selectedEpisode}
                ></Player>
            </StyledBox>
          </ContentWrapper>
        </Container>
    )
}