import * as axios from "axios";

import { getRentalListAC, setCityAC, getCommentsAC } from "../redux/rentalReducer";

export const baseURL = "https://hotels-api.prject.website/api/";


export const fetchCities = () => {
    return dispatch => {
        axios.get(baseURL + 'cities')
            .then(response => dispatch(setCityAC(response.data)))
    }
}

export const fetchLlistOffers = (listId) => {
    return dispatch => {
        axios.get(baseURL + `hotels/${listId}`)
            .then(response => dispatch(getRentalListAC(response.data)))
    }
}

export const fetchComments = () => {
    return dispatch => {
        axios.get(baseURL + 'hotels')
            .then(response => dispatch(getCommentsAC(response.data.commentGet)))
    }
}



// const data = {
//     "login": "franel@gmail.com",
//     "password": "franel1995",
// }

// const headers = {
//     "Accept": "application/json",
//     "Content-Type": "application/json; charset=utf-8"
// };

// export const logIn = ({ login, password }) => {
//     return (dispatch, _getState, api) => {
//         axios.post(baseURL + `login`, { login, password }, { headers })
//             .then((response) => dispatch(setAuthInfoAC(response.status)))
//             .then(() => dispatch(setAuthStatusAC(AuthorizationStatus.Auth)))
//             .then(() => dispatch(redirectToRouteAC(AppRoute.MAIN)))
//             .catch(() => { })
//     }
// }
