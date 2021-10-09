import React from 'react';
import './HomeContent.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';


function HomeContent() {
    return (
        <div className="homeContent">
            <div className="homeContent__title">
                <Fade top delay={1000}>
                    <h1 className="homeContent__heading one">Hello.. I am Akhil</h1>
                </Fade>
                <Fade top delay={1400}>
                    <h1 className="homeContent__heading two">I am a</h1>
                </Fade>
                <Fade top delay={1800}>
                    <h1 className="homeContent__heading three">Full Stack Developer</h1>
                </Fade>
                <Fade left delay={2200}>
                    <p className="homeContent__caption">To Turn your ideas into a reality..</p> 
                </Fade>
            <div className="homeContent__contact">
                <Link to="/contact">
                    <Jump delay={2600}>
                        <button className="homeContent__btn">Contact Me</button>
                    </Jump>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default HomeContent
