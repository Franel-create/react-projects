import React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthorizationStatus } from "../../redux/common/const";

const PrivateRoute =  ({ children }) => {
    const hasAccess = true;
    return hasAccess ? children : <Navigate to="/login"/>;
}

// const PrivateRoute =  ({ children }) => {   
//     const authorizationStatus = useSelector(state => state.authorizationStatus);

//     return (
//         authorizationStatus === AuthorizationStatus.Auth
//           ? children
//           : <Navigate to="/login"/>
//       );
// }

export default PrivateRoute;










