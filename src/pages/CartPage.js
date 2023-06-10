import React, {useEffect, useState} from 'react';
import style from "./CartPage.module.scss"
import useInput from "../components/hooks/useInput";
import constBd from "../utils/constBd";


const CartPage = () => {
  const userOrderAppDelivery = JSON.parse(localStorage.getItem("userOrderAppDelivery"));

  const [order, setOrder] = useState(userOrderAppDelivery || []);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    let tempProducts = [];
    // console.log(userOrderAppDelivery)
    // console.log(order)
    order.forEach(element => {
      console.log(element)

      const restaurant = constBd.filter(item => item.idRestaurant === element.idRestaurant);
      // console.log(restaurant[0].product);
      const product = restaurant[0].product.filter(prod => prod.idProduct === element.idProduct);
      console.log(product[0].image);
      element.image = product[0].image;
      element.title = product[0].title;

      tempProducts.push(element);
    })

    console.log(tempProducts);
    setProducts(tempProducts);
  }, [order])

  const inputName = useInput("");
  const inputEmail = useInput("");
  const inputPhone = useInput("");
  const inputAddress = useInput("");

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
          {/*Cart is empty*/}
          {
            products && products.map(product=>{
              return(
                  <div key={product.idProduct} className={style.wrapProduct}>
                    <div className={style.wrapImg}>
                      <img src={require(`../assets/${product.image}`)} alt={product.title} title={product.description}/>
                    </div>
                    <div className={style.wrapDescriptionProduct}>
                      <p className={style.titleProduct}>{product.title}</p>
                      <p className={style.priceProduct}>{product.price}</p>
                      <div className={style.wrapTotalPrice}>
                        <span className={style.wrapButton}><button>-</button>{product.quantity}<button>+</button></span>
                        <span>{Math.round(product.price * product.quantity * 100) / 100 }</span></div>
                    </div>
                  </div>
                )

              }
            )

          }


          {/*<div className={style.wrapProduct}>*/}
          {/*  <div className={style.wrapImg}>*/}
          {/*    <img src={require(`../assets/img/best_sushi/black.jpg`)} alt={"test"} title={"test2"}/>*/}
          {/*  </div>*/}
          {/*  <div className={style.wrapDescriptionProduct}>*/}
          {/*    <p className={style.titleProduct}>title</p>*/}
          {/*    <p className={style.priceProduct}>price</p>*/}
          {/*    <div className={style.wrapTotalPrice}>*/}
          {/*      <span className={style.wrapButton}><button>-</button> 1 <button>+</button></span>*/}
          {/*      <span>totalPrice</span></div>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className={style.wrapProduct}>*/}
          {/*  <div className={style.wrapImg}>*/}
          {/*    <img src={require(`../assets/img/best_sushi/nisuaz.jpg`)} alt={"test"} title={"test2"}/>*/}
          {/*  </div>*/}
          {/*  <div className={style.wrapDescriptionProduct}>*/}
          {/*    <p className={style.titleProduct}>title</p>*/}
          {/*    <p className={style.priceProduct}>price</p>*/}
          {/*    <div className={style.wrapTotalPrice}>*/}
          {/*      <span className={style.wrapButton}><button>-</button> 1 <button>+</button></span>*/}
          {/*      <span>totalPrice</span></div>*/}
          {/*  </div>*/}
          {/*</div>*/}


          {/*<div className={style.wrapProduct}>*/}
          {/*  <div className={style.wrapImg}>*/}
          {/*    <img src={require(`../assets/img/best_sushi/fresh.jpg`)} alt={"test"} title={"test2"}/>*/}
          {/*  </div>*/}
          {/*  <div className={style.wrapDescriptionProduct}>*/}
          {/*    <p className={style.titleProduct}>title</p>*/}
          {/*    <p className={style.priceProduct}>price</p>*/}
          {/*    <div className={style.wrapTotalPrice}>*/}
          {/*      <span className={style.wrapButton}><button>-</button> 1 <button>+</button></span>*/}
          {/*      <span>totalPrice</span></div>*/}
          {/*  </div>*/}
          {/*</div>*/}

        </div>
        <div className={style.wrapBtn}>
          <p>Total price: <span>999</span> грн.</p>
          <button>Submit</button>
        </div>
      </div>

    </div>)
    ;
};

export default CartPage;