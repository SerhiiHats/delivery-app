import React from 'react';
import style from "./pagesStyle.module.scss";
import constBd from "../utils/constBd";
import {Link} from "react-router-dom";

const ShopsPage = () => {


  let listRestaurants = "";
  for (const key in constBd) {
    listRestaurants += <Link key={key} to={key}>{key}</Link>
    console.log(constBd[key].name)
  }

  return (
    <div className={style.shops}>
      <div className={style.containerRestaurants}>Shops:
        {listRestaurants}
      </div>

      <div className={style.containerProducts}>Product</div>
    </div>
  );
};

export default ShopsPage;