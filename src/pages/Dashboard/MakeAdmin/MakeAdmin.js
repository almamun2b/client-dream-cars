import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://glacial-savannah-97798.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    // setEmail('');
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleAdminSubmit}>
                <h3 className='text-primary'>Make an Admin</h3>
                <div className="row mb-3">
                    <div className="col-8 mx-auto">
                        <input onBlur={handleOnBlur} type="email" name="email" className="form-control" id="inputEmail4" placeholder="Email" required />
                    </div>
                </div>
                <Button type="submit" className="btn btn-primary me-3">Make Admin</Button>
            </form>
            {success && <Alert variant='success' >Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;