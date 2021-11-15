import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://glacial-savannah-97798.herokuapp.com/products', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert("Successfully Added");
                    reset();
                }
            })
    };

    return (
        <div className="add-service my-4">
            <h3 className="py-4">Please Add Product</h3>
            <form className="form-control border-0" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("image")} placeholder="Image URL" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;