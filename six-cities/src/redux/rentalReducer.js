import { SortingTypes, CITIES, AuthorizationStatus } from "./common/const";

const SET_CITY = 'SET_CITY';
const GET_RENTAL_LIST = 'GET_RENTAL_LIST';
const GET_ACTIVE_CITY = 'GET_ACTIVE_CITY';
const GET_COMMENTS = 'GET_COMMENTS';
const SET_ACTIVE_SORTING = 'SET_ACTIVE_SORTING';
const GET_CARD_ACTIVE = 'GET_CARD_ACTIVE';
const SET_AUTH_STATUS = 'SET_AUTH_STATUS';
const SET_AUTH_INFO = 'SET_AUTH_INFO';
const REDIRECT_TO_ROUTE = 'REDIRECT_TO_ROUTE';
const SET_FAVORITES_PLACES = 'SET_FAVORITES_PLACES';

const initialState = {
    cities: [],
    activeCity: CITIES[0],
    listOffers: [],
    comments: [],
    activeSorting: SortingTypes.POPULAR,
    cardActive: '',
    authorizationStatus: AuthorizationStatus.NoAuth,
    authorizationInfo: '',
    redirectToRoute: '',
    favoritesPlaces: [],
};

const rentalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY:
            return {
                ...state,
                cities: action.cities
            };
        case GET_ACTIVE_CITY:
            return {
                ...state,
                activeCity: action.payload
            };
        case GET_RENTAL_LIST:
            return {
                ...state,
                listOffers: action.payload
            };
        case GET_CARD_ACTIVE:
            return {
                ...state,
                cardActive: action.payload
            };
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.comments
            };
        case SET_ACTIVE_SORTING:
            return {
                ...state,
                activeSorting: action.payload
            };
        case SET_AUTH_STATUS:
            return {
                ...state,
                authorizationStatus: action.payload
            };
        case SET_AUTH_INFO:
            return {
                ...state,
                authorizationInfo: action.payload
            };
        case REDIRECT_TO_ROUTE:
            return {
                ...state,
                redirectToRoute: action.payload
            };
        case SET_FAVORITES_PLACES:
            const itemIndex = state.favoritesPlaces.findIndex((item) => item.id === action.payload.id);
            let newFavorite = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...action.payload
                };
                newFavorite = [...state.favoritesPlaces, newItem]
            } else {
                newFavorite = [...state.favoritesPlaces.filter((el) => el.id !== action.payload.id)]
            }
            return {
                ...state,
                favoritesPlaces: newFavorite
            };
        default:
            return state;
    }
}

export const setCityAC = (cities) => ({ type: SET_CITY, cities });
export const getActiveCityAC = (activeCity) => ({ type: GET_ACTIVE_CITY, payload: activeCity });
export const getRentalListAC = (listOffers) => ({ type: GET_RENTAL_LIST, payload: listOffers });
export const getCardActiveAC = (cardId) => ({ type: GET_CARD_ACTIVE, payload: cardId });
export const getCommentsAC = (comments) => ({ type: GET_COMMENTS, comments });
export const setActiveSortingAC = (activeSorting) => ({ type: SET_ACTIVE_SORTING, payload: activeSorting });
export const setAuthStatusAC = (authStatus) => ({ type: SET_AUTH_STATUS, payload: authStatus });
export const setAuthInfoAC = (data) => ({ type: SET_AUTH_INFO, payload: data });
export const redirectToRouteAC = (url) => ({ type: REDIRECT_TO_ROUTE, payload: url });
export const setFavoritesPlacesAC = (places) => ({ type: SET_FAVORITES_PLACES, payload: places });

export default rentalReducer;



























// switch (action.type) {
//     case SET_CITY:
//         return {
//             ...state,
//             city: action.city
//         };
//     case GET_RENTAL_LIST:
//         return {
//             ...state,
//             listRentalOffers: action.offers
//         };
//     default:
//         return state;
// }



