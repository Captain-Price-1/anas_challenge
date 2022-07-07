import React from "react";
import { Link } from "react-router-dom";
// import { BiRestaurant } from "react-icons/fa";
import { Logo, CartIcon } from "./icons";
import { useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { dist } from "../cartReducer/cartSlice";
const Navbar = () => {
  const { cartItems } = useSelector((store) => {
    return store.cart;
  });
  const { distinctItems } = useSelector((store) => {
    return store.cart;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dist());
  }, [cartItems]);
  const user = false;
  return (
    <nav>
      <section className="header">
        <div className="heading-logo">
          <Logo className="logo" />
          <h1>Food's Restaurant</h1>
        </div>
        <div className={`cart ${distinctItems === 0 && "hidden"}`}>
          <CartIcon />
          <div>
            <span className="cart-span">{distinctItems}</span>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
