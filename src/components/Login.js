import React from "react";
import "../styles/Login.css"

const Login = () => {
    return(
        <>
        <h3>LOGIN</h3>
        <form>
            <label>Username</label>
            <input className='input' id='username' />
            <label>Password</label>
            <input className='input' id='password' />
            <button id='submit'>Submit</button>
        </form> 
        </>
    )
}

export default Login;