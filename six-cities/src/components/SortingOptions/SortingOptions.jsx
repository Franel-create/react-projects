import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SortingTypes } from "../../redux/common/const";
import { setActiveSortingAC } from "../../redux/rentalReducer";

const SortingOptions = (props) => {

    const dispatch = useDispatch();
    const activeSorting = useSelector(state => state.activeSorting);

    const [openedSorting, setOpenedSorting] = useState(false);

    const handleSortingClick = () => {
        setOpenedSorting((prevState) => !prevState);
      };
    
    const handleSortingChange = (evt) => {
        dispatch(setActiveSortingAC(evt.target.innerText));
        setOpenedSorting(false);
    };


    return (
        <>
        <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex="0" onClick={handleSortingClick}>{activeSorting}
            <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
            </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
                { openedSorting && 
                    Object.values(SortingTypes).map((el, id) => (
                        <li className={`places__option ${el === activeSorting ? `places__option--active` : ''}`} 
                        tabIndex={0}
                        key={el + id}
                        onClick={handleSortingChange}>{el}</li>
                ))}   
            </ul>
        </form>
        </>
    )
}

export default SortingOptions;