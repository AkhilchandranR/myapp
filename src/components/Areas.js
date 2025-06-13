import React from 'react';
import './Areas.css';
import Research from '../images/research.jpg';
import Frontend from '../images/fedev.jpg';
import Backend from '../images/bedev.png';
import Maintenance from '../images/maint.webp';
import { Image } from '@mui/icons-material';

function Areas() {
    return (
        <div className="areas">
            <div className="areas__heading headings">
                <h1>Services</h1>
            </div>
            <div className='container areas__cardarea'>
                <div className='areas__card'>
                    <div className='card__textarea'>
                        <div className='card__heading'>
                            <h2>Research</h2>
                        </div>
                        <div className='card__description'>
                            Understand the subject matter completely and build on the knowledge related to it,
                            becoming familiar with the subject matter. Determine methods to address the specific needs and requirements.
                        </div>
                    </div>
                    <div className='card__image'>
                        <img src={Research} alt="research-icon" />
                    </div>
                </div>
                <div className='areas__card'>
                    <div className='card__textarea'>
                        <div className='card__heading'>
                            <h2>Frontend development</h2>
                        </div>
                        <div className='card__description'>
                            Understand the subject matter completely and build on the knowledge related to it,
                            becoming familiar with the subject matter. Determine methods to address the specific needs and requirements.
                        </div>
                    </div>
                    <div className='card__image'>
                        <img src={Frontend} alt="frontend-icon" />
                    </div>
                </div>
                <div className='areas__card'>
                    <div className='card__textarea'>
                        <div className='card__heading'>
                            <h2>Backend development</h2>
                        </div>
                        <div className='card__description'>
                            Understand the subject matter completely and build on the knowledge related to it,
                            becoming familiar with the subject matter. Determine methods to address the specific needs and requirements.
                        </div>
                    </div>
                    <div className='card__image' style={{ background: 'linear-gradient(135deg, #002f33, #000f11)' }}>
                        <img src={Backend} alt="backend-icon" style={{ height: '380px', objectFit: 'contain' }}/>
                    </div>
                </div>
                <div className='areas__card'>
                    <div className='card__textarea'>
                        <div className='card__heading'>
                            <h2>Maintenace and Support</h2>
                        </div>
                        <div className='card__description'>
                            Understand the subject matter completely and build on the knowledge related to it,
                            becoming familiar with the subject matter. Determine methods to address the specific needs and requirements.
                        </div>
                    </div>
                    <div className='card__image'>
                        <img src={Maintenance} alt="maintenance-icon" />
                    </div>
                </div>
            </div>
            {/*
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
                I use Django or Nodejs/express for building this.
                </div>
            </div>
            </div>             */}
        </div>
    )
}

export default Areas
