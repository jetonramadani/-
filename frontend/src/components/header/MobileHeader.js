import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./mobileHeader.css";
import photoImg from "../../assets/logo.png";
const MobileHeader = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    }
    return (
        <div className={`header ${isMenuOpen ? "menu-open" : ""}`}>
            <Link to="/" onClick={() => props.onClick("home")}>
                <img src={photoImg} className="imgStyle" alt="logo" />
            </Link>
            <div className="icon-container" onClick={toggleMenu}>
                <div id="menuicon">
                    <div className="bar bar1"></div>
                    <div className="bar bar2"></div>
                </div>
            </div>
            <div className="mobile-menu">
                <ul className="menu">
                    <li className="menu-item">
                        <Link to="/" onClick={() => {
                            toggleMenu();
                            props.onClick("home")
                        }}>
                            ДОМА
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/stores" onClick={() => {
                            toggleMenu();
                            props.onClick("store")
                        }}>
                            ПРОДАВНИЦИ
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/about" onClick={() => {
                            toggleMenu();
                            props.onClick("about")
                        }}>
                            ЗА НАС
                        </Link>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default MobileHeader
