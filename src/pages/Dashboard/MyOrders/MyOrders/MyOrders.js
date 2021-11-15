import React, { useState, useEffect } from 'react';
import useAuth from '../../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const url = `https://glacial-savannah-97798.herokuapp.com/MyOrders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email])
    
    const handleDelete = id => {
        const url = `https://glacial-savannah-97798.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert("Successfully Deleted");
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            });
    }

    console.log(orders);
    
    return (
        <div>
            <h2>My Orders</h2>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 p-3 mx-auto'>
                {
                    orders.map(order => <MyOrder
                        key={order._id}
                        order={order}
                        handleDelete={handleDelete}
                    ></MyOrder>)
                }
            </div>
        </div>
    );
};

export default MyOrders;