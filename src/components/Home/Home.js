// import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseReview from '../../Hooks/UseReview';
import Review from '../Review/Review';
import './Home.css'
const Home = () => {
    const [reviews] = UseReview();
    return (
        <>
        <div className='home-container'>
            <div className='heading'><span className='first-heading'>Comfortable chair</span> <br /> <span className='second-heading'>for your interior</span>
            <p>A stunning wingback shape and ottoman give <br /> this charcoal reading chair the edge over competition.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
            <h1>Buyer Review</h1>
        <div className='review-container'>
            {
                reviews.map(review => <Review
                key={review.id}
                review={review}
                ></Review>).slice(0,3)
            }
        </div>
        <Link to='/reviews' className='rest-review'>See More</Link>
        </>
    );
};

export default Home;