import React from "react";
import { useContext } from "react";
import style from "../../../Styles/MainSection.module.css";
import MyContext from "../../../Context/MyContext";
export default function Card({item}) {
  console.log(item);
  const contextValue = useContext(MyContext);
  console.log(contextValue);
  return <div className={style.Card}>
    <div className={style.image}>
      <img src={item.imageURL} alt={style.title}></img>
    </div>
    <div className={style.title}>
      {item.name}
    </div>
    <div className={style.price}>
      {item.price} Rs.
    </div>
    <div className={style.actions}>
      <div className={style.qty}>
        Stock:{item.quantity}
      </div>
      <div className={style.addToCart}> 
        <div>Add to Cart</div>
      </div>
    </div>
  </div>;
}
