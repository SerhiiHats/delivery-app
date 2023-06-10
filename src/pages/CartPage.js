import React from 'react';
import style from "./CartPage.module.scss"
import useInput from "../components/hooks/useInput";



const CartPage = () => {

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


      <div className={style.cart}>

      </div>

    </div>)
    ;
};

export default CartPage;