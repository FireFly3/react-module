import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import {useParams} from "react-router-dom";
import UserPost from "../../components/UserPost/UserPost";

const UserPosts = () => {
    const [posts, setPosts] = useState([]);
    const {id} = useParams();

    useEffect(()=> {
        userService.getPostsByUserId(id).then(value => setPosts(value))
    },[id])
    return (
        <div>
            {posts.map(post=> <UserPost key={post.id} post={post}/>)}
        </div>
    );
};

export default UserPosts;

