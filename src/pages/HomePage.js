import React from 'react';
import './HomePage.css';
import Header from '../components/Header';
import HomeContent from '../components/HomeContent';
import Areas from '../components/Areas';
import About from './About';

function HomePage() {
    return (
        <div className="homepage">
            <Header/>
            <HomeContent/>
            <Areas/>
            <About/>
        </div>
    )
}

export default HomePage
