import React from 'react';
import AboutProduct from '../AboutProduct/AboutProduct';
import CustomerReview from '../CustomerReview/CustomerReview';
import './Home.css';

const Home = () => {
    return (
        <div>
            <AboutProduct></AboutProduct>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;