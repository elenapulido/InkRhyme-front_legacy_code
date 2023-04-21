import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer';
import ButtonUp from '../../Components/ButtonUp/ButtonUp';
import Register from '../../Components/LoginComponents/Register';

 function RegisterView() {

  return (
    <div>
      <Header />
      <Navbar />
      <Register />
      <ButtonUp />
      <Footer />
    </div>
  )
}

export default RegisterView;