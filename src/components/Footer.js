import React from 'react';
import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__links">
                <GitHubIcon/>
            </div>
            <button className="footer__scrollbtn">
                <ArrowUpwardIcon/>
            </button>
            <div className="footer__copyright">
                <p>© 2021 akhilchandran771@gmail.com</p>
            </div>
        </div>
    )
}

export default Footer
