import React from 'react';

import "./Post.css"

const Post = ({post}) => {
    return (
        <div className = "postStyle">
            <div>userId: {post.userId}</div>
            <div>id: {post.id}</div>
            <div>title: {post.title}</div>
            <div>body: {post.body}</div>
        </div>
    );
};

export default Post;

