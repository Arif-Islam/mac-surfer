import React, { useState } from 'react';
import './Header.css';
import logo from '../../images/mac-1-logo-png-transparent-removebg-preview.png';
import { NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
// import Links from '../Links/Links';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='flex items-center justify-around py-4'>
            <div className='flex items-center'>
                <img className='w-24' src={logo} alt="mac logo" />
                <p className='font-bold text-3xl font-kanit text-blue-800 ml-1'>SURFER</p>
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className='w-8 h-8 text-stone-900 lg:hidden rounded hover:w-9 hover:h-9 hover:cursor-pointer'>
                {isOpen ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <div className={`text-lg space-x-8 uppercase font-semibold hidden ${isOpen ? 'flex-col' : ' lg:flex'}`}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/reviews">Reviews</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </nav>
    );
};

export default Header;