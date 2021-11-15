import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div className="login-form">
            <div className="col-6 mx-auto mb-5">
                <div className="mx-5">
                    <br />
                    <form onSubmit={handleLoginSubmit}>

                        <h3 className='text-primary'>Please Login</h3>

                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input onBlur={handleOnChange} type="email" name="email" className="form-control" id="inputEmail3" placeholder="Your Email" required />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input onBlur={handleOnChange} type="password" name="password" className="form-control" id="inputPassword3" placeholder="Your Password" required />
                            </div>
                        </div>


                        <p>new user? <Link to="/register">Register</Link></p>

                        <button type="submit" className="btn btn-primary me-3">Login</button>

                    </form>
                    <br />
                    <button className="btn btn-primary" onClick={handleGoogleSignIn}>Google SignIn</button>
                    {isLoading && <Spinner animation="border" />}
                    {user?.email && <Alert variant='success'>
                        Login successfully!
                    </Alert>}
                    {authError && <Alert variant='danger'>{authError}</Alert>}
                </div>

            </div>
        </div>
    );
};

export default Login;