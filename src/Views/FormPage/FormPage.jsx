import React from 'react'
import "./FormPage.css"
import Form from '../../Components/Form/Form'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'

function FormPage() {
  return (
    <div className='FormPage'>
      <Header />
      <Navbar />
      <Form />
      <Footer />
    </div>
  )
}

export default FormPage