import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../styles/Login.css"

const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.post('http://localhost:9000/api/logout', {}, {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                localStorage.removeItem('token');
            })
            .catch(err => {
                console.log(err)
            });

        navigate('/');

    }, [])
    return(
        <>
        </>
    )
}

export default Logout