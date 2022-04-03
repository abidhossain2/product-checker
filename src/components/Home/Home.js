import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <>
        <div className='home-container'>
            <div><span className='first-heading'>Comfortable chair</span> <br /> <span className='second-heading'>for your interior</span>
            <p>A stunning wingback shape and ottoman give <br /> this charcoal reading chair the edge over competition.</p>
            </div>
            <img src="http://cdn.home-designing.com/wp-content/uploads/2016/12/grey-wingback-and-ottoman-cool-reading-chairs-600x479.jpg" alt="" />
        </div>
        <div className='review-container'>
            <h1>Buyer Review</h1>
        </div>
        </>
    );
};

export default Home;