import React from 'react';
import './HomePage.css';
import Header from '../components/Header';
import HomeContent from '../components/HomeContent';
import Areas from '../components/Areas';
import Footer from '../components/Footer';
import Projects from './Projects';
import Skills from './Skills';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';

function HomePage() {
    return (
        <div className="homepage">
            <Header/>
            <HomeContent/>
            <Zoom top>
                <Areas/>
            </Zoom>
            <LightSpeed left>
                <Skills/>
            </LightSpeed>
            <Projects/>
            <Flip bottom>
                <Footer/>
            </Flip>
        </div>
    )
}

export default HomePage
