import React from 'react';
import { Link } from 'react-router-dom';


import logo from '../../assets/favicon.png';

import NavBar from '../molecules/NavBar';

export default function Header() {
    return (
        <header className="header">
           {/*  <Link className="link" to="/">
                <img className="logo" src={logo}/>
            </Link> */}
            <NavBar />
        </header>
    );

} 