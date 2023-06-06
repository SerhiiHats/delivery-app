import React from 'react';
import {NavLink} from "react-router-dom";
import "./Header.scss"

const Header = () => {
  return (
    <header className={"header"}>
      <NavLink to={"/"}>Shop</NavLink>
      <span className={"border"}></span>
      <NavLink to={"/cart"}>Shopping Cart</NavLink>
    </header>
  );
};

export default Header;