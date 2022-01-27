import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";
import {postService} from "../../services/post.service";
import {commentsService} from "../../services/comments.service";
import Comment from "../../components/Comment/Comment";

const Comments = () => {
    const {id} = useParams();
    const [comments, setComments] = useState(null);

    useEffect(()=> {
        commentsService.getById(id).then(value => setComments([...value]))
    },[])
    return (
        <div>
            <div><h1>Comments</h1>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export default Comments;