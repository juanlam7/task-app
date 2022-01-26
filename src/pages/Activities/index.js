import React from 'react';
import { useSelector } from 'react-redux';
import { ActiviteCard } from '../../components/ActiviteCard';

function Activities () {
    const allActivities = useSelector((store) => store.taskReducer.tasks);

    return <>
        <h2>Activities</h2>
        <div className='Cards'>
            {
                allActivities.map( ({ id, name, date, distance, time, elevation_gain }) => 
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
