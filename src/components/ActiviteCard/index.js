import React from 'react';
import './ActiviteCard.css';

function ActiviteCard ({ id, name, date, distance, time, elevation }) {
    const formatDate = date.substring(0, 10);

    return (
        <div className='Card'>
            <ul>
                <li>Name: {name} </li>
                <li>Date: {formatDate} </li>
                <li>Distance: {distance} </li>
                <li>Time: {time} </li>
                <li>Elevation gain: {elevation} </li>
            </ul>
        </div>
    )
}

export { ActiviteCard };
