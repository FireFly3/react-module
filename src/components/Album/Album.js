import React from 'react';
import {Link} from "react-router-dom";

const Album = ({album:{userId, id, title}}) => {
    return (
        <div>
            <div>ID: {userId}</div>
            <div>Name: {id}</div>
            <div>UserName: {title}</div>
            <button><Link to={'posts'}>Photos</Link></button>
        </div>
    );
};

export default Album;