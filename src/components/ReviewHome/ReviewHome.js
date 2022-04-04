import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const ReviewHome = () => {
    const [reviews, setReviews] = useReviews();
    // console.log(reviews);
    return (
        <div className='grid grid-cols-3 w-3/4 mx-auto pt-20 gap-10'>
            {
                reviews.map(review => <ReviewCard
                    key={review.id}
                    review={review}
                ></ReviewCard>)
            }
        </div>
    );
};

export default ReviewHome;