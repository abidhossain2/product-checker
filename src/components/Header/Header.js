import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='nav-link'>
            <CustomLink className='link' to='/'>Home</CustomLink>
            <CustomLink className='link' to='/reviews'>Reviews</CustomLink>
            <CustomLink className='link' to='/dashboard'>Dashboard</CustomLink>
            <CustomLink className='link' to='/blog'>Blog</CustomLink>
        </div>
    );
};

export default Header;