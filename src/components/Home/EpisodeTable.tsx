import { useState, useEffect} from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  styled
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Episode } from "../../types"


const StyledTableContainer = styled(TableContainer)({
    backgroundColor: "#1a2121",
    borderRadius: "0.5rem",
})

const StyledTableCell = styled(TableCell)({
    color: "#dde4e4", 
  });

export const EpisodeTable = (props) => {
    const {episodes, showTitle, setSelectedAudio, selectedEpisode, setSelectedEpisode} = props
    
    const handlePlayClick = (episode) => {
        setSelectedAudio(episode.file);
        setSelectedEpisode({...episode, showTitle});
    }

    useEffect(() => {
        console.log(selectedEpisode);
      }, [selectedEpisode]);

    return (
        <Box sx={{ width: '75%', mt: 4 }}>
        <StyledTableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="episodes table">
            <TableHead>
                <TableRow>
                <StyledTableCell size='small'></StyledTableCell>
                <StyledTableCell align="right">Episode No</StyledTableCell>
                <StyledTableCell align="left">Title</StyledTableCell>
                <StyledTableCell align="left">Show</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="right">Length</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {episodes.map((episode) => (
                <TableRow key={episode.episode}>
                    <StyledTableCell component="th" scope="row">
                    <IconButton onClick={() => handlePlayClick(episode)}>
                        <PlayArrowIcon />
                    </IconButton>
                    </StyledTableCell>
                    <StyledTableCell align="right">{episode.episode}</StyledTableCell>
                    <StyledTableCell align="left">
                    <Typography variant="body1">{episode.title}</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="left">{showTitle}</StyledTableCell>
                    <StyledTableCell align="center">
                    <IconButton>
                        <FavoriteIcon />
                    </IconButton>
                    </StyledTableCell>
                    <StyledTableCell align="right">{episode.length}</StyledTableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </StyledTableContainer>
        </Box>
    )
};