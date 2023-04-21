import React from 'react'
import Search from '../../Components/Search/Search'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'

function SearchPage() {
  return (
    <div className='FormPage'>
      <Header />
      <Navbar />
      <Search />
      <Footer />
    </div>
  )
}

export default SearchPage