import React, { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/Provider';
import { useState } from 'react';

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const [error,setError] = useState('')
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
        signIn(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            console.log(error);
            setError(error)
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>{error}</p>
            <p><small>New to Ema-joan?<Link to='/signup'>Create New Account</Link></small></p>
        </div>
    );
};

export default Login;