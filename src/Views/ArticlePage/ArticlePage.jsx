import React from 'react'
import Article from '../../Components/Article/Article'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'

function ArticlePage() {
    return (
        <>
            <Header />
            <Navbar />
            <Article />
            <Footer />            
        </>
    )
}

export default ArticlePage