// import React, { useEffect, useState } from 'react';
import UseReview from '../../Hooks/UseReview';
import Review from '../Review/Review';
import './Home.css'
const Home = () => {
    const [reviews] = UseReview();
    return (
        <>
        <div className='home-container'>
            <div><span className='first-heading'>Comfortable chair</span> <br /> <span className='second-heading'>for your interior</span>
            <p>A stunning wingback shape and ottoman give <br /> this charcoal reading chair the edge over competition.</p>
            </div>
            <img src="http://cdn.home-designing.com/wp-content/uploads/2016/12/grey-wingback-and-ottoman-cool-reading-chairs-600x479.jpg" alt="" />
        </div>
            <h1>Buyer Review</h1>
        <div className='review-container'>
            {
                reviews.map(review => <Review
                key={review.id}
                review={review}
                ></Review>)
            }
        </div>
        <button className='rest-review'>See More</button>
        </>
    );
};

export default Home;