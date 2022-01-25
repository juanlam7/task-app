import React from 'react';
import { Link } from 'wouter';

import './Header.css'


function Header () {
    return (
        <>
            <div className="header-style">
                <Link to='/'>
                    Monthly
                </Link>
                <Link to='/activities'>
                    Activities
                </Link>
            </div>
        </>
    );
};

export { Header };
