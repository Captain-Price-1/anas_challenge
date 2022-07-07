import React, { useState } from "react";
import data from "../data";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/";
import { increase, decrease, removeItem } from "../cartReducer/cartSlice";
const Menu = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState(data);
  const { cartItems, distinctItems } = useSelector((store) => {
    return store.cart;
  });
  return (
    <article className="main-menu-container">
      <section className="main-menu">
        {cartItems.map((item) => {
          const { id, name, price, amount, total, cost, img } = item;
          console.log(item);
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
                    }}
                  >
                    +
                  </button>
                  <button
                    className={`decrease-btn ${amount === 0 && "greyed-out"}`}
                    onClick={() => {
                      if (amount <= 1) {
                        dispatch(removeItem(id));
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
        <Link to="/checkout" className="save-checkout">
          save and checkout
        </Link>
      )}
    </article>
  );
};

export default Menu;
