import React from 'react';
import { NavLink } from 'react-router-dom';
import './Link.css';

const Links = (props) => {
    const { name, link } = props.route;
    return (
        <li className='mr-0 lg:mr-8 text-lg uppercase font-semibold hover-style '>
            <NavLink to={link}>{name}</NavLink>
        </li>

    );
};

export default Links;