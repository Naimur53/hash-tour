import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { user, handleGoogleSignIn } = useAuth();
    console.log(user);
    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from.pathname || '/home'
    const handleClick = () => {
        handleGoogleSignIn()
            .then((result) => {
                history.push(url);
            }).catch((error) => {
                // Handle Errors here. 
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }
    return (
        <div className='container'>
            <h1>login</h1>
            <button onClick={handleClick} className='btn btn-primary'>login with google</button>
        </div>
    );
};

export default Login;