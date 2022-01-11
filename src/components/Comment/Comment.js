import React from 'react';

import './Comment.css'

const Comment = ({comment}) => {
    return (
        <div className="commentsStyle">
            <div>postId: {comment.postId}</div>
            <div>id: {comment.id}</div>
            <div>name: {comment.name}</div>
            <div>email: {comment.email}</div>
            <div>body: {comment.body}</div>
        </div>
    );
};

export default Comment;

// import React from 'react';
//
// const Post = ({post}) => {
//     return (
//         <div>
//             <div>userId: {post.userId}</div>
//             <div>id: {post.id}</div>
//             <div>title: {post.title}</div>
//             <div>body: {post.body}</div>
//         </div>
//     );
// };
//
// export default Post;

