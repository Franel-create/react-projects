import React from "react";
import loader from '../../img/other/loader.gif';

const Loader = (props) => {

    return (
        <div className="loader">
            <img src={loader} alt="loader" />
        </div>
    )
}

export default Loader;