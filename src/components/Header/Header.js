import React from 'react';
import Logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="nav-bar">
                        <a href="./home">Home</a>
                        <a href="/shop">Shop</a>
                        <a href="/order">Order</a>
                        <a href="/inventory">Manage Inventor</a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;