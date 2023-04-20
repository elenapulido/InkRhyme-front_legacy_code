import React from 'react'
import BoardModerator from '../../Components/Boards/BoardModerator'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'

function boardModerator() {
  return (
    <div className='FormPage'>
      <Header />
      <Navbar />
      <BoardModerator />
      <Footer />
    </div>
  )
}

export default boardModerator;