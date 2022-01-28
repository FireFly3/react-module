import React from 'react';
import {Link} from "react-router-dom";

import './Post.css'

const Post = ({post:{id, title}}) => {
    return (
        <div className={'post'}>
            <div className={'post'}>{id}) {title}</div>
            <button className={'postButton'}><Link to={id.toString()}>Post</Link></button>
        </div>
    );
};

export default Post;