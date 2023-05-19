import * as axios from "axios";

const BASE_URL = "https://hotels-api.prject.website/api/";
const REQUEST_TIMEOUT = 5000;

export const getHotelAPI = {
    getHotel(hotelId) {
        return axios.get(BASE_URL + `hotel/${hotelId}`);
    }
}



