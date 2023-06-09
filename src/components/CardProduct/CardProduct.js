import styles from "./CardProduct.module.scss"

const CardProduct = (props) => {

  const {description, idProduct, image, price, title, idRestaurant} = props;

  const imageSrc = require(`../../assets/${image}`);
  const userOrder = [{
    "idRestaurant": idRestaurant,
    "idProduct": idProduct,
    "price": price,
    "quantity": 1,
  }];

  const putToCart = () => {
    const userOrderAppDelivery = localStorage.getItem("userOrderAppDelivery");

    if (!userOrderAppDelivery) {
      localStorage.setItem("userOrderAppDelivery", JSON.stringify(userOrder));
      const test5 = localStorage.getItem("userOrderAppDelivery");
      console.log(JSON.parse(test5))
      return;
    }

    const allProductOfUserOrder = JSON.parse(userOrderAppDelivery);
    let presentProductOfOrder = false;

    allProductOfUserOrder.forEach(item => {
      if (item.idRestaurant === idRestaurant && item.idProduct === idProduct) {
        item.quantity += 1;
        presentProductOfOrder = true;
        localStorage.setItem("userOrderAppDelivery", JSON.stringify(allProductOfUserOrder));
      }
    });

    if (!presentProductOfOrder) {
      const margeOfProduct = allProductOfUserOrder.concat(userOrder);
      localStorage.setItem("userOrderAppDelivery", JSON.stringify(margeOfProduct));
    }

    const test1 = localStorage.getItem("userOrderAppDelivery");
    console.log(JSON.parse(test1))
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


          <button onClick={() => putToCart()} className={styles.btnAddCart}>{"Add to Cart"}</button>
        </div>

      </div>
    </div>
  )
};

export default CardProduct;