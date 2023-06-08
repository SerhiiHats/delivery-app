import React, {useEffect, useState} from 'react';
import "./pagesStyle.scss";
import constBd from "../utils/constBd";
import {Link} from "react-router-dom";
import CardProduct from "../components/CardProduct/CardProduct";

const ShopsPage = () => {
  const [nikUse, setNikUse] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(()=>{
    console.log("count for constBd[0].nameRestaurant")
    setNikUse(constBd[0].nik);
    setProducts(constBd[0].product)
    },[]);

  const handleCheckRestaurant = (e) =>{
    setNikUse(e.target.id);
  };

  const listRestaurants = constBd.map(item =>{
    return(<p className={item.nik === nikUse ? "active normal" : "normal"} onClick={(e)=>handleCheckRestaurant(e)} id={item.nik} key={item.nik}>{item.nameRestaurant}</p>)
  })
  return (
    <div className={"shops"}>
      <div className={"containerRestaurants"}>Shops:
        {listRestaurants}
      </div>
      <div className={"containerProducts"}>
        {nikUse}
        <div className={"wrapProducts"}>
        {products &&products.map(item=> <CardProduct key={item.id} id={item.id}src={require(`../assets/${item.image}`)} alt={item.title} name={item.title} title={item.description}/>)}
        </div>

      </div>
    </div>
  );
};

export default ShopsPage;