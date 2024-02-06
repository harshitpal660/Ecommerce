// CartContainer.js
import React from 'react';
import { CartItem } from './CartItem';
import styles from '../../Styles/Cart.module.css';
import { MyContext } from '../../Context/MyContext';
import { useContext } from 'react';

const CartContainer = () => {
  const { cartItems } = useContext(MyContext);
  console.log(cartItems);
  return (
    <div className={styles.cartContainer}>
      {cartItems.map((item)=>{
        return <CartItem item={item}/>
      })}
    </div>
  );
};

export default CartContainer;
