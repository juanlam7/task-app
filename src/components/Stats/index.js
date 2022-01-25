import React from 'react';


function Stats () {

    return <>
        <h2>Stats</h2>
        <p>Here is yours stats for the last 3 months</p>
        <div className='Cards'>
            <div className='Card'>
                <h3>Distance</h3>
                <p>30000 m</p>
            </div>
            <div className='Card'>
                <h3>Time</h3>
                <p>5000000 seg</p>
            </div>
            <div className='Card'>
                <h3>Elevation gain</h3>
                <p>300 m</p>
            </div>
        </div>
    </>
}

export { Stats }
