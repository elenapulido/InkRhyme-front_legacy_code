import React from 'react'
import Form2 from '../../Components/Form/Form2'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import "./FormPage.css"

function FormPage() {
  return (
    <div className='FormPage'>
      <Header />
      <Navbar />
      <Form2 />
      <Footer />  
    </div>
  )
}

export default FormPage