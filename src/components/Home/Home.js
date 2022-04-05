import React from 'react';
import AboutProduct from '../AboutProduct/AboutProduct';
import CustomerReview from '../CustomerReview/CustomerReview';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = () => {
    return (
        <div>
            <AboutProduct></AboutProduct>
            <CustomerReview></CustomerReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;