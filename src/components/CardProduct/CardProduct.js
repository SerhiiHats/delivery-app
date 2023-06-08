import React, {useState} from 'react';
import styles from "./CardProduct.module.scss"

const CardProduct = (props) => {
  const [quantity, setQuantity] = useState(0);

  const {description, idProduct, image, price, title, idRestaurant} = props;

  console.log(idRestaurant)
  console.log(props)

  const imageSrc= require(`../../assets/${image}`);

  const putToCart = () =>{
    console.log("put : ")
    setQuantity(quantity + 1);
  }

  return (
    <div className={styles.cardProduct} id={idProduct} key={idProduct}>
      <div className={styles.wrapImage}>
        <img src={imageSrc} alt={title} title={description}/>
        <h2 className={styles.titleProduct}>{title}</h2>
        <div className={styles.wrapBtnAddCart}>
          <p className={styles.wrapPrice}><span>{price}</span><span> грн.</span></p>
          <button onClick={putToCart} className={quantity ? `${styles.btnAddCart} ${styles.btnInCart}`
            : `${styles.btnAddCart}`}>
            {quantity ? "In the Cart" : "Add to Cart"}</button>
        </div>

      </div>
    </div>
  );
};

export default CardProduct;