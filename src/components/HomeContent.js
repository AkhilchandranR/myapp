import React from 'react';
import './HomeContent.css';
import { Link } from 'react-router-dom';

function HomeContent() {
    return (
        <div className="homeContent">
            <div className="homeContent__title">
            <h1>Hello.. I am Akhil</h1>
            <h1>I am a</h1>
            <h1>Full Stack Developer</h1>
            <p>To Turn your ideas into a reality..</p> 
            <div className="homeContent__contact">
                <Link to="/contact">
                    <button>Contact Me</button>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default HomeContent
