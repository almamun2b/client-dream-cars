import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notfound d-flex align-items-center justify-content-center'>
            <div>
                <h1 className='error pb-3'>404</h1>
                <h1>Page Not Found</h1>
            </div>
        </div>
    );
};

export default NotFound;