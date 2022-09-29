import React from 'react';
import './Blogs.css';
import icon from '../../images/icon.png';

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <div className='blog-title'>
                <img src={icon} alt="" />
                <h1>BURN-YOUR-FAT</h1>
            </div>
            <h3>Select todays exercise</h3>

        </div>
    );
};

export default Blogs;