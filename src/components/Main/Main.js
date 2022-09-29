import React from 'react';
import './Main.css'
import Aside from '../Aside/Aside';
import Blogs from '../Blogs/Blogs';

const Main = () => {
    return (
        <div className='main-container'>
            <Blogs></Blogs>
            <Aside></Aside>
        </div>
    );
};

export default Main;