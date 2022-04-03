import React from 'react';
import './Header.css';
import logo from '../../images/mac-1-logo-png-transparent-removebg-preview.png';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div className='flex items-center'>
                <img className='w-24' src={logo} alt="mac logo" />
                <p className='font-bold text-3xl font-kanit text-blue-800 ml-1'>SURFER</p>
            </div>
            <div>
                <NavLink to="/">Home</NavLink>
            </div>
        </div>
    );
};

export default Header;