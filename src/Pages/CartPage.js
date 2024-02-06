import React from "react";
import CartContainer from "../Components/Cart/Cart";
import NavBar from "../Components/Navigation/NavBar";
import SearchBar from "../Components/Navigation/SearchBar";
export default function CartPage() {
  return (
    <>
      <div>
        <div style={{ position: "fixed", top: 0, width: "100%" }}>
          <NavBar />
          <SearchBar />
        </div>
        <div style={{marginTop:"10rem"}}>
          <CartContainer />
        </div>
      </div>
    </>
  );
}
