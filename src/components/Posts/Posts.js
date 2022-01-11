import React, {useEffect, useState} from 'react';
import '../../App.css'
import Post from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] =useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    }, []);

    return (
        <div className="userPostStyle">
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
        </div>
    );
};

export default Posts;

