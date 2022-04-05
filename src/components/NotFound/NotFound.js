import React from 'react';
import Footer from '../Footer/Footer';

const NotFound = () => {
    return (
        <div>
            {/* route not found message */}
            <h1 className='text-2xl font-semibold text-gray-700 text-center mt-14 lg:mt-20 font-sans'>Sorry, we got nothing to show you in here!!!</h1>
            <div className='fixed bottom-0 left-0 right-0'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default NotFound;