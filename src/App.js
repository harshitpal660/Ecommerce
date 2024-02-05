import "./App.css";
import MyContext from "./Context/MyContext";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Checkout from "./Pages/Checkout";
import CartPage from "./Pages/CartPage";

function App() {
  const contextValue = { cartItems: [] };
  const [cartVisited, setCartVisited] = useState(false);

  return (
    <MyContext.Provider value={contextValue}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/Cart"
              element={<CartPage setCartVisited={() => setCartVisited(true)} />}
            />
            {cartVisited ? (
              <Route path="/Checkout" element={<Checkout />} />
            ) : (
              // Redirect to HomePage if cart is not visited
              <Route path="/*" element={<HomePage />} />
            )}
          </Routes>
        </Router>
      </div>
    </MyContext.Provider>
  );
}

export default App;
