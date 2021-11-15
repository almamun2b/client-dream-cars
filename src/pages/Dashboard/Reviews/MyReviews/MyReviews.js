import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Review from '../../../Home/Review/Review';

const MyReviews = () => {
    const { user } = useAuth();
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const url = `https://glacial-savannah-97798.herokuapp.com/myReviews?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [user.email, reviews])
    
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Comments</th>
                    <th scope="col">Rating</th>
                </tr>
            </thead>
            <tbody>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </tbody>
        </table>
    );
};

export default MyReviews;