import React from 'react';
import * as data from '../../db';
import { ActiviteCard } from '../../components/ActiviteCard';
import './Activities.css';

function Activities () {
    const {activities} = data;

    return <>
        <h2>All activities</h2>
        <div className='Cards'>
            {
                activities.map( ({ id, name, date, distance, time, elevation_gain }) => 
                    <ActiviteCard 
                        key={id}
                        name={name} 
                        date={date} 
                        distance={distance} 
                        time={time}
                        elevation={elevation_gain}    
                    />
                )
            }
        </div>
    </>
        

    
}

export { Activities }
