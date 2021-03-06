import React, { useEffect } from "react";
import { Logo, CartIcon } from "./icons";
import { useSelector, useDispatch } from "react-redux/";
import { dist } from "../cartReducer/cartSlice";
const Navbar = ({ isModalOpen, setIsModal, cart, hideCart }) => {
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
        {cart && (
          <button
            onClick={() => setIsModal(true)}
            className={`cart ${distinctItems === 0 && "hidden"}`}
          >
            <CartIcon />
            <div>
              <span className="cart-span">{distinctItems}</span>
            </div>
          </button>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
