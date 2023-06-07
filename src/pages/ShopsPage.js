import React, {useEffect, useState} from 'react';
import "./pagesStyle.scss";
import constBd from "../utils/constBd";
import {Link} from "react-router-dom";

const ShopsPage = () => {
  const [product, setProduct] = useState(null);

  useEffect(()=>{
    console.log("count for constBd[0].name")
    setProduct(constBd[0].name)
  },[])

  const handleCheckRestaurant = (e) =>{
    setProduct(e.target.id);
  };

  const listRestaurants = constBd.map(item =>{
    return(<p className={item.name === product ? "active normal" : "normal"} onClick={(e)=>handleCheckRestaurant(e)} id={item.name} key={item.name} to={item.name}>{item.name}</p>)
  })

  return (
    <div className={"shops"}>
      <div className={"containerRestaurants"}>Shops:
        {listRestaurants}
      </div>

      <div className={"containerProducts"}>
        {product}
      </div>
    </div>
  );
};

export default ShopsPage;