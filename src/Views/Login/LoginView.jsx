import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer';
import ButtonUp from '../../Components/ButtonUp/ButtonUp';
import Login from '../../Components/LoginComponents/Login';

 function LoginView() {

  return (
    <div>
      <Header />
      <Navbar />
      <Login />
      <ButtonUp />
      <Footer />
    </div>
  )
}

export default LoginView;