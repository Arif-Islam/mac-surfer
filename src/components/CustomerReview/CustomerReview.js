import React from 'react';
import { Link } from 'react-router-dom';
import ReviewHome from '../ReviewHome/ReviewHome';
import './CustomerReview.css';

const CustomerReview = () => {
    return (
        <div className='pt-10 bg-gray-100'>
            <h1 className='text-2xl lg:text-3xl xl:text-4xl text-center font-semibold pb-4 font-sans pt-4'>Customer Reviews</h1>
            <hr className='w-1/2 mx-auto border-gray-800 mb-8 md:mb-10 lg:mb-8 xl:mb-12' />
            <ReviewHome></ReviewHome>
            <div className='text-center pb-20'>
                <Link className='bg-black text-stone-100 hover:bg-gray-400 hover:text-black px-8 py-2 rounded-lg font-semibold text-lg' to='/reviews'>See All Reviews</Link>
            </div>
        </div>
    );
};

export default CustomerReview;