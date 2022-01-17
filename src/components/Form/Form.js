import React, {useState} from 'react';

import './Form.css'

const Form = ({filterUser}) => {
    const [form, setForm] = useState({name: '', username: '', email: ''});

    const formHandler = (e) => {
        const eventData = {...form, [e.target.name]: e.target.value}
        setForm({...form, ...eventData})
    }

    const find = (e) => {
        e.preventDefault()
        filterUser(form)
    }
    return (
        <div className='form'>
            <form>
                <label>Name: <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
                <label>Username: <input type="text" name={'username'} value={form.username}
                                        onChange={formHandler}/></label>
                <label>Email: <input type="text" name={'email'} value={form.email} onChange={formHandler}/></label>
            </form>
            <button onClick={find}>Find</button>
        </div>
    );
};

export default Form;