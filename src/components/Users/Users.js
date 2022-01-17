import React, {useEffect, useState} from 'react';

import User from "../User/User";
const Users = ({setUserId}) => {
    const [users, setUsers] = useState([]);

    useEffect(()=> {
       fetch('https://jsonplaceholder.typicode.com/users')
           .then(value => value.json())
           .then(value => setUsers(value))
    },[]);
    return (
        <div>
            {users.map(value => <User key={value.id} user={value} setUserId={setUserId}/>)}
            {/*<button onSubmit={getPosts}>Get Posts</button>*/}
        </div>
    );
};


export default Users;


