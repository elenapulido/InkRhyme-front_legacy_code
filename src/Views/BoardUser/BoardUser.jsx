import React from 'react'
import BoardUser from '../../Components/Boards/BoardUser'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'

function boardUser() {
  return (
    <div className='FormPage'>
      <Header />
      <Navbar />
      <BoardUser />
      <Footer />
    </div>
  )
}

export default boardUser;