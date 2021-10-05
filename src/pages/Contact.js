import React from 'react';
import './Contact.css';
import Pycharm from '../images/pycharm.png';
import vscode from '../images/vscode.png';
import Header from '../components/Header';

function Contact() {
    return (
        <div className="contact">
            <Header className="header"/>
            <div className="contact__body">
                <div className="contact__about">
                    <h2>About</h2>
                    <h5>Full Stack developer</h5>
                    <p>
                    I am a web developer based in India,I am passionate about coding
                        since my schooldays. After completion of my schooling i pursued computer science and
                        engineering. From there I learned backend development and eventually 
                        turned into frontend development. Currently iam working as a fullstack developer.
                    </p>
                    <div className="contact__tools">
                        <img src={vscode} alt="vscode"/>
                        <img src={Pycharm} alt="pycharm"/>
                    </div>
                </div>
                <div className="contact__form">
                    <h2>Contact Me !.</h2>
                    <form>
                        <div className="form__inputs">
                            <p>Your name*</p>
                            <input type="text"/>
                        </div>
                        <div className="form__inputs">
                            <p>Your email*</p>
                            <input type="email"/>
                        </div>
                        <div className="form__inputs">
                            <p>Your phone number</p>
                            <input type="tel"/>
                        </div>
                        <p>Your message*</p>
                        <div className="form__inputs message">
                            <input type="text"/>
                        </div>
                        <button>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
