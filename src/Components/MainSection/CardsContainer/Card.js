import React from "react";
import style from "../../../Styles/MainSection.module.css";
export default function Card({item}) {
  console.log(item);
  return <div className={style.Card}>
    <div className={style.image}>
      <img src={item.imageURL}></img>
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
