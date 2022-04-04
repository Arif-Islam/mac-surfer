import React from 'react';
import ReviewHome from '../ReviewHome/ReviewHome';
import './CustomerReview.css';

const CustomerReview = () => {
    return (
        <div className='pt-10 bg-gray-100'>
            <h1 className='text-2xl lg:text-3xl xl:text-4xl text-center font-semibold pb-4 font-sans'>Customer Reviews</h1>
            <hr className='w-1/2 mx-auto border-gray-800' />
            <ReviewHome></ReviewHome>
        </div>
    );
};

export default CustomerReview;