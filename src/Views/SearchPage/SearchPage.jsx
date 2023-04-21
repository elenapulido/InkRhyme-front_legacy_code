import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer';
import ButtonUp from '../../Components/ButtonUp/ButtonUp';
import Search from '../../Components/Search/Search';

 function SearchPage() {

  return (
    <div>
      <Header />
      <Navbar />
      <Search />
      <ButtonUp />
      <Footer />
    </div>
  )
}

export default SearchPage;