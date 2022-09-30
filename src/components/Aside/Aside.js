
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import myImage from '../../images/my-image.png';
import './Aside.css'

const Aside = ({ details }) => {
    const [time, setTime] = useState([0]);
    console.log(time);
    const handleBreakTime = (e) => {
        let breakTime;
        let time = parseInt(e.target.innerText);
        const getTime = localStorage.getItem('break-time');
        if (getTime) {
            const newTime = JSON.parse(getTime);
            breakTime = [...newTime, time];
        } else {
            breakTime = [];
            breakTime.push(time);
        }
        localStorage.setItem('break-time', JSON.stringify(breakTime));
        let totalTime = 0;
        for (const time of breakTime) {
            totalTime += time;
            setTime(totalTime);
        }
    }

    let exerciseTime = 0;
    for (const detail of details) {
        exerciseTime = exerciseTime + parseInt(detail.time);
    }

    return (
        <div className='aside'>
            <div className='my-info'>
                <img src={myImage} alt="" />
                <h2>Mahmod Hasan</h2>
                <strong><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon> Chittagong, Bangladesh</strong>
            </div>
            <div className='add-a-break'>
                <h2>Add a break</h2>
                <div className='break-time'>
                    <button onClick={handleBreakTime}>10</button>
                    <button onClick={handleBreakTime}>20</button>
                    <button onClick={handleBreakTime}>30</button>
                    <button onClick={handleBreakTime}>40</button>
                </div>
            </div>

            <div className='details'>
                <h2>Exercise Details</h2>
                <h4>Exercise Time : {exerciseTime} seconds</h4>
                <h4>Break Time : {time} seconds</h4>
            </div>
            <button className='activity-completed'>Activity Completed</button>
        </div>
    );
};

export default Aside;