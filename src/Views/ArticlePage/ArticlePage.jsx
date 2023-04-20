import React from 'react'
import Article from '../../Components/Article/Article'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Navbars from '../../Components/Navbar/Navbars'

function ArticlePage() {
    return (
        <>
            <Header />
            <Navbars />
            <Article />            
            <Footer />                   
        </>
    )
}

export default ArticlePage