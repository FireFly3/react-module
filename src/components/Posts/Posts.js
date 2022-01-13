import React, {useEffect, useState} from 'react';
import Post from "./post";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + userId + '/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    }, [setPosts, userId])

    return (
        <div>
            <div>
                {posts.map(value => <Post key={value.id} post={value}/>)}
            </div>
        </div>
    );
};

export default Posts;