import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  toolbar: {
    justifyContent: 'space-between',
  },
  filterIcon: {
    cursor: 'pointer',
  },
});

export default function Header({}) {
  const [isSidebarOpen, setIsSidebarOpened] = useState('');
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Icon
          onClick={() => {
            setIsSidebarOpened(!isSidebarOpen);
          }}
          fontSize="large"
          className={classes.filterIcon}
        >
          filter_list
        </Icon>
        <h2>Nasa Exoplanets</h2>
      </Toolbar>
    </AppBar>
  );
}
