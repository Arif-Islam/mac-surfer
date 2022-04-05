import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../images/616dd365c41881634587493-removebg-preview.png';
import './AboutProduct.css';

const AboutProduct = () => {
    const navigate = useNavigate();
    const goToAbout = () => {
        navigate('/about');
    }

    return (
        // display product image and some text
        <div className='mb-10'>
            <div className='flex flex-col md:grid grid-cols-2 2xl:grid-cols-5 gap-20 md:w-4/5 2xl:w-4/6 mx-auto items-center '>
                <div className='col-span-1 2xl:col-span-3 space-y-4 order-2 md:order-first'>
                    <h1 className='text-center md:text-left font-kanit text-3xl xl:text-4xl 2xl:text-5xl font-bold'>Supercharged for pros</h1>
                    <h1 className='text-center md:text-left font-kanit text-3xl xl:text-4xl 2xl:text-5xl font-bold text-blue-800'>Macbook Pro M1 14 inch</h1>
                    <p className='font-poppins text-justify px-6 md:px-0'>The most powerful MacBook Pro ever is here. With the  blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast.
                    </p>
                    <div className='text-center md:text-left'>
                        <button onClick={goToAbout} className='w-11/12 md:w-auto bg-black text-stone-100 hover:bg-gray-400 hover:text-black px-6 py-4 rounded-lg font-semibold text-lg'>About Us</button>
                    </div>
                </div>
                <div className='col-span-1 2xl:col-span-2 mx-auto'>
                    <img src={image} alt="mac image" />
                </div>
            </div>
        </div>
    );
};

export default AboutProduct;