import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <h2>Akhil Chandran</h2>
            <div className="header__menu">
                <ul>
                    <li>Home</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
