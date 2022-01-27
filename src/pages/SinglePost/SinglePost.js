import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";
import {postService} from "../../services/post.service";

const SinglePost = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(()=> {
        postService.getById(id).then(value => setPost({...value}))
    },[id])

    return (
        <div>
            {post && (
                <div>
                    <div>ID: {post.id}</div>
                    <div>UserID: {post.userId}</div>
                    <div>Title: {post.title}</div>
                    <div>Body: {post.body}</div>
                    <button><Link to={'comments'}>Comments</Link></button>
                </div>
            )}
            <div><Outlet/></div>
        </div>
    );
};

export default SinglePost;