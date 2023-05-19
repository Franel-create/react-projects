import React, { useState } from "react";
import { Link } from "react-router-dom";

const Locations = (props) => {
  const {name, id, getActiveCity, idCity} = props;

    return (
          <li className="locations__item" onClick={() => {getActiveCity(name)}}>
            {idCity == id ? 
            <Link to={`/city/${id}`} className="locations__item-link tabs__item tabs__item--active" href="#">
              <span>{name}</span>
            </Link> 
            :  <Link to={`/city/${id}`} className="locations__item-link tabs__item" href="#">
              <span>{name}</span>
            </Link>}
          </li>
    )
}

export default Locations;












