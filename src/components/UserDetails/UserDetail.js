import React, {useEffect, useState} from 'react';

import './UserDetail.css'

const UserDetail = ({userId, setFlagForPosts, flagForPosts}) => {
    const [userDetails, setUserDetails] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + userId)
            .then(value => value.json())
            .then(value => setUserDetails(value))
    }, [userId])

    return (
        <div className='details'>
            <div className='userDetails'>
                {JSON.stringify(userDetails)}
            </div>
            <div className='userComments'><input onClick={() => setFlagForPosts(!flagForPosts)} type="button" value="Get Posts"/></div>
        </div>
    );
};

export default UserDetail;