import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo"></Link>
      {/* <a className="header__logo" href="#" target="_self"></a> */}
    </header>
  );
}

export default Header;
