import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact">
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
                </div>
                <div className="contact__form">
                    <h2>Contact Me !.</h2>
                    <form>
                        <input type="text" placeholder="please enter your name"/>
                        <input type="email" placeholder="please enter your e-mail"/>
                        <input type="number" placeholder="please enter your phone number"/>
                        <textarea placeholder="please enter your message"/>
                        <button>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
