import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux';
import defaultMarker from '../../img/other/pin-default.svg';
import activeMarker from '../../img/other/pin-active.svg';
import L from 'leaflet';

const Map = (props) => {
    const cardActive = useSelector(state => state.cardActive);
    const {listOffers, coordinates} = props;

    let defaultIcon = L.icon({iconUrl: defaultMarker, iconSize: [37,37], iconAnchor: [32, 64], 
        popupAnchor: null, shadowUrl: null, shadowSize: null, shadowAnchor: null });
    
    let activeIcon = L.icon({iconUrl: activeMarker, iconSize: [37,37], iconAnchor: [32, 64], 
            popupAnchor: null, shadowUrl: null, shadowSize: null, shadowAnchor: null });

    function MapComponent() {
        const map = useMap();
        map.flyTo(coordinates, map.getZoom());
        return null
    }

    

    return (
        <>
        { listOffers.length ? 
        <MapContainer center={coordinates} zoom={11} scrollWheelZoom={false}>
            <MapComponent/>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {listOffers.map(item => (
                <Marker icon={cardActive == item.id ? activeIcon : defaultIcon} key={item.id} position={[item.city.location.latitude, item.city.location.longitude]} >
                </Marker>
            ))}
            </MapContainer> : null }
        </>
    )
}
    
export default Map;

// console.log(listOffers[0].city.coordinates);
