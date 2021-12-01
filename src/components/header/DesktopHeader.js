import React from 'react'
import "./desktopHeader.css";
import {
    Link
} from "react-router-dom";
const Header = (props) => {
    return (
        <>
            <nav>
                <Link to="/" onClick={() => props.onClick("home")}>HOME</Link>
                <Link to="/stores" onClick={() => props.onClick("store")}>STORES</Link>
                <Link to="/about" onClick={() => props.onClick("about")}>ABOUT</Link>
                <div id="indicator"></div>
            </nav>
        </>
    )
}

export default Header
