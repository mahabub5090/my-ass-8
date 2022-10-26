import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'
const Header = () =>
{
    return (
        <nav className='navbar'>
            <div className='nav-main'>
                <img className='logo' src={ logo } alt="" />
                <h1>Ultra Active <span className='gym'>GYM</span> Club</h1>
            </div>
            <div className='navbar-menu'>
                <a href='/#'>Home</a>
                <a href='/blog'>Blogs</a>
            </div>
        </nav>
    );
};

export default Header;