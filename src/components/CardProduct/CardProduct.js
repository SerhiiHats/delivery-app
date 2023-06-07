import React from 'react';
import styles from "./CardProduct.module.scss"

const CardProduct = (props) => {

  const {key, id, src, alt, title} = props;

  return (
    <div className={styles.cardProduct} id={id}  key={key}>
      <div className={styles.wrapImage}>
        <img src={src} alt={alt} title={title}/>
        <h2 className={styles.titleProduct}>{title}</h2>
      </div>
    </div>
  );
};

export default CardProduct;