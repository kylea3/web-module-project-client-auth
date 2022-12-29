import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../styles/Login.css"

const Login = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.token);
            })
            .catch(err => {
                console.log(err)
            });

        navigate('/friendlist');
    }
    return(
        <>
        <h3>LOGIN</h3>
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input onChange={handleChange} name='username' type='username' />
            <label>Password</label>
            <input onChange={handleChange} name='password' type='password' />
            <button id='submit'>Submit</button>
        </form> 
        </>
    )
}

export default Login;