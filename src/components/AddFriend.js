import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../styles/Login.css"

const AddFriend = () => {
    const navigate = useNavigate();
    const [info, setInfo] = useState({
        name: '',
        email: ''
    })

    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        axios.post('http://localhost:9000/api/friends', info, {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            });

        navigate('/friendlist');
    }
    return(
        <>
        <h3>ADD FRIEND</h3>
        <form onSubmit={handleSubmit}>
            <label>Friend Name</label>
            <input onChange={handleChange} name='name' type='name' />
            <label>Friend Email</label>
            <input onChange={handleChange} name='email' type='email' />
            <button id='submit'>Submit</button>
        </form> 
        </>
    )
}

export default AddFriend;