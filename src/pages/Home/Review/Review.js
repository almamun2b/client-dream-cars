import React from 'react';
import Rating from 'react-rating';

const Review = ({ review }) => {
    const { name, email, comment, rating } = review;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{comment}</td>
            <td className="text-warning">
                <Rating
                    initialRating={rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating> ({rating})
            </td>
        </tr>
    );
};

export default Review;