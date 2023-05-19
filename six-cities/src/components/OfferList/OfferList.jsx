import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PlaceCard from "../../components/PlaceCard/PlaceCard";
import { getCardActiveAC } from "../../redux/rentalReducer";
import { selectedListOffers } from "../../redux/selectors";


const OfferList = (props) => {
    const dispatch = useDispatch();
    const selectedList = useSelector(selectedListOffers);

    const cardActive = (idCard) => {
        dispatch(getCardActiveAC(idCard));
    }
    
    return (
        <>
            {selectedList.map(el => (
                <PlaceCard cardActive={cardActive} key={el.id} {...el}/>
            ))}
        </>
    )
}

export default OfferList;