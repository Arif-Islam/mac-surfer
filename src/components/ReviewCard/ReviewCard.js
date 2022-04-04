import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";;

const ReviewCard = (props) => {
    const { image, name, rating, description } = props.review;

    return (
        <div className='shadow-lg hover:shadow-md bg-white w-64 md:w-96 h-96 md:h-72 rounded pt-8'>
            <div className='pb-5'>
                <img className='w-20 mx-auto -mt-20 rounded-full shadow-lg' src={image} alt="reviewer image" />
            </div>
            <h2 className='text-center pt-2 text-md font-bold text-blue-500 pb-1'>{name}</h2>
            <div className='flex justify-center text-stone-200 w-full pb-2'>
                <Rating
                    initialRating={rating}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: 'rgb(250 204 21)' }} icon={faStar} />}
                    fractions={2}
                    readonly
                />
            </div>
            <div className='w-full text-center px-4'>
                <p className='text-3xl text-left text-blue-500 h-4'>"</p>
                <p className='text-sm text-gray-600 text-center px-4'>{description}</p>
                <p className='text-3xl text-right text-blue-500'>"</p>
            </div>
        </div>
    );
};

export default ReviewCard;