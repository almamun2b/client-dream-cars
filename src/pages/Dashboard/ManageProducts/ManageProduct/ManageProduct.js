import React from 'react';
import { Button } from 'react-bootstrap';

const ManageProduct = ({ product, handleDelete }) => {
    const { _id, name, price, image } = product;
    return (
        <div className="col">
            <div className="card rounded-3 p-2 shadow-lg h-100">
                <div>
                    <img className='img-fluid' src={image} alt="" />
                </div>
                <div className='mt-2 card-body'>
                    <h4 className='text-primary mt-3 card-title'>{name}</h4>
                    <p><span className='text-primary mt-3 fw-bold'></span>Price: {price} USD</p>
                    <Button onClick={() => handleDelete(_id)}>Delete</Button>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;