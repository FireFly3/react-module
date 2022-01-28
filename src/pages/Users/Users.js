import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import User from "../../components/User/User";
import {Outlet} from "react-router-dom";

import './Users.css'


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        userService.getAll().then(value => setUsers([...value]))
    },[])
    return (
        <div className={'users'}>
            <div className={'usersWithButton'}><h1>Users</h1>
                {users.map(user => <User key={user.id} user={user}/>)}</div>
            <div className={'userDetail'}><Outlet/></div>
        </div>

);
};

export default Users;