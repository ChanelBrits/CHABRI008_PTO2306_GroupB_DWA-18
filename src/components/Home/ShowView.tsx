import { Box, Card, Typography, Select, MenuItem, Button } from "@mui/material"
import { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { EpisodeTable } from "./EpisodeTable";
import { Show, Season, Episode } from "../../types"

const StyledBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "calc(100vh - 7rem - 64px)",
    overflowY: "auto",
    marginTop: "6rem"
})

const ShowBanner = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "75%",
    height: "17rem",
    backgroundColor: "#1a2121",
    borderRadius: "2rem",
    margin: "2rem 0",
})

const SeasonCardContainer = styled(Box)({
    display: "flex",
    paddingRight: "2rem"
})

const StyledCard = styled(Card)({
    height: "13rem",
    width: "13rem",
    borderRadius: "1rem",
})

const StyledImg = styled('img')`
    height: 100%;
    object-fit: cover;
`
const ShowInfo = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
    color: "#dde4e4"
})

const ShowTitle = styled(Typography)({
    padding: "1.5rem"
})

const ShowDescription = styled(Typography)({
    padding: "1.5rem"
})

const ShowMoreButton = styled(Button)({
    color: "#90caf9",
    '&:hover': {
        color: "#64b5f6",
    }
})


type ShowViewProps = {
    showData: Show | null;
    setSelectedAudio: (audio: string) => void;
    setSelectedEpisode: (episode: Episode) => void;
    selectedEpisode: Episode | null;
}

export const ShowView = ({ showData, setSelectedAudio, setSelectedEpisode, selectedEpisode }: ShowViewProps) => {
    const [selectedSeason, setSelectedSeason] = useState<Season | null>(null);
    const [showFullDescription, setShowFullDescription] = useState(false);

    useEffect(() => {
        if (showData?.seasons.length > 0) {
            setSelectedSeason(showData.seasons[0]);
        }
    }, [showData]);

    const handleSeasonChange = (event: React.ChangeEvent<{ value: Season }>) => {
        setSelectedSeason(event.target.value);
    };

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <StyledBox>
            <ShowBanner>
                <ShowInfo>
                    <ShowTitle variant="h4">{showData?.title}</ShowTitle>
                    <ShowDescription>
                    {showFullDescription ? showData?.description : `${showData?.description.slice(0, 150)}...`}
                        {showData?.description.length > 150 && (
                            <ShowMoreButton onClick={toggleDescription}>
                                {showFullDescription ? "Show Less" : "Show More"}
                            </ShowMoreButton>
                        )}
                    </ShowDescription>
                    <Select variant="outlined" value={selectedSeason} onChange={handleSeasonChange}>
                        {showData?.seasons.map((season) => (
                            <MenuItem key={season} value={season}>{`${season.title} (${season.episodes.length})`}</MenuItem>
                        ))}
                    </Select>
                </ShowInfo>
                <SeasonCardContainer>
                    <StyledCard>
                        <StyledImg src={selectedSeason?.image}/>
                    </StyledCard>
                </SeasonCardContainer>
            </ShowBanner>
            <EpisodeTable
                showTitle={showData?.title}
                episodes={selectedSeason?.episodes || []}
                setSelectedAudio={setSelectedAudio}
                setSelectedEpisode={setSelectedEpisode}
                selectedEpisode={selectedEpisode}
            ></EpisodeTable>
        </StyledBox>
    )
}   