import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Players from '../Players/Players';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemButton, ListItemText, Button, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const SquadDisplay = () => {
  const squad = useSelector((store) => {
    return store.store;
  });
  return (
    squad && squad.addedPlayers.map((p, index) => (
      (<span key={p}>{p}</span>)
    ))
  )
};

SquadDisplay.propTypes = {};

SquadDisplay.defaultProps = {};

export default SquadDisplay;
