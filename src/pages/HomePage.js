import React from 'react';
import './HomePage.css';
import Header from '../components/Header';
import HomeContent from '../components/HomeContent';

function HomePage() {
    return (
        <div className="homepage">
            <Header/>
            <HomeContent/>
        </div>
    )
}

export default HomePage
