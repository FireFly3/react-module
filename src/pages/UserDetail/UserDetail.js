import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";
import {userService} from "../../services/user.service";

import './userDatail.css'

const UserDetail = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);

    useEffect(()=> {
        userService.getById(id).then(value => setUser(value))
    },[id])

    return (
        <div className={'userDetail'}>
            {user && (
                <div><h1>User</h1>
                    <div>ID: {user.id}</div>
                    <div>Name: {user.name}</div>
                    <div>UserName: {user.username}</div>
                    <div>Email: {user.email}</div>
                    <button><Link to={'posts'}>Posts</Link></button>
                </div>
            )}
            <div><Outlet/></div>
        </div>
    );
};

export default UserDetail;