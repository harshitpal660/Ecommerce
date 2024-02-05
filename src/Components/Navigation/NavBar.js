import React from "react";
import icon from "../../Images/Icon.png";
import cart from "../../Images/cart.png";
import account from "../../Images/account.png";
import style from "../../Styles/Navbar.module.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <div>
        <div className={style.navWrapper}>
          <Link to="/">
            <div className={style.logoAndNameContainer}>
              <div className={style.iconWrapper}>
                <img src={icon} alt="icon"></img>
              </div>
              <div className={style.brandName}>Trex Store</div>
            </div>
          </Link>

          <div className={style.cartWrapper}>
            <div className={style.cart}>
              <Link to="/cart">
                <img src={cart} alt="cart"></img>
                <div>2</div>
              </Link>
            </div>
          </div>

          <div className={style.profile}>
            <img src={account} alt="account"></img>
          </div>
        </div>
      </div>
    </>
  );
}
