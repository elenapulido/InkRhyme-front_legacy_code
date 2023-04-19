import React from 'react'
// import "./FormPage.css"
import Form from '../../Components/Form/Form'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer2 from '../../Components/Footer/Footer2'

function FormPage() {
  return (
    <div className='FormPage'>
      <Header />
      <Navbar />
      <Form />
      <Footer />
      {/* <Footer2 />       */}
    </div>
  )
}

export default FormPage