import React, {useEffect, useState} from 'react';

import User from "../User/User";
const Users = ({setUserId}) => {
    const [users, setUsers] = useState([]);

    useEffect(()=> {
       fetch('https://jsonplaceholder.typicode.com/users')
           .then(value => value.json())
           .then(value => setUsers(value))
    },[]);
    return (
        <div>
            {users.map(value => <User key={value.id} user={value} setUserId={setUserId}/>)}
            {/*<button onSubmit={getPosts}>Get Posts</button>*/}
        </div>
    );
};


export default Users;
// const App = () => {
//
//     const [users, setUsers] = useState([]);
//     const [userId, setUserId] = useState(0);
//     const [user, setUser] = useState(null);
//
//     useEffect(()=>{
//         userService.getAll()
//             .then(value => setUsers(value))
//     },[])
//
//     const send = (e) => {
//         e.preventDefault()
//         userService.getById(userId)
//             .then(value => setUser(value))
//     }
//
//
//
//     const formHandler = (e) => {
//         const id = e.target.value;
//         setUserId(id)
//
//     }
//     return (
//         <div>
//             <form onSubmit={send}>
//                 <select name={'userId'} value={userId} onChange={formHandler}>
//                     {users.map(value => <option key={value.id} value={value.id}>{value.id}) {value.name}</option> )}
//                 </select>
//                 <button>send</button>
//             </form>
//             {user && <User user={user} />}
//         </div>
//     );
// };
//
// export default App;





//
// import React, {useEffect, useState} from 'react';
//
// import User from "../User/User";
//
// const Users = () => {
//     const [users, setUsers] = useState([]);
//
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(value => value.json())
//             .then(value => setUsers(value))
//     }, []);
//
//     return (
//         <div>
//             {
//                 users.map(value => <User key={value.id} user={value}/>)
//             }
//         </div>
//     );
// };
//
// export default Users;


