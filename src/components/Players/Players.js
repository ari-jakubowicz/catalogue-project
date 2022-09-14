import React from 'react';
import PropTypes from 'prop-types';
import data from "../../static/data.json"
import { useDispatch } from 'react-redux';
import { addPlayerToSquad, removePlayer } from '../../redux/actions';
import { List, ListItem, Divider, ListItemButton, ListItemText, Button, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const Players = () => {
  const players = data;
  const dispatch = useDispatch();
  return (
    // <List>
    //   {
    //     players.map(p => (
    //       (
    //         <>
    //           <ListItem key={p.id}> 
    //             {p.name} {p.skillpoints} 
    //             <Button  onClick={() => dispatch(addPlayerToSquad(p.id))}> Add </Button>
    //           </ListItem>
    //           <Divider />
    //         </>
    //       )
    //     ))
    //   }
    // </List>
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Position</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.position}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell>
                <Button  onClick={() => dispatch(addPlayerToSquad(row))}> Add </Button>
                <Button  onClick={() => dispatch(removePlayer(row))}> Remove </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  )
};

Players.propTypes = {};

Players.defaultProps = {};

export default Players;
