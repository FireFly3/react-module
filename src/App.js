import './App.css';
import Users from "./components/Users/Users";
import Form from "./components/Form/Form";
import {useEffect, useState} from "react";
import {userService} from "./services/user.service";

function App() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => {
            setUsers([...value])
            setFilter([...value])
        })
    }, [])

    const filterUser = (data) => {
        let filterUsers = [...users]

        if (data.name) {
            filterUsers = filterUsers.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
        }
        if (data.username) {
            filterUsers = filterUsers.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
        }
        if (data.email) {
            filterUsers = filterUsers.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
        }
        setFilter(filterUsers)

    }

    return (
        <div>
            <Form filterUser={filterUser}/>
            <Users users={filter}/>
        </div>
    );
}

export default App;
