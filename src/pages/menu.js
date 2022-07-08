import React, { useState } from "react";
import data from "../data";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/";
import {
  increase,
  decrease,
  removeItem,
  reset,
} from "../cartReducer/cartSlice";
import Modal from "./Modal";
import { useEffect } from "react";
const Menu = ({ isModalOpen, setIsModal }) => {
  const dispatch = useDispatch();
  // const [items, setItems] = useState(data);
  const { cartItems, distinctItems } = useSelector((store) => {
    return store.cart;
  });
  const [tempCart, setTempCart] = useState(cartItems);

  const closeModal = () => {
    setIsModal(false);
  };
  console.log(isModalOpen);

  console.log(tempCart, "tempKART");

  return (
    <article className="main-menu-container">
      <section className="main-menu">
        <Modal
          tempCart={tempCart}
          setTempCart={setTempCart}
          isModalOpen={isModalOpen}
          setIsModal={setIsModal}
          closeModal={closeModal}
        />
        {cartItems.map((item) => {
          const { id, name, price, amount, total, cost, img } = item;
          return (
            <div className="single-item" key={id}>
              <img src={img} alt="" />
              <div className="container-name-price">
                <div className="name-price">
                  <h1>{name}</h1>
                  <p>Price: {price}</p>
                  <p className={`total ${amount === 0 && "hidden"}`}>
                    Total :{amount}
                  </p>
                  <p className={`total ${amount === 0 && "hidden"}`}>
                    Cost (INR) :{cost}
                  </p>
                </div>
                <div className="buttons-div">
                  <button
                    className="increase-btn"
                    onClick={() => {
                      dispatch(increase({ id }));
                      setTempCart(
                        cartItems.map((item) => {
                          if (item.id === id) {
                            return { ...item, amount: item.amount + 1 };
                          }
                          if (item.id === id && item.amount === 0) {
                            return;
                          }
                          return { ...item };
                        })
                      );
                    }}
                  >
                    +
                  </button>
                  <button
                    className={`decrease-btn ${amount === 0 && "greyed-out"}`}
                    onClick={() => {
                      if (amount <= 1) {
                        dispatch(reset(id));
                        return;
                      }
                      dispatch(decrease({ id }));
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      {distinctItems >= 1 && (
        <button onClick={() => setIsModal(true)} className="save-checkout">
          save and checkout
        </button>
      )}
    </article>
  );
};

export default Menu;
