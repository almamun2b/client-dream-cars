import React from 'react';
import { Button } from 'react-bootstrap';

const SingleOrder = ({ order, handleDelete, handleUpdateStatus }) => {
    console.log(order);
    const { _id, name, email, city, address, phone, isPending, product } = order;
    const status = () => {
        if (isPending) {
            return "Pending";
        }
        else {
            return "Approved";
        }
    }
    return (
        <div className="col">
            <div className="card rounded-3 p-2 shadow-lg h-100">
                <div>
                    <img className='img-fluid' src={product.image} alt="" />
                </div>
                <div className='mt-2 card-body'>
                    <h4 className='text-primary mt-3 card-title'>{product.name}</h4>
                    <p><span className='mt-3 fw-bold'>Price: {product.price} USD</span></p>
                    <h5 className='text-primary mt-3 card-title'>Customer : {name}</h5>
                    <p><span className='mt-3 fw-bold'>Email: {email}</span></p>
                    <p><span className='mt-3 fw-bold'>City: {city}</span></p>
                    <p><span className='mt-3 fw-bold'>Address: {address}</span></p>
                    <p><span className='mt-3 fw-bold'>Phone: {phone}</span></p>
                    <p><span className='mt-3 fw-bold'>Status: {status()}</span></p>

                    <di className="d-flex justify-content-between">
                        <Button variant="danger" onClick={() => handleUpdateStatus(_id)}>Approve</Button>
                        <Button variant="danger" onClick={() => handleDelete(_id)}>Delete</Button>
                    </di>
                </div>
            </div>
        </div>
    );
};

export default SingleOrder;