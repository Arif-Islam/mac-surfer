import React from 'react';
import Footer from '../Footer/Footer';
import './About.css';
import image from '../../images/black-friday-sale-flat-lay-with-alarm-clock.jpg';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    }

    return (
        <div>
            <div className='mb-10 mt-20'>
                <div className='flex flex-col lg:flex-row md:w-4/5 2xl:w-4/6 mx-auto items-center justify-center gap-10'>
                    <div className=' space-y-4 order-2 lg:order-first w-11/12 md:w-1/2 mx-auto'>
                        {/* <h1 className='text-center md:text-left font-kanit text-3xl xl:text-4xl 2xl:text-5xl font-bold'>Supercharged for pros</h1> */}
                        <h1 className='text-center md:text-left font-kanit text-3xl xl:text-4xl 2xl:text-5xl font-bold text-blue-800'>About Us</h1>
                        <p className='font-poppins text-justify px-6 md:px-0'>Mac Surfer delivers essential tips and buying advice to passionate Apple users. We focus on practical information: deep-dive hardware and software reviews; clear, concise tips and tutorials; and penetrating analysis that only true Apple experts can deliver. Our product coverage focuses on the full gamut of Apple products such as iPhone, iPad, Apple Watch, Macbook, Mac Pro, Apple TV and other software and services.
                        </p>
                        <button onClick={goToHome} className='w-full md:w-auto bg-black text-stone-100 hover:bg-gray-400 hover:text-black px-6 py-4 rounded-lg font-semibold text-lg'>Go to Home</button>
                    </div>
                    <div className='w-11/12 md:w-1/2 mx-auto'>
                        <img className='' src={image} alt="mac image" />
                    </div>
                </div>
            </div>
            <div className='static md:fixed bottom-0 left-0 right-0'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default About;