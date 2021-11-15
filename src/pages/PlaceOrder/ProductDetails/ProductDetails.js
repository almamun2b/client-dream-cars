import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlaceOrder from '../PlaceOrder/PlaceOrder';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://glacial-savannah-97798.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId]);


    return (
        <div className="container">
            <h1>Place Your Order Now</h1>
            <div className="row">
                <div className="col-6">
                    <div>
                        <h3>{product.name}</h3>
                        <p><small>Id: {productId}</small></p>
                        <img className="img-fluid" src={product.image} alt="" />
                        <h4>Price: {product.price}</h4>
                        <p>Description: {product.description}</p>
                    </div>
                </div>
                <div className="col-6">
                    <PlaceOrder
                        product={product}
                    ></PlaceOrder>
                </div>
            </div>
        </div>

    );
};

export default ProductDetails;