import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css';

const Blogs = ({ handleAddToList }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    return (

        <div className='blogs-container'>
            {
                blogs.map(blog =>
                    <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddToList={handleAddToList}
                    >

                    </Blog>
                )
            }
        </div>

    );
};

export default Blogs;