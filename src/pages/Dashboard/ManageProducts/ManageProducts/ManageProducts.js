import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://glacial-savannah-97798.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDelete = id => {
        const url = `https://glacial-savannah-97798.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert("Successfully Deleted");
                    const remaining = products.filter(service => service._id !== id);
                    setProducts(remaining);
                }

            });
    }

    return (
        <div>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 p-3 mx-auto'>
                {
                    products.map(product => <ManageProduct
                        key={product._id}
                        product={product}
                        handleDelete={handleDelete}
                    ></ManageProduct>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;