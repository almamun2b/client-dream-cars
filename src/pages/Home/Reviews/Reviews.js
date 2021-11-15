import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://glacial-savannah-97798.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    
    
    return (
        <div className="container mt-5">
            <h3>All Reviews</h3>
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
        </div>
    );
};

export default Reviews;