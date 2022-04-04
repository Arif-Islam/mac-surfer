import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'Reviews', link: '/reviews' },
        { id: 3, name: 'Dashboard', link: '/dashboard' },
        { id: 4, name: 'Blogs', link: '/blogs' },
        { id: 5, name: 'About', link: '/about' },
    ]
    return (
        <nav className='flex justify-end'>
            <div onClick={() => setIsOpen(!isOpen)} className='w-8 h-8 text-stone-900 lg:hidden rounded hover:w-9 hover:h-9 hover:cursor-pointer'>
                {isOpen ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`flex flex-col justify-center lg:flex-row absolute lg:static duration-500 ease-in-out ${isOpen ? 'top-20 mx-auto' : 'top-[-135px]'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;