import { useState } from "react"
import { useStore } from "zustand"
import { Routes, Route, useNavigate } from "react-router-dom"
import { Box } from "@mui/material"
import styled from "@emotion/styled"
// import { Carousel } from "./Carousel"
// import { Show } from "./Show"
import { Store, storeInstance } from "../../data/store/store"
import { HomeView } from "./HomeView"
import { ShowView } from "./ShowView"
import { ListView } from "../ListView/ListView"


const StyledBox = styled(Box)({
    backgroundColor: "#0e1515",
    height: '100vh',
    width: '100%',
    overflow: 'hidden', 
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'right', 
    alignItems: 'flex-end',
    marginLeft: 'auto',
    marginTop: "1.5rem"
})


export const MainContent= ({phase, list, setSelectedAudio, selectedAudio, setSelectedEpisode, selectedEpisode}: Store) => {
    const { fetchShowData, show, showPhase } = useStore(storeInstance);
    const [selectedShow, setSelectedShow] = useState<string | null>(null);

    const navigate = useNavigate()

    const handleShowClick = (id: string) => {
        setSelectedShow(id);
        fetchShowData(id)
        navigate("/home/show-view")
      };

    return (
        <StyledBox>
                <Routes>
                    <Route 
                    path="/" 
                    element={
                        <HomeView 
                        phase={phase}
                        list={list}
                        handleShowClick={handleShowClick}
                        />
                    } 
                    />
                    <Route 
                    path="show-view" 
                    element={
                        <ShowView 
                        showData={showPhase === "LOADED" ? show : null} 
                        setSelectedAudio={setSelectedAudio}
                        setSelectedEpisode={setSelectedEpisode}
                        selectedEpisode={selectedEpisode}
                        />
                    } 
                    />
                    <Route 
                    path="list-view" 
                    element={
                        <ListView
                        phase={phase}
                        list={list}
                        handleShowClick={handleShowClick}
                        />
                    }
                    />
                </Routes>
        </StyledBox>
    )
}