import React from 'react';
import icon from '../../images/icon.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={icon} alt="" />
            <h1>BURN-YOUR-FAT</h1>
        </div>
    );
};

export default Header;