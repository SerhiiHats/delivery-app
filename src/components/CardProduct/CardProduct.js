import React from 'react';
import styles from "./CardProduct.module.scss"

const CardProduct = (props) => {

  const {key, id, src, alt, title, name, price} = props;

  return (
    <div className={styles.cardProduct} id={id}  key={key}>
      <div className={styles.wrapImage}>
        <img src={src} alt={alt} title={title}/>
        <h2 className={styles.titleProduct}>{name}</h2>
        <div className={styles.wrapBtnAddCart}>
          <p><span>{price}</span><span> грн.</span></p>
          <button className={styles.btnAddCart}>Add to Cart</button>
        </div>

      </div>
    </div>
  );
};

export default CardProduct;