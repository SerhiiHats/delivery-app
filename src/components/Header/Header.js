import React from 'react';
import {NavLink} from "react-router-dom";
import "./Header.scss"
import {useSelector} from "react-redux";

const Header = () => {
  const countItems = useSelector(store => store.quantityItems);

  const getCount = ()=>{
    let count = 0;
    for (const key in countItems) {
      count += countItems[key];
    }
    return count;
  }

  console.log(countItems)
  console.log(getCount())


  return (
    <header className={"header"}>
      <NavLink to={"/"}>Shop</NavLink>
      <span className={"border"}></span>
      <NavLink to={"/cart"}>Shopping Cart
        {getCount() !== 0 && (<span className={"countProducts"}>{getCount()}</span>)}
      </NavLink>
      <span className={"border"}></span>
      <NavLink to={"/createProduct"}>Create Product</NavLink>
    </header>
  );
};

export default Header;