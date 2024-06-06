import { useState } from "react"
import { MainContent } from "./MainContent"
import { NavBar } from "../NavBar/NavBar"
import { Store } from "../../data/store/store.tsx"
import { Player } from "../AudioPlayer/AudioPlayer.tsx"
import { Box } from "@mui/material"
import styled from "@emotion/styled"

const StyledBox = styled(Box)({
    position: "fixed",
    bottom: "0",
    width: "100%"
})

export const HomePage = ({phase, list}: Store) => {
    const [selectedAudio, setSelectedAudio] = useState();

    return (
        <>
            <NavBar/>
            <MainContent
                phase={phase}
                list={list}
                setSelectedAudio={setSelectedAudio}
            ></MainContent>
            <StyledBox>
                <Player selectedAudio={selectedAudio}></Player>
            </StyledBox>
        </>
    )
}