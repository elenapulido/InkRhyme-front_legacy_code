import FormPage from "./Views/FormPage/FormPage";
import React from 'react';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import './Styles/App.css';
import MainPage from './Views/MainPage/MainPage';

const App = () => {
  return (
    <div className ="App"> 
      <Header/>
      <Navbar/>
      <MainPage />
      
      <Footer/>
    </div>
  );
  }
export default App;
