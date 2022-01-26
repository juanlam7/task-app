import React from 'react';
import { useSelector } from 'react-redux';
import { ActiviteCard } from '../../components/ActiviteCard';

function Activities () {
    const allActivities = useSelector((store) => store.taskReducer.tasks);

    const existActivities = <>
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
    ;

    const notExistActivities = <h2>There is not Activities</h2>;

    return allActivities.length === 0 ? notExistActivities : existActivities;
}

export { Activities }
