import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer';
import ButtonUp from '../../Components/ButtonUp/ButtonUp';
import Profile from '../../Components/LoginComponents/Profile';

 function ProfileView() {

  return (
    <div>
      <Header />
      <Navbar />
      <Profile />
      <ButtonUp />
      <Footer />
    </div>
  )
}

export default ProfileView;