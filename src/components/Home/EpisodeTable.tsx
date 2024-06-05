import React from 'react';
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
// import { faker } from '@faker-js/faker';

// const generateFakeEpisodes = () => {
//     return Array.from({ length: 10 }).map((_, index) => ({
//       episodeNo: index + 1,
//       title: faker.music.songName(),
//       show: faker.company.name(),
//       length: `${Math.floor(Math.random() * 60)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
//     }));
//   };
  
//   const episodes = generateFakeEpisodes();

const StyledTableContainer = styled(TableContainer)({
    backgroundColor: "#1a2121",
    borderRadius: "0.5rem",
})

const StyledTableCell = styled(TableCell)({
    color: "#dde4e4", 
  });

export const EpisodeTable = ({episodes, showTitle}) => {
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
                    <IconButton>
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