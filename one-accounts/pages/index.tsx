import React, { useEffect } from 'react'
import ButtonAppBar from '../component/ButtonAppBar'
import AccountDetails from '../component/AccountDetails'
import AccountDetailsTabs from '../component/AccountDetailsTabs'
import BottomAppBar from '../component/BottomAppBar'

interface Bank {
  selectId: number;
  bankName: string;
  codeName: string
}

const Home = () => {
  const axiosBase = require('axios');
  const axios = axiosBase.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json',
    },

    responseType: 'json'
  });
  const [banks, setBanks] = React.useState<Bank[]>();
  const [selectedBank, setSelectedBank] = React.useState<number>(0);
  useEffect(() => {
    axios.get('/api/banks')
      .then(res => {
        const datas = []
        for (let i = 0; i < res.data.length; i++) {
          //console.log(res.data);
          const tmp = {
            "selectId": res.data[i].select_id,
            "bankName": res.data[i].bank_name,
            "codeName": res.data[i].code_name,
          }
          datas.push(tmp);
        }
        //console.log(datas);
        setBanks(datas);
      })
  },[])
  return (
    <>
      <ButtonAppBar />
      <AccountDetailsTabs banks={banks} selectedBank={selectedBank} setSelectedBank={setSelectedBank}/>
      <AccountDetails />
      <BottomAppBar codeName={banks} selectedBank={selectedBank}/>
    </>
  )
}

export default Home;