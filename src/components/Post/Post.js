import React from 'react';
import {Link} from "react-router-dom";

import './Post.css'

const Post = ({post:{id, title}}) => {
    return (
        <div className={'post'}>
            <div>{id}) {title}</div>
            <button><Link to={id.toString()}>Post</Link></button>
        </div>
    );
};

export default Post;