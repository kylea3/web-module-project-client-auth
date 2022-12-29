import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/Login.css'

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:9000/api/friends', {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                setFriends(res.data);
                // console.log(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])
    return (
        <>
        <h3>FRIENDS LIST</h3>
        <ul>
        {friends.map(friend => {
            return(
                <li key={friend.id}>{`${friend.name.toUpperCase()}    -    ${friend.email.toUpperCase()}`}</li>
            )
        })}
        </ul>
        </>
    )
}

export default FriendsList;