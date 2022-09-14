import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Players from '../Players/Players';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemButton, ListItemText, Button, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import SquadDisplay from '../SquadDisplay/SquadDisplay';

const Catalogue = () => {
  return(
    <Grid container>
      <Grid item xs={5}>
        <b> Catalogue Component </b>
        <Players />
      </Grid>
      <Grid item xs={7}>
        <SquadDisplay></SquadDisplay>
      </Grid>
    </Grid>
  )
};

Catalogue.propTypes = {};

Catalogue.defaultProps = {};

export default Catalogue;
