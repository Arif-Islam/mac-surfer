import './Header.css';
import logo from '../../images/mac-1-logo-png-transparent-removebg-preview.png';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex items-center justify-around py-4'>
            <Link className=' flex items-center cursor-pointer' to='/home'>
                <img className='w-24' src={logo} alt="mac logo" />
                <p className='font-bold text-3xl font-kanit text-blue-800 ml-1'>SURFER</p>
            </Link>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;