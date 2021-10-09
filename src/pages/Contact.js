import React, { useState } from 'react';
import './Contact.css';
import Pycharm from '../images/pycharm.png';
import vscode from '../images/vscode.png';
import Header from '../components/Header';
import emailjs from 'emailjs-com'; 
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import Jump from 'react-reveal/Jump';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const[buttonValue,setButtonValue] = useState('Send Message');
    const sendMail = (e) =>{
        e.preventDefault();
        //this is set up using email js..
        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_EMAIL_USER_ID)
        .then(response=>{
            console.log(response)
            toast.success('Thank you for visiting. I will get back to you soon.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
        .catch(error=>{
            console.log(error);
            toast.error('Sorry,message was not delivered. Please try again.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
        e.target.reset();
    }

    return (
        <div className="contact">
            <Header className="header"/>
            <div className="contact__body">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
                <Slide top>
                <div className="contact__about">
                    <Link to="/">
                        <HomeIcon className="contact__home"/>
                    </Link>
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
                </Slide>
                <Slide bottom>
                <div className="contact__form">
                    <Jump delay={1000}>
                        <h2>Contact Me !.</h2>
                    </Jump>
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
                </Slide>
            </div>
        </div>
    )
}

export default Contact
