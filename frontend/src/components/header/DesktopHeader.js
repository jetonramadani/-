
import React from "react";
import "./desktopHeader.css";
import photoImg from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
const Header = (props) => {
  return (
    <div className="headerStyle">
      <Link to="/">
        <img src={photoImg} className="imgStyle" alt="logo" />
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
        <div id="indicator"></div>
      </nav>
      <Link to="/admin">
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
