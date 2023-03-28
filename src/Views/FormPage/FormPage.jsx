import React from 'react'
import Form from '../../Components/Form/Form'
import "./FormPage.css"
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