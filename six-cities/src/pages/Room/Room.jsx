import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import ReviewList from "../../components/ReviewList/ReviewList";
import Map from "../../components/Map/Map";
import OfferList from "../../components/OfferList/OfferList";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../asyncActions/api-actions";

const Room = (props) => {
    const {idRoom} = useParams();
    const dispatch = useDispatch();
    const listOffers = useSelector(state => state.listOffers);
    const comments = useSelector(state => state.comments);
    const authorizationStatus = useSelector(state => state.authorizationStatus);
    let coordinates;

    const room = listOffers.filter(el => el.id == idRoom)[0];

    useEffect(() => {
        dispatch(fetchComments())
    }, []);

    if (listOffers.length) {
        coordinates = listOffers[0].city.coordinates;
    }


    return (
        <>
            <div className="page">
                <Header/>
                <main className="page__main page__main--property">
                    <section className="property">
                        <div className="property__gallery-container container">
                            <div className="property__gallery">
                                {room.images.map(el => (
                                    <div key={el} className="property__image-wrapper">
                                        <img className="property__image" src={el} alt="Photo studio" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="property__container container">
                        <div className="property__wrapper">
                            {room.premium ? <div className="property__mark">
                                <span>Premium</span>
                            </div> : ''}
                        <div className="property__name-wrapper">
                            <h1 className="property__name">
                                {room.description}
                            </h1>
                            <button className="property__bookmark-button button" type="button">
                                <svg className="property__bookmark-icon" width="31" height="33">
                                    <use xlinkHref="#icon-bookmark"></use>
                                </svg>
                                <span className="visually-hidden">To bookmarks</span>
                            </button>
                        </div>
                        <div className="property__rating rating">
                            <div className="property__stars rating__stars">
                                <span style={{width: "80%"}}></span>
                                <span className="visually-hidden">Rating</span>
                            </div>
                            <span className="property__rating-value rating__value">4.8</span>
                        </div>
                        <ul className="property__features">
                            <li className="property__feature property__feature--entire">
                            {room.type}
                            </li>
                            <li className="property__feature property__feature--bedrooms">
                            {room.bedrooms} Bedrooms
                            </li>
                            <li className="property__feature property__feature--adults">
                            Max 4 adults
                            </li>
                        </ul>
                        <div className="property__price">
                            <b className="property__price-value">&euro;{room.price}</b>
                            <span className="property__price-text">&nbsp;night</span>
                        </div>
                        <div className="property__inside">
                            <h2 className="property__inside-title">What&apos;s inside</h2>
                            <ul className="property__inside-list">
                                {room.goods.map(el => (
                                    <li key={el} className="property__inside-item">
                                        {el}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="property__host">
                            <h2 className="property__host-title">Meet the host</h2>
                            <div className="property__host-user user">
                                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                                    <img className="property__avatar user__avatar" src={room.host.avatar_url} width="74" height="74" alt="Host avatar"/>
                                </div>
                                <span className="property__user-name">
                                    {room.host.name}
                                </span>
                                <span className="property__user-status">
                                    Pro
                                </span>
                            </div>
                            <div className="property__description">
                                <p className="property__text">
                                    {room.about}
                                </p>
                            </div>
                        </div>

                        <section className="property__reviews reviews">
                             <ReviewList comments={comments} />
                             {authorizationStatus === 'AUTH' &&  <ReviewForm comments={comments}/>}
                        </section>

                        </div>
                    </div>
                    <section className="property__map map">
                        {listOffers.length && <Map listOffers={listOffers} coordinates={coordinates}/>}
                    </section>
                    </section>
                    <div className="container">
                    <section className="near-places places">
                        <h2 className="near-places__title">Other places in the neighbourhood</h2>
                        <div className="near-places__list places__list">
                            {listOffers.length && <OfferList listOffers={listOffers} />}
                        </div>
                    </section>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Room;








