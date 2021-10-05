import React from 'react';
import './HomePage.css';
import Header from '../components/Header';
import HomeContent from '../components/HomeContent';
import Areas from '../components/Areas';
import Footer from '../components/Footer';
import Projects from './Projects';
import Skills from './Skills';

function HomePage() {
    return (
        <div className="homepage">
            <Header/>
            <HomeContent/>
            <Areas/>
            <Skills/>
            <Projects/>
            <Footer/>
        </div>
    )
}

export default HomePage
