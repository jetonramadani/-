import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import classes from "./mobileHeader.module.scss";
import photoImg from "../../assets/logo.png";
const MobileHeader = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    }
    return (
        <div className={`${classes.header} ${isMenuOpen ? classes["menu-open"] : ""}`}>
            <Link to="/">
                <img src={photoImg} className={classes.imgStyle} alt="logo" />
            </Link>
            <div className={classes["icon-container"]} onClick={toggleMenu}>
                <div id={classes.menuicon}>
                    <div className={`${classes.bar} ${classes.bar1}`}></div>
                    <div className={`${classes.bar} ${classes.bar2}`}></div>
                </div>
            </div>
            <div className={classes["mobile-menu"]}>
                <ul className={classes.menu}>
                    <li className={classes["menu-item"]}>
                        <Link to="/" onClick={toggleMenu}>
                            ДОМА
                        </Link>
                    </li>
                    <li className={classes["menu-item"]}>
                        <Link to="/stores" onClick={toggleMenu}>
                            ПРОДАВНИЦИ
                        </Link>
                    </li>
                    <li className={classes["menu-item"]}>
                        <Link to="/about" onClick={toggleMenu}>
                            ЗА НАС
                        </Link>
                    </li>
                    <br />
                    <Link to="/admin" className={classes["admin-button"]} onClick={toggleMenu}>
                        <Button
                            variant="contained"
                            color='secondary'
                            size="large"
                            className='menu-button'
                        >
                            Админ
                        </Button>

                    </Link>
                </ul>
            </div>
        </div >
    )
}

export default MobileHeader
