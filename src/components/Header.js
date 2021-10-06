import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <h2>Akhil Chandran</h2>
            </Link>
        </div>
    )
}

export default Header
