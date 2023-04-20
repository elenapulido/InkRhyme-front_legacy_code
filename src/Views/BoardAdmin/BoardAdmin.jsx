import React from 'react'
import BoardAdmin from '../../Components/Boards/BoardAdmin'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'

function boardAdmin() {
  return (
    <div className='FormPage'>
      <Header />
      <Navbar />
      <BoardAdmin />
      <Footer />
    </div>
  )
}

export default boardAdmin;