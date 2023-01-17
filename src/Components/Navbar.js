import React, { useEffect, useState } from 'react';
import '../Styles/navbar.css'
import Button from './Button';
import { FaTypo3 } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

import { Link } from 'react-router-dom';

function Navbar() {

    const [clicked, setClicked] = useState(false)
    const [button, setButton] = useState(true);

    const handleClick = () => setClicked(!clicked);

    const closeMobileMenu = () => setClicked(false);

    // A function to show button on mobile devices
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <div className='navbar'>
            <Link to="/" className='navbar__logo' onClick={closeMobileMenu}>
                <FaTypo3 style={{ marginLeft: "0.5rem", fontSize: "1.8rem" }} /> TRVL
            </Link>
            <div className="navbar__menuIcon" onClick={handleClick}>
                <a href="#" >
                    {
                        clicked ? <FaTimes style={{ color: "#fff", fontSize: "2rem" }} /> : <FaBars style={{ color: "#fff" }} />
                    }
                </a>
            </div>
            <ul className={clicked ? "navbar__navmenu active" : "navbar__navmenu"}>
                <li className="navmenu__navitem">
                    <Link to="/" className='navmenu__navlinks' onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className="navmenu__navitem">
                    <Link to="/services" className='navmenu__navlinks' onClick={closeMobileMenu}>Services</Link>
                </li>
                <li className="navmenu__navitem">
                    <Link to="/products" className='navmenu__navlinks' onClick={closeMobileMenu}>Products</Link>
                </li>
                <li className="navmenu__navitem">
                    <Link to="/signup" className='navmenu__navlinks__mobile' onClick={closeMobileMenu}>Sign Up</Link>
                </li>
                {button && <Button children="Sign Up" buttonStyle="btn--outline" buttonSize="btn--medium" />}
            </ul>
        </div>

    )
}

export default Navbar