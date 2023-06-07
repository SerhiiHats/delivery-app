import React, {useEffect, useState} from 'react';
import "./pagesStyle.scss";
import constBd from "../utils/constBd";
import {Link} from "react-router-dom";

const ShopsPage = () => {
  const [nikUse, setNikUse] = useState(null);
  const [product, setProduct] = useState(null);
  // const src = require("../assets/img/best_sushi/black.jpg");

  let listProducts = null;

  useEffect(()=>{
    console.log("count for constBd[0].nameRestaurant")
    setNikUse(constBd[0].nik)
    // setNikUse(constBd[0].product)
  },[])

  useEffect(()=>{
    console.log("change nikUse")
    // if(nikUse){
    //   const tempRestaurant = constBd.filter(item => item.nik === nikUse);
    //   console.log(tempRestaurant)
    // }

  //   tempRestaurant[0].product && console.log(tempRestaurant[0].product)
  //
  //   listProducts = tempRestaurant[0].product && tempRestaurant[0]?.product?.map(item =>{
  //     console.log(item.id + " : " +item.image)
  //
  //
  //     setProduct2(tempRestaurant)
  //     // return(
  //     //   <img key={item.id} id={item.id} width={500} src={require(`../assets/${item.image}`)} alt={item.title} title={item.description}/>
  //     // )
  //     // console.log(listProducts)
  // });

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

        <div>
          {/*{listProducts &&{listProducts}}*/}
         {/*<img width={500} src={require("../assets/img/best_sushi/black.jpg")} alt={"ddd"} title={"sdsd"}/>*/}
          {/*<img src={"."} alt={"ddd"} title={"sdsd"}/>*/}
        </div>

      </div>
    </div>
  );
};

export default ShopsPage;