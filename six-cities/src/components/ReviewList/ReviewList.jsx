import React from "react";
import Review from "../Review/Review";
import ReviewForm from "../ReviewForm/ReviewForm";
import { useParams } from "react-router-dom";

const ReviewList = (props) => {

    const {idRoom} = useParams();
    const {comments} = props;
    const commentsFiltered = comments.filter(el => el.idHotel == idRoom);
    
    return (
        <>
            <h2 className="reviews__title">{commentsFiltered.length ? 'Reviews ' : 'No Reviews' }<span className="reviews__amount">{!commentsFiltered.length && ''}</span></h2>
                <ul className="reviews__list">
                    {commentsFiltered.map(el => (
                        <Review key={el.id} {...el}/>
                    ))}
                </ul>
        </>
    )
}

export default ReviewList;