// import MyComponent from "./components/MyComponent";
//
// function App() {
//     const user = {name: 'Vasia', age: 16 }
//     return (
//         <div>
//             <MyComponent>
//                 {user}
//                 test
//             </MyComponent>
//         </div>
//     );
// }
//
// export default App;

// import React, {useState} from 'react';
//
// const App = () => {
//     // let greeting = 'hello';
//     const [greeting, setGreeting] =useState('hello')
//      
// const adder = () => {
//     setGreeting(greeting+"!")
//     console.log(greeting)
//     }
//     return (
//         <div>
//             <button onClick={adder}>Click</button>
//             {greeting}
//         </div>
//     );
// };
//
// export default App;

// import React from 'react';
// import Users from "./components/Users";
//
// const App = () => {
//     return (
//         <div>
//             <Users />
//         </div>
//     );
// };
//
// export default App;

// import React, {useState} from 'react';
// import Users from "./components/Users";
//
// const App = () => {
//
//     return (
//         <div>
//             <Users />
//
//         </div>
//     );
// };
//
// export default App;

// import React, {useState} from 'react';
//
// const App = () => {
//     // const [name, setName] = useState('default')
//     // const [age, setAge] = useState('1')
//
//     const [form, setForm] = useState({name:'',age:1})
//     const send = (e) => {
//         e.preventDefault()
//       console.log(form)
//     }
//
//     // const nameHadler = (e) => {
//     //     setName(e.target.value)
//     //     console.log(e.target.value);
//     // }
//     // const nameAge = (e) => {
//     //     setAge(e.target.value)
//     //     console.log(e.target.value);
//     // }
//
//     const formHandler = (e) => {
//         const name = e.target.name;
//       setForm({...form,[name]:e.target.value})
//     }
//     return (
//         <div>
//             <form onSubmit={send}>
//                 <div><label>Name: <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>  </div>
//                 <div><label>Age: <input type="number" name={'age'} value={form.age} onChange={formHandler}/></label>  </div>
//                 <button>send</button>
//             </form>
//         </div>
//     );
// };
//
// export default App;

// import React, {createRef, useState} from 'react';
//
// const App = () => {
//
//     const name = createRef();
//     const age = createRef();
//
//     const send = (e) => {
//         e.preventDefault()
//         console.log(name.current.value)
//         console.log(age.current.value)
//
//
//     }
//     return (
//         <div>
//             <form onSubmit={send}>
//                 <div><label>Name: <input type="text" name={'name'} ref={name}/></label></div>
//                 <div><label>Age: <input type="number" name={'age'} ref={age}/></label></div>
//                 <button>send</button>
//             </form>
//         </div>
//     );
// };
//
// export default App;

import React, {useEffect, useState} from 'react';

import {userService} from "./services/userServices";
import User from "./components/User";

const App = () => {

const [users, setUsers] = useState([]);
const [userId, setUserId] = useState(0);
const [user, setUser] = useState(null);

    useEffect(()=>{
        userService.getAll()
            .then(value => setUsers(value))
    },[])

    const send = (e) => {
        e.preventDefault()
        userService.getById(userId)
            .then(value => setUser(value))
    }



    const formHandler = (e) => {
        const id = e.target.value;
        setUserId(id)

    }
    return (
        <div>
            <form onSubmit={send}>
                <select name={'userId'} value={userId} onChange={formHandler}>
                    {users.map(value => <option key={value.id} value={value.id}>{value.id}) {value.name}</option> )}
                </select>
                <button>send</button>
            </form>
            {user && <User user={user} />}
        </div>
    );
};

export default App;

