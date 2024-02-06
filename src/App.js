import "./App.css";
import { MyContextProvider } from "./Context/MyContext";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Checkout from "./Pages/Checkout";
import CartPage from "./Pages/CartPage";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from "react-notifications";
function App() {
  // const contextValue = { cartItems: [] };
  const [cartVisited, setCartVisited] = useState(false);
  return (
    <MyContextProvider>
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
      <NotificationContainer/>

    </MyContextProvider>
  );
}

export default App;
