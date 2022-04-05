import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const ReviewHome = () => {
    const [reviews, setReviews] = useReviews();
    // console.log(reviews);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 w-3/4 xl:w-3/5 2xl:w-3/4 mx-auto pt-20 lg:gap-20 gap-10 pb-4 lg:pb-16'>
            {
                // get & map first three data from reviews array
                reviews.slice(0,3).map(review => <ReviewCard
                    key={review.id}
                    review={review}
                ></ReviewCard>)
            }
        </div>
    );
};

export default ReviewHome;