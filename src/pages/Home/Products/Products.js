import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProducts();
    // console.log(services);
    return (
        <div>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 p-3 mx-auto'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;