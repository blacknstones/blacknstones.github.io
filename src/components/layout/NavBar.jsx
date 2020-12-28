// React core
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GreyTriangle from '../../assets/GreyTriangle.png';
import BlueTriangle from '../../assets/BlueTriangle.png';

export default function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false);

    return (
        <nav className="navbar">
            
            <div className=" link menu-icon" onClick={handleClick}>
               
                {click ? 
                <img src={BlueTriangle}/>
                     : 
                     <img src={GreyTriangle}/>}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <Link className="link nav-link" to="/" onClick={closeMenu}>Home</Link>
                </li>

                <li className="nav-item">
                    <Link className="link nav-link" to="/projects" onClick={closeMenu}>Projects</Link>
                </li>

                <li className="nav-item">
                    <Link className="link nav-link" to="/about" onClick={closeMenu}>About</Link>
                </li>

            </ul>
        </nav>
    );

}