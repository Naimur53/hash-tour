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
        <div style={{ minHeight: '60vh' }} className='container d-flex align-items-center justify-content-center'>
            <button onClick={handleClick} className='btn btn-transparent text-center bg-white    fs-5'><i style={{ fontSize: '40px' }} className="text-warning fab fa-google border p-3 bg-dark rounded-circle"></i> Login with google</button>
        </div>
    );
};

export default Login;