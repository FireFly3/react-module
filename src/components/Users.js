import React, {useEffect, useState} from 'react';

import User from "./User";
import {userService} from "../services/userServices";

const Users = ({getUsersId}) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(value => value.json())
        userService.getAll()
            .then(value => setUsers(value))
    },[])

        const getUserId = (id) => {

                // fetch('https://jsonplaceholder.typicode.com/users/'+id)
                //     .then(value => value.json())
            userService.getById(id)
                    .then(value => setUser(value))
            }

    return (
        <div>
            {/*<div>{user?.id}-{user?.name}-{user?.email}-{user?.username}</div>*/}
            {user && <div>{user?.id}-{user?.name}-{user?.email}-{user?.username}</div>}
            <div>{users.map(value => <User key={value.id} user={value} getUserId={getUserId}/>)}</div>
        </div>
    );
};

export default Users;