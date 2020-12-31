import React, { useEffect } from 'react';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

interface Bank {
  selectId: number;
  bankName: string;
  codeName: string
}

interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

interface StyledTabProps {
  label: string;
}

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1,
      },
    },
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
}));

export default function CustomizedTabs(props) {
  const banks: Bank[] = props.banks;
  const classes = useStyles();
  const axiosBase = require('axios');
  const axios = axiosBase.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json',
    },

    responseType: 'json'
  });

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    console.log(newValue);
    props.setSelectedBank(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs value={props.selectedBank} onChange={handleChange} aria-label="styled tabs example">
        {banks && banks.map(bank => <Tab label={bank.bankName} />)}
      </Tabs>
    </div>
  );
}