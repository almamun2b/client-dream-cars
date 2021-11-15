import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';

const FeaturesProducts = () => {
    const[products] = useProducts();
    const slicedProducts = products.slice(0, 6);
    return (
        <div>
            <h4 className='my-4'>
                All Products: <Link to='/products'>
                    <button className='btn btn-primary'>Explore</button>
                </Link>
            </h4>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 p-3 container mx-auto'>
                {
                    slicedProducts.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default FeaturesProducts;