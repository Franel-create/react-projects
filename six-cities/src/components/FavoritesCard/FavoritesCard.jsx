import React, { useState }  from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setFavoritesPlacesAC } from "../../redux/rentalReducer";

const FavoritesCard = (props) => { 
    const dispatch = useDispatch();

    const handleSetFavoritePlace = () => {
        dispatch(setFavoritesPlacesAC(props));
    }

    return (
        <article className="favorites__card place-card">
            <div className="favorites__image-wrapper place-card__image_b-wrapper">
            <Link to={`/room/${props.id}`}>
                <img className="place-card__image_b" src={props.images[0]} alt="Place image"/>
            </Link>
            </div>
            <div className="favorites__card-info place-card__info">
            <div className="place-card__price-wrapper">
                <div className="place-card__price">
                <b className="place-card__price-value">&euro;{props.price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <button className='place-card__bookmark-button--active button' type="button" onClick={handleSetFavoritePlace}>
                <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">In bookmarks</span>
                </button>
            </div>
            <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                <span style={{width: "80%"}}></span>
                <span className="visually-hidden">Rating</span>
                </div>
            </div>
            <h2 className="place-card__name">
                <Link to={`/room/${props.id}`}>{props.description}</Link>
            </h2>
            <p className="place-card__type">Apartment</p>
            </div>
        </article>
    )
}

export default FavoritesCard;


