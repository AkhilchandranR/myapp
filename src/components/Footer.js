import React from 'react';
import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Footer() {
    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
        })
    }
    return (
        <div className="footer">
            <div className="footer__links">
                <GitHubIcon/>
            </div>
            <button className="footer__scrollbtn" 
            onClick={scrollToTop}>
                <ArrowUpwardIcon/>
            </button>
            <div className="footer__copyright">
                <p>© 2021 akhilchandran771@gmail.com</p>
            </div>
        </div>
    )
}

export default Footer
