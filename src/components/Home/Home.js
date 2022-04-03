import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <>
        <div className='home-container'>
            <h1><span className='first-heading'>Comfortable chair</span> <br /> <span className='second-heading'>for your interior</span></h1>
            <img src="https://images.unsplash.com/photo-1506898667547-42e22a46e125?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <div className='review-container'>
            <h1>Buyer Review</h1>
        </div>
        </>
    );
};

export default Home;