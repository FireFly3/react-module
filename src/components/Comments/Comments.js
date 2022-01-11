import React, {useEffect, useState} from 'react';
import '../../App.css'
import Comment from "../Comment/Comment"

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments(value))
    }, []);


    return (
        <div className="userPostStyle">
            {comments.map(value => <Comment key = {value.id} comment={value}/>)}
        </div>
    );
};

export default Comments;

// import React, {useEffect, useState} from 'react';

// import Post from "../Post/Post";
//
// const Posts = () => {
//     const [posts, setPosts] =useState([]);
//
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(value => value.json())
//             .then(value => setPosts(value))
//     }, []);
//
//     return (
//         <div>
//             {
//                 posts.map(value => <Post key={value.id} post={value}/>)
//             }
//         </div>
//     );
// };
//
// export default Posts;