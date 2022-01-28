import React from 'react';
import {Link} from "react-router-dom";

import './Album.css'
const Album = ({album:{userId, id, title}}) => {
    return (
        <div className={'album'}>
            <div>
                <div>ID: {userId}</div>
                <div>Name: {id}</div>
                <div>UserName: {title}</div>
            </div>
            <button><Link to={`${id}/photos`}>Photos</Link></button>
        </div>
    );
};

export default Album;