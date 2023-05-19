import React, {useState, useEffect} from "react";
import Header from "../../components/Header/Header";
import OfferList from "../../components/OfferList/OfferList";
import Locations from "../../components/Locations/Locations";
import Map from "../../components/Map/Map";
import { setCityAC, getRentalListAC, getActiveCityAC } from "../../redux/rentalReducer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SortingOptions from "../../components/SortingOptions/SortingOptions";
import Loader from "../../components/Loader/Loader";
import { fetchCities, fetchLlistOffers } from "../../asyncActions/api-actions";


const Main = (props) => {
    const { idCity } = useParams();
    const dispatch = useDispatch();
    const cities = useSelector(state => state.cities);
    const listOffers = useSelector(state => state.listOffers);
    const activeCity = useSelector(state => state.activeCity);
    let coordinates;

    const getActiveCity = (value) => {
        dispatch(getActiveCityAC(value));
    }

    useEffect(() => {
        dispatch(fetchCities());
        dispatch(fetchLlistOffers(idCity));
    }, [idCity]);

    if (listOffers.length) {
        coordinates = listOffers[0].city.coordinates;
    }
    
    if (!cities) return null;



    return (
        <>
            <div style={{display: "none"}} >
                <svg xmlns="http://www.w3.org/2000/svg">
                <symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
            </div>
            <div className="page page--gray page--main">
             <Header/>
            <main className="page__main page__main--index">
                <h1 className="visually-hidden">Cities</h1>
                <div className="tabs">
                <section className="locations container">
                    <ul className="locations__list tabs__list">
                    { cities.length ?
                        cities.map(el => (
                            <Locations key={el.id} {...el} getActiveCity={getActiveCity} idCity={idCity} activeCity={activeCity}/>
                        )) 
                        : <Loader/>
                    }
                    </ul>
                </section>
                </div>
                <div className="cities">
                <div className="cities__places-container container">
                    <section className="cities__places places">
                        <h2 className="visually-hidden">Places</h2>
                        <b className="places__found">{listOffers.length} places to stay in {activeCity}</b>
                            <SortingOptions/>
                        <div className="cities__places-list places__list tabs__content">
                            {listOffers.length ? <OfferList listOffers={listOffers}/> : <Loader/>}
                         </div>
                        </section>
                    <div className="cities__right-section">
                    <section className="cities__map map">
                    {listOffers.length ? <Map listOffers={listOffers} coordinates={coordinates}/> : <Loader/>}
                    </section>
                    </div>
                </div>
                </div>
            </main>
            </div>
        </>
    )
}

export default Main;

