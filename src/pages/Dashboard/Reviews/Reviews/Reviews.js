import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './Reviews.css';
import useAuth from '../../../../hooks/useAuth';
import MyReviews from '../MyReviews/MyReviews';


const Reviews = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();
    console.log(user)
    
    const onSubmit = data => {
        console.log(data);
        axios.post('https://glacial-savannah-97798.herokuapp.com/reviews', data)
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
            <div>
                <h3>Please Add Review</h3>
                <form className="form-control border-0" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder="Name" value={user.displayName}/>
                    <input {...register("email")} placeholder="Email" value={user.email}/>
                    <textarea {...register("comment")} placeholder="Comment" />
                    <input type="number" {...register("rating")} placeholder="Rating" />
                    <input type="submit" />
                </form>
            </div>
            <div>
                <h3 className='my-4'>My Reviews</h3>
                <MyReviews></MyReviews>
            </div>
        </div>
    );
};

export default Reviews;