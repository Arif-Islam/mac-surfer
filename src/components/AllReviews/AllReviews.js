import React from 'react';
import useReviews from '../../hooks/useReviews';
import './AllReviews.css';
import ReviewCard from '../ReviewCard/ReviewCard';
import Footer from '../Footer/Footer';

const AllReviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className='text-center my-16 '>
                <h1 className='text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-gray-700 font-sans mb-5'>All Reviews</h1>
                <hr className='w-2/4 md:w-2/5 xl:w-2/6 2xl:w-1/12 mx-auto border-gray-800 mb-8 md:mb-10 lg:mb-8 xl:mb-12' />
            </div>
            <div className='bg-gray-100'>
                <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 w-3/4 xl:w-3/5 2xl:w-3/4 mx-auto pt-20 lg:gap-20 gap-10 pb-4 lg:pb-16'>
                    {
                        // display every reviews
                        reviews.map(review => <ReviewCard
                            key={review.id}
                            review={review}
                        ></ReviewCard>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllReviews;