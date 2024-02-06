// MyContext.js
import React, { createContext, useState, useEffect } from 'react';

const MyContext = createContext();
// localStorage.removeItem("cartItems")
const MyContextProvider = ({ children }) => {
  // Load cartItems from local storage on initial render
  const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  const [contextValue, setContextValue] = useState({
    cartItems: initialCartItems,
    addToCart: newItem => {
      setContextValue(prevValue => {
        // Check if newItem already exists in cartItems
        const isDuplicate = prevValue.cartItems.some(item => item.id === newItem.id);

        if (isDuplicate) {
          // If duplicate, do not add the item again
          return prevValue;
        }

        // If not a duplicate, add the item to the cart
        const updatedCart = [...prevValue.cartItems, newItem];
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        return { ...prevValue, cartItems: updatedCart };
      });
    },
  });

  // Update local storage whenever cartItems change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(contextValue.cartItems));
  }, [contextValue.cartItems]);

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContextProvider, MyContext };
