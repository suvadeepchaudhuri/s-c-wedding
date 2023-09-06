import React, { useEffect, useState } from 'react';

var wed = new Date(2023, 11, 28, 17, 0, 0, 0)
export default function Countdown() {
    const [timeRemaining, setTimeRemaining] = useState({ day: '', hour: '', min: '', sec: '' });
    const calculateTime = () => {
        const diffTime = Math.abs(wed - new Date());
        const day = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const hour = Math.ceil(diffTime / (1000 * 60 * 60) % 24);
        const min = Math.ceil(diffTime / (1000 * 60) % 60);
        const sec = Math.ceil(diffTime / (1000) % 60);
        setTimeRemaining({
            day, hour, min, sec
        });
    }

    useEffect(() => {
        setTimeout(() => {
            calculateTime();
        }, 1000);
    }, [timeRemaining])

    useEffect(() => {
        calculateTime();
    }, [])

    return (<div>
        <span className='w-10 inline-block'>{timeRemaining.day}</span> {timeRemaining.day == 1 ? 'day' : 'days'},  <span className='w-10 inline-block'>{timeRemaining.hour}</span> {timeRemaining.hour == 1 ? 'hour' : 'hours'},  <span className='w-10 inline-block'>{timeRemaining.min}</span> min and <span className='w-10 inline-block'>{timeRemaining.sec}</span> sec to go!
    </div>);
}