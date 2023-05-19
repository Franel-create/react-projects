import React, { useState, useRef, useEffect } from "react";
import { baseURL } from "../../asyncActions/api-actions";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { setAuthInfoAC, setAuthStatusAC } from "../../redux/rentalReducer";
import * as axios from "axios";
import { AuthorizationStatus, AppRoute } from "../../redux/common/const";

const Login = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginRef = useRef();
    const passwordRef = useRef();

    const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json; charset=utf-8"
    };

    const logIn = ({ login, password }) => {
        axios.post(baseURL + `login`, { login, password }, { headers })
        .then((response) => dispatch(setAuthInfoAC(response.status)))
        .then(() => dispatch(setAuthStatusAC(AuthorizationStatus.Auth)))
        .then(() => navigate(AppRoute.MAIN))
        .catch(() => { })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        logIn({
          login: loginRef.current.value,
          password: passwordRef.current.value
        });
      };


    return (
        <>
        <div style={{display: "none"}}>
                <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
            </div>

            <div className="page page--gray page--login">
                <Header/>
            <main className="page__main page__main--login">
                <div className="page__login-container container">
                <section className="login">
                    <h1 className="login__title">Sign in</h1>
                    <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
                    <div className="login__input-wrapper form__input-wrapper">
                        <label className="visually-hidden">E-mail</label>
                        <input className="login__input form__input" type="email" ref={loginRef} name="email" placeholder="Email" required=""/>
                    </div>
                    <div className="login__input-wrapper form__input-wrapper">
                        <label className="visually-hidden">Password</label>
                        <input className="login__input form__input" type="password" ref={passwordRef} name="password" placeholder="Password" required=""/>
                    </div>
                    <button className="login__submit form__submit button" type="submit">Sign in</button>
                    </form>
                </section>
                <section className="locations locations--login locations--current">
                    <div className="locations__item">
                    <a className="locations__item-link" href="#">
                        <span>Amsterdam</span>
                    </a>
                    </div>
                </section>
                </div>
            </main>
            </div>
        </>
    )
}

export default Login;








