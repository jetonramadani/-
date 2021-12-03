/* eslint-disable */
import React from 'react'
import "./desktopHeader.css";
import photoImg from '../../assets/logo.png'
import {
    Link
} from "react-router-dom";
const Header = (props) => {
    return (
        < >
            <img src={photoImg} className='imgStyle' />
            <nav className='backgroundHeader'>
                <Link to="/" onClick={() => props.onClick("home")}>HOME</Link>
                <Link to="/stores" onClick={() => props.onClick("store")}>STORES</Link>
                <Link to="/about" onClick={() => props.onClick("about")}>ABOUT</Link>
                <div id="indicator"></div>
            </nav>
        </>
    )
}

export default Header
