import React, { useState } from 'react';
import './Main.css'

import Aside from '../Aside/Aside';
import Blogs from '../Blogs/Blogs';
import Header from '../Header/Header';

const Main = () => {
    const [details, setDetails] = useState([]);

    const handleAddToList = (blog) => {
        const newDetails = [...details, blog];
        setDetails(newDetails);
    }

    // https://ibb.co/FDjkKtm
    // https://ibb.co/NtrMG8X
    // https://ibb.co/JtP4TV6
    // https://ibb.co/gg2fJN0
    // https://ibb.co/3dRnQZ7
    // https://ibb.co/99CQBpk
    return (
        <div className='main-container'>
            <Header></Header>
            <Blogs handleAddToList={handleAddToList}></Blogs>
            <Aside details={details}></Aside>

        </div>
    );
};

export default Main;