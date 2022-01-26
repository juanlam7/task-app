import React from 'react';
import { useStats } from '../../hooks/useStats';

function Stats () {
    const [distanceAverage, timeAverage, elevationAverage] = useStats()

    return <>
        <h2>Stats</h2>
        <p>Here is yours stats for the last 3 months</p>
        <div className='Cards'>
            <div className='Card'>
                <h3>Distance</h3>
                <p>{distanceAverage} m</p>
            </div>
            <div className='Card'>
                <h3>Time</h3>
                <p>{timeAverage} seg</p>
            </div>
            <div className='Card'>
                <h3>Elevation gain</h3>
                <p>{elevationAverage} m</p>
            </div>
        </div>
    </>
}

export { Stats }
