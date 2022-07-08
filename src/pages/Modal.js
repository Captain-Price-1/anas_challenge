import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/";
import {
  increase,
  decrease,
  removeItem,
  reset,
} from "../cartReducer/cartSlice";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
// import { FaTimes } from "react-icons/fa";

const Modal = ({
  isModalOpen,
  setIsModal,
  closeModal,
  tempCart,
  setTempCart,
}) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => {
    return store.cart;
  });

  //   const [total, setTotal] = useState(0);

  tempCart.map((item) => {
    if (item.amount === 1) {
      item = { ...item, amount: item.amount + 1 };
    }
    return item;
  });
  var total = 0;
  const getTotals = () => {
    console.log("get totals is runnnig");
    let anyvalue = tempCart.map((item) => {
      if (item.cost !== 0) {
        total = total + item.cost;
        console.log(total);
      }
      return;
    });
  };

  const increaseAll = (tempCart) => {
    let temp = tempCart.map((item) => {
      if (item.amount === 0) {
        item = { ...item, amount: item.amount + 1 };
      }
      return { ...item };
    });
    setTempCart(temp);
  };

  const removeItems = (id) => {
    let temp;
    temp = tempCart.filter((item) => item.id !== id);
    setTempCart(temp);
  };

  const increaseItem = (id) => {
    let temp = tempCart.map((item) => {
      if (item.id === id) {
        item = {
          ...item,
          amount: item.amount + 1,
        };
      }

      return { ...item, cost: item.amount * item.price };
    });
    setTempCart(temp);
  };

  const decreaseItem = (id) => {
    let temp = tempCart.map((item) => {
      if (item.amount === 0) {
        removeItem(id);
      }
      if (item.id === id) {
        item = {
          ...item,
          amount: item.amount - 1,
        };
      }

      return { ...item, cost: item.amount * item.price };
    });
    setTempCart(temp);
  };
  useEffect(() => {
    console.log(tempCart, "useEffect tempkart");
    // setTempCart(temps);
    let temps = tempCart.filter((item) => item.amount !== 0);
    console.log(temps, "temps");
    setTempCart(temps);
  }, [cartItems]);

  useEffect(() => {
    getTotals();
  }, [cartItems]);

  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
        {tempCart.map((item) => {
          total = total + item.price * item.amount;
          const { id, name, price, amount, cost, img } = item;
          return (
            <div className="cart-item">
              <img src={img} />
              <div>
                <h4>{name}</h4>
                <h4 className="item-price">₹{price}</h4>
                <button
                  className="remove-btn"
                  onClick={() => {
                    dispatch(reset(id));
                    removeItems(id);
                  }}
                >
                  Remove
                </button>
              </div>
              <div>
                <button
                  className="amount-btn"
                  onClick={() => {
                    dispatch(increase({ id }));
                    increaseItem(id);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
                  </svg>
                </button>
                <p className="amount">{amount}</p>
                <button
                  className="amount-btn"
                  onClick={() => {
                    // if (amount === 1) {
                    //   dispatch(removeItem(id));
                    //   return;
                    // } else {
                    //   return dispatch(decrease({ id }));
                    // }
                    dispatch(decrease({ id }));
                    decreaseItem(id);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
        <div className="cart-total">
          <Link to="/checkout" className="checkout-cart">
            Checkout
          </Link>
          <h4>
            Total <span className="span-total">₹{total}</span>
          </h4>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Modal;
