import React from 'react';
import {Link} from "react-router-dom";

import './User.css'

const User = ({user:{id, name}}) => {
    return (
        <div className={'user'}>
            <div>{id}) {name}</div>
            <button><Link to={id.toString()}>UserDetail</Link></button>
            <button><Link to={id.toString() + "/albums"}>Albums</Link></button>
        </div>
    );
};

export default User;