import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { Link, useHistory } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    console.log(loginData);

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault();
    }

    return (
        <div className="login-form">
            <div className="col-6 mx-auto mb-5">
                <div className="mx-5">
                    <br />
                    <form onSubmit={handleLoginSubmit}>

                        <h3 className='text-primary'>Please Register</h3>

                        <div className="row mb-3">
                            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input onBlur={handleOnBlur} type="text" name="name" className="form-control" id="inputName" placeholder="Your Name" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input onBlur={handleOnBlur} type="email" name="email" className="form-control" id="inputEmail3" placeholder="Your Email" required />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input onBlur={handleOnBlur} type="password" name="password" className="form-control" id="inputPassword3" placeholder="Your Password" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword2" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input onBlur={handleOnBlur} type="password" name="password2" className="form-control" id="inputPassword3" placeholder="Your Password" required />
                            </div>
                        </div>

                        <p>Already register? <Link to="/login">Login</Link></p>

                        <button type="submit" className="btn btn-primary me-3">Register</button>

                    </form>
                    {isLoading && <Spinner animation="border" />}
                    {user?.email && <Alert variant='success'>
                        User Created successfully!
                    </Alert>}
                    {authError && <Alert variant='danger'>{authError}</Alert>}
                </div>

            </div>
        </div>
    );
};

export default Register;