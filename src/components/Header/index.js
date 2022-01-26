import React, {useEffect} from 'react';
import { Link, useLocation } from 'wouter';
import { useDispatch } from 'react-redux';
import { resetTask } from '../../redux/actions/taskActions';

import './Header.css'


function Header () {
    const [location] = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (location === '/') {
            dispatch(resetTask());
        }
    }, [location, dispatch])
    
    return (
        <>
            <div className="header-style">
                <Link 
                    to='/' 
                    className={ location === '/' ? 'disabled-link' : '' } 
                >
                    Monthly
                </Link>
                <Link 
                    to='/activities' 
                    className={ location === '/activities' ? 'disabled-link' : '' } 
                >
                    Activities
                </Link>
            </div>
        </>
    );
};

export { Header };
