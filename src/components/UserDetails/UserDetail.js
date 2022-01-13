import React, {useEffect, useState} from 'react';
import User from "../User/User";

const UserDetail = ({userId}) => {
    const [userDetails, setUserDetails] = useState([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users'+userId)
            .then(value => value.json())
            .then(value => setUserDetails(value))
    },[])
    return (
        <div>
            {/*{userDetails.map(value => <User key={userId}/>)}*/}
        </div>
    );
};

export default UserDetail;

// import React, {useEffect, useState} from 'react';
// import Post from "./post";
//
// const Posts = ({userId}) => {
//     const [posts, setPosts] = useState([]);
//
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users/' + userId + '/posts')
//             .then(value => value.json())
//             .then(value => setPosts(value))
//     }, [setPosts, userId])
//
//     return (
//         <div>
//             <div>
//                 {posts.map(value => <Post key={value.id} post={value}/>)}
//             </div>
//         </div>
//     );
// };
//
// export default Posts;