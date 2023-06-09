import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFavoritesPlacesAC, savePlaceBookmarkAC } from "../../redux/rentalReducer";

const PlaceCard = (props) => {
    const dispatch = useDispatch();

    const [savePlace, setSavePlace] = useState(false);

    const handleSetFavoritePlace = () => {
        setSavePlace(prevState => !prevState);
        dispatch(setFavoritesPlacesAC(props));
    }

    const {cardActive, id, premium, images, price, description, type} = props;

    return (
        <>
            <article className="cities__place-card place-card" onMouseEnter={() => cardActive(id)}>
                {premium ? <div className="place-card__mark">
                    <span>Premium</span>
                </div> : ''}
                <div className="cities__image-wrapper place-card__image-wrapper">
                    <Link to={`/room/${id}`}>
                        <img className="place-card__image" src={images[0]} alt="Place image"/>
                    </Link>
                </div>
                <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                            <b className="place-card__price-value">&euro;{price}</b>
                            <span className="place-card__price-text">&#47;&nbsp;night</span>
                        </div>
                        <button className={savePlace == false ? 'place-card__bookmark-button button' : 'place-card__bookmark-button--active button'} type="button" onClick={handleSetFavoritePlace}>
                            <svg className="place-card__bookmark-icon" width="18" height="19">
                                <use xlinkHref="#icon-bookmark"></use>
                            </svg>
                            <span className="visually-hidden">To bookmarks</span>
                        </button>
                    </div>
                    <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                            <span style={{width: "80%"}}></span>
                            <span className="visually-hidden">Rating</span>
                        </div>
                    </div>
                    <h2 className="place-card__name">
                        <Link to={`/room/${id}`}>{description}</Link>
                    </h2>
                    <p className="place-card__type">{type}</p>
                </div>
            </article>
        </>
    )
}

export default PlaceCard;