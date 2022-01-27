import React from 'react';

const UserPost = ({post:{id, userId, title, body}}) => {
    return (
        <div>
            <div>ID: {id}</div>
            <div>UserID: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default UserPost;