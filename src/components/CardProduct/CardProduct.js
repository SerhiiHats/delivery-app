import React, {useState} from 'react';
import styles from "./CardProduct.module.scss"

const CardProduct = (props) => {
  // const [quantity, setQuantity] = useState(0);

  const {description, idProduct, image, price, title, idRestaurant} = props;

  // console.log(idRestaurant)
  // console.log(props)

  const imageSrc = require(`../../assets/${image}`);
  const userOrder = [{
    "idRestaurant": idRestaurant,
    "idProduct": idProduct,
    "price": price,
    "quantity": 1,
  }];

  const putToCart = () => {
    const userOrderAppDelivery = localStorage.getItem("userOrderAppDelivery");

    console.log(userOrderAppDelivery)

    if (!userOrderAppDelivery) {
      localStorage.setItem("userOrderAppDelivery", JSON.stringify(userOrder));
      return;
    }


    if (userOrderAppDelivery) {
      const allUserOrder = JSON.parse(userOrderAppDelivery);
      console.log(allUserOrder)

      const allProducts = allUserOrder.filter(item => item.idRestaurant === idProduct);
      console.log(allProducts)

      const isExist =allProducts.find(item => item.idProduct === idProduct);
      console.log(isExist)

      if(isExist){
        allProducts.forEach(item => {

          if (item.idProduct === idProduct){
            item.quantity = item.quantity + 1;
          }

        });

        localStorage.setItem(userOrderAppDelivery)
      }else {

        localStorage.setItem("userOrderAppDelivery", JSON.stringify())
      }


      console.log(isExist);




      console.log(allProducts)





    }

    // setQuantity(quantity + 1);
    userOrder.forEach(elem => {
      console.log("idRestaurant: " + elem.idRestaurant)
      console.log("idProduct: " + elem.idProduct)
      console.log("price: " + elem.price)
      console.log("quantity: " + elem.quantity)
    })

  }

  return (
    <div className={styles.cardProduct} id={idProduct} key={idProduct}>
      <div className={styles.wrapImage}>
        <img src={imageSrc} alt={title} title={description}/>
        <h2 className={styles.titleProduct}>{title}</h2>
        <div className={styles.wrapBtnAddCart}>
          <p className={styles.wrapPrice}><span>{price}</span><span> грн.</span></p>
          {/*<button onClick={putToCart} className={quantity ? `${styles.btnAddCart} ${styles.btnInCart}`*/}
          {/*  : `${styles.btnAddCart}`}>*/}
          {/*  {quantity ? "In the Cart" : "Add to Cart"}<span className={quantity ? `${styles.quantity}`*/}
          {/*  : `${styles.quantityHidden}`}>{quantity}</span></button>*/}

          {/*<button onClick={putToCart} className={quantity ? `${styles.btnAddCart} ${styles.btnInCart}`*/}
          {/*  : `${styles.btnAddCart}`}>{quantity ? "In the Cart" : "Add to Cart"}</button>*/}


          <button onClick={putToCart} className={styles.btnAddCart}>{"Add to Cart"}</button>
        </div>

      </div>
    </div>
  );
};

export default CardProduct;