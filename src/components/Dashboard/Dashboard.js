import React from 'react';
import Charts from '../Charts/Charts';
import Footer from '../Footer/Footer';

const Dashboard = () => {
    return (
        <div>
            <Charts></Charts>
            <div className='static md:fixed bottom-0 left-0 right-0'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Dashboard;