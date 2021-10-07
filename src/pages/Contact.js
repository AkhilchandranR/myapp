import React, { useState } from 'react';
import './Contact.css';
import Pycharm from '../images/pycharm.png';
import vscode from '../images/vscode.png';
import Header from '../components/Header';
import emailjs from 'emailjs-com'; 

function Contact() {
    const[buttonValue,setButtonValue] = useState('Send Message');
    const sendMail = (e) =>{
        e.preventDefault();
        //this is set up using email js..
        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_EMAIL_USER_ID)
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
        e.target.reset();
    }

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
                    <form onSubmit={sendMail}>
                        <div className="form__inputs">
                            <p>Your name*</p>
                            <input type="text" name="name" required/>
                        </div>
                        <div className="form__inputs">
                            <p>Your email*</p>
                            <input type="email" name="emailId" required/>
                        </div>
                        <div className="form__inputs">
                            <p>Your phone number</p>
                            <input type="tel" name="phone"/>
                        </div>
                        <p>Your message*</p>
                        <div className="form__inputs message">
                            <input type="text" name="message" required/>
                        </div>
                        <input type="submit" className="form__sendEmail" value={buttonValue}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
