import React from 'react';
import './Areas.css';
import Research from '../images/research.png';
import Frontend from '../images/front-end.png';
import Backend from '../images/backend.png';

function Areas() {
    return (
        <div className="areas">
            <div className="areas__heading">
                <h1>AREAS OF INTEREST</h1>
            </div>
            <div className="areas__cardarea">
            <div className="areas__card">
                <div className="card__image">
                    <img src={Research} alt="research-icon"/>
                </div>
                <div className="card__heading">
                    <h2>Research</h2>
                </div>
                <div className="card__description">
                Understand the subject matter completely and build on the knowledge related to it,
                becoming familiar with the subject matter. Determine methods to address the specific needs and requirements.
                </div>
            </div>

            <div className="areas__card">
                <div className="card__image">
                    <img src={Frontend} alt="frontend-icon"/>
                </div>
                <div className="card__heading">
                    <h2>Frontend Development</h2>
                </div>
                <div className="card__description">
                Convert designs into web pages,which are highly elegant and 
                responsive. I use HTML,CSS, JS as languages and I use React js as the frontend framework,which makes
                the website highly maintainable and modern
                </div>
            </div>

            <div className="areas__card">
                <div className="card__image">
                    <img src={Backend} alt="backend-icon"/>
                </div>
                <div className="card__heading">
                    <h2>Backend Development</h2>
                </div>
                <div className="card__description">
                Buliding behind the scenes functionality from the details understood and learned 
                from the research . Buliding all the necessary apis and other functionalities.
                I use Django ,which is a python based framework .
                </div>
            </div>
            </div>            
        </div>
    )
}

export default Areas
