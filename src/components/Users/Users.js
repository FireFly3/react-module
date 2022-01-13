import React, {useEffect, useState} from 'react';

const Users = () => {
    const [users, setUsers] = useState([users]);

    useEffect(()=> {
       fetch('https://jsonplaceholder.typicode.com/users')
           .then(value => value.json())
           .then(value => setUsers(value))
    },[]);
    return (
        <div>
            {users.map(value => <Users key={value.id} user={value}/>)}
        </div>
    );
};

export default Users;