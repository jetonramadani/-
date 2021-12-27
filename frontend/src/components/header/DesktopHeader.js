/* eslint-disable */
import React from "react";
import "./desktopHeader.css";
import photoImg from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
const Header = (props) => {
  return (
    <div className="headerStyle">
      <Link to="/" onClick={() => props.onClick("home")}>
        <img src={photoImg} className="imgStyle" alt="logo" />
      </Link>
      <nav >
        <Link to="/" onClick={() => props.onClick("home")}>
          ДОМА
        </Link>
        <Link to="/stores" onClick={() => props.onClick("store")}>
          ПРОДАВНИЦИ
        </Link>
        <Link to="/about" onClick={() => props.onClick("about")}>
          ЗА НАС
        </Link>
        <div id="indicator"></div>
      </nav>
      <Link to="/admin" onClick={() => props.onClick("admin")} >
        <Button
          variant="contained"
          color='secondary'

          size="large"
          // onClick={ }
          //disabled={ }
          className="adminStyle"
        >
          Админ
        </Button>
      </Link>
    </div>
  );
};

export default Header;
