import React from 'react';
import './Blog.css'


const Blog = ({ blog, handleAddToList }) => {
    const { img, name, details, time, age } = blog;
    return (
        <div className='single-blog'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{details.slice(0, 80)}...</p>
            <p>Time required : {time} s</p>
            <p>Age for : {age}</p>
            <button onClick={() => handleAddToList(blog)}>Add to list</button>
        </div>
    );
};

export default Blog;