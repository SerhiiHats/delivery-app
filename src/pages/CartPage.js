import React, {useEffect, useState} from 'react';
import style from "./CartPage.module.scss"
import useInput from "../components/hooks/useInput";
import constBd from "../utils/constBd";
import {useDispatch} from "react-redux";
import {setCountAC} from "../components/CardProduct/countAction";

const CartPage = () => {
  const userOrderAppDelivery = JSON.parse(localStorage.getItem("userOrderAppDelivery"));

  const dispatch = useDispatch();

  const [order, setOrder] = useState(userOrderAppDelivery || []);
  const [products, setProducts] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let tempProducts = [];
    let tempTotalPrice = 0;
    order.forEach(element => {
      tempTotalPrice += element.price * element.quantity;
      const restaurant = constBd.filter(item => item.idRestaurant === element.idRestaurant);
      const product = restaurant[0].product.filter(prod => prod.idProduct === element.idProduct);

      tempProducts.push(element);
      tempProducts[tempProducts.length - 1].image = product[0].image;
      tempProducts[tempProducts.length - 1].title = product[0].title;
    })

    setProducts(tempProducts);
    setTotalPrice(Math.round(tempTotalPrice * 100) / 100);
  }, [order])

  const inputName = useInput("");
  const inputEmail = useInput("");
  const inputPhone = useInput("");
  const inputAddress = useInput("");

  const handleCountProduct = (id, count, k) => {

    if (count === 1 && k === -1) {
      const tempProducts = order.filter(product => product.idProduct !== id);
      localStorage.setItem("userOrderAppDelivery", JSON.stringify(tempProducts));
      setOrder(JSON.parse(localStorage.getItem("userOrderAppDelivery")));
      dispatch(setCountAC(id, k));
      return
    }


    const tempProducts = order.map(product => {
      if (product.idProduct === id) {
        return {...product, quantity: product.quantity + k}
      } else return product;
    })
    localStorage.setItem("userOrderAppDelivery", JSON.stringify(tempProducts));
    setOrder(JSON.parse(localStorage.getItem("userOrderAppDelivery")));
    dispatch(setCountAC(id, k));
  }

  return (
    <div className={style.wrapCart}>
      <div className={style.containerForm}>
        <form id={"formAuth"} className={style.form}>

          <label>Name:
            <input type={"text"} {...inputName}/>
          </label>

          <label>Email:
            <input type={"text"} {...inputEmail}/>
          </label>

          <label>Phone:
            <input type={"text"} {...inputPhone}/>
          </label>

          <label> Address:
            <input type={"text"} {...inputAddress}/>
          </label>

        </form>

        {/*<p>{JSON.stringify(requestForm) === "false" ? "No request" : JSON.stringify(requestForm)}</p>*/
        }
      </div>


      <div className={style.containerCart}>
        <div className={style.cart}>
          {order.length === 0 ? <p className={style.emptyCart}>Cart is empty</p>
            : products && products.map(product => {
            return (
              <div key={product.idProduct} className={style.wrapProduct}>
                <div className={style.wrapImg}>
                  <img src={require(`../assets/${product.image}`)} alt={product.title} title={product.description}/>
                </div>
                <div className={style.wrapDescriptionProduct}>
                  <p className={style.titleProduct}>{product.title}</p>
                  <p className={style.priceProduct}>price: {product.price} грн.</p>
                  <div className={style.wrapTotalPrice}>
                        <span className={style.wrapButton}>
                          <button onClick={() => handleCountProduct(product.idProduct, product.quantity, -1)}
                                  className={style.btnCount}>-</button>
                          <span className={style.quantity}>
                            {product.quantity}
                          </span>
                          <button onClick={() => handleCountProduct(product.idProduct, product.quantity, +1)}
                                  className={style.btnCount}>+</button></span>
                    <span
                      className={style.totalPrice}>{Math.round(product.price * product.quantity * 100) / 100} грн.</span>
                  </div>
                </div>
              </div>)
          })}

        </div>
        <div className={style.wrapBtn}>
          <p>Total price: <span>{totalPrice}</span> грн.</p>
          <button>Submit</button>
        </div>
      </div>

    </div>);
};

export default CartPage;