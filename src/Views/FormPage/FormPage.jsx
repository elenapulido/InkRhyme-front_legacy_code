import React from 'react'
import Form from '../../Components/Form/Form'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Navbars from '../../Components/Navbar/Navbars'
import "./FormPage.css"

function FormPage() {
  return (
    <div className='FormPage'>
      <Header />     
      <Navbars />  
      <Form />
      <Footer />  
    </div>
  )
}

export default FormPage