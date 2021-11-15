import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, price, image, description } = product;
    return (
        <div className="col">
            <div className="card rounded-3 p-2 shadow-lg h-100">
                <div>
                    <img className='img-fluid' src={image} alt="" />
                </div>
                <div className='mt-2 card-body'>
                    <h4 className='text-primary mt-3 card-title'>{name}</h4>
                    <p><span className='text-primary mt-3 fw-bold'></span>Cost: {price} USD</p>
                    <p><span className='fw-bold'></span> {description}</p>
                    <Link to={`/products/${_id}`}>
                        <Button variant="danger">Buy Now</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;