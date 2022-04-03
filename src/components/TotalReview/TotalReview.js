import React from 'react';
import './TotalReview.css'
const TotalReview = (props) => {
    const {img, name, review, ratings} = props.review;
    return (
        <div className='total-personal-review'>
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>{review}</p>
            <h5>Rating: {ratings}</h5>
        </div>
    );
};

export default TotalReview;