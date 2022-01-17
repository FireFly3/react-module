import React from 'react';

import './User.css'

const User = ({user, setUserId}) => {

    return (
        <div className='userStyle'>
            <div>
                id: {user.id}
                <br/>
                name: {user.name}
                <br/>
                username: {user.username}
            </div>

            <div>
                <button onClick={() => setUserId(user.id)}>Get Info</button>
            </div>

        </div>
    );
};

export default User;