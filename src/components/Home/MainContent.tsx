import { useState } from "react"
import { useStore } from "zustand"

import { Box } from "@mui/material"
import styled from "@emotion/styled"
import { Carousel } from "./Carousel"
import { Show } from "./Show"
import { Store, storeInstance } from "../../data/store/store"
import { HomeView } from "./HomeView"
import { ShowView } from "./ShowView"


const StyledBox = styled(Box)({
    backgroundColor: "#0e1515",
    height: '100vh',
    width: '75%',
    marginTop: "7rem",
    overflow: 'hidden', 
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'right', 
    alignItems: 'center',
    marginLeft: 'auto'
})


export const MainContent= ({phase, list}: Store) => {
    const [ view, setView ] = useState<"home" | "show">("home");
    const { fetchShowData, show, showPhase } = useStore(storeInstance);
    const [selectedShow, setSelectedShow] = useState<string | null>(null);

    const handleShowClick = (id: string) => {
        setSelectedShow(id);
        fetchShowData(id)
        setView("show");
      };

    return (
        <StyledBox>
            {view === "home" ? (
                <HomeView 
                    phase={phase}
                    list={list}
                    handleClick={handleShowClick}
                />
            ) : (
                <ShowView showData={showPhase === "LOADED" ? show : null} />
            )
            } 
        </StyledBox>
    )
}