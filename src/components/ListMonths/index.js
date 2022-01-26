import React from 'react';
import { Link } from 'wouter';
import { useUpdateTask } from '../../hooks/useUpdateTask';

function ListMonth () {
    const {allMonths, takingMonth} = useUpdateTask();

    return <>
            <h2>Activities by month</h2>
            <div className='Cards'>
                {
                    allMonths.map((item, index) => 
                        <Link to='/activities' className='Card' key={index} onClick={ () => takingMonth(item.code) }>
                            {item.name}
                        </Link>
                    )
                }
            </div>
    </>
}

export { ListMonth }
