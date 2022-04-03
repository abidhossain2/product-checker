import React from 'react';
import UseReview from '../../Hooks/UseReview';
import TotalReview from '../TotalReview/TotalReview';
import './Reviews.css'
const Reviews = () => {
    const [reviews] = UseReview()
    return (
        <div className='total-review-container'>
            {
                reviews.map(review => <TotalReview
                key={review.id}
                review={review}
                ></TotalReview>)
            }
        </div>
    );
};

export default Reviews;