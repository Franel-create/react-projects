import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthStatusAC } from "../../redux/rentalReducer";
import { AuthorizationStatus } from "../../redux/common/const";
import iconFavorites from "../../img/favorites.png";

const Header =  (props) => {
    const dispatch = useDispatch();
    const authorizationStatus = useSelector(state => state.authorizationStatus);

    const handleClickLogout = () => {
        dispatch(setAuthStatusAC(AuthorizationStatus.NoAuth))
      }
    
    return (
        <>
            <header className="header">
                <div className="container">
                <div className="header__wrapper">
                    <div className="header__left">
                    <a href="#" className="header__logo-link header__logo-link--active">
                        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                    </a>
                    </div>
                    <div className="header__wrap-right">
                        <Link to={'/favorites'}>
                            <div className="header__favorites">
                                <img src={iconFavorites} alt="favorites" />
                            </div>
                        </Link>
                        <nav className="header__nav">
                        <ul className="header__nav-list">
                            {authorizationStatus === 'AUTH' ? 
                                    <>
                                        <li className="header__nav-item user">
                                            <a className="header__nav-link header__nav-link--profile" href="#">
                                                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                                                <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                                            </a>
                                        </li>
                                        <li className="header__nav-item">
                                            <a className="header__nav-link" href="#">
                                                <span className="header__signout" onClick={handleClickLogout}>Sign out</span>
                                            </a>
                                        </li>
                                    </>
                                : <Link className="header__nav-item" to='/login'>Login</Link> }
                        </ul>
                        </nav>
                    </div>
                </div>
                </div>
             </header>
        </>
    )
}

export default Header;