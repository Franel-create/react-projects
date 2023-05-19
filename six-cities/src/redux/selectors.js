import { createSelector } from "reselect";
import { SortingTypes } from "./common/const";

const selectListOffers = state => state.listOffers;
const selectActiveSorting = state => state.activeSorting;

const favoritesPlaces = state => state.favoritesPlaces;

export const selectedListOffers = createSelector(
    [selectActiveSorting, selectListOffers],
    (sorting, list) => {
        switch (sorting) {
            case SortingTypes.PRICE_LOW:
                return [...list].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            case SortingTypes.PRICE_HIGH:
                return [...list].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            default:
                return list
        }
    }
)
