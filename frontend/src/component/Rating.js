import React from 'react'

function Rating(props) {
    return (
        <div className="rating">
        
            {Array(props.rating).fill().map((_, i) => (
                <i key={i} className="fa fa-star"></i>
            ))}
                            
            <span className="reviews">{props.numReviews} reviews</span>
        </div>
    )
}

export default Rating
