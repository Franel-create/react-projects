import React from "react";
import ReviewForm from "../ReviewForm/ReviewForm";

const Reviews = (props) => {

    const {id, comment, rating, user, date} = props;

    const getMonth = new Date(date).toString().slice(3, 7);
    const getYear = new Date(date).toString().slice(10, 15);
    const commentDate = getMonth + getYear;

    return (
        <>
            <li className="reviews__item">
                <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                    <img className="reviews__avatar user__avatar" src={user.avatar_url} width="54" height="54" alt="Reviews avatar"/>
                </div>
                <span className="reviews__user-name">{user.name}</span>
                </div>
                <div className="reviews__info">
                <div className="reviews__rating rating">
                    <div className="reviews__stars rating__stars">
                        <span style={{width: "80%"}}></span>
                        <span className="visually-hidden">Rating</span>
                    </div>
                </div>
                <p className="reviews__text">
                    {comment}
                </p>
                <time className="reviews__time">{commentDate}</time>
                </div>
            </li>
        </>
    )
}

export default Reviews;





