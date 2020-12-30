import React, { useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import TextField from '@material-ui/core/TextField'
import dayjs from 'dayjs';
import {v4 as uuidv4} from 'uuid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      bottom: 'bottom',
    },
  }),
);

export default function BottomAppBar() {
  const classes = useStyles();
  const [tradingDay,setTradingDay] = useState<Date>();
  const [payment,setPayment] = useState<number>();
  const [tradingName,setTradingName] = useState<string>();
  const [note,setNote] = useState<string>();
  const axiosBase = require('axios');
  const axios = axiosBase.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json',
    },

    responseType: 'json'
  });
  const createDetail = (async () => {
    const detail = {
      uuid: uuidv4(),
      payment: payment,
      trading_day: tradingDay,
      trading_name: tradingName,
      note: note,
      bank: "gogin",
    }
    console.log(detail);
    await axios.post('/api/accounts/gogin/details', detail)
      .then(res => {
        console.log(res);
      })
  });
  const handleTradingDay = ((e) => {
    setTradingDay(e.target.value);
  });
  const handlePayment = ((e) => {
    setPayment(e.target.value);
  })
  const handleTradingName = ((e) => {
    setTradingName(e.target.value)
  })
  const handleNote = ((e) => {
    setNote(e.target.value)
  })
  return (
    <React.Fragment>
      <AppBar position="sticky" color="transparent" className={classes.appBar} >
        <Toolbar>
          <TextField
            id="datetime-local"
            label="取引日"
            type="datetime-local"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={e => handleTradingDay(e)}
            variant="outlined"
          />
        <TextField id="time" label="入金額" type="text" onChange={e => handlePayment(e)} variant="outlined" />
        <TextField id="time" label="摘要" type="text" onChange={e => handleTradingName(e)} variant="outlined" />
        <TextField id="time" label="備考" type="text" onChange={e => handleNote(e)} variant="outlined" />
          <Button variant="contained" onClick={createDetail}>明細追加</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}