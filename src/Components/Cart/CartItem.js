// CartItems.js
import React from "react";
import del from "../../Images/delete.png"
import styles from "../../Styles/Cart.module.css"; 

export const CartItem = ({ item }) => {
  console.log(item);

  // Generate dynamic options based on numberOfOptions prop
  const options = [];
  for (let i = 1; i <= item.quantity; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return (
    <div className={styles.cartItems}>
      <div>
        <input type="checkbox"></input>
      </div>
      <div className={styles.imageWrapper}></div>
      <div className={styles.info}>
        <div>{item.name}</div>
        <div>{item.price}</div>
        <div>
          <select id={styles.qty}>
            {options}
          </select>
        </div>
      </div>
      <div className={styles.delete}>
      <img src={del} alt="delete"></img>
      </div>
    </div>
  );
};
