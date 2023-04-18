import React from 'react'
import Article from '../../Components/Article/Article'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Navbar1 from '../../Components/Navbar/Navbar1'

function ArticlePage() {
    return (
        <>
            <Header />
            <Navbar1 />
            <Article />
            <Footer />
        </>
    )
}

export default ArticlePage