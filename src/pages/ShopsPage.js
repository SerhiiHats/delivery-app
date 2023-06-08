import React, {useEffect, useState} from 'react';
import "./pagesStyle.scss";
import constBd from "../utils/constBd";
import CardProduct from "../components/CardProduct/CardProduct";

const ShopsPage = () => {
  const [idRestaurant, setIdRestaurant] = useState(null);
  const [nameRestaurant, setNameRestaurant] = useState(null);
  const [products, setProducts] = useState(null);


  useEffect(() => {
    setIdRestaurant(constBd[0].idRestaurant);
    setProducts(constBd[0].product);
    setNameRestaurant(constBd[0].nameRestaurant);
  }, []);

  const handleCheckRestaurant = (e) => {
    setIdRestaurant(e.target.id);
    const tempItemRestaurant = constBd.filter(item => item.idRestaurant === e.target.id);
    setProducts(tempItemRestaurant[0].product);
    setNameRestaurant(tempItemRestaurant[0].nameRestaurant);
  };

  const listRestaurants = constBd.map(item => {
    return (<p className={item.idRestaurant === idRestaurant ? "active normal" : "normal"} onClick={(e) => handleCheckRestaurant(e)}
               id={item.idRestaurant} key={item.idRestaurant}>{item.nameRestaurant}</p>)
  })
  return (
    <div className={"shops"}>
      <div className={"containerRestaurants"}>Shops:
        {listRestaurants}
      </div>
      <div className={"containerProducts"}>
        {nameRestaurant}
        <div className={"wrapProducts"}>
          {products && products.map(item => <CardProduct idRestaurant={idRestaurant} {...item} />)}

         {/*{products && products.map(item => <CardProduct key={item.id} id={item.id}*/}
         {/*                                               src={require(`../assets/${item.image}`)} alt={item.title}*/}
         {/*                                               name={item.title} title={item.description}*/}
         {/*                                              price={item.price} {...item}/>)}*/}
        </div>

      </div>
    </div>
  );
};

export default ShopsPage;