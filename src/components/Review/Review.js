import React from 'react';
import './Review.css'

const Review = (props) => {
    const {name,img, review, ratings} = props.review;
    return (
        <div className='personal-review'>
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>{review}</p>
            <h5>Rating: {ratings}</h5>
        </div>
    );
};

export default Review;