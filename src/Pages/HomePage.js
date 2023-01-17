import React from 'react'
import HomeSection from '../Components/HomeSection'
import '../App.css'
import Cards from '../Components/Cards';
import Footer from '../Components/Footer';


function HomePage() {
    return (
        <div className='homePage'>
            <HomeSection />
            <Cards />
            <Footer />
        </div>
    )
}

export default HomePage;