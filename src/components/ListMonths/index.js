import React from 'react';

/* import { EachMonth } from '../EachMonth'; */

function ListMonth () {
    const allMonths = [ 'Januray', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December' ]

    return <>
            <h2>Activities by month</h2>
            <div className='Cards'>
                {
                    allMonths.map((item) => 
                        <div className='Card'>
                            {item}
                        </div>
                    )
                }
            </div>
    </>
}

export { ListMonth }
