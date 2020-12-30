import React from 'react'
import ButtonAppBar from '../component/ButtonAppBar'
import AccountDetails from '../component/AccountDetails'
import AccountDetailsTabs from  '../component/AccountDetailsTabs'
import BottomAppBar from  '../component/BottomAppBar'

const Home = () => {
    return (
        <>
        <ButtonAppBar />
        <AccountDetailsTabs />
        <AccountDetails />
        <BottomAppBar />
        </>
    )
}

export default Home;