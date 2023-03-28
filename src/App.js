import FormPage from "./Views/FormPage/FormPage";
import React from 'react';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import './Styles/App.css';

const App = () => {
  return (
    <div className ="App"> 
      <Header/>
      <Navbar/>
      <FormPage />
      
      <Footer/>
    </div>
  );
  }
export default App;
