/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './TopHeaderStyle.css'
import logo from './amadeus.png'
import { Link } from 'react-router-dom';
// import LogninForm from './LogninForm';
// import Homes from './Home';

function HeaderTop() {
    return (
        <>
            <div className="main-div">
                <a className="logo-class"> <img className="logo" src={logo}></img> <p id="logo_text"> <strong>Amadeus</strong> </p></a>
                <nav>
                    <ul>
                        <li><Link to="/">Ana Sayfa</Link></li>
                        <li><a href="#">Uçuşlar</a></li>
                        <li><a href="#">Teklifler</a></li>
                        <li><a href="#">Sorular</a></li>
                        <li><Link to="/Login">Giriş</Link></li>
                    </ul>
                </nav>
            </div>

        </>
    );
}
export default HeaderTop