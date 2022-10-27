import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Header = () =>
{
 
        const goesToBlogs = () => toast( "Please Scroll Down For Read The Blogs." );
        < ToastContainer />;
    
    return (
        <nav className='navbar'>
            <div className='nav-main'>
                <img className='logo' src={ logo } alt="" />
                <h1><span className='gym'>GYM</span> Club</h1>
            </div>
            <div className='navbar-menu'>
                <p href='/'>Home</p>
                <p href='/' onClick={ goesToBlogs } >Blogs</p>
            </div>
        </nav>
    );
};



export default Header;