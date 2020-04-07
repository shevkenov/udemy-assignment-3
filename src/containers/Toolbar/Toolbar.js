import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Toolbar() {
    return (
        <div className='nav'>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/courses'>Courses</NavLink>
        </div>
    )
}
