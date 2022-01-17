import React from 'react';

import './User.css'

const User = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div className='user'>
            <div>{id} {name}--{username}--{email}</div>


        </div>
    );
};

export default User;