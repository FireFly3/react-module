import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {commentsService} from "../../services/comments.service";

const Comment = () => {
    const {id} = useParams();
    const [comment, setComment] = useState(null)
    
    useEffect(()=> {
        commentsService.getById(id).then(value => setComment({...value}))
    },[id])
    return (
        <div>
            <div>
                <div>PostId: {comment.postId}</div>
                <div>ID: {comment.id}</div>
                <div>Name: {comment.name}</div>
                <div>Email: {comment.email}</div>
                <div>Body: {comment.body}</div>
            </div>

        </div>
    );
};

export default Comment;