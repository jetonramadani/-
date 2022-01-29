
import React from "react";
import classes from "./desktopHeader.module.scss";
import photoImg from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
const Header = (props) => {
  return (
    <div className={classes.headerStyle}>
      <Link to="/">
        <img src={photoImg} className={classes.imgStyle} alt="logo" />
      </Link>
      <nav >
        <Link to="/">
          ДОМА
        </Link>
        <Link to="/stores">
          ПРОДАВНИЦИ
        </Link>
        <Link to="/about">
          ЗА НАС
        </Link>
        <div id={classes.indicator}></div>
      </nav>
      <Link to="/admin">
        <Button
          variant="contained"
          color='secondary'

          size="large"
          // onClick={ }
          //disabled={ }
          className={classes.adminStyle}
        >
          Админ
        </Button>
      </Link>
    </div>
  );
};

export default Header;
