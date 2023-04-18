import React from 'react'
import Form from '../../Components/Form/Form'
import "./FormPage.css"
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Navbar1 from '../../Components/Navbar/Navbar1'

function FormPage() {
  return (
    <div className='FormPage'>
      <Header />
      <Navbar1 />
      <Form />
      <Footer />
    </div>
  )
}

export default FormPage