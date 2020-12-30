import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import dayjs from 'dayjs';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      bottom: 'bottom',
    },
  }),
);

export default function BottomAppBar() {
  const classes = useStyles();
  const axiosBase = require('axios');
  const axios = axiosBase.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json',
    },

    responseType: 'json'
  });
  const detail = {
    uuid: "testtest",
    trading_day: dayjs(),
    trading_name: "trading name test",
    note: "note test success",
    bank: "gogin",
  }
  const createDetail = (async () => {
    await axios.post('/api/accounts/gogin/details', detail)
      .then(res => {
        console.log(res);
      })
  })
  return (
    <React.Fragment>
      <AppBar position="sticky" color="primary" className={classes.appBar}>
        <Toolbar>
        <Button variant="contained" onClick={createDetail}>明細追加</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}