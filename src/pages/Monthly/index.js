import React from 'react';

import { Stats } from '../../components/Stats';
import { ListMonth } from '../../components/ListMonths';

function Monthly () {
    return <>
            <Stats choice='monthly'/>
            <Stats choice='global'/>
            <ListMonth />
        </>
}

export { Monthly }
