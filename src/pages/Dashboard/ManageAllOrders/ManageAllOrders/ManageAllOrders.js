import React, { useEffect, useState } from 'react';
import SingleOrder from '../SingleOrder/SingleOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    // const [status, setStatus] = useState('');

    useEffect(() => {
        fetch('https://glacial-savannah-97798.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

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
    
    const handleUpdateStatus = (id)=>{
        // const status = { isPending: false };
        // const url = `http://localhost:5000/orders/${id}`;
        // fetch(url, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(status)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.modifiedCount) {
        //             console.log(data);
        //             // setEmail('');
        //         }
        //     })

    }

    return (
        <div>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 p-3 mx-auto'>
                {
                    orders.map(order => <SingleOrder
                        key={order._id}
                        order={order}
                        handleDelete={handleDelete}
                        handleUpdateStatus={handleUpdateStatus}
                    ></SingleOrder>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;